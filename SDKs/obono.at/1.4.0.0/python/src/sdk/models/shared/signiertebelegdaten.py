import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import posten as shared_posten
from ..shared import rabatt as shared_rabatt
from ..shared import zahlung as shared_zahlung

class SignierteBelegdatenUnternehmenIDTypEnum(str, Enum):
    STEUERNUMMER = "steuernummer"
    UID = "uid"
    GLN = "gln"


@dataclass_json
@dataclasses.dataclass
class SignierteBelegdaten:
    r"""SignierteBelegdaten
    The complete `Beleg` that has been signed by the \"Signaturerstellungseinheit\" and stored in the \"Datenerfassungsprotokoll\".
    """
    
    beleg_datum_uhrzeit: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Beleg-Datum-Uhrzeit') }})
    belegnummer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Belegnummer') }})
    betrag_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Brutto') }})
    betrag_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Netto') }})
    betrag_satz_besonders_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Besonders-Brutto') }})
    betrag_satz_besonders_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Besonders-Netto') }})
    betrag_satz_ermaessigt_1_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Ermaessigt-1-Brutto') }})
    betrag_satz_ermaessigt_1_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Ermaessigt-1-Netto') }})
    betrag_satz_ermaessigt_2_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Ermaessigt-2-Brutto') }})
    betrag_satz_ermaessigt_2_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Ermaessigt-2-Netto') }})
    betrag_satz_normal_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Normal-Brutto') }})
    betrag_satz_normal_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Normal-Netto') }})
    betrag_satz_null_brutto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Null-Brutto') }})
    betrag_satz_null_netto: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Betrag-Satz-Null-Netto') }})
    externer_beleg_belegkreis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Belegkreis') }})
    externer_beleg_bezeichnung: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Bezeichnung') }})
    externer_beleg_referenz: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Externer-Beleg-Referenz') }})
    kassen_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Kassen-ID') }})
    kunde: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Kunde') }})
    notizen: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notizen') }})
    posten: Optional[list[shared_posten.Posten]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Posten') }})
    rabatte: Optional[list[shared_rabatt.Rabatt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rabatte') }})
    storno: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno') }})
    storno_beleg_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno-Beleg-UUID') }})
    storno_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Storno-Text') }})
    training: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Training') }})
    unternehmen_adresse1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Adresse1') }})
    unternehmen_adresse2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Adresse2') }})
    unternehmen_fusszeile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Fusszeile') }})
    unternehmen_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-ID') }})
    unternehmen_id_typ: Optional[SignierteBelegdatenUnternehmenIDTypEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-ID-Typ') }})
    unternehmen_kopfzeile: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Kopfzeile') }})
    unternehmen_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Name') }})
    unternehmen_ort: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-Ort') }})
    unternehmen_plz: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unternehmen-PLZ') }})
    zahlungen: Optional[list[shared_zahlung.Zahlung]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zahlungen') }})
    zertifikat_seriennummer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Zertifikat-Seriennummer') }})
    
