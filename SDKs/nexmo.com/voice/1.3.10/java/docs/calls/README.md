# calls

## Overview

Fetch, Create and Modify voice calls

### Available Operations

* [createCall](#createcall) - Create an outbound call
* [getCall](#getcall) - Get detail of a specific call
* [getCalls](#getcalls) - Get details of your calls
* [updateCall](#updatecall) - Modify an in progress call

## createCall

Create an outbound Call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallResponse;
import org.openapis.openapi.models.operations.CreateCallSecurity;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrl;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlAnswerMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestAnswerUrlMachineDetectionEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNcco;
import org.openapis.openapi.models.shared.CreateCallRequestNccoEventMethodEnum;
import org.openapis.openapi.models.shared.CreateCallRequestNccoMachineDetectionEnum;
import org.openapis.openapi.models.shared.EndpointPhoneFrom;
import org.openapis.openapi.models.shared.EndpointPhoneTo;
import org.openapis.openapi.models.shared.EndpointSip;
import org.openapis.openapi.models.shared.EndpointVBCExtension;
import org.openapis.openapi.models.shared.EndpointWebsocket;
import org.openapis.openapi.models.shared.EndpointWebsocketContentTypeEnum;
import org.openapis.openapi.models.shared.EndpointWebsocketHeaders;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new CreateCallRequestNcco(                new EndpointPhoneFrom("14155550100", "phone");,                 new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("fuga", "in");
                                    put("corporis", "iste");
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("reiciendis", "est");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("laborum", "dolores");
                                    put("dolorem", "corporis");
                                    put("explicabo", "nobis");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("omnis", "nemo");
                                    put("minima", "excepturi");
                                }}),
                            }},                 new Object[]{{
                                add(new EndpointSip("sip") {{
                                    type = "sip";
                                    uri = "sip:rebekka@sip.example.com";
                                }}),
                            }}) {{
                eventMethod = CreateCallRequestNccoEventMethodEnum.GET;
                eventUrl = new String[]{{
                    add("http://meager-seabass.net"),
                    add("http://scaly-pathway.name"),
                    add("http://miserly-usage.net"),
                    add("https://canine-harmonise.info"),
                }};
                from = new EndpointPhoneFrom("14155550100", "phone") {{
                    number = "14155550100";
                    type = "phone";
                }};
                lengthTimer = 264555L;
                machineDetection = CreateCallRequestNccoMachineDetectionEnum.CONTINUE_;
                ncco = new java.util.HashMap<String, Object>[]{{
                    add(new java.util.HashMap<String, Object>() {{
                        put("cum", "esse");
                        put("ipsum", "excepturi");
                        put("aspernatur", "perferendis");
                        put("ad", "natus");
                    }}),
                }};
                randomFromNumber = false;
                ringingTimer = 149675L;
                to = new Object[]{{
                    add(new EndpointPhoneTo("14155550100", "phone") {{
                        dtmfAnswer = "p*123#";
                        number = "14155550100";
                        type = "phone";
                    }}),
                    add(new EndpointWebsocket(EndpointWebsocketContentTypeEnum.AUDIO_L16_RATE_EQUAL16000, "websocket") {{
                        contentType = EndpointWebsocketContentTypeEnum.AUDIO_L16_RATE_EQUAL16000;
                        headers = new EndpointWebsocketHeaders() {{
                            customerId = "ABC123";
                        }};
                        type = "websocket";
                        uri = "wss://example.com/socket";
                    }}),
                    add(new EndpointSip("sip") {{
                        type = "sip";
                        uri = "sip:rebekka@sip.example.com";
                    }}),
                }};
            }}            

            CreateCallResponse res = sdk.calls.createCall(req, new CreateCallSecurity("culpa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.createCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCall

Get detail of a specific call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallRequest;
import org.openapis.openapi.models.operations.GetCallResponse;
import org.openapis.openapi.models.operations.GetCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallRequest req = new GetCallRequest("doloribus");            

            GetCallResponse res = sdk.calls.getCall(req, new GetCallSecurity("sapiente") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCalls

Get details of your calls

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallsOrderEnum;
import org.openapis.openapi.models.operations.GetCallsRequest;
import org.openapis.openapi.models.operations.GetCallsResponse;
import org.openapis.openapi.models.operations.GetCallsSecurity;
import org.openapis.openapi.models.operations.GetCallsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallsRequest req = new GetCallsRequest() {{
                conversationUuid = "CON-f972836a-550f-45fa-956c-12a2ab5b7d22";
                dateEnd = OffsetDateTime.parse("2016-11-14T07:45:14Z");
                dateStart = OffsetDateTime.parse("2016-11-14T07:45:14Z");
                order = GetCallsOrderEnum.ASC;
                pageSize = 652790L;
                recordIndex = 208876L;
                status = GetCallsStatusEnum.STARTED;
            }};            

            GetCallsResponse res = sdk.calls.getCalls(req, new GetCallsSecurity("culpa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getCallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCall

Modify an in progress call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCallRequest;
import org.openapis.openapi.models.operations.UpdateCallResponse;
import org.openapis.openapi.models.operations.UpdateCallSecurity;
import org.openapis.openapi.models.shared.RequestTransferActionParamEnum;
import org.openapis.openapi.models.shared.UpdateCallRequestEarmuff;
import org.openapis.openapi.models.shared.UpdateCallRequestEarmuffActionEnum;
import org.openapis.openapi.models.shared.UpdateCallRequestHangup;
import org.openapis.openapi.models.shared.UpdateCallRequestHangupActionEnum;
import org.openapis.openapi.models.shared.UpdateCallRequestMute;
import org.openapis.openapi.models.shared.UpdateCallRequestMuteActionEnum;
import org.openapis.openapi.models.shared.UpdateCallRequestTransferAnswerUrl;
import org.openapis.openapi.models.shared.UpdateCallRequestTransferAnswerUrlDestination;
import org.openapis.openapi.models.shared.UpdateCallRequestTransferNcco;
import org.openapis.openapi.models.shared.UpdateCallRequestTransferNccoDestination;
import org.openapis.openapi.models.shared.UpdateCallRequestUnearmuff;
import org.openapis.openapi.models.shared.UpdateCallRequestUnearmuffActionEnum;
import org.openapis.openapi.models.shared.UpdateCallRequestUnmute;
import org.openapis.openapi.models.shared.UpdateCallRequestUnmuteActionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCallRequest req = new UpdateCallRequest(                new UpdateCallRequestTransferAnswerUrl(RequestTransferActionParamEnum.TRANSFER,                 new UpdateCallRequestTransferAnswerUrlDestination("ncco",                 new String[]{{
                                                                add("quia"),
                                                                add("quis"),
                                                                add("vitae"),
                                                            }});) {{
                                action = RequestTransferActionParamEnum.TRANSFER;
                                destination = new UpdateCallRequestTransferAnswerUrlDestination("ncco",                 new String[]{{
                                                    add("molestiae"),
                                                    add("velit"),
                                                }}) {{
                                    type = "ncco";
                                    url = new String[]{{
                                        add("mollitia"),
                                        add("occaecati"),
                                        add("numquam"),
                                        add("commodi"),
                                    }};
                                }};
                            }}, "laborum");            

            UpdateCallResponse res = sdk.calls.updateCall(req, new UpdateCallSecurity("animi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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
