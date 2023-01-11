import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bigqueryqueryspec as shared_bigqueryqueryspec
from ..shared import bigquerytablespec as shared_bigquerytablespec


@dataclass_json
@dataclasses.dataclass
class BigQueryDataSourceSpec:
    r"""BigQueryDataSourceSpec
    The specification of a BigQuery data source that's connected to a sheet.
    """
    
    project_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    query_spec: Optional[shared_bigqueryqueryspec.BigQueryQuerySpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('querySpec') }})
    table_spec: Optional[shared_bigquerytablespec.BigQueryTableSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableSpec') }})
    
