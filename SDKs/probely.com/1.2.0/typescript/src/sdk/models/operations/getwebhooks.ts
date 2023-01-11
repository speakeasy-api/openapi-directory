import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_total" })
  pageTotal?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Webhook })
  results?: shared.Webhook[];
}


export class GetWebhooks401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetWebhooks403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getWebhooks200ApplicationJSONObject?: GetWebhooks200ApplicationJson;

  @SpeakeasyMetadata()
  getWebhooks401ApplicationJSONObject?: GetWebhooks401ApplicationJson;

  @SpeakeasyMetadata()
  getWebhooks403ApplicationJSONObject?: GetWebhooks403ApplicationJson;
}
