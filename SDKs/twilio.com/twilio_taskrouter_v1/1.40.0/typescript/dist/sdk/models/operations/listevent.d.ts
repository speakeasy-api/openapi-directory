import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEventServerList: readonly ["https://taskrouter.twilio.com"];
export declare class ListEventSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEventRequest extends SpeakeasyBase {
    /**
     * Only include Events that occurred on or before this date, specified in GMT as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time.
     */
    endDate?: Date;
    /**
     * The type of Events to read. Returns only Events of the type specified.
     */
    eventType?: string;
    /**
     * The period of events to read in minutes. Returns only Events that occurred since this many minutes in the past. The default is `15` minutes. Task Attributes for Events occuring more 43,200 minutes ago will be redacted.
     */
    minutes?: number;
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
     * The SID of the Reservation with the Events to read. Returns only Events that pertain to the specified Reservation.
     */
    reservationSid?: string;
    /**
     * The SID of the Event resource to read.
     */
    sid?: string;
    /**
     * Only include Events from on or after this date and time, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Task Attributes for Events older than 30 days will be redacted.
     */
    startDate?: Date;
    /**
     * The TaskChannel with the Events to read. Returns only the Events that pertain to the specified TaskChannel.
     */
    taskChannel?: string;
    /**
     * The SID of the TaskQueue with the Events to read. Returns only the Events that pertain to the specified TaskQueue.
     */
    taskQueueSid?: string;
    /**
     * The SID of the Task with the Events to read. Returns only the Events that pertain to the specified Task.
     */
    taskSid?: string;
    /**
     * The SID of the Worker with the Events to read. Returns only the Events that pertain to the specified Worker.
     */
    workerSid?: string;
    /**
     * The SID of the Workflow with the Events to read. Returns only the Events that pertain to the specified Workflow.
     */
    workflowSid?: string;
    /**
     * The SID of the Workspace with the Events to read. Returns only the Events that pertain to the specified Workspace.
     */
    workspaceSid: string;
}
export declare class ListEventListEventResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListEventListEventResponse extends SpeakeasyBase {
    events?: shared.TaskrouterV1WorkspaceEvent[];
    meta?: ListEventListEventResponseMeta;
}
export declare class ListEventResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEventResponse?: ListEventListEventResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
