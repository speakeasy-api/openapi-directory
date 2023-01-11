import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassifyImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publishedName" })
  publishedName: string;
}


export class ClassifyImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;
}


export class ClassifyImageRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class ClassifyImageRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: ClassifyImageRequestBodyImageData;
}


export class ClassifyImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassifyImagePathParams;

  @SpeakeasyMetadata()
  queryParams: ClassifyImageQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ClassifyImageRequestBody;
}


export class ClassifyImageResponse extends SpeakeasyBase {
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
