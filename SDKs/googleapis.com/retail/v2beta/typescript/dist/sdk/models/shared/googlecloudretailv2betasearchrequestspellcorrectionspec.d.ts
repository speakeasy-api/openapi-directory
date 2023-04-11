import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.
 */
export declare enum GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    SuggestionOnly = "SUGGESTION_ONLY",
    Auto = "AUTO"
}
/**
 * The specification for query spell correction.
 */
export declare class GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpec extends SpeakeasyBase {
    /**
     * The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.
     */
    mode?: GoogleCloudRetailV2betaSearchRequestSpellCorrectionSpecModeEnum;
}
