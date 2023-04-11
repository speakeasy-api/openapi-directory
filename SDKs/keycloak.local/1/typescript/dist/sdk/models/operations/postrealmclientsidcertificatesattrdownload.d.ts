import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdCertificatesAttrDownloadRequest extends SpeakeasyBase {
    /**
     * Keystore configuration as JSON
     */
    keyStoreConfig: shared.KeyStoreConfig;
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
export declare class PostRealmClientsIdCertificatesAttrDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    postRealmClientsIdCertificatesAttrDownload2XXApplicationOctetStreamByteString?: string;
}
