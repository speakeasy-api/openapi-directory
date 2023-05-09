# rootPrincipal

## Overview

Principal Actions.

### Available Operations

* [assignRolesToPrincipals](#assignrolestoprincipals) - Assign roles to principals
* [getRolesForPrincipals](#getrolesforprincipals) - Get roles assigned to principals
* [revokeRolesFromPrincipals](#revokerolesfromprincipals) - Revoke roles from principals
* [searchPrincipalsV1](#searchprincipalsv1) - Search for principals

## assignRolesToPrincipals

Assign a set of roles to the specified principals.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssignRolesToPrincipalsResponse;
import org.openapis.openapi.models.shared.RoleAssignmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("reprehenderit", "quod") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RoleAssignmentRequest req = new RoleAssignmentRequest(                new String[]{{
                                add("corrupti"),
                                add("amet"),
                                add("molestiae"),
                            }},                 new String[]{{
                                add("laborum"),
                            }});            

            AssignRolesToPrincipalsResponse res = sdk.rootPrincipal.assignRolesToPrincipals(req);

            if (res.roleInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRolesForPrincipals

Get a list of role information for all roles assigned to the principals.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRolesForPrincipalsRequest;
import org.openapis.openapi.models.operations.GetRolesForPrincipalsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("modi", "perferendis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetRolesForPrincipalsRequest req = new GetRolesForPrincipalsRequest(                new String[]{{
                                add("architecto"),
                                add("molestias"),
                                add("dolore"),
                                add("sunt"),
                            }});            

            GetRolesForPrincipalsResponse res = sdk.rootPrincipal.getRolesForPrincipals(req);

            if (res.principalWithRoleInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## revokeRolesFromPrincipals

Revoke a set of roles from the specified principals.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeRolesFromPrincipalsResponse;
import org.openapis.openapi.models.shared.RoleAssignmentRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("maiores", "neque") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.RoleAssignmentRequest req = new RoleAssignmentRequest(                new String[]{{
                                add("earum"),
                            }},                 new String[]{{
                                add("ipsam"),
                                add("eaque"),
                            }});            

            RevokeRolesFromPrincipalsResponse res = sdk.rootPrincipal.revokeRolesFromPrincipals(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchPrincipalsV1

Search for principals based on the specified parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPrincipalsV1PrincipalTypeEnum;
import org.openapis.openapi.models.operations.SearchPrincipalsV1Request;
import org.openapis.openapi.models.operations.SearchPrincipalsV1Response;
import org.openapis.openapi.models.operations.SearchPrincipalsV1SortByEnum;
import org.openapis.openapi.models.operations.SearchPrincipalsV1SortOrderEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("exercitationem", "veniam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            SearchPrincipalsV1Request req = new SearchPrincipalsV1Request() {{
                authDomainId = "nihil";
                isAssignedRolesOrIsLocal = false;
                isTotpEnabled = false;
                limit = 320326;
                name = "Essie Hayes";
                offset = 382764;
                organizationId = "pariatur";
                principalType = SearchPrincipalsV1PrincipalTypeEnum.USER;
                roleId = "quidem";
                sortBy = SearchPrincipalsV1SortByEnum.EMAIL_ADDRESS;
                sortOrder = SearchPrincipalsV1SortOrderEnum.ASC;
            }};            

            SearchPrincipalsV1Response res = sdk.rootPrincipal.searchPrincipalsV1(req);

            if (res.principalSummaryV1ListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
