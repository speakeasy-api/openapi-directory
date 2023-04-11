import { SpeakeasyBase } from "../../../internal/utils";
export declare class DetectionsResource extends SpeakeasyBase {
    /**
     * The confidence of the detection result of this language.
     */
    confidence?: number;
    /**
     * A boolean to indicate is the language detection result reliable.
     */
    isReliable?: boolean;
    /**
     * The language we detected.
     */
    language?: string;
}
