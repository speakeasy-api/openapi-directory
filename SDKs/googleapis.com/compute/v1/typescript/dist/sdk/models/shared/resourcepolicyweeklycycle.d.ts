import { SpeakeasyBase } from "../../../internal/utils";
import { ResourcePolicyWeeklyCycleDayOfWeek } from "./resourcepolicyweeklycycledayofweek";
/**
 * Time window specified for weekly operations.
 */
export declare class ResourcePolicyWeeklyCycle extends SpeakeasyBase {
    /**
     * Up to 7 intervals/windows, one for each day of the week.
     */
    dayOfWeeks?: ResourcePolicyWeeklyCycleDayOfWeek[];
}
