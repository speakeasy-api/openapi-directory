import { SpeakeasyBase } from "../../../internal/utils";
import { HTTPHeader } from "./httpheader";
/**
 * Not supported by Cloud Run HTTPGetAction describes an action based on HTTP Get requests.
 */
export declare class HTTPGetAction extends SpeakeasyBase {
    /**
     * (Optional) Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.
     */
    host?: string;
    /**
     * (Optional) Custom headers to set in the request. HTTP allows repeated headers.
     */
    httpHeaders?: HTTPHeader[];
    /**
     * (Optional) Path to access on the HTTP server.
     */
    path?: string;
    /**
     * (Optional) Scheme to use for connecting to the host. Defaults to HTTP.
     */
    scheme?: string;
}
