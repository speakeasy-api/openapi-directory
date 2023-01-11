import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiscoveryV2EventsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetDiscoveryV2EventsIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetDiscoveryV2EventsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2EventsIdIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetDiscoveryV2EventsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDiscoveryV2EventsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2EventsIdQueryParams;
}


export class GetDiscoveryV2EventsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
