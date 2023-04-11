import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2LikelihoodAdjustment } from "./googleprivacydlpv2likelihoodadjustment";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
/**
 * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
 */
export declare class GooglePrivacyDlpV2HotwordRule extends SpeakeasyBase {
    /**
     * Message defining a custom regular expression.
     */
    hotwordRegex?: GooglePrivacyDlpV2Regex;
    /**
     * Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
     */
    likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;
    /**
     * Message for specifying a window around a finding to apply a detection rule.
     */
    proximity?: GooglePrivacyDlpV2Proximity;
}
