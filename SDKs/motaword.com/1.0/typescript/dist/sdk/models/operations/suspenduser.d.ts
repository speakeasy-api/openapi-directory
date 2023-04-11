import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuspendUserSecurity extends SpeakeasyBase {
    mwoAuth: string;
}
export declare class SuspendUserRequest extends SpeakeasyBase {
    suspendUserRequest?: shared.SuspendUserRequest;
    /**
     * User ID
     */
    userId: number;
}
export declare class SuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * UserNotFound
     */
    error?: shared.ErrorT;
    /**
     * Suspended user account.
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
