import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialLivefeedItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialLivefeedItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialLivefeedItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialLivefeedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialLivefeedItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialLivefeedItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialLivefeedItemsSecurity;
}


export class GetEditorialLivefeedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialContentDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
