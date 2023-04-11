import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UnlikeStoryRequest extends SpeakeasyBase {
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * The ID of the story to unlike.
     */
    storyId: string;
}
export declare class UnlikeStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The updated story.
     */
    story?: shared.Story;
}
