package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SignierteBelegdaten
 * The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
**/
public class SignierteBelegdaten {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Beleg-Datum-Uhrzeit")
    public String belegDatumUhrzeit;
    public SignierteBelegdaten withBelegDatumUhrzeit(String belegDatumUhrzeit) {
        this.belegDatumUhrzeit = belegDatumUhrzeit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Belegnummer")
    public String belegnummer;
    public SignierteBelegdaten withBelegnummer(String belegnummer) {
        this.belegnummer = belegnummer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Brutto")
    public Long betragBrutto;
    public SignierteBelegdaten withBetragBrutto(Long betragBrutto) {
        this.betragBrutto = betragBrutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Netto")
    public Long betragNetto;
    public SignierteBelegdaten withBetragNetto(Long betragNetto) {
        this.betragNetto = betragNetto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Besonders-Brutto")
    public Long betragSatzBesondersBrutto;
    public SignierteBelegdaten withBetragSatzBesondersBrutto(Long betragSatzBesondersBrutto) {
        this.betragSatzBesondersBrutto = betragSatzBesondersBrutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Besonders-Netto")
    public Long betragSatzBesondersNetto;
    public SignierteBelegdaten withBetragSatzBesondersNetto(Long betragSatzBesondersNetto) {
        this.betragSatzBesondersNetto = betragSatzBesondersNetto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Ermaessigt-1-Brutto")
    public Long betragSatzErmaessigt1Brutto;
    public SignierteBelegdaten withBetragSatzErmaessigt1Brutto(Long betragSatzErmaessigt1Brutto) {
        this.betragSatzErmaessigt1Brutto = betragSatzErmaessigt1Brutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Ermaessigt-1-Netto")
    public Long betragSatzErmaessigt1Netto;
    public SignierteBelegdaten withBetragSatzErmaessigt1Netto(Long betragSatzErmaessigt1Netto) {
        this.betragSatzErmaessigt1Netto = betragSatzErmaessigt1Netto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Ermaessigt-2-Brutto")
    public Long betragSatzErmaessigt2Brutto;
    public SignierteBelegdaten withBetragSatzErmaessigt2Brutto(Long betragSatzErmaessigt2Brutto) {
        this.betragSatzErmaessigt2Brutto = betragSatzErmaessigt2Brutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Ermaessigt-2-Netto")
    public Long betragSatzErmaessigt2Netto;
    public SignierteBelegdaten withBetragSatzErmaessigt2Netto(Long betragSatzErmaessigt2Netto) {
        this.betragSatzErmaessigt2Netto = betragSatzErmaessigt2Netto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Normal-Brutto")
    public Long betragSatzNormalBrutto;
    public SignierteBelegdaten withBetragSatzNormalBrutto(Long betragSatzNormalBrutto) {
        this.betragSatzNormalBrutto = betragSatzNormalBrutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Normal-Netto")
    public Long betragSatzNormalNetto;
    public SignierteBelegdaten withBetragSatzNormalNetto(Long betragSatzNormalNetto) {
        this.betragSatzNormalNetto = betragSatzNormalNetto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Null-Brutto")
    public Long betragSatzNullBrutto;
    public SignierteBelegdaten withBetragSatzNullBrutto(Long betragSatzNullBrutto) {
        this.betragSatzNullBrutto = betragSatzNullBrutto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Betrag-Satz-Null-Netto")
    public Long betragSatzNullNetto;
    public SignierteBelegdaten withBetragSatzNullNetto(Long betragSatzNullNetto) {
        this.betragSatzNullNetto = betragSatzNullNetto;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Belegkreis")
    public String externerBelegBelegkreis;
    public SignierteBelegdaten withExternerBelegBelegkreis(String externerBelegBelegkreis) {
        this.externerBelegBelegkreis = externerBelegBelegkreis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Bezeichnung")
    public String externerBelegBezeichnung;
    public SignierteBelegdaten withExternerBelegBezeichnung(String externerBelegBezeichnung) {
        this.externerBelegBezeichnung = externerBelegBezeichnung;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Externer-Beleg-Referenz")
    public String externerBelegReferenz;
    public SignierteBelegdaten withExternerBelegReferenz(String externerBelegReferenz) {
        this.externerBelegReferenz = externerBelegReferenz;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Kassen-ID")
    public String kassenID;
    public SignierteBelegdaten withKassenId(String kassenID) {
        this.kassenID = kassenID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Kunde")
    public String kunde;
    public SignierteBelegdaten withKunde(String kunde) {
        this.kunde = kunde;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notizen")
    public String[] notizen;
    public SignierteBelegdaten withNotizen(String[] notizen) {
        this.notizen = notizen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Posten")
    public Posten[] posten;
    public SignierteBelegdaten withPosten(Posten[] posten) {
        this.posten = posten;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rabatte")
    public Rabatt[] rabatte;
    public SignierteBelegdaten withRabatte(Rabatt[] rabatte) {
        this.rabatte = rabatte;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Storno")
    public Boolean storno;
    public SignierteBelegdaten withStorno(Boolean storno) {
        this.storno = storno;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Storno-Beleg-UUID")
    public String stornoBelegUUID;
    public SignierteBelegdaten withStornoBelegUuid(String stornoBelegUUID) {
        this.stornoBelegUUID = stornoBelegUUID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Storno-Text")
    public String stornoText;
    public SignierteBelegdaten withStornoText(String stornoText) {
        this.stornoText = stornoText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Training")
    public Boolean training;
    public SignierteBelegdaten withTraining(Boolean training) {
        this.training = training;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Adresse1")
    public String unternehmenAdresse1;
    public SignierteBelegdaten withUnternehmenAdresse1(String unternehmenAdresse1) {
        this.unternehmenAdresse1 = unternehmenAdresse1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Adresse2")
    public String unternehmenAdresse2;
    public SignierteBelegdaten withUnternehmenAdresse2(String unternehmenAdresse2) {
        this.unternehmenAdresse2 = unternehmenAdresse2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Fusszeile")
    public String unternehmenFusszeile;
    public SignierteBelegdaten withUnternehmenFusszeile(String unternehmenFusszeile) {
        this.unternehmenFusszeile = unternehmenFusszeile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-ID")
    public String unternehmenID;
    public SignierteBelegdaten withUnternehmenId(String unternehmenID) {
        this.unternehmenID = unternehmenID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-ID-Typ")
    public SignierteBelegdatenUnternehmenIdTypEnum unternehmenIDTyp;
    public SignierteBelegdaten withUnternehmenIdTyp(SignierteBelegdatenUnternehmenIdTypEnum unternehmenIDTyp) {
        this.unternehmenIDTyp = unternehmenIDTyp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Kopfzeile")
    public String unternehmenKopfzeile;
    public SignierteBelegdaten withUnternehmenKopfzeile(String unternehmenKopfzeile) {
        this.unternehmenKopfzeile = unternehmenKopfzeile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Name")
    public String unternehmenName;
    public SignierteBelegdaten withUnternehmenName(String unternehmenName) {
        this.unternehmenName = unternehmenName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-Ort")
    public String unternehmenOrt;
    public SignierteBelegdaten withUnternehmenOrt(String unternehmenOrt) {
        this.unternehmenOrt = unternehmenOrt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Unternehmen-PLZ")
    public String unternehmenPLZ;
    public SignierteBelegdaten withUnternehmenPlz(String unternehmenPLZ) {
        this.unternehmenPLZ = unternehmenPLZ;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zahlungen")
    public Zahlung[] zahlungen;
    public SignierteBelegdaten withZahlungen(Zahlung[] zahlungen) {
        this.zahlungen = zahlungen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zertifikat-Seriennummer")
    public String zertifikatSeriennummer;
    public SignierteBelegdaten withZertifikatSeriennummer(String zertifikatSeriennummer) {
        this.zertifikatSeriennummer = zertifikatSeriennummer;
        return this;
    }
}