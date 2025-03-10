"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
from enum import Enum

class DestinationTypeEnum(str, Enum):
    r"""**destination type specifier**
    - `\"COUNTRY\"`: destination is a country
    - `\"REGION\"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.
    - `\"CITY\"`: destination is a city
    """
    CITY = 'CITY'
    COUNTRY = 'COUNTRY'
    REGION = 'REGION'
