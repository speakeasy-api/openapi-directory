import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import querylist as shared_querylist


@dataclass_json
@dataclasses.dataclass
class HiveJob:
    r"""HiveJob
    A Dataproc job for running Apache Hive (https://hive.apache.org/) queries on YARN.
    """
    
    continue_on_failure: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueOnFailure') }})
    jar_file_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jarFileUris') }})
    properties: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    query_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryFileUri') }})
    query_list: Optional[shared_querylist.QueryList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryList') }})
    script_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scriptVariables') }})
    
