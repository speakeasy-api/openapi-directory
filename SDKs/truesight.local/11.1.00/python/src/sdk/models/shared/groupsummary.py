import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import devicesummary as shared_devicesummary


@dataclasses.dataclass
class GroupSummary:
    ambient_temperature: Optional[float] = dataclasses.field(default=None)
    ambient_temperature_unit: Optional[str] = dataclasses.field(default=None)
    co2_emission: Optional[float] = dataclasses.field(default=None)
    co2_emission_unit: Optional[str] = dataclasses.field(default=None)
    cost_unit: Optional[str] = dataclasses.field(default=None)
    device_summaries: Optional[list[shared_devicesummary.DeviceSummary]] = dataclasses.field(default=None)
    editable: Optional[bool] = dataclasses.field(default=None)
    emitted_co2_unit: Optional[str] = dataclasses.field(default=None)
    energy_consumption_unit: Optional[str] = dataclasses.field(default=None)
    energy_cost: Optional[float] = dataclasses.field(default=None)
    energy_cost_unit: Optional[str] = dataclasses.field(default=None)
    heating_margin: Optional[float] = dataclasses.field(default=None)
    heating_margin_coverage: Optional[float] = dataclasses.field(default=None)
    heating_margin_device_name: Optional[str] = dataclasses.field(default=None)
    heating_margin_device_url: Optional[str] = dataclasses.field(default=None)
    heating_margin_unit: Optional[str] = dataclasses.field(default=None)
    history_parent_id_key: Optional[str] = dataclasses.field(default=None)
    id: Optional[str] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    number_of_devices: Optional[int] = dataclasses.field(default=None)
    one_day_confidence: Optional[float] = dataclasses.field(default=None)
    one_day_cost: Optional[float] = dataclasses.field(default=None)
    one_day_emitted_co2: Optional[float] = dataclasses.field(default=None)
    one_day_energy_consumption: Optional[float] = dataclasses.field(default=None)
    one_month_confidence: Optional[float] = dataclasses.field(default=None)
    one_month_cost: Optional[float] = dataclasses.field(default=None)
    one_month_emitted_co2: Optional[float] = dataclasses.field(default=None)
    one_month_energy_consumption: Optional[float] = dataclasses.field(default=None)
    one_year_confidence: Optional[float] = dataclasses.field(default=None)
    one_year_cost: Optional[float] = dataclasses.field(default=None)
    one_year_emitted_co2: Optional[float] = dataclasses.field(default=None)
    one_year_energy_consumption: Optional[float] = dataclasses.field(default=None)
    server_id: Optional[int] = dataclasses.field(default=None)
    total_power_consumption: Optional[float] = dataclasses.field(default=None)
    total_power_consumption_unit: Optional[str] = dataclasses.field(default=None)
    update_timestamp: Optional[int] = dataclasses.field(default=None)
    url: Optional[str] = dataclasses.field(default=None)
    
