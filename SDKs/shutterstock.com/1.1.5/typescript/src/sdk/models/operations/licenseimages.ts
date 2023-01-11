import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LicenseImagesFormatEnum {
    Eps = "eps",
    Jpg = "jpg"
}

export enum LicenseImagesSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Vector = "vector",
    Custom = "custom"
}


export class LicenseImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: LicenseImagesFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_id" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: LicenseImagesSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
  subscriptionId?: string;
}


export class LicenseImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class LicenseImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LicenseImagesQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LicenseImageRequest;

  @SpeakeasyMetadata()
  security: LicenseImagesSecurity;
}


export class LicenseImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseImageResultDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
