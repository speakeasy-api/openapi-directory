/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetProductsIdDigitalProductsDigitalProductIdJsonRequest extends SpeakeasyBase {
  /**
   * API OAuth token.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=authtoken",
  })
  authtoken: string;

  /**
   * Id of the Product DigitalProduct
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=digital_product_id",
  })
  digitalProductId: number;

  /**
   * Id of the Product
   */
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  /**
   * API OAuth login.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}

export class GetProductsIdDigitalProductsDigitalProductIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * OK
   */
  @SpeakeasyMetadata()
  digitalProduct?: shared.DigitalProduct;

  /**
   * Product Not Found.
   */
  @SpeakeasyMetadata()
  notFound?: shared.NotFound;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
