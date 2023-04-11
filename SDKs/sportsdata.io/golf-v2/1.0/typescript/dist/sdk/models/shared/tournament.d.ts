import { SpeakeasyBase } from "../../../internal/utils";
import { Round } from "./round";
export declare class Tournament extends SpeakeasyBase {
    canceled?: boolean;
    city?: string;
    country?: string;
    covered?: boolean;
    endDate?: string;
    format?: string;
    isInProgress?: boolean;
    isOver?: boolean;
    location?: string;
    name?: string;
    par?: number;
    purse?: number;
    rounds?: Round[];
    sportRadarTournamentID?: string;
    startDate?: string;
    startDateTime?: string;
    state?: string;
    timeZone?: string;
    tournamentID?: number;
    venue?: string;
    yards?: number;
    zipCode?: string;
}
