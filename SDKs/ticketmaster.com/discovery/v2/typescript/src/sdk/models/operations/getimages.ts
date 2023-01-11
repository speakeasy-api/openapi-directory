import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetImagesIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetImagesIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImagesQueryParams;
}


export class GetImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
