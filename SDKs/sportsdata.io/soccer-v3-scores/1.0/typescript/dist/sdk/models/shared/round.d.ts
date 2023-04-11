import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { PlayerSeason } from "./playerseason";
import { Standing } from "./standing";
import { TeamSeason } from "./teamseason";
export declare class Round extends SpeakeasyBase {
    currentRound?: boolean;
    currentWeek?: number;
    endDate?: string;
    games?: Game[];
    name?: string;
    playerSeasons?: PlayerSeason[];
    roundId?: number;
    season?: number;
    seasonId?: number;
    seasonType?: number;
    standings?: Standing[];
    startDate?: string;
    teamSeasons?: TeamSeason[];
    type?: string;
}
