"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class CustomerReadOrganizationEntityTypeEnum(str, Enum):
    r"""Organization entity type. Only applicable for B2B customers."""
    LIMITED_COMPANY = 'LIMITED_COMPANY'
    PUBLIC_LIMITED_COMPANY = 'PUBLIC_LIMITED_COMPANY'
    ENTREPRENEURIAL_COMPANY = 'ENTREPRENEURIAL_COMPANY'
    LIMITED_PARTNERSHIP_LIMITED_COMPANY = 'LIMITED_PARTNERSHIP_LIMITED_COMPANY'
    LIMITED_PARTNERSHIP = 'LIMITED_PARTNERSHIP'
    GENERAL_PARTNERSHIP = 'GENERAL_PARTNERSHIP'
    REGISTERED_SOLE_TRADER = 'REGISTERED_SOLE_TRADER'
    SOLE_TRADER = 'SOLE_TRADER'
    CIVIL_LAW_PARTNERSHIP = 'CIVIL_LAW_PARTNERSHIP'
    PUBLIC_INSTITUTION = 'PUBLIC_INSTITUTION'
    OTHER = 'OTHER'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CustomerRead:
    
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('date_of_birth'), 'exclude': lambda f: f is None }})
    r"""Customer’s date of birth. The format is ‘yyyy-mm-dd’"""  
    gender: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('gender'), 'exclude': lambda f: f is None }})
    r"""Customer’s gender - ‘male’ or ‘female’"""  
    organization_entity_type: Optional[CustomerReadOrganizationEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organization_entity_type'), 'exclude': lambda f: f is None }})
    r"""Organization entity type. Only applicable for B2B customers."""  
    organization_registration_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('organization_registration_id'), 'exclude': lambda f: f is None }})
    r"""Organization registration id. Only applicable for B2B customers."""  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title'), 'exclude': lambda f: f is None }})
    r"""Customer’s Title. Allowed values per country:
    UK - \"Mr\", \"Ms\"
    DE - \"Herr\", \"Frau\"
    AT: \"Herr, \"Frau\"
    CH: de-CH: \"Herr, \"Frau\" it-CH: \"Sig.\", \"Sig.ra\" fr-CH: \"M\", \"Mme\" 
    BE: \"Dhr.\", \"Mevr.\"
    NL: \"Dhr.\", \"Mevr.\" 
    """  
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('type'), 'exclude': lambda f: f is None }})
    r"""Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session."""  
    vat_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('vat_id'), 'exclude': lambda f: f is None }})
    r"""VAT ID. Only applicable for B2B customers."""  
    