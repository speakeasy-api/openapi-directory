import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentInitiationAuthorisationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentInitiationAuthorisationHeaders extends SpeakeasyBase {
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


export class GetPaymentInitiationAuthorisationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class GetPaymentInitiationAuthorisationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentInitiationAuthorisationPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentInitiationAuthorisationHeaders;

  @SpeakeasyMetadata()
  security: GetPaymentInitiationAuthorisationSecurity;
}


export class GetPaymentInitiationAuthorisationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error400NGPIS?: shared.Error400NgPis;

  @SpeakeasyMetadata()
  error400PIS?: shared.Error400Pis;

  @SpeakeasyMetadata()
  error401NGPIS?: shared.Error401NgPis;

  @SpeakeasyMetadata()
  error401PIS?: shared.Error401Pis;

  @SpeakeasyMetadata()
  error403NGPIS?: shared.Error403NgPis;

  @SpeakeasyMetadata()
  error403PIS?: shared.Error403Pis;

  @SpeakeasyMetadata()
  error404NGPIS?: shared.Error404NgPis;

  @SpeakeasyMetadata()
  error404PIS?: shared.Error404Pis;

  @SpeakeasyMetadata()
  error405NGPIS?: shared.Error405NgPis;

  @SpeakeasyMetadata()
  error405PIS?: shared.Error405Pis;

  @SpeakeasyMetadata()
  error409NGPIS?: shared.Error409NgPis;

  @SpeakeasyMetadata()
  error409PIS?: shared.Error409Pis;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authorisations?: shared.Authorisations;
}
