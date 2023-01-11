import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateActionRetrievePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateActionRetrieveRequest extends SpeakeasyBase {
    pathParams: CertificateActionRetrievePathParams;
}
export declare class CertificateActionRetrieveResponse extends SpeakeasyBase {
    arrayOfCertificateAction?: any[];
    contentType: string;
    error?: any;
    statusCode: number;
}
