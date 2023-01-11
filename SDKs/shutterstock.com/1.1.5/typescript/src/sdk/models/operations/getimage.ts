import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetImageViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetImageViewEnum;
}


export class GetImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagePathParams;

  @SpeakeasyMetadata()
  queryParams: GetImageQueryParams;

  @SpeakeasyMetadata()
  security: GetImageSecurity;
}


export class GetImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  image?: shared.Image;

  @SpeakeasyMetadata()
  statusCode: number;
}
