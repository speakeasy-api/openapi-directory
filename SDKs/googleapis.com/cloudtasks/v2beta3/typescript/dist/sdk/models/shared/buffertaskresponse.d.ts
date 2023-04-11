import { SpeakeasyBase } from "../../../internal/utils";
import { Task } from "./task";
/**
 * Response message for BufferTask.
 */
export declare class BufferTaskResponse extends SpeakeasyBase {
    /**
     * A unit of scheduled work.
     */
    task?: Task;
}
