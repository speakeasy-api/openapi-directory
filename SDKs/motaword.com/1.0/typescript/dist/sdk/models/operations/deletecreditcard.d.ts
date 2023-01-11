import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCreditCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class DeleteCreditCardRequest extends SpeakeasyBase {
    pathParams: DeleteCreditCardPathParams;
}
export declare class DeleteCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
