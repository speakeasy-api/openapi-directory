import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grafeasv1slsaprovenancezerotwoslsabuilder as shared_grafeasv1slsaprovenancezerotwoslsabuilder
from ..shared import grafeasv1slsaprovenancezerotwoslsainvocation as shared_grafeasv1slsaprovenancezerotwoslsainvocation
from ..shared import grafeasv1slsaprovenancezerotwoslsamaterial as shared_grafeasv1slsaprovenancezerotwoslsamaterial
from ..shared import grafeasv1slsaprovenancezerotwoslsametadata as shared_grafeasv1slsaprovenancezerotwoslsametadata


@dataclass_json
@dataclasses.dataclass
class SlsaProvenanceZeroTwo:
    r"""SlsaProvenanceZeroTwo
    See full explanation of fields at slsa.dev/provenance/v0.2.
    """
    
    build_config: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildConfig') }})
    build_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildType') }})
    builder: Optional[shared_grafeasv1slsaprovenancezerotwoslsabuilder.GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('builder') }})
    invocation: Optional[shared_grafeasv1slsaprovenancezerotwoslsainvocation.GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invocation') }})
    materials: Optional[list[shared_grafeasv1slsaprovenancezerotwoslsamaterial.GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materials') }})
    metadata: Optional[shared_grafeasv1slsaprovenancezerotwoslsametadata.GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    
