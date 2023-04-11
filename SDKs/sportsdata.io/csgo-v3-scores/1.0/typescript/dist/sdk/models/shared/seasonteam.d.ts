import { SpeakeasyBase } from "../../../internal/utils";
import { Team } from "./team";
export declare class SeasonTeam extends SpeakeasyBase {
    active?: boolean;
    gender?: string;
    seasonId?: number;
    seasonTeamId?: number;
    team?: Team;
    teamId?: number;
    teamName?: string;
    type?: string;
}
