import { SpeakeasyBase } from "../../../internal/utils";
import { DeleteChannelsResult } from "./deletechannelsresult";
/**
 * Successful response
 */
export declare class DeleteChannelsResponse extends SpeakeasyBase {
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
    result?: Record<string, DeleteChannelsResult>;
    taskId?: string;
}
