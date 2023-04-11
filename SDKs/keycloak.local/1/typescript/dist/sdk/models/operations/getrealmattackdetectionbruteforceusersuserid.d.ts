import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    userId: string;
}
export declare class GetRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    getRealmAttackDetectionBruteForceUsersUserId2XXApplicationJSONObject?: Record<string, any>;
}
