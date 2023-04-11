import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Ephemeral certificate creation request.
 */
export declare class GenerateEphemeralCertRequest extends SpeakeasyBase {
    /**
     * Optional. Access token to include in the signed certificate.
     */
    accessToken?: string;
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    publicKey?: string;
    /**
     * Optional. Optional snapshot read timestamp to trade freshness for performance.
     */
    readTime?: string;
    /**
     * Optional. If set, it will contain the cert valid duration.
     */
    validDuration?: string;
}
