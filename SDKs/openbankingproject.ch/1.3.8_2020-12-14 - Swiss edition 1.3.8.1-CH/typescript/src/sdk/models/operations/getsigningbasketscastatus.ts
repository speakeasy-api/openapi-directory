import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSigningBasketScaStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorisationId" })
  authorisationId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=basketId" })
  basketId: string;
}


export class GetSigningBasketScaStatusHeaders extends SpeakeasyBase {
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


export class GetSigningBasketScaStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetSigningBasketScaStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSigningBasketScaStatusPathParams;

  @SpeakeasyMetadata()
  headers: GetSigningBasketScaStatusHeaders;

  @SpeakeasyMetadata()
  security: GetSigningBasketScaStatusSecurity;
}


export class GetSigningBasketScaStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400NGSBS?: shared.Error400NgSbs;

  @SpeakeasyMetadata()
  error400SBS?: shared.Error400Sbs;

  @SpeakeasyMetadata()
  error401NGSBS?: shared.Error401NgSbs;

  @SpeakeasyMetadata()
  error401SBS?: shared.Error401Sbs;

  @SpeakeasyMetadata()
  error403NGSBS?: shared.Error403NgSbs;

  @SpeakeasyMetadata()
  error403SBS?: shared.Error403Sbs;

  @SpeakeasyMetadata()
  error404NGSBS?: shared.Error404NgSbs;

  @SpeakeasyMetadata()
  error404SBS?: shared.Error404Sbs;

  @SpeakeasyMetadata()
  error405NGSBS?: shared.Error405NgSbs;

  @SpeakeasyMetadata()
  error405SBS?: shared.Error405Sbs;

  @SpeakeasyMetadata()
  error409NGSBS?: shared.Error409NgSbs;

  @SpeakeasyMetadata()
  error409SBS?: shared.Error409Sbs;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  scaStatusResponse?: shared.ScaStatusResponse;
}
