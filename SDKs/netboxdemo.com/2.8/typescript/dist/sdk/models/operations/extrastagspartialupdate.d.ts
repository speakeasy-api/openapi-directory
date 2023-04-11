import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTagsPartialUpdateRequest extends SpeakeasyBase {
    tagInput: shared.TagInput;
    /**
     * A unique integer value identifying this tag.
     */
    id: number;
}
export declare class ExtrasTagsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tag?: shared.Tag;
}
