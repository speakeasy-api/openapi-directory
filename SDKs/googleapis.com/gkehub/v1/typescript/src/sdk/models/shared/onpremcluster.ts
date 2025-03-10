/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Immutable. The on prem cluster's type.
 */
export enum OnPremClusterClusterTypeEnum {
  ClustertypeUnspecified = "CLUSTERTYPE_UNSPECIFIED",
  Bootstrap = "BOOTSTRAP",
  Hybrid = "HYBRID",
  Standalone = "STANDALONE",
  User = "USER",
}

/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
 */
export class OnPremCluster extends SpeakeasyBase {
  /**
   * Immutable. Whether the cluster is an admin cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adminCluster" })
  adminCluster?: boolean;

  /**
   * Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clusterMissing" })
  clusterMissing?: boolean;

  /**
   * Immutable. The on prem cluster's type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clusterType" })
  clusterType?: OnPremClusterClusterTypeEnum;

  /**
   * Immutable. Self-link of the GCP resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceLink" })
  resourceLink?: string;
}

/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
 */
export class OnPremClusterInput extends SpeakeasyBase {
  /**
   * Immutable. Whether the cluster is an admin cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "adminCluster" })
  adminCluster?: boolean;

  /**
   * Immutable. The on prem cluster's type.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "clusterType" })
  clusterType?: OnPremClusterClusterTypeEnum;

  /**
   * Immutable. Self-link of the GCP resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceLink" })
  resourceLink?: string;
}
