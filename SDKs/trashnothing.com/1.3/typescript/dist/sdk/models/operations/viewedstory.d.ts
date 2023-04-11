import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ViewedStorySecurity extends SpeakeasyBase {
    apiKey?: string;
    oauth2Code?: string;
    oauth2Implicit?: string;
}
export declare class ViewedStoryRequest extends SpeakeasyBase {
    /**
     * The ID of the story viewed.
     */
    storyId: string;
}
export declare class ViewedStoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
