import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hadoopjob as shared_hadoopjob
from ..shared import hivejob as shared_hivejob
from ..shared import pigjob as shared_pigjob
from ..shared import prestojob as shared_prestojob
from ..shared import pysparkjob as shared_pysparkjob
from ..shared import jobscheduling as shared_jobscheduling
from ..shared import sparkjob as shared_sparkjob
from ..shared import sparkrjob as shared_sparkrjob
from ..shared import sparksqljob as shared_sparksqljob
from ..shared import trinojob as shared_trinojob


@dataclass_json
@dataclasses.dataclass
class OrderedJob:
    r"""OrderedJob
    A job executed by the workflow.
    """
    
    hadoop_job: Optional[shared_hadoopjob.HadoopJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[shared_hivejob.HiveJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[shared_pigjob.PigJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    prerequisite_step_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prerequisiteStepIds') }})
    presto_job: Optional[shared_prestojob.PrestoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[shared_pysparkjob.PySparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    scheduling: Optional[shared_jobscheduling.JobScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[shared_sparkjob.SparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[shared_sparkrjob.SparkRJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[shared_sparksqljob.SparkSQLJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    trino_job: Optional[shared_trinojob.TrinoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    
