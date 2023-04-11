import { SpeakeasyBase } from "../../../internal/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";
export declare enum BelegdatenUnternehmenIDTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}
/**
 * The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
 */
export declare class Belegdaten extends SpeakeasyBase {
    externerBelegBelegkreis?: string;
    externerBelegBezeichnung?: string;
    externerBelegReferenz?: string;
    kunde?: string;
    notizen?: string[];
    posten?: Posten[];
    rabatte?: Rabatt[];
    /**
     * Storno?
     */
    storno?: boolean;
    /**
     * The `Beleg-UUID` property of the `Beleg` to be cancelled
     */
    stornoBelegUUID?: string;
    stornoText?: string;
    /**
     * Training?
     */
    training?: boolean;
    unternehmenAdresse1?: string;
    unternehmenAdresse2?: string;
    unternehmenFusszeile?: string;
    unternehmenID?: string;
    unternehmenIDTyp?: BelegdatenUnternehmenIDTypEnum;
    unternehmenKopfzeile?: string;
    unternehmenName?: string;
    unternehmenOrt?: string;
    unternehmenPLZ?: string;
    zahlungen?: Zahlung[];
}
