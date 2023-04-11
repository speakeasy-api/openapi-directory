import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A configured rewrite that directs requests to a Cloud Run service. If the Cloud Run service does not exist when setting or updating your Firebase Hosting configuration, then the request fails. Any errors from the Cloud Run service are passed to the end user (for example, if you delete a service, any requests directed to that service receive a `404` error).
 */
export declare class CloudRunRewrite extends SpeakeasyBase {
    /**
     * Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
     */
    region?: string;
    /**
     * Required. User-defined ID of the Cloud Run service.
     */
    serviceId?: string;
}
