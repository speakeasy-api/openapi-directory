import { SpeakeasyBase } from "../../../internal/utils";
import { OCRResult } from "./ocrresult";
/**
 * OCR Result
 */
export declare class OCRPredictResponse extends SpeakeasyBase {
    object?: string;
    probabilities?: OCRResult[];
    /**
     * Same value as request parameter. Returned only if the sampleId request parameter is provided.
     */
    sampleId?: string;
    /**
     * Same value as request parameter. Returns text if the request parameter isn't supplied.
     */
    task?: string;
}
