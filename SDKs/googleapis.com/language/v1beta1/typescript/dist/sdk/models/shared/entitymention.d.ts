import { SpeakeasyBase } from "../../../internal/utils";
import { TextSpan } from "./textspan";
/**
 * The type of the entity mention.
 */
export declare enum EntityMentionTypeEnum {
    TypeUnknown = "TYPE_UNKNOWN",
    Proper = "PROPER",
    Common = "COMMON"
}
/**
 * Represents a mention for an entity in the text. Currently, proper noun mentions are supported.
 */
export declare class EntityMention extends SpeakeasyBase {
    /**
     * Represents an output piece of text.
     */
    text?: TextSpan;
    /**
     * The type of the entity mention.
     */
    type?: EntityMentionTypeEnum;
}
