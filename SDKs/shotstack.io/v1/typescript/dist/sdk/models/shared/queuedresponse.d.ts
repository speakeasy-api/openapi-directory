import { SpeakeasyBase } from "../../../internal/utils";
import { QueuedResponseData } from "./queuedresponsedata";
/**
 * The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
 */
export declare class QueuedResponse extends SpeakeasyBase {
    /**
     * `Created`, `Bad Request` or an error message.
     */
    message: string;
    /**
     * The response data returned with the [QueuedResponse](#tocs_queuedresponse).
     */
    response: QueuedResponseData;
    /**
     * `true` if successfully queued, else `false`.
     */
    success: boolean;
}
