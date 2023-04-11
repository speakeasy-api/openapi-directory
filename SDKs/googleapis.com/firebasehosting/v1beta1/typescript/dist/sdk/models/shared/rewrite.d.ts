import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunRewrite } from "./cloudrunrewrite";
/**
 * A [`Rewrite`](https://firebase.google.com/docs/hosting/full-config#rewrites) specifies a URL pattern that, if matched to the request URL path, triggers Hosting to respond as if the service were given the specified destination URL.
 */
export declare class Rewrite extends SpeakeasyBase {
    /**
     * The request will be forwarded to Firebase Dynamic Links.
     */
    dynamicLinks?: boolean;
    /**
     * The function to proxy requests to. Must match the exported function name exactly.
     */
    function?: string;
    /**
     * Optional. Specify a Cloud region for rewritten Functions invocations. If not provided, defaults to us-central1.
     */
    functionRegion?: string;
    /**
     * The user-supplied [glob](https://firebase.google.com/docs/hosting/full-config#glob_pattern_matching) to match against the request URL path.
     */
    glob?: string;
    /**
     * The URL path to rewrite the request to.
     */
    path?: string;
    /**
     * The user-supplied RE2 regular expression to match against the request URL path.
     */
    regex?: string;
    /**
     * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
     */
    run?: CloudRunRewrite;
}
