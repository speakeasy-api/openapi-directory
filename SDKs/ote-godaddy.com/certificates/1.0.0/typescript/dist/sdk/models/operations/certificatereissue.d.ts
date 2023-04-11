import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CertificateReissueRequest extends SpeakeasyBase {
    /**
     * The reissue request info
     */
    certificateReissue: shared.CertificateReissue;
    /**
     * Certificate id to reissue
     */
    certificateId: string;
}
export declare class CertificateReissueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
