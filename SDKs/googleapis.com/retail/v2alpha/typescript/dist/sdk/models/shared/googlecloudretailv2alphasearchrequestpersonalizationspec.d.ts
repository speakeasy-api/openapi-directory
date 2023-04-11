import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defaults to Mode.AUTO.
 */
export declare enum GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}
/**
 * The specification for personalization.
 */
export declare class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec extends SpeakeasyBase {
    /**
     * Defaults to Mode.AUTO.
     */
    mode?: GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum;
}
