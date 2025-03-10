/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ManagedPrometheusConfig } from "./managedprometheusconfig";
import { MonitoringComponentConfig } from "./monitoringcomponentconfig";
import { Expose, Type } from "class-transformer";

/**
 * MonitoringConfig is cluster monitoring configuration.
 */
export class MonitoringConfig extends SpeakeasyBase {
  /**
   * MonitoringComponentConfig is cluster monitoring component configuration.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "componentConfig" })
  @Type(() => MonitoringComponentConfig)
  componentConfig?: MonitoringComponentConfig;

  /**
   * ManagedPrometheusConfig defines the configuration for Google Cloud Managed Service for Prometheus.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "managedPrometheusConfig" })
  @Type(() => ManagedPrometheusConfig)
  managedPrometheusConfig?: ManagedPrometheusConfig;
}
