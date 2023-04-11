import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Suffix option.
 */
export declare enum SuffixOptionEnum {
    OptionUnspecified = "OPTION_UNSPECIFIED",
    Unguessable = "UNGUESSABLE",
    Short = "SHORT",
    Custom = "CUSTOM"
}
/**
 * Short Dynamic Link suffix.
 */
export declare class Suffix extends SpeakeasyBase {
    /**
     * Only applies to Option.CUSTOM.
     */
    customSuffix?: string;
    /**
     * Suffix option.
     */
    option?: SuffixOptionEnum;
}
