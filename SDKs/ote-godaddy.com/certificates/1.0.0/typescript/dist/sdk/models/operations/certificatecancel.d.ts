import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateCancelPathParams extends SpeakeasyBase {
    certificateId: string;
}
export declare class CertificateCancelRequest extends SpeakeasyBase {
    pathParams: CertificateCancelPathParams;
}
export declare class CertificateCancelResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
