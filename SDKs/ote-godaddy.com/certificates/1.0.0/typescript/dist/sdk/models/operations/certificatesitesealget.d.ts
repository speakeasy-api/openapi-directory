import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * This value represents the visual theme of the seal. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.
 */
export declare enum CertificateSitesealGetThemeEnum {
    Dark = "DARK",
    Light = "LIGHT"
}
export declare class CertificateSitesealGetRequest extends SpeakeasyBase {
    /**
     * Certificate id
     */
    certificateId: string;
    /**
     * Determine locale for text displayed in seal image and verification page. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.
     */
    locale?: string;
    /**
     * This value represents the visual theme of the seal. If seal doesn't exist, default values are used if params not present. If seal does exist, default values will not be used to update unless params present.
     */
    theme?: CertificateSitesealGetThemeEnum;
}
export declare class CertificateSitesealGetResponse extends SpeakeasyBase {
    /**
     * Site seal retrieved
     */
    certificateSiteSeal?: shared.CertificateSiteSeal;
    contentType: string;
    /**
     * Request was malformed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
