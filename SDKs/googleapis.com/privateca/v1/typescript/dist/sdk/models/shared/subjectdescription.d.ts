import { SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";
/**
 * These values describe fields in an issued X.509 certificate such as the distinguished name, subject alternative names, serial number, and lifetime.
 */
export declare class SubjectDescription extends SpeakeasyBase {
    /**
     * The serial number encoded in lowercase hexadecimal.
     */
    hexSerialNumber?: string;
    /**
     * For convenience, the actual lifetime of an issued certificate.
     */
    lifetime?: string;
    /**
     * The time after which the certificate is expired. Per RFC 5280, the validity period for a certificate is the period of time from not_before_time through not_after_time, inclusive. Corresponds to 'not_before_time' + 'lifetime' - 1 second.
     */
    notAfterTime?: string;
    /**
     * The time at which the certificate becomes valid.
     */
    notBeforeTime?: string;
    /**
     * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
     */
    subject?: Subject;
    /**
     * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
     */
    subjectAltName?: SubjectAltNames;
}
