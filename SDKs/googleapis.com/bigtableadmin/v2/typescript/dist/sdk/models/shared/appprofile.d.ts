import { SpeakeasyBase } from "../../../internal/utils";
import { MultiClusterRoutingUseAny } from "./multiclusterroutinguseany";
import { SingleClusterRouting } from "./singleclusterrouting";
/**
 * A configuration object describing how Cloud Bigtable should treat traffic from a particular end user application.
 */
export declare class AppProfile extends SpeakeasyBase {
    /**
     * Long form description of the use case for this AppProfile.
     */
    description?: string;
    /**
     * Strongly validated etag for optimistic concurrency control. Preserve the value returned from `GetAppProfile` when calling `UpdateAppProfile` to fail the request if there has been a modification in the mean time. The `update_mask` of the request need not include `etag` for this protection to apply. See [Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag) and [RFC 7232](https://tools.ietf.org/html/rfc7232#section-2.3) for more details.
     */
    etag?: string;
    /**
     * Read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes consistency to improve availability.
     */
    multiClusterRoutingUseAny?: MultiClusterRoutingUseAny;
    /**
     * The unique name of the app profile. Values are of the form `projects/{project}/instances/{instance}/appProfiles/_a-zA-Z0-9*`.
     */
    name?: string;
    /**
     * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
     */
    singleClusterRouting?: SingleClusterRouting;
}
