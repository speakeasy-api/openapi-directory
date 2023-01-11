import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCertificateDetailByCertIdentifierPathParams extends SpeakeasyBase {
    certificateId: string;
    customerId: string;
}
export declare class GetCertificateDetailByCertIdentifierRequest extends SpeakeasyBase {
    pathParams: GetCertificateDetailByCertIdentifierPathParams;
}
export declare class GetCertificateDetailByCertIdentifierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    certificateDetailV2?: any;
    contentType: string;
    statusCode: number;
}
