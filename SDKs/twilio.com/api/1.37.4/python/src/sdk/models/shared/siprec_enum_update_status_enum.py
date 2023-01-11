import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class SiprecEnumUpdateStatusEnum(str, Enum):
    STOPPED = "stopped"

