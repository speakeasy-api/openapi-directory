/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class EnterpriseAdminStartPreReceiveEnvironmentDownloadRequest extends SpeakeasyBase {
  /**
   * The unique identifier of the pre-receive environment.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=pre_receive_environment_id",
  })
  preReceiveEnvironmentId: number;
}

export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "resource" })
  resource?: string;
}

/**
 * Client Errors
 */
export class EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata({
    elemType:
      EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors,
  })
  @Expose({ name: "errors" })
  @Type(
    () =>
      EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors
  )
  errors?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONErrors[];

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;
}

export class EnterpriseAdminStartPreReceiveEnvironmentDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Client Errors
   */
  @SpeakeasyMetadata()
  enterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSONObject?: EnterpriseAdminStartPreReceiveEnvironmentDownload422ApplicationJSON;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  preReceiveEnvironmentDownloadStatus?: shared.PreReceiveEnvironmentDownloadStatus;
}
