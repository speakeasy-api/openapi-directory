import dataclasses
from typing import Any,Optional
from enum import Enum


@dataclasses.dataclass
class GetOrganizationNetworksPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    
class GetOrganizationNetworksTagsFilterTypeEnum(str, Enum):
    WITH_ANY_TAGS = "withAnyTags"
    WITH_ALL_TAGS = "withAllTags"


@dataclasses.dataclass
class GetOrganizationNetworksQueryParams:
    config_template_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'configTemplateId', 'style': 'form', 'explode': True }})
    ending_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endingBefore', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'perPage', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startingAfter', 'style': 'form', 'explode': True }})
    tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': False }})
    tags_filter_type: Optional[GetOrganizationNetworksTagsFilterTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagsFilterType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetOrganizationNetworksRequest:
    path_params: GetOrganizationNetworksPathParams = dataclasses.field()
    query_params: GetOrganizationNetworksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationNetworksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_networks_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
