import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LicenseEditorialVideoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class LicenseEditorialVideoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.LicenseEditorialVideoContentRequest;

  @SpeakeasyMetadata()
  security: LicenseEditorialVideoSecurity;
}


export class LicenseEditorialVideoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  licenseEditorialContentResults?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
