import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerBundleInstallSpec } from "./policycontrollerbundleinstallspec";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";
/**
 * PolicyContentSpec defines the user's desired content configuration on the cluster.
 */
export declare class PolicyControllerPolicyContentSpec extends SpeakeasyBase {
    /**
     * map of bundle name to BundleInstallSpec. The bundle name maps to the `bundleName` key in the `policycontroller.gke.io/constraintData` annotation on a constraint.
     */
    bundles?: Record<string, PolicyControllerBundleInstallSpec>;
    /**
     * The config specifying which default library templates to install.
     */
    templateLibrary?: PolicyControllerTemplateLibraryConfig;
}
