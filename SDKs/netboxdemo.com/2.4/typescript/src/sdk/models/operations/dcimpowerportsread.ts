/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DcimPowerPortsReadRequest extends SpeakeasyBase {
  /**
   * A unique integer value identifying this power port.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class DcimPowerPortsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerPort?: shared.PowerPort;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
