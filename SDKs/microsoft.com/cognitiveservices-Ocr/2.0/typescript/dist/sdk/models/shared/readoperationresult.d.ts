import { SpeakeasyBase } from "../../../internal/utils";
import { TextRecognitionResult } from "./textrecognitionresult";
import { OperationStatusEnum } from "./operationstatusenum";
/**
 * OCR result of the read operation.
**/
export declare class ReadOperationResult extends SpeakeasyBase {
    recognitionResults?: TextRecognitionResult[];
    status?: OperationStatusEnum;
}
