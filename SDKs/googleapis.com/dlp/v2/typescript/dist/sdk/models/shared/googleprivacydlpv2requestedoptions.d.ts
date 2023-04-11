import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2InspectJobConfig } from "./googleprivacydlpv2inspectjobconfig";
import { GooglePrivacyDlpV2InspectTemplate } from "./googleprivacydlpv2inspecttemplate";
/**
 * Snapshot of the inspection configuration.
 */
export declare class GooglePrivacyDlpV2RequestedOptions extends SpeakeasyBase {
    /**
     * Controls what and how to inspect for findings.
     */
    jobConfig?: GooglePrivacyDlpV2InspectJobConfig;
    /**
     * The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
     */
    snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
}
