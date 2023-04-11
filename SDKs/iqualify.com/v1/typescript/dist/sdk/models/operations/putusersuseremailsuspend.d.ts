import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUsersUserEmailSuspendRequest extends SpeakeasyBase {
    suspendedRequest: shared.SuspendedRequest;
    /**
     * user's email
     */
    userEmail: string;
}
export declare class PutUsersUserEmailSuspendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
