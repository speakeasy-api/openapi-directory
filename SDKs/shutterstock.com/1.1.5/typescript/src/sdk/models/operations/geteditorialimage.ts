import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEditorialImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEditorialImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
  country: string;
}


export class GetEditorialImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetEditorialImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEditorialImagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetEditorialImageQueryParams;

  @SpeakeasyMetadata()
  security: GetEditorialImageSecurity;
}


export class GetEditorialImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  editorialContent?: shared.EditorialContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
