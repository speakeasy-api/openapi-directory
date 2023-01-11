import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportDefinitionReportDefinitionReportQueryGroup:
    r"""ReportDefinitionReportDefinitionReportQueryGroup
    The querys' groups
    """
    
    group: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Group') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportDefinitionReportDefinitionReportQueryVariable:
    r"""ReportDefinitionReportDefinitionReportQueryVariable
    The querys' variables
    """
    
    variable: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variable') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportDefinitionReportDefinitionReportQuery:
    r"""ReportDefinitionReportDefinitionReportQuery
    The report definitions' report query
    """
    
    exclude_null_or_empty_elements: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeNullOrEmptyElements') }})
    groups: Optional[ReportDefinitionReportDefinitionReportQueryGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    root_node_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootNodeName') }})
    suppress_metric_attributes: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuppressMetricAttributes') }})
    variables: Optional[ReportDefinitionReportDefinitionReportQueryVariable] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Variables') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportDefinitionReportDefinition:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Active') }})
    readonly: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Readonly') }})
    report_query: Optional[ReportDefinitionReportDefinitionReportQuery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportQuery') }})
    supported_transforms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportedTransforms') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    

@dataclass_json
@dataclasses.dataclass
class ReportDefinition:
    report_definition: Optional[ReportDefinitionReportDefinition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReportDefinition') }})
    
