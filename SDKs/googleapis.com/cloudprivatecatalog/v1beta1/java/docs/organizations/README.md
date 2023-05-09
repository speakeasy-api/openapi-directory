# organizations

### Available Operations

* [cloudprivatecatalogOrganizationsCatalogsSearch](#cloudprivatecatalogorganizationscatalogssearch) - Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [cloudprivatecatalogOrganizationsProductsSearch](#cloudprivatecatalogorganizationsproductssearch) - Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.
* [cloudprivatecatalogOrganizationsVersionsSearch](#cloudprivatecatalogorganizationsversionssearch) - Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

## cloudprivatecatalogOrganizationsCatalogsSearch

Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogOrganizationsCatalogsSearchRequest req = new CloudprivatecatalogOrganizationsCatalogsSearchRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                key = "voluptatum";
                oauthToken = "iusto";
                pageSize = 568045L;
                pageToken = "nisi";
                prettyPrint = false;
                query = "recusandae";
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            CloudprivatecatalogOrganizationsCatalogsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsCatalogsSearch(req, new CloudprivatecatalogOrganizationsCatalogsSearchSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogOrganizationsProductsSearch

Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsProductsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsProductsSearchResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsProductsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogOrganizationsProductsSearchRequest req = new CloudprivatecatalogOrganizationsProductsSearchRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                key = "at";
                oauthToken = "at";
                pageSize = 978619L;
                pageToken = "molestiae";
                prettyPrint = false;
                query = "quod";
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            CloudprivatecatalogOrganizationsProductsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsProductsSearch(req, new CloudprivatecatalogOrganizationsProductsSearchSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudprivatecatalogOrganizationsVersionsSearch

Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsVersionsSearchRequest;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsVersionsSearchResponse;
import org.openapis.openapi.models.operations.CloudprivatecatalogOrganizationsVersionsSearchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudprivatecatalogOrganizationsVersionsSearchRequest req = new CloudprivatecatalogOrganizationsVersionsSearchRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officia";
                alt = AltEnum.MEDIA;
                callback = "fugit";
                fields = "deleniti";
                key = "hic";
                oauthToken = "optio";
                pageSize = 521848L;
                pageToken = "beatae";
                prettyPrint = false;
                query = "commodi";
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            CloudprivatecatalogOrganizationsVersionsSearchResponse res = sdk.organizations.cloudprivatecatalogOrganizationsVersionsSearch(req, new CloudprivatecatalogOrganizationsVersionsSearchSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
