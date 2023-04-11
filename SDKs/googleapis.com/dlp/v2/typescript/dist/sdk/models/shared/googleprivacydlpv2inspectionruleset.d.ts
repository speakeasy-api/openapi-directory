import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2InspectionRule } from "./googleprivacydlpv2inspectionrule";
/**
 * Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.
 */
export declare class GooglePrivacyDlpV2InspectionRuleSet extends SpeakeasyBase {
    /**
     * List of infoTypes this rule set is applied to.
     */
    infoTypes?: GooglePrivacyDlpV2InfoType[];
    /**
     * Set of rules to be applied to infoTypes. The rules are applied in order.
     */
    rules?: GooglePrivacyDlpV2InspectionRule[];
}
