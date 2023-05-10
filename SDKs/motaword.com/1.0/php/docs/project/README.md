# project

### Available Operations

* [assignCM](#assigncm) - Assign a CM to the project
* [cancelProject](#cancelproject) - Cancel your translation project
* [createProjectJson](#createprojectjson) - Create a new project
* [createProjectMultipart](#createprojectmultipart) - Create a new project
* [deleteProject](#deleteproject) - Delete your translation project
* [deliverProject](#deliverproject) - Deliver project
* [download](#download) - Download your translated project
* [downloadHtmlInvoice](#downloadhtmlinvoice) - Download project invoice (HTML)
* [downloadLanguage](#downloadlanguage) - Download your translated project language
* [downloadPdfInvoice](#downloadpdfinvoice) - Download project invoice (PDF)
* [getInvoice](#getinvoice) - View project invoice
* [getProgress](#getprogress) - View progress of a project
* [getProject](#getproject) - View a translation project
* [getProjectVendors](#getprojectvendors) - Get a list of vendors.
* [getProjects](#getprojects) - View your translation projects
* [getQuoteIdFromInternalId](#getquoteidfrominternalid) - Get Quote Id
* [getVendorProjects](#getvendorprojects) - List projects as a vendor
* [getVendorProjectsByUserId](#getvendorprojectsbyuserid) - Get a list of user/vendor projects
* [launchProject](#launchproject) - Launch your translation project
* [package](#package) - Package your translated project
* [packageLanguage](#packagelanguage) - Package your translated project language
* [recreateProject](#recreateproject) - Recreate your translation project from scratch. This is a risky action, you will lose current translations.
* [sendQuoteEmail](#sendquoteemail) - Send a quote email
* [submitProjectReports](#submitprojectreports) - Submit feedback report for a project
* [trackPackage](#trackpackage) - Track translation packaging status
* [triggerCallback](#triggercallback) - Trigger a call to your callback URL related to this project.
* [updateProject](#updateproject) - Update project info and settings

## assignCM

Assign a CM to the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssignCMRequest;
use \OpenAPI\OpenAPI\Models\Shared\Cm;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssignCMRequest();
    $request->cm = new Cm();
    $request->cm->userId = 25662;
    $request->id = 711584;

    $response = $sdk->project->assignCM($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cancelProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CancelProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelProjectRequest();
    $request->cancelProjectRequest = new CancelProjectRequest();
    $request->cancelProjectRequest->reason = 'neque';
    $request->id = 153694;

    $response = $sdk->project->cancelProject($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProjectJson

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NewProject;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewProject();
    $request->callbackUrl = 'vel';
    $request->couponCode = 'libero';
    $request->custom = [
        'deserunt',
        'quam',
    ];
    $request->documents = 'ipsum';
    $request->glossaries = 'incidunt';
    $request->sourceLanguage = 'qui';
    $request->styleguides = 'cupiditate';
    $request->targetLanguages = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];

    $response = $sdk->project->createProjectJson($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProjectMultipart

Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\NewProject1;
use \OpenAPI\OpenAPI\Models\Shared\NewProjectDocuments;
use \OpenAPI\OpenAPI\Models\Shared\NewProjectGlossaries;
use \OpenAPI\OpenAPI\Models\Shared\NewProjectStyleguides;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NewProject1();
    $request->callbackUrl = 'totam';
    $request->couponCode = 'incidunt';
    $request->custom = [
        'dolores',
    ];
    $request->documents = new NewProjectDocuments();
    $request->documents->content = 'distinctio';
    $request->documents->documents = 'facilis';
    $request->glossaries = new NewProjectGlossaries();
    $request->glossaries->content = 'aliquid';
    $request->glossaries->glossaries = 'quam';
    $request->sourceLanguage = 'molestias';
    $request->styleguides = new NewProjectStyleguides();
    $request->styleguides->content = 'temporibus';
    $request->styleguides->styleguides = 'qui';
    $request->targetLanguages = [
        'fugit',
    ];

    $response = $sdk->project->createProjectMultipart($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->id = 164959;

    $response = $sdk->project->deleteProject($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deliverProject

Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeliverProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeliverProjectRequest();
    $request->id = 488056;

    $response = $sdk->project->deliverProject($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## download

Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadRequest();
    $request->id = 124833;

    $response = $sdk->project->download($request);

    if ($response->download200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadHtmlInvoice

Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadHtmlInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadHtmlInvoiceRequest();
    $request->id = 355613;

    $response = $sdk->project->downloadHtmlInvoice($request);

    if ($response->downloadHTMLInvoice200TextHTMLString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadLanguage

Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadLanguageRequest();
    $request->id = 722081;
    $request->language = 'hic';

    $response = $sdk->project->downloadLanguage($request);

    if ($response->downloadLanguage200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## downloadPdfInvoice

Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DownloadPdfInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DownloadPdfInvoiceRequest();
    $request->id = 30452;

    $response = $sdk->project->downloadPdfInvoice($request);

    if ($response->downloadPdfInvoice200ApplicationPdfBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInvoice

View your invoice details for your translation project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInvoiceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInvoiceRequest();
    $request->id = 765326;

    $response = $sdk->project->getInvoice($request);

    if ($response->invoice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProgress

Monitor the translation progress of an already launched project in real-time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProgressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProgressRequest();
    $request->id = 746994;
    $request->raw = false;

    $response = $sdk->project->getProgress($request);

    if ($response->progress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

View the details of a translation project in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->id = 748664;
    $request->with = [
        GetProjectWithEnum::SCORE,
    ];

    $response = $sdk->project->getProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectVendors

Get a list of vendors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectVendorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectVendorsRequest();
    $request->projectId = 217450;

    $response = $sdk->project->getProjectVendors($request);

    if ($response->userList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsOrderByEnum;
use \OpenAPI\OpenAPI\Models\Shared\ListOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsWithEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsRequest();
    $request->orderBy = GetProjectsOrderByEnum::ID;
    $request->orderType = ListOrderTypeEnum::DESC;
    $request->page = 552193;
    $request->perPage = 731694;
    $request->status = [
        ProjectStatusEnum::PENDING,
        ProjectStatusEnum::PROOFREAD,
        ProjectStatusEnum::STARTED,
    ];
    $request->with = [
        GetProjectsWithEnum::CLIENT,
        GetProjectsWithEnum::CLIENT,
    ];
    $request->withCompleted = false;
    $request->withPending = false;
    $request->withStarted = false;

    $response = $sdk->project->getProjects($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteIdFromInternalId

Get Quote Id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteIdFromInternalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteIdFromInternalIdRequest();
    $request->projectId = 677263;

    $response = $sdk->project->getQuoteIdFromInternalId($request);

    if ($response->projectId !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVendorProjects

Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVendorProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVendorProjectsRequest();
    $request->completed = false;
    $request->joined = false;
    $request->page = 100294;
    $request->perPage = 63038;

    $response = $sdk->project->getVendorProjects($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVendorProjectsByUserId

Get a list of user/vendor projects

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVendorProjectsByUserIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVendorProjectsByUserIdRequest();
    $request->completed = false;
    $request->joined = false;
    $request->page = 16429;
    $request->perPage = 555649;
    $request->userId = 929530;

    $response = $sdk->project->getVendorProjectsByUserId($request);

    if ($response->projectList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## launchProject

Launch your translation project so MotaWord can actually start working on your translation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LaunchProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectPayment;
use \OpenAPI\OpenAPI\Models\Shared\ProjectPaymentPaymentMethodEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LaunchProjectRequest();
    $request->projectPayment = new ProjectPayment();
    $request->projectPayment->bin = 'consequatur';
    $request->projectPayment->budgetCode = 'est';
    $request->projectPayment->cardId = 833038;
    $request->projectPayment->paymentCode = 'porro';
    $request->projectPayment->paymentMethod = ProjectPaymentPaymentMethodEnum::CORPORATE_CARD;
    $request->projectPayment->stripeToken = 'ut';
    $request->id = 703495;

    $response = $sdk->project->launchProject($request);

    if ($response->projectLaunchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## package

Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageRequest();
    $request->async = 586410;
    $request->id = 181631;

    $response = $sdk->project->package($request);

    if ($response->package200ApplicationOctetStreamBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## packageLanguage

Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PackageLanguageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PackageLanguageRequest();
    $request->async = 63955;
    $request->id = 512393;
    $request->language = 'odio';

    $response = $sdk->project->packageLanguage($request);

    if ($response->package !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## recreateProject

Recreate your translation project from scratch. This is a risky action, you will lose current translations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RecreateProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RecreateProjectRequest();
    $request->id = 580447;

    $response = $sdk->project->recreateProject($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendQuoteEmail

Send a quote email

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendQuoteEmailRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendQuoteEmailRequest();
    $request->id = 977496;

    $response = $sdk->project->sendQuoteEmail($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## submitProjectReports

Submit feedback report for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubmitProjectReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportContent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubmitProjectReportsRequest();
    $request->reportContent = new ReportContent();
    $request->reportContent->activityType = 'quisquam';
    $request->reportContent->message = 'vero';
    $request->id = 606476;

    $response = $sdk->project->submitProjectReports($request);

    if ($response->operationStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trackPackage

Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrackPackageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrackPackageRequest();
    $request->id = 338159;
    $request->key = 'ipsum';

    $response = $sdk->project->trackPackage($request);

    if ($response->packageStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## triggerCallback

Trigger a call to your callback URL related to this project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TriggerCallbackRequest;
use \OpenAPI\OpenAPI\Models\Operations\TriggerCallbackActionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TriggerCallbackRequest();
    $request->actionType = TriggerCallbackActionTypeEnum::COMPLETED;
    $request->id = 455169;

    $response = $sdk->project->triggerCallback($request);

    if ($response->callbackResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Update project info and settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectUpdate;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->projectUpdate = new ProjectUpdate();
    $request->projectUpdate->callbackUrl = 'consectetur';
    $request->projectUpdate->couponCode = 'vero';
    $request->projectUpdate->custom = [
        'dignissimos',
        'hic',
        'distinctio',
        'quod',
    ];
    $request->projectUpdate->sourceLanguage = 'odio';
    $request->projectUpdate->targetLanguages = [
        'facilis',
        'vero',
        'ducimus',
    ];
    $request->id = 293020;

    $response = $sdk->project->updateProject($request);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
