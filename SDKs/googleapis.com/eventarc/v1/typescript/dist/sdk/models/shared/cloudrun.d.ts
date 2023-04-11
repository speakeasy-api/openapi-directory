import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Cloud Run destination.
 */
export declare class CloudRun extends SpeakeasyBase {
    /**
     * Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
     */
    path?: string;
    /**
     * Required. The region the Cloud Run service is deployed in.
     */
    region?: string;
    /**
     * Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project as the trigger object can be addressed.
     */
    service?: string;
}
