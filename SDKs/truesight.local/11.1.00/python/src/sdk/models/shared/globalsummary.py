import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class GlobalSummary:
    co2_emission: Optional[float] = dataclasses.field(default=None)
    co2_emission_unit: Optional[str] = dataclasses.field(default=None)
    editable: Optional[bool] = dataclasses.field(default=None)
    energy_cost: Optional[float] = dataclasses.field(default=None)
    energy_cost_unit: Optional[str] = dataclasses.field(default=None)
    group_name_filter: Optional[str] = dataclasses.field(default=None)
    heating_margin: Optional[float] = dataclasses.field(default=None)
    heating_margin_coverage: Optional[float] = dataclasses.field(default=None)
    heating_margin_device_name: Optional[str] = dataclasses.field(default=None)
    heating_margin_device_url: Optional[str] = dataclasses.field(default=None)
    heating_margin_unit: Optional[str] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    total_power_consumption: Optional[float] = dataclasses.field(default=None)
    total_power_consumption_unit: Optional[str] = dataclasses.field(default=None)
    update_timestamp: Optional[int] = dataclasses.field(default=None)
    
