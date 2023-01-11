import dataclasses
from typing import Optional


@dataclasses.dataclass
class LandlordControllerCreateMaintenancePreferencePathParams:
    short_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LandlordControllerCreateMaintenancePreferenceQueryParams:
    name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    notes: str = dataclasses.field(metadata={'query_param': { 'field_name': 'notes', 'style': 'form', 'explode': True }})
    tenancy_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'tenancyID', 'style': 'form', 'explode': True }})
    token: str = dataclasses.field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LandlordControllerCreateMaintenancePreferenceRequest:
    path_params: LandlordControllerCreateMaintenancePreferencePathParams = dataclasses.field()
    query_params: LandlordControllerCreateMaintenancePreferenceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LandlordControllerCreateMaintenancePreferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    landlord_controller_create_maintenance_preference_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    landlord_controller_create_maintenance_preference_200_application_xml_string: Optional[str] = dataclasses.field(default=None)
    landlord_controller_create_maintenance_preference_200_text_json_string: Optional[str] = dataclasses.field(default=None)
    landlord_controller_create_maintenance_preference_200_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
