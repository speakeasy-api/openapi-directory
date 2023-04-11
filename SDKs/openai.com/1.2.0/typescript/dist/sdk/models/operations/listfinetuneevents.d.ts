import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFineTuneEventsRequest extends SpeakeasyBase {
    /**
     * The ID of the fine-tune job to get events for.
     *
     * @remarks
     *
     */
    fineTuneId: string;
    /**
     * Whether to stream events for the fine-tune job. If set to true,
     *
     * @remarks
     * events will be sent as data-only
     * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
     * as they become available. The stream will terminate with a
     * `data: [DONE]` message when the job is finished (succeeded, cancelled,
     * or failed).
     *
     * If set to false, only events generated so far will be returned.
     *
     */
    stream?: boolean;
}
export declare class ListFineTuneEventsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFineTuneEventsResponse?: shared.ListFineTuneEventsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
