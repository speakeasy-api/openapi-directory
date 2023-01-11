import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDomainConfigServerList = [
	"https://messaging.twilio.com",
] as const;


export class UpdateDomainConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class UpdateDomainConfigUpdateDomainConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=FallbackUrl;" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSids;" })
  messagingServiceSids: string[];

  @SpeakeasyMetadata({ data: "form, name=MessagingServiceSidsAction;" })
  messagingServiceSidsAction?: string;
}


export class UpdateDomainConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDomainConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDomainConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDomainConfigUpdateDomainConfigRequest;

  @SpeakeasyMetadata()
  security: UpdateDomainConfigSecurity;
}


export class UpdateDomainConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1DomainConfig?: shared.MessagingV1DomainConfig;
}
