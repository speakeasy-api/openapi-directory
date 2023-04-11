import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.
 */
export declare class GdataContentTypeInfo extends SpeakeasyBase {
    /**
     * Scotty's best guess of what the content type of the file is.
     */
    bestGuess?: string;
    /**
     * The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.
     */
    fromBytes?: string;
    /**
     * The content type of the file derived from the file extension of the original file name used by the client.
     */
    fromFileName?: string;
    /**
     * The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.
     */
    fromHeader?: string;
    /**
     * The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).
     */
    fromUrlPath?: string;
}
