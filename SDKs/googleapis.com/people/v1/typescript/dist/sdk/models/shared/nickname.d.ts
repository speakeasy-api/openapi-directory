import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata, FieldMetadataInput } from "./fieldmetadata";
/**
 * The type of the nickname.
 */
export declare enum NicknameTypeEnum {
    Default = "DEFAULT",
    MaidenName = "MAIDEN_NAME",
    Initials = "INITIALS",
    Gplus = "GPLUS",
    OtherName = "OTHER_NAME",
    AlternateName = "ALTERNATE_NAME",
    ShortName = "SHORT_NAME"
}
/**
 * A person's nickname.
 */
export declare class Nickname extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadata;
    /**
     * The type of the nickname.
     */
    type?: NicknameTypeEnum;
    /**
     * The nickname.
     */
    value?: string;
}
/**
 * A person's nickname.
 */
export declare class NicknameInput extends SpeakeasyBase {
    /**
     * Metadata about a field.
     */
    metadata?: FieldMetadataInput;
    /**
     * The type of the nickname.
     */
    type?: NicknameTypeEnum;
    /**
     * The nickname.
     */
    value?: string;
}
