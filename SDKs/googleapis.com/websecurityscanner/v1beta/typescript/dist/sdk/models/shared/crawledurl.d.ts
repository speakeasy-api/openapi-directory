import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
 */
export declare class CrawledUrl extends SpeakeasyBase {
    /**
     * The body of the request that was used to visit the URL.
     */
    body?: string;
    /**
     * The http method of the request that was used to visit the URL, in uppercase.
     */
    httpMethod?: string;
    /**
     * The URL that was crawled.
     */
    url?: string;
}
