import { SpeakeasyBase } from "../../../internal/utils";
import { HttpRouteCorsPolicy } from "./httproutecorspolicy";
import { HttpRouteDestination } from "./httproutedestination";
import { HttpRouteFaultInjectionPolicy } from "./httproutefaultinjectionpolicy";
import { HttpRouteHeaderModifier } from "./httprouteheadermodifier";
import { HttpRouteRedirect } from "./httprouteredirect";
import { HttpRouteRequestMirrorPolicy } from "./httprouterequestmirrorpolicy";
import { HttpRouteRetryPolicy } from "./httprouteretrypolicy";
import { HttpRouteURLRewrite } from "./httprouteurlrewrite";
/**
 * The specifications for routing traffic and applying associated policies.
 */
export declare class HttpRouteRouteAction extends SpeakeasyBase {
    /**
     * The Specification for allowing client side cross-origin requests.
     */
    corsPolicy?: HttpRouteCorsPolicy;
    /**
     * The destination to which traffic should be forwarded.
     */
    destinations?: HttpRouteDestination[];
    /**
     * The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
     */
    faultInjectionPolicy?: HttpRouteFaultInjectionPolicy;
    /**
     * The specification for redirecting traffic.
     */
    redirect?: HttpRouteRedirect;
    /**
     * The specification for modifying HTTP header in HTTP request and HTTP response.
     */
    requestHeaderModifier?: HttpRouteHeaderModifier;
    /**
     * Specifies the policy on how requests are shadowed to a separate mirrored destination service. The proxy does not wait for responses from the shadow service. Prior to sending traffic to the shadow service, the host/authority header is suffixed with -shadow.
     */
    requestMirrorPolicy?: HttpRouteRequestMirrorPolicy;
    /**
     * The specification for modifying HTTP header in HTTP request and HTTP response.
     */
    responseHeaderModifier?: HttpRouteHeaderModifier;
    /**
     * The specifications for retries.
     */
    retryPolicy?: HttpRouteRetryPolicy;
    /**
     * Specifies the timeout for selected route. Timeout is computed from the time the request has been fully processed (i.e. end of stream) up until the response has been completely processed. Timeout includes all retries.
     */
    timeout?: string;
    /**
     * The specification for modifying the URL of the request, prior to forwarding the request to the destination.
     */
    urlRewrite?: HttpRouteURLRewrite;
}
