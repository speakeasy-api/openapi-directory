# projects

### Available Operations

* [essentialcontactsProjectsContactsCompute](#essentialcontactsprojectscontactscompute) - Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
* [essentialcontactsProjectsContactsCreate](#essentialcontactsprojectscontactscreate) - Adds a new contact for a resource.
* [essentialcontactsProjectsContactsDelete](#essentialcontactsprojectscontactsdelete) - Deletes a contact.
* [essentialcontactsProjectsContactsGet](#essentialcontactsprojectscontactsget) - Gets a single contact.
* [essentialcontactsProjectsContactsList](#essentialcontactsprojectscontactslist) - Lists the contacts that have been set on a resource.
* [essentialcontactsProjectsContactsPatch](#essentialcontactsprojectscontactspatch) - Updates a contact. Note: A contact's email address cannot be changed.
* [essentialcontactsProjectsContactsSendTestMessage](#essentialcontactsprojectscontactssendtestmessage) - Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

## essentialcontactsProjectsContactsCompute

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsComputeRequest req = new EssentialcontactsProjectsContactsComputeRequest("minus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptatum";
                alt = AltEnum.MEDIA;
                callback = "excepturi";
                fields = "nisi";
                key = "recusandae";
                notificationCategories = new org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum[]{{
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.NOTIFICATION_CATEGORY_UNSPECIFIED),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.SECURITY),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.NOTIFICATION_CATEGORY_UNSPECIFIED),
                    add(EssentialcontactsProjectsContactsComputeNotificationCategoriesEnum.BILLING),
                }};
                oauthToken = "perferendis";
                pageSize = 368241L;
                pageToken = "repellendus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "quo";
                uploadProtocol = "odit";
            }};            

            EssentialcontactsProjectsContactsComputeResponse res = sdk.projects.essentialcontactsProjectsContactsCompute(req, new EssentialcontactsProjectsContactsComputeSecurity("at", "at") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1ComputeContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsCreate

Adds a new contact for a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsCreateRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsCreateResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactInput;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsCreateRequest req = new EssentialcontactsProjectsContactsCreateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudEssentialcontactsV1ContactInput = new GoogleCloudEssentialcontactsV1ContactInput() {{
                    email = "Presley_Koepp@hotmail.com";
                    languageTag = "dolorum";
                    notificationCategorySubscriptions = new org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[]{{
                        add(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum.LEGAL),
                    }};
                    validateTime = "officia";
                    validationState = GoogleCloudEssentialcontactsV1ContactValidationStateEnum.VALID;
                }};;
                accessToken = "fugit";
                alt = AltEnum.MEDIA;
                callback = "hic";
                fields = "optio";
                key = "totam";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "molestiae";
                uploadProtocol = "modi";
            }};            

            EssentialcontactsProjectsContactsCreateResponse res = sdk.projects.essentialcontactsProjectsContactsCreate(req, new EssentialcontactsProjectsContactsCreateSecurity("qui", "impedit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1Contact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsDelete

Deletes a contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsDeleteRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsDeleteResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsDeleteRequest req = new EssentialcontactsProjectsContactsDeleteRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "aspernatur";
                fields = "perferendis";
                key = "ad";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
            }};            

            EssentialcontactsProjectsContactsDeleteResponse res = sdk.projects.essentialcontactsProjectsContactsDelete(req, new EssentialcontactsProjectsContactsDeleteSecurity("natus", "laboriosam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsGet

Gets a single contact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsGetRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsGetResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsGetRequest req = new EssentialcontactsProjectsContactsGetRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                key = "iure";
                oauthToken = "saepe";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "architecto";
                uploadProtocol = "ipsa";
            }};            

            EssentialcontactsProjectsContactsGetResponse res = sdk.projects.essentialcontactsProjectsContactsGet(req, new EssentialcontactsProjectsContactsGetSecurity("reiciendis", "est") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1Contact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsList

Lists the contacts that have been set on a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsListRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsListResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsListRequest req = new EssentialcontactsProjectsContactsListRequest("mollitia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolores";
                alt = AltEnum.JSON;
                callback = "corporis";
                fields = "explicabo";
                key = "nobis";
                oauthToken = "enim";
                pageSize = 607831L;
                pageToken = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            EssentialcontactsProjectsContactsListResponse res = sdk.projects.essentialcontactsProjectsContactsList(req, new EssentialcontactsProjectsContactsListSecurity("iure", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1ListContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsPatch

Updates a contact. Note: A contact's email address cannot be changed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsPatchRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsPatchResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactInput;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsPatchRequest req = new EssentialcontactsProjectsContactsPatchRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudEssentialcontactsV1ContactInput = new GoogleCloudEssentialcontactsV1ContactInput() {{
                    email = "Macy.Durgan@gmail.com";
                    languageTag = "repellat";
                    notificationCategorySubscriptions = new org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[]{{
                        add(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum.BILLING),
                        add(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum.SUSPENSION),
                        add(GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum.SECURITY),
                    }};
                    validateTime = "quam";
                    validationState = GoogleCloudEssentialcontactsV1ContactValidationStateEnum.VALID;
                }};;
                accessToken = "velit";
                alt = AltEnum.MEDIA;
                callback = "quia";
                fields = "quis";
                key = "vitae";
                oauthToken = "laborum";
                prettyPrint = false;
                quotaUser = "animi";
                updateMask = "enim";
                uploadType = "odit";
                uploadProtocol = "quo";
            }};            

            EssentialcontactsProjectsContactsPatchResponse res = sdk.projects.essentialcontactsProjectsContactsPatch(req, new EssentialcontactsProjectsContactsPatchSecurity("sequi", "tenetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudEssentialcontactsV1Contact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## essentialcontactsProjectsContactsSendTestMessage

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsSendTestMessageRequest;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsSendTestMessageResponse;
import org.openapis.openapi.models.operations.EssentialcontactsProjectsContactsSendTestMessageSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1SendTestMessageRequest;
import org.openapis.openapi.models.shared.GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            EssentialcontactsProjectsContactsSendTestMessageRequest req = new EssentialcontactsProjectsContactsSendTestMessageRequest("ipsam") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudEssentialcontactsV1SendTestMessageRequest = new GoogleCloudEssentialcontactsV1SendTestMessageRequest() {{
                    contacts = new String[]{{
                        add("aut"),
                        add("quasi"),
                        add("error"),
                        add("temporibus"),
                    }};
                    notificationCategory = GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum.LEGAL;
                }};;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "voluptatibus";
                fields = "vero";
                key = "nihil";
                oauthToken = "praesentium";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                uploadType = "ipsa";
                uploadProtocol = "omnis";
            }};            

            EssentialcontactsProjectsContactsSendTestMessageResponse res = sdk.projects.essentialcontactsProjectsContactsSendTestMessage(req, new EssentialcontactsProjectsContactsSendTestMessageSecurity("voluptate", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
