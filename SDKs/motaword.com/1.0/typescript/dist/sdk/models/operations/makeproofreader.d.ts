import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MakeProofreaderResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    operationStatus?: shared.OperationStatus;
    statusCode: number;
}
