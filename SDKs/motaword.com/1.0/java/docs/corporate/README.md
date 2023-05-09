# corporate

### Available Operations

* [getAvailableCorporatePermissions](#getavailablecorporatepermissions) - View available permissions
* [getAvailableCorporatePermissionsById](#getavailablecorporatepermissionsbyid) - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
* [getCorporate](#getcorporate) - View your corporate account
* [getCorporateById](#getcorporatebyid) - Get details of this corporate account
* [getCorporateUserGroups](#getcorporateusergroups) - View user groups
* [getCorporateUserGroupsById](#getcorporateusergroupsbyid) - Get a list of user groups for this corporate account
* [getCorporateUsers](#getcorporateusers) - View users
* [getCorporateUsersById](#getcorporateusersbyid) - Get a list of users for this corporate account
* [getCorporatesList](#getcorporateslist) - Get a list of corporate accounts
* [saveCorporateUser](#savecorporateuser) - Create or update a user
* [saveCorporateUserGroup](#savecorporateusergroup) - Create or update a corporate user group
* [saveCorporateUserGroupById](#savecorporateusergroupbyid) - Create or update a corporate user group for this corporate account

## getAvailableCorporatePermissions

View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableCorporatePermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAvailableCorporatePermissionsResponse res = sdk.corporate.getAvailableCorporatePermissions();

            if (res.permissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAvailableCorporatePermissionsById

Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAvailableCorporatePermissionsByIdRequest;
import org.openapis.openapi.models.operations.GetAvailableCorporatePermissionsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAvailableCorporatePermissionsByIdRequest req = new GetAvailableCorporatePermissionsByIdRequest(209843L);            

            GetAvailableCorporatePermissionsByIdResponse res = sdk.corporate.getAvailableCorporatePermissionsById(req);

            if (res.permissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporate

View the details of the corporate account that your user account belongs to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateResponse res = sdk.corporate.getCorporate();

            if (res.corporateAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporateById

Get details of this corporate account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateByIdRequest;
import org.openapis.openapi.models.operations.GetCorporateByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateByIdRequest req = new GetCorporateByIdRequest(218749L);            

            GetCorporateByIdResponse res = sdk.corporate.getCorporateById(req);

            if (res.corporateAccount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporateUserGroups

View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateUserGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateUserGroupsResponse res = sdk.corporate.getCorporateUserGroups();

            if (res.userGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporateUserGroupsById

Get a list of user groups for this corporate account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateUserGroupsByIdRequest;
import org.openapis.openapi.models.operations.GetCorporateUserGroupsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateUserGroupsByIdRequest req = new GetCorporateUserGroupsByIdRequest(739551L);            

            GetCorporateUserGroupsByIdResponse res = sdk.corporate.getCorporateUserGroupsById(req);

            if (res.userGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporateUsers

View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateUsersResponse res = sdk.corporate.getCorporateUsers();

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporateUsersById

Get a list of users for this corporate account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporateUsersByIdRequest;
import org.openapis.openapi.models.operations.GetCorporateUsersByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporateUsersByIdRequest req = new GetCorporateUsersByIdRequest(970237L);            

            GetCorporateUsersByIdResponse res = sdk.corporate.getCorporateUsersById(req);

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorporatesList

Get a list of corporate accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorporatesListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCorporatesListResponse res = sdk.corporate.getCorporatesList();

            if (res.corporateAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCorporateUser

Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCorporateUserResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserUpdateContent;
import org.openapis.openapi.models.shared.UserUpdateContentNotifications;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserUpdateContent req = new UserUpdateContent() {{
                birthday = LocalDate.parse("2022-11-30");
                city = "North Houstonmouth";
                country = "Gambia";
                email = "Maurine_Wolf@hotmail.com";
                firstName = "Chelsea";
                id = 542499L;
                lastName = "Bailey";
                notifications = new UserUpdateContentNotifications() {{
                    phoneNumber = "fugiat";
                    smsEnabled = false;
                }};;
                notify = false;
                paypalEmail = "ab";
                phone = "744.756.8794 x2469";
                require1099 = false;
                state = "eius";
                street = "02783 Hoppe Pines";
                userGroups = new Long[]{{
                    add(324683L),
                    add(831049L),
                    add(519711L),
                }};
                zip = "similique";
            }};            

            SaveCorporateUserResponse res = sdk.corporate.saveCorporateUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCorporateUserGroup

Create or update a corporate user group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCorporateUserGroupResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserGroup req = new UserGroup() {{
                corporateId = 872651L;
                id = 311860L;
                name = "Gina Schmeler";
                permissions = new String[]{{
                    add("a"),
                    add("esse"),
                    add("harum"),
                }};
            }};            

            SaveCorporateUserGroupResponse res = sdk.corporate.saveCorporateUserGroup(req);

            if (res.userGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveCorporateUserGroupById

Create or update a corporate user group for this corporate account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveCorporateUserGroupByIdRequest;
import org.openapis.openapi.models.operations.SaveCorporateUserGroupByIdResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserGroup;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SaveCorporateUserGroupByIdRequest req = new SaveCorporateUserGroupByIdRequest(                new UserGroup() {{
                                corporateId = 215507L;
                                id = 788740L;
                                name = "Marvin Renner";
                                permissions = new String[]{{
                                    add("dolorem"),
                                    add("sapiente"),
                                }};
                            }};, 518201L);            

            SaveCorporateUserGroupByIdResponse res = sdk.corporate.saveCorporateUserGroupById(req);

            if (res.userGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
