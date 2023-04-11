import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * Result of the numerical stats computation.
 */
export declare class GooglePrivacyDlpV2NumericalStatsResult extends SpeakeasyBase {
    /**
     * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
     */
    maxValue?: GooglePrivacyDlpV2Value;
    /**
     * Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
     */
    minValue?: GooglePrivacyDlpV2Value;
    /**
     * List of 99 values that partition the set of field values into 100 equal sized buckets.
     */
    quantileValues?: GooglePrivacyDlpV2Value[];
}
