import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { TextRecognitionResult } from "./textrecognitionresult";
/**
 * OCR result of the read operation.
 */
export declare class ReadOperationResult extends SpeakeasyBase {
    /**
     * An array of text recognition result of the read operation.
     */
    recognitionResults?: TextRecognitionResult[];
    /**
     * Status code of the text operation.
     */
    status?: OperationStatusEnum;
}
