import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudsecuritycenterv1bigqueryexport as shared_googlecloudsecuritycenterv1bigqueryexport


@dataclass_json
@dataclasses.dataclass
class ListBigQueryExportsResponse:
    r"""ListBigQueryExportsResponse
    Response message for listing BigQuery exports.
    """
    
    big_query_exports: Optional[list[shared_googlecloudsecuritycenterv1bigqueryexport.GoogleCloudSecuritycenterV1BigQueryExport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bigQueryExports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
