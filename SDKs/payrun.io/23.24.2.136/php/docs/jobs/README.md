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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBatchJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBatchJobRequest();
    $request->apiVersion = 'earum';
    $request->authorization = 'officia';
    $request->jobId = 'laborum';

    $response = $sdk->jobs->deleteBatchJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisJob

Deletes the the CIS job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisJobRequest();
    $request->apiVersion = 'placeat';
    $request->authorization = 'modi';
    $request->jobId = 'voluptatibus';

    $response = $sdk->jobs->deleteCisJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDpsJob

Deletes the the DPS job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDpsJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDpsJobRequest();
    $request->apiVersion = 'molestias';
    $request->authorization = 'officiis';
    $request->jobId = 'sapiente';

    $response = $sdk->jobs->deleteDpsJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePayRunJob

Deletes the the payrun job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeletePayRunJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePayRunJobRequest();
    $request->apiVersion = 'cumque';
    $request->authorization = 'vitae';
    $request->jobId = 'rerum';

    $response = $sdk->jobs->deletePayRunJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRtiJob

Deletes the the RTI job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRtiJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRtiJobRequest();
    $request->apiVersion = 'tempora';
    $request->authorization = 'quis';
    $request->jobId = 'inventore';

    $response = $sdk->jobs->deleteRtiJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteThirdPartyJob

Deletes the the Third Party job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThirdPartyJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThirdPartyJobRequest();
    $request->apiVersion = 'fugit';
    $request->authorization = 'cumque';
    $request->jobId = 'quae';

    $response = $sdk->jobs->deleteThirdPartyJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchJobInfo

Return the the Batch job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchJobInfoRequest();
    $request->apiVersion = 'perferendis';
    $request->authorization = 'velit';
    $request->jobId = 'aspernatur';

    $response = $sdk->jobs->getBatchJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchJobProgress

Return the the Batch job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchJobProgressRequest();
    $request->apiVersion = 'eum';
    $request->authorization = 'eius';
    $request->jobId = 'rem';

    $response = $sdk->jobs->getBatchJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchJobStatus

Return the the Batch job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchJobStatusRequest();
    $request->apiVersion = 'at';
    $request->authorization = 'impedit';
    $request->jobId = 'eos';

    $response = $sdk->jobs->getBatchJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBatchJobs

Gets all the Batch jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBatchJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBatchJobsRequest();
    $request->apiVersion = 'sapiente';
    $request->authorization = 'eum';

    $response = $sdk->jobs->getBatchJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisJobInfo

Return the the CIS job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisJobInfoRequest();
    $request->apiVersion = 'dicta';
    $request->authorization = 'minima';
    $request->jobId = 'beatae';

    $response = $sdk->jobs->getCisJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisJobProgress

Return the the CIS job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisJobProgressRequest();
    $request->apiVersion = 'cupiditate';
    $request->authorization = 'provident';
    $request->jobId = 'earum';

    $response = $sdk->jobs->getCisJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisJobStatus

Return the the CIS job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisJobStatusRequest();
    $request->apiVersion = 'soluta';
    $request->authorization = 'hic';
    $request->jobId = 'illum';

    $response = $sdk->jobs->getCisJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisJobs

Gets all the CIS jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisJobsRequest();
    $request->apiVersion = 'eaque';
    $request->authorization = 'earum';

    $response = $sdk->jobs->getCisJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsJobInfo

Return the the DPS job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsJobInfoRequest();
    $request->apiVersion = 'perspiciatis';
    $request->authorization = 'maiores';
    $request->jobId = 'debitis';

    $response = $sdk->jobs->getDpsJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsJobProgress

Return the the DPS job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsJobProgressRequest();
    $request->apiVersion = 'aliquid';
    $request->authorization = 'porro';
    $request->jobId = 'suscipit';

    $response = $sdk->jobs->getDpsJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsJobStatus

