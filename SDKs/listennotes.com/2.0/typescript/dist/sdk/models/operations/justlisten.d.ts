import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class JustListenRequest extends SpeakeasyBase {
    /**
     * Get API Key on listennotes.com/api
     */
    xListenAPIKey: string;
}
export declare class JustListenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    episodeSimple?: shared.EpisodeSimple;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
