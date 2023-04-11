import { SpeakeasyBase } from "../../../internal/utils";
import { Round } from "./round";
export declare class Season extends SpeakeasyBase {
    competitionId?: number;
    competitionName?: string;
    currentSeason?: boolean;
    endDate?: string;
    name?: string;
    rounds?: Round[];
    season?: number;
    seasonId?: number;
    startDate?: string;
}
