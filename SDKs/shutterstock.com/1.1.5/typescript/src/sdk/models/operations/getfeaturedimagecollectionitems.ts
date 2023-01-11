import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFeaturedImageCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetFeaturedImageCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetFeaturedImageCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetFeaturedImageCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeaturedImageCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFeaturedImageCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetFeaturedImageCollectionItemsSecurity;
}


export class GetFeaturedImageCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionItemDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
