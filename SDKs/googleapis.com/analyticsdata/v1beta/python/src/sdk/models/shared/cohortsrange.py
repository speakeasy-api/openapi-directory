"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CohortsRangeGranularityEnum(str, Enum):
    r"""Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report."""
    GRANULARITY_UNSPECIFIED = 'GRANULARITY_UNSPECIFIED'
    DAILY = 'DAILY'
    WEEKLY = 'WEEKLY'
    MONTHLY = 'MONTHLY'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CohortsRange:
    r"""Configures the extended reporting date range for a cohort report. Specifies an offset duration to follow the cohorts over."""
    
    end_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('endOffset'), 'exclude': lambda f: f is None }})
    r"""Required. `endOffset` specifies the end date of the extended reporting date range for a cohort report. `endOffset` can be any positive integer but is commonly set to 5 to 10 so that reports contain data on the cohort for the next several granularity time periods. If `granularity` is `DAILY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset` days. If `granularity` is `WEEKLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 7` days. If `granularity` is `MONTHLY`, the `endDate` of the extended reporting date range is `endDate` of the cohort plus `endOffset * 30` days."""  
    granularity: Optional[CohortsRangeGranularityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('granularity'), 'exclude': lambda f: f is None }})
    r"""Required. The granularity used to interpret the `startOffset` and `endOffset` for the extended reporting date range for a cohort report."""  
    start_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('startOffset'), 'exclude': lambda f: f is None }})
    r"""`startOffset` specifies the start date of the extended reporting date range for a cohort report. `startOffset` is commonly set to 0 so that reports contain data from the acquisition of the cohort forward. If `granularity` is `DAILY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset` days. If `granularity` is `WEEKLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 7` days. If `granularity` is `MONTHLY`, the `startDate` of the extended reporting date range is `startDate` of the cohort plus `startOffset * 30` days."""  
    