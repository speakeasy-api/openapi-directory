import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether the update applies only to this event, to all events within the series from this event or to all events within the series.
 */
export declare enum PutEventsIdRequestBodyBehaviourEnum {
    One = "one",
    Forward = "forward",
    All = "all"
}
/**
 * The repeat type of the event.
 */
export declare enum PutEventsIdRequestBodyRepeatTypeEnum {
    Once = "once",
    Daily = "daily",
    Weekly = "weekly",
    Fortnightly = "fortnightly",
    Monthly = "monthly",
    Yearly = "yearly",
    EachWeekday = "each weekday"
}
export declare class PutEventsIdRequestBody extends SpeakeasyBase {
    /**
     * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
     */
    amount?: number;
    /**
     * Whether the update applies only to this event, to all events within the series from this event or to all events within the series.
     */
    behaviour: PutEventsIdRequestBodyBehaviourEnum;
    /**
     * A note for the event.
     */
    note?: string;
    /**
     * The repeat interval of the event.
     */
    repeatInterval?: number;
    /**
     * The repeat type of the event.
     */
    repeatType?: PutEventsIdRequestBodyRepeatTypeEnum;
}
export declare class PutEventsIdRequest extends SpeakeasyBase {
    requestBody?: PutEventsIdRequestBody;
    /**
     * The unique identifier of the event.
     */
    id: string;
}
export declare class PutEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
