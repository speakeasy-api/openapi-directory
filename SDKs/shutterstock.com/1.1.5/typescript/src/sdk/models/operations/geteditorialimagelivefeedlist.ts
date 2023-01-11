import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialImageLivefeedListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetEditorialImageLivefeedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialImageLivefeedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEditorialImageLivefeedListQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialImageLivefeedListSecurity;
}


export class GetEditorialImageLivefeedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialImageLivefeedList?: shared.EditorialImageLivefeedList;

  @SpeakeasyMetadata()
  statusCode: number;
}
