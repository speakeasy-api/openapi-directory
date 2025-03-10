"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SparkSQLBatch:
    r"""A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload."""
    
    jar_file_uris: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('jarFileUris'), 'exclude': lambda f: f is None }})
    r"""Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH."""  
    query_file_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('queryFileUri'), 'exclude': lambda f: f is None }})
    r"""Required. The HCFS URI of the script that contains Spark SQL queries to execute."""  
    query_variables: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('queryVariables'), 'exclude': lambda f: f is None }})
    r"""Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name=\\"value\\";)."""  
    