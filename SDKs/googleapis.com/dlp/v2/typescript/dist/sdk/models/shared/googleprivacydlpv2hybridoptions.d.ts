import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2TableOptions } from "./googleprivacydlpv2tableoptions";
/**
 * Configuration to control jobs where the content being inspected is outside of Google Cloud Platform.
 */
export declare class GooglePrivacyDlpV2HybridOptions extends SpeakeasyBase {
    /**
     * A short description of where the data is coming from. Will be stored once in the job. 256 max length.
     */
    description?: string;
    /**
     * To organize findings, these labels will be added to each finding. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. Label values must be between 0 and 63 characters long and must conform to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`. No more than 10 labels can be associated with a given finding. Examples: * `"environment" : "production"` * `"pipeline" : "etl"`
     */
    labels?: Record<string, string>;
    /**
     * These are labels that each inspection request must include within their 'finding_labels' map. Request may contain others, but any missing one of these will be rejected. Label keys must be between 1 and 63 characters long and must conform to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`. No more than 10 keys can be required.
     */
    requiredFindingLabelKeys?: string[];
    /**
     * Instructions regarding the table content being inspected.
     */
    tableOptions?: GooglePrivacyDlpV2TableOptions;
}
