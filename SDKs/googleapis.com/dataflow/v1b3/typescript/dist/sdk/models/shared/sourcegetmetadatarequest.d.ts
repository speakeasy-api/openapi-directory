import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * A request to compute the SourceMetadata of a Source.
 */
export declare class SourceGetMetadataRequest extends SpeakeasyBase {
    /**
     * A source that records can be read and decoded from.
     */
    source?: Source;
}
