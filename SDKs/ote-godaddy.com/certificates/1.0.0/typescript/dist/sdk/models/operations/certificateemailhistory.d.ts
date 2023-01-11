import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateEmailHistoryPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateEmailHistoryRequest extends SpeakeasyBase {
    pathParams: CertificateEmailHistoryPathParams;
}
export declare class CertificateEmailHistoryResponse extends SpeakeasyBase {
    certificateEmailHistory?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
