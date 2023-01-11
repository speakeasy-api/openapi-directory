import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasource as shared_datasource
from ..shared import developermetadata as shared_developermetadata
from ..shared import namedrange as shared_namedrange
from ..shared import spreadsheetproperties as shared_spreadsheetproperties
from ..shared import sheet as shared_sheet
from ..shared import datasourcerefreshschedule as shared_datasourcerefreshschedule


@dataclass_json
@dataclasses.dataclass
class SpreadsheetInput:
    r"""SpreadsheetInput
    Resource that represents a spreadsheet.
    """
    
    data_sources: Optional[list[shared_datasource.DataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    developer_metadata: Optional[list[shared_developermetadata.DeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    named_ranges: Optional[list[shared_namedrange.NamedRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    properties: Optional[shared_spreadsheetproperties.SpreadsheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sheets: Optional[list[shared_sheet.Sheet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheets') }})
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    spreadsheet_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetUrl') }})
    

@dataclass_json
@dataclasses.dataclass
class Spreadsheet:
    r"""Spreadsheet
    Resource that represents a spreadsheet.
    """
    
    data_source_schedules: Optional[list[shared_datasourcerefreshschedule.DataSourceRefreshSchedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceSchedules') }})
    data_sources: Optional[list[shared_datasource.DataSource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSources') }})
    developer_metadata: Optional[list[shared_developermetadata.DeveloperMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('developerMetadata') }})
    named_ranges: Optional[list[shared_namedrange.NamedRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRanges') }})
    properties: Optional[shared_spreadsheetproperties.SpreadsheetProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    sheets: Optional[list[shared_sheet.Sheet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheets') }})
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    spreadsheet_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetUrl') }})
    
