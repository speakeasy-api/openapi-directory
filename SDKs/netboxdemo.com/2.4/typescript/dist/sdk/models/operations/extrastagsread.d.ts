import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasTagsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this Tag.
     */
    id: number;
}
export declare class ExtrasTagsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    tag?: shared.Tag;
}
