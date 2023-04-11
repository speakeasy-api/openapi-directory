import { SpeakeasyBase } from "../../../internal/utils";
import { Leaderboard } from "./leaderboard";
export declare class Map extends SpeakeasyBase {
    currentRound?: number;
    leaderboards?: Leaderboard[];
    name?: string;
    number?: number;
    status?: string;
    teamAScore?: number;
    teamBScore?: number;
}
