import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV2EditorialIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetV2EditorialIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetV2EditorialIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetV2EditorialIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV2EditorialIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV2EditorialIdQueryParams;

  @SpeakeasyMetadata()
  security: GetV2EditorialIdSecurity;
}


export class GetV2EditorialIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialContent?: shared.EditorialContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
