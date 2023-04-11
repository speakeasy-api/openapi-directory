import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMessageServerList: readonly ["https://api.twilio.com"];
export declare class ListMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resources to read.
     */
    accountSid: string;
    /**
     * The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
     */
    dateSent?: Date;
    /**
     * The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
     */
    dateSentLessThan?: Date;
    /**
     * The date of the messages to show. Specify a date as `YYYY-MM-DD` in GMT to read only messages sent on this date. For example: `2009-07-06`. You can also specify an inequality, such as `DateSent<=YYYY-MM-DD`, to read messages sent on or before midnight on a date, and `DateSent>=YYYY-MM-DD` to read messages sent on or after midnight on a date.
     */
    dateSentGreaterThan?: Date;
    /**
     * Read messages sent from only this phone number or alphanumeric sender ID.
     */
    from?: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * Read messages sent to only this phone number.
     */
    to?: string;
}
/**
 * OK
 */
export declare class ListMessageListMessageResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    messages?: shared.ApiV2010AccountMessage[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListMessageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMessageResponse?: ListMessageListMessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
