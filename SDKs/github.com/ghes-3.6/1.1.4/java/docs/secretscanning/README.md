# secretScanning

## Overview

Retrieve secret scanning alerts from a repository.

### Available Operations

* [secretScanningGetAlert](#secretscanninggetalert) - Get a secret scanning alert
* [secretScanningListAlertsForEnterprise](#secretscanninglistalertsforenterprise) - List secret scanning alerts for an enterprise
* [secretScanningListAlertsForOrg](#secretscanninglistalertsfororg) - List secret scanning alerts for an organization
* [secretScanningListAlertsForRepo](#secretscanninglistalertsforrepo) - List secret scanning alerts for a repository
* [secretScanningListLocationsForAlert](#secretscanninglistlocationsforalert) - List locations for a secret scanning alert
* [secretScanningUpdateAlert](#secretscanningupdatealert) - Update a secret scanning alert

## secretScanningGetAlert

Gets a single secret scanning alert detected in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#get-a-secret-scanning-alert>

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

            SecretScanningGetAlertRequest req = new SecretScanningGetAlertRequest(769047L, "aliquam", "dolorum");            

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

## secretScanningListAlertsForEnterprise

Lists secret scanning alerts for eligible repositories in an enterprise, from newest to oldest.
To use this endpoint, you must be a member of the enterprise, and you must use an access token with the `repo` scope or `security_events` scope. Alerts are only returned for organizations in the enterprise for which you are an organization owner or a [security manager](https://docs.github.com/enterprise-server@3.6/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization).

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-enterprise>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForEnterpriseRequest;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForEnterpriseResponse;
import org.openapis.openapi.models.shared.DirectionEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertSortEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListAlertsForEnterpriseRequest req = new SecretScanningListAlertsForEnterpriseRequest("deserunt") {{
                after = "ad";
                before = "reiciendis";
                direction = DirectionEnum.ASC;
                perPage = 785555L;
                resolution = "laborum";
                secretType = "nobis";
                sort = SecretScanningAlertSortEnum.UPDATED;
                state = SecretScanningAlertStateEnum.RESOLVED;
            }};            

            SecretScanningListAlertsForEnterpriseResponse res = sdk.secretScanning.secretScanningListAlertsForEnterprise(req);

            if (res.organizationSecretScanningAlerts != null) {
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
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-an-organization>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForOrgRequest;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForOrgResponse;
import org.openapis.openapi.models.shared.DirectionEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertSortEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListAlertsForOrgRequest req = new SecretScanningListAlertsForOrgRequest("aut") {{
                direction = DirectionEnum.ASC;
                page = 642804L;
                perPage = 584640L;
                resolution = "reprehenderit";
                secretType = "quia";
                sort = SecretScanningAlertSortEnum.UPDATED;
                state = SecretScanningAlertStateEnum.OPEN;
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

Lists secret scanning alerts for an eligible repository, from newest to oldest.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-secret-scanning-alerts-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForRepoRequest;
import org.openapis.openapi.models.operations.SecretScanningListAlertsForRepoResponse;
import org.openapis.openapi.models.shared.DirectionEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertSortEnum;
import org.openapis.openapi.models.shared.SecretScanningAlertStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretScanningListAlertsForRepoRequest req = new SecretScanningListAlertsForRepoRequest("ad", "nisi") {{
                direction = DirectionEnum.ASC;
                page = 154130L;
                perPage = 514767L;
                resolution = "sed";
                secretType = "odit";
                sort = SecretScanningAlertSortEnum.CREATED;
                state = SecretScanningAlertStateEnum.RESOLVED;
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

Lists all locations for a given secret scanning alert for an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` read permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#list-locations-for-a-secret-scanning-alert>

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

            SecretScanningListLocationsForAlertRequest req = new SecretScanningListLocationsForAlertRequest(176935L, "repellendus", "nesciunt") {{
                page = 57909L;
                perPage = 575139L;
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

Updates the status of a secret scanning alert in an eligible repository.
To use this endpoint, you must be an administrator for the repository or for the organization that owns the repository, and you must use a personal access token with the `repo` scope or `security_events` scope.
For public repositories, you may instead use the `public_repo` scope.

GitHub Apps must have the `secret_scanning_alerts` write permission to use this endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.6/rest/reference/secret-scanning#update-a-secret-scanning-alert>

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
                                resolution = SecretScanningAlertResolutionEnum.WONT_FIX;
                            }};, 38044L, "distinctio", "sapiente");            

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
