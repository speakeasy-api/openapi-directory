/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum {
  Xml = "xml",
  Json = "json",
}

export class ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest extends SpeakeasyBase {
  /**
   * The date of the game(s).
   *
   * @remarks
   * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=date",
  })
  date: string;

  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: ProjectedPlayerGameStatsByPlayerWDfsSalariesFormatEnum;

  /**
   * Unique FantasyData Player ID.
   *
   * @remarks
   * Example:<code>90026231</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=playerid",
  })
  playerid: string;
}

export class ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PlayerGameProjection })
  playerGameProjections?: shared.PlayerGameProjection[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
