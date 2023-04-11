import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A [`Header`](https://firebase.google.com/docs/hosting/full-config#headers) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to apply the specified custom response headers.
 */
export declare class Header extends SpeakeasyBase {
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string;
    /**
     * Required. The additional headers to add to the response.
     */
    headers?: Record<string, string>;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string;
}
