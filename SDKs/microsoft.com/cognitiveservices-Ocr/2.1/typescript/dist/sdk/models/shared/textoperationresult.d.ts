import { SpeakeasyBase } from "../../../internal/utils";
import { OperationStatusEnum } from "./operationstatusenum";
import { TextRecognitionResult } from "./textrecognitionresult";
/**
 * Result of recognition text operation.
 */
export declare class TextOperationResult extends SpeakeasyBase {
    /**
     * An object representing a recognized text region
     */
    recognitionResult?: TextRecognitionResult;
    /**
     * Status code of the text operation.
     */
    status?: OperationStatusEnum;
}
