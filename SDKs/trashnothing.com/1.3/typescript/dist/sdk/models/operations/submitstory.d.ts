import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitStoryRequestBody extends SpeakeasyBase {
    /**
     * The content of the story.
     */
    content: string;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * A comma separated list of the IDs of the photos that should be attached to this story.
     */
    photoIds?: string;
    /**
     * Must be set to one of the following two options: public, members <br /><br /> When sharing is set to public, anyone will be able to view the story. When sharing is set to members, only other members will be able to view the story.
     *
     * @remarks
     *
     */
    sharing: string;
    /**
     * The title of the story.
     */
    title: string;
}
export declare class SubmitStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The new story.
     */
    story?: shared.Story;
}
