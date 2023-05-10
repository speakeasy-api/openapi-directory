# beleg

## Overview

resources concerning a "Beleg"

### Available Operations

* [addBeleg](#addbeleg) - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* [createAbschluss](#createabschluss) - Generates an `Abschlussbeleg`.
* [getBeleg](#getbeleg) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* [getBelege](#getbelege) - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* [getBelegeBelegUuid](#getbelegebeleguuid) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

## addBeleg

Signs a receipt and stores it in the "Datenerfassungsprotokoll".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddBelegRequest;
use \OpenAPI\OpenAPI\Models\Shared\Belegdaten;
use \OpenAPI\OpenAPI\Models\Shared\Posten;
use \OpenAPI\OpenAPI\Models\Shared\PostenSatzEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rabatt;
use \OpenAPI\OpenAPI\Models\Shared\RabattSatzEnum;
use \OpenAPI\OpenAPI\Models\Shared\BelegdatenUnternehmenIDTypEnum;
use \OpenAPI\OpenAPI\Models\Shared\Zahlung;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddBelegRequest();
    $request->belegdaten = new Belegdaten();
    $request->belegdaten->externerBelegBelegkreis = 'corrupti';
    $request->belegdaten->externerBelegBezeichnung = 'provident';
    $request->belegdaten->externerBelegReferenz = 'distinctio';
    $request->belegdaten->kunde = 'quibusdam';
    $request->belegdaten->notizen = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->belegdaten->posten = [
        new Posten(),
        new Posten(),
    ];
    $request->belegdaten->rabatte = [
        new Rabatt(),
        new Rabatt(),
        new Rabatt(),
    ];
    $request->belegdaten->storno = false;
    $request->belegdaten->stornoBelegUUID = 'a674e0f4-67cc-4879-aed1-51a05dfc2ddf';
    $request->belegdaten->stornoText = 'molestiae';
    $request->belegdaten->training = false;
    $request->belegdaten->unternehmenAdresse1 = 'quod';
    $request->belegdaten->unternehmenAdresse2 = 'quod';
    $request->belegdaten->unternehmenFusszeile = 'esse';
    $request->belegdaten->unternehmenID = 'totam';
    $request->belegdaten->unternehmenIDTyp = BelegdatenUnternehmenIDTypEnum::GLN;
    $request->belegdaten->unternehmenKopfzeile = 'dolorum';
    $request->belegdaten->unternehmenName = 'dicta';
    $request->belegdaten->unternehmenOrt = 'nam';
    $request->belegdaten->unternehmenPLZ = 'officia';
    $request->belegdaten->zahlungen = [
        new Zahlung(),
        new Zahlung(),
        new Zahlung(),
    ];
    $request->belegUuid = 'fugit';
    $request->registrierkasseUuid = 'deleniti';

    $response = $sdk->beleg->addBeleg($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAbschluss

Generates an `Abschlussbeleg`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAbschlussRequest;
use \OpenAPI\OpenAPI\Models\Shared\Abschlussbelegdaten;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAbschlussRequest();
    $request->abschlussbelegdaten = new Abschlussbelegdaten();
    $request->abschlussbelegdaten->abschlussBeginnDatumUhrzeit = 'hic';
    $request->abschlussbelegdaten->abschlussEndeDatumUhrzeit = 'optio';
    $request->registrierkasseUuid = 'totam';

    $response = $sdk->beleg->createAbschluss($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBeleg

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBelegRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBelegRequest();
    $request->belegUuid = 'beatae';
    $request->registrierkasseUuid = 'commodi';

    $response = $sdk->beleg->getBeleg($request);

    if ($response->beleg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBelege

Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBelegeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBelegeFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBelegeOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBelegeRequest();
    $request->after = 'molestiae';
    $request->before = 'modi';
    $request->format = GetBelegeFormatEnum::EXPORT;
    $request->gte = 774234;
    $request->limit = 736918;
    $request->lte = 456150;
    $request->offset = 216550;
    $request->order = GetBelegeOrderEnum::DESC;
    $request->registrierkasseUuid = 'aspernatur';

    $response = $sdk->beleg->getBelege($request);

    if ($response->belege !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBelegeBelegUuid

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBelegeBelegUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBelegeBelegUuidRequest();
    $request->belegUuid = 'perferendis';

    $response = $sdk->beleg->getBelegeBelegUuid($request);

    if ($response->beleg !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
