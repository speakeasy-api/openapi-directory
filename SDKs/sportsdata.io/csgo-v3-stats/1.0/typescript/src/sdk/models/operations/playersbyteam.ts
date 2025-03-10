/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export enum PlayersByTeamFormatEnum {
  Xml = "xml",
  Json = "json",
}

export class PlayersByTeamRequest extends SpeakeasyBase {
  /**
   * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=format",
  })
  format: PlayersByTeamFormatEnum;

  /**
   * Unique FantasyData Team ID.
   *
   * @remarks
   * Example:<code>100000001</code>.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=teamid",
  })
  teamid: string;
}

export class PlayersByTeamResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Player })
  players?: shared.Player[];

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
