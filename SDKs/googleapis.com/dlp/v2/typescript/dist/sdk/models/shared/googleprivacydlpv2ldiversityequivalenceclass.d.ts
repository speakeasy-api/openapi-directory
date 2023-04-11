import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
import { GooglePrivacyDlpV2ValueFrequency } from "./googleprivacydlpv2valuefrequency";
/**
 * The set of columns' values that share the same ldiversity value.
 */
export declare class GooglePrivacyDlpV2LDiversityEquivalenceClass extends SpeakeasyBase {
    /**
     * Size of the k-anonymity equivalence class.
     */
    equivalenceClassSize?: string;
    /**
     * Number of distinct sensitive values in this equivalence class.
     */
    numDistinctSensitiveValues?: string;
    /**
     * Quasi-identifier values defining the k-anonymity equivalence class. The order is always the same as the original request.
     */
    quasiIdsValues?: GooglePrivacyDlpV2Value[];
    /**
     * Estimated frequencies of top sensitive values.
     */
    topSensitiveValues?: GooglePrivacyDlpV2ValueFrequency[];
}
