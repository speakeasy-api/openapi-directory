import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateDomainCertV4ServerList = [
	"https://messaging.twilio.com",
] as const;


export class UpdateDomainCertV4PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=DomainSid" })
  domainSid: string;
}


export class UpdateDomainCertV4UpdateDomainCertV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=TlsCert;" })
  tlsCert: string;
}


export class UpdateDomainCertV4Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateDomainCertV4Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateDomainCertV4PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateDomainCertV4UpdateDomainCertV4Request;

  @SpeakeasyMetadata()
  security: UpdateDomainCertV4Security;
}


export class UpdateDomainCertV4Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  messagingV1DomainCertV4?: shared.MessagingV1DomainCertV4;
}
