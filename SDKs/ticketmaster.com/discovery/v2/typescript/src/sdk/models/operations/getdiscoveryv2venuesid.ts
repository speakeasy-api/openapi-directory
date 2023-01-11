import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiscoveryV2VenuesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetDiscoveryV2VenuesIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetDiscoveryV2VenuesIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2VenuesIdIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetDiscoveryV2VenuesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDiscoveryV2VenuesIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2VenuesIdQueryParams;
}


export class GetDiscoveryV2VenuesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
