import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum DailyFantasyPlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class DailyFantasyPlayersRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *           The date of the contest for which you're pulling players
     *           <code>2014-SEP-21</code>,
     *           <code>2014-NOV-15</code>, etc
     *
     */
    date: string;
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: DailyFantasyPlayersFormatEnum;
}
export declare class DailyFantasyPlayersResponse extends SpeakeasyBase {
    contentType: string;
    dailyFantasyPlayers?: shared.DailyFantasyPlayer[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
