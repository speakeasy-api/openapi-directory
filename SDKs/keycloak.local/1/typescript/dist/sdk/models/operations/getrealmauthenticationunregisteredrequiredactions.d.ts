import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAuthenticationUnregisteredRequiredActionsRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class GetRealmAuthenticationUnregisteredRequiredActionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmAuthenticationUnregisteredRequiredActions2XXApplicationJSONObjects?: Record<string, any>[];
}
