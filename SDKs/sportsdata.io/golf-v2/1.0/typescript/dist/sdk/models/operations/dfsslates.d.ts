import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DfsSlatesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DfsSlatesRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DfsSlatesFormatEnum;
    /**
     * The TournamentID of a tournament.  TournamentIDs can be found in the Tournaments API.  Valid entries are <code>58</code>, <code>61</code>, etc.
     */
    tournamentid: string;
}
export declare class DfsSlatesResponse extends SpeakeasyBase {
    contentType: string;
    dfsSlates?: shared.DfsSlate[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