Return the the DPS job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsJobStatusRequest();
    $request->apiVersion = 'dolorem';
    $request->authorization = 'fugit';
    $request->jobId = 'cumque';

    $response = $sdk->jobs->getDpsJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDpsJobs

Gets all the DPS jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDpsJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDpsJobsRequest();
    $request->apiVersion = 'fuga';
    $request->authorization = 'ratione';

    $response = $sdk->jobs->getDpsJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEmployerJobs

Returns all job information objects for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEmployerJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEmployerJobsRequest();
    $request->apiVersion = 'animi';
    $request->authorization = 'necessitatibus';
    $request->employerId = 'nulla';

    $response = $sdk->jobs->getEmployerJobs($request);

    if ($response->getEmployerJobs200ApplicationJSONBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunJobInfo

Return the the payrun job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunJobInfoRequest();
    $request->apiVersion = 'consequatur';
    $request->authorization = 'quasi';
    $request->jobId = 'et';

    $response = $sdk->jobs->getPayRunJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunJobProgress

Return the the payrun job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunJobProgressRequest();
    $request->apiVersion = 'ducimus';
    $request->authorization = 'natus';
    $request->jobId = 'occaecati';

    $response = $sdk->jobs->getPayRunJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunJobStatus

Return the the payrun job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunJobStatusRequest();
    $request->apiVersion = 'suscipit';
    $request->authorization = 'adipisci';
    $request->jobId = 'quasi';

    $response = $sdk->jobs->getPayRunJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPayRunJobs

Gets all the pay run jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPayRunJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPayRunJobsRequest();
    $request->apiVersion = 'magni';
    $request->authorization = 'doloribus';

    $response = $sdk->jobs->getPayRunJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiJobInfo

Return the the RTI job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiJobInfoRequest();
    $request->apiVersion = 'nulla';
    $request->authorization = 'necessitatibus';
    $request->jobId = 'ipsa';

    $response = $sdk->jobs->getRtiJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiJobProgress

Return the the RTI job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiJobProgressRequest();
    $request->apiVersion = 'tempora';
    $request->authorization = 'nihil';
    $request->jobId = 'molestiae';

    $response = $sdk->jobs->getRtiJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiJobStatus

Return the the RTI job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiJobStatusRequest();
    $request->apiVersion = 'dicta';
    $request->authorization = 'iusto';
    $request->jobId = 'esse';

    $response = $sdk->jobs->getRtiJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRtiJobs

Gets all the RTI jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRtiJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRtiJobsRequest();
    $request->apiVersion = 'praesentium';
    $request->authorization = 'maiores';

    $response = $sdk->jobs->getRtiJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyJobInfo

Return the the Third Party job information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobInfoRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyJobInfoRequest();
    $request->apiVersion = 'reiciendis';
    $request->authorization = 'vel';
    $request->jobId = 'architecto';

    $response = $sdk->jobs->getThirdPartyJobInfo($request);

    if ($response->jobInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyJobProgress

Return the the Third Party job progress

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyJobProgressRequest();
    $request->apiVersion = 'fugiat';
    $request->authorization = 'doloremque';
    $request->jobId = 'dicta';

    $response = $sdk->jobs->getThirdPartyJobProgress($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyJobStatus

Return the the Third Party job status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyJobStatusRequest();
    $request->apiVersion = 'odio';
    $request->authorization = 'tempora';
    $request->jobId = 'esse';

    $response = $sdk->jobs->getThirdPartyJobStatus($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getThirdPartyJobs

Gets all the Third Party jobs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetThirdPartyJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThirdPartyJobsRequest();
    $request->apiVersion = 'ex';
    $request->authorization = 'consectetur';

    $response = $sdk->jobs->getThirdPartyJobs($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewBatchJob

Adds a new Batch job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewBatchJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobInstructionBatchJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobInstructionBatchJobInstructionDELETE;
use \OpenAPI\OpenAPI\Models\Shared\BatchJobInstructionBatchJobInstructionDELETEDELETE;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewBatchJobRequest();
    $request->apiVersion = 'aliquid';
    $request->authorization = 'ipsa';
    $request->batchJobInstruction = new BatchJobInstruction();
    $request->batchJobInstruction->batchJobInstruction = new BatchJobInstructionBatchJobInstruction();
    $request->batchJobInstruction->batchJobInstruction->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-02T14:14:43.935Z');
    $request->batchJobInstruction->batchJobInstruction->instructions = new BatchJobInstructionBatchJobInstructionDELETE();
    $request->batchJobInstruction->batchJobInstruction->instructions->delete = [
        new BatchJobInstructionBatchJobInstructionDELETEDELETE(),
        new BatchJobInstructionBatchJobInstructionDELETEDELETE(),
    ];
    $request->batchJobInstruction->batchJobInstruction->validateOnly = false;

    $response = $sdk->jobs->postNewBatchJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewCisJob

Adds a new CIS job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewCisJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\CisJobInstructionBase;
use \OpenAPI\OpenAPI\Models\Shared\CisJobInstructionBaseCisJobInstructionBase;
use \OpenAPI\OpenAPI\Models\Shared\CisJobInstructionBaseCisJobInstructionBaseEmployer;
use \OpenAPI\OpenAPI\Models\Shared\CisJobInstructionBaseCisJobInstructionBaseSubContractor;
use \OpenAPI\OpenAPI\Models\Shared\CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewCisJobRequest();
    $request->apiVersion = 'fugiat';
    $request->authorization = 'expedita';
    $request->cisJobInstructionBase = new CisJobInstructionBase();
    $request->cisJobInstructionBase->cisJobInstructionBase = new CisJobInstructionBaseCisJobInstructionBase();
    $request->cisJobInstructionBase->cisJobInstructionBase->employer = new CisJobInstructionBaseCisJobInstructionBaseEmployer();
    $request->cisJobInstructionBase->cisJobInstructionBase->employer->atHref = 'aliquid';
    $request->cisJobInstructionBase->cisJobInstructionBase->employer->atRel = 'officia';
    $request->cisJobInstructionBase->cisJobInstructionBase->employer->atTitle = 'suscipit';
    $request->cisJobInstructionBase->cisJobInstructionBase->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-23T23:30:38.445Z');
    $request->cisJobInstructionBase->cisJobInstructionBase->subContractors = new CisJobInstructionBaseCisJobInstructionBaseSubContractor();
    $request->cisJobInstructionBase->cisJobInstructionBase->subContractors->subContractor = [
        new CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor(),
        new CisJobInstructionBaseCisJobInstructionBaseSubContractorSubContractor(),
    ];

    $response = $sdk->jobs->postNewCisJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewDpsJob

Creates the new DPS job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewDpsJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstructionDpsJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstructionDpsJobInstructionEmployer;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstructionDpsJobInstructionType;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstructionDpsJobInstructionMessage;
use \OpenAPI\OpenAPI\Models\Shared\DpsJobInstructionDpsJobInstructionMessageMessage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewDpsJobRequest();
    $request->apiVersion = 'voluptas';
    $request->authorization = 'iste';
    $request->dpsJobInstruction = new DpsJobInstruction();
    $request->dpsJobInstruction->dpsJobInstruction = new DpsJobInstructionDpsJobInstruction();
    $request->dpsJobInstruction->dpsJobInstruction->apply = false;
    $request->dpsJobInstruction->dpsJobInstruction->employer = new DpsJobInstructionDpsJobInstructionEmployer();
    $request->dpsJobInstruction->dpsJobInstruction->employer->atHref = 'id';
    $request->dpsJobInstruction->dpsJobInstruction->employer->atRel = 'ab';
    $request->dpsJobInstruction->dpsJobInstruction->employer->atTitle = 'error';
    $request->dpsJobInstruction->dpsJobInstruction->fromDate = DateTime::createFromFormat('Y-m-d', '2020-04-05');
    $request->dpsJobInstruction->dpsJobInstruction->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-28T14:09:49.511Z');
    $request->dpsJobInstruction->dpsJobInstruction->messageTypes = new DpsJobInstructionDpsJobInstructionType();
    $request->dpsJobInstruction->dpsJobInstruction->messageTypes->type = [
        'ad',
        'deleniti',
        'enim',
    ];
    $request->dpsJobInstruction->dpsJobInstruction->messagesToProcess = new DpsJobInstructionDpsJobInstructionMessage();
    $request->dpsJobInstruction->dpsJobInstruction->messagesToProcess->message = [
        new DpsJobInstructionDpsJobInstructionMessageMessage(),
    ];
    $request->dpsJobInstruction->dpsJobInstruction->retrieve = false;

    $response = $sdk->jobs->postNewDpsJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewPayRunJob

Creates the new pay run job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewPayRunJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\PayRunJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\PayRunJobInstructionPayRunJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\PayRunJobInstructionPayRunJobInstructionEmployee;
use \OpenAPI\OpenAPI\Models\Shared\PayRunJobInstructionPayRunJobInstructionEmployeeEmployee;
use \OpenAPI\OpenAPI\Models\Shared\PayRunJobInstructionPayRunJobInstructionPaySchedule;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewPayRunJobRequest();
    $request->apiVersion = 'repellendus';
    $request->authorization = 'ex';
    $request->payRunJobInstruction = new PayRunJobInstruction();
    $request->payRunJobInstruction->payRunJobInstruction = new PayRunJobInstructionPayRunJobInstruction();
    $request->payRunJobInstruction->payRunJobInstruction->employees = new PayRunJobInstructionPayRunJobInstructionEmployee();
    $request->payRunJobInstruction->payRunJobInstruction->employees->employee = [
        new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee(),
        new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee(),
        new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee(),
        new PayRunJobInstructionPayRunJobInstructionEmployeeEmployee(),
    ];
    $request->payRunJobInstruction->payRunJobInstruction->endDate = DateTime::createFromFormat('Y-m-d', '2022-09-20');
    $request->payRunJobInstruction->payRunJobInstruction->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-15T09:59:51.518Z');
    $request->payRunJobInstruction->payRunJobInstruction->isSupplementary = false;
    $request->payRunJobInstruction->payRunJobInstruction->paySchedule = new PayRunJobInstructionPayRunJobInstructionPaySchedule();
    $request->payRunJobInstruction->payRunJobInstruction->paySchedule->atHref = 'voluptatem';
    $request->payRunJobInstruction->payRunJobInstruction->paySchedule->atRel = 'molestias';
    $request->payRunJobInstruction->payRunJobInstruction->paySchedule->atTitle = 'cum';
    $request->payRunJobInstruction->payRunJobInstruction->paymentDate = DateTime::createFromFormat('Y-m-d', '2022-11-21');
    $request->payRunJobInstruction->payRunJobInstruction->startDate = DateTime::createFromFormat('Y-m-d', '2021-10-15');

    $response = $sdk->jobs->postNewPayRunJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewRtiJob

Creates the new RTI job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewRtiJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstructionRtiJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstructionRtiJobInstructionEmployer;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstructionRtiJobInstructionLateReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstructionRtiJobInstructionPaySchedule;
use \OpenAPI\OpenAPI\Models\Shared\RtiJobInstructionRtiJobInstructionRtiTransaction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewRtiJobRequest();
    $request->apiVersion = 'veritatis';
    $request->authorization = 'rerum';
    $request->rtiJobInstruction = new RtiJobInstruction();
    $request->rtiJobInstruction->rtiJobInstruction = new RtiJobInstructionRtiJobInstruction();
    $request->rtiJobInstruction->rtiJobInstruction->earlierTaxYear = 665678;
    $request->rtiJobInstruction->rtiJobInstruction->employer = new RtiJobInstructionRtiJobInstructionEmployer();
    $request->rtiJobInstruction->rtiJobInstruction->employer->atHref = 'culpa';
    $request->rtiJobInstruction->rtiJobInstruction->employer->atRel = 'voluptatem';
    $request->rtiJobInstruction->rtiJobInstruction->employer->atTitle = 'sapiente';
    $request->rtiJobInstruction->rtiJobInstruction->finalSubmissionForYear = false;
    $request->rtiJobInstruction->rtiJobInstruction->generate = false;
    $request->rtiJobInstruction->rtiJobInstruction->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T21:19:27.244Z');
    $request->rtiJobInstruction->rtiJobInstruction->lateReason = RtiJobInstructionRtiJobInstructionLateReasonEnum::F;
    $request->rtiJobInstruction->rtiJobInstruction->noPaymentForPeriodFrom = DateTime::createFromFormat('Y-m-d', '2020-04-30');
    $request->rtiJobInstruction->rtiJobInstruction->noPaymentForPeriodTo = DateTime::createFromFormat('Y-m-d', '2022-12-31');
    $request->rtiJobInstruction->rtiJobInstruction->paySchedule = new RtiJobInstructionRtiJobInstructionPaySchedule();
    $request->rtiJobInstruction->rtiJobInstruction->paySchedule->atHref = 'deleniti';
    $request->rtiJobInstruction->rtiJobInstruction->paySchedule->atRel = 'earum';
    $request->rtiJobInstruction->rtiJobInstruction->paySchedule->atTitle = 'ex';
    $request->rtiJobInstruction->rtiJobInstruction->paymentDate = DateTime::createFromFormat('Y-m-d', '2021-06-06');
    $request->rtiJobInstruction->rtiJobInstruction->periodOfInactivityFrom = DateTime::createFromFormat('Y-m-d', '2021-11-27');
    $request->rtiJobInstruction->rtiJobInstruction->periodOfInactivityTo = DateTime::createFromFormat('Y-m-d', '2022-06-06');
    $request->rtiJobInstruction->rtiJobInstruction->rtiTransaction = new RtiJobInstructionRtiJobInstructionRtiTransaction();
    $request->rtiJobInstruction->rtiJobInstruction->rtiTransaction->atHref = 'ullam';
    $request->rtiJobInstruction->rtiJobInstruction->rtiTransaction->atRel = 'perferendis';
    $request->rtiJobInstruction->rtiJobInstruction->rtiTransaction->atTitle = 'illum';
    $request->rtiJobInstruction->rtiJobInstruction->rtiType = 'totam';
    $request->rtiJobInstruction->rtiJobInstruction->schemeCeased = DateTime::createFromFormat('Y-m-d', '2020-06-22');
    $request->rtiJobInstruction->rtiJobInstruction->taxMonth = 720528;
    $request->rtiJobInstruction->rtiJobInstruction->taxYear = 373216;
    $request->rtiJobInstruction->rtiJobInstruction->timestamp = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-22T07:25:32.550Z');
    $request->rtiJobInstruction->rtiJobInstruction->transmit = false;

    $response = $sdk->jobs->postNewRtiJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postNewThirdPartyJob

Adds a new Third Party job to the queue and returns the job info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostNewThirdPartyJobRequest;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyJobInstruction;
use \OpenAPI\OpenAPI\Models\Shared\ThirdPartyJobInstructionThirdPartyJobInstruction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostNewThirdPartyJobRequest();
    $request->apiVersion = 'aliquam';
    $request->authorization = 'inventore';
    $request->thirdPartyJobInstruction = new ThirdPartyJobInstruction();
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction = new ThirdPartyJobInstructionThirdPartyJobInstruction();
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction->employerHref = 'deleniti';
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction->holdingDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-22T18:43:20.498Z');
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction->instructionType = 'dolor';
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction->metaData = [
        'architecto' => 'sit',
    ];
    $request->thirdPartyJobInstruction->thirdPartyJobInstruction->payLoad = 'modi';

    $response = $sdk->jobs->postNewThirdPartyJob($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
