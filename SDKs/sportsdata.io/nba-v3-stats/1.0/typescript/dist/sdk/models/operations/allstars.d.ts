import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum AllStarsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class AllStarsRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: AllStarsFormatEnum;
    /**
     * Year of the season.
     *
     * @remarks
     * <br>Examples: <code>2015</code>, <code>2016</code>.
     */
    season: string;
}
export declare class AllStarsResponse extends SpeakeasyBase {
    contentType: string;
    playerInfos?: shared.PlayerInfo[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
