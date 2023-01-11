import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclasses.dataclass
class PostCustomGatewayRefundOwnershipIDPathParams:
    ownership_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ownershipId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostCustomGatewayRefundOwnershipIDQueryParams:
    amount: int = dataclasses.field(metadata={'query_param': { 'field_name': 'amount', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    date_: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    developer_amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'developerAmount', 'style': 'form', 'explode': True }})
    fee_amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'feeAmount', 'style': 'form', 'explode': True }})
    marketplace_amount: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'marketplaceAmount', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostCustomGatewayRefundOwnershipIDRequest:
    path_params: PostCustomGatewayRefundOwnershipIDPathParams = dataclasses.field()
    query_params: PostCustomGatewayRefundOwnershipIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostCustomGatewayRefundOwnershipIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
