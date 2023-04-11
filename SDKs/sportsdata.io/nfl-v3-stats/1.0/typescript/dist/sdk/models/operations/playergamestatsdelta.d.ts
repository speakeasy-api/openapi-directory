import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum PlayerGameStatsDeltaFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class PlayerGameStatsDeltaRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: PlayerGameStatsDeltaFormatEnum;
    /**
     *
     * @remarks
     *           Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:
     *           <code>1</code> or <code>2</code>.
     *
     */
    minutes: string;
}
export declare class PlayerGameStatsDeltaResponse extends SpeakeasyBase {
    contentType: string;
    playerGames?: shared.PlayerGame[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
