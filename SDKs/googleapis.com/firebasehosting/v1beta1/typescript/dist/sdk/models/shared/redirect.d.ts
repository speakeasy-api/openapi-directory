import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A [`Redirect`](https://firebase.google.com/docs/hosting/full-config#redirects) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond with a redirect to the specified destination path.
 */
export declare class Redirect extends SpeakeasyBase {
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string;
    /**
     * Required. The value to put in the HTTP location header of the response. The location can contain capture group values from the pattern using a `:` prefix to identify the segment and an optional `*` to capture the rest of the URL. For example: "glob": "/:capture*", "statusCode": 301, "location": "https://example.com/foo/:capture"
     */
    location?: string;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string;
    /**
     * Required. The status HTTP code to return in the response. It must be a valid 3xx status code.
     */
    statusCode?: number;
}
