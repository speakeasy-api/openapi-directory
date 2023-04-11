import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The schedule object for Friday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Monday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Saturday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Sunday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Thursday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Tuesday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 * The schedule object for Wednesday.
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
    /**
     * Whether the schedule is active (true) or inactive (false) during the time specified between 'from' and 'to'. Defaults to true.
     */
    active?: boolean;
    /**
     * The time, from '00:00' to '24:00'. Must be less than the time specified in 'to'. Defaults to '00:00'. Only 30 minute increments are allowed.
     */
    from?: string;
    /**
     * The time, from '00:00' to '24:00'. Must be greater than the time specified in 'from'. Defaults to '24:00'. Only 30 minute increments are allowed.
     */
    to?: string;
}
/**
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *
 * @remarks
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 *
 */
export declare class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
    /**
     * The schedule object for Friday.
     */
    friday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
    /**
     * The schedule object for Monday.
     */
    monday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
    /**
     * The schedule object for Saturday.
     */
    saturday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
    /**
     * The schedule object for Sunday.
     */
    sunday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
    /**
     * The schedule object for Thursday.
     */
    thursday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
    /**
     * The schedule object for Tuesday.
     */
    tuesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
    /**
     * The schedule object for Wednesday.
     */
    wednesday?: UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}
export declare class UpdateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
    /**
     * The name for your port schedule.
     */
    name?: string;
    /**
     *     The schedule for switch port scheduling. Schedules are applied to days of the week.
     *
     * @remarks
     *     When it's empty, default schedule with all days of a week are configured.
     *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
     *
     */
    portSchedule?: UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}
export declare class UpdateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkSwitchPortScheduleRequestBody;
    networkId: string;
    portScheduleId: string;
}
export declare class UpdateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkSwitchPortSchedule200ApplicationJSONObject?: Record<string, any>;
}
