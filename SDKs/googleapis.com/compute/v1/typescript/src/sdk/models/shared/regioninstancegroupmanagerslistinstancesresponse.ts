/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ManagedInstance } from "./managedinstance";
import { Expose, Type } from "class-transformer";

/**
 * Successful response
 */
export class RegionInstanceGroupManagersListInstancesResponse extends SpeakeasyBase {
  /**
   * A list of managed instances.
   */
  @SpeakeasyMetadata({ elemType: ManagedInstance })
  @Expose({ name: "managedInstances" })
  @Type(() => ManagedInstance)
  managedInstances?: ManagedInstance[];

  /**
   * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to continue paging through the results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
