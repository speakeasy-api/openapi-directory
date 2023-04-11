import { SpeakeasyBase } from "../../../internal/utils";
export declare class URLInfoResponse extends SpeakeasyBase {
    /**
     * The actual content this URL responded with. Only set if the 'fetch-content' option was used
     */
    content: string;
    /**
     * The encoding format the URL uses
     */
    contentEncoding: string;
    /**
     * The size of the URL content in bytes
     */
    contentSize: number;
    /**
     * The content-type this URL serves
     */
    contentType: string;
    /**
     * True if this URL responded with an HTTP OK (200) status
     */
    httpOk: boolean;
    /**
     * True if this URL responded with an HTTP redirect
     */
    httpRedirect: boolean;
    /**
     * The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue
     */
    httpStatus: number;
    /**
     * The HTTP status message assoicated with the status code
     */
    httpStatusMessage: number;
    /**
     * True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts
     */
    isError: boolean;
    /**
     * True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'
     */
    isTimeout: boolean;
    /**
     * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
     */
    languageCode: string;
    /**
     * The time taken to load the URL content in seconds
     */
    loadTime: number;
    /**
     * A key-value map of the URL query paramaters
     */
    query: Record<string, string>;
    /**
     * Is this URL actually serving real content
     */
    real: boolean;
    /**
     * The servers IP geo-location: full city name (if detectable)
     */
    serverCity: string;
    /**
     * The servers IP geo-location: full country name
     */
    serverCountry: string;
    /**
     * The servers IP geo-location: ISO 2-letter country code
     */
    serverCountryCode: string;
    /**
     * The servers hostname (PTR record)
     */
    serverHostname: string;
    /**
     * The IP address of the server hosting this URL
     */
    serverIp: string;
    /**
     * The name of the server software hosting this URL
     */
    serverName: string;
    /**
     * The servers IP geo-location: full region name (if detectable)
     */
    serverRegion: string;
    /**
     * The document title
     */
    title: string;
    /**
     * The fully qualified URL. This may be different to the URL requested if http-redirect is true
     */
    url: string;
    /**
     * The URL path
     */
    urlPath: string;
    /**
     * The URL port
     */
    urlPort: number;
    /**
     * The URL protocol, usually http or https
     */
    urlProtocol: string;
    /**
     * Is this a valid well-formed URL
     */
    valid: boolean;
}
