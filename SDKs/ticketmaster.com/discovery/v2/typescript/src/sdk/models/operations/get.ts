import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathParams;

  @SpeakeasyMetadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
