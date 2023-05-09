# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#get-a-secret-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningGetAlertRequest;
import org.openapis.openapi.models.operations.SecretScanningGetAlertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningGetAlertRequest req = new SecretScanningGetAlertRequest(823472L, "neque", "pariatur");            

            SecretScanningGetAlertResponse res = sdk.secretScanning.secretScanningGetAlert(req);

            if (res.secretScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretScanningListAlertsForRepo

Lists secret scanning alerts for a private repository, from newest to oldest. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForRepoRequest;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForRepoResponse;
import org.openapis.openapi.models.shared.SecretScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListAlertsForRepoRequest req = new SecretScanningListAlertsForRepoRequest("vel", "sapiente") {{
                page = 652515L;
                perPage = 65121L;
                resolution = "quos";
                secretType = "aperiam";
                state = SecretScanningAlertStateEnum.OPEN;
            }};            

            SecretScanningListAlertsForRepoResponse res = sdk.secretScanning.secretScanningListAlertsForRepo(req);

            if (res.secretScanningAlerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## secretScanningUpdateAlert

Updates the status of a secret scanning alert in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.2/rest/reference/secret-scanning#update-a-secret-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningUpdateAlertRequest;
import org.openapis.openapi.models.operations.SecretScanningUpdateAlertRequestBody;
import org.openapis.openapi.models.operations.SecretScanningUpdateAlertResponse;
import org.openapis.openapi.models.shared.SchemassecretScanningAlertStateEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertResolutionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningUpdateAlertRequest req = new SecretScanningUpdateAlertRequest(                new SecretScanningUpdateAlertRequestBody(SchemassecretScanningAlertStateEnum.RESOLVED) {{
                                resolution = SecretScanningAlertResolutionEnum.FALSE_POSITIVE;
                            }};, 305047L, "quisquam", "quas");            

            SecretScanningUpdateAlertResponse res = sdk.secretScanning.secretScanningUpdateAlert(req);

            if (res.secretScanningAlert != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
