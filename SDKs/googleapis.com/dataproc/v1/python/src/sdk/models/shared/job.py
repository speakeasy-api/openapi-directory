import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hadoopjob as shared_hadoopjob
from ..shared import hivejob as shared_hivejob
from ..shared import pigjob as shared_pigjob
from ..shared import jobplacement as shared_jobplacement
from ..shared import prestojob as shared_prestojob
from ..shared import pysparkjob as shared_pysparkjob
from ..shared import jobreference as shared_jobreference
from ..shared import jobscheduling as shared_jobscheduling
from ..shared import sparkjob as shared_sparkjob
from ..shared import sparkrjob as shared_sparkrjob
from ..shared import sparksqljob as shared_sparksqljob
from ..shared import jobstatus as shared_jobstatus
from ..shared import trinojob as shared_trinojob
from ..shared import yarnapplication as shared_yarnapplication
from ..shared import jobplacement as shared_jobplacement


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    A Dataproc job resource.
    """
    
    done: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    driver_control_files_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverControlFilesUri') }})
    driver_output_resource_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driverOutputResourceUri') }})
    hadoop_job: Optional[shared_hadoopjob.HadoopJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[shared_hivejob.HiveJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    job_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobUuid') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[shared_pigjob.PigJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    placement: Optional[shared_jobplacement.JobPlacement] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    presto_job: Optional[shared_prestojob.PrestoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[shared_pysparkjob.PySparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    reference: Optional[shared_jobreference.JobReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduling: Optional[shared_jobscheduling.JobScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[shared_sparkjob.SparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[shared_sparkrjob.SparkRJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[shared_sparksqljob.SparkSQLJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    status: Optional[shared_jobstatus.JobStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_history: Optional[list[shared_jobstatus.JobStatus]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusHistory') }})
    trino_job: Optional[shared_trinojob.TrinoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    yarn_applications: Optional[list[shared_yarnapplication.YarnApplication]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yarnApplications') }})
    

@dataclass_json
@dataclasses.dataclass
class JobInput:
    r"""JobInput
    A Dataproc job resource.
    """
    
    hadoop_job: Optional[shared_hadoopjob.HadoopJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hadoopJob') }})
    hive_job: Optional[shared_hivejob.HiveJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveJob') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    pig_job: Optional[shared_pigjob.PigJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pigJob') }})
    placement: Optional[shared_jobplacement.JobPlacementInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placement') }})
    presto_job: Optional[shared_prestojob.PrestoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prestoJob') }})
    pyspark_job: Optional[shared_pysparkjob.PySparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pysparkJob') }})
    reference: Optional[shared_jobreference.JobReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    scheduling: Optional[shared_jobscheduling.JobScheduling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduling') }})
    spark_job: Optional[shared_sparkjob.SparkJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkJob') }})
    spark_r_job: Optional[shared_sparkrjob.SparkRJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkRJob') }})
    spark_sql_job: Optional[shared_sparksqljob.SparkSQLJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sparkSqlJob') }})
    trino_job: Optional[shared_trinojob.TrinoJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trinoJob') }})
    
