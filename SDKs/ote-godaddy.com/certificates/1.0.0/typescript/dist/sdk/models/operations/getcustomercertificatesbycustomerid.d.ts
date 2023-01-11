import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomerCertificatesByCustomerIdPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class GetCustomerCertificatesByCustomerIdQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetCustomerCertificatesByCustomerIdRequest extends SpeakeasyBase {
    pathParams: GetCustomerCertificatesByCustomerIdPathParams;
    queryParams: GetCustomerCertificatesByCustomerIdQueryParams;
}
export declare class GetCustomerCertificatesByCustomerIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    certificateSummariesV2?: any;
    contentType: string;
    statusCode: number;
}
