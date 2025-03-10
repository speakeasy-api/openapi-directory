/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TestOrder } from "./testorder";
import { Expose, Type } from "class-transformer";

export class OrdersCreateTestOrderRequest extends SpeakeasyBase {
  /**
   * The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to `US`.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;

  /**
   * The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`"
   */
  @SpeakeasyMetadata()
  @Expose({ name: "templateName" })
  templateName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "testOrder" })
  @Type(() => TestOrder)
  testOrder?: TestOrder;
}
