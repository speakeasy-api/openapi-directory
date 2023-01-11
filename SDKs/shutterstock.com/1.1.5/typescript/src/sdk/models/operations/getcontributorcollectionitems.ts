import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorCollectionItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contributor_id" })
  contributorId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetContributorCollectionItemsSortEnum {
    Newest = "newest",
    Oldest = "oldest"
}


export class GetContributorCollectionItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetContributorCollectionItemsSortEnum;
}


export class GetContributorCollectionItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;
}


export class GetContributorCollectionItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContributorCollectionItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContributorCollectionItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetContributorCollectionItemsSecurity;
}


export class GetContributorCollectionItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionItemDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
