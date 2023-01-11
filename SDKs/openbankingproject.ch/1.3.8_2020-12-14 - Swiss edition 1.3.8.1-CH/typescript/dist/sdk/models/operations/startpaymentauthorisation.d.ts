import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartPaymentAuthorisationPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class StartPaymentAuthorisationHeaders extends SpeakeasyBase {
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
    psuIPAddress?: string;
    psuIPPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppNokRedirectURI?: string;
    tppNotificationContentPreferred?: string;
    tppNotificationURI?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectURI?: string;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class StartPaymentAuthorisationSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class StartPaymentAuthorisationRequest extends SpeakeasyBase {
    pathParams: StartPaymentAuthorisationPathParams;
    headers: StartPaymentAuthorisationHeaders;
    request?: any;
    security: StartPaymentAuthorisationSecurity;
}
export declare class StartPaymentAuthorisationResponse extends SpeakeasyBase {
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
    startScaprocessResponse?: shared.StartScaprocessResponse;
}
