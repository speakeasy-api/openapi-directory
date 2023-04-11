import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillJob } from "./backfilljob";
import { ErrorT } from "./error";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";
/**
 * A specific stream object (e.g a specific DB table).
 */
export declare class StreamObject extends SpeakeasyBase {
    /**
     * Represents a backfill job on a specific stream object.
     */
    backfillJob?: BackfillJob;
    /**
     * Output only. The creation time of the object.
     */
    createTime?: string;
    /**
     * Required. Display name.
     */
    displayName?: string;
    /**
     * Output only. Active errors on the object.
     */
    errors?: ErrorT[];
    /**
     * Output only. The object's name.
     */
    name?: string;
    /**
     * Represents an identifier of an object in the data source.
     */
    sourceObject?: SourceObjectIdentifier;
    /**
     * Output only. The last update time of the object.
     */
    updateTime?: string;
}
