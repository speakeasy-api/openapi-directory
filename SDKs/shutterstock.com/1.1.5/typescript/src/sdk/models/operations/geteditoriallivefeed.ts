import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialLivefeedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialLivefeedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialLivefeedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialLivefeedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialLivefeedPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialLivefeedQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialLivefeedSecurity;
}


export class GetEditorialLivefeedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialLivefeed?: shared.EditorialLivefeed;

  @SpeakeasyMetadata()
  statusCode: number;
}
