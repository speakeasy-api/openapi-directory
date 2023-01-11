import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class DeleteImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allImages" })
  allImages?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allIterations" })
  allIterations?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" })
  imageIds?: string[];
}


export class DeleteImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteImagesQueryParams;
}


export class DeleteImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customVisionError?: shared.CustomVisionError;

  @SpeakeasyMetadata()
  statusCode: number;
}
