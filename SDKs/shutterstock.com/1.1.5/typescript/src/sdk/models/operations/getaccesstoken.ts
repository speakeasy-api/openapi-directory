import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccessTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAccessTokenSecurity;
}


export class GetAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessTokenDetails?: shared.AccessTokenDetails;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
