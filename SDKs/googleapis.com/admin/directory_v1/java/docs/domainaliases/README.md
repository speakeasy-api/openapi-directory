# domainAliases

### Available Operations

* [directoryDomainAliasesDelete](#directorydomainaliasesdelete) - Deletes a domain Alias of the customer.
* [directoryDomainAliasesGet](#directorydomainaliasesget) - Retrieves a domain alias of the customer.
* [directoryDomainAliasesInsert](#directorydomainaliasesinsert) - Inserts a domain alias of the customer.
* [directoryDomainAliasesList](#directorydomainaliaseslist) - Lists the domain aliases of the customer.

## directoryDomainAliasesDelete

Deletes a domain Alias of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesDeleteRequest;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesDeleteResponse;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainAliasesDeleteRequest req = new DirectoryDomainAliasesDeleteRequest("culpa", "voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "officiis";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "pariatur";
                key = "debitis";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "alias";
                uploadType = "deleniti";
                uploadProtocol = "earum";
            }};            

            DirectoryDomainAliasesDeleteResponse res = sdk.domainAliases.directoryDomainAliasesDelete(req, new DirectoryDomainAliasesDeleteSecurity("ex", "sapiente") {{
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

## directoryDomainAliasesGet

Retrieves a domain alias of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesGetRequest;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesGetResponse;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesGetSecurity;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesGetSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainAliasesGetRequest req = new DirectoryDomainAliasesGetRequest("rem", "minus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "asperiores";
                alt = AltEnum.JSON;
                callback = "ullam";
                fields = "perferendis";
                key = "illum";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "quibusdam";
                uploadProtocol = "nam";
            }};            

            DirectoryDomainAliasesGetResponse res = sdk.domainAliases.directoryDomainAliasesGet(req, new DirectoryDomainAliasesGetSecurity() {{
                option1 = new DirectoryDomainAliasesGetSecurityOption1("ipsam", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domainAlias != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryDomainAliasesInsert

Inserts a domain alias of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesInsertRequest;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesInsertResponse;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DomainAlias;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainAliasesInsertRequest req = new DirectoryDomainAliasesInsertRequest("dolor") {{
                dollarXgafv = XgafvEnum.ONE;
                domainAlias = new DomainAlias() {{
                    creationTime = "inventore";
                    domainAliasName = "deleniti";
                    etag = "veritatis";
                    kind = "tempora";
                    parentDomainName = "dolor";
                    verified = false;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "sit";
                fields = "modi";
                key = "fugit";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "quae";
                uploadProtocol = "dolor";
            }};            

            DirectoryDomainAliasesInsertResponse res = sdk.domainAliases.directoryDomainAliasesInsert(req, new DirectoryDomainAliasesInsertSecurity("fugiat", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.domainAlias != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## directoryDomainAliasesList

Lists the domain aliases of the customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesListRequest;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesListResponse;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesListSecurity;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesListSecurityOption1;
import org.openapis.openapi.models.operations.DirectoryDomainAliasesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DirectoryDomainAliasesListRequest req = new DirectoryDomainAliasesListRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "impedit";
                fields = "officiis";
                key = "esse";
                oauthToken = "necessitatibus";
                parentDomainName = "sed";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "nesciunt";
                uploadProtocol = "expedita";
            }};            

            DirectoryDomainAliasesListResponse res = sdk.domainAliases.directoryDomainAliasesList(req, new DirectoryDomainAliasesListSecurity() {{
                option1 = new DirectoryDomainAliasesListSecurityOption1("eum", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.domainAliases != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
