import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Features:
    r"""Features
    All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
    """
    
    extract_document_sentiment: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractDocumentSentiment') }})
    extract_entities: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractEntities') }})
    extract_syntax: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extractSyntax') }})
    
