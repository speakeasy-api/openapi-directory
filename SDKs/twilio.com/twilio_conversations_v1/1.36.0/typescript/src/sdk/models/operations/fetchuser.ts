import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHUSER_SERVERS = [
	"https://conversations.twilio.com",
];



export class FetchUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class FetchUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUserRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchUserPathParams;

  @Metadata()
  security: FetchUserSecurity;
}


export class FetchUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  conversationsV1User?: shared.ConversationsV1User;
}
