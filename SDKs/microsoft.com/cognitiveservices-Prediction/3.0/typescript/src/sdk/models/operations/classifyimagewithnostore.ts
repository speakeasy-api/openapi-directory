import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClassifyImageWithNoStorePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publishedName" })
  publishedName: string;
}


export class ClassifyImageWithNoStoreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=application" })
  application?: string;
}


export class ClassifyImageWithNoStoreRequestBodyImageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageData" })
  imageData: string;
}


export class ClassifyImageWithNoStoreRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageData: ClassifyImageWithNoStoreRequestBodyImageData;
}


export class ClassifyImageWithNoStoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClassifyImageWithNoStorePathParams;

  @SpeakeasyMetadata()
  queryParams: ClassifyImageWithNoStoreQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ClassifyImageWithNoStoreRequestBody;
}


export class ClassifyImageWithNoStoreResponse extends SpeakeasyBase {
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
