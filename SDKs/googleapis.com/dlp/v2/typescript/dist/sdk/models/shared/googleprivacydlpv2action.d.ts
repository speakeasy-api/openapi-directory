import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Deidentify } from "./googleprivacydlpv2deidentify";
import { GooglePrivacyDlpV2PublishToPubSub } from "./googleprivacydlpv2publishtopubsub";
import { GooglePrivacyDlpV2SaveFindings } from "./googleprivacydlpv2savefindings";
/**
 * A task to execute on the completion of a job. See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
**/
export declare class GooglePrivacyDlpV2Action extends SpeakeasyBase {
    deidentify?: GooglePrivacyDlpV2Deidentify;
    jobNotificationEmails?: Record<string, any>;
    pubSub?: GooglePrivacyDlpV2PublishToPubSub;
    publishFindingsToCloudDataCatalog?: Record<string, any>;
    publishSummaryToCscc?: Record<string, any>;
    publishToStackdriver?: Record<string, any>;
    saveFindings?: GooglePrivacyDlpV2SaveFindings;
}
