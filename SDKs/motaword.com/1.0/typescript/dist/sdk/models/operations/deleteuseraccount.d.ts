import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUserAccountPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class DeleteUserAccountRequest extends SpeakeasyBase {
    pathParams: DeleteUserAccountPathParams;
}
export declare class DeleteUserAccountResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
