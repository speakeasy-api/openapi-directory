import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import presale as shared_presale
from ..shared import publicsaledates as shared_publicsaledates


@dataclasses.dataclass
class EventSalesDates:
    r"""EventSalesDates
    Event's Sales Dates
    """
    
    presales: Optional[list[shared_presale.Presale]] = dataclasses.field(default=None)
    public: Optional[shared_publicsaledates.PublicSaleDates] = dataclasses.field(default=None)
    
