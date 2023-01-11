import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ExportContextBakExportOptions:
    r"""ExportContextBakExportOptions
    Options for exporting BAK files (SQL Server-only)
    """
    
    stripe_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stripeCount') }})
    striped: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('striped') }})
    

@dataclass_json
@dataclasses.dataclass
class ExportContextCsvExportOptions:
    r"""ExportContextCsvExportOptions
    Options for exporting data as CSV. `MySQL` and `PostgreSQL` instances only.
    """
    
    escape_character: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escapeCharacter') }})
    fields_terminated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsTerminatedBy') }})
    lines_terminated_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linesTerminatedBy') }})
    quote_character: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteCharacter') }})
    select_query: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectQuery') }})
    
class ExportContextFileTypeEnum(str, Enum):
    SQL_FILE_TYPE_UNSPECIFIED = "SQL_FILE_TYPE_UNSPECIFIED"
    SQL = "SQL"
    CSV = "CSV"
    BAK = "BAK"


@dataclass_json
@dataclasses.dataclass
class ExportContextSQLExportOptionsMysqlExportOptions:
    r"""ExportContextSQLExportOptionsMysqlExportOptions
    Options for exporting from MySQL.
    """
    
    master_data: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterData') }})
    

@dataclass_json
@dataclasses.dataclass
class ExportContextSQLExportOptions:
    r"""ExportContextSQLExportOptions
    Options for exporting data as SQL statements.
    """
    
    mysql_export_options: Optional[ExportContextSQLExportOptionsMysqlExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mysqlExportOptions') }})
    schema_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaOnly') }})
    tables: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tables') }})
    

@dataclass_json
@dataclasses.dataclass
class ExportContext:
    r"""ExportContext
    Database instance export context.
    """
    
    bak_export_options: Optional[ExportContextBakExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bakExportOptions') }})
    csv_export_options: Optional[ExportContextCsvExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvExportOptions') }})
    databases: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databases') }})
    file_type: Optional[ExportContextFileTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    offload: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offload') }})
    sql_export_options: Optional[ExportContextSQLExportOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlExportOptions') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
