import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams:
    employee_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    width: int = dataclasses.field(metadata={'path_param': { 'field_name': 'width', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthRequest:
    path_params: GetCompanyEmployeesEmployeeIDProfilePictureWidthPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCompanyEmployeesEmployeeIDProfilePictureWidthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_company_employees_employee_id_profile_picture_width_200_image_png_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
