import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeVersion } from "./runtimeversion";
/**
 * Response for ListRuntimeVersions.
 */
export declare class ListRuntimeVersionsResponse extends SpeakeasyBase {
    /**
     * The next page token or empty if none.
     */
    nextPageToken?: string;
    /**
     * The listed nodes.
     */
    runtimeVersions?: RuntimeVersion[];
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
