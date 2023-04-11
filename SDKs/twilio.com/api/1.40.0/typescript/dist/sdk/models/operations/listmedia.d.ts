import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListMediaServerList: readonly ["https://api.twilio.com"];
export declare class ListMediaSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListMediaRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Media resource(s) to read.
     */
    accountSid: string;
    /**
     * Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
     */
    dateCreated?: Date;
    /**
     * Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
     */
    dateCreatedLessThan?: Date;
    /**
     * Only include media that was created on this date. Specify a date as `YYYY-MM-DD` in GMT, for example: `2009-07-06`, to read media that was created on this date. You can also specify an inequality, such as `StartTime<=YYYY-MM-DD`, to read media that was created on or before midnight of this date, and `StartTime>=YYYY-MM-DD` to read media that was created on or after midnight of this date.
     */
    dateCreatedGreaterThan?: Date;
    /**
     * The SID of the Message resource that this Media resource belongs to.
     */
    messageSid: string;
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
}
/**
 * OK
 */
export declare class ListMediaListMediaResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    mediaList?: shared.ApiV2010AccountMessageMedia[];
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListMediaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listMediaResponse?: ListMediaListMediaResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
