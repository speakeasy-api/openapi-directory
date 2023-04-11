import { SpeakeasyBase } from "../../../internal/utils";
import { SignierteBelegdaten } from "./signiertebelegdaten";
export declare enum BelegBelegTypenEnum {
    Belegkreisinitialisierung = "Belegkreisinitialisierung",
    Kassenbericht = "Kassenbericht",
    Monatsabschluss = "Monatsabschluss",
    Startbeleg = "Startbeleg",
    Storno = "Storno",
    Systembeleg = "Systembeleg",
    Training = "Training"
}
/**
 * The requested `Beleg` resource.
 */
export declare class Beleg extends SpeakeasyBase {
    belegCodes?: string[];
    belegTypen?: BelegBelegTypenEnum[];
    /**
     * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
     */
    belegdaten?: SignierteBelegdaten;
    /**
     * The signed `Beleg` as a JWS signature token.
     */
    jws?: string;
    /**
     * The portion of the `JWS` token to be used for generating QR codes.
     */
    qr?: string;
    /**
     * A hyperlink that retrieves the `QR` data.
     */
    qrLink?: string;
    /**
     * The `_uuid` of the `Registrierkasse` that has issued this `Beleg`.
     */
    registrierkasseUUID?: string;
    /**
     * The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`.
     */
    signaturerstellungseinheitUUID?: string;
    /**
     * URL of the particular `Beleg` instance.
     */
    href?: string;
    /**
     * Unique ID of the particular `Beleg` instance.
     */
    uuid?: string;
}
