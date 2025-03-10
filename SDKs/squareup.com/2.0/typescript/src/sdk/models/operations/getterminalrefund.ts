/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTerminalRefundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;
}

export class GetTerminalRefundRequest extends SpeakeasyBase {
  /**
   * The unique ID for the desired `TerminalRefund`.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=terminal_refund_id",
  })
  terminalRefundId: string;
}

export class GetTerminalRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getTerminalRefundResponse?: shared.GetTerminalRefundResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
