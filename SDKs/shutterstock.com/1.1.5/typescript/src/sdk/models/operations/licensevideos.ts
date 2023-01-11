import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LicenseVideosSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}


export class LicenseVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_id" })
  searchId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: LicenseVideosSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscription_id" })
  subscriptionId?: string;
}


export class LicenseVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class LicenseVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: LicenseVideosQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LicenseVideoRequest;

  @SpeakeasyMetadata()
  security: LicenseVideosSecurity;
}


export class LicenseVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseVideoResultDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
