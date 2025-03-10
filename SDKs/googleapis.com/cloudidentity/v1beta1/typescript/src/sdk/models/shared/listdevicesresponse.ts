/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Device } from "./device";
import { Expose, Type } from "class-transformer";

/**
 * Response message that is returned from the ListDevices method.
 */
export class ListDevicesResponse extends SpeakeasyBase {
  /**
   * Devices meeting the list restrictions.
   */
  @SpeakeasyMetadata({ elemType: Device })
  @Expose({ name: "devices" })
  @Type(() => Device)
  devices?: Device[];

  /**
   * Token to retrieve the next page of results. Empty if there are no more results.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nextPageToken" })
  nextPageToken?: string;
}
