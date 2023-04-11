import { SpeakeasyBase } from "../../../internal/utils";
import { HTTPHeader } from "./httpheader";
/**
 * HTTPGetAction describes an action based on HTTP Get requests.
 */
export declare class HTTPGetAction extends SpeakeasyBase {
    /**
     * Not supported by Cloud Run.
     */
    host?: string;
    /**
     * Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: HTTPHeader[];
    /**
     * Path to access on the HTTP server.
     */
    path?: string;
    /**
     * Port number to access on the container. Number must be in the range 1 to 65535.
     */
    port?: number;
    /**
     * Not supported by Cloud Run.
     */
    scheme?: string;
}
