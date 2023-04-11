import { SpeakeasyBase } from "../../../internal/utils";
import { Game } from "./game";
export declare class Tournament extends SpeakeasyBase {
    games?: Game[];
    leftBottomBracketConference?: string;
    leftTopBracketConference?: string;
    location?: string;
    name?: string;
    rightBottomBracketConference?: string;
    rightTopBracketConference?: string;
    season?: number;
    tournamentID?: number;
}
