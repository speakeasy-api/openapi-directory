import { SpeakeasyBase } from "../../../internal/utils";
import { UrlMap } from "./urlmap";
export declare enum UrlMapsValidateRequestLoadBalancingSchemesEnum {
    External = "EXTERNAL",
    ExternalManaged = "EXTERNAL_MANAGED",
    LoadBalancingSchemeUnspecified = "LOAD_BALANCING_SCHEME_UNSPECIFIED"
}
export declare class UrlMapsValidateRequest extends SpeakeasyBase {
    /**
     * Specifies the load balancer type(s) this validation request is for. Use EXTERNAL_MANAGED for HTTP/HTTPS External Global Load Balancer with Advanced Traffic Management. Use EXTERNAL for Classic HTTP/HTTPS External Global Load Balancer. Other load balancer types are not supported. For more information, refer to Choosing a load balancer. If unspecified, the load balancing scheme will be inferred from the backend service resources this URL map references. If that can not be inferred (for example, this URL map only references backend buckets, or this Url map is for rewrites and redirects only and doesn't reference any backends), EXTERNAL will be used as the default type. If specified, the scheme(s) must not conflict with the load balancing scheme of the backend service resources this Url map references.
     */
    loadBalancingSchemes?: UrlMapsValidateRequestLoadBalancingSchemesEnum[];
    /**
     * Represents a URL Map resource. Compute Engine has two URL Map resources: * [Global](/compute/docs/reference/rest/beta/urlMaps) * [Regional](/compute/docs/reference/rest/beta/regionUrlMaps) A URL map resource is a component of certain types of cloud load balancers and Traffic Director: * urlMaps are used by external HTTP(S) load balancers and Traffic Director. * regionUrlMaps are used by internal HTTP(S) load balancers. For a list of supported URL map features by the load balancer type, see the Load balancing features: Routing and traffic management table. For a list of supported URL map features for Traffic Director, see the Traffic Director features: Routing and traffic management table. This resource defines mappings from hostnames and URL paths to either a backend service or a backend bucket. To use the global urlMaps resource, the backend service must have a loadBalancingScheme of either EXTERNAL or INTERNAL_SELF_MANAGED. To use the regionUrlMaps resource, the backend service must have a loadBalancingScheme of INTERNAL_MANAGED. For more information, read URL Map Concepts.
     */
    resource?: UrlMap;
}
