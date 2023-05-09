# kKid

## Overview

KKid API Functions

<https://github.com/kumpeapps/kkid>
### Available Operations

* [kkidAllowanceGet](#kkidallowanceget) - returns allowance balance and allowance transactions
* [kkidAllowancePost](#kkidallowancepost) - adds new allowance transaction to kidUserID
* [kkidApnsPost](#kkidapnspost) - subscribes/unsubscribes/registers for apns push notifications
* [kkidChorelistDelete](#kkidchorelistdelete) - deletes chore for given chore id
* [kkidChorelistGet](#kkidchorelistget) - returns list of chores for given user
* [kkidChorelistPost](#kkidchorelistpost) - adds chore for given user
* [kkidChorelistPut](#kkidchorelistput) - updates chore for given chore id
* [kkidMasteruserPost](#kkidmasteruserpost) - adds new master user account
* [kkidShareGet](#kkidshareget) - Create Share Link
* [kkidUserGet](#kkiduserget) - Gets user info
* [kkidUserlistDelete](#kkiduserlistdelete) - deletes user
* [kkidUserlistGet](#kkiduserlistget) - returns list of users
* [kkidUserlistPost](#kkiduserlistpost) - adds new child user
* [kkidUserlistPut](#kkiduserlistput) - updates user
* [kkidWishlistDelete](#kkidwishlistdelete) - Delete item from wishlist
* [kkidWishlistGet](#kkidwishlistget) - Get list of wishlist items
* [kkidWishlistPost](#kkidwishlistpost) - Add item to kid's wishlist
* [kkidWishlistPut](#kkidwishlistput) - Update item on kid's wishlist

## kkidAllowanceGet

By passing in the appropriate options, you can view allowance balance and allowance transactions for a given user provided that they are within the masterID account of the authenticated user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidAllowanceGetRequest;
import org.openapis.openapi.models.operations.KkidAllowanceGetResponse;
import org.openapis.openapi.models.operations.KkidAllowanceGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidAllowanceGetRequest req = new KkidAllowanceGetRequest(844266L) {{
                transactionDays = 602763L;
            }};            

            KkidAllowanceGetResponse res = sdk.kKid.kkidAllowanceGet(req, new KkidAllowanceGetSecurity("nulla") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.allowance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidAllowancePost

By passing in the appropriate options, you can add an allowance transaction to a given user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidAllowancePostRequest;
import org.openapis.openapi.models.operations.KkidAllowancePostResponse;
import org.openapis.openapi.models.operations.KkidAllowancePostSecurity;
import org.openapis.openapi.models.operations.KkidAllowancePostTransactionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidAllowancePostRequest req = new KkidAllowancePostRequest(5448.83, "illum", 423655L, KkidAllowancePostTransactionTypeEnum.SUBTRACT);            

            KkidAllowancePostResponse res = sdk.kKid.kkidAllowancePost(req, new KkidAllowancePostSecurity("deserunt") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidApnsPost

subscribes/unsubscribes/registers for apns push notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidApnsPostPriorityEnum;
import org.openapis.openapi.models.operations.KkidApnsPostRequest;
import org.openapis.openapi.models.operations.KkidApnsPostResponse;
import org.openapis.openapi.models.operations.KkidApnsPostSectionEnum;
import org.openapis.openapi.models.operations.KkidApnsPostSecurity;
import org.openapis.openapi.models.operations.KkidApnsPostToolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidApnsPostRequest req = new KkidApnsPostRequest(384382L, KkidApnsPostToolEnum.SUBSCRIBE) {{
                badge = 297534L;
                devicename = "debitis";
                message = "ipsa";
                priority = KkidApnsPostPriorityEnum.CRITICAL;
                section = KkidApnsPostSectionEnum.CHORES_NEW;
                sound = "suscipit";
                title = "Ms.";
                token = "minus";
            }};            

            KkidApnsPostResponse res = sdk.kKid.kkidApnsPost(req, new KkidApnsPostSecurity("placeat") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidChorelistDelete

By passing in the appropriate options, you can delete a chore for the given chore id under authenticated user's master account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidChorelistDeleteRequest;
import org.openapis.openapi.models.operations.KkidChorelistDeleteResponse;
import org.openapis.openapi.models.operations.KkidChorelistDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidChorelistDeleteRequest req = new KkidChorelistDeleteRequest(528895L);            

            KkidChorelistDeleteResponse res = sdk.kKid.kkidChorelistDelete(req, new KkidChorelistDeleteSecurity("iusto") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidChorelistGet

By passing in the appropriate options, you can search for
chores assigned to a given user within the authenticated user's master account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidChorelistGetDayEnum;
import org.openapis.openapi.models.operations.KkidChorelistGetRequest;
import org.openapis.openapi.models.operations.KkidChorelistGetResponse;
import org.openapis.openapi.models.operations.KkidChorelistGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidChorelistGetRequest req = new KkidChorelistGetRequest() {{
                blockDash = false;
                canSteal = false;
                day = KkidChorelistGetDayEnum.THURSDAY;
                includeCalendar = false;
                kidUsername = "nisi";
                optional = false;
                status = "recusandae";
            }};            

            KkidChorelistGetResponse res = sdk.kKid.kkidChorelistGet(req, new KkidChorelistGetSecurity("temporibus") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.chorelist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidChorelistPost

By passing in the appropriate options, you can add a chore to given kid username under authenticated user's master account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidChorelistPostDayEnum;
import org.openapis.openapi.models.operations.KkidChorelistPostRequest;
import org.openapis.openapi.models.operations.KkidChorelistPostResponse;
import org.openapis.openapi.models.operations.KkidChorelistPostSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidChorelistPostRequest req = new KkidChorelistPostRequest("ab", "quis") {{
                aiIcon = "veritatis";
                blockDash = false;
                canSteal = false;
                choreDescription = "deserunt";
                choreNumber = 20218L;
                day = KkidChorelistPostDayEnum.WEDNESDAY;
                extraAllowance = 832620L;
                isCalendar = false;
                nfcTag = "sapiente";
                notes = "quo";
                objectDetectionTag = "odit";
                oneTime = false;
                optional = false;
                reassignable = false;
                requireObjectDetection = false;
                startDate = "at";
                status = "at";
                updatedByAutomation = false;
            }};            

            KkidChorelistPostResponse res = sdk.kKid.kkidChorelistPost(req, new KkidChorelistPostSecurity("maiores") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidChorelistPut

By passing in the appropriate options, you can update the fields of a specific core within the authenticated user's master account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidChorelistPutRequest;
import org.openapis.openapi.models.operations.KkidChorelistPutResponse;
import org.openapis.openapi.models.operations.KkidChorelistPutSecurity;
import org.openapis.openapi.models.operations.KkidChorelistPutWhereDayEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidChorelistPutRequest req = new KkidChorelistPutRequest(473608L) {{
                altitude = 799159L;
                latitude = 800911L;
                longitude = 461479L;
                nfcTag = "totam";
                notes = "porro";
                status = "dolorum";
                stolen = false;
                stolenBy = "dicta";
                updatedByAutomation = false;
                whereDay = KkidChorelistPutWhereDayEnum.SATURDAY;
                whereName = "officia";
                whereStatus = "occaecati";
            }};            

            KkidChorelistPutResponse res = sdk.kKid.kkidChorelistPut(req, new KkidChorelistPutSecurity("fugit") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidMasteruserPost

By passing in the appropriate variables this method creates a new user with master account access. (The use of this method is restricted to Superusers ONLY)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidMasteruserPostRequest;
import org.openapis.openapi.models.operations.KkidMasteruserPostResponse;
import org.openapis.openapi.models.operations.KkidMasteruserPostSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidMasteruserPostRequest req = new KkidMasteruserPostRequest("deleniti", "hic", "optio", "totam", "beatae");            

            KkidMasteruserPostResponse res = sdk.kKid.kkidMasteruserPost(req, new KkidMasteruserPostSecurity("commodi") {{
                appKey = "YOUR_API_KEY_HERE";
            }});

            if (res.addUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidShareGet

Create share link

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidShareGetLinkEnum;
import org.openapis.openapi.models.operations.KkidShareGetRequest;
import org.openapis.openapi.models.operations.KkidShareGetResponse;
import org.openapis.openapi.models.operations.KkidShareGetScope2Enum;
import org.openapis.openapi.models.operations.KkidShareGetScope3Enum;
import org.openapis.openapi.models.operations.KkidShareGetScope4Enum;
import org.openapis.openapi.models.operations.KkidShareGetScopeEnum;
import org.openapis.openapi.models.operations.KkidShareGetSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidShareGetRequest req = new KkidShareGetRequest(KkidShareGetLinkEnum.HTTPS_KHOME_KUMPEAPPS_COM_PORTAL_WISH_LIST_PHP, "modi", KkidShareGetScopeEnum.WISH_LIST) {{
                scope2 = KkidShareGetScope2Enum.CHORES_ADMIN;
                scope3 = KkidShareGetScope3Enum.CHORES;
                scope4 = KkidShareGetScope4Enum.WISH_LIST_ADMIN;
            }};            

            KkidShareGetResponse res = sdk.kKid.kkidShareGet(req, new KkidShareGetSecurity("ipsum") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.twoHundredAndOneShare != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidUserGet

Gets user info for authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidUserGetRequest;
import org.openapis.openapi.models.operations.KkidUserGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidUserGetRequest req = new KkidUserGetRequest() {{
                enableBool = false;
            }};            

            KkidUserGetResponse res = sdk.kKid.kkidUserGet(req);

            if (res.userlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidUserlistDelete

By passing in the appropriate variables this method deletes the specified user. (This function is restricted to Superusers ONLY)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidUserlistDeleteRequest;
import org.openapis.openapi.models.operations.KkidUserlistDeleteResponse;
import org.openapis.openapi.models.operations.KkidUserlistDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidUserlistDeleteRequest req = new KkidUserlistDeleteRequest(135218L);            

            KkidUserlistDeleteResponse res = sdk.kKid.kkidUserlistDelete(req, new KkidUserlistDeleteSecurity("perferendis") {{
                authKey = "YOUR_API_KEY_HERE";
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

## kkidUserlistGet

By passing in the appropriate options, you can search for
users within the authenticated user's master account


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidUserlistGetRequest;
import org.openapis.openapi.models.operations.KkidUserlistGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidUserlistGetRequest req = new KkidUserlistGetRequest() {{
                email = "Camden61@yahoo.com";
                enableAllowance = false;
                enableChores = false;
                isActive = false;
                isAdmin = false;
                isChild = false;
                userID = 386489L;
                username = "Tyra.Turcotte35";
            }};            

            KkidUserlistGetResponse res = sdk.kKid.kkidUserlistGet(req);

            if (res.userlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidUserlistPost

By passing in the appropriate variables this method creates a new user and assigns it to the master account of the authenticated user. By default this user will have chores and allowance access.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidUserlistPostRequest;
import org.openapis.openapi.models.operations.KkidUserlistPostResponse;
import org.openapis.openapi.models.operations.KkidUserlistPostSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KkidUserlistPostRequest req = new KkidUserlistPostRequest("iste", "iure", "saepe", "quidem", "architecto");            

            KkidUserlistPostResponse res = sdk.kKid.kkidUserlistPost(req, new KkidUserlistPostSecurity("ipsa") {{
                authKey = "YOUR_API_KEY_HERE";
            }});

            if (res.addUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidUserlistPut

By passing in the appropriate variables this method updates the user's profile


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidUserlistPutRequest;
import org.openapis.openapi.models.operations.KkidUserlistPutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidUserlistPutRequest req = new KkidUserlistPutRequest("est", "mollitia", "laborum", 170909L, "dolorem") {{
                emoji = "corporis";
                enableAdmin = false;
                enableAllowance = false;
                enableChores = false;
                enableObjectDetection = false;
                enableTmdb = false;
                enableWishList = false;
                tmdbKey = "explicabo";
            }};            

            KkidUserlistPutResponse res = sdk.kKid.kkidUserlistPut(req);

            if (res.addUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidWishlistDelete

Delete item from wishlist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidWishlistDeleteRequest;
import org.openapis.openapi.models.operations.KkidWishlistDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidWishlistDeleteRequest req = new KkidWishlistDeleteRequest(315428L);            

            KkidWishlistDeleteResponse res = sdk.kKid.kkidWishlistDelete(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidWishlistGet

Get list of wishlist items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidWishlistGetRequest;
import org.openapis.openapi.models.operations.KkidWishlistGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidWishlistGetRequest req = new KkidWishlistGetRequest() {{
                kidUserId = 363711L;
            }};            

            KkidWishlistGetResponse res = sdk.kKid.kkidWishlistGet(req);

            if (res.wishlist != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidWishlistPost

Add item to kid's wishlist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidWishlistPostRequest;
import org.openapis.openapi.models.operations.KkidWishlistPostResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidWishlistPostRequest req = new KkidWishlistPostRequest(570197L, "accusantium") {{
                description = "iure";
                link = "culpa";
                priority = 988374L;
            }};            

            KkidWishlistPostResponse res = sdk.kKid.kkidWishlistPost(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## kkidWishlistPut

Update item on kid's wishlist

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KkidWishlistPutRequest;
import org.openapis.openapi.models.operations.KkidWishlistPutResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    authKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            KkidWishlistPutRequest req = new KkidWishlistPutRequest(102044L) {{
                description = "mollitia";
                link = "dolorem";
                priority = 635059L;
                title = "Mr.";
            }};            

            KkidWishlistPutResponse res = sdk.kKid.kkidWishlistPut(req);

            if (res.success != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
