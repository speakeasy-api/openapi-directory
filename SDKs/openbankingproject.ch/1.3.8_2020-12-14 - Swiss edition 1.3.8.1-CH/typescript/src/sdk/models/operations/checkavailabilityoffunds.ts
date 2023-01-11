import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckAvailabilityOfFundsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestID: string;
}


export class CheckAvailabilityOfFundsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


// CheckAvailabilityOfFunds200ApplicationJson
/** 
 * Equals "true" if sufficient funds are available at the time of the request,
 * "false" otherwise.
 * 
**/
export class CheckAvailabilityOfFunds200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fundsAvailable" })
  fundsAvailable: boolean;
}


export class CheckAvailabilityOfFundsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CheckAvailabilityOfFundsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ConfirmationOfFunds;

  @SpeakeasyMetadata()
  security: CheckAvailabilityOfFundsSecurity;
}


export class CheckAvailabilityOfFundsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400AIS?: shared.Error400Ais;

  @SpeakeasyMetadata()
  error400NGAIS?: shared.Error400NgAis;

  @SpeakeasyMetadata()
  error401NGPIIS?: shared.Error401NgPiis;

  @SpeakeasyMetadata()
  error401PIIS?: shared.Error401Piis;

  @SpeakeasyMetadata()
  error403NGPIIS?: shared.Error403NgPiis;

  @SpeakeasyMetadata()
  error403PIIS?: shared.Error403Piis;

  @SpeakeasyMetadata()
  error404NGPIIS?: shared.Error404NgPiis;

  @SpeakeasyMetadata()
  error404PIIS?: shared.Error404Piis;

  @SpeakeasyMetadata()
  error405NGPIIS?: shared.Error405NgPiis;

  @SpeakeasyMetadata()
  error405PIIS?: shared.Error405Piis;

  @SpeakeasyMetadata()
  error409NGPIIS?: shared.Error409NgPiis;

  @SpeakeasyMetadata()
  error409PIIS?: shared.Error409Piis;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  checkAvailabilityOfFunds200ApplicationJSONObject?: CheckAvailabilityOfFunds200ApplicationJson;
}
