import { SpeakeasyBase } from "../../../internal/utils";
import { Booking } from "./booking";
import { Coach } from "./coach";
import { Game } from "./game";
import { Goal } from "./goal";
import { Lineup } from "./lineup";
import { PenaltyShootout } from "./penaltyshootout";
import { PlayerGame } from "./playergame";
import { Referee } from "./referee";
import { TeamGame } from "./teamgame";
export declare class BoxScore extends SpeakeasyBase {
    additionalAssistantReferee1?: Referee;
    additionalAssistantReferee2?: Referee;
    assistantReferee1?: Referee;
    assistantReferee2?: Referee;
    awayTeamCoach?: Coach;
    bookings?: Booking[];
    fourthReferee?: Referee;
    game?: Game;
    goals?: Goal[];
    homeTeamCoach?: Coach;
    lineups?: Lineup[];
    mainReferee?: Referee;
    penaltyShootouts?: PenaltyShootout[];
    playerGames?: PlayerGame[];
    teamGames?: TeamGame[];
    videoAssistantReferee?: Referee;
}
