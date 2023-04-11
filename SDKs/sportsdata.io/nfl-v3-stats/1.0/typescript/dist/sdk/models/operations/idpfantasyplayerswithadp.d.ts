import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
 */
export declare enum IdpFantasyPlayersWithAdpFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class IdpFantasyPlayersWithAdpRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     */
    format: IdpFantasyPlayersWithAdpFormatEnum;
}
export declare class IdpFantasyPlayersWithAdpResponse extends SpeakeasyBase {
    contentType: string;
    fantasyPlayers?: shared.FantasyPlayer[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
