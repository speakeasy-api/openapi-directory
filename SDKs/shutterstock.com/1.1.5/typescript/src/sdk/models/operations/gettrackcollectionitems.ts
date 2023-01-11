import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetTrackCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetTrackCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetTrackCollectionItemsSortEnum;
}


export class GetTrackCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetTrackCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrackCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetTrackCollectionItemsSecurity;
}


export class GetTrackCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionItemDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
