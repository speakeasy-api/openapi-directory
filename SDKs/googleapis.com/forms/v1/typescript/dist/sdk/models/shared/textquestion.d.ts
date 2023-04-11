import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A text-based question.
 */
export declare class TextQuestion extends SpeakeasyBase {
    /**
     * Whether the question is a paragraph question or not. If not, the question is a short text question.
     */
    paragraph?: boolean;
}
