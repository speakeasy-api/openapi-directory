import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Value } from "./googleprivacydlpv2value";
/**
 * A tuple of values for the quasi-identifier columns.
 */
export declare class GooglePrivacyDlpV2KMapEstimationQuasiIdValues extends SpeakeasyBase {
    /**
     * The estimated anonymity for these quasi-identifier values.
     */
    estimatedAnonymity?: string;
    /**
     * The quasi-identifier values.
     */
    quasiIdsValues?: GooglePrivacyDlpV2Value[];
}
