import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorCollectionsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contributor_id" })
  contributorId: string;
}

export enum GetContributorCollectionsListSortEnum {
    Newest = "newest",
    LastUpdated = "last_updated",
    ItemCount = "item_count"
}


export class GetContributorCollectionsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetContributorCollectionsListSortEnum;
}


export class GetContributorCollectionsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;
}


export class GetContributorCollectionsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContributorCollectionsListPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContributorCollectionsListQueryParams;

  @SpeakeasyMetadata()
  security: GetContributorCollectionsListSecurity;
}


export class GetContributorCollectionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
