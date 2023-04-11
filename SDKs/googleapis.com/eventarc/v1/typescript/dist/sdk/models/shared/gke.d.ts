import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a GKE destination.
 */
export declare class Gke extends SpeakeasyBase {
    /**
     * Required. The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.
     */
    cluster?: string;
    /**
     * Required. The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.
     */
    location?: string;
    /**
     * Required. The namespace the GKE service is running in.
     */
    namespace?: string;
    /**
     * Optional. The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
     */
    path?: string;
    /**
     * Required. Name of the GKE service.
     */
    service?: string;
}
