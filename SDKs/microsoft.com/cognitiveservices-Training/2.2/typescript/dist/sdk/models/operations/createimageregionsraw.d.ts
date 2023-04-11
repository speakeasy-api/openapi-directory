import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateImageRegionsRawRequest extends SpeakeasyBase {
    /**
     * Batch of image regions which include a tag and bounding box. Limited to 64.
     */
    requestBody: Uint8Array;
    trainingKey: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class CreateImageRegionsRawResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    imageRegionCreateSummary?: shared.ImageRegionCreateSummary;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
