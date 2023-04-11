import { SpeakeasyBase } from "../../../internal/utils";
import { PkixPublicKey } from "./pkixpublickey";
/**
 * An attestor public key that will be used to verify attestations signed by this attestor.
 */
export declare class AttestorPublicKey extends SpeakeasyBase {
    /**
     * ASCII-armored representation of a PGP public key, as the entire output by the command `gpg --export --armor foo@example.com` (either LF or CRLF line endings). When using this field, `id` should be left blank. The BinAuthz API handlers will calculate the ID and fill it in automatically. BinAuthz computes this ID as the OpenPGP RFC4880 V4 fingerprint, represented as upper-case hex. If `id` is provided by the caller, it will be overwritten by the API-calculated ID.
     */
    asciiArmoredPgpPublicKey?: string;
    /**
     * Optional. A descriptive comment. This field may be updated.
     */
    comment?: string;
    /**
     * The ID of this public key. Signatures verified by BinAuthz must include the ID of the public key that can be used to verify them, and that ID must match the contents of this field exactly. Additional restrictions on this field can be imposed based on which public key type is encapsulated. See the documentation on `public_key` cases below for details.
     */
    id?: string;
    /**
     * A public key in the PkixPublicKey format (see https://tools.ietf.org/html/rfc5280#section-4.1.2.7 for details). Public keys of this type are typically textually encoded using the PEM format.
     */
    pkixPublicKey?: PkixPublicKey;
}
