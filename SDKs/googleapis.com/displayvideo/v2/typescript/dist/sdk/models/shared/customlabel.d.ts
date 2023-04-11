import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The key of the label.
 */
export declare enum CustomLabelKeyEnum {
    CustomLabelKeyUnspecified = "CUSTOM_LABEL_KEY_UNSPECIFIED",
    CustomLabelKey0 = "CUSTOM_LABEL_KEY_0",
    CustomLabelKey1 = "CUSTOM_LABEL_KEY_1",
    CustomLabelKey2 = "CUSTOM_LABEL_KEY_2",
    CustomLabelKey3 = "CUSTOM_LABEL_KEY_3",
    CustomLabelKey4 = "CUSTOM_LABEL_KEY_4"
}
/**
 * The key and value of a custom label.
 */
export declare class CustomLabel extends SpeakeasyBase {
    /**
     * The key of the label.
     */
    key?: CustomLabelKeyEnum;
    /**
     * The value of the label.
     */
    value?: string;
}
