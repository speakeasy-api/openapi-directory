import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];
}


export class GetContributorListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;
}


export class GetContributorListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContributorListQueryParams;

  @SpeakeasyMetadata()
  security: GetContributorListSecurity;
}


export class GetContributorListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  contributorProfileDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
