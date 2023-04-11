import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The spec for modifying the path before sending the request to the matched backend service.
 */
export declare class UrlRewrite extends SpeakeasyBase {
    /**
     * Before forwarding the request to the selected service, the request's host header is replaced with contents of hostRewrite. The value must be from 1 to 255 characters.
     */
    hostRewrite?: string;
    /**
     * Before forwarding the request to the selected backend service, the matching portion of the request's path is replaced by pathPrefixRewrite. The value must be from 1 to 1024 characters.
     */
    pathPrefixRewrite?: string;
}
