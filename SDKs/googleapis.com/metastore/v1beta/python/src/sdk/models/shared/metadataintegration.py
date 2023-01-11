import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datacatalogconfig as shared_datacatalogconfig
from ..shared import dataplexconfig as shared_dataplexconfig


@dataclass_json
@dataclasses.dataclass
class MetadataIntegration:
    r"""MetadataIntegration
    Specifies how metastore metadata should be integrated with external services.
    """
    
    data_catalog_config: Optional[shared_datacatalogconfig.DataCatalogConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataCatalogConfig') }})
    dataplex_config: Optional[shared_dataplexconfig.DataplexConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataplexConfig') }})
    
