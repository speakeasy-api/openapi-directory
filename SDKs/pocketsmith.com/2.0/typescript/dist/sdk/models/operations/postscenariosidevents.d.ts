import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The repeat type of the event.
 */
export declare enum PostScenariosIdEventsRequestBodyRepeatTypeEnum {
    Once = "once",
    Daily = "daily",
    Weekly = "weekly",
    Fortnightly = "fortnightly",
    Monthly = "monthly",
    Yearly = "yearly",
    EachWeekday = "each weekday"
}
export declare class PostScenariosIdEventsRequestBody extends SpeakeasyBase {
    /**
     * The amount of the event. A positive amount is a credit, and a negative amount is a debit.
     */
    amount: number;
    /**
     * The unique identifier of the category for the event.
     */
    categoryId: number;
    /**
     * The starting date of the event.
     */
    date: string;
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
    repeatType: PostScenariosIdEventsRequestBodyRepeatTypeEnum;
}
export declare class PostScenariosIdEventsRequest extends SpeakeasyBase {
    requestBody?: PostScenariosIdEventsRequestBody;
    /**
     * The unique identifier of the scenario.
     */
    id: number;
}
export declare class PostScenariosIdEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    /**
     * Success
     */
    event?: shared.Event;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
