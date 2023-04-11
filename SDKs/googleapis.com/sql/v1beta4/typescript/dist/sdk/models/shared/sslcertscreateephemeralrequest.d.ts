import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SslCerts create ephemeral certificate request.
 */
export declare class SslCertsCreateEphemeralRequest extends SpeakeasyBase {
    /**
     * Access token to include in the signed certificate.
     */
    accessToken?: string;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    publicKey?: string;
}
