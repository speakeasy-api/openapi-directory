# authentication

## Overview

Authenticate KumpeApps users (required to get apiKey)

### Available Operations

* [~~appkeyPatch~~](#appkeypatch) - Compromise app key :warning: **Deprecated**
* [~~appkeyPost~~](#appkeypost) - Request app key :warning: **Deprecated**
* [~~appkeyPut~~](#appkeyput) - Deactivate app key :warning: **Deprecated**
* [authAppkeyPatch](#authappkeypatch) - Compromise app key
* [authAppkeyPost](#authappkeypost) - Request app key
* [authAppkeyPut](#authappkeyput) - Deactivate app key
* [authAuthkeyGet](#authauthkeyget) - Request auth key for user (login user)
* [authAuthkeyPatch](#authauthkeypatch) - Compromise auth key
* [authAuthkeyPost](#authauthkeypost) - Request auth key for user (login user)
* [authAuthkeyPut](#authauthkeyput) - Deactivate auth key (logout)
* [authVerifyotpGet](#authverifyotpget) - Verifies YubiKey OTP for authenticated user
* [~~authkeyGet~~](#authkeyget) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPatch~~](#authkeypatch) - Compromise auth key :warning: **Deprecated**
* [~~authkeyPost~~](#authkeypost) - Request auth key for user (login user) :warning: **Deprecated**
* [~~authkeyPut~~](#authkeyput) - Deactivate auth key (logout) :warning: **Deprecated**

## ~~appkeyPatch~~

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppkeyPatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppkeyPatchRequest();
    $request->appKey = 'numquam';
    $request->comments = 'commodi';

    $response = $sdk->authentication->appkeyPatch($request);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appkeyPost~~

Request a new app key by passing username and password for app account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppkeyPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppkeyPostRequest();
    $request->password = 'quam';
    $request->supportsYubikey = false;
    $request->username = 'Jarred.Frami';

    $response = $sdk->authentication->appkeyPost($request);

    if ($response->inlineResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~appkeyPut~~

Pass your app key to deactivate the key

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AppkeyPutRequest;
use \OpenAPI\OpenAPI\Models\Operations\AppkeyPutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppkeyPutRequest();
    $request->appKey = 'quis';

    $requestSecurity = new AppkeyPutSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->appkeyPut($request, $requestSecurity);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAppkeyPatch

Pass an app key to mark it as compromised. This may be submitted by the app owner or a concerned party that has optained the compromised app key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAppkeyPatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAppkeyPatchRequest();
    $request->appKey = 'vitae';
    $request->comments = 'laborum';

    $response = $sdk->authentication->authAppkeyPatch($request);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAppkeyPost

Request a new app key by passing username and password for app account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAppkeyPostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAppkeyPostRequest();
    $request->password = 'animi';
    $request->supportsYubikey = false;
    $request->username = 'Emilia.Conn94';

    $response = $sdk->authentication->authAppkeyPost($request);

    if ($response->inlineResponse201 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAppkeyPut

Pass your app key to deactivate the key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAppkeyPutRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthAppkeyPutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAppkeyPutRequest();
    $request->appKey = 'ipsam';

    $requestSecurity = new AuthAppkeyPutSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authAppkeyPut($request, $requestSecurity);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAuthkeyGet

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAuthkeyGetRequest();
    $request->deviceName = 'id';
    $request->identifierForVendor = 'possimus';
    $request->otp = 'aut';
    $request->password = 'quasi';
    $request->username = 'Lina.Smitham97';

    $requestSecurity = new AuthAuthkeyGetSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authAuthkeyGet($request, $requestSecurity);

    if ($response->inlineResponse2011 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAuthkeyPatch

Mark user auth key as compromised

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyPatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAuthkeyPatchRequest();
    $request->authKey = 'voluptatibus';
    $request->comments = 'vero';

    $response = $sdk->authentication->authAuthkeyPatch($request);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAuthkeyPost

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAuthkeyPostRequest();
    $request->otp = 'nihil';
    $request->password = 'praesentium';
    $request->username = 'Whitney.Bednar';

    $requestSecurity = new AuthAuthkeyPostSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authAuthkeyPost($request, $requestSecurity);

    if ($response->inlineResponse2011 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authAuthkeyPut

Deactivate auth key for user logging them out of your application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyPutRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthAuthkeyPutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthAuthkeyPutRequest();
    $request->authKey = 'cum';

    $requestSecurity = new AuthAuthkeyPutSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authAuthkeyPut($request, $requestSecurity);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## authVerifyotpGet

Verifies YubiKey OTP for authenticated user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthVerifyotpGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthVerifyotpGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthVerifyotpGetRequest();
    $request->otp = 'perferendis';

    $requestSecurity = new AuthVerifyotpGetSecurity();
    $requestSecurity->authKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authVerifyotpGet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~authkeyGet~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthkeyGetRequest();
    $request->otp = 'doloremque';
    $request->password = 'reprehenderit';
    $request->username = 'Easter35';

    $requestSecurity = new AuthkeyGetSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authkeyGet($request, $requestSecurity);

    if ($response->inlineResponse2011 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~authkeyPatch~~

Mark user auth key as compromised

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyPatchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthkeyPatchRequest();
    $request->authKey = 'dolore';
    $request->comments = 'iusto';

    $response = $sdk->authentication->authkeyPatch($request);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~authkeyPost~~

Obtain auth key for user that has provided their username and password to login to your app. (or to obtain an auth key for a script like IFTTT)

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyPostRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyPostSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthkeyPostRequest();
    $request->otp = 'dicta';
    $request->password = 'harum';
    $request->username = 'Emilie_Thompson';

    $requestSecurity = new AuthkeyPostSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authkeyPost($request, $requestSecurity);

    if ($response->inlineResponse2011 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~authkeyPut~~

Deactivate auth key for user logging them out of your application

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyPutRequest;
use \OpenAPI\OpenAPI\Models\Operations\AuthkeyPutSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AuthkeyPutRequest();
    $request->authKey = 'quae';

    $requestSecurity = new AuthkeyPutSecurity();
    $requestSecurity->appKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->authentication->authkeyPut($request, $requestSecurity);

    if ($response->inlineResponse202 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
