import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Edge } from "./googlecloudassetv1edge";
import { GoogleCloudAssetV1Identity } from "./googlecloudassetv1identity";
/**
 * The identities and group edges.
 */
export declare class GoogleCloudAssetV1IdentityList extends SpeakeasyBase {
    /**
     * Group identity edges of the graph starting from the binding's group members to any node of the identities. The Edge.source_node contains a group, such as `group:parent@google.com`. The Edge.target_node contains a member of the group, such as `group:child@google.com` or `user:foo@google.com`. This field is present only if the output_group_edges option is enabled in request.
     */
    groupEdges?: GoogleCloudAssetV1Edge[];
    /**
     * Only the identities that match one of the following conditions will be presented: - The identity_selector, if it is specified in request; - Otherwise, identities reachable from the policy binding's members.
     */
    identities?: GoogleCloudAssetV1Identity[];
}
