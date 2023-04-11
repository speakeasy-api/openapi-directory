import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1EgressPolicy } from "./googleidentityaccesscontextmanagerv1egresspolicy";
import { GoogleIdentityAccesscontextmanagerV1IngressPolicy } from "./googleidentityaccesscontextmanagerv1ingresspolicy";
import { GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices } from "./googleidentityaccesscontextmanagerv1vpcaccessibleservices";
/**
 * `ServicePerimeterConfig` specifies a set of Google Cloud resources that describe specific Service Perimeter configuration.
 */
export declare class GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig extends SpeakeasyBase {
    /**
     * A list of `AccessLevel` resource names that allow resources within the `ServicePerimeter` to be accessed from the internet. `AccessLevels` listed must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent `AccessLevel` is a syntax error. If no `AccessLevel` names are listed, resources within the perimeter can only be accessed via Google Cloud calls with request origins within the perimeter. Example: `"accessPolicies/MY_POLICY/accessLevels/MY_LEVEL"`. For Service Perimeter Bridge, must be empty.
     */
    accessLevels?: string[];
    /**
     * List of EgressPolicies to apply to the perimeter. A perimeter may have multiple EgressPolicies, each of which is evaluated separately. Access is granted if any EgressPolicy grants it. Must be empty for a perimeter bridge.
     */
    egressPolicies?: GoogleIdentityAccesscontextmanagerV1EgressPolicy[];
    /**
     * List of IngressPolicies to apply to the perimeter. A perimeter may have multiple IngressPolicies, each of which is evaluated separately. Access is granted if any Ingress Policy grants it. Must be empty for a perimeter bridge.
     */
    ingressPolicies?: GoogleIdentityAccesscontextmanagerV1IngressPolicy[];
    /**
     * A list of Google Cloud resources that are inside of the service perimeter. Currently only projects and VPCs are allowed. Project format: `projects/{project_number}` VPC network format: `//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}`.
     */
    resources?: string[];
    /**
     * Google Cloud services that are subject to the Service Perimeter restrictions. For example, if `storage.googleapis.com` is specified, access to the storage buckets inside the perimeter must meet the perimeter's access restrictions.
     */
    restrictedServices?: string[];
    /**
     * Specifies how APIs are allowed to communicate within the Service Perimeter.
     */
    vpcAccessibleServices?: GoogleIdentityAccesscontextmanagerV1VpcAccessibleServices;
}
