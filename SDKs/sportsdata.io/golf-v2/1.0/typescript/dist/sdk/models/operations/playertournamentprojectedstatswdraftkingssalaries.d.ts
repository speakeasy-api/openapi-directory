import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerTournamentProjectedStatsWDraftkingsSalariesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerTournamentProjectedStatsWDraftkingsSalariesFormatEnum;
    /**
     * The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>78</code>, <code>79</code>, <code>80</code>, etc.
     */
    tournamentid: string;
}
export declare class PlayerTournamentProjectedStatsWDraftkingsSalariesResponse extends SpeakeasyBase {
    contentType: string;
    playerTournamentProjections?: shared.PlayerTournamentProjection[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
