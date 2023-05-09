# accounts

## Overview

Endpoints for creating, deleting or updating accounts.

### Available Operations

* [addUserToAccount](#addusertoaccount) - Add users to an account
* [deleteAccount](#deleteaccount) - Delete account
* [removeUserFromAccount](#removeuserfromaccount) - Remove user from account
* [upsertAccount](#upsertaccount) - Create or update account

## addUserToAccount

You can add up to 100 users to an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBody;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyAccount;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers;
import org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsersIdentification;
import org.openapis.openapi.models.operations.AddUserToAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddUserToAccountRequestBody req = new AddUserToAccountRequestBody(                new AddUserToAccountRequestBodyAccount() {{
                                accountId = "maiores";
                                domain = "molestiae";
                            }};,                 new org.openapis.openapi.models.operations.AddUserToAccountRequestBodyUsers[]{{
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Kristina_Conroy@yahoo.com";
                                                    userId = "optio";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Jakayla_Lebsack11@hotmail.com";
                                        userId = "nam";
                                    }};
                                }}),
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Myra56@hotmail.com";
                                                    userId = "aspernatur";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Benjamin.Johns@yahoo.com";
                                        userId = "qui";
                                    }};
                                }}),
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Gertrude_Welch44@yahoo.com";
                                                    userId = "corporis";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Enrique61@gmail.com";
                                        userId = "dolor";
                                    }};
                                }}),
                                add(new AddUserToAccountRequestBodyUsers(                new AddUserToAccountRequestBodyUsersIdentification() {{
                                                    email = "Madaline21@hotmail.com";
                                                    userId = "corporis";
                                                }};) {{
                                    identification = new AddUserToAccountRequestBodyUsersIdentification() {{
                                        email = "Humberto.Turcotte6@yahoo.com";
                                        userId = "reiciendis";
                                    }};
                                }}),
                            }});            

            AddUserToAccountResponse res = sdk.accounts.addUserToAccount(req);

            if (res.addUserToAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccount

Endpoint used to delete an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountRequestBody;
import org.openapis.openapi.models.operations.DeleteAccountRequestBodyIdentification;
import org.openapis.openapi.models.operations.DeleteAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAccountRequestBody req = new DeleteAccountRequestBody(                new DeleteAccountRequestBodyIdentification() {{
                                accountId = "explicabo";
                                domain = "nobis";
                            }};);            

            DeleteAccountResponse res = sdk.accounts.deleteAccount(req);

            if (res.deleteAccount202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeUserFromAccount

You can remove up to 100 users from an account.

When removing a user, the user will still be stored in journy.io, but marked as "removed".


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveUserFromAccountRequestBody;
import org.openapis.openapi.models.operations.RemoveUserFromAccountRequestBodyAccount;
import org.openapis.openapi.models.operations.RemoveUserFromAccountRequestBodyUsers;
import org.openapis.openapi.models.operations.RemoveUserFromAccountRequestBodyUsersIdentification;
import org.openapis.openapi.models.operations.RemoveUserFromAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveUserFromAccountRequestBody req = new RemoveUserFromAccountRequestBody(                new RemoveUserFromAccountRequestBodyAccount() {{
                                accountId = "enim";
                                domain = "omnis";
                            }};,                 new org.openapis.openapi.models.operations.RemoveUserFromAccountRequestBodyUsers[]{{
                                add(new RemoveUserFromAccountRequestBodyUsers(                new RemoveUserFromAccountRequestBodyUsersIdentification() {{
                                                    email = "Bart63@hotmail.com";
                                                    userId = "consequuntur";
                                                }};) {{
                                    identification = new RemoveUserFromAccountRequestBodyUsersIdentification() {{
                                        email = "Keyon_Batz@gmail.com";
                                        userId = "doloribus";
                                    }};
                                }}),
                                add(new RemoveUserFromAccountRequestBodyUsers(                new RemoveUserFromAccountRequestBodyUsersIdentification() {{
                                                    email = "Deion33@yahoo.com";
                                                    userId = "vitae";
                                                }};) {{
                                    identification = new RemoveUserFromAccountRequestBodyUsersIdentification() {{
                                        email = "Madaline41@hotmail.com";
                                        userId = "quam";
                                    }};
                                }}),
                            }});            

            RemoveUserFromAccountResponse res = sdk.accounts.removeUserFromAccount(req);

            if (res.removeUserFromAccount204ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upsertAccount

Endpoint used to create or update an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpsertAccountRequestBody;
import org.openapis.openapi.models.operations.UpsertAccountRequestBodyIdentification;
import org.openapis.openapi.models.operations.UpsertAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpsertAccountRequestBody req = new UpsertAccountRequestBody(                new UpsertAccountRequestBodyIdentification() {{
                                accountId = "laborum";
                                domain = "animi";
                            }};) {{
                properties = new java.util.HashMap<String, Object>() {{
                    put("odit", "quo");
                    put("sequi", "tenetur");
                }};
            }};            

            UpsertAccountResponse res = sdk.accounts.upsertAccount(req);

            if (res.upsertAccount201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
