import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The ordering. Defaults to newest.
 */
export declare enum GetUntaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}
export declare class GetUntaggedImagesRequest extends SpeakeasyBase {
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The ordering. Defaults to newest.
     */
    orderBy?: GetUntaggedImagesOrderByEnum;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Number of images to skip before beginning the image batch. Defaults to 0.
     */
    skip?: number;
    /**
     * Maximum number of images to return. Defaults to 50, limited to 256.
     */
    take?: number;
}
export declare class GetUntaggedImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    images?: shared.Image[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
