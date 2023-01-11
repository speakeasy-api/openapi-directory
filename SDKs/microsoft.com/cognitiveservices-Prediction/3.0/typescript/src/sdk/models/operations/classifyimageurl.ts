import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassifyImageUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publishedName" })
  publishedName: string;
}


export class ClassifyImageUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;
}


export class ClassifyImageUrlRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  imageUrl?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  imageUrl1?: shared.ImageUrl;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXML: Uint8Array;
}


export class ClassifyImageUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassifyImageUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: ClassifyImageUrlQueryParams;

  @SpeakeasyMetadata()
  request: ClassifyImageUrlRequests;
}


export class ClassifyImageUrlResponse extends SpeakeasyBase {
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
