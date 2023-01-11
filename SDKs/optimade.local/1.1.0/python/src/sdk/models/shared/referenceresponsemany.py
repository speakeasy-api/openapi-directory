import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import link as shared_link
from ..shared import warnings as shared_warnings
from ..shared import referenceresource as shared_referenceresource
from ..shared import error as shared_error
from ..shared import entryresource as shared_entryresource


@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyJSONAPI:
    r"""ReferenceResponseManyJSONAPI
    An object describing the server's implementation
    """
    
    meta: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyToplevelLinks:
    r"""ReferenceResponseManyToplevelLinks
    A set of Links objects, possibly including pagination
    """
    
    first: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first') }})
    last: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last') }})
    next: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    prev: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prev') }})
    related: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    self: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyResponseMetaImplementationImplementationMaintainer:
    r"""ReferenceResponseManyResponseMetaImplementationImplementationMaintainer
    Details about the maintainer of the implementation
    """
    
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyResponseMetaImplementation:
    r"""ReferenceResponseManyResponseMetaImplementation
    Information on the server implementation
    """
    
    homepage: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    issue_tracker: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issue_tracker') }})
    maintainer: Optional[ReferenceResponseManyResponseMetaImplementationImplementationMaintainer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintainer') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    source_url: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_url') }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyResponseMetaProvider:
    r"""ReferenceResponseManyResponseMetaProvider
    Information on the database provider of the implementation.
    """
    
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    prefix: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    homepage: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homepage') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyResponseMetaResponseMetaQuery:
    r"""ReferenceResponseManyResponseMetaResponseMetaQuery
    Information on the query that was requested.
    """
    
    representation: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('representation') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseManyResponseMeta:
    r"""ReferenceResponseManyResponseMeta
    A [JSON API meta member](https://jsonapi.org/format/1.0#document-meta)
    that contains JSON API meta objects of non-standard
    meta-information.
    
    OPTIONAL additional information global to the query that is not
    specified in this document, MUST start with a
    database-provider-specific prefix.
    """
    
    api_version: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('api_version') }})
    more_data_available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('more_data_available') }})
    query: ReferenceResponseManyResponseMetaResponseMetaQuery = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    data_available: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_available') }})
    data_returned: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_returned') }})
    implementation: Optional[ReferenceResponseManyResponseMetaImplementation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('implementation') }})
    last_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_id') }})
    provider: Optional[ReferenceResponseManyResponseMetaProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    response_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response_message') }})
    schema: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    time_stamp: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_stamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    warnings: Optional[list[shared_warnings.Warnings]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    

@dataclass_json
@dataclasses.dataclass
class ReferenceResponseMany:
    r"""ReferenceResponseMany
    errors are not allowed
    """
    
    data: Any = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    meta: ReferenceResponseManyResponseMeta = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    included: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('included') }})
    jsonapi: Optional[ReferenceResponseManyJSONAPI] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jsonapi') }})
    links: Optional[ReferenceResponseManyToplevelLinks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
