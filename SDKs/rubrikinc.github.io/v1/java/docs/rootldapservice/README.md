# rootLdapService

## Overview

LDAP services.

### Available Operations

* [createLdapService](#createldapservice) - Add a new authentication domain
* [deleteLdapService](#deleteldapservice) - Delete an authentication domain for the given ID
* [getLdapService](#getldapservice) - Get a LDAP service for the given ID
* [patchLdapService](#patchldapservice) - Update an existing authentication domain
* [putLdapService](#putldapservice) - Replace the values of an authentication domain
* [queryLdapService](#queryldapservice) - Get a list of LDAP services

## createLdapService

Add a new authentication domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLdapServiceResponse;
import org.openapis.openapi.models.shared.AdvancedLdapConfiguration;
import org.openapis.openapi.models.shared.LdapServiceInfo;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("officiis", "voluptatibus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.LdapServiceInfo req = new LdapServiceInfo("cum", "at") {{
                advancedOptions = new AdvancedLdapConfiguration() {{
                    groupMaxLevel = 5152;
                    groupMemberAttribute = "quia";
                    groupMembershipAttribute = "quidem";
                    groupSearchFilter = "fuga";
                    userNameSearchAttribute = "repudiandae";
                    userSearchFilter = "accusantium";
                }};;
                authServers = new String[]{{
                    add("officiis"),
                    add("eos"),
                    add("quibusdam"),
                }};
                baseDn = "odio";
                certificateId = "praesentium";
                dynamicDnsName = "odit";
                isTotpEnforced = false;
                mfaServerId = "explicabo";
                name = "Natasha Wehner";
            }};            

            CreateLdapServiceResponse res = sdk.rootLdapService.createLdapService(req);

            if (res.ldapServiceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLdapService

Delete an authentication domain for the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLdapServiceRequest;
import org.openapis.openapi.models.operations.DeleteLdapServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("similique", "ut") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DeleteLdapServiceRequest req = new DeleteLdapServiceRequest("quidem");            

            DeleteLdapServiceResponse res = sdk.rootLdapService.deleteLdapService(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLdapService

Get a LDAP service for the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLdapServiceRequest;
import org.openapis.openapi.models.operations.GetLdapServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quis", "beatae") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetLdapServiceRequest req = new GetLdapServiceRequest("unde");            

            GetLdapServiceResponse res = sdk.rootLdapService.getLdapService(req);

            if (res.ldapServiceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchLdapService

Modify the values of a specified authentication domain object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchLdapServiceRequest;
import org.openapis.openapi.models.operations.PatchLdapServiceResponse;
import org.openapis.openapi.models.shared.AdvancedLdapConfiguration;
import org.openapis.openapi.models.shared.LdapServiceInfoUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("molestiae", "delectus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PatchLdapServiceRequest req = new PatchLdapServiceRequest(                new LdapServiceInfoUpdate() {{
                                advancedOptions = new AdvancedLdapConfiguration() {{
                                    groupMaxLevel = 585593;
                                    groupMemberAttribute = "fugit";
                                    groupMembershipAttribute = "numquam";
                                    groupSearchFilter = "numquam";
                                    userNameSearchAttribute = "nesciunt";
                                    userSearchFilter = "at";
                                }};;
                                authServers = new String[]{{
                                    add("dignissimos"),
                                    add("optio"),
                                    add("necessitatibus"),
                                }};
                                baseDn = "corporis";
                                bindUserName = "qui";
                                bindUserPassword = "expedita";
                                certificateId = "voluptatum";
                                dynamicDnsName = "cupiditate";
                                isTotpEnforced = false;
                                mfaServerId = "minima";
                                name = "Bill Doyle";
                            }};, "eum");            

            PatchLdapServiceResponse res = sdk.rootLdapService.patchLdapService(req);

            if (res.ldapServiceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putLdapService

Replace the values of a specified authentication domain object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutLdapServiceRequest;
import org.openapis.openapi.models.operations.PutLdapServiceResponse;
import org.openapis.openapi.models.shared.AdvancedLdapConfiguration;
import org.openapis.openapi.models.shared.LdapServiceInfoUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "corporis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            PutLdapServiceRequest req = new PutLdapServiceRequest(                new LdapServiceInfoUpdate() {{
                                advancedOptions = new AdvancedLdapConfiguration() {{
                                    groupMaxLevel = 298264;
                                    groupMemberAttribute = "voluptates";
                                    groupMembershipAttribute = "maiores";
                                    groupSearchFilter = "tempore";
                                    userNameSearchAttribute = "aperiam";
                                    userSearchFilter = "libero";
                                }};;
                                authServers = new String[]{{
                                    add("labore"),
                                }};
                                baseDn = "totam";
                                bindUserName = "occaecati";
                                bindUserPassword = "voluptas";
                                certificateId = "quo";
                                dynamicDnsName = "velit";
                                isTotpEnforced = false;
                                mfaServerId = "minus";
                                name = "Dean Ortiz";
                            }};, "tempore");            

            PutLdapServiceResponse res = sdk.rootLdapService.putLdapService(req);

            if (res.ldapServiceSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryLdapService

Get a list of LDAP services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryLdapServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "odit") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryLdapServiceResponse res = sdk.rootLdapService.queryLdapService();

            if (res.ldapServiceSummaryListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
