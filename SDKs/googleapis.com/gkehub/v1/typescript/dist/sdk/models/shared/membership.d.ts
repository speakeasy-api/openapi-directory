import { SpeakeasyBase } from "../../../internal/utils";
import { Authority, AuthorityInput } from "./authority";
import { MembershipEndpoint, MembershipEndpointInput } from "./membershipendpoint";
import { MembershipState } from "./membershipstate";
/**
 * Membership contains information about a member cluster.
 */
export declare class Membership extends SpeakeasyBase {
    /**
     * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
     */
    authority?: Authority;
    /**
     * Output only. When the Membership was created.
     */
    createTime?: string;
    /**
     * Output only. When the Membership was deleted.
     */
    deleteTime?: string;
    /**
     * Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes.
     */
    description?: string;
    /**
     * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
     */
    endpoint?: MembershipEndpoint;
    /**
     * Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.
     */
    externalId?: string;
    /**
     * Optional. GCP labels for this membership.
     */
    labels?: Record<string, string>;
    /**
     * Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.
     */
    lastConnectionTime?: string;
    /**
     * Output only. The full, unique name of this Membership resource in the format `projects/* /locations/* /memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label: 1. At most 63 characters in length 2. It must consist of lower case alphanumeric characters or `-` 3. It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9]([-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.
     */
    name?: string;
    /**
     * MembershipState describes the state of a Membership resource.
     */
    state?: MembershipState;
    /**
     * Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique_id.
     */
    uniqueId?: string;
    /**
     * Output only. When the Membership was last updated.
     */
    updateTime?: string;
}
/**
 * Membership contains information about a member cluster.
 */
export declare class MembershipInput extends SpeakeasyBase {
    /**
     * Authority encodes how Google will recognize identities from this Membership. See the workload identity documentation for more details: https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity
     */
    authority?: AuthorityInput;
    /**
     * MembershipEndpoint contains information needed to contact a Kubernetes API, endpoint and any additional Kubernetes metadata.
     */
    endpoint?: MembershipEndpointInput;
    /**
     * Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.
     */
    externalId?: string;
    /**
     * Optional. GCP labels for this membership.
     */
    labels?: Record<string, string>;
}
