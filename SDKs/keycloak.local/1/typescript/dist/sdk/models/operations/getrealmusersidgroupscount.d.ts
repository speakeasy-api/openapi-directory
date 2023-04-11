import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmUsersIdGroupsCountRequest extends SpeakeasyBase {
    /**
     * User id
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
    search?: string;
}
export declare class GetRealmUsersIdGroupsCountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmUsersIdGroupsCount2XXApplicationJSONObject?: Record<string, any>;
}
