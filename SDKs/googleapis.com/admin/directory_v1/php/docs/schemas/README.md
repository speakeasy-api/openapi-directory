# schemas

### Available Operations

* [directorySchemasDelete](#directoryschemasdelete) - Deletes a schema.
* [directorySchemasGet](#directoryschemasget) - Retrieves a schema.
* [directorySchemasInsert](#directoryschemasinsert) - Creates a schema.
* [directorySchemasList](#directoryschemaslist) - Retrieves all schemas for a customer.
* [directorySchemasPatch](#directoryschemaspatch) - Patches a schema.
* [directorySchemasUpdate](#directoryschemasupdate) - Updates a schema.

## directorySchemasDelete

Deletes a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sit';
    $request->customerId = 'modi';
    $request->fields = 'eum';
    $request->key = 'nesciunt';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->quotaUser = 'dignissimos';
    $request->schemaKey = 'fugiat';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DirectorySchemasDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directorySchemasGet

Retrieves a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'modi';
    $request->customerId = 'aut';
    $request->fields = 'aut';
    $request->key = 'eveniet';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->schemaKey = 'numquam';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new DirectorySchemasGetSecurity();
    $requestSecurity->option1 = new DirectorySchemasGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasGet($request, $requestSecurity);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directorySchemasInsert

Creates a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpec;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpecNumericIndexingSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->schema = new Schema();
    $request->schema->displayName = 'consectetur';
    $request->schema->etag = 'nesciunt';
    $request->schema->fields = [
        new SchemaFieldSpec(),
        new SchemaFieldSpec(),
    ];
    $request->schema->kind = 'itaque';
    $request->schema->schemaId = 'minus';
    $request->schema->schemaName = 'sunt';
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quas';
    $request->customerId = 'et';
    $request->fields = 'facilis';
    $request->key = 'amet';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->quotaUser = 'fuga';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'rem';

    $requestSecurity = new DirectorySchemasInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasInsert($request, $requestSecurity);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directorySchemasList

Retrieves all schemas for a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->customerId = 'veritatis';
    $request->fields = 'quae';
    $request->key = 'eaque';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new DirectorySchemasListSecurity();
    $requestSecurity->option1 = new DirectorySchemasListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasList($request, $requestSecurity);

    if ($response->schemas !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directorySchemasPatch

Patches a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpec;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpecNumericIndexingSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->schema = new Schema();
    $request->schema->displayName = 'sed';
    $request->schema->etag = 'voluptatem';
    $request->schema->fields = [
        new SchemaFieldSpec(),
    ];
    $request->schema->kind = 'eveniet';
    $request->schema->schemaId = 'hic';
    $request->schema->schemaName = 'voluptatem';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->customerId = 'necessitatibus';
    $request->fields = 'harum';
    $request->key = 'explicabo';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->schemaKey = 'modi';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new DirectorySchemasPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasPatch($request, $requestSecurity);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## directorySchemasUpdate

Updates a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Schema;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpec;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFieldSpecNumericIndexingSpec;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DirectorySchemasUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DirectorySchemasUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->schema = new Schema();
    $request->schema->displayName = 'officia';
    $request->schema->etag = 'libero';
    $request->schema->fields = [
        new SchemaFieldSpec(),
        new SchemaFieldSpec(),
        new SchemaFieldSpec(),
    ];
    $request->schema->kind = 'sequi';
    $request->schema->schemaId = 'aliquid';
    $request->schema->schemaName = 'ea';
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->customerId = 'velit';
    $request->fields = 'reiciendis';
    $request->key = 'repellat';
    $request->oauthToken = 'nulla';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->schemaKey = 'natus';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'doloremque';

    $requestSecurity = new DirectorySchemasUpdateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->schemas->directorySchemasUpdate($request, $requestSecurity);

    if ($response->schema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
