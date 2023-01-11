import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageRegionProposalsPathParams extends SpeakeasyBase {
    imageId: string;
    projectId: string;
}
export declare class GetImageRegionProposalsRequest extends SpeakeasyBase {
    pathParams: GetImageRegionProposalsPathParams;
}
export declare class GetImageRegionProposalsResponse extends SpeakeasyBase {
    contentType: string;
    customVisionError?: shared.CustomVisionError;
    imageRegionProposal?: shared.ImageRegionProposal;
    statusCode: number;
}
