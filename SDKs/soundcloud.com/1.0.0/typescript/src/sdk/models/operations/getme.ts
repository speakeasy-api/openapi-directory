import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMeSecurity;
}


export class GetMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  completeUser?: shared.CompleteUser;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
