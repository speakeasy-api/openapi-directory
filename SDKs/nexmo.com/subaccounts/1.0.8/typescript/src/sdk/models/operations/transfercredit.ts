/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class TransferCreditSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=password",
  })
  password: string;

  @SpeakeasyMetadata({
    data: "security, scheme=true;type=http;subtype=basic;name=username",
  })
  username: string;
}

export class TransferCreditRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  transferBalanceOrCreditRequest: shared.TransferBalanceOrCreditRequest;

  /**
   * ID of the primary account
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=api_key",
  })
  apiKey: string;
}

export class TransferCredit422ApplicationJSONInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "reason" })
  reason?: string;
}

/**
 * Validation Error
 */
export class TransferCredit422ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instance" })
  instance: string;

  @SpeakeasyMetadata({
    elemType: TransferCredit422ApplicationJSONInvalidParameters,
  })
  @Expose({ name: "invalid_parameters" })
  @Type(() => TransferCredit422ApplicationJSONInvalidParameters)
  invalidParameters: TransferCredit422ApplicationJSONInvalidParameters[];

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

/**
 * Invalid API Key
 */
export class TransferCredit404ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instance" })
  instance: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

/**
 * Credential is missing or invalid
 */
export class TransferCredit401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "detail" })
  detail: string;

  @SpeakeasyMetadata()
  @Expose({ name: "instance" })
  instance: string;

  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class TransferCreditResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Credit transfer response
   */
  @SpeakeasyMetadata()
  transferCreditResponse?: shared.TransferCreditResponse;

  /**
   * Action is forbidden
   */
  @SpeakeasyMetadata()
  unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;

  /**
   * Credential is missing or invalid
   */
  @SpeakeasyMetadata()
  transferCredit401ApplicationJSONObject?: TransferCredit401ApplicationJSON;

  /**
   * The account ID provided does not exist in our system or you do not have access
   */
  @SpeakeasyMetadata()
  transferCredit404ApplicationJSONObject?: TransferCredit404ApplicationJSON;

  /**
   * Validation Error
   */
  @SpeakeasyMetadata()
  transferCredit422ApplicationJSONObject?: TransferCredit422ApplicationJSON;
}
