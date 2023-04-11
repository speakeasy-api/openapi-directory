import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStorySecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class GetStoryRequest extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * The ID of the story to retrieve.
     */
    storyId: string;
}
export declare class GetStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The story.
     */
    story?: shared.Story;
}
