import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateDownloadPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateDownloadRequest extends SpeakeasyBase {
    pathParams: CertificateDownloadPathParams;
}
export declare class CertificateDownloadResponse extends SpeakeasyBase {
    certificateBundle?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
