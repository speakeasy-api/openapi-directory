import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateReissuePathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateReissueRequest extends SpeakeasyBase {
    pathParams: CertificateReissuePathParams;
    request: any;
}
export declare class CertificateReissueResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
