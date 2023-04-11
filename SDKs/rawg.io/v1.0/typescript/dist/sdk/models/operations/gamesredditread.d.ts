import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesRedditReadRequest extends SpeakeasyBase {
    /**
     * An ID or a slug identifying this Game.
     */
    id: string;
}
export declare class GamesRedditReadResponse extends SpeakeasyBase {
    contentType: string;
    reddit?: shared.Reddit;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
