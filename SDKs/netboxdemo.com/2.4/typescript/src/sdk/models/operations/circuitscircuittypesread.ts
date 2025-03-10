/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CircuitsCircuitTypesReadRequest extends SpeakeasyBase {
  /**
   * A unique integer value identifying this circuit type.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export class CircuitsCircuitTypesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuitType?: shared.CircuitType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
