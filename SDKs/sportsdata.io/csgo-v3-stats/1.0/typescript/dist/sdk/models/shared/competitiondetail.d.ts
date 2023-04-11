import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
import { Season } from "./season";
import { TeamDetail } from "./teamdetail";
export declare class CompetitionDetail extends SpeakeasyBase {
    areaId?: number;
    areaName?: string;
    competitionId?: number;
    currentSeason?: Season;
    format?: string;
    games?: Game[];
    gender?: string;
    name?: string;
    playerStatsCoverage?: boolean;
    seasons?: Season[];
    teams?: TeamDetail[];
    type?: string;
}
