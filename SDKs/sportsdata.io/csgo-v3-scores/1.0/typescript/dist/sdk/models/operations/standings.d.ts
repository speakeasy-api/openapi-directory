import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum StandingsFormatEnum {
    Xml = "xml",
    Json = "json"
}
export declare class StandingsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: StandingsFormatEnum;
    /**
     * Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints.
     *
     * @remarks
     * Example: <code>100000138</code>, etc
     */
    roundid: string;
}
export declare class StandingsResponse extends SpeakeasyBase {
    contentType: string;
    standings?: shared.Standing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
