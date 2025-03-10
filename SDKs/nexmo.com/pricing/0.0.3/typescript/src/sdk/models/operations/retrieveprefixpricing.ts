/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

export class RetrievePrefixPricingRequest extends SpeakeasyBase {
  /**
   * Your Nexmo API key.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api_key",
  })
  apiKey: string;

  /**
   * Your Nexmo API secret.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=api_secret",
  })
  apiSecret: string;

  /**
   * The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=prefix",
  })
  prefix: string;

  /**
   * The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=type",
  })
  type: string;
}

/**
 * You did not provide valid credentials
 */
export class RetrievePrefixPricing401ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "code" })
  code: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency: string;

  @SpeakeasyMetadata()
  @Expose({ name: "error-code-label" })
  errorCodeLabel: string;
}

export class RetrievePrefixPricing400ApplicationJSONInvalidParameters extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "message" })
  message?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "parameter" })
  parameter?: string;
}

/**
 * Bad request. You probably provided an invalid parameter.
 */
export class RetrievePrefixPricing400ApplicationJSON extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "error_title" })
  errorTitle: string;

  @SpeakeasyMetadata()
  @Expose({ name: "invalid_parameters" })
  @Type(() => RetrievePrefixPricing400ApplicationJSONInvalidParameters)
  invalidParameters: RetrievePrefixPricing400ApplicationJSONInvalidParameters;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: string;
}

export class RetrievePrefixPricingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Pricing countries response
   */
  @SpeakeasyMetadata()
  pricingCountriesResponse?: shared.PricingCountriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Bad request. You probably provided an invalid parameter.
   */
  @SpeakeasyMetadata()
  retrievePrefixPricing400ApplicationJSONObject?: RetrievePrefixPricing400ApplicationJSON;

  /**
   * You did not provide valid credentials
   */
  @SpeakeasyMetadata()
  retrievePrefixPricing401ApplicationJSONObject?: RetrievePrefixPricing401ApplicationJSON;
}
