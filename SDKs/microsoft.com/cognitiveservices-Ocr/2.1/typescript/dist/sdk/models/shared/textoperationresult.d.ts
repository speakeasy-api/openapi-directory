import { SpeakeasyBase } from "../../../internal/utils";
import { TextRecognitionResult } from "./textrecognitionresult";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * Result of recognition text operation.
**/
export declare class TextOperationResult extends SpeakeasyBase {
    recognitionResult?: TextRecognitionResult;
    status?: OperationStatusEnum;
}
