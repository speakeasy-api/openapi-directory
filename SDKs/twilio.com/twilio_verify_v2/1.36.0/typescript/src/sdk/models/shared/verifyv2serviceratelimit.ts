import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2ServiceRateLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
