import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeaturedImageCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetFeaturedImageCollectionAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}

export enum GetFeaturedImageCollectionEmbedEnum {
    ShareUrl = "share_url"
}


export class GetFeaturedImageCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_hint" })
  assetHint?: GetFeaturedImageCollectionAssetHintEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetFeaturedImageCollectionEmbedEnum;
}


export class GetFeaturedImageCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetFeaturedImageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturedImageCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFeaturedImageCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetFeaturedImageCollectionSecurity;
}


export class GetFeaturedImageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featuredCollection?: shared.FeaturedCollection;

  @SpeakeasyMetadata()
  statusCode: number;
}
