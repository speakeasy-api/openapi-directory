import dataclasses
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class GetDeviceEnergyUsagePathParams:
    device_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    
class GetDeviceEnergyUsageBasisEnum(str, Enum):
    MONTHLY = "MONTHLY"
    DAILY = "DAILY"
    HOURLY = "HOURLY"

class GetDeviceEnergyUsageRollPeriodEnum(str, Enum):
    ONE_DAY = "ONE_DAY"
    ONE_WEEK = "ONE_WEEK"
    ONE_MONTH = "ONE_MONTH"
    SIX_MONTHS = "SIX_MONTHS"
    ONE_YEAR = "ONE_YEAR"


@dataclasses.dataclass
class GetDeviceEnergyUsageQueryParams:
    basis: Optional[GetDeviceEnergyUsageBasisEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'basis', 'style': 'form', 'explode': True }})
    roll_period: Optional[GetDeviceEnergyUsageRollPeriodEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'rollPeriod', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeviceEnergyUsageRequest:
    path_params: GetDeviceEnergyUsagePathParams = dataclasses.field()
    query_params: GetDeviceEnergyUsageQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceEnergyUsageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
