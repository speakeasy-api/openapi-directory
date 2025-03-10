/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { EncryptionInfo } from "./encryptioninfo";
import { Expose, Type } from "class-transformer";

/**
 * Output only. The state of replication for the table in this cluster.
 */
export enum ClusterStateReplicationStateEnum {
  StateNotKnown = "STATE_NOT_KNOWN",
  Initializing = "INITIALIZING",
  PlannedMaintenance = "PLANNED_MAINTENANCE",
  UnplannedMaintenance = "UNPLANNED_MAINTENANCE",
  Ready = "READY",
  ReadyOptimizing = "READY_OPTIMIZING",
}

/**
 * The state of a table's data in a particular cluster.
 */
export class ClusterState extends SpeakeasyBase {
  /**
   * Output only. The encryption information for the table in this cluster. If the encryption key protecting this resource is customer managed, then its version can be rotated in Cloud Key Management Service (Cloud KMS). The primary version of the key and its status will be reflected here when changes propagate from Cloud KMS.
   */
  @SpeakeasyMetadata({ elemType: EncryptionInfo })
  @Expose({ name: "encryptionInfo" })
  @Type(() => EncryptionInfo)
  encryptionInfo?: EncryptionInfo[];

  /**
   * Output only. The state of replication for the table in this cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "replicationState" })
  replicationState?: ClusterStateReplicationStateEnum;
}
