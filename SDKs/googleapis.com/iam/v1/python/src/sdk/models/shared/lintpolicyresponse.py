import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lintresult as shared_lintresult


@dataclass_json
@dataclasses.dataclass
class LintPolicyResponse:
    r"""LintPolicyResponse
    The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
    """
    
    lint_results: Optional[list[shared_lintresult.LintResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lintResults') }})
    
