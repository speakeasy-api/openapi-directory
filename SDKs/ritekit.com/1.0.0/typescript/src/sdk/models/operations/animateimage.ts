import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AnimateImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class AnimateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AnimateImageQueryParams;
}


export class AnimateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
