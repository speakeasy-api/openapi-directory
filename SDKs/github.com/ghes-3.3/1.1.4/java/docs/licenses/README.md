# licenses

## Overview

View various OSS licenses.

### Available Operations

* [licensesGet](#licensesget) - Get a license
* [licensesGetAllCommonlyUsed](#licensesgetallcommonlyused) - Get all commonly used licenses
* [licensesGetForRepo](#licensesgetforrepo) - Get the license for a repository

## licensesGet

Get a license

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/licenses#get-a-license>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensesGetRequest;
import org.openapis.openapi.models.operations.LicensesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensesGetRequest req = new LicensesGetRequest("esse");            

            LicensesGetResponse res = sdk.licenses.licensesGet(req);

            if (res.license != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensesGetAllCommonlyUsed

Get all commonly used licenses

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/licenses#get-all-commonly-used-licenses>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensesGetAllCommonlyUsedRequest;
import org.openapis.openapi.models.operations.LicensesGetAllCommonlyUsedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensesGetAllCommonlyUsedRequest req = new LicensesGetAllCommonlyUsedRequest() {{
                featured = false;
                page = 403793L;
                perPage = 235263L;
            }};            

            LicensesGetAllCommonlyUsedResponse res = sdk.licenses.licensesGetAllCommonlyUsed(req);

            if (res.licenseSimples != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensesGetForRepo

This method returns the contents of the repository's license file, if one is detected.

Similar to [Get repository content](https://docs.github.com/enterprise-server@3.3/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/enterprise-server@3.3/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.

API method documentation
<https://docs.github.com/enterprise-server@3.3/rest/reference/licenses/#get-the-license-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensesGetForRepoRequest;
import org.openapis.openapi.models.operations.LicensesGetForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LicensesGetForRepoRequest req = new LicensesGetForRepoRequest("aliquid", "ipsa");            

            LicensesGetForRepoResponse res = sdk.licenses.licensesGetForRepo(req);

            if (res.licenseContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
