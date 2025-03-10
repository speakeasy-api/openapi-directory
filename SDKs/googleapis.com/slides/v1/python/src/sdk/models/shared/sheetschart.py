"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import sheetschartproperties as shared_sheetschartproperties
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class SheetsChart:
    r"""A PageElement kind representing a linked chart embedded from Google Sheets."""
    
    chart_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('chartId'), 'exclude': lambda f: f is None }})
    r"""The ID of the specific chart in the Google Sheets spreadsheet that is embedded."""  
    content_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('contentUrl'), 'exclude': lambda f: f is None }})
    r"""The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change."""  
    sheets_chart_properties: Optional[shared_sheetschartproperties.SheetsChartProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('sheetsChartProperties'), 'exclude': lambda f: f is None }})
    r"""The properties of the SheetsChart."""  
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('spreadsheetId'), 'exclude': lambda f: f is None }})
    r"""The ID of the Google Sheets spreadsheet that contains the source chart."""  
    