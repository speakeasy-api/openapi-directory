/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum MembershipsActiveFormatEnum {
  Xml = "xml",
  Json = "json",
}

export class MembershipsActiveRequest extends SpeakeasyBase {
  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: MembershipsActiveFormatEnum;
}

export class MembershipsActiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Membership })
  memberships?: shared.Membership[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
