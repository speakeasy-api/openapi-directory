import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Embed full show info
 */
export declare enum GetUserTagsTagIdShowsEmbedEnum {
    Show = "show"
}
export declare class GetUserTagsTagIdShowsRequest extends SpeakeasyBase {
    /**
     * Embed full show info
     */
    embed?: GetUserTagsTagIdShowsEmbedEnum;
    tagId: number;
}
export declare class GetUserTagsTagIdShowsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of tagged shows
     */
    tagInstances?: shared.TagInstance[];
}
