import dataclasses
from typing import Any,Optional
from enum import Enum

class GetInvoiceUblVersionedPackageVersionEnum(str, Enum):
    ORIGINAL = "original"
    SI11 = "si11"
    SI12 = "si12"
    SI20 = "si20"
    AUNZ = "aunz"
    SG = "sg"

class GetInvoiceUblVersionedPackagingEnum(str, Enum):
    UBL = "ubl"


@dataclasses.dataclass
class GetInvoiceUblVersionedPathParams:
    guid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    package_version: GetInvoiceUblVersionedPackageVersionEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'package_version', 'style': 'simple', 'explode': False }})
    packaging: GetInvoiceUblVersionedPackagingEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'packaging', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetInvoiceUblVersionedRequest:
    path_params: GetInvoiceUblVersionedPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetInvoiceUblVersionedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    purchase_invoice_ubl: Optional[Any] = dataclasses.field(default=None)
    
