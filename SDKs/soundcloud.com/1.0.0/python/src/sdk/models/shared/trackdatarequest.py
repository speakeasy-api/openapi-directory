import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum


@dataclasses.dataclass
class TrackDataRequestOnlyForUploadingForProUsers:
    only_for_uploading_for_pro_users: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'Only for uploading, for PRO users' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    

@dataclasses.dataclass
class TrackDataRequestOnlyForUploading:
    only_for_uploading: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'Only for uploading' }})
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    
class TrackDataRequestTrackEmbeddableByEnum(str, Enum):
    ALL = "all"
    ME = "me"
    NONE = "none"

class TrackDataRequestTrackLicenseEnum(str, Enum):
    NO_RIGHTS_RESERVED = "no-rights-reserved"
    ALL_RIGHTS_RESERVED = "all-rights-reserved"
    CC_BY = "cc-by"
    CC_BY_NC = "cc-by-nc"
    CC_BY_ND = "cc-by-nd"
    CC_BY_SA = "cc-by-sa"
    CC_BY_NC_ND = "cc-by-nc-nd"
    CC_BY_NC_SA = "cc-by-nc-sa"

class TrackDataRequestTrackSharingEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"


@dataclasses.dataclass
class TrackDataRequest:
    track_artwork_data_: Optional[TrackDataRequestOnlyForUploadingForProUsers] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    track_asset_data_: Optional[TrackDataRequestOnlyForUploading] = dataclasses.field(default=None, metadata={'multipart_form': { 'file': True }})
    track_commentable_: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[commentable]' }})
    track_description_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[description]' }})
    track_downloadable_: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[downloadable]' }})
    track_embeddable_by_: Optional[TrackDataRequestTrackEmbeddableByEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[embeddable_by]' }})
    track_genre_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[genre]' }})
    track_isrc_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[isrc]' }})
    track_label_name_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[label_name]' }})
    track_license_: Optional[TrackDataRequestTrackLicenseEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[license]' }})
    track_permalink_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[permalink]' }})
    track_purchase_url_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[purchase_url]' }})
    track_release_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[release]' }})
    track_release_date_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[release_date]' }})
    track_sharing_: Optional[TrackDataRequestTrackSharingEnum] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[sharing]' }})
    track_streamable_: Optional[bool] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[streamable]' }})
    track_tag_list_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[tag_list]' }})
    track_title_: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'track[title]' }})
    
