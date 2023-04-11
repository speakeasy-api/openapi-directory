import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Column } from "./googlecloudchannelv1column";
/**
 * The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.
 */
export declare class GoogleCloudChannelV1Report extends SpeakeasyBase {
    /**
     * The list of columns included in the report. This defines the schema of the report results.
     */
    columns?: GoogleCloudChannelV1Column[];
    /**
     * A description of other aspects of the report, such as the products it supports.
     */
    description?: string;
    /**
     * A human-readable name for this report.
     */
    displayName?: string;
    /**
     * Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}
     */
    name?: string;
}
