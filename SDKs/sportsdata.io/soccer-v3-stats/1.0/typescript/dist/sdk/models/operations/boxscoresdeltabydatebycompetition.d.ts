import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BoxScoresDeltaByDateByCompetitionFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class BoxScoresDeltaByDateByCompetitionRequest extends SpeakeasyBase {
    /**
     * An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.
     */
    competition: string;
    /**
     * The date of the game(s).
     *
     * @remarks
     * <br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BoxScoresDeltaByDateByCompetitionFormatEnum;
    /**
     * Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:
     *
     * @remarks
     * <code>1</code>, <code>2</code> ... <code>all</code>.
     */
    minutes: string;
}
export declare class BoxScoresDeltaByDateByCompetitionResponse extends SpeakeasyBase {
    boxScores?: shared.BoxScore[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
