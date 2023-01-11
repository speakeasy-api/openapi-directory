import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import api as shared_api
from ..shared import peer as shared_peer
from ..shared import request as shared_request
from ..shared import resource as shared_resource
from ..shared import response as shared_response


@dataclass_json
@dataclasses.dataclass
class AttributeContext:
    r"""AttributeContext
    This message defines the standard attribute vocabulary for Google APIs. An attribute is a piece of metadata that describes an activity on a network service. For example, the size of an HTTP request, or the status code of an HTTP response. Each attribute has a type and a name, which is logically defined as a proto message field in `AttributeContext`. The field type becomes the attribute type, and the field path becomes the attribute name. For example, the attribute `source.ip` maps to field `AttributeContext.source.ip`. This message definition is guaranteed not to have any wire breaking change. So you can use it directly for passing attributes across different systems. NOTE: Different system may generate different subset of attributes. Please verify the system specification before relying on an attribute generated a system.
    """
    
    api: Optional[shared_api.API] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('api') }})
    destination: Optional[shared_peer.Peer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    extensions: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensions') }})
    origin: Optional[shared_peer.Peer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    request: Optional[shared_request.Request] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    response: Optional[shared_response.Response] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    source: Optional[shared_peer.Peer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
