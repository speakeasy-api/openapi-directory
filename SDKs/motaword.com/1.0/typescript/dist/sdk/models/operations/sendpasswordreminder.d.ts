import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendPasswordReminderRequest extends SpeakeasyBase {
    request?: shared.Email;
}
export declare class SendPasswordReminderResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
