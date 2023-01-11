import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class SitesStyling:
    link_color: Optional[str] = dataclasses.field(default=None)
    tag_background_color: Optional[str] = dataclasses.field(default=None)
    tag_foreground_color: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class Sites:
    aliases: Optional[list[Any]] = dataclasses.field(default=None)
    api_site_parameter: Optional[str] = dataclasses.field(default=None)
    audience: Optional[str] = dataclasses.field(default=None)
    closed_beta_date: Optional[int] = dataclasses.field(default=None)
    favicon_url: Optional[str] = dataclasses.field(default=None)
    high_resolution_icon_url: Optional[str] = dataclasses.field(default=None)
    icon_url: Optional[str] = dataclasses.field(default=None)
    launch_date: Optional[int] = dataclasses.field(default=None)
    logo_url: Optional[str] = dataclasses.field(default=None)
    markdown_extensions: Optional[list[Any]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    open_beta_date: Optional[int] = dataclasses.field(default=None)
    related_sites: Optional[list[Any]] = dataclasses.field(default=None)
    site_state: Optional[str] = dataclasses.field(default=None)
    site_type: Optional[str] = dataclasses.field(default=None)
    site_url: Optional[str] = dataclasses.field(default=None)
    styling: Optional[SitesStyling] = dataclasses.field(default=None)
    twitter_account: Optional[str] = dataclasses.field(default=None)
    
