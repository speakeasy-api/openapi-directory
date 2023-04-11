import { SpeakeasyBase } from "../../../internal/utils";
export declare class BrowserBotResponse extends SpeakeasyBase {
    /**
     * The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML
     */
    content: string;
    /**
     * Array containing all the elements matching the supplied selector. <br>Each element object will contain the text content, HTML content and all current element attributes
     */
    elements: string[];
    /**
     * Contains the error message if an error has occurred ('is-error' will be true)
     */
    errorMessage: string;
    /**
     * If you executed any JavaScript this array holds the results as objects
     */
    execResults: string[];
    /**
     * The redirected URL if the URL responded with an HTTP redirect
     */
    httpRedirectUrl: string;
    /**
     * The HTTP status code the URL returned
     */
    httpStatusCode: number;
    /**
     * The HTTP status message the URL returned
     */
    httpStatusMessage: string;
    /**
     * True if an error has occurred loading the page. Check the 'error-message' field for details
     */
    isError: boolean;
    /**
     * True if the HTTP status is OK (200)
     */
    isHttpOk: boolean;
    /**
     * True if the URL responded with an HTTP redirect
     */
    isHttpRedirect: boolean;
    /**
     * True if the page is secured using TLS/SSL
     */
    isSecure: boolean;
    /**
     * True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'
     */
    isTimeout: boolean;
    /**
     * The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
     */
    languageCode: string;
    /**
     * The number of seconds taken to load the page (from initial request until DOM ready)
     */
    loadTime: number;
    /**
     * The document MIME type
     */
    mimeType: string;
    /**
     * Map containing all the HTTP response headers the URL responded with
     */
    responseHeaders: Record<string, string>;
    /**
     * Map containing details of the TLS/SSL setup
     */
    securityDetails: Record<string, string>;
    /**
     * The HTTP servers IP address
     */
    serverIp: string;
    /**
     * The document title
     */
    title: string;
    /**
     * The page URL
     */
    url: string;
}
