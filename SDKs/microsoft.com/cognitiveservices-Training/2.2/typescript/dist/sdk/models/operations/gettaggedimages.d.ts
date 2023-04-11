import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The ordering. Defaults to newest.
 */
export declare enum GetTaggedImagesOrderByEnum {
    Newest = "Newest",
    Oldest = "Oldest"
}
export declare class GetTaggedImagesRequest extends SpeakeasyBase {
    trainingKey: string;
    /**
     * The iteration id. Defaults to workspace.
     */
    iterationId?: string;
    /**
     * The ordering. Defaults to newest.
     */
    orderBy?: GetTaggedImagesOrderByEnum;
    /**
     * The project id.
     */
    projectId: string;
    /**
     * Number of images to skip before beginning the image batch. Defaults to 0.
     */
    skip?: number;
    /**
     * A list of tags ids to filter the images. Defaults to all tagged images when null. Limited to 20.
     */
    tagIds?: string[];
    /**
     * Maximum number of images to return. Defaults to 50, limited to 256.
     */
    take?: number;
}
export declare class GetTaggedImagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    images?: shared.Image[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
