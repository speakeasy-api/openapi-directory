import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecommenderv1beta1valuematcher as shared_googlecloudrecommenderv1beta1valuematcher


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecommenderV1beta1Operation:
    r"""GoogleCloudRecommenderV1beta1Operation
    Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
    """
    
    action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    path_filters: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathFilters') }})
    path_value_matchers: Optional[dict[str, shared_googlecloudrecommenderv1beta1valuematcher.GoogleCloudRecommenderV1beta1ValueMatcher]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pathValueMatchers') }})
    resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    resource_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    source_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourcePath') }})
    source_resource: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceResource') }})
    value: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    value_matcher: Optional[shared_googlecloudrecommenderv1beta1valuematcher.GoogleCloudRecommenderV1beta1ValueMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMatcher') }})
    
