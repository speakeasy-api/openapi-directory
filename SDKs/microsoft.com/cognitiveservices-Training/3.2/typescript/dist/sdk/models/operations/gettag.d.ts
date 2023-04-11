import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagRequest extends SpeakeasyBase {
    /**
     * The iteration to retrieve this tag from. Optional, defaults to current training set.
     */
    iterationId?: string;
    /**
     * The project this tag belongs to.
     */
    projectId: string;
    /**
     * The tag id.
     */
    tagId: string;
}
export declare class GetTagResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tag?: shared.Tag;
}
