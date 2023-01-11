import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePasswordRequest extends SpeakeasyBase {
    request?: shared.PasswordUpdateContent;
}
export declare class UpdatePasswordResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
