import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.
 */
export declare class SelfManagedCertificate extends SpeakeasyBase {
    /**
     * Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any.
     */
    pemCertificate?: string;
    /**
     * Input only. The PEM-encoded private key of the leaf certificate.
     */
    pemPrivateKey?: string;
}
