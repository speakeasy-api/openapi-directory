# domains

### Available Operations

* [directoryDomainsDelete](#directorydomainsdelete) - Deletes a domain of the customer.
* [directoryDomainsGet](#directorydomainsget) - Retrieves a domain of the customer.
* [directoryDomainsInsert](#directorydomainsinsert) - Inserts a domain of the customer.
* [directoryDomainsList](#directorydomainslist) - Lists the domains of the customer.

## directoryDomainsDelete

Deletes a domain of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainsDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryDomainsDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryDomainsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainsDeleteRequest req = new DirectoryDomainsDeleteRequest("voluptatum", "magnam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ab";
                alt = AltEnum.PROTO;
                callback = "autem";
                fields = "nobis";
                key = "laboriosam";
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "voluptatem";
                uploadProtocol = "exercitationem";
            }};            

            DirectoryDomainsDeleteResponse res = sdk.domains.directoryDomainsDelete(req, new DirectoryDomainsDeleteSecurity("necessitatibus", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryDomainsGet

Retrieves a domain of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainsGetRequest;
import org.openapis.openapi.models.operations.DirectoryDomainsGetResponse;
import org.openapis.openapi.models.operations.DirectoryDomainsGetSecurity;
import org.openapis.openapi.models.operations.DirectoryDomainsGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryDomainsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainsGetRequest req = new DirectoryDomainsGetRequest("nisi", "at") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "est";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "doloribus";
                key = "repudiandae";
                oauthToken = "optio";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "nemo";
                uploadProtocol = "voluptate";
            }};            

            DirectoryDomainsGetResponse res = sdk.domains.directoryDomainsGet(req, new DirectoryDomainsGetSecurity() {{
                option1 = new DirectoryDomainsGetSecurityOption1("blanditiis", "officia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domains != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryDomainsInsert

Inserts a domain of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainsInsertRequest;
import org.openapis.openapi.models.operations.DirectoryDomainsInsertResponse;
import org.openapis.openapi.models.operations.DirectoryDomainsInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainAlias;
import org.openapis.openapi.models.shared.Domains;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainsInsertRequest req = new DirectoryDomainsInsertRequest("voluptas") {{
                dollarXgafv = XgafvEnum.ONE;
                domains = new Domains() {{
                    creationTime = "nemo";
                    domainAliases = new org.openapis.openapi.models.shared.DomainAlias[]{{
                        add(new DomainAlias() {{
                            creationTime = "eius";
                            domainAliasName = "aspernatur";
                            etag = "ducimus";
                            kind = "nesciunt";
                            parentDomainName = "fuga";
                            verified = false;
                        }}),
                        add(new DomainAlias() {{
                            creationTime = "laudantium";
                            domainAliasName = "incidunt";
                            etag = "quasi";
                            kind = "rem";
                            parentDomainName = "fugiat";
                            verified = false;
                        }}),
                        add(new DomainAlias() {{
                            creationTime = "dicta";
                            domainAliasName = "nisi";
                            etag = "consequuntur";
                            kind = "consectetur";
                            parentDomainName = "aperiam";
                            verified = false;
                        }}),
                    }};
                    domainName = "cupiditate";
                    etag = "reiciendis";
                    isPrimary = false;
                    kind = "soluta";
                    verified = false;
                }};;
                accessToken = "alias";
                alt = AltEnum.MEDIA;
                callback = "eos";
                fields = "occaecati";
                key = "iste";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "fuga";
                uploadProtocol = "accusamus";
            }};            

            DirectoryDomainsInsertResponse res = sdk.domains.directoryDomainsInsert(req, new DirectoryDomainsInsertSecurity("voluptatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.domains != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryDomainsList

Lists the domains of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainsListRequest;
import org.openapis.openapi.models.operations.DirectoryDomainsListResponse;
import org.openapis.openapi.models.operations.DirectoryDomainsListSecurity;
import org.openapis.openapi.models.operations.DirectoryDomainsListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryDomainsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainsListRequest req = new DirectoryDomainsListRequest("omnis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "maxime";
                fields = "magnam";
                key = "temporibus";
                oauthToken = "quos";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "itaque";
                uploadProtocol = "commodi";
            }};            

            DirectoryDomainsListResponse res = sdk.domains.directoryDomainsList(req, new DirectoryDomainsListSecurity() {{
                option1 = new DirectoryDomainsListSecurityOption1("totam", "earum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domains2 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
