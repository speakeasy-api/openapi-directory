import dataclasses
from typing import Optional
from enum import Enum
from ..shared import archive_kind_enum as shared_archive_kind_enum


@dataclasses.dataclass
class GetZipArchivePathParams:
    archive_kind: shared_archive_kind_enum.ArchiveKindEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    commit_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'commitId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetZipArchiveRequest:
    path_params: GetZipArchivePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetZipArchiveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_zip_archive_200_application_octet_stream_binary_string: Optional[bytes] = dataclasses.field(default=None)
    
