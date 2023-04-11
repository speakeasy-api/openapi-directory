import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
 */
export declare class CrawledUrl extends SpeakeasyBase {
    /**
     * Output only. The body of the request that was used to visit the URL.
     */
    body?: string;
    /**
     * Output only. The http method of the request that was used to visit the URL, in uppercase.
     */
    httpMethod?: string;
    /**
     * Output only. The URL that was crawled.
     */
    url?: string;
}
