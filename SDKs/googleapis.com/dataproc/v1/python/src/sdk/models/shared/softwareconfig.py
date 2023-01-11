import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SoftwareConfigOptionalComponentsEnum(str, Enum):
    COMPONENT_UNSPECIFIED = "COMPONENT_UNSPECIFIED"
    ANACONDA = "ANACONDA"
    DOCKER = "DOCKER"
    DRUID = "DRUID"
    FLINK = "FLINK"
    HBASE = "HBASE"
    HIVE_WEBHCAT = "HIVE_WEBHCAT"
    JUPYTER = "JUPYTER"
    PRESTO = "PRESTO"
    TRINO = "TRINO"
    RANGER = "RANGER"
    SOLR = "SOLR"
    ZEPPELIN = "ZEPPELIN"
    ZOOKEEPER = "ZOOKEEPER"


@dataclass_json
@dataclasses.dataclass
class SoftwareConfig:
    r"""SoftwareConfig
    Specifies the selection and config of software inside the cluster.
    """
    
    image_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageVersion') }})
    optional_components: Optional[list[SoftwareConfigOptionalComponentsEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optionalComponents') }})
    properties: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
