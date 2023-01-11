import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDomainInformationByCertificateIdPathParams extends SpeakeasyBase {
    certificateId: string;
    customerId: string;
}
export declare class GetDomainInformationByCertificateIdRequest extends SpeakeasyBase {
    pathParams: GetDomainInformationByCertificateIdPathParams;
}
export declare class GetDomainInformationByCertificateIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    domainVerificationSummaries?: any[];
    statusCode: number;
}
