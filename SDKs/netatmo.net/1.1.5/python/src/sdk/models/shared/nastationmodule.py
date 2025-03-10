"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import nadashboarddata as shared_nadashboarddata
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class NAStationModule:
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('_id'), 'exclude': lambda f: f is None }})  
    battery_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('battery_percent'), 'exclude': lambda f: f is None }})
    r"""It contains the current battery level in percentage."""  
    battery_vp: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('battery_vp'), 'exclude': lambda f: f is None }})
    r"""It contains the current battery status. The threshold depends on the kind of module, below is the list of the different threshold to take into account according the module type.
    \"Indoor module Battery range: 6000 ... 4200\" |
    INDOOR_BATTERY_LEVEL_FULL = 5640
    INDOOR_BATTERY_LEVEL_HIGH = 5280
    INDOOR_BATTERY_LEVEL_MEDIUM = 4920
    INDOOR_BATTERY_LEVEL_LOW = 4560
    \"Below 4560: very low\" |
        
    \"Raingauge and outdoor module Battery range: 6000 ... 3600\" |
    BATTERY_LEVEL_FULL = 5500
    BATTERY_LEVEL_HIGH = 5000
    BATTERY_LEVEL_MEDIUM = 4500
    BATTERY_LEVEL_LOW = 4000
    \"Below 4000: very low\" |
        
    \"Thermostat Battery range: 4500 ... 3000\" |
    THERMOSTAT_BATTERY_LEVEL_FULL = 4100
    THERMOSTAT_BATTERY_LEVEL_HIGH = 3600
    THERMOSTAT_BATTERY_LEVEL_MEDIUM = 3300
    THERMOSTAT_BATTERY_LEVEL_LOW = 3000
    \"Below 3000: very low\" 
    """  
    dashboard_data: Optional[shared_nadashboarddata.NADashboardData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dashboard_data'), 'exclude': lambda f: f is None }})  
    data_type: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('data_type'), 'exclude': lambda f: f is None }})  
    firmware: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('firmware'), 'exclude': lambda f: f is None }})  
    last_message: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_message'), 'exclude': lambda f: f is None }})  
    last_seen: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_seen'), 'exclude': lambda f: f is None }})  
    last_setup: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('last_setup'), 'exclude': lambda f: f is None }})  
    module_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('module_name'), 'exclude': lambda f: f is None }})  
    reachable: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('reachable'), 'exclude': lambda f: f is None }})
    r"""true when the station was seen by the Netatmo cloud within the last 4 hours"""  
    rf_status: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rf_status'), 'exclude': lambda f: f is None }})
    r"""\\"It contains the current radio status. The different thresholds to take into account are :\\" |
    RADIO_THRESHOLD_SIGNAL_LOW = 90 
    RADIO_THRESHOLD_SIGNAL_MEDIUM = 80
    RADIO_THRESHOLD_SIGNAL_HIGH = 70
    RADIO_THRESHOLD_SIGNAL_FULL = 60
    """  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Included in every device or module. It defines the type of the device/module. Its values are among :
    NAMain : for the base station
    NAModule1 : for the outdoor module
    NAModule4 : for the additionnal indoor module
    NAModule3 : for the rain gauge module
    NAPlug : for the thermostat relay/plug
    NATherm1 : for the thermostat module
    """  
    