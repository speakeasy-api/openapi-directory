# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [CreateAccountConfig](#createaccountconfig) - Create a config for an Account.
* [CreateAccountSecret](#createaccountsecret) - Create a secret for an Account.
* [CreateDeviceConfig](#createdeviceconfig) - Create a config for a Microvisor Device.
* [CreateDeviceSecret](#createdevicesecret) - Create a secret for a Microvisor Device.
* [DeleteAccountConfig](#deleteaccountconfig) - Delete a config for an Account.
* [DeleteAccountSecret](#deleteaccountsecret) - Delete a secret for an Account.
* [DeleteApp](#deleteapp) - Delete a specific App.
* [DeleteDeviceConfig](#deletedeviceconfig) - Delete a config for a Microvisor Device.
* [DeleteDeviceSecret](#deletedevicesecret) - Delete a secret for a Microvisor Device.
* [FetchAccountConfig](#fetchaccountconfig) - Retrieve a Config for an Account.
* [FetchAccountSecret](#fetchaccountsecret) - Retrieve a Secret for an Account.
* [FetchApp](#fetchapp) - Fetch a specific App.
* [FetchAppManifest](#fetchappmanifest) - Retrieve the Manifest for an App.
* [FetchDevice](#fetchdevice) - Fetch a specific Device.
* [FetchDeviceConfig](#fetchdeviceconfig) - Retrieve a Config for a Device.
* [FetchDeviceSecret](#fetchdevicesecret) - Retrieve a Secret for a Device.
* [ListAccountConfig](#listaccountconfig) - Retrieve a list of all Configs for an Account.
* [ListAccountSecret](#listaccountsecret) - Retrieve a list of all Secrets for an Account.
* [ListApp](#listapp) - Retrieve a list of all Apps for an Account.
* [ListDevice](#listdevice) - Retrieve a list of all Devices registered with the Account.
* [ListDeviceConfig](#listdeviceconfig) - Retrieve a list of all Configs for a Device.
* [ListDeviceSecret](#listdevicesecret) - Retrieve a list of all Secrets for a Device.
* [UpdateAccountConfig](#updateaccountconfig) - Update a config for an Account.
* [UpdateAccountSecret](#updateaccountsecret) - Update a secret for an Account.
* [UpdateDevice](#updatedevice) - Update a specific Device.
* [UpdateDeviceConfig](#updatedeviceconfig) - Update a config for a Microvisor Device.
* [UpdateDeviceSecret](#updatedevicesecret) - Update a secret for a Microvisor Device.

## CreateAccountConfig

Create a config for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateAccountConfig(ctx, operations.CreateAccountConfigCreateAccountConfigRequest{
        Key: "distinctio",
        Value: "quibusdam",
    }, operations.CreateAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountConfig != nil {
        // handle response
    }
}
```

## CreateAccountSecret

Create a secret for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateAccountSecret(ctx, operations.CreateAccountSecretCreateAccountSecretRequest{
        Key: "unde",
        Value: "nulla",
    }, operations.CreateAccountSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountSecret != nil {
        // handle response
    }
}
```

## CreateDeviceConfig

Create a config for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeviceConfig(ctx, operations.CreateDeviceConfigRequest{
        DeviceSid: "corrupti",
        RequestBody: &operations.CreateDeviceConfigCreateDeviceConfigRequest{
            Key: "illum",
            Value: "vel",
        },
    }, operations.CreateDeviceConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceConfig != nil {
        // handle response
    }
}
```

## CreateDeviceSecret

Create a secret for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.CreateDeviceSecret(ctx, operations.CreateDeviceSecretRequest{
        DeviceSid: "error",
        RequestBody: &operations.CreateDeviceSecretCreateDeviceSecretRequest{
            Key: "deserunt",
            Value: "suscipit",
        },
    }, operations.CreateDeviceSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceSecret != nil {
        // handle response
    }
}
```

## DeleteAccountConfig

Delete a config for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteAccountConfig(ctx, operations.DeleteAccountConfigRequest{
        Key: "iure",
    }, operations.DeleteAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAccountSecret

Delete a secret for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteAccountSecret(ctx, operations.DeleteAccountSecretRequest{
        Key: "magnam",
    }, operations.DeleteAccountSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteApp

Delete a specific App.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteApp(ctx, operations.DeleteAppRequest{
        Sid: "debitis",
    }, operations.DeleteAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeviceConfig

Delete a config for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeviceConfig(ctx, operations.DeleteDeviceConfigRequest{
        DeviceSid: "ipsa",
        Key: "delectus",
    }, operations.DeleteDeviceConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteDeviceSecret

Delete a secret for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteDeviceSecret(ctx, operations.DeleteDeviceSecretRequest{
        DeviceSid: "tempora",
        Key: "suscipit",
    }, operations.DeleteDeviceSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## FetchAccountConfig

Retrieve a Config for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchAccountConfig(ctx, operations.FetchAccountConfigRequest{
        Key: "molestiae",
    }, operations.FetchAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountConfig != nil {
        // handle response
    }
}
```

## FetchAccountSecret

Retrieve a Secret for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchAccountSecret(ctx, operations.FetchAccountSecretRequest{
        Key: "minus",
    }, operations.FetchAccountSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountSecret != nil {
        // handle response
    }
}
```

## FetchApp

Fetch a specific App.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchApp(ctx, operations.FetchAppRequest{
        Sid: "placeat",
    }, operations.FetchAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1App != nil {
        // handle response
    }
}
```

## FetchAppManifest

Retrieve the Manifest for an App.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchAppManifest(ctx, operations.FetchAppManifestRequest{
        AppSid: "voluptatum",
    }, operations.FetchAppManifestSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AppAppManifest != nil {
        // handle response
    }
}
```

## FetchDevice

Fetch a specific Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDevice(ctx, operations.FetchDeviceRequest{
        Sid: "iusto",
    }, operations.FetchDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1Device != nil {
        // handle response
    }
}
```

## FetchDeviceConfig

Retrieve a Config for a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeviceConfig(ctx, operations.FetchDeviceConfigRequest{
        DeviceSid: "excepturi",
        Key: "nisi",
    }, operations.FetchDeviceConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceConfig != nil {
        // handle response
    }
}
```

## FetchDeviceSecret

Retrieve a Secret for a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.FetchDeviceSecret(ctx, operations.FetchDeviceSecretRequest{
        DeviceSid: "recusandae",
        Key: "temporibus",
    }, operations.FetchDeviceSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceSecret != nil {
        // handle response
    }
}
```

## ListAccountConfig

Retrieve a list of all Configs for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListAccountConfig(ctx, operations.ListAccountConfigRequest{
        Page: sdk.Int64(71036),
        PageSize: sdk.Int64(337396),
        PageToken: sdk.String("veritatis"),
    }, operations.ListAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountConfigResponse != nil {
        // handle response
    }
}
```

## ListAccountSecret

Retrieve a list of all Secrets for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListAccountSecret(ctx, operations.ListAccountSecretRequest{
        Page: sdk.Int64(648172),
        PageSize: sdk.Int64(20218),
        PageToken: sdk.String("ipsam"),
    }, operations.ListAccountSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountSecretResponse != nil {
        // handle response
    }
}
```

## ListApp

Retrieve a list of all Apps for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListApp(ctx, operations.ListAppRequest{
        Page: sdk.Int64(832620),
        PageSize: sdk.Int64(957156),
        PageToken: sdk.String("quo"),
    }, operations.ListAppSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppResponse != nil {
        // handle response
    }
}
```

## ListDevice

Retrieve a list of all Devices registered with the Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDevice(ctx, operations.ListDeviceRequest{
        Page: sdk.Int64(140350),
        PageSize: sdk.Int64(870013),
        PageToken: sdk.String("at"),
    }, operations.ListDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceResponse != nil {
        // handle response
    }
}
```

## ListDeviceConfig

Retrieve a list of all Configs for a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeviceConfig(ctx, operations.ListDeviceConfigRequest{
        DeviceSid: "maiores",
        Page: sdk.Int64(473608),
        PageSize: sdk.Int64(799159),
        PageToken: sdk.String("quod"),
    }, operations.ListDeviceConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceConfigResponse != nil {
        // handle response
    }
}
```

## ListDeviceSecret

Retrieve a list of all Secrets for a Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.ListDeviceSecret(ctx, operations.ListDeviceSecretRequest{
        DeviceSid: "esse",
        Page: sdk.Int64(520478),
        PageSize: sdk.Int64(780529),
        PageToken: sdk.String("dolorum"),
    }, operations.ListDeviceSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDeviceSecretResponse != nil {
        // handle response
    }
}
```

## UpdateAccountConfig

Update a config for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateAccountConfig(ctx, operations.UpdateAccountConfigRequest{
        Key: "dicta",
        RequestBody: &operations.UpdateAccountConfigUpdateAccountConfigRequest{
            Value: "nam",
        },
    }, operations.UpdateAccountConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountConfig != nil {
        // handle response
    }
}
```

## UpdateAccountSecret

Update a secret for an Account.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateAccountSecret(ctx, operations.UpdateAccountSecretRequest{
        Key: "officia",
        RequestBody: &operations.UpdateAccountSecretUpdateAccountSecretRequest{
            Value: "occaecati",
        },
    }, operations.UpdateAccountSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1AccountSecret != nil {
        // handle response
    }
}
```

## UpdateDevice

Update a specific Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDevice(ctx, operations.UpdateDeviceRequest{
        RequestBody: &operations.UpdateDeviceUpdateDeviceRequest{
            LoggingEnabled: sdk.Bool(false),
            TargetApp: sdk.String("fugit"),
            UniqueName: sdk.String("deleniti"),
        },
        Sid: "hic",
    }, operations.UpdateDeviceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1Device != nil {
        // handle response
    }
}
```

## UpdateDeviceConfig

Update a config for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeviceConfig(ctx, operations.UpdateDeviceConfigRequest{
        DeviceSid: "optio",
        Key: "totam",
        RequestBody: &operations.UpdateDeviceConfigUpdateDeviceConfigRequest{
            Value: "beatae",
        },
    }, operations.UpdateDeviceConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceConfig != nil {
        // handle response
    }
}
```

## UpdateDeviceSecret

Update a secret for a Microvisor Device.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.UpdateDeviceSecret(ctx, operations.UpdateDeviceSecretRequest{
        DeviceSid: "commodi",
        Key: "molestiae",
        RequestBody: &operations.UpdateDeviceSecretUpdateDeviceSecretRequest{
            Value: "modi",
        },
    }, operations.UpdateDeviceSecretSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MicrovisorV1DeviceDeviceSecret != nil {
        // handle response
    }
}
```
