import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalancesPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetBalancesHeaders extends SpeakeasyBase {
    consentID: string;
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
export declare class GetBalancesSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class GetBalancesRequest extends SpeakeasyBase {
    pathParams: GetBalancesPathParams;
    headers: GetBalancesHeaders;
    security: GetBalancesSecurity;
}
export declare class GetBalancesResponse extends SpeakeasyBase {
    contentType: string;
    error400AIS?: shared.Error400Ais;
    error400NGAIS?: shared.Error400NgAis;
    error401AIS?: shared.Error401Ais;
    error401NGAIS?: shared.Error401NgAis;
    error403AIS?: shared.Error403Ais;
    error403NGAIS?: shared.Error403NgAis;
    error404AIS?: shared.Error404Ais;
    error404NGAIS?: shared.Error404NgAis;
    error405AIS?: shared.Error405Ais;
    error405NGAIS?: shared.Error405NgAis;
    error406AIS?: shared.Error406Ais;
    error406NGAIS?: shared.Error406NgAis;
    error409AIS?: shared.Error409Ais;
    error409NGAIS?: shared.Error409NgAis;
    error429AIS?: shared.Error429Ais;
    error429NGAIS?: shared.Error429NgAis;
    headers: Record<string, string[]>;
    statusCode: number;
    readAccountBalanceResponse200?: shared.ReadAccountBalanceResponse200;
}
