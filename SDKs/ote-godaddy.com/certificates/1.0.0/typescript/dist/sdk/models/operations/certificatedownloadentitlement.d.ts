import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateDownloadEntitlementQueryParams extends SpeakeasyBase {
    entitlementId: string;
}
export declare class CertificateDownloadEntitlementRequest extends SpeakeasyBase {
    queryParams: CertificateDownloadEntitlementQueryParams;
}
export declare class CertificateDownloadEntitlementResponse extends SpeakeasyBase {
    certificateBundle?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
