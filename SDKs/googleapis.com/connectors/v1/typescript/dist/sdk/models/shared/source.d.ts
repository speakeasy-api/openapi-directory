import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the source.
 */
export declare enum SourceSourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    ConfigVariable = "CONFIG_VARIABLE"
}
/**
 * Source to extract the backend from.
 */
export declare class Source extends SpeakeasyBase {
    /**
     * Field identifier. For example config vaiable name.
     */
    fieldId?: string;
    /**
     * Type of the source.
     */
    sourceType?: SourceSourceTypeEnum;
}
