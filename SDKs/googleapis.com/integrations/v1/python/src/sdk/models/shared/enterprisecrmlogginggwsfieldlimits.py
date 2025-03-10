"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum(str, Enum):
    LOG_ACTION_UNSPECIFIED = 'LOG_ACTION_UNSPECIFIED'
    DONT_LOG = 'DONT_LOG'
    LOG = 'LOG'

class EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum(str, Enum):
    LOG_TYPE_UNSPECIFIED = 'LOG_TYPE_UNSPECIFIED'
    GWS = 'GWS'
    GTS = 'GTS'
    ALL = 'ALL'

class EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum(str, Enum):
    SHORTENER_TYPE_UNSPECIFIED = 'SHORTENER_TYPE_UNSPECIFIED'
    SHORTEN = 'SHORTEN'
    HASH = 'HASH'
    SHORTEN_WITH_HASH = 'SHORTEN_WITH_HASH'
    SHORTEN_EMAIL = 'SHORTEN_EMAIL'
    SHORTEN_EMAIL_WITH_HASH = 'SHORTEN_EMAIL_WITH_HASH'
    SHORTEN_DOMAIN = 'SHORTEN_DOMAIN'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class EnterpriseCrmLoggingGwsFieldLimits:
    r"""Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6"""
    
    log_action: Optional[EnterpriseCrmLoggingGwsFieldLimitsLogActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logAction'), 'exclude': lambda f: f is None }})  
    log_type: Optional[list[EnterpriseCrmLoggingGwsFieldLimitsLogTypeEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('logType'), 'exclude': lambda f: f is None }})
    r"""To which type(s) of logs the limits apply."""  
    max_array_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxArraySize'), 'exclude': lambda f: f is None }})
    r"""maximum array size. If the array exceds this size, the field (list) is truncated."""  
    max_string_length: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('maxStringLength'), 'exclude': lambda f: f is None }})
    r"""maximum string length. If the field exceeds this amount the field is shortened."""  
    shortener_type: Optional[EnterpriseCrmLoggingGwsFieldLimitsShortenerTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('shortenerType'), 'exclude': lambda f: f is None }})  
    