import dataclasses
from enum import Enum

class CarrierNameWithSettingsEnum(str, Enum):
    DHL_EXPRESS = "dhl_express"
    FEDEX = "fedex"
    NEWGISTICS = "newgistics"
    UPS = "ups"

