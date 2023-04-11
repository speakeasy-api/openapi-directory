import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * type of records to return
 */
export declare enum GetEventsTypeEnum {
    All = "all",
    Clicks = "clicks",
    Contacts = "contacts"
}
export declare class GetEventsRequest extends SpeakeasyBase {
    /**
     * pass an optional company Id
     */
    company?: string;
    /**
     * pass an optional deal Id
     */
    deal?: string;
    /**
     * next token to start returning records from
     */
    nexttoken?: string;
    /**
     * id of execution to get more records based on next token
     */
    queryexecutionid?: string;
    /**
     * pass an optional site Id
     */
    site?: string;
    /**
     * type of records to return
     */
    type?: GetEventsTypeEnum;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * analytics results matching criteria
     */
    eventRecords?: shared.EventRecord[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
