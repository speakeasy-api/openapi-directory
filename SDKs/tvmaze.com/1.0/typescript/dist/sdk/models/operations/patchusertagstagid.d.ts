import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PatchUserTagsTagIdRequest extends SpeakeasyBase {
    tagInput?: shared.TagInput;
    tagId: number;
}
export declare class PatchUserTagsTagIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The tag was updated
     */
    tag?: shared.Tag;
}
