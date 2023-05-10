# continuousProject

### Available Operations

* [addDocument](#adddocument) - Add a new document to your continuous project
* [collectAnalytics](#collectanalytics) - Save/collect analytics data from Active widget
* [complete](#complete) - Complete continuous project
* [completeContinuousDocument](#completecontinuousdocument) - Complete a continuous project document
* [completeLanguage](#completelanguage) - Complete continuous project language
* [createActiveWidget](#createactivewidget) - Create a new Active widget
* [createContinuousProject](#createcontinuousproject) - Create a continuous project
* [createSubscription](#createsubscription) - Create subscription for continuous project
* [deleteActiveWidget](#deleteactivewidget) - Delete a single widget for this Active project
* [deleteContinuousProject](#deletecontinuousproject) - Delete a continuous project
* [deleteSubscription](#deletesubscription) - Delete subscription for continuous project
* [getActiveWidget](#getactivewidget) - View an Active widget
* [getActiveWidgets](#getactivewidgets) - View Active widgets
* [getAnalyticsToken](#getanalyticstoken) - Get JWT token to be used in analytics dashboards
* [getContinuousProject](#getcontinuousproject) - View a continuous project
* [getContinuousProjectDocument](#getcontinuousprojectdocument) - View a continuous document
* [getContinuousProjectDocumentProgress](#getcontinuousprojectdocumentprogress) - Monitor progress of a continuous document
* [getContinuousProjectDocuments](#getcontinuousprojectdocuments) - View continuous documents
* [getContinuousProjectInvoices](#getcontinuousprojectinvoices) - Invoices of a continuous project
* [getContinuousProjectProgress](#getcontinuousprojectprogress) - Monitor progress and status of a continous project
* [getContinuousProjects](#getcontinuousprojects) - View continuous projects
* [getQuoteForDocument](#getquotefordocument) - Get a quote for a continuous project document
* [getQuoteForDocuments](#getquotefordocuments) - Get quote for documents
* [getQuoteForLanguage](#getquoteforlanguage) - Get quote for language
* [getQuoteForLanguages](#getquoteforlanguages) - Get quote for languages
* [getSubscription](#getsubscription) - Get subscription for continuous project
* [postContinuousProjectDocumentProgress](#postcontinuousprojectdocumentprogress) - Get continuous project document progress for multiple IDs
* [resetActiveWidgetToken](#resetactivewidgettoken) - Reset Active widget token
* [translate](#translate) - Instantly translate your content
* [updateActiveWidget](#updateactivewidget) - Update Active widget settings.
* [updateContinuousProject](#updatecontinuousproject) - Update a continuous project
* [updateDocument](#updatedocument) - Update the document
* [updateSubscription](#updatesubscription) - Update subscription for continuous project
* [updateSubscriptionPaymentMethod](#updatesubscriptionpaymentmethod) - Update subscription payment method for continuous project

## addDocument

Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrUpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileAsData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDocumentRequest();
    $request->addOrUpdateDocumentRequest = new AddOrUpdateDocumentRequest();
    $request->addOrUpdateDocumentRequest->document = new FileAsData();
    $request->addOrUpdateDocumentRequest->document->data = 'cum';
    $request->addOrUpdateDocumentRequest->document->name = 'Edna Mante II';
    $request->projectId = 617636;

    $response = $sdk->continuousProject->addDocument($request);

    if ($response->continuousProjectDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## collectAnalytics

Save/collect analytics data from Active widget

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectAnalyticsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AnalyticsCollection;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectAnalyticsRequest();
    $request->analyticsCollection = new AnalyticsCollection();
    $request->analyticsCollection->anonymousId = 'sed';
    $request->analyticsCollection->properties = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->analyticsCollection->sessionId = 'in';
    $request->analyticsCollection->type = 'corporis';
    $request->analyticsCollection->userId = 'iste';
    $request->id = 437032;

    $response = $sdk->continuousProject->collectAnalytics($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## complete

Complete continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteRequest();
    $request->id = 902349;

    $response = $sdk->continuousProject->complete($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## completeContinuousDocument

Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteContinuousDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteContinuousDocumentRequest();
    $request->documentId = 697631;
    $request->id = 99280;

    $response = $sdk->continuousProject->completeContinuousDocument($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## completeLanguage

Complete continuous project language

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CompleteLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteLanguageRequest();
    $request->id = 60225;
    $request->targetLanguage = 'reiciendis';

    $response = $sdk->continuousProject->completeLanguage($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createActiveWidget

Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateActiveWidgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActiveWidget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateActiveWidgetRequest();
    $request->activeWidget = new ActiveWidget();
    $request->activeWidget->adminMode = false;
    $request->activeWidget->allowHashInUrl = false;
    $request->activeWidget->allowQueryInUrl = false;
    $request->activeWidget->autoDetectSourceLanguage = false;
    $request->activeWidget->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-11T04:59:11.542Z');
    $request->activeWidget->debugMode = false;
    $request->activeWidget->elements = 'laborum';
    $request->activeWidget->followUser = false;
    $request->activeWidget->forceCacheRefreshInterval = false;
    $request->activeWidget->hitBackendForExisting = false;
    $request->activeWidget->id = 170909;
    $request->activeWidget->languageMappings = 'dolorem';
    $request->activeWidget->live = false;
    $request->activeWidget->modifyLinks = false;
    $request->activeWidget->name = 'Rose Rolfson';
    $request->activeWidget->optimizePerPage = false;
    $request->activeWidget->pages = 'nemo';
    $request->activeWidget->pathRegex = 'minima';
    $request->activeWidget->position = 'excepturi';
    $request->activeWidget->queryName = 'accusantium';
    $request->activeWidget->rebootOnUrlChange = false;
    $request->activeWidget->restrictedDomains = 'iure';
    $request->activeWidget->sections = 'culpa';
    $request->activeWidget->testMode = false;
    $request->activeWidget->theme = 'doloribus';
    $request->activeWidget->token = 'sapiente';
    $request->activeWidget->urlChangeMode = 'architecto';
    $request->activeWidget->urlMode = 'mollitia';
    $request->activeWidget->useCache = false;
    $request->activeWidget->useDummyTranslations = false;
    $request->activeWidget->variables = 'dolorem';
    $request->projectId = 635059;

    $response = $sdk->continuousProject->createActiveWidget($request);

    if ($response->activeWidget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createContinuousProject

Create a new continuous project for your software, website, CI/CD translation needs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProject;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProjectLinks;
use \OpenAPI\OpenAPI\Models\Shared\Href;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContinuousProject();
    $request->analyticsEnabled = false;
    $request->autoStartPostedit = false;
    $request->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-02T17:10:32.894Z');
    $request->id = 653108;
    $request->isEnabled = false;
    $request->lastActivityAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T02:19:51.375Z');
    $request->links = new ContinuousProjectLinks();
    $request->links->editors = [
        'quam' => new Href(),
        'molestiae' => new Href(),
    ];
    $request->links->self = new Href();
    $request->links->self->href = 'velit';
    $request->mtEnabled = false;
    $request->mtEngine = 'error';
    $request->name = 'Beatrice Brown';
    $request->posteditEnabled = false;
    $request->sourceLanguage = 'enim';
    $request->status = 'odit';
    $request->subscription = new Subscription();
    $request->subscription->downgrade = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->subscription->paymentMethod = 820994;
    $request->subscription->periodEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T13:23:33.410Z');
    $request->subscription->planId = 'error';
    $request->subscription->planName = 'temporibus';
    $request->subscription->price = 'laborum';
    $request->subscription->products = [
        'reiciendis',
    ];
    $request->subscription->scheduleName = 'voluptatibus';
    $request->subscription->scheduleStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-08-05T19:50:46.898Z');
    $request->subscription->subscriptionId = 'praesentium';
    $request->subscription->upgrade = [
        'ipsa',
        'omnis',
        'voluptate',
        'cum',
    ];
    $request->subscription->withTrial = 'perferendis';
    $request->targetLanguages = [
        'reprehenderit',
    ];
    $request->type = 'ut';
    $request->wordCount = 979587;

    $response = $sdk->continuousProject->createContinuousProject($request);

    if ($response->continuousProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubscription

Create subscription for continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubscriptionRequest();
    $request->subscription = new Subscription();
    $request->subscription->downgrade = [
        'corporis',
    ];
    $request->subscription->paymentMethod = 296140;
    $request->subscription->periodEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-18T15:56:41.921Z');
    $request->subscription->planId = 'harum';
    $request->subscription->planName = 'enim';
    $request->subscription->price = 'accusamus';
    $request->subscription->products = [
        'repudiandae',
        'quae',
    ];
    $request->subscription->scheduleName = 'ipsum';
    $request->subscription->scheduleStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-14T09:53:27.431Z');
    $request->subscription->subscriptionId = 'excepturi';
    $request->subscription->upgrade = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->subscription->withTrial = 'quasi';
    $request->id = 921158;

    $response = $sdk->continuousProject->createSubscription($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteActiveWidget

Delete a single widget for this Active project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteActiveWidgetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteActiveWidgetRequest();
    $request->projectId = 575947;
    $request->widgetId = 83112;

    $response = $sdk->continuousProject->deleteActiveWidget($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteContinuousProject

Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteContinuousProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteContinuousProjectRequest();
    $request->id = 929297;

    $response = $sdk->continuousProject->deleteContinuousProject($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSubscription

Delete subscription for continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSubscriptionRequest();
    $request->id = 277718;

    $response = $sdk->continuousProject->deleteSubscription($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveWidget

View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActiveWidgetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActiveWidgetRequest();
    $request->projectId = 318569;
    $request->widgetId = 9356;

    $response = $sdk->continuousProject->getActiveWidget($request);

    if ($response->activeWidget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getActiveWidgets

View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetActiveWidgetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetActiveWidgetsRequest();
    $request->projectId = 667411;

    $response = $sdk->continuousProject->getActiveWidgets($request);

    if ($response->activeWidgetList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnalyticsToken

Get JWT token to be used in analytics dashboards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAnalyticsTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnalyticsTokenRequest();
    $request->id = 842342;

    $response = $sdk->continuousProject->getAnalyticsToken($request);

    if ($response->analyticsToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProject

View the details of a continuous project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectRequest();
    $request->id = 131797;

    $response = $sdk->continuousProject->getContinuousProject($request);

    if ($response->continuousProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectDocument

View the details of a source document in continuous translation project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectDocumentRequest();
    $request->documentId = 647174;
    $request->projectId = 716327;

    $response = $sdk->continuousProject->getContinuousProjectDocument($request);

    if ($response->continuousProjectDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectDocumentProgress

Monitor the translation progress of a document in a continuous project in real-time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectDocumentProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectDocumentProgressRequest();
    $request->documentId = 841386;
    $request->filterByLanguage = 'labore';
    $request->projectId = 264730;

    $response = $sdk->continuousProject->getContinuousProjectDocumentProgress($request);

    if ($response->progress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectDocuments

View the documents under this continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectDocumentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectDocumentsRequest();
    $request->filterByLanguage = 'qui';
    $request->projectId = 397821;

    $response = $sdk->continuousProject->getContinuousProjectDocuments($request);

    if ($response->continuousProjectDocumentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectInvoices

Get real-time access to a continuous project's invoices.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectInvoicesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectInvoicesRequest();
    $request->projectId = 586513;

    $response = $sdk->continuousProject->getContinuousProjectInvoices($request);

    if ($response->continuousProjectInvoices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjectProgress

Monitor the translation progress of an ongoing continuous project in real-time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectProgressRequest();
    $request->filterByLanguage = 'quos';
    $request->projectId = 20107;

    $response = $sdk->continuousProject->getContinuousProjectProgress($request);

    if ($response->continuousProjectProgress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContinuousProjects

View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContinuousProjectsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContinuousProjectsRequest();
    $request->type = GetContinuousProjectsTypeEnum::ACTIVE;

    $response = $sdk->continuousProject->getContinuousProjects($request);

    if ($response->continuousProjectsList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteForDocument

Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteForDocumentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteForDocumentRequest();
    $request->documentId = 164940;
    $request->id = 828940;

    $response = $sdk->continuousProject->getQuoteForDocument($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteForDocuments

Get a new quote for provided documents in continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteForDocumentsRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQuotesForDocumentsBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteForDocumentsRequest();
    $request->getQuotesForDocumentsBody = new GetQuotesForDocumentsBody();
    $request->getQuotesForDocumentsBody->files = [
        4695,
        146441,
    ];
    $request->id = 677817;

    $response = $sdk->continuousProject->getQuoteForDocuments($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteForLanguage

Get a new quote for provided target language in continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteForLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteForLanguageRequest();
    $request->id = 569618;
    $request->targetLanguage = 'tempora';

    $response = $sdk->continuousProject->getQuoteForLanguage($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteForLanguages

Get a new quote for provided target languages in continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteForLanguagesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetQuotesForLanguagesBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteForLanguagesRequest();
    $request->getQuotesForLanguagesBody = new GetQuotesForLanguagesBody();
    $request->getQuotesForLanguagesBody->languages = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->id = 433288;

    $response = $sdk->continuousProject->getQuoteForLanguages($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscription

Get subscription for continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionRequest();
    $request->id = 248753;

    $response = $sdk->continuousProject->getSubscription($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContinuousProjectDocumentProgress

Get continuous project document progress for multiple IDs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostContinuousProjectDocumentProgressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProjectDocumentProgressBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContinuousProjectDocumentProgressRequest();
    $request->continuousProjectDocumentProgressBody = new ContinuousProjectDocumentProgressBody();
    $request->continuousProjectDocumentProgressBody->documentName = 'eligendi';
    $request->continuousProjectDocumentProgressBody->filterByLanguage = 'sint';
    $request->projectId = 396098;

    $response = $sdk->continuousProject->postContinuousProjectDocumentProgress($request);

    if ($response->progress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resetActiveWidgetToken

Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResetActiveWidgetTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResetActiveWidgetTokenRequest();
    $request->projectId = 592042;
    $request->widgetId = 896039;

    $response = $sdk->continuousProject->resetActiveWidgetToken($request);

    if ($response->activeWidget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translate

Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TranslateRequest;
use \OpenAPI\OpenAPI\Models\Shared\InstantTranslationRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileAsData;
use \OpenAPI\OpenAPI\Models\Shared\InstantTranslationFilter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateRequest();
    $request->instantTranslationRequest = new InstantTranslationRequest();
    $request->instantTranslationRequest->contents = [
        'officia',
        'dolor',
        'debitis',
    ];
    $request->instantTranslationRequest->documents = [
        new FileAsData(),
        new FileAsData(),
        new FileAsData(),
        new FileAsData(),
    ];
    $request->instantTranslationRequest->filters = new InstantTranslationFilter();
    $request->instantTranslationRequest->filters->skipMt = [
        'in',
        'in',
        'illum',
    ];
    $request->instantTranslationRequest->filters->skipPostEdit = [
        'rerum',
        'dicta',
        'magnam',
        'cumque',
    ];
    $request->instantTranslationRequest->meta = [
        'ea' => 'aliquid',
        'laborum' => 'accusamus',
        'non' => 'occaecati',
        'enim' => 'accusamus',
    ];
    $request->id = 965417;
    $request->targetLanguage = 'quidem';

    $response = $sdk->continuousProject->translate($request);

    if ($response->instantTranslationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateActiveWidget

Update Active widget settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateActiveWidgetRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActiveWidget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateActiveWidgetRequest();
    $request->activeWidget = new ActiveWidget();
    $request->activeWidget->adminMode = false;
    $request->activeWidget->allowHashInUrl = false;
    $request->activeWidget->allowQueryInUrl = false;
    $request->activeWidget->autoDetectSourceLanguage = false;
    $request->activeWidget->createdAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-20T13:32:41.687Z');
    $request->activeWidget->debugMode = false;
    $request->activeWidget->elements = 'id';
    $request->activeWidget->followUser = false;
    $request->activeWidget->forceCacheRefreshInterval = false;
    $request->activeWidget->hitBackendForExisting = false;
    $request->activeWidget->id = 501324;
    $request->activeWidget->languageMappings = 'deleniti';
    $request->activeWidget->live = false;
    $request->activeWidget->modifyLinks = false;
    $request->activeWidget->name = 'Vincent Nolan';
    $request->activeWidget->optimizePerPage = false;
    $request->activeWidget->pages = 'natus';
    $request->activeWidget->pathRegex = 'omnis';
    $request->activeWidget->position = 'molestiae';
    $request->activeWidget->queryName = 'perferendis';
    $request->activeWidget->rebootOnUrlChange = false;
    $request->activeWidget->restrictedDomains = 'nihil';
    $request->activeWidget->sections = 'magnam';
    $request->activeWidget->testMode = false;
    $request->activeWidget->theme = 'distinctio';
    $request->activeWidget->token = 'id';
    $request->activeWidget->urlChangeMode = 'labore';
    $request->activeWidget->urlMode = 'labore';
    $request->activeWidget->useCache = false;
    $request->activeWidget->useDummyTranslations = false;
    $request->activeWidget->variables = 'suscipit';
    $request->projectId = 618016;
    $request->widgetId = 749170;

    $response = $sdk->continuousProject->updateActiveWidget($request);

    if ($response->activeWidget !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateContinuousProject

Update the details and settings of continuous project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateContinuousProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProjectUpdateContent;
use \OpenAPI\OpenAPI\Models\Shared\ContinuousProjectLanguage;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateContinuousProjectRequest();
    $request->continuousProjectUpdateContent = new ContinuousProjectUpdateContent();
    $request->continuousProjectUpdateContent->analyticsEnabled = false;
    $request->continuousProjectUpdateContent->autoStartPostedit = false;
    $request->continuousProjectUpdateContent->isEnabled = false;
    $request->continuousProjectUpdateContent->languages = [
        new ContinuousProjectLanguage(),
        new ContinuousProjectLanguage(),
    ];
    $request->continuousProjectUpdateContent->mtEnabled = false;
    $request->continuousProjectUpdateContent->name = 'Brandon Brakus V';
    $request->continuousProjectUpdateContent->posteditEnabled = false;
    $request->id = 354047;

    $response = $sdk->continuousProject->updateContinuousProject($request);

    if ($response->continuousProject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDocument

Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrUpdateDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\FileAsData;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDocumentRequest();
    $request->addOrUpdateDocumentRequest = new AddOrUpdateDocumentRequest();
    $request->addOrUpdateDocumentRequest->document = new FileAsData();
    $request->addOrUpdateDocumentRequest->document->data = 'provident';
    $request->addOrUpdateDocumentRequest->document->name = 'Kirk Bartoletti';
    $request->documentId = 652103;
    $request->projectId = 320997;

    $response = $sdk->continuousProject->updateDocument($request);

    if ($response->continuousProjectDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscription

Update subscription for continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionRequest();
    $request->subscription = new Subscription();
    $request->subscription->downgrade = [
        'dolor',
        'necessitatibus',
    ];
    $request->subscription->paymentMethod = 141264;
    $request->subscription->periodEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-26T12:00:10.052Z');
    $request->subscription->planId = 'iure';
    $request->subscription->planName = 'doloribus';
    $request->subscription->price = 'debitis';
    $request->subscription->products = [
        'maxime',
        'deleniti',
    ];
    $request->subscription->scheduleName = 'facilis';
    $request->subscription->scheduleStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T10:00:44.006Z');
    $request->subscription->subscriptionId = 'architecto';
    $request->subscription->upgrade = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->subscription->withTrial = 'quibusdam';
    $request->id = 149448;

    $response = $sdk->continuousProject->updateSubscription($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubscriptionPaymentMethod

Update subscription payment method for continuous project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubscriptionPaymentMethodRequest;
use \OpenAPI\OpenAPI\Models\Shared\Subscription;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubscriptionPaymentMethodRequest();
    $request->subscription = new Subscription();
    $request->subscription->downgrade = [
        'pariatur',
        'accusantium',
        'consequuntur',
        'praesentium',
    ];
    $request->subscription->paymentMethod = 615560;
    $request->subscription->periodEnd = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-16T19:20:12.159Z');
    $request->subscription->planId = 'quo';
    $request->subscription->planName = 'illum';
    $request->subscription->price = 'pariatur';
    $request->subscription->products = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->subscription->scheduleName = 'accusantium';
    $request->subscription->scheduleStart = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T08:38:36.147Z');
    $request->subscription->subscriptionId = 'quidem';
    $request->subscription->upgrade = [
        'voluptate',
        'autem',
    ];
    $request->subscription->withTrial = 'nam';
    $request->id = 50588;

    $response = $sdk->continuousProject->updateSubscriptionPaymentMethod($request);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
