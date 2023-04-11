import { SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";
/**
 * Response for manually stop a backfill job for a specific stream object.
 */
export declare class StopBackfillJobResponse extends SpeakeasyBase {
    /**
     * A specific stream object (e.g a specific DB table).
     */
    object?: StreamObject;
}
