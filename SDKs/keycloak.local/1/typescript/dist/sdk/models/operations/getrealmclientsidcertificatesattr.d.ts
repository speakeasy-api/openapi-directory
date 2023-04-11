import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRealmClientsIdCertificatesAttrRequest extends SpeakeasyBase {
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
export declare class GetRealmClientsIdCertificatesAttrResponse extends SpeakeasyBase {
    /**
     * success
     */
    certificateRepresentation?: shared.CertificateRepresentation;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
