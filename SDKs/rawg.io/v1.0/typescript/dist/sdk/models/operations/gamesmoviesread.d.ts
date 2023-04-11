import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesMoviesReadRequest extends SpeakeasyBase {
    /**
     * An ID or a slug identifying this Game.
     */
    id: string;
}
export declare class GamesMoviesReadResponse extends SpeakeasyBase {
    contentType: string;
    movie?: shared.Movie;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
