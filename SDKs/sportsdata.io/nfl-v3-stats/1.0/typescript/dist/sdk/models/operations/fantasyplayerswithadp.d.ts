import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum FantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class FantasyPlayersWithAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: FantasyPlayersWithAdpFormatEnum;
}
export declare class FantasyPlayersWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyPlayers?: shared.FantasyPlayer[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
