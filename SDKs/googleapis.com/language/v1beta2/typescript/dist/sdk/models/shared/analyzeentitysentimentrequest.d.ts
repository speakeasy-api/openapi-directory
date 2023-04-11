import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The encoding type used by the API to calculate offsets.
 */
export declare enum AnalyzeEntitySentimentRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The entity-level sentiment analysis request message.
 */
export declare class AnalyzeEntitySentimentRequest extends SpeakeasyBase {
    /**
     * Represents the input to API methods.
     */
    document?: Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: AnalyzeEntitySentimentRequestEncodingTypeEnum;
}
