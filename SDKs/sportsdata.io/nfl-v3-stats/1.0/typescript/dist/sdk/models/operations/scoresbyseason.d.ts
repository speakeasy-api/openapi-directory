import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ScoresBySeasonRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: string;
    /**
     * Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.
     */
    season: string;
}
export declare class ScoresBySeasonResponse extends SpeakeasyBase {
    contentType: string;
    scores?: shared.Score[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
