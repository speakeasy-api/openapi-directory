import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { RouteSpec } from "./routespec";
import { RouteStatus } from "./routestatus";
/**
 * Route is responsible for configuring ingress over a collection of Revisions. Some of the Revisions a Route distributes traffic over may be specified by referencing the Configuration responsible for creating them; in these cases the Route is additionally responsible for monitoring the Configuration for "latest ready" revision changes, and smoothly rolling out latest revisions. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#route Cloud Run currently supports referencing a single Configuration to automatically deploy the "latest ready" Revision from that Configuration.
 */
export declare class Route extends SpeakeasyBase {
    /**
     * The API version for this call such as "serving.knative.dev/v1".
     */
    apiVersion?: string;
    /**
     * The kind of this resource, in this case always "Route".
     */
    kind?: string;
    /**
     * k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
     */
    metadata?: ObjectMeta;
    /**
     * RouteSpec holds the desired state of the Route (from the client).
     */
    spec?: RouteSpec;
    /**
     * RouteStatus communicates the observed state of the Route (from the controller).
     */
    status?: RouteStatus;
}
