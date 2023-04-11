import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderOption } from "./httpheaderoption";
/**
 * The request and response header transformations that take effect before the request is passed along to the selected backendService.
 */
export declare class HttpHeaderAction extends SpeakeasyBase {
    /**
     * Headers to add to a matching request before forwarding the request to the backendService.
     */
    requestHeadersToAdd?: HttpHeaderOption[];
    /**
     * A list of header names for headers that need to be removed from the request before forwarding the request to the backendService.
     */
    requestHeadersToRemove?: string[];
    /**
     * Headers to add the response before sending the response back to the client.
     */
    responseHeadersToAdd?: HttpHeaderOption[];
    /**
     * A list of header names for headers that need to be removed from the response before sending the response back to the client.
     */
    responseHeadersToRemove?: string[];
}
