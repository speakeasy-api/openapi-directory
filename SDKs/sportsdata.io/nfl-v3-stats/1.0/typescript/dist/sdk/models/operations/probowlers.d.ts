import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum ProBowlersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class ProBowlersRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: ProBowlersFormatEnum;
    /**
     * Year of the season
     *
     * @remarks
     * <br>Examples: <code>2016</code>, <code>2017</code>
     */
    season: string;
}
export declare class ProBowlersResponse extends SpeakeasyBase {
    contentType: string;
    playerInfos?: shared.PlayerInfo[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
