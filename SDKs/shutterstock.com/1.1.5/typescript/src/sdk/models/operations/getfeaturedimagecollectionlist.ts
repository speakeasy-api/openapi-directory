import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFeaturedImageCollectionListAssetHintEnum {
    Onex = "1x",
    Twox = "2x"
}

export enum GetFeaturedImageCollectionListEmbedEnum {
    ShareUrl = "share_url"
}

export enum GetFeaturedImageCollectionListTypeEnum {
    Photo = "photo",
    Editorial = "editorial",
    Vector = "vector"
}


export class GetFeaturedImageCollectionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_hint" })
  assetHint?: GetFeaturedImageCollectionListAssetHintEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetFeaturedImageCollectionListEmbedEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GetFeaturedImageCollectionListTypeEnum[];
}


export class GetFeaturedImageCollectionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetFeaturedImageCollectionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeaturedImageCollectionListQueryParams;

  @SpeakeasyMetadata()
  security: GetFeaturedImageCollectionListSecurity;
}


export class GetFeaturedImageCollectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featuredCollectionDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
