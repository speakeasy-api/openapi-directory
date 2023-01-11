import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConnectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client_id" })
  clientId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirect_uri" })
  redirectUri: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=response_type" })
  responseType: shared.ResponseTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: string;
}


export class GetConnectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetConnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetConnectQueryParams;

  @SpeakeasyMetadata()
  security: GetConnectSecurity;
}


export class GetConnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getConnect302ApplicationJSONString?: string;
}
