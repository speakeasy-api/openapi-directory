import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateSigningBasketPsuDataPathParams extends SpeakeasyBase {
    authorisationId: string;
    basketId: string;
}
export declare class UpdateSigningBasketPsuDataHeaders extends SpeakeasyBase {
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
export declare class UpdateSigningBasketPsuDataSecurity extends SpeakeasyBase {
    bearerAuthOAuth?: shared.SchemeBearerAuthOAuth;
}
export declare class UpdateSigningBasketPsuDataRequest extends SpeakeasyBase {
    pathParams: UpdateSigningBasketPsuDataPathParams;
    headers: UpdateSigningBasketPsuDataHeaders;
    request?: any;
    security: UpdateSigningBasketPsuDataSecurity;
}
export declare class UpdateSigningBasketPsuDataResponse extends SpeakeasyBase {
    contentType: string;
    error400NGSBS?: shared.Error400NgSbs;
    error400SBS?: shared.Error400Sbs;
    error401NGSBS?: shared.Error401NgSbs;
    error401SBS?: shared.Error401Sbs;
    error403NGSBS?: shared.Error403NgSbs;
    error403SBS?: shared.Error403Sbs;
    error404NGSBS?: shared.Error404NgSbs;
    error404SBS?: shared.Error404Sbs;
    error405NGSBS?: shared.Error405NgSbs;
    error405SBS?: shared.Error405Sbs;
    error409NGSBS?: shared.Error409NgSbs;
    error409SBS?: shared.Error409Sbs;
    headers: Record<string, string[]>;
    statusCode: number;
    updateSigningBasketPsuData200ApplicationJSONOneOf?: any;
}
