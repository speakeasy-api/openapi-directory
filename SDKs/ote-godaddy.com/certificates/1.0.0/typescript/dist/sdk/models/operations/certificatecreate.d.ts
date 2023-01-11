import { SpeakeasyBase } from "../../../internal/utils";
export declare class CertificateCreateHeaders extends SpeakeasyBase {
    xMarketId?: string;
}
export declare class CertificateCreateRequest extends SpeakeasyBase {
    headers: CertificateCreateHeaders;
    request: any;
}
export declare class CertificateCreateResponse extends SpeakeasyBase {
    certificateIdentifier?: any;
    contentType: string;
    error?: any;
    statusCode: number;
}
