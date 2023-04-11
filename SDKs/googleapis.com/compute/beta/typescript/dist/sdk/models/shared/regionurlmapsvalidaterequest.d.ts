import { SpeakeasyBase } from "../../../internal/utils";
import { UrlMap } from "./urlmap";
export declare class RegionUrlMapsValidateRequest extends SpeakeasyBase {
    /**
     * Represents a URL Map resource. Compute Engine has two URL Map resources: * [Global](/compute/docs/reference/rest/beta/urlMaps) * [Regional](/compute/docs/reference/rest/beta/regionUrlMaps) A URL map resource is a component of certain types of cloud load balancers and Traffic Director: * urlMaps are used by external HTTP(S) load balancers and Traffic Director. * regionUrlMaps are used by internal HTTP(S) load balancers. For a list of supported URL map features by the load balancer type, see the Load balancing features: Routing and traffic management table. For a list of supported URL map features for Traffic Director, see the Traffic Director features: Routing and traffic management table. This resource defines mappings from hostnames and URL paths to either a backend service or a backend bucket. To use the global urlMaps resource, the backend service must have a loadBalancingScheme of either EXTERNAL or INTERNAL_SELF_MANAGED. To use the regionUrlMaps resource, the backend service must have a loadBalancingScheme of INTERNAL_MANAGED. For more information, read URL Map Concepts.
     */
    resource?: UrlMap;
}
