import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
 */
export declare class HttpRouteURLRewrite extends SpeakeasyBase {
    /**
     * Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
     */
    hostRewrite?: string;
    /**
     * Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
     */
    pathPrefixRewrite?: string;
}
