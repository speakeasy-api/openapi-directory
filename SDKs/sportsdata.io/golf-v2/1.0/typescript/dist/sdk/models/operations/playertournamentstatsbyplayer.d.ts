import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerTournamentStatsByPlayerFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerTournamentStatsByPlayerRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerTournamentStatsByPlayerFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>40000019</code>.
     */
    playerid: string;
    /**
     * The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
}
export declare class PlayerTournamentStatsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    playerTournament?: shared.PlayerTournament;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
