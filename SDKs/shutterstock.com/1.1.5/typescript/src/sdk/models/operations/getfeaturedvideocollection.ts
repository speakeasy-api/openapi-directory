import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeaturedVideoCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetFeaturedVideoCollectionEmbedEnum {
    ShareUrl = "share_url"
}


export class GetFeaturedVideoCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetFeaturedVideoCollectionEmbedEnum;
}


export class GetFeaturedVideoCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetFeaturedVideoCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturedVideoCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFeaturedVideoCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetFeaturedVideoCollectionSecurity;
}


export class GetFeaturedVideoCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featuredCollection?: shared.FeaturedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
