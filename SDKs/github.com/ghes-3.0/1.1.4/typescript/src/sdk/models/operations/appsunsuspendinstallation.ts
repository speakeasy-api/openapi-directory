/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AppsUnsuspendInstallationRequest extends SpeakeasyBase {
  /**
   * installation_id parameter
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=installation_id",
  })
  installationId: number;
}

export class AppsUnsuspendInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Resource not found
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
