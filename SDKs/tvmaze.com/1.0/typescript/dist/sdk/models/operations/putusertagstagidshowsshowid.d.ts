import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
    tagId: number;
}
export declare class PutUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The show was tagged
     */
    tagInstance?: shared.TagInstance;
}
