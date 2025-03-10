/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum TeamsAllFormatEnum {
  Xml = "XML",
  Json = "JSON",
}

export class TeamsAllRequest extends SpeakeasyBase {
  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: TeamsAllFormatEnum;
}

export class TeamsAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  @SpeakeasyMetadata({ elemType: shared.Team })
  teams?: shared.Team[];
}
