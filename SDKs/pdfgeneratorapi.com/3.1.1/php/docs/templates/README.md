# templates

### Available Operations

* [copyTemplate](#copytemplate) - Copy template
* [createTemplate](#createtemplate) - Create template
* [deleteTemplate](#deletetemplate) - Delete template
* [getEditorUrl](#geteditorurl) - Open editor
* [getTemplate](#gettemplate) - Get template
* [getTemplates](#gettemplates) - Get templates
* [updateTemplate](#updatetemplate) - Update template

## copyTemplate

Creates a copy of a template to the workspace specified in authentication parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CopyTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CopyTemplateRequest();
    $request->name = 'Kelvin Sporer';
    $request->templateId = 19375;

    $response = $sdk->templates->copyTemplate($request);

    if ($response->copyTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTemplate

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNew;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayout;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutMargins;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRepeatLayout;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRotaionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewPages;
use \OpenAPI\OpenAPI\Models\Shared\Component;
use \OpenAPI\OpenAPI\Models\Shared\ComponentClsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewPagesMargins;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TemplateDefinitionNew();
    $request->isDraft = true;
    $request->layout = new TemplateDefinitionNewLayout();
    $request->layout->emptyLabels = 544883;
    $request->layout->format = TemplateDefinitionNewLayoutFormatEnum::A4;
    $request->layout->height = 29.7;
    $request->layout->margins = new TemplateDefinitionNewLayoutMargins();
    $request->layout->margins->bottom = 0.5;
    $request->layout->margins->left = 0.5;
    $request->layout->margins->right = 0.5;
    $request->layout->margins->top = 0.5;
    $request->layout->orientation = TemplateDefinitionNewLayoutOrientationEnum::PORTRAIT;
    $request->layout->repeatLayout = new TemplateDefinitionNewLayoutRepeatLayout();
    $request->layout->repeatLayout->format = TemplateDefinitionNewLayoutRepeatLayoutFormatEnum::A4;
    $request->layout->repeatLayout->height = 29.7;
    $request->layout->repeatLayout->width = 21;
    $request->layout->rotaion = TemplateDefinitionNewLayoutRotaionEnum::TWO_HUNDRED_AND_SEVENTY;
    $request->layout->unit = TemplateDefinitionNewLayoutUnitEnum::CM;
    $request->layout->width = 21;
    $request->name = 'Invoice template';
    $request->pages = [
        new TemplateDefinitionNewPages(),
        new TemplateDefinitionNewPages(),
    ];
    $request->tags = [
        'deserunt',
        'suscipit',
        'iure',
    ];

    $response = $sdk->templates->createTemplate($request);

    if ($response->createTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTemplate

Deletes the template from workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTemplateRequest();
    $request->templateId = 19375;

    $response = $sdk->templates->deleteTemplate($request);

    if ($response->deleteTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEditorUrl

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorUrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEditorUrlLanguageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEditorUrlRequest();
    $request->requestBody = [
        'debitis' => 'ipsa',
        'delectus' => 'tempora',
    ];
    $request->language = GetEditorUrlLanguageEnum::ET;
    $request->templateId = 19375;

    $response = $sdk->templates->getEditorUrl($request);

    if ($response->getEditorUrl200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplate

Returns template configuration

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTemplateRequest();
    $request->templateId = 19375;

    $response = $sdk->templates->getTemplate($request);

    if ($response->getTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTemplates

Returns a list of templates available for the authenticated workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->templates->getTemplates();

    if ($response->getTemplates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTemplate

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNew;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayout;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutMargins;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutOrientationEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRepeatLayout;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRepeatLayoutFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutRotaionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewLayoutUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewPages;
use \OpenAPI\OpenAPI\Models\Shared\Component;
use \OpenAPI\OpenAPI\Models\Shared\ComponentClsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TemplateDefinitionNewPagesMargins;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTemplateRequest();
    $request->templateDefinitionNew = new TemplateDefinitionNew();
    $request->templateDefinitionNew->isDraft = true;
    $request->templateDefinitionNew->layout = new TemplateDefinitionNewLayout();
    $request->templateDefinitionNew->layout->emptyLabels = 477665;
    $request->templateDefinitionNew->layout->format = TemplateDefinitionNewLayoutFormatEnum::A4;
    $request->templateDefinitionNew->layout->height = 29.7;
    $request->templateDefinitionNew->layout->margins = new TemplateDefinitionNewLayoutMargins();
    $request->templateDefinitionNew->layout->margins->bottom = 0.5;
    $request->templateDefinitionNew->layout->margins->left = 0.5;
    $request->templateDefinitionNew->layout->margins->right = 0.5;
    $request->templateDefinitionNew->layout->margins->top = 0.5;
    $request->templateDefinitionNew->layout->orientation = TemplateDefinitionNewLayoutOrientationEnum::PORTRAIT;
    $request->templateDefinitionNew->layout->repeatLayout = new TemplateDefinitionNewLayoutRepeatLayout();
    $request->templateDefinitionNew->layout->repeatLayout->format = TemplateDefinitionNewLayoutRepeatLayoutFormatEnum::A4;
    $request->templateDefinitionNew->layout->repeatLayout->height = 29.7;
    $request->templateDefinitionNew->layout->repeatLayout->width = 21;
    $request->templateDefinitionNew->layout->rotaion = TemplateDefinitionNewLayoutRotaionEnum::TWO_HUNDRED_AND_SEVENTY;
    $request->templateDefinitionNew->layout->unit = TemplateDefinitionNewLayoutUnitEnum::CM;
    $request->templateDefinitionNew->layout->width = 21;
    $request->templateDefinitionNew->name = 'Invoice template';
    $request->templateDefinitionNew->pages = [
        new TemplateDefinitionNewPages(),
        new TemplateDefinitionNewPages(),
        new TemplateDefinitionNewPages(),
        new TemplateDefinitionNewPages(),
    ];
    $request->templateDefinitionNew->tags = [
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->templateId = 19375;

    $response = $sdk->templates->updateTemplate($request);

    if ($response->updateTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
