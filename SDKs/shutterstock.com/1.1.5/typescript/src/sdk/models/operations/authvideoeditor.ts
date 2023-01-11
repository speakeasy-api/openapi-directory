import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthVideoEditorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class AuthVideoEditorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.VideoEditorTokenRequest;

  @SpeakeasyMetadata()
  security: AuthVideoEditorSecurity;
}


export class AuthVideoEditorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoEditorTokenResponse?: shared.VideoEditorTokenResponse;
}
