"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import dateutil.parser
from ..shared import code_scanning_alert_dismissed_reason_enum as shared_code_scanning_alert_dismissed_reason_enum
from ..shared import code_scanning_alert_instance as shared_code_scanning_alert_instance
from ..shared import code_scanning_alert_rule as shared_code_scanning_alert_rule
from ..shared import code_scanning_alert_state_enum as shared_code_scanning_alert_state_enum
from ..shared import code_scanning_analysis_tool as shared_code_scanning_analysis_tool
from ..shared import nullable_simple_user as shared_nullable_simple_user
from dataclasses_json import Undefined, dataclass_json
from datetime import datetime
from marshmallow import fields
from sdk import utils


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class CodeScanningAlert:
    r"""Response"""
    
    created_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`."""  
    dismissed_at: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissed_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    r"""The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`."""  
    dismissed_by: shared_nullable_simple_user.NullableSimpleUser = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissed_by') }})
    r"""A GitHub user."""  
    dismissed_reason: shared_code_scanning_alert_dismissed_reason_enum.CodeScanningAlertDismissedReasonEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('dismissed_reason') }})
    r"""**Required when the state is dismissed.** The reason for dismissing or closing the alert."""  
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('html_url') }})
    r"""The GitHub URL of the alert resource."""  
    instances_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('instances_url') }})
    r"""The REST API URL for fetching the list of instances for an alert."""  
    most_recent_instance: shared_code_scanning_alert_instance.CodeScanningAlertInstance = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('most_recent_instance') }})  
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('number') }})
    r"""The security alert number."""  
    rule: shared_code_scanning_alert_rule.CodeScanningAlertRule = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('rule') }})  
    state: shared_code_scanning_alert_state_enum.CodeScanningAlertStateEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state') }})
    r"""State of a code scanning alert."""  
    tool: shared_code_scanning_analysis_tool.CodeScanningAnalysisTool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('tool') }})  
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('url') }})
    r"""The REST API URL of the alert resource."""  
    