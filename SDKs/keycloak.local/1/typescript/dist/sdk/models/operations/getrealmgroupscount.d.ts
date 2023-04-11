import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmGroupsCountRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    search?: string;
    top?: boolean;
}
export declare class GetRealmGroupsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmGroupsCount2XXApplicationJSONObject?: Record<string, any>;
}
