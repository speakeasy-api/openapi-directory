# member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [createMember](#createmember) - Create a member
* [deleteMember](#deletemember) - Delete a member
* [getMember](#getmember) - Retrieve a member
* [~~getMembers~~](#getmembers) - List members :warning: **Deprecated**
* [updateMember](#updatemember) - Update a member

## createMember

Create a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMemberRequest;
import org.openapis.openapi.models.operations.CreateMemberRequestBody;
import org.openapis.openapi.models.operations.CreateMemberResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.ChannelFrom1;
import org.openapis.openapi.models.shared.ChannelFrom2;
import org.openapis.openapi.models.shared.ChannelFrom3;
import org.openapis.openapi.models.shared.ChannelFrom4;
import org.openapis.openapi.models.shared.ChannelFrom4ContentTypeEnum;
import org.openapis.openapi.models.shared.ChannelFrom4Headers;
import org.openapis.openapi.models.shared.ChannelFrom5;
import org.openapis.openapi.models.shared.ChannelLegIds;
import org.openapis.openapi.models.shared.ChannelTo2;
import org.openapis.openapi.models.shared.ChannelTypeEnum;
import org.openapis.openapi.models.shared.Four;
import org.openapis.openapi.models.shared.MemberActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Three;
import org.openapis.openapi.models.shared.ThreeContentTypeEnum;
import org.openapis.openapi.models.shared.ThreeHeaders;
import org.openapis.openapi.models.shared.Two;
import org.openapis.openapi.models.shared.Zero;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            CreateMemberRequest req = new CreateMemberRequest("quo") {{
                requestBody = new CreateMemberRequestBody(                new Channel() {{
                                    from = new ChannelFrom1("app", "jamie");;
                                    legId = "a595959595959595995";
                                    legIds = new org.openapis.openapi.models.shared.ChannelLegIds[]{{
                                        add(new ChannelLegIds() {{
                                            legId = "a595959595959595995";
                                        }}),
                                        add(new ChannelLegIds() {{
                                            legId = "a595959595959595995";
                                        }}),
                                        add(new ChannelLegIds() {{
                                            legId = "a595959595959595995";
                                        }}),
                                        add(new ChannelLegIds() {{
                                            legId = "a595959595959595995";
                                        }}),
                                    }};
                                    to = new Four("1234", "vbc");;
                                    type = ChannelTypeEnum.PHONE;
                                }};, "USR-63f61863-4a51-4f6b-86e1-46edebio0391") {{
                    action = MemberActionEnum.JOIN;
                    knockingId = "a972836a-450f-35fa-156c-52a2ab5b7d25";
                    media = new java.util.HashMap<String, Object>() {{
                        put("molestiae", "quod");
                        put("quod", "esse");
                        put("totam", "porro");
                        put("dolorum", "dicta");
                    }};
                    memberId = "MEM-63f61863-4a51-4f6b-86e1-46edebio0391";
                    memberIdInviting = "MEM-63f61863-4a51-4f6b-86e1-46edebio0391";
                }};;
            }};            

            CreateMemberResponse res = sdk.member.createMember(req);

            if (res.createMember201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMember

Delete a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMemberRequest;
import org.openapis.openapi.models.operations.DeleteMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            DeleteMemberRequest req = new DeleteMemberRequest("officia", "occaecati");            

            DeleteMemberResponse res = sdk.member.deleteMember(req);

            if (res.deleteMember200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMember

Retrieve a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMemberRequest;
import org.openapis.openapi.models.operations.GetMemberResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetMemberRequest req = new GetMemberRequest("deleniti", "hic");            

            GetMemberResponse res = sdk.member.getMember(req);

            if (res.getMember200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~getMembers~~

This endpoint is **DEPRECATED**. Please use [/v0.2/members](/api/conversation.v2#get-members).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMembersRequest;
import org.openapis.openapi.models.operations.GetMembersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetMembersRequest req = new GetMembersRequest("totam");            

            GetMembersResponse res = sdk.member.getMembers(req);

            if (res.getMembers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMember

Update a member

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMemberRequest;
import org.openapis.openapi.models.operations.UpdateMemberRequestBody;
import org.openapis.openapi.models.operations.UpdateMemberResponse;
import org.openapis.openapi.models.shared.Channel;
import org.openapis.openapi.models.shared.ChannelFrom1;
import org.openapis.openapi.models.shared.ChannelFrom2;
import org.openapis.openapi.models.shared.ChannelFrom3;
import org.openapis.openapi.models.shared.ChannelFrom4;
import org.openapis.openapi.models.shared.ChannelFrom4ContentTypeEnum;
import org.openapis.openapi.models.shared.ChannelFrom4Headers;
import org.openapis.openapi.models.shared.ChannelFrom5;
import org.openapis.openapi.models.shared.ChannelLegIds;
import org.openapis.openapi.models.shared.ChannelTo2;
import org.openapis.openapi.models.shared.ChannelTypeEnum;
import org.openapis.openapi.models.shared.Four;
import org.openapis.openapi.models.shared.MemberActionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Three;
import org.openapis.openapi.models.shared.ThreeContentTypeEnum;
import org.openapis.openapi.models.shared.ThreeHeaders;
import org.openapis.openapi.models.shared.Two;
import org.openapis.openapi.models.shared.Zero;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            UpdateMemberRequest req = new UpdateMemberRequest("commodi", "molestiae") {{
                requestBody = new UpdateMemberRequestBody() {{
                    action = MemberActionEnum.JOIN;
                    channel = new Channel() {{
                        from = new ChannelFrom2("14155550100", "phone");;
                        legId = "a595959595959595995";
                        legIds = new org.openapis.openapi.models.shared.ChannelLegIds[]{{
                            add(new ChannelLegIds() {{
                                legId = "a595959595959595995";
                            }}),
                        }};
                        to = new Three(ThreeContentTypeEnum.AUDIO_L16_RATE_EQUAL16000, "websocket") {{
                            headers = new ThreeHeaders() {{
                                customerId = "ABC123";
                            }};;
                            uri = "wss://example.com/socket";
                        }};;
                        type = ChannelTypeEnum.PHONE;
                    }};;
                }};;
            }};            

            UpdateMemberResponse res = sdk.member.updateMember(req);

            if (res.updateMember200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
