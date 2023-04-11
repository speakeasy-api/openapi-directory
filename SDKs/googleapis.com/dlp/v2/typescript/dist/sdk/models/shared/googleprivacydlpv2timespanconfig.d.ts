import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.
 */
export declare class GooglePrivacyDlpV2TimespanConfig extends SpeakeasyBase {
    /**
     * When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger.
     */
    enableAutoPopulationOfTimespanConfig?: boolean;
    /**
     * Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
     */
    endTime?: string;
    /**
     * Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
     */
    startTime?: string;
    /**
     * General identifier of a data field in a storage service.
     */
    timestampField?: GooglePrivacyDlpV2FieldId;
}
