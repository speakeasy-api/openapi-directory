import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BigQueryQuerySpec:
    r"""BigQueryQuerySpec
    Specifies a custom BigQuery query.
    """
    
    raw_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawQuery') }})
    
