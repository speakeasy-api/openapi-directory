import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCustomers302ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}


export class GetCustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCustomers302ApplicationJSONObject?: GetCustomers302ApplicationJson;
}
