import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Management specifies how the bundle will be managed by the controller. TODO (b/271878194): Remove this
 */
export declare enum PolicyControllerBundleInstallSpecManagementEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    Installed = "INSTALLED"
}
/**
 * BundleInstallSpec is the specification configuration for a single managed bundle.
 */
export declare class PolicyControllerBundleInstallSpec extends SpeakeasyBase {
    /**
     * the set of namespaces to be exempted from the bundle TODO (b/271878194): Decrement this
     */
    exemptedNamespaces?: string[];
    /**
     * Management specifies how the bundle will be managed by the controller. TODO (b/271878194): Remove this
     */
    management?: PolicyControllerBundleInstallSpecManagementEnum;
}
