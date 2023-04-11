import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A group of fingerprints for the x509 certificate.
 */
export declare class CertificateFingerprint extends SpeakeasyBase {
    /**
     * The SHA 256 hash, encoded in hexadecimal, of the DER x509 certificate.
     */
    sha256Hash?: string;
}
