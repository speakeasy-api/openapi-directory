import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Action } from "./googleprivacydlpv2action";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
import { GooglePrivacyDlpV2StorageConfig } from "./googleprivacydlpv2storageconfig";
/**
 * Controls what and how to inspect for findings.
 */
export declare class GooglePrivacyDlpV2InspectJobConfig extends SpeakeasyBase {
    /**
     * Actions to execute at the completion of the job.
     */
    actions?: GooglePrivacyDlpV2Action[];
    /**
     * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
     */
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    /**
     * If provided, will be used as the default for all values in InspectConfig. `inspect_config` will be merged into the values persisted as part of the template.
     */
    inspectTemplateName?: string;
    /**
     * Shared message indicating Cloud storage type.
     */
    storageConfig?: GooglePrivacyDlpV2StorageConfig;
}
