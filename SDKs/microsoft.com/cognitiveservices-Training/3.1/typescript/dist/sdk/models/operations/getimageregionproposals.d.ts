import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetImageRegionProposalsRequest extends SpeakeasyBase {
    /**
     * API key.
     */
    trainingKey: string;
    /**
     * The image id.
     */
    imageId: string;
    /**
     * The project id.
     */
    projectId: string;
}
export declare class GetImageRegionProposalsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error response
     */
    customVisionError?: shared.CustomVisionError;
    /**
     * OK
     */
    imageRegionProposal?: shared.ImageRegionProposal;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
