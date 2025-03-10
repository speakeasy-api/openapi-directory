/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export const DeleteSyncMapServerList = ["https://sync.twilio.com"] as const;

export class DeleteSyncMapSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class DeleteSyncMapRequest extends SpeakeasyBase {
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) with the Sync Map resource to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=ServiceSid",
  })
  serviceSid: string;

  /**
   * The SID of the Sync Map resource to delete. Can be the Sync Map's `sid` or its `unique_name`.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export class DeleteSyncMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
