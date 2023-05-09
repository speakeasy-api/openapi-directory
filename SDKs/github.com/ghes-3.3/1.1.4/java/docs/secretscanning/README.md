# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForOrg](#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#get-a-secret-scanning-alert>

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

            SecretScanningGetAlertRequest req = new SecretScanningGetAlertRequest(196374L, "voluptatum", "sit");            

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

## secretScanningListAlertsForOrg

Lists secret scanning alerts for eligible repositories in an organization, from newest to oldest.
To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForOrgRequest;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForOrgResponse;
import org.openapis.openapi.models.shared.SecretScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListAlertsForOrgRequest req = new SecretScanningListAlertsForOrgRequest("rerum") {{
                page = 84178L;
                perPage = 949280L;
                resolution = "autem";
                secretType = "quidem";
                state = SecretScanningAlertStateEnum.RESOLVED;
            }};            

            SecretScanningListAlertsForOrgResponse res = sdk.secretScanning.secretScanningListAlertsForOrg(req);

            if (res.organizationSecretScanningAlerts != null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

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

            SecretScanningListAlertsForRepoRequest req = new SecretScanningListAlertsForRepoRequest("porro", "deserunt") {{
                page = 168926L;
                perPage = 471207L;
                resolution = "voluptas";
                secretType = "animi";
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

## secretScanningListLocationsForAlert

Lists all locations for a given secret scanning alert for a private repository. To use this endpoint, you must be an administrator for the repository or organization, and you must use an access token with the `repo` scope or `security_events` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListLocationsForAlertRequest;
import org.openapis.openapi.models.operations.SecretScanningListLocationsForAlertResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListLocationsForAlertRequest req = new SecretScanningListLocationsForAlertRequest(716L, "fuga", "aut") {{
                page = 295892L;
                perPage = 802734L;
            }};            

            SecretScanningListLocationsForAlertResponse res = sdk.secretScanning.secretScanningListLocationsForAlert(req);

            if (res.secretScanningLocations != null) {
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
<https://docs.github.com/enterprise-server@3.3/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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

            SecretScanningUpdateAlertRequest req = new SecretScanningUpdateAlertRequest(                new SecretScanningUpdateAlertRequestBody(SchemassecretScanningAlertStateEnum.OPEN) {{
                                resolution = SecretScanningAlertResolutionEnum.REVOKED;
                            }};, 355889L, "eligendi", "placeat");            

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
