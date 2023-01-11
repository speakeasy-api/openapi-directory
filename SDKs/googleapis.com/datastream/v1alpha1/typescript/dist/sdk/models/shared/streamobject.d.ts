import { SpeakeasyBase } from "../../../internal/utils";
import { BackfillJob } from "./backfilljob";
import { ErrorT } from "./error";
import { SourceObjectIdentifier } from "./sourceobjectidentifier";
/**
 * A specific stream object (e.g a specific DB table).
**/
export declare class StreamObject extends SpeakeasyBase {
    backfillJob?: BackfillJob;
    createTime?: string;
    displayName?: string;
    errors?: ErrorT[];
    name?: string;
    sourceObject?: SourceObjectIdentifier;
    updateTime?: string;
}
