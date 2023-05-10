# SDK

### Available Operations

* [premiumNews](#premiumnews) - Premium News
* [premiumNewsByDate](#premiumnewsbydate) - Premium News by Date
* [premiumNewsByPlayer](#premiumnewsbyplayer) - Premium News by Player
* [premiumNewsByTeam](#premiumnewsbyteam) - Premium News by Team

## premiumNews

Premium News

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PremiumNewsRequest();
    $request->format = PremiumNewsFormatEnum::JSON;

    $response = $sdk->sdk->premiumNews($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## premiumNewsByDate

Premium News by Date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByDateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByDateFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PremiumNewsByDateRequest();
    $request->date = 'distinctio';
    $request->format = PremiumNewsByDateFormatEnum::JSON;

    $response = $sdk->sdk->premiumNewsByDate($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## premiumNewsByPlayer

Premium News by Player

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByPlayerRequest;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByPlayerFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PremiumNewsByPlayerRequest();
    $request->format = PremiumNewsByPlayerFormatEnum::JSON;
    $request->playerid = 'nulla';

    $response = $sdk->sdk->premiumNewsByPlayer($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## premiumNewsByTeam

Premium News by Team

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\PremiumNewsByTeamFormatEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PremiumNewsByTeamRequest();
    $request->format = PremiumNewsByTeamFormatEnum::JSON;
    $request->team = 'illum';

    $response = $sdk->sdk->premiumNewsByTeam($request);

    if ($response->news !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
