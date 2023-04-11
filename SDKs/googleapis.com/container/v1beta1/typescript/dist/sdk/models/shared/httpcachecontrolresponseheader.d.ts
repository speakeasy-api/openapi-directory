import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RFC-2616: cache control support
 */
export declare class HttpCacheControlResponseHeader extends SpeakeasyBase {
    /**
     * 14.6 response cache age, in seconds since the response is generated
     */
    age?: string;
    /**
     * 14.9 request and response directives
     */
    directive?: string;
    /**
     * 14.21 response cache expires, in RFC 1123 date format
     */
    expires?: string;
}
