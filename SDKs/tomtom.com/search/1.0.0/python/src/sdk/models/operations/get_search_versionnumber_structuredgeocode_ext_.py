import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ext_enum as shared_ext_enum


@dataclasses.dataclass
class GetSearchVersionNumberStructuredGeocodeExtPathParams:
    ext: shared_ext_enum.ExtEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSearchVersionNumberStructuredGeocodeExtQueryParams:
    country_code: str = dataclasses.field(metadata={'query_param': { 'field_name': 'countryCode', 'style': 'form', 'explode': True }})
    country_secondary_subdivision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countrySecondarySubdivision', 'style': 'form', 'explode': True }})
    country_subdivision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countrySubdivision', 'style': 'form', 'explode': True }})
    country_tertiary_subdivision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'countryTertiarySubdivision', 'style': 'form', 'explode': True }})
    cross_street: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'crossStreet', 'style': 'form', 'explode': True }})
    extended_postal_codes_for: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    municipality: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'municipality', 'style': 'form', 'explode': True }})
    municipality_subdivision: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'municipalitySubdivision', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'postalCode', 'style': 'form', 'explode': True }})
    street_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetName', 'style': 'form', 'explode': True }})
    street_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'streetNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSearchVersionNumberStructuredGeocodeExtRequest:
    path_params: GetSearchVersionNumberStructuredGeocodeExtPathParams = dataclasses.field()
    query_params: GetSearchVersionNumberStructuredGeocodeExtQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSearchVersionNumberStructuredGeocodeExtResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
