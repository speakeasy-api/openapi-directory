/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetApiVirtualTariffIdRequest extends SpeakeasyBase {
  /**
   * The ID of the Folder
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export class GetApiVirtualTariffIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  virtualTariffsOfFolder?: shared.VirtualTariffsOfFolder;
}
