import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * The set of columns' values that share the same ldiversity value
 */
export declare class GooglePrivacyDlpV2KAnonymityEquivalenceClass extends SpeakeasyBase {
    /**
     * Size of the equivalence class, for example number of rows with the above set of values.
     */
    equivalenceClassSize?: string;
    /**
     * Set of values defining the equivalence class. One value per quasi-identifier column in the original KAnonymity metric message. The order is always the same as the original request.
     */
    quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
