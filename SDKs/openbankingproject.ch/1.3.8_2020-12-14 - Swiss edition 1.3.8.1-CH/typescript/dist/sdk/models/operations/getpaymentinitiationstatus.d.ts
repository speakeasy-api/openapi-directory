import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentInitiationStatusPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class GetPaymentInitiationStatusHeaders extends SpeakeasyBase {
    digest?: string;
    psuAccept?: string;
    psuAcceptCharset?: string;
    psuAcceptEncoding?: string;
    psuAcceptLanguage?: string;
    psuDeviceID?: string;
    psuGeoLocation?: string;
    psuHttpMethod?: shared.PsuHttpMethodEnum;
    psuIPAddress?: string;
    psuIPPort?: string;
    psuUserAgent?: string;
    signature?: string;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class GetPaymentInitiationStatusSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetPaymentInitiationStatusRequest extends SpeakeasyBase {
    pathParams: GetPaymentInitiationStatusPathParams;
    headers: GetPaymentInitiationStatusHeaders;
    security: GetPaymentInitiationStatusSecurity;
}
export declare class GetPaymentInitiationStatusResponse extends SpeakeasyBase {
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
    paymentInitiationStatusResponse200Json?: shared.PaymentInitiationStatusResponse200Json;
    paymentInitiationStatusResponse200Xml?: string;
}
