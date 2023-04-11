import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Compute numerical stats over an individual column, including min, max, and quantiles.
 */
export declare class GooglePrivacyDlpV2NumericalStatsConfig extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    field?: GooglePrivacyDlpV2FieldId;
}
