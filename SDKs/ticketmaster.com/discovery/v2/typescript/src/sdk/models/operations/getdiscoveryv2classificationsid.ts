import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiscoveryV2ClassificationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum {
    Yes = "yes",
    No = " no"
}


export class GetDiscoveryV2ClassificationsIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeLicensedContent" })
  includeLicensedContent?: GetDiscoveryV2ClassificationsIdIncludeLicensedContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;
}


export class GetDiscoveryV2ClassificationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDiscoveryV2ClassificationsIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDiscoveryV2ClassificationsIdQueryParams;
}


export class GetDiscoveryV2ClassificationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
