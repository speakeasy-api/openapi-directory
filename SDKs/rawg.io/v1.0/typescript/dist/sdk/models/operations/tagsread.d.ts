import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Tag.
     */
    id: number;
}
export declare class TagsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tagSingle?: shared.TagSingle;
}
