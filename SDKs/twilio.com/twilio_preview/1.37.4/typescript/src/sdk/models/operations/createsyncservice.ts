import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSyncServiceServerList = [
	"https://preview.twilio.com",
] as const;


export class CreateSyncServiceCreateSyncServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AclEnabled;" })
  aclEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "form, name=ReachabilityWebhooksEnabled;" })
  reachabilityWebhooksEnabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class CreateSyncServiceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSyncServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverURL?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSyncServiceCreateSyncServiceRequest;

  @SpeakeasyMetadata()
  security: CreateSyncServiceSecurity;
}


export class CreateSyncServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  previewSyncService?: shared.PreviewSyncService;
}
