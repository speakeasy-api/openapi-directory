"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddialogflowv2intentmessagebasiccardbutton as shared_googleclouddialogflowv2intentmessagebasiccardbutton
from ..shared import googleclouddialogflowv2intentmessagecolumnproperties as shared_googleclouddialogflowv2intentmessagecolumnproperties
from ..shared import googleclouddialogflowv2intentmessageimage as shared_googleclouddialogflowv2intentmessageimage
from ..shared import googleclouddialogflowv2intentmessagetablecardrow as shared_googleclouddialogflowv2intentmessagetablecardrow
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDialogflowV2IntentMessageTableCard:
    r"""Table card for Actions on Google."""
    
    buttons: Optional[list[shared_googleclouddialogflowv2intentmessagebasiccardbutton.GoogleCloudDialogflowV2IntentMessageBasicCardButton]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('buttons'), 'exclude': lambda f: f is None }})
    r"""Optional. List of buttons for the card."""  
    column_properties: Optional[list[shared_googleclouddialogflowv2intentmessagecolumnproperties.GoogleCloudDialogflowV2IntentMessageColumnProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('columnProperties'), 'exclude': lambda f: f is None }})
    r"""Optional. Display properties for the columns in this table."""  
    image: Optional[shared_googleclouddialogflowv2intentmessageimage.GoogleCloudDialogflowV2IntentMessageImage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('image'), 'exclude': lambda f: f is None }})
    r"""The image response message."""  
    rows: Optional[list[shared_googleclouddialogflowv2intentmessagetablecardrow.GoogleCloudDialogflowV2IntentMessageTableCardRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rows'), 'exclude': lambda f: f is None }})
    r"""Optional. Rows in this table of data."""  
    subtitle: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('subtitle'), 'exclude': lambda f: f is None }})
    r"""Optional. Subtitle to the title."""  
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('title'), 'exclude': lambda f: f is None }})
    r"""Required. Title of the card."""  
    