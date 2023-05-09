# contacts

## Overview

Create, modify or delete contacts

### Available Operations

* [contactsCreateJson](#contactscreatejson) - Create contact
* [contactsCreateString](#contactscreatestring) - Create contact
* [contactsFetch](#contactsfetch) - Fetch contact by ID
* [contactsFetchAll](#contactsfetchall) - Fetch contacts
* [contactsRemove](#contactsremove) - Deletes a contact
* [contactsUpdate](#contactsupdate) - Updates a contact

## contactsCreateJson

Create contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsCreateJsonMergeStrategyEnum;
import org.openapis.openapi.models.operations.ContactsCreateJsonRequest;
import org.openapis.openapi.models.operations.ContactsCreateJsonResponse;
import org.openapis.openapi.models.operations.ContactsCreateJsonSecurity;
import org.openapis.openapi.models.shared.ContactRequest;
import org.openapis.openapi.models.shared.ContactRequestMobile;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsCreateJsonRequest req = new ContactsCreateJsonRequest("sapiente") {{
                contactRequest = new ContactRequest() {{
                    attributes = new java.util.HashMap<String, Object>() {{
                        put("odit", "at");
                        put("at", "maiores");
                        put("molestiae", "quod");
                        put("quod", "esse");
                    }};
                    email = "chris@sakari.io";
                    firstName = "Chris";
                    id = "8ca1ba92-8fc8-4167-82cb-739205929396";
                    lastName = "Bloggs";
                    mobile = new ContactRequestMobile() {{
                        country = "United States of America";
                        number = "123-456-7890";
                    }};;
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            tag = "fuga";
                            visible = false;
                        }}),
                        add(new Tag() {{
                            tag = "in";
                            visible = false;
                        }}),
                        add(new Tag() {{
                            tag = "corporis";
                            visible = false;
                        }}),
                        add(new Tag() {{
                            tag = "iste";
                            visible = false;
                        }}),
                    }};
                }};;
                mergeStrategy = ContactsCreateJsonMergeStrategyEnum.CORE;
            }};            

            ContactsCreateJsonResponse res = sdk.contacts.contactsCreateJson(req, new ContactsCreateJsonSecurity("saepe") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactsCreateJSON201ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsCreateString

Create contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsCreateStringMergeStrategyEnum;
import org.openapis.openapi.models.operations.ContactsCreateStringRequest;
import org.openapis.openapi.models.operations.ContactsCreateStringResponse;
import org.openapis.openapi.models.operations.ContactsCreateStringSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsCreateStringRequest req = new ContactsCreateStringRequest("quidem") {{
                requestBody = "country,firstName,lastName,email,mobile,jobTitle,Address,City,State,ZipCode US,Joe,Bloggs,joebloggs@sakari.co,123-456-7890,mover,123 Text Street,San Francisco,CA,12345
            ";
                mergeStrategy = ContactsCreateStringMergeStrategyEnum.APPEND;
            }};            

            ContactsCreateStringResponse res = sdk.contacts.contactsCreateString(req, new ContactsCreateStringSecurity("ipsa") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactsCreateString201ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsFetch

Fetch contact by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsFetchRequest;
import org.openapis.openapi.models.operations.ContactsFetchResponse;
import org.openapis.openapi.models.operations.ContactsFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsFetchRequest req = new ContactsFetchRequest("reiciendis", "est");            

            ContactsFetchResponse res = sdk.contacts.contactsFetch(req, new ContactsFetchSecurity("mollitia") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsFetchAll

Fetch contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsFetchAllRequest;
import org.openapis.openapi.models.operations.ContactsFetchAllResponse;
import org.openapis.openapi.models.operations.ContactsFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsFetchAllRequest req = new ContactsFetchAllRequest("laborum") {{
                email = "Corrine75@gmail.com";
                firstName = "Emerald";
                lastName = "Mohr";
                limit = 363711L;
                mobile = "(604) 799-1626 x196";
                offset = 581850L;
                tags = "numquam";
            }};            

            ContactsFetchAllResponse res = sdk.contacts.contactsFetchAll(req, new ContactsFetchAllSecurity("commodi") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsRemove

Deletes a contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsRemoveRequest;
import org.openapis.openapi.models.operations.ContactsRemoveResponse;
import org.openapis.openapi.models.operations.ContactsRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsRemoveRequest req = new ContactsRemoveRequest("quam", "molestiae");            

            ContactsRemoveResponse res = sdk.contacts.contactsRemove(req, new ContactsRemoveSecurity("velit") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactsRemove200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contactsUpdate

Updates a contact

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContactsUpdateRequest;
import org.openapis.openapi.models.operations.ContactsUpdateResponse;
import org.openapis.openapi.models.operations.ContactsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContactsUpdateRequest req = new ContactsUpdateRequest("error", "quia");            

            ContactsUpdateResponse res = sdk.contacts.contactsUpdate(req, new ContactsUpdateSecurity("quis") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
