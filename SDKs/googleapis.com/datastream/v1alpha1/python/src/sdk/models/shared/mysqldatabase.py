"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import mysqltable as shared_mysqltable
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MysqlDatabase:
    r"""MySQL database."""
    
    database_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('databaseName'), 'exclude': lambda f: f is None }})
    r"""Database name."""  
    mysql_tables: Optional[list[shared_mysqltable.MysqlTable]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('mysqlTables'), 'exclude': lambda f: f is None }})
    r"""Tables in the database."""  
    