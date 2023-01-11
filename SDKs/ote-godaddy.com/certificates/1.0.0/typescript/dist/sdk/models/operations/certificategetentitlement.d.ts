import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateGetEntitlementQueryParams extends SpeakeasyBase {
    entitlementId: string;
    latest?: boolean;
}
export declare class CertificateGetEntitlementRequest extends SpeakeasyBase {
    queryParams: CertificateGetEntitlementQueryParams;
}
export declare class CertificateGetEntitlementResponse extends SpeakeasyBase {
    certificates?: any[];
    contentType: string;
    error?: any;
    statusCode: number;
}
