import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Cloud Run service destination.
 */
export declare class CloudRunService extends SpeakeasyBase {
    /**
     * Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
     */
    path?: string;
    /**
     * Required. The region the Cloud Run service is deployed in.
     */
    region?: string;
    /**
     * Required. The name of the Cloud run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.
     */
    service?: string;
}
