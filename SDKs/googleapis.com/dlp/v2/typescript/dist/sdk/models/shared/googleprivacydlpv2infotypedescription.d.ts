import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoTypeCategory } from "./googleprivacydlpv2infotypecategory";
import { GooglePrivacyDlpV2SensitivityScore } from "./googleprivacydlpv2sensitivityscore";
import { GooglePrivacyDlpV2VersionDescription } from "./googleprivacydlpv2versiondescription";
export declare enum GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum {
    EnumTypeUnspecified = "ENUM_TYPE_UNSPECIFIED",
    Inspect = "INSPECT",
    RiskAnalysis = "RISK_ANALYSIS"
}
/**
 * InfoType description.
 */
export declare class GooglePrivacyDlpV2InfoTypeDescription extends SpeakeasyBase {
    /**
     * The category of the infoType.
     */
    categories?: GooglePrivacyDlpV2InfoTypeCategory[];
    /**
     * Description of the infotype. Translated when language is provided in the request.
     */
    description?: string;
    /**
     * Human readable form of the infoType name.
     */
    displayName?: string;
    /**
     * Internal name of the infoType.
     */
    name?: string;
    /**
     * Score is a summary of all elements in the data profile. A higher number means more sensitive.
     */
    sensitivityScore?: GooglePrivacyDlpV2SensitivityScore;
    /**
     * Which parts of the API supports this InfoType.
     */
    supportedBy?: GooglePrivacyDlpV2InfoTypeDescriptionSupportedByEnum[];
    /**
     * A list of available versions for the infotype.
     */
    versions?: GooglePrivacyDlpV2VersionDescription[];
}
