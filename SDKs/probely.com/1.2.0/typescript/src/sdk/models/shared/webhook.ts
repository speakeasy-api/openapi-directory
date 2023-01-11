import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookApiVersionEnum } from "./webhookapiversionenum";
import { ChangedBy } from "./changedby";



export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: WebhookApiVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=check_cert" })
  checkCert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class WebhookInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=api_version" })
  apiVersion?: WebhookApiVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=check_cert" })
  checkCert?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
