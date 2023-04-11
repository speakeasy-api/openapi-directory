import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defaults to Mode.AUTO.
 */
export declare enum GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    Auto = "AUTO",
    Disabled = "DISABLED"
}
/**
 * The specification for personalization.
 */
export declare class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec extends SpeakeasyBase {
    /**
     * Defaults to Mode.AUTO.
     */
    mode?: GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum;
}
