import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyDailyCycle } from "./resourcepolicydailycycle";
import { ResourcePolicyHourlyCycle } from "./resourcepolicyhourlycycle";
import { ResourcePolicyWeeklyCycle } from "./resourcepolicyweeklycycle";
/**
 * A schedule for disks where the schedueled operations are performed.
 */
export declare class ResourcePolicySnapshotSchedulePolicySchedule extends SpeakeasyBase {
    /**
     * Time window specified for daily operations.
     */
    dailySchedule?: ResourcePolicyDailyCycle;
    /**
     * Time window specified for hourly operations.
     */
    hourlySchedule?: ResourcePolicyHourlyCycle;
    /**
     * Time window specified for weekly operations.
     */
    weeklySchedule?: ResourcePolicyWeeklyCycle;
}
