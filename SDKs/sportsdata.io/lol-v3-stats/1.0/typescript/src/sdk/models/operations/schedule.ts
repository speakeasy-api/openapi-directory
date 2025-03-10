/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum ScheduleFormatEnum {
  Xml = "xml",
  Json = "json",
}

export class ScheduleRequest extends SpeakeasyBase {
  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: ScheduleFormatEnum;

  /**
   * Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints.
   *
   * @remarks
   * Example: <code>100000278</code>, etc
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=roundid",
  })
  roundid: string;
}

export class ScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Game })
  games?: shared.Game[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
