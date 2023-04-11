import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateDownloadRequest extends SpeakeasyBase {
    /**
     * Certificate id to download
     */
    certificateId: string;
}
export declare class CertificateDownloadResponse extends SpeakeasyBase {
    /**
     * Certificate retrieved
     */
    certificateBundle?: shared.CertificateBundle;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
