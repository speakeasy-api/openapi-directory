import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateValidateHeaders extends SpeakeasyBase {
    xMarketId?: string;
}
export declare class CertificateValidateRequest extends SpeakeasyBase {
    headers: CertificateValidateHeaders;
    request: any;
}
export declare class CertificateValidateResponse extends SpeakeasyBase {
    contentType: string;
    error?: any;
    statusCode: number;
}
