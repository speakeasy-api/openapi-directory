import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSegmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetSegmentIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetSegmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetSegmentIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetSegmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSegmentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSegmentQueryParams;
}


export class GetSegmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
