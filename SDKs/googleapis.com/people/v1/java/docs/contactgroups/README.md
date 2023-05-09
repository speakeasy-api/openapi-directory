# contactGroups

### Available Operations

* [peopleContactGroupsBatchGet](#peoplecontactgroupsbatchget) - Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
* [peopleContactGroupsCreate](#peoplecontactgroupscreate) - Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsDelete](#peoplecontactgroupsdelete) - Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peopleContactGroupsList](#peoplecontactgroupslist) - List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
* [peopleContactGroupsMembersModify](#peoplecontactgroupsmembersmodify) - Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
* [peopleContactGroupsUpdate](#peoplecontactgroupsupdate) - Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## peopleContactGroupsBatchGet

Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurity;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.PeopleContactGroupsBatchGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsBatchGetRequest req = new PeopleContactGroupsBatchGetRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.PROTO;
                callback = "placeat";
                fields = "voluptatum";
                groupFields = "iusto";
                key = "excepturi";
                maxMembers = 392785L;
                oauthToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                resourceNames = new String[]{{
                    add("quis"),
                }};
                uploadType = "veritatis";
                uploadProtocol = "deserunt";
            }};            

            PeopleContactGroupsBatchGetResponse res = sdk.contactGroups.peopleContactGroupsBatchGet(req, new PeopleContactGroupsBatchGetSecurity() {{
                option1 = new PeopleContactGroupsBatchGetSecurityOption1("perferendis", "ipsam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.batchGetContactGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleContactGroupsCreate

Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsCreateRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsCreateResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactGroupInput;
import org.openapis.openapi.models.shared.CreateContactGroupRequestInput;
import org.openapis.openapi.models.shared.GroupClientData;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsCreateRequest req = new PeopleContactGroupsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                createContactGroupRequestInput = new CreateContactGroupRequestInput() {{
                    contactGroup = new ContactGroupInput() {{
                        clientData = new org.openapis.openapi.models.shared.GroupClientData[]{{
                            add(new GroupClientData() {{
                                key = "quo";
                                value = "odit";
                            }}),
                            add(new GroupClientData() {{
                                key = "at";
                                value = "at";
                            }}),
                            add(new GroupClientData() {{
                                key = "maiores";
                                value = "molestiae";
                            }}),
                            add(new GroupClientData() {{
                                key = "quod";
                                value = "quod";
                            }}),
                        }};
                        etag = "esse";
                        name = "Miss Lowell Parisian";
                        resourceName = "occaecati";
                    }};;
                    readGroupFields = "fugit";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "optio";
                fields = "totam";
                key = "beatae";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "modi";
                uploadProtocol = "qui";
            }};            

            PeopleContactGroupsCreateResponse res = sdk.contactGroups.peopleContactGroupsCreate(req, new PeopleContactGroupsCreateSecurity("impedit", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleContactGroupsDelete

Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsDeleteRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsDeleteResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsDeleteRequest req = new PeopleContactGroupsDeleteRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "perferendis";
                deleteContacts = false;
                fields = "ad";
                key = "natus";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "dolor";
                uploadProtocol = "natus";
            }};            

            PeopleContactGroupsDeleteResponse res = sdk.contactGroups.peopleContactGroupsDelete(req, new PeopleContactGroupsDeleteSecurity("laboriosam", "hic") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleContactGroupsList

List all contact groups owned by the authenticated user. Members of the contact groups are not populated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsListRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsListResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsListSecurity;
import org.openapis.openapi.models.operations.PeopleContactGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.PeopleContactGroupsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsListRequest req = new PeopleContactGroupsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fuga";
                alt = AltEnum.MEDIA;
                callback = "corporis";
                fields = "iste";
                groupFields = "iure";
                key = "saepe";
                oauthToken = "quidem";
                pageSize = 99280L;
                pageToken = "ipsa";
                prettyPrint = false;
                quotaUser = "reiciendis";
                syncToken = "est";
                uploadType = "mollitia";
                uploadProtocol = "laborum";
            }};            

            PeopleContactGroupsListResponse res = sdk.contactGroups.peopleContactGroupsList(req, new PeopleContactGroupsListSecurity() {{
                option1 = new PeopleContactGroupsListSecurityOption1("dolores", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listContactGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleContactGroupsMembersModify

Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsMembersModifyRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsMembersModifyResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsMembersModifySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ModifyContactGroupMembersRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsMembersModifyRequest req = new PeopleContactGroupsMembersModifyRequest("corporis") {{
                dollarXgafv = XgafvEnum.ONE;
                modifyContactGroupMembersRequest = new ModifyContactGroupMembersRequest() {{
                    resourceNamesToAdd = new String[]{{
                        add("enim"),
                        add("omnis"),
                        add("nemo"),
                        add("minima"),
                    }};
                    resourceNamesToRemove = new String[]{{
                        add("accusantium"),
                        add("iure"),
                        add("culpa"),
                    }};
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "architecto";
                fields = "mollitia";
                key = "dolorem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            PeopleContactGroupsMembersModifyResponse res = sdk.contactGroups.peopleContactGroupsMembersModify(req, new PeopleContactGroupsMembersModifySecurity("occaecati", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.modifyContactGroupMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peopleContactGroupsUpdate

Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeopleContactGroupsUpdateRequest;
import org.openapis.openapi.models.operations.PeopleContactGroupsUpdateResponse;
import org.openapis.openapi.models.operations.PeopleContactGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ContactGroupInput;
import org.openapis.openapi.models.shared.GroupClientData;
import org.openapis.openapi.models.shared.UpdateContactGroupRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeopleContactGroupsUpdateRequest req = new PeopleContactGroupsUpdateRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                updateContactGroupRequestInput = new UpdateContactGroupRequestInput() {{
                    contactGroup = new ContactGroupInput() {{
                        clientData = new org.openapis.openapi.models.shared.GroupClientData[]{{
                            add(new GroupClientData() {{
                                key = "velit";
                                value = "error";
                            }}),
                            add(new GroupClientData() {{
                                key = "quia";
                                value = "quis";
                            }}),
                        }};
                        etag = "vitae";
                        name = "Matt Hamill";
                        resourceName = "sequi";
                    }};;
                    readGroupFields = "tenetur";
                    updateGroupFields = "ipsam";
                }};;
                accessToken = "id";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quasi";
                key = "error";
                oauthToken = "temporibus";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "quasi";
                uploadProtocol = "reiciendis";
            }};            

            PeopleContactGroupsUpdateResponse res = sdk.contactGroups.peopleContactGroupsUpdate(req, new PeopleContactGroupsUpdateSecurity("voluptatibus", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.contactGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
