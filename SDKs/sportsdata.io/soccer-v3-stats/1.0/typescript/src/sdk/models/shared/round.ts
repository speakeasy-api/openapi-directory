/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Game } from "./game";
import { PlayerSeason } from "./playerseason";
import { Standing } from "./standing";
import { TeamSeason } from "./teamseason";
import { Expose, Type } from "class-transformer";

export class Round extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "CurrentRound" })
  currentRound?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "CurrentWeek" })
  currentWeek?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ elemType: Game })
  @Expose({ name: "Games" })
  @Type(() => Game)
  games?: Game[];

  @SpeakeasyMetadata()
  @Expose({ name: "Name" })
  name?: string;

  @SpeakeasyMetadata({ elemType: PlayerSeason })
  @Expose({ name: "PlayerSeasons" })
  @Type(() => PlayerSeason)
  playerSeasons?: PlayerSeason[];

  @SpeakeasyMetadata()
  @Expose({ name: "RoundId" })
  roundId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "Season" })
  season?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "SeasonId" })
  seasonId?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "SeasonType" })
  seasonType?: number;

  @SpeakeasyMetadata({ elemType: Standing })
  @Expose({ name: "Standings" })
  @Type(() => Standing)
  standings?: Standing[];

  @SpeakeasyMetadata()
  @Expose({ name: "StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ elemType: TeamSeason })
  @Expose({ name: "TeamSeasons" })
  @Type(() => TeamSeason)
  teamSeasons?: TeamSeason[];

  @SpeakeasyMetadata()
  @Expose({ name: "Type" })
  type?: string;
}
