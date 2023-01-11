import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GitCommitAuthor:
    r"""GitCommitAuthor
    Identifying information for the git-user
    """
    
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCommitCommitter:
    r"""GitCommitCommitter
    Identifying information for the git-user
    """
    
    date_: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCommitParents:
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCommitTree:
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCommitVerification:
    payload: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    reason: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    signature: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    verified: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    

@dataclass_json
@dataclasses.dataclass
class GitCommit:
    r"""GitCommit
    Low-level Git commit operations within a repository
    """
    
    author: GitCommitAuthor = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    committer: GitCommitCommitter = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('committer') }})
    html_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    node_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    parents: list[GitCommitParents] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents') }})
    sha: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha') }})
    tree: GitCommitTree = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tree') }})
    url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    verification: GitCommitVerification = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
