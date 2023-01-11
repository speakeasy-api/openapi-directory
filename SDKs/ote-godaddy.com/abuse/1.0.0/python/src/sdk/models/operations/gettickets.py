import dataclasses
from typing import Optional
from enum import Enum

class GetTicketsTypeEnum(str, Enum):
    A_RECORD = "A_RECORD"
    CHILD_ABUSE = "CHILD_ABUSE"
    CONTENT = "CONTENT"
    FRAUD_WIRE = "FRAUD_WIRE"
    IP_BLOCK = "IP_BLOCK"
    MALWARE = "MALWARE"
    NETWORK_ABUSE = "NETWORK_ABUSE"
    PHISHING = "PHISHING"
    SPAM = "SPAM"


@dataclasses.dataclass
class GetTicketsQueryParams:
    closed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'closed', 'style': 'form', 'explode': True }})
    created_end: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdEnd', 'style': 'form', 'explode': True }})
    created_start: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdStart', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    source_domain_or_ip: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceDomainOrIp', 'style': 'form', 'explode': True }})
    target: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    type: Optional[GetTicketsTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTicketsRequest:
    query_params: GetTicketsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTicketsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
