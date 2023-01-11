import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialImageLivefeedItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialImageLivefeedItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialImageLivefeedItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialImageLivefeedItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialImageLivefeedItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialImageLivefeedItemsQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialImageLivefeedItemsSecurity;
}


export class GetEditorialImageLivefeedItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialImageContentDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
