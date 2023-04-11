import { SpeakeasyBase } from "../../../internal/utils";
import { Binding } from "./binding";
import { GoogleCloudAssetV1p4beta1AccessControlList } from "./googlecloudassetv1p4beta1accesscontrollist";
import { GoogleCloudAssetV1p4beta1IdentityList } from "./googlecloudassetv1p4beta1identitylist";
/**
 * IAM Policy analysis result, consisting of one IAM policy binding and derived access control lists.
 */
export declare class IamPolicyAnalysisResult extends SpeakeasyBase {
    /**
     * The access control lists derived from the iam_binding that match or potentially match resource and access selectors specified in the request.
     */
    accessControlLists?: GoogleCloudAssetV1p4beta1AccessControlList[];
    /**
     * The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format) of the resource to which the iam_binding policy attaches.
     */
    attachedResourceFullName?: string;
    /**
     * Represents whether all analyses on the iam_binding have successfully finished.
     */
    fullyExplored?: boolean;
    /**
     * Associates `members`, or principals, with a `role`.
     */
    iamBinding?: Binding;
    identityList?: GoogleCloudAssetV1p4beta1IdentityList;
}
