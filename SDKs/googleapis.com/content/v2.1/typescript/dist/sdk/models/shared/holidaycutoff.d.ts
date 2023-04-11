import { SpeakeasyBase } from "../../../internal/utils";
export declare class HolidayCutoff extends SpeakeasyBase {
    /**
     * Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required.
     */
    deadlineDate?: string;
    /**
     * Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.
     */
    deadlineHour?: number;
    /**
     * Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required.
     */
    deadlineTimezone?: string;
    /**
     * Unique identifier for the holiday. Required.
     */
    holidayId?: string;
    /**
     * Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required.
     */
    visibleFromDate?: string;
}
