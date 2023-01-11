import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DetectImageWithNoStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publishedName" })
  publishedName: string;
}


export class DetectImageWithNoStoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;
}


export class DetectImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class DetectImageWithNoStoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: DetectImageWithNoStoreRequestBodyImageData;
}


export class DetectImageWithNoStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DetectImageWithNoStorePathParams;

  @SpeakeasyMetadata()
  queryParams: DetectImageWithNoStoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: DetectImageWithNoStoreRequestBody;
}


export class DetectImageWithNoStoreResponse extends SpeakeasyBase {
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
