import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FreezeUserAccountPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class FreezeUserAccountRequest extends SpeakeasyBase {
    pathParams: FreezeUserAccountPathParams;
}
export declare class FreezeUserAccountResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
