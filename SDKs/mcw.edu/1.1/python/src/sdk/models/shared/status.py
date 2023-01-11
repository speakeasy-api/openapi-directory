import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class Status:
    cryopreserved_embryo: Optional[bool] = dataclasses.field(default=None)
    cryopreserved_sperm: Optional[bool] = dataclasses.field(default=None)
    cryorecovery: Optional[bool] = dataclasses.field(default=None)
    key: Optional[int] = dataclasses.field(default=None)
    live_animals: Optional[bool] = dataclasses.field(default=None)
    status_date: Optional[datetime] = dataclasses.field(default=None)
    strain_rgd_id: Optional[int] = dataclasses.field(default=None)
    
