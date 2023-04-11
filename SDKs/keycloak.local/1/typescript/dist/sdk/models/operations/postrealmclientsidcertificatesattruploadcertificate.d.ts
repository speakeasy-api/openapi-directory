import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdCertificatesAttrUploadCertificateRequest extends SpeakeasyBase {
    attr: string;
    /**
     * id of client (not client-id)
     */
    id: string;
    /**
     * realm name (not id!)
     */
    realm: string;
}
export declare class PostRealmClientsIdCertificatesAttrUploadCertificateResponse extends SpeakeasyBase {
    /**
     * success
     */
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
