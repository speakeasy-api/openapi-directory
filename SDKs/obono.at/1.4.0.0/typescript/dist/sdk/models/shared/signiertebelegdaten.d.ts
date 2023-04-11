import { SpeakeasyBase } from "../../../internal/utils";
import { Posten } from "./posten";
import { Rabatt } from "./rabatt";
import { Zahlung } from "./zahlung";
export declare enum SignierteBelegdatenUnternehmenIDTypEnum {
    Steuernummer = "steuernummer",
    Uid = "uid",
    Gln = "gln"
}
/**
 * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
 */
export declare class SignierteBelegdaten extends SpeakeasyBase {
    belegDatumUhrzeit?: string;
    belegnummer?: string;
    betragBrutto?: number;
    betragNetto?: number;
    /**
     * The total amount in cents
     */
    betragSatzBesondersBrutto?: number;
    /**
     * The total amount in cents
     */
    betragSatzBesondersNetto?: number;
    /**
     * The total amount in cents
     */
    betragSatzErmaessigt1Brutto?: number;
    /**
     * The total amount in cents
     */
    betragSatzErmaessigt1Netto?: number;
    /**
     * The total amount in cents
     */
    betragSatzErmaessigt2Brutto?: number;
    /**
     * The total amount in cents
     */
    betragSatzErmaessigt2Netto?: number;
    /**
     * The total amount in cents
     */
    betragSatzNormalBrutto?: number;
    /**
     * The total amount in cents
     */
    betragSatzNormalNetto?: number;
    /**
     * The total amount in cents
     */
    betragSatzNullBrutto?: number;
    /**
     * The total amount in cents
     */
    betragSatzNullNetto?: number;
    externerBelegBelegkreis?: string;
    externerBelegBezeichnung?: string;
    externerBelegReferenz?: string;
    kassenID?: string;
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
    unternehmenIDTyp?: SignierteBelegdatenUnternehmenIDTypEnum;
    unternehmenKopfzeile?: string;
    unternehmenName?: string;
    unternehmenOrt?: string;
    unternehmenPLZ?: string;
    zahlungen?: Zahlung[];
    zertifikatSeriennummer?: string;
}
