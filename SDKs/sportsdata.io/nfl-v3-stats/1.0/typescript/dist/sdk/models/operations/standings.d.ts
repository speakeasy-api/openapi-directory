import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StandingsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
    /**
     *
     * @remarks
     *           Year of the season and the season type. If no season type is provided, then the default is regular season.
     *           <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.
     *
     */
    season: string;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: shared.Standing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
