import dataclasses
from enum import Enum

class CurrencyEnum(str, Enum):
    USD = "usd"
    CAD = "cad"
    AUD = "aud"
    GBP = "gbp"
    EUR = "eur"
    NZD = "nzd"

