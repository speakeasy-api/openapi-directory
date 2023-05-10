# journals

### Available Operations

* [deleteJournalInstruction](#deletejournalinstruction) - Deletes a Journal instruction
* [deleteJournalInstructionTemplate](#deletejournalinstructiontemplate) - Deletes a Journal instruction template
* [getJournalInstructionFromEmployer](#getjournalinstructionfromemployer) - Gets the specified journal instruction from the employer
* [getJournalInstructionTemplate](#getjournalinstructiontemplate) - Gets the Journal instructions template for the application
* [getJournalInstructionTemplates](#getjournalinstructiontemplates) - Gets the Journal instructions templates for the application
* [getJournalInstructionsFromEmployer](#getjournalinstructionsfromemployer) - Gets the Journal instructions from the specified employer
* [getJournalLineFromEmployer](#getjournallinefromemployer) - Gets the specified journal Line from the employer
* [getJournalLinesFromEmployee](#getjournallinesfromemployee) - Gets the journal Lines from the specified employee
* [getJournalLinesFromEmployer](#getjournallinesfromemployer) - Gets the Journal Lines from the specified employer
* [getJournalLinesFromPayRun](#getjournallinesfrompayrun) - Gets the journal Lines from the specified pay run
* [getJournalLinesFromSubContractor](#getjournallinesfromsubcontractor) - Gets the journal Lines from the specified sub contractor
* [postJournalInstruction](#postjournalinstruction) - Creates a new Journal Instruction
* [postJournalInstructionTemplate](#postjournalinstructiontemplate) - Creates a new Journal Instruction template
* [putJournalInstruction](#putjournalinstruction) - Update a Journal Instruction
* [putJournalInstructionTemplate](#putjournalinstructiontemplate) - Update a Journal Instruction template

## deleteJournalInstruction

Delete the specified Journal instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJournalInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJournalInstructionRequest();
    $request->apiVersion = 'autem';
    $request->authorization = 'nobis';
    $request->employerId = 'laboriosam';
    $request->journalInstructionId = 'recusandae';

    $response = $sdk->journals->deleteJournalInstruction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJournalInstructionTemplate

Delete the specified Journal instruction template object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJournalInstructionTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJournalInstructionTemplateRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'voluptatem';
    $request->journalInstructionId = 'exercitationem';

    $response = $sdk->journals->deleteJournalInstructionTemplate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalInstructionFromEmployer

Returns the specified journal instruction from employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalInstructionFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalInstructionFromEmployerRequest();
    $request->apiVersion = 'necessitatibus';
    $request->authorization = 'quasi';
    $request->employerId = 'nisi';
    $request->journalInstructionId = 'at';

    $response = $sdk->journals->getJournalInstructionFromEmployer($request);

    if ($response->journalInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalInstructionTemplate

Retrurns the specified journal instruction from the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalInstructionTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalInstructionTemplateRequest();
    $request->apiVersion = 'vero';
    $request->authorization = 'est';
    $request->journalInstructionId = 'harum';

    $response = $sdk->journals->getJournalInstructionTemplate($request);

    if ($response->journalInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalInstructionTemplates

Get links to all journal instruction templates for the application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalInstructionTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalInstructionTemplatesRequest();
    $request->apiVersion = 'sequi';
    $request->authorization = 'doloribus';

    $response = $sdk->journals->getJournalInstructionTemplates($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalInstructionsFromEmployer

Get links to all journal instructions for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalInstructionsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalInstructionsFromEmployerRequest();
    $request->apiVersion = 'repudiandae';
    $request->authorization = 'optio';
    $request->employerId = 'occaecati';

    $response = $sdk->journals->getJournalInstructionsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalLineFromEmployer

Returns the specified journal Line from employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalLineFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalLineFromEmployerRequest();
    $request->apiVersion = 'nemo';
    $request->authorization = 'voluptate';
    $request->employerId = 'blanditiis';
    $request->journalLineId = 'officia';

    $response = $sdk->journals->getJournalLineFromEmployer($request);

    if ($response->journalLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalLinesFromEmployee

Get links to all journal lines for the specified employee

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalLinesFromEmployeeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalLinesFromEmployeeRequest();
    $request->apiVersion = 'voluptas';
    $request->authorization = 'numquam';
    $request->employeeId = 'nemo';
    $request->employerId = 'quos';

    $response = $sdk->journals->getJournalLinesFromEmployee($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalLinesFromEmployer

Get links to all journal Lines for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalLinesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalLinesFromEmployerRequest();
    $request->apiVersion = 'eius';
    $request->authorization = 'aspernatur';
    $request->employerId = 'ducimus';

    $response = $sdk->journals->getJournalLinesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalLinesFromPayRun

Get links to all journal lines for the specified pay run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalLinesFromPayRunRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalLinesFromPayRunRequest();
    $request->apiVersion = 'nesciunt';
    $request->authorization = 'fuga';
    $request->employerId = 'laudantium';
    $request->payRunId = 'incidunt';
    $request->payScheduleId = 'quasi';

    $response = $sdk->journals->getJournalLinesFromPayRun($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJournalLinesFromSubContractor

Get links to all journal lines for the specified sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetJournalLinesFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJournalLinesFromSubContractorRequest();
    $request->apiVersion = 'rem';
    $request->authorization = 'fugiat';
    $request->employerId = 'dicta';
    $request->subContractorId = 'nisi';

    $response = $sdk->journals->getJournalLinesFromSubContractor($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJournalInstruction

Creates a new Journal instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostJournalInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostJournalInstructionRequest();
    $request->apiVersion = 'consequuntur';
    $request->authorization = 'consectetur';
    $request->employerId = 'aperiam';

    $response = $sdk->journals->postJournalInstruction($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postJournalInstructionTemplate

Creates a new Journal instruction teamplte object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostJournalInstructionTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostJournalInstructionTemplateRequest();
    $request->apiVersion = 'cupiditate';
    $request->authorization = 'reiciendis';

    $response = $sdk->journals->postJournalInstructionTemplate($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putJournalInstruction

Updates the existing specified Journal instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutJournalInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutJournalInstructionRequest();
    $request->apiVersion = 'soluta';
    $request->authorization = 'alias';
    $request->employerId = 'omnis';
    $request->journalInstructionId = 'eos';

    $response = $sdk->journals->putJournalInstruction($request);

    if ($response->journalInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putJournalInstructionTemplate

Updates the existing specified Journal instruction template object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutJournalInstructionTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutJournalInstructionTemplateRequest();
    $request->apiVersion = 'occaecati';
    $request->authorization = 'iste';
    $request->journalInstructionId = 'magni';

    $response = $sdk->journals->putJournalInstructionTemplate($request);

    if ($response->journalInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
