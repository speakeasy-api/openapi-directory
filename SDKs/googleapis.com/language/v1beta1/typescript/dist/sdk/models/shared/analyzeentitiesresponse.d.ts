import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * The entity analysis response message.
 */
export declare class AnalyzeEntitiesResponse extends SpeakeasyBase {
    /**
     * The recognized entities in the input document.
     */
    entities?: Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string;
}
