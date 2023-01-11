import dataclasses
from enum import Enum

class CountryCodeEnum(str, Enum):
    US = "US"
    GB = "GB"
    ES = "ES"
    NL = "NL"
    FR = "FR"
    IE = "IE"
    CA = "CA"

