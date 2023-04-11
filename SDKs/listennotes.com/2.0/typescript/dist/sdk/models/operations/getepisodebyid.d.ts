import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEpisodeByIdRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
    /**
     * id for a specific episode. You can get episode id from using other endpoints, e.g., `GET /search`...
     */
    id: string;
    /**
     * To include the transcript of this episode or not? If it is 1, then include the transcript in the **transcript** field. The default value is 0 - we don't include transcript by default, because 1) it would make the response data very big, thus slow response time; 2) less than 1% of episodes have transcripts. The transcript field is available only in the PRO/ENTERPRISE plan.
     */
    showTranscript?: number;
}
export declare class GetEpisodeByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    episodeFull?: shared.EpisodeFull;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
