# companies

### Available Operations

* [deleteSetupV1CompaniesDomainsId](#deletesetupv1companiesdomainsid) - Delete Company Domain
* [deleteSetupV1CompaniesEmailTemplatesMaster](#deletesetupv1companiesemailtemplatesmaster) - Delete Master Template Settings
* [deleteSetupV1CompaniesRegionsId](#deletesetupv1companiesregionsid) - Delete Region
* [getSetupV1Companies](#getsetupv1companies) - Get Company
* [getSetupV1CompaniesDomains](#getsetupv1companiesdomains) - List Company Domains
* [getSetupV1CompaniesDomainsId](#getsetupv1companiesdomainsid) - Get Company Domain
* [getSetupV1CompaniesEmailTemplates](#getsetupv1companiesemailtemplates) - List Email Templates
* [getSetupV1CompaniesEmailTemplatesMaster](#getsetupv1companiesemailtemplatesmaster) - Get Master Template Settings
* [getSetupV1CompaniesEmailTemplatesTemplateName](#getsetupv1companiesemailtemplatestemplatename) - Get Email Template
* [getSetupV1CompaniesRegions](#getsetupv1companiesregions) - List Regions
* [getSetupV1CompaniesRegionsId](#getsetupv1companiesregionsid) - Get Region
* [getSetupV1CompaniesTimezonesDate](#getsetupv1companiestimezonesdate) - List Time Zones
* [postSetupV1Companies](#postsetupv1companies) - Create Company
* [postSetupV1CompaniesDomains](#postsetupv1companiesdomains) - Create Company Domain
* [postSetupV1CompaniesEmailTemplatesMaster](#postsetupv1companiesemailtemplatesmaster) - Create Master Template Settings
* [postSetupV1CompaniesRegions](#postsetupv1companiesregions) - Create Region
* [putSetupV1Companies](#putsetupv1companies) - Update Company
* [putSetupV1CompaniesDomainsId](#putsetupv1companiesdomainsid) - Update Company Domain
* [putSetupV1CompaniesRegionsId](#putsetupv1companiesregionsid) - Update Region

## deleteSetupV1CompaniesDomainsId

<p>Use this endpoint to <b>Delete</b> an OnSchedJs domain from your authorized company. A valid <b>companyDomain id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1CompaniesDomainsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1CompaniesDomainsIdRequest();
    $request->id = '6c8dd6b1-4429-4074-b477-8a7bd466d28c';

    $response = $sdk->companies->deleteSetupV1CompaniesDomainsId($request);

    if ($response->companyDomainViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Delete Custom Master Email Template Settings</b>. Deleting a custom master email template setting will reactivate the original default OnSched template settings.</p>

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
    $response = $sdk->companies->deleteSetupV1CompaniesEmailTemplatesMaster();

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSetupV1CompaniesRegionsId

<p>Use this endpoint to <b>Delete</b> a region object. A valid <b>region id</b> is required. If the region is related to any business locations it won't be deleted. You must first remove any references to region id from the business locations prior to deleting.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSetupV1CompaniesRegionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSetupV1CompaniesRegionsIdRequest();
    $request->id = '10ab3cdc-a425-4190-8e52-3c7e0bc7178e';

    $response = $sdk->companies->deleteSetupV1CompaniesRegionsId($request);

    if ($response->regionViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1Companies

<p>Use this endpoint to return the <b>Authorized Company</b> information. The company is the main entity that oversees all business locations defined below it, hierarchically. </p>
<p>Access to the company credentials gives you access to all business locations defined in the authorized company. Client credentials resolve to a single company and are purposely hidden from this endpoint.</p>

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
    $response = $sdk->companies->getSetupV1Companies();

    if ($response->companyViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesDomains

<p>Use this endpoint to return a <b>List of Company Domains</b> for the authorized company. To share the OnSchedJS booking widget on your website or in your application your domain must be listed.</p>

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
    $response = $sdk->companies->getSetupV1CompaniesDomains();

    if ($response->companyDomainListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesDomainsId

<p>Use this endpoint to return a <b>Company Domain</b> object. A valid <b>companyDomain id</b> is required. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CompaniesDomainsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CompaniesDomainsIdRequest();
    $request->id = '4796f2a7-0c68-4828-aaa4-82562f222e98';

    $response = $sdk->companies->getSetupV1CompaniesDomainsId($request);

    if ($response->companyDomainViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesEmailTemplates

<p>Use this endpoint to return a <b>List of Email Templates</b> that are provided and may be customized. If the template has been customized, the customized property is true. The scope parameter indicates if the email template has been customized at the Business Location level or Company level. This endpoint returns <b>only company level templates</b>, so the scope is always company.</p>

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
    $response = $sdk->companies->getSetupV1CompaniesEmailTemplates();

    if ($response->emailTemplateListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to return the <b>Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. </p>

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
    $response = $sdk->companies->getSetupV1CompaniesEmailTemplatesMaster();

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesEmailTemplatesTemplateName

<p>Use this endpoint to return the requested <b>Email Template</b>. If it wasn't customized the default template is returned. The response content is in html format. A valid emailTemplate <b>name</b> is required. Find template names by using the: <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint. Note: The master template cannot be accessed here. </p>
<p>To create custom company email templates, go to the <i>POST ​/setup​/v1​/locations​/{id}​/email​/templates</i> endpoint and create a template using the Primary Business Location Id.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CompaniesEmailTemplatesTemplateNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CompaniesEmailTemplatesTemplateNameRequest();
    $request->templateName = 'et';

    $response = $sdk->companies->getSetupV1CompaniesEmailTemplatesTemplateName($request);

    if ($response->contentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesRegions

<p>Use this endpoint to return a list of <b>Regions</b> in the authorized company. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CompaniesRegionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CompaniesRegionsRequest();
    $request->limit = 456911;
    $request->offset = 910545;

    $response = $sdk->companies->getSetupV1CompaniesRegions($request);

    if ($response->regionListViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesRegionsId

<p>Use this endpoint to return a <b>Region</b> object. A valid <b>region id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CompaniesRegionsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CompaniesRegionsIdRequest();
    $request->id = 'e17cbe61-e6b7-4b95-bc0a-b3c20c4f3789';

    $response = $sdk->companies->getSetupV1CompaniesRegionsId($request);

    if ($response->regionViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetupV1CompaniesTimezonesDate

<p>Use this endpoint to return a <b>List of timezone names, timezoneIana and tzOffset values</b> calculated for the date requested. Daylight Savings may or may not apply depending on the date specified.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSetupV1CompaniesTimezonesDateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSetupV1CompaniesTimezonesDateRequest();
    $request->date = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-05T19:02:55.998Z');

    $response = $sdk->companies->getSetupV1CompaniesTimezonesDate($request);

    if ($response->timezoneViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1Companies

<p>Use this endpoint to <b>Create</b> a new authorized company.</p>
<p>
  <b>Note: Special API Partner credentials are required to access this endpoint.</b>
</p>
<p>The <b>name, registrationEmail, phone, country</b> and <b>timezoneName</b> are required fields. For <b>country</b> use the standard ISO 3166 2-character country code.</p>
<p>The <b>timezoneName</b> must be expressed as an IANA Timezone e.g., <i>America/New_York</i>.</p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyInputModel();
    $request->addressLine1 = 'quas';
    $request->addressLine2 = 'esse';
    $request->bookingWebhookUrl = 'quasi';
    $request->city = 'North Miami';
    $request->country = 'Micronesia';
    $request->customerWebhookUrl = 'pariatur';
    $request->disableEmailAndSmsNotifications = false;
    $request->email = 'Carlotta_Upton8@hotmail.com';
    $request->fax = 'consequuntur';
    $request->name = 'Hattie Nader';
    $request->notificationFromEmailAddress = 'quae';
    $request->notificationFromName = 'earum';
    $request->phone = '1-527-870-3913 x433';
    $request->postalCode = '51845';
    $request->registrationEmail = 'itaque';
    $request->reminderWebhookUrl = 'dolorum';
    $request->resourceWebhookUrl = 'architecto';
    $request->state = 'omnis';
    $request->timezoneName = 'tenetur';
    $request->webhookSignatureHash = 'quasi';
    $request->website = 'at';

    $response = $sdk->companies->postSetupV1Companies($request);

    if ($response->companyViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1CompaniesDomains

<p>Use this endpoint to <b>Create</b> an OnSchedJs domain for your authorized company. To share the OnSchedJS booking widget on your website or in your application you must add the domain.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CompanyDomainInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyDomainInputModel();
    $request->domain = 'et';

    $response = $sdk->companies->postSetupV1CompaniesDomains($request);

    if ($response->companyDomainViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1CompaniesEmailTemplatesMaster

<p>Use this endpoint to <b>Create Custom Master Email Template Settings</b>. Settings exist for showing or hiding email panels and for changing color schemes. Use the <i>GET ​/setup​/v1​/companies​/email​/templates</i> endpoint to display the settings offered. Changes to the Master Template Settings will be reflected in all business locations associated with this company. </p>
<p>The email template endpoints work a little differently than most. There are no endpoints to update the templates, we use the post endpoint to create a custom template instead. This endpoint creates a new custom Master Template Settings file that will be used instead. If you delete it you are deleting the custom template settings you created and the original default Master Template created by OnSched would be reactivated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\MasterTemplateSettingsInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MasterTemplateSettingsInputModel();
    $request->centerEmailContent = false;
    $request->centerEmailContentPanel = false;
    $request->centerEmailFooter = false;
    $request->contentBackgroundColor = 'voluptate';
    $request->contentColor = 'ipsa';
    $request->contentLinkColor = 'minima';
    $request->emailBackgroundColor = 'veritatis';
    $request->emailColor = 'consectetur';
    $request->emailLinkColor = 'adipisci';
    $request->footerFontSize = 'iste';
    $request->footerLogoHeight = 'temporibus';
    $request->footerLogoPadding = 'accusantium';
    $request->footerPanelEmailContact = false;
    $request->footerPanelPhoneContact = false;
    $request->footerPanelWebsiteContact = false;
    $request->headerLogoHeight = 'rem';
    $request->headerLogoPadding = 'aut';
    $request->panelBackgroundColor = 'laudantium';
    $request->panelColor = 'eum';
    $request->panelLinkColor = 'mollitia';
    $request->privacyPolicyLink = 'ab';
    $request->showContentPanel = false;
    $request->showFooterLogo = false;
    $request->showFooterPanel = false;
    $request->showHeaderLogo = false;
    $request->showHeaderPanel = false;

    $response = $sdk->companies->postSetupV1CompaniesEmailTemplatesMaster($request);

    if ($response->masterEmailTemplateSettingsViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupV1CompaniesRegions

<p>Use this endpoint to <b>Create</b> a region object. Regions can be mapped to business locations. They can be used by the locations endpoints to filter locations by region id.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\RegionInputModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegionInputModel();
    $request->name = 'Kyle Bartoletti';

    $response = $sdk->companies->postSetupV1CompaniesRegions($request);

    if ($response->regionViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1Companies

<p>Use this endpoint to <b>Update</b> the authorized company information. Your client credentials resolve to a single company. The timezoneName must be expressed as an IANA Timezone, e.g., <i>America/New_York</i>. </p>
<p>For more information: <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Timezone IANA Wiki</a></p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CompanyUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyUpdateModel();
    $request->addressLine1 = 'numquam';
    $request->addressLine2 = 'impedit';
    $request->bookingWebhookUrl = 'explicabo';
    $request->city = 'North Jennyfer';
    $request->country = 'Bouvet Island (Bouvetoya)';
    $request->customerWebhookUrl = 'maiores';
    $request->disableEmailAndSmsNotifications = false;
    $request->email = 'Deja_Wiza@yahoo.com';
    $request->fax = 'aperiam';
    $request->name = 'Bertha Cruickshank';
    $request->notificationFromEmailAddress = 'maxime';
    $request->notificationFromName = 'dignissimos';
    $request->phone = '1-930-478-2026 x6326';
    $request->postalCode = '95844-5428';
    $request->registrationEmail = 'facilis';
    $request->reminderWebhookUrl = 'cum';
    $request->resourceWebhookUrl = 'commodi';
    $request->state = 'in';
    $request->timezoneName = 'corporis';
    $request->webhookSignatureHash = 'reiciendis';
    $request->website = 'assumenda';

    $response = $sdk->companies->putSetupV1Companies($request);

    if ($response->companyViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1CompaniesDomainsId

<p>Use this endpoint to <b>Update</b> an OnSchedJs domain for your authorized company. A valid <b>companyDomain id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1CompaniesDomainsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\CompanyDomainUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1CompaniesDomainsIdRequest();
    $request->companyDomainUpdateModel = new CompanyDomainUpdateModel();
    $request->companyDomainUpdateModel->domain = 'nemo';
    $request->id = 'e60b375e-d4f6-4fbe-a41f-33317fe35b60';

    $response = $sdk->companies->putSetupV1CompaniesDomainsId($request);

    if ($response->companyDomainViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSetupV1CompaniesRegionsId

<p>Use this endpoint to <b>Update</b> a region object. A valid <b>region id</b> is required.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSetupV1CompaniesRegionsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionUpdateModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSetupV1CompaniesRegionsIdRequest();
    $request->regionUpdateModel = new RegionUpdateModel();
    $request->regionUpdateModel->name = 'Randolph Bruen';
    $request->id = '426555ba-3c28-4744-ad53-b88f3a8d8f5c';

    $response = $sdk->companies->putSetupV1CompaniesRegionsId($request);

    if ($response->regionViewModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
