import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class BatchesSortByEnum(str, Enum):
    SHIP_DATE = "ship_date"
    PROCESSED_AT = "processed_at"

