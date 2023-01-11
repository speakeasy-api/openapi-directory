import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lake as shared_lake


@dataclass_json
@dataclasses.dataclass
class DataplexConfig:
    r"""DataplexConfig
    Specifies how metastore metadata should be integrated with the Dataplex service.
    """
    
    lake_resources: Optional[dict[str, shared_lake.Lake]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lakeResources') }})
    
