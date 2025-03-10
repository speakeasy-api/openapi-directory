/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class OrgsRedeliverWebhookDeliveryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=delivery_id",
  })
  deliveryId: number;

  /**
   * The unique identifier of the hook.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=hook_id",
  })
  hookId: number;

  /**
   * The organization name. The name is not case sensitive.
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}

export class OrgsRedeliverWebhookDeliveryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Accepted
   */
  @SpeakeasyMetadata()
  orgsRedeliverWebhookDelivery202ApplicationJSONObject?: Record<string, any>;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  scimError?: shared.ScimError;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
