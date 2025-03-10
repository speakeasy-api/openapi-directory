/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CancelTerminalRefundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oauth2: string;
}

export class CancelTerminalRefundRequest extends SpeakeasyBase {
  /**
   * The unique ID for the desired `TerminalRefund`.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=terminal_refund_id",
  })
  terminalRefundId: string;
}

export class CancelTerminalRefundResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  cancelTerminalRefundResponse?: shared.CancelTerminalRefundResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
