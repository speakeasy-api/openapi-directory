import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceOptions represent options for Kubernetes resource generation.
 */
export declare class ResourceOptions extends SpeakeasyBase {
    /**
     * Optional. The Connect agent version to use for connect_resources. Defaults to the latest GKE Connect version. The version must be a currently supported version, obsolete versions will be rejected.
     */
    connectVersion?: string;
    /**
     * Optional. Major version of the Kubernetes cluster. This is only used to determine which version to use for the CustomResourceDefinition resources, `apiextensions/v1beta1` or`apiextensions/v1`.
     */
    k8sVersion?: string;
    /**
     * Optional. Use `apiextensions/v1beta1` instead of `apiextensions/v1` for CustomResourceDefinition resources. This option should be set for clusters with Kubernetes apiserver versions <1.16.
     */
    v1beta1Crd?: boolean;
}
