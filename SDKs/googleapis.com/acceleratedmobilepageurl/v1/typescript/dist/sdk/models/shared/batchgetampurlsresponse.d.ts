import { SpeakeasyBase } from "../../../internal/utils";
import { AmpUrl } from "./ampurl";
import { AmpUrlError } from "./ampurlerror";
/**
 * Batch AMP URL response.
 */
export declare class BatchGetAmpUrlsResponse extends SpeakeasyBase {
    /**
     * For each URL in BatchAmpUrlsRequest, the URL response. The response might not be in the same order as URLs in the batch request. If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only once.
     */
    ampUrls?: AmpUrl[];
    /**
     * The errors for requested URLs that have no AMP URL.
     */
    urlErrors?: AmpUrlError[];
}
