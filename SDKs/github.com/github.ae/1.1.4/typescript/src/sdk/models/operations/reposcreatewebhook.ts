/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/github-ae@latest/rest/reference/repos#create-hook-config-params).
 */
export class ReposCreateWebhookRequestBodyConfig extends SpeakeasyBase {
  /**
   * The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content_type" })
  contentType?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "digest" })
  digest?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "insecure_ssl" })
  insecureSsl?: any;

  /**
   * If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/github-ae@latest/webhooks/event-payloads/#delivery-headers).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secret" })
  secret?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;

  /**
   * The URL to which the payloads will be delivered.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "url" })
  url?: string;
}

export class ReposCreateWebhookRequestBody extends SpeakeasyBase {
  /**
   * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "active" })
  active?: boolean;

  /**
   * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/github-ae@latest/rest/reference/repos#create-hook-config-params).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "config" })
  @Type(() => ReposCreateWebhookRequestBodyConfig)
  config?: ReposCreateWebhookRequestBodyConfig;

  /**
   * Determines what [events](https://docs.github.com/github-ae@latest/webhooks/event-payloads) the hook is triggered for.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "events" })
  events?: string[];

  /**
   * Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;
}

export class ReposCreateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody?: ReposCreateWebhookRequestBody;

  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=owner",
  })
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=repo",
  })
  repo: string;
}

export class ReposCreateWebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  /**
   * Response
   */
  @SpeakeasyMetadata()
  hook?: shared.Hook;

  /**
   * Validation failed, or the endpoint has been spammed.
   */
  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
