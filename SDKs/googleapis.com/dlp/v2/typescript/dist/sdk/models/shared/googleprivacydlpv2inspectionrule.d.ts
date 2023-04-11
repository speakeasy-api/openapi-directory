import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ExclusionRule } from "./googleprivacydlpv2exclusionrule";
import { GooglePrivacyDlpV2HotwordRule } from "./googleprivacydlpv2hotwordrule";
/**
 * A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.
 */
export declare class GooglePrivacyDlpV2InspectionRule extends SpeakeasyBase {
    /**
     * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
     */
    exclusionRule?: GooglePrivacyDlpV2ExclusionRule;
    /**
     * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
     */
    hotwordRule?: GooglePrivacyDlpV2HotwordRule;
}
