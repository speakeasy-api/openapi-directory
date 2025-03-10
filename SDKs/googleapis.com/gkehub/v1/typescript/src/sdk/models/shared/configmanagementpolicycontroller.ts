/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConfigManagementPolicyControllerMonitoring } from "./configmanagementpolicycontrollermonitoring";
import { Expose, Type } from "class-transformer";

/**
 * Configuration for Policy Controller
 */
export class ConfigManagementPolicyController extends SpeakeasyBase {
  /**
   * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "auditIntervalSeconds" })
  auditIntervalSeconds?: string;

  /**
   * Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "enabled" })
  enabled?: boolean;

  /**
   * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "exemptableNamespaces" })
  exemptableNamespaces?: string[];

  /**
   * Logs all denies and dry run failures.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "logDeniesEnabled" })
  logDeniesEnabled?: boolean;

  /**
   * PolicyControllerMonitoring specifies the backends Policy Controller should export metrics to. For example, to specify metrics should be exported to Cloud Monitoring and Prometheus, specify backends: ["cloudmonitoring", "prometheus"]
   */
  @SpeakeasyMetadata()
  @Expose({ name: "monitoring" })
  @Type(() => ConfigManagementPolicyControllerMonitoring)
  monitoring?: ConfigManagementPolicyControllerMonitoring;

  /**
   * Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mutationEnabled" })
  mutationEnabled?: boolean;

  /**
   * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "referentialRulesEnabled" })
  referentialRulesEnabled?: boolean;

  /**
   * Installs the default template library along with Policy Controller.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "templateLibraryInstalled" })
  templateLibraryInstalled?: boolean;
}
