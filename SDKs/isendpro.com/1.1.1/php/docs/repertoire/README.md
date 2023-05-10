# repertoire

### Available Operations

* [repertoire](#repertoire) - Gestion repertoire (modification)
* [repertoireCrea](#repertoirecrea) - Gestion repertoire (creation)

## repertoire

Ajoute ou supprime une liste de numéros à un répertoire existant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\REPERTOIREmodifrequest;
use \OpenAPI\OpenAPI\Models\Shared\REPERTOIREmodifrequestRepertoireEditEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new REPERTOIREmodifrequest();
    $request->champ1 = [
        'odit',
        'at',
        'at',
        'maiores',
    ];
    $request->champ10 = [
        'quod',
        'quod',
    ];
    $request->champ11 = [
        'totam',
        'porro',
    ];
    $request->champ12 = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->champ13 = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->champ14 = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->champ15 = [
        'qui',
        'impedit',
    ];
    $request->champ16 = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->champ17 = [
        'perferendis',
    ];
    $request->champ18 = [
        'natus',
        'sed',
    ];
    $request->champ19 = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->champ2 = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->champ20 = [
        'iure',
        'saepe',
        'quidem',
    ];
    $request->champ21 = [
        'ipsa',
    ];
    $request->champ22 = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->champ23 = [
        'corporis',
    ];
    $request->champ24 = [
        'nobis',
    ];
    $request->champ25 = [
        'omnis',
        'nemo',
    ];
    $request->champ26 = [
        'excepturi',
        'accusantium',
    ];
    $request->champ27 = [
        'culpa',
        'doloribus',
    ];
    $request->champ3 = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->champ4 = [
        'repellat',
    ];
    $request->champ5 = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->champ6 = [
        'molestiae',
        'velit',
    ];
    $request->champ7 = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->champ8 = [
        'animi',
        'enim',
        'odit',
    ];
    $request->champ9 = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->keyid = 'possimus';
    $request->num = [
        'quasi',
    ];
    $request->repertoireEdit = REPERTOIREmodifrequestRepertoireEditEnum::DEL;
    $request->repertoireId = 'temporibus';

    $response = $sdk->repertoire->repertoire($request);

    if ($response->repertoirEmodifreponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## repertoireCrea

Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\REPERTOIREcreaterequest;
use \OpenAPI\OpenAPI\Models\Shared\REPERTOIREcreaterequestRepertoireEditEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new REPERTOIREcreaterequest();
    $request->keyid = 'laborum';
    $request->repertoireEdit = REPERTOIREcreaterequestRepertoireEditEnum::CREATE;
    $request->repertoireNom = 'quasi';

    $response = $sdk->repertoire->repertoireCrea($request);

    if ($response->repertoirEcreatereponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
