import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateGetPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateGetRequest extends SpeakeasyBase {
    pathParams: CertificateGetPathParams;
}
export declare class CertificateGetResponse extends SpeakeasyBase {
    certificate?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
