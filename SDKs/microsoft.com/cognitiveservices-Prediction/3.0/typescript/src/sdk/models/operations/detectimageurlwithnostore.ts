import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetectImageUrlWithNoStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publishedName" })
  publishedName: string;
}


export class DetectImageUrlWithNoStoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;
}


export class DetectImageUrlWithNoStoreRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  imageUrl?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  imageUrl1?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class DetectImageUrlWithNoStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DetectImageUrlWithNoStorePathParams;

  @SpeakeasyMetadata()
  queryParams: DetectImageUrlWithNoStoreQueryParams;

  @SpeakeasyMetadata()
  request: DetectImageUrlWithNoStoreRequests;
}


export class DetectImageUrlWithNoStoreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  imagePrediction?: shared.ImagePrediction;

  @SpeakeasyMetadata()
  statusCode: number;
}
