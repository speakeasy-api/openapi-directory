/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostAuthRefreshRequestBody extends SpeakeasyBase {
  /**
   * Authentication token
   */
  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;
}

/**
 * Internal server error
 */
export class PostAuthRefresh500ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail?: string;
}

/**
 * Bad Request
 */
export class PostAuthRefresh400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "<field name>" })
  lessThanFieldNameGreaterThan?: string[];

  @SpeakeasyMetadata()
  @Expose({ name: "non_field_errors" })
  nonFieldErrors?: string[];
}

/**
 * Token and respective time to live
 */
export class PostAuthRefresh200ApplicationJSON extends SpeakeasyBase {
  /**
   * Authentication token
   */
  @SpeakeasyMetadata()
  @Expose({ name: "token" })
  token?: string;

  /**
   * Token time to live in seconds
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ttl" })
  ttl?: number;
}

export class PostAuthRefreshResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Token and respective time to live
   */
  @SpeakeasyMetadata()
  postAuthRefresh200ApplicationJSONObject?: PostAuthRefresh200ApplicationJSON;

  /**
   * Bad Request
   */
  @SpeakeasyMetadata()
  postAuthRefresh400ApplicationJSONObject?: PostAuthRefresh400ApplicationJSON;

  /**
   * Internal server error
   */
  @SpeakeasyMetadata()
  postAuthRefresh500ApplicationJSONObject?: PostAuthRefresh500ApplicationJSON;
}
