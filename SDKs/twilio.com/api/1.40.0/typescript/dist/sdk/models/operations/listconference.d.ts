import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListConferenceServerList: readonly ["https://api.twilio.com"];
export declare class ListConferenceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListConferenceRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Conference resource(s) to read.
     */
    accountSid: string;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
     */
    dateCreated?: Date;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
     */
    dateCreatedLessThan?: Date;
    /**
     * The `date_created` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that started on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify  conferences that started on or after midnight on a date, use `>=YYYY-MM-DD`.
     */
    dateCreatedGreaterThan?: Date;
    /**
     * The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
     */
    dateUpdated?: Date;
    /**
     * The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
     */
    dateUpdatedLessThan?: Date;
    /**
     * The `date_updated` value, specified as `YYYY-MM-DD`, of the resources to read. To read conferences that were last updated on or before midnight on a date, use `<=YYYY-MM-DD`, and to specify conferences that were last updated on or after midnight on a given date, use  `>=YYYY-MM-DD`.
     */
    dateUpdatedGreaterThan?: Date;
    /**
     * The string that identifies the Conference resources to read.
     */
    friendlyName?: string;
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
     * The status of the resources to read. Can be: `init`, `in-progress`, or `completed`.
     */
    status?: shared.ConferenceEnumStatusEnum;
}
/**
 * OK
 */
export declare class ListConferenceListConferenceResponse extends SpeakeasyBase {
    conferences?: shared.ApiV2010AccountConference[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListConferenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listConferenceResponse?: ListConferenceListConferenceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
