import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TransformationSummary } from "./googleprivacydlpv2transformationsummary";
/**
 * Overview of the modifications that occurred.
 */
export declare class GooglePrivacyDlpV2TransformationOverview extends SpeakeasyBase {
    /**
     * Transformations applied to the dataset.
     */
    transformationSummaries?: GooglePrivacyDlpV2TransformationSummary[];
    /**
     * Total size in bytes that were transformed in some way.
     */
    transformedBytes?: string;
}
