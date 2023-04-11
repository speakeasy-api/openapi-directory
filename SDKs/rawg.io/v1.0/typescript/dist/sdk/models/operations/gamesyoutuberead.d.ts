import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesYoutubeReadRequest extends SpeakeasyBase {
    /**
     * An ID or a slug identifying this Game.
     */
    id: string;
}
export declare class GamesYoutubeReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    youtube?: shared.Youtube;
}
