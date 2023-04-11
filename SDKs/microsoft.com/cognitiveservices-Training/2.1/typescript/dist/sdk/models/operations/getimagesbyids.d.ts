import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImagesByIdsRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The list of image ids to retrieve. Limited to 256
     */
    imageIds?: string[];
    /**
     * The iteration id. Defaults to workspace
     */
    iterationId?: string;
    /**
     * The project id
     */
    projectId: string;
}
export declare class GetImagesByIdsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    images?: shared.Image[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
