/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Period } from "./period";
import { Series } from "./series";
import { Expose, Type } from "class-transformer";

export class Game extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Attendance" })
  attendance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "AwayRotationNumber" })
  awayRotationNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "AwayTeam" })
  awayTeam?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "AwayTeamID" })
  awayTeamID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "AwayTeamMoneyLine" })
  awayTeamMoneyLine?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "AwayTeamScore" })
  awayTeamScore?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Channel" })
  channel?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DateTime" })
  dateTime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "DateTimeUTC" })
  dateTimeUTC?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Day" })
  day?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "GameEndDateTime" })
  gameEndDateTime?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "GameID" })
  gameID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "GlobalAwayTeamID" })
  globalAwayTeamID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "GlobalGameID" })
  globalGameID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "GlobalHomeTeamID" })
  globalHomeTeamID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "HomeRotationNumber" })
  homeRotationNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "HomeTeam" })
  homeTeam?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "HomeTeamID" })
  homeTeamID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "HomeTeamMoneyLine" })
  homeTeamMoneyLine?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "HomeTeamScore" })
  homeTeamScore?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "IsClosed" })
  isClosed?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "LastPlay" })
  lastPlay?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "NeutralVenue" })
  neutralVenue?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "OverPayout" })
  overPayout?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "OverUnder" })
  overUnder?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Period" })
  period?: string;

  @SpeakeasyMetadata({ elemType: Period })
  @Expose({ name: "Periods" })
  @Type(() => Period)
  periods?: Period[];

  @SpeakeasyMetadata()
  @Expose({ name: "PointSpread" })
  pointSpread?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "PointSpreadAwayTeamMoneyLine" })
  pointSpreadAwayTeamMoneyLine?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "PointSpreadHomeTeamMoneyLine" })
  pointSpreadHomeTeamMoneyLine?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Season" })
  season?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "SeasonType" })
  seasonType?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "SeriesInfo" })
  @Type(() => Series)
  seriesInfo?: Series;

  @SpeakeasyMetadata()
  @Expose({ name: "StadiumID" })
  stadiumID?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Status" })
  status?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "TimeRemainingMinutes" })
  timeRemainingMinutes?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "TimeRemainingSeconds" })
  timeRemainingSeconds?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "UnderPayout" })
  underPayout?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Updated" })
  updated?: string;
}
