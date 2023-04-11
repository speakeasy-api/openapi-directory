import { SpeakeasyBase } from "../../../internal/utils";
import { HttpHeaderAction } from "./httpheaderaction";
/**
 * In contrast to a single BackendService in HttpRouteAction to which all matching traffic is directed to, WeightedBackendService allows traffic to be split across multiple backend services. The volume of traffic for each backend service is proportional to the weight specified in each WeightedBackendService
 */
export declare class WeightedBackendService extends SpeakeasyBase {
    /**
     * The full or partial URL to the default BackendService resource. Before forwarding the request to backendService, the load balancer applies any relevant headerActions specified as part of this backendServiceWeight.
     */
    backendService?: string;
    /**
     * The request and response header transformations that take effect before the request is passed along to the selected backendService.
     */
    headerAction?: HttpHeaderAction;
    /**
     * Specifies the fraction of traffic sent to a backend service, computed as weight / (sum of all weightedBackendService weights in routeAction) . The selection of a backend service is determined only for new traffic. Once a user's request has been directed to a backend service, subsequent requests are sent to the same backend service as determined by the backend service's session affinity policy. The value must be from 0 to 1000.
     */
    weight?: number;
}
