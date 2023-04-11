import { SpeakeasyBase } from "../../../internal/utils";
import { Image, ImageInput } from "./image";
/**
 * Section navigation type.
 */
export declare enum OptionGoToActionEnum {
    GoToActionUnspecified = "GO_TO_ACTION_UNSPECIFIED",
    NextSection = "NEXT_SECTION",
    RestartForm = "RESTART_FORM",
    SubmitForm = "SUBMIT_FORM"
}
/**
 * An option for a Choice question.
 */
export declare class Option extends SpeakeasyBase {
    /**
     * Section navigation type.
     */
    goToAction?: OptionGoToActionEnum;
    /**
     * Item ID of section header to go to.
     */
    goToSectionId?: string;
    /**
     * Data representing an image.
     */
    image?: Image;
    /**
     * Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem.
     */
    isOther?: boolean;
    /**
     * Required. The choice as presented to the user.
     */
    value?: string;
}
/**
 * An option for a Choice question.
 */
export declare class OptionInput extends SpeakeasyBase {
    /**
     * Section navigation type.
     */
    goToAction?: OptionGoToActionEnum;
    /**
     * Item ID of section header to go to.
     */
    goToSectionId?: string;
    /**
     * Data representing an image.
     */
    image?: ImageInput;
    /**
     * Whether the option is "other". Currently only applies to `RADIO` and `CHECKBOX` choice types, but is not allowed in a QuestionGroupItem.
     */
    isOther?: boolean;
    /**
     * Required. The choice as presented to the user.
     */
    value?: string;
}
