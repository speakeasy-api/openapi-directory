import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams:
    date_time_tz: datetime = dataclasses.field(metadata={'path_param': { 'field_name': 'dateTimeTz', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceId', 'style': 'simple', 'explode': False }})
    service_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest:
    path_params: GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    plan_limit_list_view_model: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
