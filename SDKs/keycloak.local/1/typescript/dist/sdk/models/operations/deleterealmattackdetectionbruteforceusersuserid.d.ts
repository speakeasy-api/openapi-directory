import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteRealmAttackDetectionBruteForceUsersUserIdRequest extends SpeakeasyBase {
    /**
     * realm name (not id!)
     */
    realm: string;
    userId: string;
}
export declare class DeleteRealmAttackDetectionBruteForceUsersUserIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
