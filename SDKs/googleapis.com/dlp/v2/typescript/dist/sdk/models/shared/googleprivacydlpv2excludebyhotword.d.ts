import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Proximity } from "./googleprivacydlpv2proximity";
import { GooglePrivacyDlpV2Regex } from "./googleprivacydlpv2regex";
/**
 * The rule to exclude findings based on a hotword. For record inspection of tables, column names are considered hotwords. An example of this is to exclude a finding if it belongs to a BigQuery column that matches a specific pattern.
 */
export declare class GooglePrivacyDlpV2ExcludeByHotword extends SpeakeasyBase {
    /**
     * Message defining a custom regular expression.
     */
    hotwordRegex?: GooglePrivacyDlpV2Regex;
    /**
     * Message for specifying a window around a finding to apply a detection rule.
     */
    proximity?: GooglePrivacyDlpV2Proximity;
}
