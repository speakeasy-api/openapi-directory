import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseEditorialImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class LicenseEditorialImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LicenseEditorialContentRequest;

  @SpeakeasyMetadata()
  security: LicenseEditorialImageSecurity;
}


export class LicenseEditorialImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseEditorialContentResults?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
