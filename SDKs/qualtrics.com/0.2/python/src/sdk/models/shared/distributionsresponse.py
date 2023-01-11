import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DistributionsResponseMeta:
    http_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElementsHeaders:
    from_email: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromEmail') }})
    from_name: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fromName') }})
    reply_to_email: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyToEmail') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElementsMessage:
    library_id: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraryId') }})
    message_id: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageId') }})
    message_text: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageText') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElementsRecipients:
    contact_id: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactId') }})
    library_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('libraryId') }})
    mailing_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailingListId') }})
    sample_id: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleId') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElementsStats:
    blocked: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    bounced: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bounced') }})
    complaints: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complaints') }})
    failed: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    finished: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finished') }})
    opened: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opened') }})
    sent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sent') }})
    skipped: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipped') }})
    started: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('started') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElementsSurveyLink:
    expiration_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate') }})
    link_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    survey_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surveyId') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResultElements:
    created_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate') }})
    custom_headers: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHeaders') }})
    embedded_data: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedData') }})
    headers: DistributionsResponseResultElementsHeaders = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: DistributionsResponseResultElementsMessage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    modified_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate') }})
    organization_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    owner_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerId') }})
    parent_distribution_id: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentDistributionId') }})
    recipients: DistributionsResponseResultElementsRecipients = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    request_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestStatus') }})
    request_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestType') }})
    send_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendDate') }})
    stats: DistributionsResponseResultElementsStats = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    survey_link: DistributionsResponseResultElementsSurveyLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('surveyLink') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponseResult:
    elements: Optional[list[DistributionsResponseResultElements]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    next_page: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    

@dataclass_json
@dataclasses.dataclass
class DistributionsResponse:
    meta: Optional[DistributionsResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[DistributionsResponseResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
