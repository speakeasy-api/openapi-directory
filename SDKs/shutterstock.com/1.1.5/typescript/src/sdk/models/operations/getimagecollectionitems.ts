import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImageCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetImageCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetImageCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetImageCollectionItemsSortEnum;
}


export class GetImageCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetImageCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImageCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImageCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetImageCollectionItemsSecurity;
}


export class GetImageCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionItemDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
