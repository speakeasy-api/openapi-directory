import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCuratedPodcastByIdRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * id for a specific curated list of podcasts. You can get the id from the response of `GET /search?type=curated` or `GET /curated_podcasts`.
     *
     * @remarks
     *
     */
    id: string;
}
export declare class GetCuratedPodcastByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    curatedListFull?: shared.CuratedListFull;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
