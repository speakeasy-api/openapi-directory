import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTagsRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace
     */
    iterationId?: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tagList?: shared.TagList;
}
