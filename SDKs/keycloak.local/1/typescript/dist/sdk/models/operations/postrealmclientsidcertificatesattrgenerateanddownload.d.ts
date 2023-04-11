import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest extends SpeakeasyBase {
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
export declare class PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success
     */
    postRealmClientsIdCertificatesAttrGenerateAndDownload2XXApplicationOctetStreamByteString?: string;
}
