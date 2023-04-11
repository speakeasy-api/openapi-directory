import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
 */
export declare class AccountLabelInput extends SpeakeasyBase {
    /**
     * Immutable. The ID of account this label belongs to.
     */
    accountId?: string;
    /**
     * The description of this label.
     */
    description?: string;
    /**
     * The display name of this label.
     */
    name?: string;
}
/**
 * Output only. The type of this label.
 */
export declare enum AccountLabelLabelTypeEnum {
    LabelTypeUnspecified = "LABEL_TYPE_UNSPECIFIED",
    Manual = "MANUAL",
    Automatic = "AUTOMATIC"
}
/**
 * Label assigned by CSS domain or CSS group to one of its sub-accounts.
 */
export declare class AccountLabel extends SpeakeasyBase {
    /**
     * Immutable. The ID of account this label belongs to.
     */
    accountId?: string;
    /**
     * The description of this label.
     */
    description?: string;
    /**
     * Output only. The ID of the label.
     */
    labelId?: string;
    /**
     * Output only. The type of this label.
     */
    labelType?: AccountLabelLabelTypeEnum;
    /**
     * The display name of this label.
     */
    name?: string;
}
