import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The schedule object for Friday.
 */
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday extends SpeakeasyBase {
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
export declare class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule extends SpeakeasyBase {
    /**
     * The schedule object for Friday.
     */
    friday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday;
    /**
     * The schedule object for Monday.
     */
    monday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday;
    /**
     * The schedule object for Saturday.
     */
    saturday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday;
    /**
     * The schedule object for Sunday.
     */
    sunday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday;
    /**
     * The schedule object for Thursday.
     */
    thursday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday;
    /**
     * The schedule object for Tuesday.
     */
    tuesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday;
    /**
     * The schedule object for Wednesday.
     */
    wednesday?: CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday;
}
export declare class CreateNetworkSwitchPortScheduleRequestBody extends SpeakeasyBase {
    /**
     * The name for your port schedule. Required
     */
    name: string;
    /**
     *     The schedule for switch port scheduling. Schedules are applied to days of the week.
     *
     * @remarks
     *     When it's empty, default schedule with all days of a week are configured.
     *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
     *
     */
    portSchedule?: CreateNetworkSwitchPortScheduleRequestBodyPortSchedule;
}
export declare class CreateNetworkSwitchPortScheduleRequest extends SpeakeasyBase {
    requestBody: CreateNetworkSwitchPortScheduleRequestBody;
    networkId: string;
}
export declare class CreateNetworkSwitchPortScheduleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkSwitchPortSchedule201ApplicationJSONObject?: Record<string, any>;
}
