/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum MembershipsRecentlyChangedFormatEnum {
  Xml = "xml",
  Json = "json",
}

export class MembershipsRecentlyChangedRequest extends SpeakeasyBase {
  /**
   * The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code>
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=days",
  })
  days: string;

  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: MembershipsRecentlyChangedFormatEnum;
}

export class MembershipsRecentlyChangedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Membership })
  memberships?: shared.Membership[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
