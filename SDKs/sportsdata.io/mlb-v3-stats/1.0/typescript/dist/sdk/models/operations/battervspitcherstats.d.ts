import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum BatterVsPitcherStatsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class BatterVsPitcherStatsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: BatterVsPitcherStatsFormatEnum;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>10000031</code>.
     */
    hitterid: string;
    /**
     * Unique FantasyData Player ID.
     *
     * @remarks
     * Example:<code>10000618</code>.
     */
    pitcherid: string;
}
export declare class BatterVsPitcherStatsResponse extends SpeakeasyBase {
    contentType: string;
    playerSeasons?: shared.PlayerSeason[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
