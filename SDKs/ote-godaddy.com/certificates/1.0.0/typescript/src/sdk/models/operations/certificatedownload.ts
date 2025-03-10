/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CertificateDownloadRequest extends SpeakeasyBase {
  /**
   * Certificate id to download
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=certificateId",
  })
  certificateId: string;
}

export class CertificateDownloadResponse extends SpeakeasyBase {
  /**
   * Certificate retrieved
   */
  @SpeakeasyMetadata()
  certificateBundle?: shared.CertificateBundle;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Request was malformed
   */
  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
