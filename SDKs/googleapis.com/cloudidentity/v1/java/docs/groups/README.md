# groups

### Available Operations

* [cloudidentityGroupsCreate](#cloudidentitygroupscreate) - Creates a Group.
* [cloudidentityGroupsList](#cloudidentitygroupslist) - Lists the `Group` resources under a customer or namespace.
* [cloudidentityGroupsLookup](#cloudidentitygroupslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
* [cloudidentityGroupsMembershipsCheckTransitiveMembership](#cloudidentitygroupsmembershipschecktransitivemembership) - Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
* [cloudidentityGroupsMembershipsCreate](#cloudidentitygroupsmembershipscreate) - Creates a `Membership`.
* [cloudidentityGroupsMembershipsGetMembershipGraph](#cloudidentitygroupsmembershipsgetmembershipgraph) - Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
* [cloudidentityGroupsMembershipsList](#cloudidentitygroupsmembershipslist) - Lists the `Membership`s within a `Group`.
* [cloudidentityGroupsMembershipsLookup](#cloudidentitygroupsmembershipslookup) - Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
* [cloudidentityGroupsMembershipsModifyMembershipRoles](#cloudidentitygroupsmembershipsmodifymembershiproles) - Modifies the `MembershipRole`s of a `Membership`.
* [cloudidentityGroupsMembershipsSearchDirectGroups](#cloudidentitygroupsmembershipssearchdirectgroups) - Searches direct groups of a member.
* [cloudidentityGroupsMembershipsSearchTransitiveGroups](#cloudidentitygroupsmembershipssearchtransitivegroups) - Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
* [cloudidentityGroupsMembershipsSearchTransitiveMemberships](#cloudidentitygroupsmembershipssearchtransitivememberships) - Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
* [cloudidentityGroupsSearch](#cloudidentitygroupssearch) - Searches for `Group` resources matching a specified query.

## cloudidentityGroupsCreate

Creates a Group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateInitialGroupConfigEnum;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DynamicGroupMetadata;
import org.openapis.openapi.models.shared.DynamicGroupQuery;
import org.openapis.openapi.models.shared.DynamicGroupQueryResourceTypeEnum;
import org.openapis.openapi.models.shared.DynamicGroupStatus;
import org.openapis.openapi.models.shared.DynamicGroupStatusStatusEnum;
import org.openapis.openapi.models.shared.EntityKey;
import org.openapis.openapi.models.shared.GroupInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsCreateRequest req = new CloudidentityGroupsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                groupInput = new GroupInput() {{
                    description = "accusamus";
                    displayName = "non";
                    dynamicGroupMetadata = new DynamicGroupMetadata() {{
                        queries = new org.openapis.openapi.models.shared.DynamicGroupQuery[]{{
                            add(new DynamicGroupQuery() {{
                                query = "enim";
                                resourceType = DynamicGroupQueryResourceTypeEnum.USER;
                            }}),
                            add(new DynamicGroupQuery() {{
                                query = "delectus";
                                resourceType = DynamicGroupQueryResourceTypeEnum.USER;
                            }}),
                            add(new DynamicGroupQuery() {{
                                query = "provident";
                                resourceType = DynamicGroupQueryResourceTypeEnum.USER;
                            }}),
                        }};
                        status = new DynamicGroupStatus() {{
                            status = DynamicGroupStatusStatusEnum.UPDATING_MEMBERSHIPS;
                            statusTime = "blanditiis";
                        }};;
                    }};;
                    groupKey = new EntityKey() {{
                        id = "8f3a6699-7074-4ba4-869b-6e2141959890";
                        namespace = "mollitia";
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("mollitia", "ad");
                        put("eum", "dolor");
                        put("necessitatibus", "odit");
                        put("nemo", "quasi");
                    }};
                    parent = "iure";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "eius";
                fields = "maxime";
                initialGroupConfig = CloudidentityGroupsCreateInitialGroupConfigEnum.WITH_INITIAL_OWNER;
                key = "facilis";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "architecto";
                uploadProtocol = "repudiandae";
            }};            

            CloudidentityGroupsCreateResponse res = sdk.groups.cloudidentityGroupsCreate(req, new CloudidentityGroupsCreateSecurity() {{
                option1 = new CloudidentityGroupsCreateSecurityOption1("ullam", "expedita") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsList

Lists the `Group` resources under a customer or namespace.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsListRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsListResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsListSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsListSecurityOption3;
import org.openapis.openapi.models.operations.CloudidentityGroupsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsListRequest req = new CloudidentityGroupsListRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sed";
                fields = "saepe";
                key = "pariatur";
                oauthToken = "accusantium";
                pageSize = 162493L;
                pageToken = "praesentium";
                parent = "natus";
                prettyPrint = false;
                quotaUser = "magni";
                uploadType = "sunt";
                uploadProtocol = "quo";
                view = CloudidentityGroupsListViewEnum.FULL;
            }};            

            CloudidentityGroupsListResponse res = sdk.groups.cloudidentityGroupsList(req, new CloudidentityGroupsListSecurity() {{
                option1 = new CloudidentityGroupsListSecurityOption1("pariatur", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsLookupSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsLookupRequest req = new CloudidentityGroupsLookupRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "excepturi";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "accusantium";
                groupKeyId = "ab";
                groupKeyNamespace = "maiores";
                key = "quidem";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "autem";
                uploadProtocol = "nam";
            }};            

            CloudidentityGroupsLookupResponse res = sdk.groups.cloudidentityGroupsLookup(req, new CloudidentityGroupsLookupSecurity() {{
                option1 = new CloudidentityGroupsLookupSecurityOption1("eaque", "pariatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lookupGroupNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsCheckTransitiveMembership

Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest req = new CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest("nemo") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "perferendis";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "aut";
                key = "cumque";
                oauthToken = "corporis";
                prettyPrint = false;
                query = "hic";
                quotaUser = "libero";
                uploadType = "nobis";
                uploadProtocol = "dolores";
            }};            

            CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse res = sdk.groups.cloudidentityGroupsMembershipsCheckTransitiveMembership(req, new CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity() {{
                option1 = new CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1("quis", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.checkTransitiveMembershipResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsCreate

Creates a `Membership`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCreateRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCreateResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCreateSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EntityKey;
import org.openapis.openapi.models.shared.ExpiryDetail;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MembershipRoleInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsCreateRequest req = new CloudidentityGroupsMembershipsCreateRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                membershipInput = new MembershipInput() {{
                    preferredMemberKey = new EntityKey() {{
                        id = "53202c73-d5fe-49b9-8c28-909b3fe49a8d";
                        namespace = "provident";
                    }};;
                    roles = new org.openapis.openapi.models.shared.MembershipRoleInput[]{{
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "libero";
                            }};
                            name = "Alex Luettgen";
                        }}),
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "dolorem";
                            }};
                            name = "Norma Erdman";
                        }}),
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "cum";
                            }};
                            name = "Marian Wisozk";
                        }}),
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "numquam";
                            }};
                            name = "Melissa Bednar";
                        }}),
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.PROTO;
                callback = "quidem";
                fields = "voluptatibus";
                key = "voluptas";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "eos";
                uploadType = "atque";
                uploadProtocol = "sit";
            }};            

            CloudidentityGroupsMembershipsCreateResponse res = sdk.groups.cloudidentityGroupsMembershipsCreate(req, new CloudidentityGroupsMembershipsCreateSecurity() {{
                option1 = new CloudidentityGroupsMembershipsCreateSecurityOption1("fugiat", "ab") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsGetMembershipGraph

Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsGetMembershipGraphRequest req = new CloudidentityGroupsMembershipsGetMembershipGraphRequest("soluta") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "dolorum";
                fields = "deleniti";
                key = "omnis";
                oauthToken = "necessitatibus";
                prettyPrint = false;
                query = "distinctio";
                quotaUser = "asperiores";
                uploadType = "nihil";
                uploadProtocol = "ipsum";
            }};            

            CloudidentityGroupsMembershipsGetMembershipGraphResponse res = sdk.groups.cloudidentityGroupsMembershipsGetMembershipGraph(req, new CloudidentityGroupsMembershipsGetMembershipGraphSecurity() {{
                option1 = new CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1("voluptate", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsList

Lists the `Membership`s within a `Group`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListSecurityOption3;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsListViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsListRequest req = new CloudidentityGroupsMembershipsListRequest("saepe") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "optio";
                key = "accusamus";
                oauthToken = "ad";
                pageSize = 904425L;
                pageToken = "suscipit";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "provident";
                uploadProtocol = "minima";
                view = CloudidentityGroupsMembershipsListViewEnum.FULL;
            }};            

            CloudidentityGroupsMembershipsListResponse res = sdk.groups.cloudidentityGroupsMembershipsList(req, new CloudidentityGroupsMembershipsListSecurity() {{
                option1 = new CloudidentityGroupsMembershipsListSecurityOption1("totam", "similique") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsLookup

Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsLookupSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsLookupRequest req = new CloudidentityGroupsMembershipsLookupRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "quod";
                key = "officiis";
                memberKeyId = "qui";
                memberKeyNamespace = "dolorum";
                oauthToken = "a";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "harum";
                uploadProtocol = "iusto";
            }};            

            CloudidentityGroupsMembershipsLookupResponse res = sdk.groups.cloudidentityGroupsMembershipsLookup(req, new CloudidentityGroupsMembershipsLookupSecurity() {{
                option1 = new CloudidentityGroupsMembershipsLookupSecurityOption1("ipsum", "quisquam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.lookupMembershipNameResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsModifyMembershipRoles

Modifies the `MembershipRole`s of a `Membership`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExpiryDetail;
import org.openapis.openapi.models.shared.MembershipRoleInput;
import org.openapis.openapi.models.shared.ModifyMembershipRolesRequestInput;
import org.openapis.openapi.models.shared.UpdateMembershipRolesParamsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsModifyMembershipRolesRequest req = new CloudidentityGroupsMembershipsModifyMembershipRolesRequest("tenetur") {{
                dollarXgafv = XgafvEnum.ONE;
                modifyMembershipRolesRequestInput = new ModifyMembershipRolesRequestInput() {{
                    addRoles = new org.openapis.openapi.models.shared.MembershipRoleInput[]{{
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "accusamus";
                            }};
                            name = "Darlene Effertz";
                        }}),
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "nihil";
                            }};
                            name = "Mamie Durgan";
                        }}),
                        add(new MembershipRoleInput() {{
                            expiryDetail = new ExpiryDetail() {{
                                expireTime = "libero";
                            }};
                            name = "Joanna Kohler";
                        }}),
                    }};
                    removeRoles = new String[]{{
                        add("cupiditate"),
                    }};
                    updateRolesParams = new org.openapis.openapi.models.shared.UpdateMembershipRolesParamsInput[]{{
                        add(new UpdateMembershipRolesParamsInput() {{
                            fieldMask = "pariatur";
                            membershipRole = new MembershipRoleInput() {{
                                expiryDetail = new ExpiryDetail() {{
                                    expireTime = "soluta";
                                }};
                                name = "Kayla Larson";
                            }};
                        }}),
                        add(new UpdateMembershipRolesParamsInput() {{
                            fieldMask = "dolores";
                            membershipRole = new MembershipRoleInput() {{
                                expiryDetail = new ExpiryDetail() {{
                                    expireTime = "distinctio";
                                }};
                                name = "Gilbert Kohler";
                            }};
                        }}),
                        add(new UpdateMembershipRolesParamsInput() {{
                            fieldMask = "qui";
                            membershipRole = new MembershipRoleInput() {{
                                expiryDetail = new ExpiryDetail() {{
                                    expireTime = "neque";
                                }};
                                name = "Mrs. Louise Kuhlman";
                            }};
                        }}),
                        add(new UpdateMembershipRolesParamsInput() {{
                            fieldMask = "hic";
                            membershipRole = new MembershipRoleInput() {{
                                expiryDetail = new ExpiryDetail() {{
                                    expireTime = "voluptatem";
                                }};
                                name = "Dr. Dominic Rohan";
                            }};
                        }}),
                    }};
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "quos";
                fields = "tempore";
                key = "cupiditate";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "delectus";
                uploadType = "dolorem";
                uploadProtocol = "dolore";
            }};            

            CloudidentityGroupsMembershipsModifyMembershipRolesResponse res = sdk.groups.cloudidentityGroupsMembershipsModifyMembershipRoles(req, new CloudidentityGroupsMembershipsModifyMembershipRolesSecurity() {{
                option1 = new CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1("labore", "adipisci") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.modifyMembershipRolesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsSearchDirectGroups

Searches direct groups of a member.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchDirectGroupsRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchDirectGroupsResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsSearchDirectGroupsRequest req = new CloudidentityGroupsMembershipsSearchDirectGroupsRequest("dolorum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quas";
                fields = "itaque";
                key = "consequatur";
                oauthToken = "est";
                orderBy = "repellendus";
                pageSize = 785153L;
                pageToken = "doloribus";
                prettyPrint = false;
                query = "ut";
                quotaUser = "facilis";
                uploadType = "cupiditate";
                uploadProtocol = "qui";
            }};            

            CloudidentityGroupsMembershipsSearchDirectGroupsResponse res = sdk.groups.cloudidentityGroupsMembershipsSearchDirectGroups(req);

            if (res.searchDirectGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsSearchTransitiveGroups

Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest req = new CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest("quae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odio";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "quisquam";
                key = "vero";
                oauthToken = "omnis";
                pageSize = 338159L;
                pageToken = "ipsum";
                prettyPrint = false;
                query = "delectus";
                quotaUser = "voluptate";
                uploadType = "consectetur";
                uploadProtocol = "vero";
            }};            

            CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse res = sdk.groups.cloudidentityGroupsMembershipsSearchTransitiveGroups(req, new CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity() {{
                option1 = new CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1("tenetur", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchTransitiveGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsMembershipsSearchTransitiveMemberships

Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest req = new CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quod";
                alt = AltEnum.MEDIA;
                callback = "similique";
                fields = "facilis";
                key = "vero";
                oauthToken = "ducimus";
                pageSize = 293020L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "sequi";
                uploadProtocol = "natus";
            }};            

            CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse res = sdk.groups.cloudidentityGroupsMembershipsSearchTransitiveMemberships(req, new CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity() {{
                option1 = new CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1("impedit", "aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchTransitiveMembershipsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudidentityGroupsSearch

Searches for `Group` resources matching a specified query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchRequest;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchResponse;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchSecurity;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchSecurityOption2;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchSecurityOption3;
import org.openapis.openapi.models.operations.CloudidentityGroupsSearchViewEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudidentityGroupsSearchRequest req = new CloudidentityGroupsSearchRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "exercitationem";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "porro";
                key = "maiores";
                oauthToken = "doloribus";
                pageSize = 478370L;
                pageToken = "eligendi";
                prettyPrint = false;
                query = "ducimus";
                quotaUser = "alias";
                uploadType = "officia";
                uploadProtocol = "tempora";
                view = CloudidentityGroupsSearchViewEnum.BASIC;
            }};            

            CloudidentityGroupsSearchResponse res = sdk.groups.cloudidentityGroupsSearch(req, new CloudidentityGroupsSearchSecurity() {{
                option1 = new CloudidentityGroupsSearchSecurityOption1("ea", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
