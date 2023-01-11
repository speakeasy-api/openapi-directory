import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateSitesealGetPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare enum CertificateSitesealGetThemeEnum {
    Dark = "DARK",
    Light = "LIGHT"
}
export declare class CertificateSitesealGetQueryParams extends SpeakeasyBase {
    locale?: string;
    theme?: CertificateSitesealGetThemeEnum;
}
export declare class CertificateSitesealGetRequest extends SpeakeasyBase {
    pathParams: CertificateSitesealGetPathParams;
    queryParams: CertificateSitesealGetQueryParams;
}
export declare class CertificateSitesealGetResponse extends SpeakeasyBase {
    certificateSiteSeal?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
