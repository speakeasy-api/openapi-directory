# rootIdpAuthDomain

## Overview

IdP authentication domains.

### Available Operations

* [createIdProviderAuthDomain](#createidproviderauthdomain) - Add a new IdP authentication domain
* [deleteIdProviderAuthDomain](#deleteidproviderauthdomain) - Delete an IdP authentication domain for the given ID
* [getIdProviderAuthDomain](#getidproviderauthdomain) - Get an IdP authentication domain for the given id
* [queryIdProviderAuthDomain](#queryidproviderauthdomain) - Get a list of IdP authentication domains
* [updateIdProviderAuthDomain](#updateidproviderauthdomain) - Update an existing IdP authentication domain

## createIdProviderAuthDomain

Add a new IdP authentication domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIdProviderAuthDomainResponse;
import org.openapis.openapi.models.shared.IdProviderAuthDomainInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("recusandae", "ea") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.IdProviderAuthDomainInfo req = new IdProviderAuthDomainInfo("quidem", "voluptas") {{
                skewnessInSec = 705148L;
            }};            

            CreateIdProviderAuthDomainResponse res = sdk.rootIdpAuthDomain.createIdProviderAuthDomain(req);

            if (res.idProviderAuthDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteIdProviderAuthDomain

Delete an IdP authentication domain for the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIdProviderAuthDomainRequest;
import org.openapis.openapi.models.operations.DeleteIdProviderAuthDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("placeat", "perspiciatis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteIdProviderAuthDomainRequest req = new DeleteIdProviderAuthDomainRequest("expedita");            

            DeleteIdProviderAuthDomainResponse res = sdk.rootIdpAuthDomain.deleteIdProviderAuthDomain(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIdProviderAuthDomain

Get an IdP authentication domain for the given id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIdProviderAuthDomainRequest;
import org.openapis.openapi.models.operations.GetIdProviderAuthDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("deleniti", "a") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetIdProviderAuthDomainRequest req = new GetIdProviderAuthDomainRequest("voluptate");            

            GetIdProviderAuthDomainResponse res = sdk.rootIdpAuthDomain.getIdProviderAuthDomain(req);

            if (res.idProviderAuthDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryIdProviderAuthDomain

Get a list of IdP authentication domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryIdProviderAuthDomainResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("ullam", "unde") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryIdProviderAuthDomainResponse res = sdk.rootIdpAuthDomain.queryIdProviderAuthDomain();

            if (res.idProviderAuthDomainSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIdProviderAuthDomain

Update an existing IdP authentication domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIdProviderAuthDomainRequest;
import org.openapis.openapi.models.operations.UpdateIdProviderAuthDomainResponse;
import org.openapis.openapi.models.shared.IdProviderAuthDomainInfoUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("necessitatibus", "animi") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            UpdateIdProviderAuthDomainRequest req = new UpdateIdProviderAuthDomainRequest(                new IdProviderAuthDomainInfoUpdate() {{
                                metadataXmlBase64 = "impedit";
                                name = "Dana Ortiz";
                                skewnessInSec = 288570L;
                            }};, "veritatis");            

            UpdateIdProviderAuthDomainResponse res = sdk.rootIdpAuthDomain.updateIdProviderAuthDomain(req);

            if (res.idProviderAuthDomainSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
