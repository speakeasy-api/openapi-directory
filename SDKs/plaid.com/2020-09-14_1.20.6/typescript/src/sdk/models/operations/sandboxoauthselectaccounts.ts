import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SandboxOauthSelectAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SandboxOauthSelectAccountsRequest;
}


export class SandboxOauthSelectAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Record<string, any>;

  @SpeakeasyMetadata()
  sandboxOauthSelectAccountsResponse?: Record<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
