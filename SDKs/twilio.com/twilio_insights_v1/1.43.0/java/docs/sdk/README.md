# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [fetchAccountSettings](#fetchaccountsettings)
* [fetchAnnotation](#fetchannotation) - Fetch a specific Annotation.
* [fetchCall](#fetchcall)
* [fetchConference](#fetchconference) - Fetch a specific Conference.
* [fetchConferenceParticipant](#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [fetchSummary](#fetchsummary)
* [fetchVideoParticipantSummary](#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [fetchVideoRoomSummary](#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [listCallSummaries](#listcallsummaries)
* [listConference](#listconference) - Retrieve a list of Conferences.
* [listConferenceParticipant](#listconferenceparticipant) - List Conference Participants.
* [listEvent](#listevent)
* [listMetric](#listmetric)
* [listVideoParticipantSummary](#listvideoparticipantsummary) - Get a list of room participants.
* [listVideoRoomSummary](#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [updateAccountSettings](#updateaccountsettings)
* [updateAnnotation](#updateannotation) - Create/Update the annotation for the call

## fetchAccountSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAccountSettingsRequest;
import org.openapis.openapi.models.operations.FetchAccountSettingsResponse;
import org.openapis.openapi.models.operations.FetchAccountSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAccountSettingsRequest req = new FetchAccountSettingsRequest() {{
                subaccountSid = "quibusdam";
            }};            

            FetchAccountSettingsResponse res = sdk.sdk.fetchAccountSettings(req, new FetchAccountSettingsSecurity("unde", "nulla") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1AccountSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchAnnotation

Fetch a specific Annotation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchAnnotationRequest;
import org.openapis.openapi.models.operations.FetchAnnotationResponse;
import org.openapis.openapi.models.operations.FetchAnnotationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchAnnotationRequest req = new FetchAnnotationRequest("corrupti");            

            FetchAnnotationResponse res = sdk.sdk.fetchAnnotation(req, new FetchAnnotationSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1CallAnnotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCall

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCallRequest;
import org.openapis.openapi.models.operations.FetchCallResponse;
import org.openapis.openapi.models.operations.FetchCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCallRequest req = new FetchCallRequest("error");            

            FetchCallResponse res = sdk.sdk.fetchCall(req, new FetchCallSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1Call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConference

Fetch a specific Conference.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConferenceRequest;
import org.openapis.openapi.models.operations.FetchConferenceResponse;
import org.openapis.openapi.models.operations.FetchConferenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConferenceRequest req = new FetchConferenceRequest("iure");            

            FetchConferenceResponse res = sdk.sdk.fetchConference(req, new FetchConferenceSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1Conference != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConferenceParticipant

Fetch a specific Conference Participant Summary.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConferenceParticipantRequest;
import org.openapis.openapi.models.operations.FetchConferenceParticipantResponse;
import org.openapis.openapi.models.operations.FetchConferenceParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConferenceParticipantRequest req = new FetchConferenceParticipantRequest("ipsa", "delectus") {{
                events = "tempora";
                metrics = "suscipit";
            }};            

            FetchConferenceParticipantResponse res = sdk.sdk.fetchConferenceParticipant(req, new FetchConferenceParticipantSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1ConferenceConferenceParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSummary

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSummaryRequest;
import org.openapis.openapi.models.operations.FetchSummaryResponse;
import org.openapis.openapi.models.operations.FetchSummarySecurity;
import org.openapis.openapi.models.shared.SummaryEnumProcessingStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSummaryRequest req = new FetchSummaryRequest("placeat") {{
                processingState = SummaryEnumProcessingStateEnum.PARTIAL;
            }};            

            FetchSummaryResponse res = sdk.sdk.fetchSummary(req, new FetchSummarySecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1CallSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVideoParticipantSummary

Get Video Log Analyzer data for a Room Participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVideoParticipantSummaryRequest;
import org.openapis.openapi.models.operations.FetchVideoParticipantSummaryResponse;
import org.openapis.openapi.models.operations.FetchVideoParticipantSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVideoParticipantSummaryRequest req = new FetchVideoParticipantSummaryRequest("nisi", "recusandae");            

            FetchVideoParticipantSummaryResponse res = sdk.sdk.fetchVideoParticipantSummary(req, new FetchVideoParticipantSummarySecurity("temporibus", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1VideoRoomSummaryVideoParticipantSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchVideoRoomSummary

Get Video Log Analyzer data for a Room.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchVideoRoomSummaryRequest;
import org.openapis.openapi.models.operations.FetchVideoRoomSummaryResponse;
import org.openapis.openapi.models.operations.FetchVideoRoomSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchVideoRoomSummaryRequest req = new FetchVideoRoomSummaryRequest("quis");            

            FetchVideoRoomSummaryResponse res = sdk.sdk.fetchVideoRoomSummary(req, new FetchVideoRoomSummarySecurity("veritatis", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1VideoRoomSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCallSummaries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallSummariesRequest;
import org.openapis.openapi.models.operations.ListCallSummariesResponse;
import org.openapis.openapi.models.operations.ListCallSummariesSecurity;
import org.openapis.openapi.models.shared.CallSummariesEnumAnsweredByEnum;
import org.openapis.openapi.models.shared.CallSummariesEnumProcessingStateRequestEnum;
import org.openapis.openapi.models.shared.CallSummariesEnumSortByEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallSummariesRequest req = new ListCallSummariesRequest() {{
                abnormalSession = false;
                answeredBy = CallSummariesEnumAnsweredByEnum.UNKNOWN;
                branded = false;
                callState = "ipsam";
                callType = "repellendus";
                direction = "sapiente";
                endTime = "quo";
                from = "odit";
                fromCarrier = "at";
                fromCountryCode = "at";
                hasTag = false;
                page = 978619L;
                pageSize = 473608L;
                pageToken = "quod";
                processingState = CallSummariesEnumProcessingStateRequestEnum.ALL;
                sortBy = CallSummariesEnumSortByEnum.START_TIME;
                startTime = "totam";
                subaccount = "porro";
                to = "dolorum";
                toCarrier = "dicta";
                toCountryCode = "nam";
                verifiedCaller = false;
            }};            

            ListCallSummariesResponse res = sdk.sdk.listCallSummaries(req, new ListCallSummariesSecurity("officia", "occaecati") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCallSummariesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConference

Retrieve a list of Conferences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConferenceRequest;
import org.openapis.openapi.models.operations.ListConferenceResponse;
import org.openapis.openapi.models.operations.ListConferenceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConferenceRequest req = new ListConferenceRequest() {{
                conferenceSid = "fugit";
                createdAfter = "deleniti";
                createdBefore = "hic";
                detectedIssues = "optio";
                endReason = "totam";
                friendlyName = "beatae";
                mixerRegion = "commodi";
                page = 473600L;
                pageSize = 264555L;
                pageToken = "qui";
                status = "impedit";
                subaccount = "cum";
                tags = "esse";
            }};            

            ListConferenceResponse res = sdk.sdk.listConference(req, new ListConferenceSecurity("ipsum", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConferenceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConferenceParticipant

List Conference Participants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConferenceParticipantRequest;
import org.openapis.openapi.models.operations.ListConferenceParticipantResponse;
import org.openapis.openapi.models.operations.ListConferenceParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConferenceParticipantRequest req = new ListConferenceParticipantRequest("aspernatur") {{
                events = "perferendis";
                label = "ad";
                page = 617636L;
                pageSize = 149675L;
                pageToken = "iste";
                participantSid = "dolor";
            }};            

            ListConferenceParticipantResponse res = sdk.sdk.listConferenceParticipant(req, new ListConferenceParticipantSecurity("natus", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConferenceParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEvent

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventRequest;
import org.openapis.openapi.models.operations.ListEventResponse;
import org.openapis.openapi.models.operations.ListEventSecurity;
import org.openapis.openapi.models.shared.EventEnumTwilioEdgeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListEventRequest req = new ListEventRequest("hic") {{
                edge = EventEnumTwilioEdgeEnum.CLIENT_EDGE;
                page = 681820L;
                pageSize = 449950L;
                pageToken = "corporis";
            }};            

            ListEventResponse res = sdk.sdk.listEvent(req, new ListEventSecurity("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMetric

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMetricRequest;
import org.openapis.openapi.models.operations.ListMetricResponse;
import org.openapis.openapi.models.operations.ListMetricSecurity;
import org.openapis.openapi.models.shared.MetricEnumStreamDirectionEnum;
import org.openapis.openapi.models.shared.MetricEnumTwilioEdgeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMetricRequest req = new ListMetricRequest("saepe") {{
                direction = MetricEnumStreamDirectionEnum.OUTBOUND;
                edge = MetricEnumTwilioEdgeEnum.UNKNOWN_EDGE;
                page = 60225L;
                pageSize = 969810L;
                pageToken = "est";
            }};            

            ListMetricResponse res = sdk.sdk.listMetric(req, new ListMetricSecurity("mollitia", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMetricResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVideoParticipantSummary

Get a list of room participants.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVideoParticipantSummaryRequest;
import org.openapis.openapi.models.operations.ListVideoParticipantSummaryResponse;
import org.openapis.openapi.models.operations.ListVideoParticipantSummarySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVideoParticipantSummaryRequest req = new ListVideoParticipantSummaryRequest("dolores") {{
                page = 210382L;
                pageSize = 358152L;
                pageToken = "explicabo";
            }};            

            ListVideoParticipantSummaryResponse res = sdk.sdk.listVideoParticipantSummary(req, new ListVideoParticipantSummarySecurity("nobis", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVideoParticipantSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listVideoRoomSummary

Get a list of Programmable Video Rooms.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListVideoRoomSummaryRequest;
import org.openapis.openapi.models.operations.ListVideoRoomSummaryResponse;
import org.openapis.openapi.models.operations.ListVideoRoomSummarySecurity;
import org.openapis.openapi.models.shared.VideoRoomSummaryEnumCodecEnum;
import org.openapis.openapi.models.shared.VideoRoomSummaryEnumRoomTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListVideoRoomSummaryRequest req = new ListVideoRoomSummaryRequest() {{
                codec = new org.openapis.openapi.models.shared.VideoRoomSummaryEnumCodecEnum[]{{
                    add(VideoRoomSummaryEnumCodecEnum.H264),
                    add(VideoRoomSummaryEnumCodecEnum.VP8),
                    add(VideoRoomSummaryEnumCodecEnum.H264),
                }};
                createdAfter = OffsetDateTime.parse("2022-07-24T21:51:02.112Z");
                createdBefore = OffsetDateTime.parse("2021-01-09T11:41:25.666Z");
                page = 958950L;
                pageSize = 102044L;
                pageToken = "mollitia";
                roomName = "dolorem";
                roomType = new org.openapis.openapi.models.shared.VideoRoomSummaryEnumRoomTypeEnum[]{{
                    add(VideoRoomSummaryEnumRoomTypeEnum.GO),
                    add(VideoRoomSummaryEnumRoomTypeEnum.GROUP_SMALL),
                    add(VideoRoomSummaryEnumRoomTypeEnum.GROUP),
                }};
            }};            

            ListVideoRoomSummaryResponse res = sdk.sdk.listVideoRoomSummary(req, new ListVideoRoomSummarySecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listVideoRoomSummaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccountSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccountSettingsResponse;
import org.openapis.openapi.models.operations.UpdateAccountSettingsSecurity;
import org.openapis.openapi.models.operations.UpdateAccountSettingsUpdateAccountSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAccountSettingsUpdateAccountSettingsRequest req = new UpdateAccountSettingsUpdateAccountSettingsRequest() {{
                advancedFeatures = false;
                subaccountSid = "commodi";
                voiceTrace = false;
            }};            

            UpdateAccountSettingsResponse res = sdk.sdk.updateAccountSettings(req, new UpdateAccountSettingsSecurity("quam", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1AccountSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAnnotation

Create/Update the annotation for the call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAnnotationRequest;
import org.openapis.openapi.models.operations.UpdateAnnotationResponse;
import org.openapis.openapi.models.operations.UpdateAnnotationSecurity;
import org.openapis.openapi.models.operations.UpdateAnnotationUpdateAnnotationRequest;
import org.openapis.openapi.models.shared.AnnotationEnumAnsweredByEnum;
import org.openapis.openapi.models.shared.AnnotationEnumConnectivityIssueEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateAnnotationRequest req = new UpdateAnnotationRequest("velit") {{
                requestBody = new UpdateAnnotationUpdateAnnotationRequest() {{
                    answeredBy = AnnotationEnumAnsweredByEnum.HUMAN;
                    callScore = 158969L;
                    comment = "quis";
                    connectivityIssue = AnnotationEnumConnectivityIssueEnum.UNKNOWN_CONNECTIVITY_ISSUE;
                    incident = "laborum";
                    qualityIssues = "animi";
                    spam = false;
                }};;
            }};            

            UpdateAnnotationResponse res = sdk.sdk.updateAnnotation(req, new UpdateAnnotationSecurity("enim", "odit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.insightsV1CallAnnotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
