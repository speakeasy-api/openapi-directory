import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetFeaturedVideoCollectionListEmbedEnum {
    ShareUrl = "share_url"
}


export class GetFeaturedVideoCollectionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetFeaturedVideoCollectionListEmbedEnum;
}


export class GetFeaturedVideoCollectionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetFeaturedVideoCollectionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFeaturedVideoCollectionListQueryParams;

  @SpeakeasyMetadata()
  security: GetFeaturedVideoCollectionListSecurity;
}


export class GetFeaturedVideoCollectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  featuredCollectionDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
