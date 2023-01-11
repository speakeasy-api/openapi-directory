import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelPaymentPathParams extends SpeakeasyBase {
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class CancelPaymentHeaders extends SpeakeasyBase {
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
    tppExplicitAuthorisationPreferred?: boolean;
    tppNokRedirectURI?: string;
    tppRedirectPreferred?: boolean;
    tppRedirectURI?: string;
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class CancelPaymentSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class CancelPaymentRequest extends SpeakeasyBase {
    pathParams: CancelPaymentPathParams;
    headers: CancelPaymentHeaders;
    security: CancelPaymentSecurity;
}
export declare class CancelPaymentResponse extends SpeakeasyBase {
    contentType: string;
    error400NGPIS?: shared.Error400NgPis;
    error400PIS?: shared.Error400Pis;
    error401NGPIS?: shared.Error401NgPis;
    error401PIS?: shared.Error401Pis;
    error403NGPIS?: shared.Error403NgPis;
    error403PIS?: shared.Error403Pis;
    error404NGPIS?: shared.Error404NgPis;
    error404PIS?: shared.Error404Pis;
    error405NGPISCANC?: shared.Error405NgPisCanc;
    error405PISCANC?: shared.Error405PisCanc;
    error409NGPIS?: shared.Error409NgPis;
    error409PIS?: shared.Error409Pis;
    headers: Record<string, string[]>;
    statusCode: number;
    paymentInitiationCancelResponse202?: shared.PaymentInitiationCancelResponse202;
}
