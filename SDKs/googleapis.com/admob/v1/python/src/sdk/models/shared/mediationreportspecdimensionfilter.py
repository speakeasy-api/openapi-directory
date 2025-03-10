"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import stringlist as shared_stringlist
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class MediationReportSpecDimensionFilterDimensionEnum(str, Enum):
    r"""Applies the filter criterion to the specified dimension."""
    DIMENSION_UNSPECIFIED = 'DIMENSION_UNSPECIFIED'
    DATE = 'DATE'
    MONTH = 'MONTH'
    WEEK = 'WEEK'
    AD_SOURCE = 'AD_SOURCE'
    AD_SOURCE_INSTANCE = 'AD_SOURCE_INSTANCE'
    AD_UNIT = 'AD_UNIT'
    APP = 'APP'
    MEDIATION_GROUP = 'MEDIATION_GROUP'
    COUNTRY = 'COUNTRY'
    FORMAT = 'FORMAT'
    PLATFORM = 'PLATFORM'
    MOBILE_OS_VERSION = 'MOBILE_OS_VERSION'
    GMA_SDK_VERSION = 'GMA_SDK_VERSION'
    APP_VERSION_NAME = 'APP_VERSION_NAME'
    SERVING_RESTRICTION = 'SERVING_RESTRICTION'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class MediationReportSpecDimensionFilter:
    r"""Describes which report rows to match based on their dimension values."""
    
    dimension: Optional[MediationReportSpecDimensionFilterDimensionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dimension'), 'exclude': lambda f: f is None }})
    r"""Applies the filter criterion to the specified dimension."""  
    matches_any: Optional[shared_stringlist.StringList] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('matchesAny'), 'exclude': lambda f: f is None }})
    r"""List of string values."""  
    