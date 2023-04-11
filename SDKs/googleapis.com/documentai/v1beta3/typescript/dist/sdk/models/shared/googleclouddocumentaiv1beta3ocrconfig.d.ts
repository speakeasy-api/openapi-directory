import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3OcrConfigHints } from "./googleclouddocumentaiv1beta3ocrconfighints";
/**
 * Config for Document OCR.
 */
export declare class GoogleCloudDocumentaiV1beta3OcrConfig extends SpeakeasyBase {
    /**
     * A list of advanced OCR options to further fine-tune OCR behavior. Current valid values are: - "legacy_layout": a heuristics layout detection algorithm, which serves as an alternative to the current ML-based layout detection algorithm. Customers can choose the best suitable layout algorithm based on their situation.
     */
    advancedOcrOptions?: string[];
    /**
     * Enables intelligent document quality scores after OCR. Can help with diagnosing why OCR responses are of poor quality for a given input. Adds additional latency comparable to regular OCR to the process call.
     */
    enableImageQualityScores?: boolean;
    /**
     * Enables special handling for PDFs with existing text information. Results in better text extraction quality in such PDF inputs.
     */
    enableNativePdfParsing?: boolean;
    /**
     * Includes symbol level OCR information if set to true.
     */
    enableSymbol?: boolean;
    /**
     * Hints for OCR Engine
     */
    hints?: GoogleCloudDocumentaiV1beta3OcrConfigHints;
}
