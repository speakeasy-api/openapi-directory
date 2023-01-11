import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import errormodel as shared_errormodel
from ..shared import subcontractor as shared_subcontractor


@dataclasses.dataclass
class GetSubContractorByEffectiveDatePathParams:
    effective_date: date = dataclasses.field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubContractorByEffectiveDateHeaders:
    api_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = dataclasses.field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSubContractorByEffectiveDateRequest:
    headers: GetSubContractorByEffectiveDateHeaders = dataclasses.field()
    path_params: GetSubContractorByEffectiveDatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSubContractorByEffectiveDateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_model: Optional[shared_errormodel.ErrorModel] = dataclasses.field(default=None)
    sub_contractor: Optional[shared_subcontractor.SubContractor] = dataclasses.field(default=None)
    
