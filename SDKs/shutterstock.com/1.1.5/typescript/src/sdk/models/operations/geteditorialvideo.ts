import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialVideoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialVideoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialVideoPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialVideoQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialVideoSecurity;
}


export class GetEditorialVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialVideoContent?: shared.EditorialVideoContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
