import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Saml:
    r"""Saml
    Represents an SAML 2.0 identity provider.
    """
    
    idp_metadata_xml: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idpMetadataXml') }})
    
