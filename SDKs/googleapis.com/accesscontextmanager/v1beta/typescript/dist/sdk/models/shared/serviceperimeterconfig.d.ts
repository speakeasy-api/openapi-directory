import { SpeakeasyBase } from "../../../internal/utils";
import { VpcAccessibleServices } from "./vpcaccessibleservices";
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
 */
export declare class ServicePerimeterConfig extends SpeakeasyBase {
    /**
     * A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty.
     */
    accessLevels?: string[];
    /**
     * A list of Google Cloud resources that are inside of the service perimeter. Currently only projects are allowed. Format: `projects/{project_number}`
     */
    resources?: string[];
    /**
     * Google Cloud services that are subject to the Service Perimeter restrictions. Must contain a list of services. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions.
     */
    restrictedServices?: string[];
    /**
     * Google Cloud services that are not subject to the Service Perimeter restrictions. Deprecated. Must be set to a single wildcard "*". The wildcard means that unless explicitly specified by "restricted_services" list, any service is treated as unrestricted.
     */
    unrestrictedServices?: string[];
    /**
     * Specifies how APIs are allowed to communicate within the Service Perimeter.
     */
    vpcAccessibleServices?: VpcAccessibleServices;
}
