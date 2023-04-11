import { SpeakeasyBase } from "../../../internal/utils";
import { AccountImageImprovementsSettings } from "./accountimageimprovementssettings";
/**
 * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
 */
export declare class AccountImageImprovementsInput extends SpeakeasyBase {
    /**
     * Settings for the Automatic Image Improvements.
     */
    accountImageImprovementsSettings?: AccountImageImprovementsSettings;
}
/**
 * This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)
 */
export declare class AccountImageImprovements extends SpeakeasyBase {
    /**
     * Settings for the Automatic Image Improvements.
     */
    accountImageImprovementsSettings?: AccountImageImprovementsSettings;
    /**
     * Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.
     */
    effectiveAllowAutomaticImageImprovements?: boolean;
}
