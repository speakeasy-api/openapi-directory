import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bigquerydatasourcespec as shared_bigquerydatasourcespec
from ..shared import datasourceparameter as shared_datasourceparameter


@dataclass_json
@dataclasses.dataclass
class DataSourceSpec:
    r"""DataSourceSpec
    This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
    """
    
    big_query: Optional[shared_bigquerydatasourcespec.BigQueryDataSourceSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQuery') }})
    parameters: Optional[list[shared_datasourceparameter.DataSourceParameter]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
