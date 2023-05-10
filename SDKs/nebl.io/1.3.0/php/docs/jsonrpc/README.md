# jsonRpc

### Available Operations

* [jsonRpc](#jsonrpc) - Send a JSON-RPC call to a localhost neblio-Qt or nebliod node

## jsonRpc

Call any Neblio RPC command from the Neblio API libraries. Useful for signing transactions with a local node and other functions. Will not work from a browser due to CORS restrictions. Requires a node to be running locally at 127.0.0.1

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RpcRequest;
use \OpenAPI\OpenAPI\Models\Operations\JsonRpcSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RpcRequest();
    $request->id = 'neblio-apis';
    $request->jsonrpc = '1.0';
    $request->method = 'getstakinginfo';
    $request->params = [
        'natus',
        'sed',
    ];

    $requestSecurity = new JsonRpcSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->jsonRpc->jsonRpc($request, $requestSecurity);

    if ($response->rpcResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
