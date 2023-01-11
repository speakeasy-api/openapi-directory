import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnfreezeUserAccountPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class UnfreezeUserAccountRequest extends SpeakeasyBase {
    pathParams: UnfreezeUserAccountPathParams;
}
export declare class UnfreezeUserAccountResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
