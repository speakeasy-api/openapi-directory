import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGenrePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetGenreIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetGenreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetGenreIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetGenreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenrePathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenreQueryParams;
}


export class GetGenreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
