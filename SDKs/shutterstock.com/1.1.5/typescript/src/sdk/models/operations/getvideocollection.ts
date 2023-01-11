import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetVideoCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetVideoCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetVideoCollectionEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;
}


export class GetVideoCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetVideoCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoCollectionSecurity;
}


export class GetVideoCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
