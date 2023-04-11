import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an output piece of text.
 */
export declare class TextSpan extends SpeakeasyBase {
    /**
     * The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
     */
    beginOffset?: number;
    /**
     * The content of the output text.
     */
    content?: string;
}
