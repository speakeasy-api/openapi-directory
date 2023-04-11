import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
 */
export declare enum DeleteEventsIdBehaviourEnum {
    One = "one",
    Forward = "forward",
    All = "all"
}
export declare class DeleteEventsIdRequest extends SpeakeasyBase {
    /**
     * Whether the delete applies only to this event, to all events within the series from this event or to all events within the series.
     */
    behaviour: DeleteEventsIdBehaviourEnum;
    /**
     * The unique identifier of the event.
     */
    id: string;
}
export declare class DeleteEventsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
