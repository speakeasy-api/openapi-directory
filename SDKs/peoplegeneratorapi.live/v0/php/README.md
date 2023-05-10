# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->peoplegeneratorapiApplication->age();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [peoplegeneratorapiApplication](docs/peoplegeneratorapiapplication/README.md)

* [age](docs/peoplegeneratorapiapplication/README.md#age)
* [age1](docs/peoplegeneratorapiapplication/README.md#age1)
* [bloodtype](docs/peoplegeneratorapiapplication/README.md#bloodtype)
* [bloodtype1](docs/peoplegeneratorapiapplication/README.md#bloodtype1)
* [creditcardnumber](docs/peoplegeneratorapiapplication/README.md#creditcardnumber)
* [creditcardnumber1](docs/peoplegeneratorapiapplication/README.md#creditcardnumber1)
* [creditscore](docs/peoplegeneratorapiapplication/README.md#creditscore)
* [creditscore1](docs/peoplegeneratorapiapplication/README.md#creditscore1)
* [email](docs/peoplegeneratorapiapplication/README.md#email)
* [email1](docs/peoplegeneratorapiapplication/README.md#email1)
* [eyecolor](docs/peoplegeneratorapiapplication/README.md#eyecolor)
* [eyecolor1](docs/peoplegeneratorapiapplication/README.md#eyecolor1)
* [gender](docs/peoplegeneratorapiapplication/README.md#gender)
* [gender1](docs/peoplegeneratorapiapplication/README.md#gender1)
* [generateAddress](docs/peoplegeneratorapiapplication/README.md#generateaddress)
* [generateAddress1](docs/peoplegeneratorapiapplication/README.md#generateaddress1)
* [generateLifeStory](docs/peoplegeneratorapiapplication/README.md#generatelifestory)
* [generateLifeStory1](docs/peoplegeneratorapiapplication/README.md#generatelifestory1)
* [getCompressedPerson](docs/peoplegeneratorapiapplication/README.md#getcompressedperson)
* [getCompressedPerson1](docs/peoplegeneratorapiapplication/README.md#getcompressedperson1)
* [getPerson](docs/peoplegeneratorapiapplication/README.md#getperson)
* [getPerson1](docs/peoplegeneratorapiapplication/README.md#getperson1)
* [gpa](docs/peoplegeneratorapiapplication/README.md#gpa)
* [gpa1](docs/peoplegeneratorapiapplication/README.md#gpa1)
* [haschildren](docs/peoplegeneratorapiapplication/README.md#haschildren)
* [haschildren1](docs/peoplegeneratorapiapplication/README.md#haschildren1)
* [hasdegree](docs/peoplegeneratorapiapplication/README.md#hasdegree)
* [hasdegree1](docs/peoplegeneratorapiapplication/README.md#hasdegree1)
* [height](docs/peoplegeneratorapiapplication/README.md#height)
* [height1](docs/peoplegeneratorapiapplication/README.md#height1)
* [income](docs/peoplegeneratorapiapplication/README.md#income)
* [income1](docs/peoplegeneratorapiapplication/README.md#income1)
* [job](docs/peoplegeneratorapiapplication/README.md#job)
* [job1](docs/peoplegeneratorapiapplication/README.md#job1)
* [maritalstatus](docs/peoplegeneratorapiapplication/README.md#maritalstatus)
* [maritalstatus1](docs/peoplegeneratorapiapplication/README.md#maritalstatus1)
* [name](docs/peoplegeneratorapiapplication/README.md#name)
* [name1](docs/peoplegeneratorapiapplication/README.md#name1)
* [politicalLeaning](docs/peoplegeneratorapiapplication/README.md#politicalleaning)
* [politicalLeaning1](docs/peoplegeneratorapiapplication/README.md#politicalleaning1)
* [religion](docs/peoplegeneratorapiapplication/README.md#religion)
* [religion1](docs/peoplegeneratorapiapplication/README.md#religion1)
* [username](docs/peoplegeneratorapiapplication/README.md#username)
* [username1](docs/peoplegeneratorapiapplication/README.md#username1)
* [weight](docs/peoplegeneratorapiapplication/README.md#weight)
* [weight1](docs/peoplegeneratorapiapplication/README.md#weight1)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
