# SDK

## Overview

Self Service Developer API documentation and demo.

##Getting Started

You will need an API access profile user and password in order to access search endpoints.
Your access profile user and password is used for authenticating all requests to our search API. 
You MUST pass the user and password each time you perform a search request.

### Available Operations

* [search](#search) - Search
* [postAddressAutocomplete](#postaddressautocomplete) - Search
* [postContactEnrich](#postcontactenrich) - Search
* [postEmailEnrich](#postemailenrich) - Search
* [postPhoneEnrich](#postphoneenrich) - Search

## search

###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIIDVerification

2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street, Unit 102",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SearchRequestBodyAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchRequest();
    $request->requestBody = new SearchRequestBody();
    $request->requestBody->address = new SearchRequestBodyAddress();
    $request->requestBody->address->addressLine1 = 'tempora';
    $request->requestBody->address->addressLine2 = 'suscipit';
    $request->requestBody->age = 4776.65;
    $request->requestBody->dob = 'minus';
    $request->requestBody->email = 'Junior.Kshlerin@hotmail.com';
    $request->requestBody->firstName = 'Tianna';
    $request->requestBody->lastName = 'Smith';
    $request->requestBody->middleName = 'ab';
    $request->requestBody->phoneNumber = 'quis';
    $request->galaxyApName = 'veritatis';
    $request->galaxyApPassword = 'deserunt';
    $request->galaxySearchType = 'perferendis';

    $response = $sdk->sdk->search($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddressAutocomplete

###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIAddressAutoComplete

2.  Add search criteria to your request.
    ~~~html
            {
                "Input":"1821 Q"
            }
    ~~~

3.  Submit your search

The JSON request should have parts of the address.

+ <code>Input</code> = null (optional, string) ... address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAddressAutocompleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAddressAutocompleteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAddressAutocompleteRequest();
    $request->requestBody = new PostAddressAutocompleteRequestBody();
    $request->requestBody->input = 'ipsam';
    $request->galaxyApName = 'repellendus';
    $request->galaxyApPassword = 'sapiente';
    $request->galaxySearchType = 'quo';

    $response = $sdk->sdk->postAddressAutocomplete($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContactEnrich

###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIContactEnrich

2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContactEnrichRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostContactEnrichRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostContactEnrichRequestBodyAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContactEnrichRequest();
    $request->requestBody = new PostContactEnrichRequestBody();
    $request->requestBody->address = new PostContactEnrichRequestBodyAddress();
    $request->requestBody->address->addressLine1 = 'odit';
    $request->requestBody->address->addressLine2 = 'at';
    $request->requestBody->age = 8700.88;
    $request->requestBody->dob = 'maiores';
    $request->requestBody->email = 'Pinkie_Schmidt@yahoo.com';
    $request->requestBody->firstName = 'Osborne';
    $request->requestBody->lastName = 'Parisian';
    $request->requestBody->middleName = 'dicta';
    $request->requestBody->phoneNumber = 'nam';
    $request->galaxyApName = 'officia';
    $request->galaxyApPassword = 'occaecati';
    $request->galaxySearchType = 'fugit';

    $response = $sdk->sdk->postContactEnrich($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEmailEnrich

###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*

Perform a search:

1. Add your Access Profile username and password to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIEmailID

2.  Add search criteria to your request.
    ~~~html
            {
                "Email":"johnsmith@somedomain"
            }
    ~~~

3.  Submit your search

The JSON request should have an email.

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostEmailEnrichRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostEmailEnrichRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostEmailEnrichRequest();
    $request->requestBody = new PostEmailEnrichRequestBody();
    $request->requestBody->email = 'Tyrel.Rosenbaum@yahoo.com';
    $request->galaxyApName = 'commodi';
    $request->galaxyApPassword = 'molestiae';
    $request->galaxySearchType = 'modi';

    $response = $sdk->sdk->postEmailEnrich($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPhoneEnrich

###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPICallerID

2.  Add search criteria to your request.
    ~~~html
            {
                "Phone":"(123) 456-7890"
            }
    ~~~

3.  Submit your search

The JSON request should have a phone number.

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostPhoneEnrichRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostPhoneEnrichRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostPhoneEnrichRequest();
    $request->requestBody = new PostPhoneEnrichRequestBody();
    $request->requestBody->phone = '1-874-351-0361';
    $request->galaxyApName = 'iste';
    $request->galaxyApPassword = 'dolor';
    $request->galaxySearchType = 'natus';

    $response = $sdk->sdk->postPhoneEnrich($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
