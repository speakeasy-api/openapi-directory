import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1DomainConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=config_sid" })
  configSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=domain_sid" })
  domainSid?: string;

  @SpeakeasyMetadata({ data: "json, name=fallback_url" })
  fallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=messaging_service_sids" })
  messagingServiceSids?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
