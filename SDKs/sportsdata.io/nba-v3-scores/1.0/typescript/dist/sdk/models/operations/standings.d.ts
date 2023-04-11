import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum StandingsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class StandingsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: StandingsFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2015</code>, <code>2016</code>.
     */
    season: string;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: shared.Standing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
