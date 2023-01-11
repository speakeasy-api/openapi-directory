import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InitiatePaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-product" })
  paymentProduct: shared.PaymentProductEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment-service" })
  paymentService: shared.PaymentServiceEnum;
}


export class InitiatePaymentHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Consent-ID" })
  consentID?: string;

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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID" })
  psuCorporateID?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Corporate-ID-Type" })
  psuCorporateIDType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Device-ID" })
  psuDeviceID?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Geo-Location" })
  psuGeoLocation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-Http-Method" })
  psuHttpMethod?: shared.PsuHttpMethodEnum;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID" })
  psuID?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-ID-Type" })
  psuIDType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Address" })
  psuIPAddress: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-IP-Port" })
  psuIPPort?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=PSU-User-Agent" })
  psuUserAgent?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Brand-Logging-Information" })
  tppBrandLoggingInformation?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Explicit-Authorisation-Preferred" })
  tppExplicitAuthorisationPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Nok-Redirect-URI" })
  tppNokRedirectURI?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-Content-Preferred" })
  tppNotificationContentPreferred?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Notification-URI" })
  tppNotificationURI?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-Preferred" })
  tppRedirectPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Redirect-URI" })
  tppRedirectURI?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Rejection-NoFunds-Preferred" })
  tppRejectionNoFundsPreferred?: boolean;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=TPP-Signature-Certificate" })
  tppSignatureCertificate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Request-ID" })
  xRequestID: string;
}


export class InitiatePaymentRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXML: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  oneOf?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  periodicPaymentInitiationMultipartBody?: shared.PeriodicPaymentInitiationMultipartBody;
}


export class InitiatePaymentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}


export class InitiatePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InitiatePaymentPathParams;

  @SpeakeasyMetadata()
  headers: InitiatePaymentHeaders;

  @SpeakeasyMetadata()
  request: InitiatePaymentRequests;

  @SpeakeasyMetadata()
  security: InitiatePaymentSecurity;
}


export class InitiatePaymentResponse extends SpeakeasyBase {
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
  paymentInitationRequestResponse201?: shared.PaymentInitationRequestResponse201;
}
