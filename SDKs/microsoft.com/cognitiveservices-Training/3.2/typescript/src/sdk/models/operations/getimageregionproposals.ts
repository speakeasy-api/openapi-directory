import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImageRegionProposalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImageRegionProposalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImageRegionProposalsPathParams;
}


export class GetImageRegionProposalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  imageRegionProposal?: shared.ImageRegionProposal;

  @SpeakeasyMetadata()
  statusCode: number;
}
