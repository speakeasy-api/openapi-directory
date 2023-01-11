import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetVideoCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetVideoCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVideoCollectionItemsSortEnum;
}


export class GetVideoCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetVideoCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoCollectionItemsSecurity;
}


export class GetVideoCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionItemDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
