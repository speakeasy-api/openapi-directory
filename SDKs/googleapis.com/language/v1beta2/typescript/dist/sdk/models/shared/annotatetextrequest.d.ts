import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
import { Features } from "./features";
/**
 * The encoding type used by the API to calculate offsets.
 */
export declare enum AnnotateTextRequestEncodingTypeEnum {
    None = "NONE",
    Utf8 = "UTF8",
    Utf16 = "UTF16",
    Utf32 = "UTF32"
}
/**
 * The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call.
 */
export declare class AnnotateTextRequest extends SpeakeasyBase {
    /**
     * Represents the input to API methods.
     */
    document?: Document;
    /**
     * The encoding type used by the API to calculate offsets.
     */
    encodingType?: AnnotateTextRequestEncodingTypeEnum;
    /**
     * All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 11
     */
    features?: Features;
}
