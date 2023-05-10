# cis

### Available Operations

* [deleteCisInstruction](#deletecisinstruction) - Delete a CIS instruction
* [deleteCisInstructionTag](#deletecisinstructiontag) - Delete CIS instruction tag
* [deleteCisLine](#deletecisline) - Delete a CIS line
* [deleteCisLineTag](#deletecislinetag) - Delete CIS line tag
* [deleteCisLineType](#deletecislinetype) - Delete an CIS line type
* [deleteCisLineTypeTag](#deletecislinetypetag) - Delete CIS line type tag
* [deleteCisTransaction](#deletecistransaction) - Delete the CIS transaction
* [deleteSubContractorTag](#deletesubcontractortag) - Delete sub contractor tag
* [getAllCisInstructionTags](#getallcisinstructiontags) - Get all CIS instruction tags
* [getAllCisLineTags](#getallcislinetags) - Get all CIS line tags
* [getAllCisLineTypeTags](#getallcislinetypetags) - Get all CIS line type tags
* [getAllSubContractorTags](#getallsubcontractortags) - Get all sub contractor tags
* [getCisInstructionFromSubContractor](#getcisinstructionfromsubcontractor) - Get CIS instruction from sub contractor
* [getCisInstructionsFromSubContractor](#getcisinstructionsfromsubcontractor) - Get CIS instructions from sub contractor.
* [getCisInstructionsWithTag](#getcisinstructionswithtag) - Get CIS instructions with tag
* [getCisLineFromSubContractor](#getcislinefromsubcontractor) - Get CIS line from sub contractor
* [getCisLineTypeFromEmployer](#getcislinetypefromemployer) - Get CIS line type from employer
* [getCisLineTypesFromEmployer](#getcislinetypesfromemployer) - Get CIS line types from employer.
* [getCisLineTypesWithTag](#getcislinetypeswithtag) - Get CIS line types with tag
* [getCisLinesFromSubContractor](#getcislinesfromsubcontractor) - Get CIS lines from sub contractor.
* [getCisLinesWithTag](#getcislineswithtag) - Get CIS lines with tag
* [getCisTransactionFromEmployer](#getcistransactionfromemployer) - Get the CIS transaction
* [getCisTransactionsFromEmployer](#getcistransactionsfromemployer) - Get all CIS transactions for the employer
* [getSubContractorsWithTag](#getsubcontractorswithtag) - Get sub contractors with tag
* [getTagFromCisInstruction](#gettagfromcisinstruction) - Get CIS instruction tag
* [getTagFromCisLine](#gettagfromcisline) - Get CIS line tag
* [getTagFromCisLineType](#gettagfromcislinetype) - Get CIS line type tag
* [getTagFromSubContractor](#gettagfromsubcontractor) - Get sub contractor tag
* [getTagFromSubContractorRevision](#gettagfromsubcontractorrevision) - Get sub contractor revision tag
* [getTagsFromCisInstruction](#gettagsfromcisinstruction) - Get all tags from the CIS instruction
* [getTagsFromCisLine](#gettagsfromcisline) - Get all tags from the CIS line
* [getTagsFromCisLineType](#gettagsfromcislinetype) - Get all tags from the CIS line type
* [getTagsFromSubContractor](#gettagsfromsubcontractor) - Get all tags from the sub contractor
* [getTagsFromSubContractorRevision](#gettagsfromsubcontractorrevision) - Get all sub contractor revision tags
* [patchCisInstruction](#patchcisinstruction) - Patches the CIS instruction
* [postCisInstructionIntoSubContractor](#postcisinstructionintosubcontractor) - Create a new CIS instruction
* [postCisLineTypeIntoEmployer](#postcislinetypeintoemployer) - Create a new CIS line type
* [putCisInstructionIntoSubContractor](#putcisinstructionintosubcontractor) - Updates the CIS instruction
* [putCisInstructionTag](#putcisinstructiontag) - Insert CIS instruction tag
* [putCisLineTag](#putcislinetag) - Insert CIS line tag
* [putCisLineTypeIntoEmployer](#putcislinetypeintoemployer) - Updates the CIS line type
* [putCisLineTypeTag](#putcislinetypetag) - Insert CIS line type tag
* [putSubContractorTag](#putsubcontractortag) - Insert sub contractor tag

## deleteCisInstruction

Delete the specified CIS instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisInstructionRequest();
    $request->apiVersion = 'corporis';
    $request->authorization = 'iste';
    $request->cisInstructionId = 'iure';
    $request->employerId = 'saepe';
    $request->subContractorId = 'quidem';

    $response = $sdk->cis->deleteCisInstruction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisInstructionTag

Deletes a tag from the CIS instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisInstructionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisInstructionTagRequest();
    $request->apiVersion = 'architecto';
    $request->authorization = 'ipsa';
    $request->cisInstructionId = 'reiciendis';
    $request->employerId = 'est';
    $request->subContractorId = 'mollitia';
    $request->tagId = 'laborum';

    $response = $sdk->cis->deleteCisInstructionTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisLine

Delete the specified CIS line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisLineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisLineRequest();
    $request->apiVersion = 'dolores';
    $request->authorization = 'dolorem';
    $request->cisLineId = 'corporis';
    $request->employerId = 'explicabo';
    $request->subContractorId = 'nobis';

    $response = $sdk->cis->deleteCisLine($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisLineTag

Deletes a tag from the CIS line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisLineTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisLineTagRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'omnis';
    $request->cisLineId = 'nemo';
    $request->employerId = 'minima';
    $request->subContractorId = 'excepturi';
    $request->tagId = 'accusantium';

    $response = $sdk->cis->deleteCisLineTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisLineType

Delete the specified CIS line type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisLineTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisLineTypeRequest();
    $request->apiVersion = 'iure';
    $request->authorization = 'culpa';
    $request->cisLineTypeId = 'doloribus';
    $request->employerId = 'sapiente';

    $response = $sdk->cis->deleteCisLineType($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisLineTypeTag

Deletes a tag from the CIS line type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisLineTypeTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisLineTypeTagRequest();
    $request->apiVersion = 'architecto';
    $request->authorization = 'mollitia';
    $request->cisLineTypeId = 'dolorem';
    $request->employerId = 'culpa';
    $request->tagId = 'consequuntur';

    $response = $sdk->cis->deleteCisLineTypeTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCisTransaction

Deletes the specified CIS transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCisTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCisTransactionRequest();
    $request->apiVersion = 'repellat';
    $request->authorization = 'mollitia';
    $request->cisTransactionId = 'occaecati';
    $request->employerId = 'numquam';

    $response = $sdk->cis->deleteCisTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubContractorTag

Deletes a tag from the sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubContractorTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubContractorTagRequest();
    $request->apiVersion = 'commodi';
    $request->authorization = 'quam';
    $request->employerId = 'molestiae';
    $request->subContractorId = 'velit';
    $request->tagId = 'error';

    $response = $sdk->cis->deleteSubContractorTag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllCisInstructionTags

Gets all the CIS instruction tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCisInstructionTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllCisInstructionTagsRequest();
    $request->apiVersion = 'quia';
    $request->authorization = 'quis';
    $request->employerId = 'vitae';
    $request->subContractorId = 'laborum';

    $response = $sdk->cis->getAllCisInstructionTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllCisLineTags

Gets all the CIS line tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCisLineTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllCisLineTagsRequest();
    $request->apiVersion = 'animi';
    $request->authorization = 'enim';
    $request->employerId = 'odit';
    $request->subContractorId = 'quo';

    $response = $sdk->cis->getAllCisLineTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllCisLineTypeTags

Gets all the CIS line type tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllCisLineTypeTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllCisLineTypeTagsRequest();
    $request->apiVersion = 'sequi';
    $request->authorization = 'tenetur';
    $request->employerId = 'ipsam';

    $response = $sdk->cis->getAllCisLineTypeTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAllSubContractorTags

Gets all the sub contractor tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllSubContractorTagsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllSubContractorTagsRequest();
    $request->apiVersion = 'id';
    $request->authorization = 'possimus';
    $request->employerId = 'aut';

    $response = $sdk->cis->getAllSubContractorTags($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisInstructionFromSubContractor

Gets the specified CIS instruction from sub contractor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisInstructionFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisInstructionFromSubContractorRequest();
    $request->apiVersion = 'quasi';
    $request->authorization = 'error';
    $request->cisInstructionId = 'temporibus';
    $request->employerId = 'laborum';
    $request->subContractorId = 'quasi';

    $response = $sdk->cis->getCisInstructionFromSubContractor($request);

    if ($response->cisInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisInstructionsFromSubContractor

Get links to all CIS instructions for the specified sub contractor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisInstructionsFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisInstructionsFromSubContractorRequest();
    $request->apiVersion = 'reiciendis';
    $request->authorization = 'voluptatibus';
    $request->employerId = 'vero';
    $request->subContractorId = 'nihil';

    $response = $sdk->cis->getCisInstructionsFromSubContractor($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisInstructionsWithTag

Gets the CIS instruction with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisInstructionsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisInstructionsWithTagRequest();
    $request->apiVersion = 'praesentium';
    $request->authorization = 'voluptatibus';
    $request->employerId = 'ipsa';
    $request->subContractorId = 'omnis';
    $request->tagId = 'voluptate';

    $response = $sdk->cis->getCisInstructionsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLineFromSubContractor

Gets the specified CIS line from sub contractor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLineFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLineFromSubContractorRequest();
    $request->apiVersion = 'cum';
    $request->authorization = 'perferendis';
    $request->cisLineId = 'doloremque';
    $request->employerId = 'reprehenderit';
    $request->subContractorId = 'ut';

    $response = $sdk->cis->getCisLineFromSubContractor($request);

    if ($response->cisLine !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLineTypeFromEmployer

Gets the specified CIS line type from employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLineTypeFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLineTypeFromEmployerRequest();
    $request->apiVersion = 'maiores';
    $request->authorization = 'dicta';
    $request->cisLineTypeId = 'corporis';
    $request->employerId = 'dolore';

    $response = $sdk->cis->getCisLineTypeFromEmployer($request);

    if ($response->cisLineType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLineTypesFromEmployer

Get links to all CIS line types for the specified employer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLineTypesFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLineTypesFromEmployerRequest();
    $request->apiVersion = 'iusto';
    $request->authorization = 'dicta';
    $request->employerId = 'harum';

    $response = $sdk->cis->getCisLineTypesFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLineTypesWithTag

Gets the CIS line type with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLineTypesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLineTypesWithTagRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'accusamus';
    $request->employerId = 'commodi';
    $request->tagId = 'repudiandae';

    $response = $sdk->cis->getCisLineTypesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLinesFromSubContractor

Get links to all CIS lines for the specified sub contractor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLinesFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLinesFromSubContractorRequest();
    $request->apiVersion = 'quae';
    $request->authorization = 'ipsum';
    $request->employerId = 'quidem';
    $request->subContractorId = 'molestias';

    $response = $sdk->cis->getCisLinesFromSubContractor($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisLinesWithTag

Gets the CIS line with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisLinesWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisLinesWithTagRequest();
    $request->apiVersion = 'excepturi';
    $request->authorization = 'pariatur';
    $request->employerId = 'modi';
    $request->subContractorId = 'praesentium';
    $request->tagId = 'rem';

    $response = $sdk->cis->getCisLinesWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisTransactionFromEmployer

Returns the specified CIS transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisTransactionFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisTransactionFromEmployerRequest();
    $request->apiVersion = 'voluptates';
    $request->authorization = 'quasi';
    $request->cisTransactionId = 'repudiandae';
    $request->employerId = 'sint';

    $response = $sdk->cis->getCisTransactionFromEmployer($request);

    if ($response->cisTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCisTransactionsFromEmployer

Get links for all CIS transactions for the specified employer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCisTransactionsFromEmployerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCisTransactionsFromEmployerRequest();
    $request->apiVersion = 'veritatis';
    $request->authorization = 'itaque';
    $request->employerId = 'incidunt';

    $response = $sdk->cis->getCisTransactionsFromEmployer($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubContractorsWithTag

Gets the sub contractor with the tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubContractorsWithTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubContractorsWithTagRequest();
    $request->apiVersion = 'enim';
    $request->authorization = 'consequatur';
    $request->employerId = 'est';
    $request->tagId = 'quibusdam';

    $response = $sdk->cis->getSubContractorsWithTag($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromCisInstruction

Gets the tag from the CIS instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromCisInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromCisInstructionRequest();
    $request->apiVersion = 'explicabo';
    $request->authorization = 'deserunt';
    $request->cisInstructionId = 'distinctio';
    $request->employerId = 'quibusdam';
    $request->subContractorId = 'labore';
    $request->tagId = 'modi';

    $response = $sdk->cis->getTagFromCisInstruction($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromCisLine

Gets the tag from the CIS line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromCisLineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromCisLineRequest();
    $request->apiVersion = 'qui';
    $request->authorization = 'aliquid';
    $request->cisLineId = 'cupiditate';
    $request->employerId = 'quos';
    $request->subContractorId = 'perferendis';
    $request->tagId = 'magni';

    $response = $sdk->cis->getTagFromCisLine($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromCisLineType

Gets the tag from the CIS line type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromCisLineTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromCisLineTypeRequest();
    $request->apiVersion = 'assumenda';
    $request->authorization = 'ipsam';
    $request->cisLineTypeId = 'alias';
    $request->employerId = 'fugit';
    $request->tagId = 'dolorum';

    $response = $sdk->cis->getTagFromCisLineType($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromSubContractor

Gets the tag from the sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromSubContractorRequest();
    $request->apiVersion = 'excepturi';
    $request->authorization = 'tempora';
    $request->employerId = 'facilis';
    $request->subContractorId = 'tempore';
    $request->tagId = 'labore';

    $response = $sdk->cis->getTagFromSubContractor($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagFromSubContractorRevision

Gets the tag from the sub contractor revision

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagFromSubContractorRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagFromSubContractorRevisionRequest();
    $request->apiVersion = 'delectus';
    $request->authorization = 'eum';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-03-31');
    $request->employerId = 'sint';
    $request->subContractorId = 'aliquid';
    $request->tagId = 'provident';

    $response = $sdk->cis->getTagFromSubContractorRevision($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromCisInstruction

Gets all the tags from the CIS instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromCisInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromCisInstructionRequest();
    $request->apiVersion = 'necessitatibus';
    $request->authorization = 'sint';
    $request->cisInstructionId = 'officia';
    $request->employerId = 'dolor';
    $request->subContractorId = 'debitis';

    $response = $sdk->cis->getTagsFromCisInstruction($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromCisLine

Gets all the tags from the CIS line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromCisLineRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromCisLineRequest();
    $request->apiVersion = 'a';
    $request->authorization = 'dolorum';
    $request->cisLineId = 'in';
    $request->employerId = 'in';
    $request->subContractorId = 'illum';

    $response = $sdk->cis->getTagsFromCisLine($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromCisLineType

Gets all the tags from the CIS line type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromCisLineTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromCisLineTypeRequest();
    $request->apiVersion = 'maiores';
    $request->authorization = 'rerum';
    $request->cisLineTypeId = 'dicta';
    $request->employerId = 'magnam';

    $response = $sdk->cis->getTagsFromCisLineType($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromSubContractor

Gets all the tags from the sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromSubContractorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromSubContractorRequest();
    $request->apiVersion = 'cumque';
    $request->authorization = 'facere';
    $request->employerId = 'ea';
    $request->subContractorId = 'aliquid';

    $response = $sdk->cis->getTagsFromSubContractor($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsFromSubContractorRevision

Gets all the tags from the sub contractor revision

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsFromSubContractorRevisionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsFromSubContractorRevisionRequest();
    $request->apiVersion = 'laborum';
    $request->authorization = 'accusamus';
    $request->effectiveDate = DateTime::createFromFormat('Y-m-d', '2022-06-02');
    $request->employerId = 'enim';
    $request->subContractorId = 'accusamus';

    $response = $sdk->cis->getTagsFromSubContractorRevision($request);

    if ($response->linkCollection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCisInstruction

Update an existing CIS instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCisInstructionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCisInstructionRequest();
    $request->apiVersion = 'delectus';
    $request->authorization = 'quidem';
    $request->cisInstructionId = 'provident';
    $request->employerId = 'nam';
    $request->subContractorId = 'id';

    $response = $sdk->cis->patchCisInstruction($request);

    if ($response->cisInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCisInstructionIntoSubContractor

Create a new CIS instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCisInstructionIntoSubContractorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CisInstruction;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstruction;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstructionPayFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstructionUOMEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCisInstructionIntoSubContractorRequest();
    $request->apiVersion = 'blanditiis';
    $request->authorization = 'deleniti';
    $request->cisInstruction = new CisInstruction();
    $request->cisInstruction->cisInstruction = new CisInstructionCisInstruction();
    $request->cisInstruction->cisInstruction->cisLineTag = 'sapiente';
    $request->cisInstruction->cisInstruction->cisLineType = 'amet';
    $request->cisInstruction->cisInstruction->description = 'deserunt';
    $request->cisInstruction->cisInstruction->payFrequency = CisInstructionCisInstructionPayFrequencyEnum::MONTHLY;
    $request->cisInstruction->cisInstruction->periodEnd = 423855;
    $request->cisInstruction->cisInstruction->periodStart = 618809;
    $request->cisInstruction->cisInstruction->taxYearEnd = 606393;
    $request->cisInstruction->cisInstruction->taxYearStart = 474867;
    $request->cisInstruction->cisInstruction->uom = CisInstructionCisInstructionUOMEnum::NOT_SET;
    $request->cisInstruction->cisInstruction->units = 4701.32;
    $request->cisInstruction->cisInstruction->vat = 3015.75;
    $request->cisInstruction->cisInstruction->value = 7160.75;
    $request->employerId = 'id';
    $request->subContractorId = 'labore';

    $response = $sdk->cis->postCisInstructionIntoSubContractor($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCisLineTypeIntoEmployer

Create a new CIS line type object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostCisLineTypeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CisLineType;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineType;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineTypeNominalCode;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineTypeTaxTreatmentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostCisLineTypeIntoEmployerRequest();
    $request->apiVersion = 'labore';
    $request->authorization = 'suscipit';
    $request->cisLineType = new CisLineType();
    $request->cisLineType->cisLineType = new CisLineTypeCisLineType();
    $request->cisLineType->cisLineType->description = 'natus';
    $request->cisLineType->cisLineType->lineType = 'nobis';
    $request->cisLineType->cisLineType->nominalCode = new CisLineTypeCisLineTypeNominalCode();
    $request->cisLineType->cisLineType->nominalCode->atHref = 'eum';
    $request->cisLineType->cisLineType->nominalCode->atRel = 'vero';
    $request->cisLineType->cisLineType->nominalCode->atTitle = 'aspernatur';
    $request->cisLineType->cisLineType->taxTreatment = CisLineTypeCisLineTypeTaxTreatmentEnum::TAXABLE;
    $request->employerId = 'magnam';

    $response = $sdk->cis->postCisLineTypeIntoEmployer($request);

    if ($response->link !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCisInstructionIntoSubContractor

Insert or update existing CIS instruction object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCisInstructionIntoSubContractorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CisInstruction;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstruction;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstructionPayFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CisInstructionCisInstructionUOMEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCisInstructionIntoSubContractorRequest();
    $request->apiVersion = 'et';
    $request->authorization = 'excepturi';
    $request->cisInstruction = new CisInstruction();
    $request->cisInstruction->cisInstruction = new CisInstructionCisInstruction();
    $request->cisInstruction->cisInstruction->cisLineTag = 'ullam';
    $request->cisInstruction->cisInstruction->cisLineType = 'provident';
    $request->cisInstruction->cisInstruction->description = 'quos';
    $request->cisInstruction->cisInstruction->payFrequency = CisInstructionCisInstructionPayFrequencyEnum::WEEKLY;
    $request->cisInstruction->cisInstruction->periodEnd = 33625;
    $request->cisInstruction->cisInstruction->periodStart = 653201;
    $request->cisInstruction->cisInstruction->taxYearEnd = 968962;
    $request->cisInstruction->cisInstruction->taxYearStart = 652103;
    $request->cisInstruction->cisInstruction->uom = CisInstructionCisInstructionUOMEnum::HOUR;
    $request->cisInstruction->cisInstruction->units = 4314.18;
    $request->cisInstruction->cisInstruction->vat = 2212.62;
    $request->cisInstruction->cisInstruction->value = 8965.47;
    $request->cisInstructionId = 'odit';
    $request->employerId = 'nemo';
    $request->subContractorId = 'quasi';

    $response = $sdk->cis->putCisInstructionIntoSubContractor($request);

    if ($response->cisInstruction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCisInstructionTag

Inserts a new tag on the CIS instruction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCisInstructionTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCisInstructionTagRequest();
    $request->apiVersion = 'iure';
    $request->authorization = 'doloribus';
    $request->cisInstructionId = 'debitis';
    $request->employerId = 'eius';
    $request->subContractorId = 'maxime';
    $request->tagId = 'deleniti';

    $response = $sdk->cis->putCisInstructionTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCisLineTag

Inserts a new tag on the CIS line

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCisLineTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCisLineTagRequest();
    $request->apiVersion = 'facilis';
    $request->authorization = 'in';
    $request->cisLineId = 'architecto';
    $request->employerId = 'architecto';
    $request->subContractorId = 'repudiandae';
    $request->tagId = 'ullam';

    $response = $sdk->cis->putCisLineTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCisLineTypeIntoEmployer

Updates the existing specified CIS line type object

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCisLineTypeIntoEmployerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CisLineType;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineType;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineTypeNominalCode;
use \OpenAPI\OpenAPI\Models\Shared\CisLineTypeCisLineTypeTaxTreatmentEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCisLineTypeIntoEmployerRequest();
    $request->apiVersion = 'expedita';
    $request->authorization = 'nihil';
    $request->cisLineType = new CisLineType();
    $request->cisLineType->cisLineType = new CisLineTypeCisLineType();
    $request->cisLineType->cisLineType->description = 'repellat';
    $request->cisLineType->cisLineType->lineType = 'quibusdam';
    $request->cisLineType->cisLineType->nominalCode = new CisLineTypeCisLineTypeNominalCode();
    $request->cisLineType->cisLineType->nominalCode->atHref = 'sed';
    $request->cisLineType->cisLineType->nominalCode->atRel = 'saepe';
    $request->cisLineType->cisLineType->nominalCode->atTitle = 'pariatur';
    $request->cisLineType->cisLineType->taxTreatment = CisLineTypeCisLineTypeTaxTreatmentEnum::TAXABLE;
    $request->cisLineTypeId = 'consequuntur';
    $request->employerId = 'praesentium';

    $response = $sdk->cis->putCisLineTypeIntoEmployer($request);

    if ($response->cisLineType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putCisLineTypeTag

Inserts a new tag on the CIS line type

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutCisLineTypeTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutCisLineTypeTagRequest();
    $request->apiVersion = 'natus';
    $request->authorization = 'magni';
    $request->cisLineTypeId = 'sunt';
    $request->employerId = 'quo';
    $request->tagId = 'illum';

    $response = $sdk->cis->putCisLineTypeTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSubContractorTag

Inserts a new tag on the sub contractor

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSubContractorTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSubContractorTagRequest();
    $request->apiVersion = 'pariatur';
    $request->authorization = 'maxime';
    $request->employerId = 'ea';
    $request->subContractorId = 'excepturi';
    $request->tagId = 'odit';

    $response = $sdk->cis->putSubContractorTag($request);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
