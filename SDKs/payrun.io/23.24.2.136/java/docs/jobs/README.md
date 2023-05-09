# jobs

### Available Operations

* [deleteBatchJob](#deletebatchjob) - Delete the Batch job
* [deleteCisJob](#deletecisjob) - Delete the CIS job
* [deleteDpsJob](#deletedpsjob) - Delete the DPS job
* [deletePayRunJob](#deletepayrunjob) - Delete the pay run job
* [deleteRtiJob](#deletertijob) - Delete the RTI job
* [deleteThirdPartyJob](#deletethirdpartyjob) - Delete the Third Party job
* [getBatchJobInfo](#getbatchjobinfo) - Get the Batch job information
* [getBatchJobProgress](#getbatchjobprogress) - Get the Batch job progress
* [getBatchJobStatus](#getbatchjobstatus) - Get the Batch job status
* [getBatchJobs](#getbatchjobs) - Get all Batch jobs
* [getCisJobInfo](#getcisjobinfo) - Get the CIS job information
* [getCisJobProgress](#getcisjobprogress) - Get the CIS job progress
* [getCisJobStatus](#getcisjobstatus) - Get the CIS job status
* [getCisJobs](#getcisjobs) - Get all CIS jobs
* [getDpsJobInfo](#getdpsjobinfo) - Get the DPS job information
* [getDpsJobProgress](#getdpsjobprogress) - Get the DPS job progress
* [getDpsJobStatus](#getdpsjobstatus) - Get the DPS job status
* [getDpsJobs](#getdpsjobs) - Get all DPS jobs
* [getEmployerJobs](#getemployerjobs) - Gets all jobs relating to the employer.
* [getPayRunJobInfo](#getpayrunjobinfo) - Get the pay run job information
* [getPayRunJobProgress](#getpayrunjobprogress) - Get the pay run job progress
* [getPayRunJobStatus](#getpayrunjobstatus) - Get the pay run job status
* [getPayRunJobs](#getpayrunjobs) - Get all PayRun jobs
* [getRtiJobInfo](#getrtijobinfo) - Get the RTI job information
* [getRtiJobProgress](#getrtijobprogress) - Get the RTI job progress
* [getRtiJobStatus](#getrtijobstatus) - Get the RTI job status
* [getRtiJobs](#getrtijobs) - Get all RTI jobs
* [getThirdPartyJobInfo](#getthirdpartyjobinfo) - Get the Third Party job information
* [getThirdPartyJobProgress](#getthirdpartyjobprogress) - Get the Third Party job progress
* [getThirdPartyJobStatus](#getthirdpartyjobstatus) - Get the Third Party job status
* [getThirdPartyJobs](#getthirdpartyjobs) - Get all Third Party jobs
* [postNewBatchJob](#postnewbatchjob) - Create new Batch job
* [postNewCisJob](#postnewcisjob) - Create new CIS job
* [postNewDpsJob](#postnewdpsjob) - Create new DPS job
* [postNewPayRunJob](#postnewpayrunjob) - Create new PayRun job
* [postNewRtiJob](#postnewrtijob) - Create new RTI job
* [postNewThirdPartyJob](#postnewthirdpartyjob) - Create new Third Party job

## deleteBatchJob

Deletes the the Batch job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBatchJobRequest;
import org.openapis.openapi.models.operations.DeleteBatchJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBatchJobRequest req = new DeleteBatchJobRequest("earum", "officia", "laborum");            

            DeleteBatchJobResponse res = sdk.jobs.deleteBatchJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCisJob

Deletes the the CIS job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCisJobRequest;
import org.openapis.openapi.models.operations.DeleteCisJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCisJobRequest req = new DeleteCisJobRequest("placeat", "modi", "voluptatibus");            

            DeleteCisJobResponse res = sdk.jobs.deleteCisJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDpsJob

Deletes the the DPS job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDpsJobRequest;
import org.openapis.openapi.models.operations.DeleteDpsJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteDpsJobRequest req = new DeleteDpsJobRequest("molestias", "officiis", "sapiente");            

            DeleteDpsJobResponse res = sdk.jobs.deleteDpsJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletePayRunJob

Deletes the the payrun job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePayRunJobRequest;
import org.openapis.openapi.models.operations.DeletePayRunJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePayRunJobRequest req = new DeletePayRunJobRequest("cumque", "vitae", "rerum");            

            DeletePayRunJobResponse res = sdk.jobs.deletePayRunJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRtiJob

Deletes the the RTI job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRtiJobRequest;
import org.openapis.openapi.models.operations.DeleteRtiJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRtiJobRequest req = new DeleteRtiJobRequest("tempora", "quis", "inventore");            

            DeleteRtiJobResponse res = sdk.jobs.deleteRtiJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteThirdPartyJob

Deletes the the Third Party job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteThirdPartyJobRequest;
import org.openapis.openapi.models.operations.DeleteThirdPartyJobResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteThirdPartyJobRequest req = new DeleteThirdPartyJobRequest("fugit", "cumque", "quae");            

            DeleteThirdPartyJobResponse res = sdk.jobs.deleteThirdPartyJob(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchJobInfo

Return the the Batch job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchJobInfoRequest;
import org.openapis.openapi.models.operations.GetBatchJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBatchJobInfoRequest req = new GetBatchJobInfoRequest("perferendis", "velit", "aspernatur");            

            GetBatchJobInfoResponse res = sdk.jobs.getBatchJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchJobProgress

Return the the Batch job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchJobProgressRequest;
import org.openapis.openapi.models.operations.GetBatchJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBatchJobProgressRequest req = new GetBatchJobProgressRequest("eum", "eius", "rem");            

            GetBatchJobProgressResponse res = sdk.jobs.getBatchJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchJobStatus

Return the the Batch job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchJobStatusRequest;
import org.openapis.openapi.models.operations.GetBatchJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBatchJobStatusRequest req = new GetBatchJobStatusRequest("at", "impedit", "eos");            

            GetBatchJobStatusResponse res = sdk.jobs.getBatchJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBatchJobs

Gets all the Batch jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBatchJobsRequest;
import org.openapis.openapi.models.operations.GetBatchJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBatchJobsRequest req = new GetBatchJobsRequest("sapiente", "eum");            

            GetBatchJobsResponse res = sdk.jobs.getBatchJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisJobInfo

Return the the CIS job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisJobInfoRequest;
import org.openapis.openapi.models.operations.GetCisJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisJobInfoRequest req = new GetCisJobInfoRequest("dicta", "minima", "beatae");            

            GetCisJobInfoResponse res = sdk.jobs.getCisJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisJobProgress

Return the the CIS job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisJobProgressRequest;
import org.openapis.openapi.models.operations.GetCisJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisJobProgressRequest req = new GetCisJobProgressRequest("cupiditate", "provident", "earum");            

            GetCisJobProgressResponse res = sdk.jobs.getCisJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisJobStatus

Return the the CIS job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisJobStatusRequest;
import org.openapis.openapi.models.operations.GetCisJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisJobStatusRequest req = new GetCisJobStatusRequest("soluta", "hic", "illum");            

            GetCisJobStatusResponse res = sdk.jobs.getCisJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCisJobs

Gets all the CIS jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCisJobsRequest;
import org.openapis.openapi.models.operations.GetCisJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCisJobsRequest req = new GetCisJobsRequest("eaque", "earum");            

            GetCisJobsResponse res = sdk.jobs.getCisJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsJobInfo

Return the the DPS job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsJobInfoRequest;
import org.openapis.openapi.models.operations.GetDpsJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsJobInfoRequest req = new GetDpsJobInfoRequest("perspiciatis", "maiores", "debitis");            

            GetDpsJobInfoResponse res = sdk.jobs.getDpsJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsJobProgress

Return the the DPS job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsJobProgressRequest;
import org.openapis.openapi.models.operations.GetDpsJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsJobProgressRequest req = new GetDpsJobProgressRequest("aliquid", "porro", "suscipit");            

            GetDpsJobProgressResponse res = sdk.jobs.getDpsJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsJobStatus

Return the the DPS job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsJobStatusRequest;
import org.openapis.openapi.models.operations.GetDpsJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsJobStatusRequest req = new GetDpsJobStatusRequest("dolorem", "fugit", "cumque");            

            GetDpsJobStatusResponse res = sdk.jobs.getDpsJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDpsJobs

Gets all the DPS jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDpsJobsRequest;
import org.openapis.openapi.models.operations.GetDpsJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDpsJobsRequest req = new GetDpsJobsRequest("fuga", "ratione");            

            GetDpsJobsResponse res = sdk.jobs.getDpsJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEmployerJobs

Returns all job information objects for the specified employer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEmployerJobsRequest;
import org.openapis.openapi.models.operations.GetEmployerJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEmployerJobsRequest req = new GetEmployerJobsRequest("animi", "necessitatibus", "nulla");            

            GetEmployerJobsResponse res = sdk.jobs.getEmployerJobs(req);

            if (res.getEmployerJobs200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunJobInfo

Return the the payrun job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunJobInfoRequest;
import org.openapis.openapi.models.operations.GetPayRunJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunJobInfoRequest req = new GetPayRunJobInfoRequest("consequatur", "quasi", "et");            

            GetPayRunJobInfoResponse res = sdk.jobs.getPayRunJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunJobProgress

Return the the payrun job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunJobProgressRequest;
import org.openapis.openapi.models.operations.GetPayRunJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunJobProgressRequest req = new GetPayRunJobProgressRequest("ducimus", "natus", "occaecati");            

            GetPayRunJobProgressResponse res = sdk.jobs.getPayRunJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunJobStatus

Return the the payrun job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunJobStatusRequest;
import org.openapis.openapi.models.operations.GetPayRunJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunJobStatusRequest req = new GetPayRunJobStatusRequest("suscipit", "adipisci", "quasi");            

            GetPayRunJobStatusResponse res = sdk.jobs.getPayRunJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPayRunJobs

Gets all the pay run jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPayRunJobsRequest;
import org.openapis.openapi.models.operations.GetPayRunJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPayRunJobsRequest req = new GetPayRunJobsRequest("magni", "doloribus");            

            GetPayRunJobsResponse res = sdk.jobs.getPayRunJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiJobInfo

Return the the RTI job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiJobInfoRequest;
import org.openapis.openapi.models.operations.GetRtiJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiJobInfoRequest req = new GetRtiJobInfoRequest("nulla", "necessitatibus", "ipsa");            

            GetRtiJobInfoResponse res = sdk.jobs.getRtiJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiJobProgress

Return the the RTI job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiJobProgressRequest;
import org.openapis.openapi.models.operations.GetRtiJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiJobProgressRequest req = new GetRtiJobProgressRequest("tempora", "nihil", "molestiae");            

            GetRtiJobProgressResponse res = sdk.jobs.getRtiJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiJobStatus

Return the the RTI job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiJobStatusRequest;
import org.openapis.openapi.models.operations.GetRtiJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiJobStatusRequest req = new GetRtiJobStatusRequest("dicta", "iusto", "esse");            

            GetRtiJobStatusResponse res = sdk.jobs.getRtiJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRtiJobs

Gets all the RTI jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRtiJobsRequest;
import org.openapis.openapi.models.operations.GetRtiJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRtiJobsRequest req = new GetRtiJobsRequest("praesentium", "maiores");            

            GetRtiJobsResponse res = sdk.jobs.getRtiJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyJobInfo

Return the the Third Party job information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyJobInfoRequest;
import org.openapis.openapi.models.operations.GetThirdPartyJobInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyJobInfoRequest req = new GetThirdPartyJobInfoRequest("reiciendis", "vel", "architecto");            

            GetThirdPartyJobInfoResponse res = sdk.jobs.getThirdPartyJobInfo(req);

            if (res.jobInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyJobProgress

Return the the Third Party job progress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyJobProgressRequest;
import org.openapis.openapi.models.operations.GetThirdPartyJobProgressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyJobProgressRequest req = new GetThirdPartyJobProgressRequest("fugiat", "doloremque", "dicta");            

            GetThirdPartyJobProgressResponse res = sdk.jobs.getThirdPartyJobProgress(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyJobStatus

Return the the Third Party job status

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyJobStatusRequest;
import org.openapis.openapi.models.operations.GetThirdPartyJobStatusResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyJobStatusRequest req = new GetThirdPartyJobStatusRequest("odio", "tempora", "esse");            

            GetThirdPartyJobStatusResponse res = sdk.jobs.getThirdPartyJobStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThirdPartyJobs

Gets all the Third Party jobs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThirdPartyJobsRequest;
import org.openapis.openapi.models.operations.GetThirdPartyJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThirdPartyJobsRequest req = new GetThirdPartyJobsRequest("ex", "consectetur");            

            GetThirdPartyJobsResponse res = sdk.jobs.getThirdPartyJobs(req);

            if (res.linkCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewBatchJob

Adds a new Batch job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewBatchJobRequest;
import org.openapis.openapi.models.operations.PostNewBatchJobResponse;
import org.openapis.openapi.models.shared.BatchJobInstruction;
import org.openapis.openapi.models.shared.BatchJobInstructionBatchJobInstruction;
import org.openapis.openapi.models.shared.BatchJobInstructionBatchJobInstructionDELETE;
import org.openapis.openapi.models.shared.BatchJobInstructionBatchJobInstructionDELETEDELETE;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewBatchJobRequest req = new PostNewBatchJobRequest("aliquid", "ipsa",                 new BatchJobInstruction() {{
                                batchJobInstruction = new BatchJobInstructionBatchJobInstruction() {{
                                    holdingDate = OffsetDateTime.parse("2022-10-02T14:14:43.935Z");
                                    instructions = new BatchJobInstructionBatchJobInstructionDELETE() {{
                                        delete = new org.openapis.openapi.models.shared.BatchJobInstructionBatchJobInstructionDELETEDELETE[]{{
                                            add(new BatchJobInstructionBatchJobInstructionDELETEDELETE() {{
                                                atHref = "fugiat";
                                            }}),
                                            add(new BatchJobInstructionBatchJobInstructionDELETEDELETE() {{
                                                atHref = "expedita";
                                            }}),
                                        }};
                                    }};;
                                    validateOnly = false;
                                }};;
                            }};);            

            PostNewBatchJobResponse res = sdk.jobs.postNewBatchJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewCisJob

Adds a new CIS job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewCisJobRequest;
import org.openapis.openapi.models.operations.PostNewCisJobResponse;
import org.openapis.openapi.models.shared.CisJobInstructionBase;
import org.openapis.openapi.models.shared.CisJobInstructionBaseCisJobInstructionBase;
import org.openapis.openapi.models.shared.CisJobInstructionBaseCisJobInstructionBaseEmployer;
import org.openapis.openapi.models.shared.CisJobInstructionBaseCisJobInstructionBaseSubContractor;
import org.openapis.openapi.models.shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewCisJobRequest req = new PostNewCisJobRequest("aliquid", "officia",                 new CisJobInstructionBase() {{
                                cisJobInstructionBase = new CisJobInstructionBaseCisJobInstructionBase() {{
                                    employer = new CisJobInstructionBaseCisJobInstructionBaseEmployer() {{
                                        atHref = "suscipit";
                                        atRel = "aliquid";
                                        atTitle = "perferendis";
                                    }};;
                                    holdingDate = OffsetDateTime.parse("2022-08-17T05:09:58.137Z");
                                    subContractors = new CisJobInstructionBaseCisJobInstructionBaseSubContractor() {{
                                        subContractor = new org.openapis.openapi.models.shared.CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor[]{{
                                            add(new CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor() {{
                                                atHref = "id";
                                                atRel = "ab";
                                                atTitle = "error";
                                            }}),
                                            add(new CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor() {{
                                                atHref = "possimus";
                                                atRel = "voluptates";
                                                atTitle = "mollitia";
                                            }}),
                                            add(new CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor() {{
                                                atHref = "laborum";
                                                atRel = "libero";
                                                atTitle = "ad";
                                            }}),
                                        }};
                                    }};;
                                }};;
                            }};);            

            PostNewCisJobResponse res = sdk.jobs.postNewCisJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewDpsJob

Creates the new DPS job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewDpsJobRequest;
import org.openapis.openapi.models.operations.PostNewDpsJobResponse;
import org.openapis.openapi.models.shared.DpsJobInstruction;
import org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstruction;
import org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstructionEmployer;
import org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstructionMessage;
import org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstructionMessageMessage;
import org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstructionType;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewDpsJobRequest req = new PostNewDpsJobRequest("deleniti", "enim",                 new DpsJobInstruction() {{
                                dpsJobInstruction = new DpsJobInstructionDpsJobInstruction() {{
                                    apply = false;
                                    employer = new DpsJobInstructionDpsJobInstructionEmployer() {{
                                        atHref = "vitae";
                                        atRel = "repellendus";
                                        atTitle = "ex";
                                    }};;
                                    fromDate = LocalDate.parse("2021-10-14");
                                    holdingDate = OffsetDateTime.parse("2022-09-05T19:39:47.586Z");
                                    messageTypes = new DpsJobInstructionDpsJobInstructionType() {{
                                        type = new Object[]{{
                                            add("voluptatem"),
                                            add("molestias"),
                                            add("cum"),
                                        }};
                                    }};;
                                    messagesToProcess = new DpsJobInstructionDpsJobInstructionMessage() {{
                                        message = new org.openapis.openapi.models.shared.DpsJobInstructionDpsJobInstructionMessageMessage[]{{
                                            add(new DpsJobInstructionDpsJobInstructionMessageMessage() {{
                                                atHref = "beatae";
                                                atRel = "voluptatum";
                                                atTitle = "omnis";
                                            }}),
                                            add(new DpsJobInstructionDpsJobInstructionMessageMessage() {{
                                                atHref = "veritatis";
                                                atRel = "rerum";
                                                atTitle = "est";
                                            }}),
                                        }};
                                    }};;
                                    retrieve = false;
                                }};;
                            }};);            

            PostNewDpsJobResponse res = sdk.jobs.postNewDpsJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewPayRunJob

Creates the new pay run job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewPayRunJobRequest;
import org.openapis.openapi.models.operations.PostNewPayRunJobResponse;
import org.openapis.openapi.models.shared.PayRunJobInstruction;
import org.openapis.openapi.models.shared.PayRunJobInstructionPayRunJobInstruction;
import org.openapis.openapi.models.shared.PayRunJobInstructionPayRunJobInstructionEmployee;
import org.openapis.openapi.models.shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee;
import org.openapis.openapi.models.shared.PayRunJobInstructionPayRunJobInstructionPaySchedule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewPayRunJobRequest req = new PostNewPayRunJobRequest("culpa", "voluptatem",                 new PayRunJobInstruction() {{
                                payRunJobInstruction = new PayRunJobInstructionPayRunJobInstruction() {{
                                    employees = new PayRunJobInstructionPayRunJobInstructionEmployee() {{
                                        employee = new org.openapis.openapi.models.shared.PayRunJobInstructionPayRunJobInstructionEmployeeEmployee[]{{
                                            add(new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee() {{
                                                atHref = "officiis";
                                                atRel = "architecto";
                                                atTitle = "fuga";
                                            }}),
                                            add(new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee() {{
                                                atHref = "pariatur";
                                                atRel = "debitis";
                                                atTitle = "voluptatem";
                                            }}),
                                            add(new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee() {{
                                                atHref = "alias";
                                                atRel = "deleniti";
                                                atTitle = "earum";
                                            }}),
                                            add(new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee() {{
                                                atHref = "ex";
                                                atRel = "sapiente";
                                                atTitle = "rem";
                                            }}),
                                        }};
                                    }};;
                                    endDate = LocalDate.parse("2021-11-27");
                                    holdingDate = OffsetDateTime.parse("2022-06-06T07:54:04.224Z");
                                    isSupplementary = false;
                                    paySchedule = new PayRunJobInstructionPayRunJobInstructionPaySchedule() {{
                                        atHref = "ullam";
                                        atRel = "perferendis";
                                        atTitle = "illum";
                                    }};;
                                    paymentDate = LocalDate.parse("2021-06-17");
                                    startDate = LocalDate.parse("2020-11-03");
                                }};;
                            }};);            

            PostNewPayRunJobResponse res = sdk.jobs.postNewPayRunJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewRtiJob

Creates the new RTI job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewRtiJobRequest;
import org.openapis.openapi.models.operations.PostNewRtiJobResponse;
import org.openapis.openapi.models.shared.RtiJobInstruction;
import org.openapis.openapi.models.shared.RtiJobInstructionRtiJobInstruction;
import org.openapis.openapi.models.shared.RtiJobInstructionRtiJobInstructionEmployer;
import org.openapis.openapi.models.shared.RtiJobInstructionRtiJobInstructionLateReasonEnum;
import org.openapis.openapi.models.shared.RtiJobInstructionRtiJobInstructionPaySchedule;
import org.openapis.openapi.models.shared.RtiJobInstructionRtiJobInstructionRtiTransaction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewRtiJobRequest req = new PostNewRtiJobRequest("ipsam", "culpa",                 new RtiJobInstruction() {{
                                rtiJobInstruction = new RtiJobInstructionRtiJobInstruction() {{
                                    earlierTaxYear = 222864;
                                    employer = new RtiJobInstructionRtiJobInstructionEmployer() {{
                                        atHref = "aliquam";
                                        atRel = "inventore";
                                        atTitle = "deleniti";
                                    }};;
                                    finalSubmissionForYear = false;
                                    generate = false;
                                    holdingDate = OffsetDateTime.parse("2022-09-22T18:43:20.498Z");
                                    lateReason = RtiJobInstructionRtiJobInstructionLateReasonEnum.B;
                                    noPaymentForPeriodFrom = LocalDate.parse("2022-11-25");
                                    noPaymentForPeriodTo = LocalDate.parse("2022-09-26");
                                    paySchedule = new RtiJobInstructionRtiJobInstructionPaySchedule() {{
                                        atHref = "fugit";
                                        atRel = "ab";
                                        atTitle = "laudantium";
                                    }};;
                                    paymentDate = LocalDate.parse("2022-10-11");
                                    periodOfInactivityFrom = LocalDate.parse("2021-11-22");
                                    periodOfInactivityTo = LocalDate.parse("2022-12-11");
                                    rtiTransaction = new RtiJobInstructionRtiJobInstructionRtiTransaction() {{
                                        atHref = "quas";
                                        atRel = "eveniet";
                                        atTitle = "impedit";
                                    }};;
                                    rtiType = "officiis";
                                    schemeCeased = LocalDate.parse("2022-02-07");
                                    taxMonth = 153369;
                                    taxYear = 332191;
                                    timestamp = OffsetDateTime.parse("2022-04-15T18:45:38.448Z");
                                    transmit = false;
                                }};;
                            }};);            

            PostNewRtiJobResponse res = sdk.jobs.postNewRtiJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postNewThirdPartyJob

Adds a new Third Party job to the queue and returns the job info

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostNewThirdPartyJobRequest;
import org.openapis.openapi.models.operations.PostNewThirdPartyJobResponse;
import org.openapis.openapi.models.shared.ThirdPartyJobInstruction;
import org.openapis.openapi.models.shared.ThirdPartyJobInstructionThirdPartyJobInstruction;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostNewThirdPartyJobRequest req = new PostNewThirdPartyJobRequest("eum", "vel",                 new ThirdPartyJobInstruction() {{
                                thirdPartyJobInstruction = new ThirdPartyJobInstructionThirdPartyJobInstruction() {{
                                    employerHref = "voluptatum";
                                    holdingDate = OffsetDateTime.parse("2022-08-26T10:54:10.191Z");
                                    instructionType = "ab";
                                    metaData = new java.util.HashMap<String, Object>() {{
                                        put("autem", "nobis");
                                        put("laboriosam", "recusandae");
                                        put("consequuntur", "voluptatem");
                                        put("exercitationem", "necessitatibus");
                                    }};
                                    payLoad = "quasi";
                                }};;
                            }};);            

            PostNewThirdPartyJobResponse res = sdk.jobs.postNewThirdPartyJob(req);

            if (res.link != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
