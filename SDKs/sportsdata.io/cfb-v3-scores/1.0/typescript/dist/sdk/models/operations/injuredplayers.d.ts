import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
 */
export declare enum InjuredPlayersFormatEnum {
    Xml = "XML",
    Json = "JSON"
}
export declare class InjuredPlayersRequest extends SpeakeasyBase {
    /**
     * Desired response format. Valid entries are <code>xml</code> or <code>json</code>.
     */
    format: InjuredPlayersFormatEnum;
}
export declare class InjuredPlayersResponse extends SpeakeasyBase {
    contentType: string;
    players?: shared.Player[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
