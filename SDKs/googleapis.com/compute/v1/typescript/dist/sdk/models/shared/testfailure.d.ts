import { SpeakeasyBase } from "../../../internal/utils";
import { UrlMapTestHeader } from "./urlmaptestheader";
export declare class TestFailure extends SpeakeasyBase {
    /**
     * The actual output URL evaluated by a load balancer containing the scheme, host, path and query parameters.
     */
    actualOutputUrl?: string;
    /**
     * Actual HTTP status code for rule with `urlRedirect` calculated by load balancer
     */
    actualRedirectResponseCode?: number;
    /**
     * BackendService or BackendBucket returned by load balancer.
     */
    actualService?: string;
    /**
     * The expected output URL evaluated by a load balancer containing the scheme, host, path and query parameters.
     */
    expectedOutputUrl?: string;
    /**
     * Expected HTTP status code for rule with `urlRedirect` calculated by load balancer
     */
    expectedRedirectResponseCode?: number;
    /**
     * Expected BackendService or BackendBucket resource the given URL should be mapped to.
     */
    expectedService?: string;
    /**
     * HTTP headers of the request.
     */
    headers?: UrlMapTestHeader[];
    /**
     * Host portion of the URL.
     */
    host?: string;
    /**
     * Path portion including query parameters in the URL.
     */
    path?: string;
}
