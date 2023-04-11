import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Summary of what was modified during a transformation.
 */
export declare class GooglePrivacyDlpV2DeidentifyDataSourceStats extends SpeakeasyBase {
    /**
     * Number of successfully applied transformations.
     */
    transformationCount?: string;
    /**
     * Number of errors encountered while trying to apply transformations.
     */
    transformationErrorCount?: string;
    /**
     * Total size in bytes that were transformed in some way.
     */
    transformedBytes?: string;
}
