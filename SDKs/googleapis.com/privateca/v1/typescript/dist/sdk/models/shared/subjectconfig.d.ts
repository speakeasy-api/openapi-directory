import { SpeakeasyBase } from "../../../internal/utils";
import { Subject } from "./subject";
import { SubjectAltNames } from "./subjectaltnames";
/**
 * These values are used to create the distinguished name and subject alternative name fields in an X.509 certificate.
 */
export declare class SubjectConfig extends SpeakeasyBase {
    /**
     * Subject describes parts of a distinguished name that, in turn, describes the subject of the certificate.
     */
    subject?: Subject;
    /**
     * SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
     */
    subjectAltName?: SubjectAltNames;
}
