/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Target type where the packet is delivered to.
 */
export enum DeliverInfoTargetEnum {
  TargetUnspecified = "TARGET_UNSPECIFIED",
  Instance = "INSTANCE",
  Internet = "INTERNET",
  GoogleApi = "GOOGLE_API",
  GkeMaster = "GKE_MASTER",
  CloudSqlInstance = "CLOUD_SQL_INSTANCE",
  PscPublishedService = "PSC_PUBLISHED_SERVICE",
  PscGoogleApi = "PSC_GOOGLE_API",
  PscVpcSc = "PSC_VPC_SC",
}

/**
 * Details of the final state "deliver" and associated resource.
 */
export class DeliverInfo extends SpeakeasyBase {
  /**
   * URI of the resource that the packet is delivered to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceUri" })
  resourceUri?: string;

  /**
   * Target type where the packet is delivered to.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "target" })
  target?: DeliverInfoTargetEnum;
}
