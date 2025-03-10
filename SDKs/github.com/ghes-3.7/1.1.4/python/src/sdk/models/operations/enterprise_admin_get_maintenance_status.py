"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import maintenance_status as shared_maintenance_status
from typing import Optional

ENTERPRISE_ADMIN_GET_MAINTENANCE_STATUS_SERVERS = [
	"https://{protocol}://{hostname}",
]


@dataclasses.dataclass
class EnterpriseAdminGetMaintenanceStatusResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    maintenance_status: Optional[shared_maintenance_status.MaintenanceStatus] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    