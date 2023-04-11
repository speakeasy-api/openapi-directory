import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTagsUpdateRequest extends SpeakeasyBase {
    tagInput: shared.TagInput;
    /**
     * A unique integer value identifying this Tag.
     */
    id: number;
}
export declare class ExtrasTagsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tag?: shared.Tag;
}
