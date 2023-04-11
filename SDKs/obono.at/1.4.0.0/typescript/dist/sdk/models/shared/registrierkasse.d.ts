import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a particular `Registrierkasse`.
 */
export declare class Registrierkasse extends SpeakeasyBase {
    /**
     * The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler".
     */
    benutzerschluessel?: string;
    /**
     * The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`.
     */
    kassenID?: string;
    /**
     * The `_uuid` of the paired "Signaturerstellungseinheit".
     */
    signaturerstellungseinheitUUID?: string;
    /**
     * URL of the particular `Registrierkasse` instance.
     */
    href?: string;
    /**
     * Unique ID of the particular `Registrierkasse` instance.
     */
    uuid?: string;
}
