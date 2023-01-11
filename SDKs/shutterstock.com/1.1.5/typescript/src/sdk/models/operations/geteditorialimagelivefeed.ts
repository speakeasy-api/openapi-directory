import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialImageLivefeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialImageLivefeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialImageLivefeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialImageLivefeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialImageLivefeedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialImageLivefeedQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialImageLivefeedSecurity;
}


export class GetEditorialImageLivefeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialImageLivefeed?: shared.EditorialImageLivefeed;

  @SpeakeasyMetadata()
  statusCode: number;
}
