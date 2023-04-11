import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerTournament } from "./playertournament";
import { Tournament } from "./tournament";
export declare class Leaderboard extends SpeakeasyBase {
    players?: PlayerTournament[];
    tournament?: Tournament;
}
