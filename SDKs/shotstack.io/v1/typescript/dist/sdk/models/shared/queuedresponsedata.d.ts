import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
 */
export declare class QueuedResponseData extends SpeakeasyBase {
    /**
     * The id of the render task in UUID format.
     */
    id: string;
    /**
     * Success response message or error details.
     */
    message: string;
}
