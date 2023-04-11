import { SpeakeasyBase } from "../../../internal/utils";
export declare class ResourcePolicyResourceStatusInstanceSchedulePolicyStatus extends SpeakeasyBase {
    /**
     * [Output Only] The last time the schedule successfully ran. The timestamp is an RFC3339 string.
     */
    lastRunStartTime?: string;
    /**
     * [Output Only] The next time the schedule is planned to run. The actual time might be slightly different. The timestamp is an RFC3339 string.
     */
    nextRunStartTime?: string;
}
