import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The encoding type used by the API to calculate sentence offsets for the sentence sentiment.
 */
export declare enum AnalyzeSentimentRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The sentiment analysis request message.
 */
export declare class AnalyzeSentimentRequest extends SpeakeasyBase {
    /**
     * Represents the input to API methods.
     */
    document?: Document;
    /**
     * The encoding type used by the API to calculate sentence offsets for the sentence sentiment.
     */
    encodingType?: AnalyzeSentimentRequestEncodingTypeEnum;
}
