import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBalancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-id" })
  accountId: string;
}


export class GetBalancesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" })
  consentID: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Digest" })
  digest?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept" })
  psuAccept?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Charset" })
  psuAcceptCharset?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Encoding" })
  psuAcceptEncoding?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Accept-Language" })
  psuAcceptLanguage?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceID?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIPAddress?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIPPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestID: string;
}


export class GetBalancesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBalancesPathParams;

  @SpeakeasyMetadata()
  headers: GetBalancesHeaders;

  @SpeakeasyMetadata()
  security: GetBalancesSecurity;
}


export class GetBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400AIS?: shared.Error400Ais;

  @SpeakeasyMetadata()
  error400NGAIS?: shared.Error400NgAis;

  @SpeakeasyMetadata()
  error401AIS?: shared.Error401Ais;

  @SpeakeasyMetadata()
  error401NGAIS?: shared.Error401NgAis;

  @SpeakeasyMetadata()
  error403AIS?: shared.Error403Ais;

  @SpeakeasyMetadata()
  error403NGAIS?: shared.Error403NgAis;

  @SpeakeasyMetadata()
  error404AIS?: shared.Error404Ais;

  @SpeakeasyMetadata()
  error404NGAIS?: shared.Error404NgAis;

  @SpeakeasyMetadata()
  error405AIS?: shared.Error405Ais;

  @SpeakeasyMetadata()
  error405NGAIS?: shared.Error405NgAis;

  @SpeakeasyMetadata()
  error406AIS?: shared.Error406Ais;

  @SpeakeasyMetadata()
  error406NGAIS?: shared.Error406NgAis;

  @SpeakeasyMetadata()
  error409AIS?: shared.Error409Ais;

  @SpeakeasyMetadata()
  error409NGAIS?: shared.Error409NgAis;

  @SpeakeasyMetadata()
  error429AIS?: shared.Error429Ais;

  @SpeakeasyMetadata()
  error429NGAIS?: shared.Error429NgAis;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  readAccountBalanceResponse200?: shared.ReadAccountBalanceResponse200;
}
