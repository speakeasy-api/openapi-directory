/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class GetTrackingSnippetRequest extends SpeakeasyBase {
  /**
   * The domain you want to receive a snippet for
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=domain",
  })
  domain: string;
}

export class GetTrackingSnippet500ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet500ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet500ApplicationJSONMeta)
  meta: GetTrackingSnippet500ApplicationJSONMeta;
}

export class GetTrackingSnippet429ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet429ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet429ApplicationJSONMeta)
  meta: GetTrackingSnippet429ApplicationJSONMeta;
}

export class GetTrackingSnippet404ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet404ApplicationJSONMeta)
  meta: GetTrackingSnippet404ApplicationJSONMeta;
}

export class GetTrackingSnippet403ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet403ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet403ApplicationJSONMeta)
  meta: GetTrackingSnippet403ApplicationJSONMeta;
}

export class GetTrackingSnippet401ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet401ApplicationJSONMeta)
  meta: GetTrackingSnippet401ApplicationJSONMeta;
}

/**
 * All query-, header- and path- parameters that seemed incorrect
 */
export class GetTrackingSnippet400ApplicationJSONErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "header" })
  header?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "path" })
  path?: Record<string, string>;

  @SpeakeasyMetadata()
  @Expose({ name: "query" })
  query?: Record<string, string>;
}

/**
 * Map that sums up all received values that seemed incorrect
 */
export class GetTrackingSnippet400ApplicationJSONErrors extends SpeakeasyBase {
  /**
   * All input fields that seemed incorrect
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fields" })
  fields?: Record<string, string>;

  /**
   * All query-, header- and path- parameters that seemed incorrect
   */
  @SpeakeasyMetadata()
  @Expose({ name: "parameters" })
  @Type(() => GetTrackingSnippet400ApplicationJSONErrorsParameters)
  parameters?: GetTrackingSnippet400ApplicationJSONErrorsParameters;
}

export class GetTrackingSnippet400ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The message specifies what is done
 */
export class GetTrackingSnippet400ApplicationJSON extends SpeakeasyBase {
  /**
   * Map that sums up all received values that seemed incorrect
   */
  @SpeakeasyMetadata()
  @Expose({ name: "errors" })
  @Type(() => GetTrackingSnippet400ApplicationJSONErrors)
  errors: GetTrackingSnippet400ApplicationJSONErrors;

  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message: string;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet400ApplicationJSONMeta)
  meta: GetTrackingSnippet400ApplicationJSONMeta;
}

/**
 * A snippet
 */
export class GetTrackingSnippet200ApplicationJSONData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "domain" })
  domain: string;

  @SpeakeasyMetadata()
  @Expose({ name: "snippet" })
  snippet: string;
}

export class GetTrackingSnippet200ApplicationJSONMeta extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "requestId" })
  requestId: string;

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status: number;
}

/**
 * The basic response containing the unique ID of the request and the response status
 */
export class GetTrackingSnippet200ApplicationJSON extends SpeakeasyBase {
  /**
   * A snippet
   */
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => GetTrackingSnippet200ApplicationJSONData)
  data: GetTrackingSnippet200ApplicationJSONData;

  @SpeakeasyMetadata()
  @Expose({ name: "meta" })
  @Type(() => GetTrackingSnippet200ApplicationJSONMeta)
  meta: GetTrackingSnippet200ApplicationJSONMeta;
}

export class GetTrackingSnippetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Snippet
   */
  @SpeakeasyMetadata()
  getTrackingSnippet200ApplicationJSONObject?: GetTrackingSnippet200ApplicationJSON;

  /**
   * Bad request, some fields or parameters are incorrect
   */
  @SpeakeasyMetadata()
  getTrackingSnippet400ApplicationJSONObject?: GetTrackingSnippet400ApplicationJSON;

  /**
   * No API Key was provided or the key is not authorised to perform the action
   */
  @SpeakeasyMetadata()
  getTrackingSnippet401ApplicationJSONObject?: GetTrackingSnippet401ApplicationJSON;

  /**
   * The API Key provided is currently not enabled
   */
  @SpeakeasyMetadata()
  getTrackingSnippet403ApplicationJSONObject?: GetTrackingSnippet403ApplicationJSON;

  /**
   * Not found
   */
  @SpeakeasyMetadata()
  getTrackingSnippet404ApplicationJSONObject?: GetTrackingSnippet404ApplicationJSON;

  /**
   * Too many API requests were send
   */
  @SpeakeasyMetadata()
  getTrackingSnippet429ApplicationJSONObject?: GetTrackingSnippet429ApplicationJSON;

  /**
   * An unexpected error occurred
   */
  @SpeakeasyMetadata()
  getTrackingSnippet500ApplicationJSONObject?: GetTrackingSnippet500ApplicationJSON;
}
