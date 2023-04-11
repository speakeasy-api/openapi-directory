import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesReadRequest extends SpeakeasyBase {
    /**
     * An ID or a slug identifying this Game.
     */
    id: string;
}
export declare class GamesReadResponse extends SpeakeasyBase {
    contentType: string;
    gameSingle?: shared.GameSingle;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
