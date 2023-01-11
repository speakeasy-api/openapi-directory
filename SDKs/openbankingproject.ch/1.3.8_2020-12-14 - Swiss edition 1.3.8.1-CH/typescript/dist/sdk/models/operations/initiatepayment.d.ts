import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InitiatePaymentPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
}
export declare class InitiatePaymentHeaders extends SpeakeasyBase {
    consentID?: string;
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuCorporateID?: string;
    psuCorporateIDType?: string;
    psuDeviceID?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuID?: string;
    psuIDType?: string;
    psuIPAddress: string;
    psuIPPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppBrandLoggingInformation?: string;
    tppExplicitAuthorisationPreferred?: boolean;
    tppNokRedirectURI?: string;
    tppNotificationContentPreferred?: string;
    tppNotificationURI?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectURI?: string;
    tppRejectionNoFundsPreferred?: boolean;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class InitiatePaymentRequests extends SpeakeasyBase {
    applicationXML: Uint8Array;
    oneOf?: any;
    periodicPaymentInitiationMultipartBody?: shared.PeriodicPaymentInitiationMultipartBody;
}
export declare class InitiatePaymentSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class InitiatePaymentRequest extends SpeakeasyBase {
    pathParams: InitiatePaymentPathParams;
    headers: InitiatePaymentHeaders;
    request: InitiatePaymentRequests;
    security: InitiatePaymentSecurity;
}
export declare class InitiatePaymentResponse extends SpeakeasyBase {
    contentType: string;
    error400NGPIS?: shared.Error400NgPis;
    error400PIS?: shared.Error400Pis;
    error401NGPIS?: shared.Error401NgPis;
    error401PIS?: shared.Error401Pis;
    error403NGPIS?: shared.Error403NgPis;
    error403PIS?: shared.Error403Pis;
    error404NGPIS?: shared.Error404NgPis;
    error404PIS?: shared.Error404Pis;
    error405NGPIS?: shared.Error405NgPis;
    error405PIS?: shared.Error405Pis;
    error409NGPIS?: shared.Error409NgPis;
    error409PIS?: shared.Error409Pis;
    headers: Record<string, string[]>;
    statusCode: number;
    paymentInitationRequestResponse201?: shared.PaymentInitationRequestResponse201;
}
