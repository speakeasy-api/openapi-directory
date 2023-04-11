import { SpeakeasyBase } from "../../../internal/utils";
export declare class CustomAttribute extends SpeakeasyBase {
    /**
     * Subattributes within this attribute group. Exactly one of value or groupValues must be provided.
     */
    groupValues?: CustomAttribute[];
    /**
     * The name of the attribute. Underscores will be replaced by spaces upon insertion.
     */
    name?: string;
    /**
     * The value of the attribute.
     */
    value?: string;
}
