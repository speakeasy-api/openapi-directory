import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentCancellationPsuDataPathParams extends SpeakeasyBase {
    authorisationId: string;
    paymentProduct: shared.PaymentProductEnum;
    paymentService: shared.PaymentServiceEnum;
    paymentId: string;
}
export declare class UpdatePaymentCancellationPsuDataHeaders extends SpeakeasyBase {
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
    tppSignatureCertificate?: string;
    xRequestID: string;
}
export declare class UpdatePaymentCancellationPsuDataSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class UpdatePaymentCancellationPsuDataRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentCancellationPsuDataPathParams;
    headers: UpdatePaymentCancellationPsuDataHeaders;
    request?: any;
    security: UpdatePaymentCancellationPsuDataSecurity;
}
export declare class UpdatePaymentCancellationPsuDataResponse extends SpeakeasyBase {
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
    updatePaymentCancellationPsuData200ApplicationJSONOneOf?: any;
}
