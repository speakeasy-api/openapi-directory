import { SpeakeasyBase } from "../../../internal/utils";
import { Tournament } from "./tournament";
export declare class DfsSlateTournament extends SpeakeasyBase {
    operatorTournamentID?: number;
    removedByOperator?: boolean;
    slateID?: number;
    slateTournamentID?: number;
    tournament?: Tournament;
    tournamentID?: number;
}
