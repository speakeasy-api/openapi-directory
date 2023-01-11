import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSubgenrePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetSubgenreIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetSubgenreQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetSubgenreIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetSubgenreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubgenrePathParams;

  @SpeakeasyMetadata()
  queryParams: GetSubgenreQueryParams;
}


export class GetSubgenreResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
