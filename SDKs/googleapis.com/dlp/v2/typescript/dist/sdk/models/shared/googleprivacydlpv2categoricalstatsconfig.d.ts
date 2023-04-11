import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Compute numerical stats over an individual column, including number of distinct values and value count distribution.
 */
export declare class GooglePrivacyDlpV2CategoricalStatsConfig extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    field?: GooglePrivacyDlpV2FieldId;
}
