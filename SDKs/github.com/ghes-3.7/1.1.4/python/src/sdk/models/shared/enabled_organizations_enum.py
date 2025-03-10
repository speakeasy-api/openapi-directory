"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class EnabledOrganizationsEnum(str, Enum):
    r"""The policy that controls the organizations in the enterprise that are allowed to run GitHub Actions."""
    ALL = 'all'
    NONE = 'none'
    SELECTED = 'selected'
