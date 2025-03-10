/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
 */
export enum RegionInstanceGroupsListInstancesRequestInstanceStateEnum {
  All = "ALL",
  Running = "RUNNING",
}

export class RegionInstanceGroupsListInstancesRequest extends SpeakeasyBase {
  /**
   * Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "instanceState" })
  instanceState?: RegionInstanceGroupsListInstancesRequestInstanceStateEnum;

  /**
   * Name of port user is interested in. It is optional. If it is set, only information about this ports will be returned. If it is not set, all the named ports will be returned. Always lists all instances.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "portName" })
  portName?: string;
}
