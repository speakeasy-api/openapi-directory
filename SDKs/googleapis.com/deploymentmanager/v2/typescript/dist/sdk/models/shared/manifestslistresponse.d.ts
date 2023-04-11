import { SpeakeasyBase } from "../../../internal/utils";
import { Manifest } from "./manifest";
/**
 * A response containing a partial list of manifests and a page token used to build the next request if the request has been truncated.
 */
export declare class ManifestsListResponse extends SpeakeasyBase {
    /**
     * Output only. Manifests contained in this list response.
     */
    manifests?: Manifest[];
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;
}
