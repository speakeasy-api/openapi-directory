import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import documenttranslation as shared_documenttranslation
from ..shared import translatetextglossaryconfig as shared_translatetextglossaryconfig


@dataclass_json
@dataclasses.dataclass
class TranslateDocumentResponse:
    r"""TranslateDocumentResponse
    A translated document response message.
    """
    
    document_translation: Optional[shared_documenttranslation.DocumentTranslation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentTranslation') }})
    glossary_config: Optional[shared_translatetextglossaryconfig.TranslateTextGlossaryConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryConfig') }})
    glossary_document_translation: Optional[shared_documenttranslation.DocumentTranslation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryDocumentTranslation') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
