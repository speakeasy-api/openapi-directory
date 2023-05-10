# gitignore

## Overview

View gitignore templates

### Available Operations

* [gitignoreGetAllTemplates](#gitignoregetalltemplates) - Get all gitignore templates
* [gitignoreGetTemplate](#gitignoregettemplate) - Get a gitignore template

## gitignoreGetAllTemplates

List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@3.5/rest/reference/repos#create-a-repository-for-the-authenticated-user).

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/gitignore#get-all-gitignore-templates>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->gitignore->gitignoreGetAllTemplates();

    if ($response->gitignoreGetAllTemplates200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## gitignoreGetTemplate

The API also allows fetching the source of a single template.
Use the raw [media type](https://docs.github.com/enterprise-server@3.5/rest/overview/media-types/) to get the raw contents.

API method documentation
<https://docs.github.com/enterprise-server@3.5/rest/reference/gitignore#get-a-gitignore-template>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GitignoreGetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GitignoreGetTemplateRequest();
    $request->name = 'Johnnie Hoeger';

    $response = $sdk->gitignore->gitignoreGetTemplate($request);

    if ($response->gitignoreTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
