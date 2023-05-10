# team

## Overview

Team is a group of users under a given name. For the purposes of identification and visualisation, the team object has its own properties (e.g. logo), the most important of which is the `members`, which contains the user objects of the team.

### Available Operations

* [getTeamTeamname](#getteamteamname) - Get a Team

## getTeamTeamname

Use this endpoint to generate a random group of users. The team is generated in a deterministic way, on the basis of the team name given as the path parameter.
In the case of identical team names, the endpoint will generate the same team object. The properties of the generated team object are randomly generated on the basis of the team name.
In lack of a team name, all calls generate a different team object to the randomly generated team name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTeamTeamnameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTeamTeamnameRequest();
    $request->teamname = 'odit';

    $response = $sdk->team->getTeamTeamname($request);

    if ($response->getTeamTeamname200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
