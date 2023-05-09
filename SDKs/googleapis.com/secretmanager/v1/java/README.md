# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.SecretmanagerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SecretmanagerProjectsLocationsListRequest req = new SecretmanagerProjectsLocationsListRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "nulla";
                filter = "corrupti";
                key = "illum";
                oauthToken = "vel";
                pageSize = 623564L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "suscipit";
                uploadType = "iure";
                uploadProtocol = "magnam";
            }};            

            SecretmanagerProjectsLocationsListResponse res = sdk.projects.secretmanagerProjectsLocationsList(req, new SecretmanagerProjectsLocationsListSecurity("debitis", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [secretmanagerProjectsLocationsList](docs/projects/README.md#secretmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [secretmanagerProjectsSecretsAddVersion](docs/projects/README.md#secretmanagerprojectssecretsaddversion) - Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
* [secretmanagerProjectsSecretsCreate](docs/projects/README.md#secretmanagerprojectssecretscreate) - Creates a new Secret containing no SecretVersions.
* [secretmanagerProjectsSecretsDelete](docs/projects/README.md#secretmanagerprojectssecretsdelete) - Deletes a Secret.
* [secretmanagerProjectsSecretsGetIamPolicy](docs/projects/README.md#secretmanagerprojectssecretsgetiampolicy) - Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
* [secretmanagerProjectsSecretsList](docs/projects/README.md#secretmanagerprojectssecretslist) - Lists Secrets.
* [secretmanagerProjectsSecretsPatch](docs/projects/README.md#secretmanagerprojectssecretspatch) - Updates metadata of an existing Secret.
* [secretmanagerProjectsSecretsSetIamPolicy](docs/projects/README.md#secretmanagerprojectssecretssetiampolicy) - Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
* [secretmanagerProjectsSecretsTestIamPermissions](docs/projects/README.md#secretmanagerprojectssecretstestiampermissions) - Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [secretmanagerProjectsSecretsVersionsAccess](docs/projects/README.md#secretmanagerprojectssecretsversionsaccess) - Accesses a SecretVersion. This call returns the secret data. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* [secretmanagerProjectsSecretsVersionsDestroy](docs/projects/README.md#secretmanagerprojectssecretsversionsdestroy) - Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
* [secretmanagerProjectsSecretsVersionsDisable](docs/projects/README.md#secretmanagerprojectssecretsversionsdisable) - Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
* [secretmanagerProjectsSecretsVersionsEnable](docs/projects/README.md#secretmanagerprojectssecretsversionsenable) - Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
* [secretmanagerProjectsSecretsVersionsGet](docs/projects/README.md#secretmanagerprojectssecretsversionsget) - Gets metadata for a SecretVersion. `projects/*/secrets/*/versions/latest` is an alias to the most recently created SecretVersion.
* [secretmanagerProjectsSecretsVersionsList](docs/projects/README.md#secretmanagerprojectssecretsversionslist) - Lists SecretVersions. This call does not return secret data.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
