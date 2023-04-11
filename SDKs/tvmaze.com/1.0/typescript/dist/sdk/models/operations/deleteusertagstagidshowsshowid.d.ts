import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteUserTagsTagIdShowsShowIdRequest extends SpeakeasyBase {
    showId: number;
    tagId: number;
}
export declare class DeleteUserTagsTagIdShowsShowIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
