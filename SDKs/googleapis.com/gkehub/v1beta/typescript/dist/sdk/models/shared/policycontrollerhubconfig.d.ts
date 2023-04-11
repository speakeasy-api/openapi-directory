import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerMonitoringConfig } from "./policycontrollermonitoringconfig";
import { PolicyControllerPolicyContentSpec } from "./policycontrollerpolicycontentspec";
import { PolicyControllerPolicyControllerDeploymentConfig } from "./policycontrollerpolicycontrollerdeploymentconfig";
import { PolicyControllerTemplateLibraryConfig } from "./policycontrollertemplatelibraryconfig";
/**
 * The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state.
 */
export declare enum PolicyControllerHubConfigInstallSpecEnum {
    InstallSpecUnspecified = "INSTALL_SPEC_UNSPECIFIED",
    InstallSpecNotInstalled = "INSTALL_SPEC_NOT_INSTALLED",
    InstallSpecEnabled = "INSTALL_SPEC_ENABLED",
    InstallSpecSuspended = "INSTALL_SPEC_SUSPENDED"
}
/**
 * Configuration for Policy Controller
 */
export declare class PolicyControllerHubConfig extends SpeakeasyBase {
    /**
     * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
     */
    auditIntervalSeconds?: string;
    /**
     * The maximum number of audit violations to be stored in a constraint. If not set, the internal default (currently 20) will be used.
     */
    constraintViolationLimit?: string;
    /**
     * Map of deployment configs to deployments (“admission”, “audit”, “mutation”).
     */
    deploymentConfigs?: Record<string, PolicyControllerPolicyControllerDeploymentConfig>;
    /**
     * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
     */
    exemptableNamespaces?: string[];
    /**
     * The install_spec represents the intended state specified by the latest request that mutated install_spec in the feature spec, not the lifecycle state of the feature observed by the Hub feature controller that is reported in the feature state.
     */
    installSpec?: PolicyControllerHubConfigInstallSpecEnum;
    /**
     * Logs all denies and dry run failures.
     */
    logDeniesEnabled?: boolean;
    /**
     * MonitoringConfig specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
     */
    monitoring?: PolicyControllerMonitoringConfig;
    /**
     * Enables the ability to mutate resources using Policy Controller.
     */
    mutationEnabled?: boolean;
    /**
     * PolicyContentSpec defines the user's desired content configuration on the cluster.
     */
    policyContent?: PolicyControllerPolicyContentSpec;
    /**
     * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
     */
    referentialRulesEnabled?: boolean;
    /**
     * The config specifying which default library templates to install.
     */
    templateLibraryConfig?: PolicyControllerTemplateLibraryConfig;
}
