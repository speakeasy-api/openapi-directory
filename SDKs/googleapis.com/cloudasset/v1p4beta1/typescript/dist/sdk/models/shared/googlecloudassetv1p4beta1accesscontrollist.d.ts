import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1Access } from "./googlecloudassetv1p4beta1access";
import { GoogleCloudAssetV1p4beta1Edge } from "./googlecloudassetv1p4beta1edge";
import { GoogleCloudAssetV1p4beta1Resource } from "./googlecloudassetv1p4beta1resource";
/**
 * An access control list, derived from the above IAM policy binding, which contains a set of resources and accesses. May include one item from each set to compose an access control entry. NOTICE that there could be multiple access control lists for one IAM policy binding. The access control lists are created based on resource and access combinations. For example, assume we have the following cases in one IAM policy binding: - Permission P1 and P2 apply to resource R1 and R2; - Permission P3 applies to resource R2 and R3; This will result in the following access control lists: - AccessControlList 1: [R1, R2], [P1, P2] - AccessControlList 2: [R2, R3], [P3]
 */
export declare class GoogleCloudAssetV1p4beta1AccessControlList extends SpeakeasyBase {
    /**
     * The accesses that match one of the following conditions: - The access_selector, if it is specified in request; - Otherwise, access specifiers reachable from the policy binding's role.
     */
    accesses?: GoogleCloudAssetV1p4beta1Access[];
    /**
     * Resource edges of the graph starting from the policy attached resource to any descendant resources. The Edge.source_node contains the full resource name of a parent resource and Edge.target_node contains the full resource name of a child resource. This field is present only if the output_resource_edges option is enabled in request.
     */
    resourceEdges?: GoogleCloudAssetV1p4beta1Edge[];
    /**
     * The resources that match one of the following conditions: - The resource_selector, if it is specified in request; - Otherwise, resources reachable from the policy attached resource.
     */
    resources?: GoogleCloudAssetV1p4beta1Resource[];
}
