# messages

## Overview

Send or track messages to one contact, a group of contacts or your entire address book

### Available Operations

* [messagesFetch](#messagesfetch) - Fetch message by id
* [messagesFetchAll](#messagesfetchall) - Fetch messages
* [messagesSend](#messagessend) - Send Messages

## messagesFetch

Returns a single messag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesFetchRequest;
import org.openapis.openapi.models.operations.MessagesFetchResponse;
import org.openapis.openapi.models.operations.MessagesFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesFetchRequest req = new MessagesFetchRequest("possimus", "aut");            

            MessagesFetchResponse res = sdk.messages.messagesFetch(req, new MessagesFetchSecurity("quasi") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.messageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesFetchAll

Fetch messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesFetchAllRequest;
import org.openapis.openapi.models.operations.MessagesFetchAllResponse;
import org.openapis.openapi.models.operations.MessagesFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesFetchAllRequest req = new MessagesFetchAllRequest("error") {{
                contactId = "temporibus";
                conversationId = "laborum";
                limit = 96098L;
                offset = 971945L;
            }};            

            MessagesFetchAllResponse res = sdk.messages.messagesFetchAll(req, new MessagesFetchAllSecurity("voluptatibus") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.messagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## messagesSend

Send Messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MessagesSendRequest;
import org.openapis.openapi.models.operations.MessagesSendResponse;
import org.openapis.openapi.models.operations.MessagesSendSecurity;
import org.openapis.openapi.models.shared.ContactRequest;
import org.openapis.openapi.models.shared.ContactRequestMobile;
import org.openapis.openapi.models.shared.SendMessagesRequest;
import org.openapis.openapi.models.shared.SendMessagesRequestFilters;
import org.openapis.openapi.models.shared.SendMessagesRequestMedia;
import org.openapis.openapi.models.shared.SendMessagesRequestPhoneNumberFilter;
import org.openapis.openapi.models.shared.SendMessagesRequestPhoneNumberFilterGroup;
import org.openapis.openapi.models.shared.SendMessagesRequestTypeEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MessagesSendRequest req = new MessagesSendRequest("vero") {{
                sendMessagesRequest = new SendMessagesRequest() {{
                    contacts = new org.openapis.openapi.models.shared.ContactRequest[]{{
                        add(new ContactRequest() {{
                            attributes = new java.util.HashMap<String, Object>() {{
                                put("voluptatibus", "ipsa");
                                put("omnis", "voluptate");
                                put("cum", "perferendis");
                            }};
                            email = "chris@sakari.io";
                            firstName = "Chris";
                            id = "074f1547-1b5e-46e1-bb99-d488e1e91e45";
                            lastName = "Bloggs";
                            mobile = new ContactRequestMobile() {{
                                country = "Algeria";
                                number = "123-456-7890";
                            }};
                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    tag = "quibusdam";
                                    visible = false;
                                }}),
                                add(new Tag() {{
                                    tag = "explicabo";
                                    visible = false;
                                }}),
                                add(new Tag() {{
                                    tag = "deserunt";
                                    visible = false;
                                }}),
                            }};
                        }}),
                        add(new ContactRequest() {{
                            attributes = new java.util.HashMap<String, Object>() {{
                                put("quibusdam", "labore");
                                put("modi", "qui");
                                put("aliquid", "cupiditate");
                            }};
                            email = "chris@sakari.io";
                            firstName = "Chris";
                            id = "802d502a-94bb-44f6-bc96-9e9a3efa77df";
                            lastName = "Bloggs";
                            mobile = new ContactRequestMobile() {{
                                country = "Peru";
                                number = "123-456-7890";
                            }};
                            tags = new org.openapis.openapi.models.shared.Tag[]{{
                                add(new Tag() {{
                                    tag = "magnam";
                                    visible = false;
                                }}),
                            }};
                        }}),
                    }};
                    conversationStrategy = "cumque";
                    conversations = new String[]{{
                        add("ea"),
                        add("aliquid"),
                        add("laborum"),
                        add("accusamus"),
                    }};
                    filters = new SendMessagesRequestFilters() {{
                        attributes = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("enim", "accusamus");
                                put("delectus", "quidem");
                                put("provident", "nam");
                            }}),
                        }};
                        tags = new String[]{{
                            add("blanditiis"),
                            add("deleniti"),
                            add("sapiente"),
                        }};
                    }};;
                    media = new org.openapis.openapi.models.shared.SendMessagesRequestMedia[]{{
                        add(new SendMessagesRequestMedia() {{
                            url = "deserunt";
                        }}),
                    }};
                    phoneNumberFilter = new SendMessagesRequestPhoneNumberFilter() {{
                        group = new SendMessagesRequestPhoneNumberFilterGroup() {{
                            id = "66997074-ba44-469b-ae21-41959890afa5";
                        }};;
                    }};;
                    template = "eum";
                    type = SendMessagesRequestTypeEnum.SMS;
                }};;
            }};            

            MessagesSendResponse res = sdk.messages.messagesSend(req, new MessagesSendSecurity("necessitatibus") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sendMessagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
