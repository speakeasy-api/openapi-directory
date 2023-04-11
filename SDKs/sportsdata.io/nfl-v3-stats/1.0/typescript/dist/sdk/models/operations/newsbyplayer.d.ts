import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewsByPlayerRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     *           Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.
     *
     */
    format: string;
    /**
     * Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.
     */
    playerid: string;
}
export declare class NewsByPlayerResponse extends SpeakeasyBase {
    contentType: string;
    news?: shared.News[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
