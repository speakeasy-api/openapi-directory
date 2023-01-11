import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class QueryQueryGroup:
    r"""QueryQueryGroup
    The querys' groups
    """
    
    group: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryQueryVariable:
    r"""QueryQueryVariable
    The querys' variables
    """
    
    variable: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variable') }})
    

@dataclass_json
@dataclasses.dataclass
class QueryQuery:
    exclude_null_or_empty_elements: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeNullOrEmptyElements') }})
    groups: Optional[QueryQueryGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    root_node_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootNodeName') }})
    suppress_metric_attributes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressMetricAttributes') }})
    variables: Optional[QueryQueryVariable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    

@dataclass_json
@dataclasses.dataclass
class Query:
    query: Optional[QueryQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Query') }})
    
