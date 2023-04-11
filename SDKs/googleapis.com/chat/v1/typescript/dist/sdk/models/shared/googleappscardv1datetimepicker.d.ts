import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
/**
 * What kind of date and time input the datetime picker supports.
 */
export declare enum GoogleAppsCardV1DateTimePickerTypeEnum {
    DateAndTime = "DATE_AND_TIME",
    DateOnly = "DATE_ONLY",
    TimeOnly = "TIME_ONLY"
}
/**
 * Lets users specify a date, a time, or both a date and a time. Accepts text input from users, but features an interactive date and time selector that helps users enter correctly-formatted dates and times. If users enter a date or time incorrectly, the widget shows an error that prompts users to enter the correct format. Not supported by Chat apps. Support by Chat apps coming soon.
 */
export declare class GoogleAppsCardV1DateTimePicker extends SpeakeasyBase {
    /**
     * The text that prompts users to enter a date, time, or datetime. Specify text that helps the user enter the information your app needs. For example, if users are setting an appointment, then a label like "Appointment date" or "Appointment date and time" might work well.
     */
    label?: string;
    /**
     * The name by which the datetime picker is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string;
    /**
     * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
     */
    onChangeAction?: GoogleAppsCardV1Action;
    /**
     * The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If not set, it uses the user's time zone setting on the client side.
     */
    timezoneOffsetDate?: number;
    /**
     * What kind of date and time input the datetime picker supports.
     */
    type?: GoogleAppsCardV1DateTimePickerTypeEnum;
    /**
     * The value displayed as the default value before user input or previous user input, represented in milliseconds ([Epoch time](https://en.wikipedia.org/wiki/Unix_time)). For `DATE_AND_TIME` type, the full epoch value is used. For `DATE_ONLY` type, only date of the epoch time is used. For `TIME_ONLY` type, only time of the epoch time is used. For example, to represent 3:00 AM, set epoch time to `3 * 60 * 60 * 1000`.
     */
    valueMsEpoch?: string;
}
