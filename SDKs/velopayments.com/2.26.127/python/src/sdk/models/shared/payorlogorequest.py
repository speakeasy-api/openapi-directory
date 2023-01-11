import dataclasses
from typing import Optional


@dataclasses.dataclass
class PayorLogoRequestLogo:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    logo: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'logo' }})
    

@dataclasses.dataclass
class PayorLogoRequest:
    logo: Optional[PayorLogoRequestLogo] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    
