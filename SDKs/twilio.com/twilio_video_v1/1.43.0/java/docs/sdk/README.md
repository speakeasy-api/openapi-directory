# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createComposition](#createcomposition)
* [createCompositionHook](#createcompositionhook)
* [createCompositionSettings](#createcompositionsettings)
* [createRecordingSettings](#createrecordingsettings)
* [createRoom](#createroom)
* [deleteComposition](#deletecomposition) - Delete a Recording Composition resource identified by a Composition SID.
* [deleteCompositionHook](#deletecompositionhook) - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* [deleteRecording](#deleterecording) - Delete a Recording resource identified by a Recording SID.
* [deleteRoomRecording](#deleteroomrecording)
* [fetchComposition](#fetchcomposition) - Returns a single Composition resource identified by a Composition SID.
* [fetchCompositionHook](#fetchcompositionhook) - Returns a single CompositionHook resource identified by a CompositionHook SID.
* [fetchCompositionSettings](#fetchcompositionsettings)
* [fetchRecording](#fetchrecording) - Returns a single Recording resource identified by a Recording SID.
* [fetchRecordingSettings](#fetchrecordingsettings)
* [fetchRoom](#fetchroom)
* [fetchRoomParticipant](#fetchroomparticipant)
* [fetchRoomParticipantPublishedTrack](#fetchroomparticipantpublishedtrack) - Returns a single Track resource represented by TrackName or SID.
* [fetchRoomParticipantSubscribeRule](#fetchroomparticipantsubscriberule) - Returns a list of Subscribe Rules for the Participant.
* [fetchRoomParticipantSubscribedTrack](#fetchroomparticipantsubscribedtrack) - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* [fetchRoomRecording](#fetchroomrecording)
* [fetchRoomRecordingRule](#fetchroomrecordingrule) - Returns a list of Recording Rules for the Room.
* [listComposition](#listcomposition) - List of all Recording compositions.
* [listCompositionHook](#listcompositionhook) - List of all Recording CompositionHook resources.
* [listRecording](#listrecording) - List of all Track recordings.
* [listRoom](#listroom)
* [listRoomParticipant](#listroomparticipant)
* [listRoomParticipantPublishedTrack](#listroomparticipantpublishedtrack) - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* [listRoomParticipantSubscribedTrack](#listroomparticipantsubscribedtrack) - Returns a list of tracks that are subscribed for the participant.
* [listRoomRecording](#listroomrecording)
* [updateCompositionHook](#updatecompositionhook)
* [updateRoom](#updateroom)
* [updateRoomParticipant](#updateroomparticipant)
* [updateRoomParticipantAnonymize](#updateroomparticipantanonymize)
* [updateRoomParticipantSubscribeRule](#updateroomparticipantsubscriberule) - Update the Subscribe Rules for the Participant
* [updateRoomRecordingRule](#updateroomrecordingrule) - Update the Recording Rules for the Room

## createComposition

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequest;
import org.openapis.openapi.models.operations.CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCompositionResponse;
import org.openapis.openapi.models.operations.CreateCompositionSecurity;
import org.openapis.openapi.models.shared.CompositionEnumFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCompositionCreateCompositionRequest req = new CreateCompositionCreateCompositionRequest("minus") {{
                audioSources = new String[]{{
                    add("voluptatum"),
                    add("iusto"),
                    add("excepturi"),
                    add("nisi"),
                }};
                audioSourcesExcluded = new String[]{{
                    add("temporibus"),
                    add("ab"),
                    add("quis"),
                    add("veritatis"),
                }};
                format = CompositionEnumFormatEnum.WEBM;
                resolution = "perferendis";
                statusCallback = "http://sympathetic-viewer.net";
                statusCallbackMethod = CreateCompositionCreateCompositionRequestStatusCallbackMethodEnum.HEAD;
                trim = false;
                videoLayout = "at";
            }};            

            CreateCompositionResponse res = sdk.sdk.createComposition(req, new CreateCompositionSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Composition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCompositionHook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompositionHookCreateCompositionHookRequest;
import org.openapis.openapi.models.operations.CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCompositionHookResponse;
import org.openapis.openapi.models.operations.CreateCompositionHookSecurity;
import org.openapis.openapi.models.shared.CompositionHookEnumFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCompositionHookCreateCompositionHookRequest req = new CreateCompositionHookCreateCompositionHookRequest("molestiae") {{
                audioSources = new String[]{{
                    add("quod"),
                    add("esse"),
                    add("totam"),
                    add("porro"),
                }};
                audioSourcesExcluded = new String[]{{
                    add("dicta"),
                    add("nam"),
                    add("officia"),
                }};
                enabled = false;
                format = CompositionHookEnumFormatEnum.WEBM;
                resolution = "fugit";
                statusCallback = "https://wasteful-route.name";
                statusCallbackMethod = CreateCompositionHookCreateCompositionHookRequestStatusCallbackMethodEnum.HEAD;
                trim = false;
                videoLayout = "commodi";
            }};            

            CreateCompositionHookResponse res = sdk.sdk.createCompositionHook(req, new CreateCompositionHookSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1CompositionHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCompositionSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompositionSettingsCreateCompositionSettingsRequest;
import org.openapis.openapi.models.operations.CreateCompositionSettingsResponse;
import org.openapis.openapi.models.operations.CreateCompositionSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCompositionSettingsCreateCompositionSettingsRequest req = new CreateCompositionSettingsCreateCompositionSettingsRequest("qui") {{
                awsCredentialsSid = "impedit";
                awsS3Url = "https://jolly-cowboy.name";
                awsStorageEnabled = false;
                encryptionEnabled = false;
                encryptionKeySid = "aspernatur";
            }};            

            CreateCompositionSettingsResponse res = sdk.sdk.createCompositionSettings(req, new CreateCompositionSettingsSecurity("perferendis", "ad") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1CompositionSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRecordingSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRecordingSettingsCreateRecordingSettingsRequest;
import org.openapis.openapi.models.operations.CreateRecordingSettingsResponse;
import org.openapis.openapi.models.operations.CreateRecordingSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRecordingSettingsCreateRecordingSettingsRequest req = new CreateRecordingSettingsCreateRecordingSettingsRequest("natus") {{
                awsCredentialsSid = "sed";
                awsS3Url = "https://ecstatic-original.info";
                awsStorageEnabled = false;
                encryptionEnabled = false;
                encryptionKeySid = "hic";
            }};            

            CreateRecordingSettingsResponse res = sdk.sdk.createRecordingSettings(req, new CreateRecordingSettingsSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RecordingSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRoom

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRoomCreateRoomRequest;
import org.openapis.openapi.models.operations.CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateRoomResponse;
import org.openapis.openapi.models.operations.CreateRoomSecurity;
import org.openapis.openapi.models.shared.RoomEnumRoomTypeEnum;
import org.openapis.openapi.models.shared.RoomEnumVideoCodecEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateRoomCreateRoomRequest req = new CreateRoomCreateRoomRequest() {{
                audioOnly = false;
                emptyRoomTimeout = 449950L;
                enableTurn = false;
                largeRoom = false;
                maxParticipantDuration = 359508L;
                maxParticipants = 613064L;
                mediaRegion = "iure";
                recordParticipantsOnConnect = false;
                recordingRules = "saepe";
                statusCallback = "https://burdensome-bail.org";
                statusCallbackMethod = CreateRoomCreateRoomRequestStatusCallbackMethodEnum.PUT;
                type = RoomEnumRoomTypeEnum.GROUP;
                uniqueName = "laborum";
                unusedRoomTimeout = 170909L;
                videoCodecs = new org.openapis.openapi.models.shared.RoomEnumVideoCodecEnum[]{{
                    add(RoomEnumVideoCodecEnum.VP8),
                }};
            }};            

            CreateRoomResponse res = sdk.sdk.createRoom(req, new CreateRoomSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Room != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteComposition

Delete a Recording Composition resource identified by a Composition SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompositionRequest;
import org.openapis.openapi.models.operations.DeleteCompositionResponse;
import org.openapis.openapi.models.operations.DeleteCompositionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompositionRequest req = new DeleteCompositionRequest("enim");            

            DeleteCompositionResponse res = sdk.sdk.deleteComposition(req, new DeleteCompositionSecurity("omnis", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteCompositionHook

Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCompositionHookRequest;
import org.openapis.openapi.models.operations.DeleteCompositionHookResponse;
import org.openapis.openapi.models.operations.DeleteCompositionHookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompositionHookRequest req = new DeleteCompositionHookRequest("minima");            

            DeleteCompositionHookResponse res = sdk.sdk.deleteCompositionHook(req, new DeleteCompositionHookSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteRecording

Delete a Recording resource identified by a Recording SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRecordingRequest;
import org.openapis.openapi.models.operations.DeleteRecordingResponse;
import org.openapis.openapi.models.operations.DeleteRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRecordingRequest req = new DeleteRecordingRequest("iure");            

            DeleteRecordingResponse res = sdk.sdk.deleteRecording(req, new DeleteRecordingSecurity("culpa", "doloribus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## deleteRoomRecording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRoomRecordingRequest;
import org.openapis.openapi.models.operations.DeleteRoomRecordingResponse;
import org.openapis.openapi.models.operations.DeleteRoomRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRoomRecordingRequest req = new DeleteRoomRecordingRequest("sapiente", "architecto");            

            DeleteRoomRecordingResponse res = sdk.sdk.deleteRoomRecording(req, new DeleteRoomRecordingSecurity("mollitia", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## fetchComposition

Returns a single Composition resource identified by a Composition SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCompositionRequest;
import org.openapis.openapi.models.operations.FetchCompositionResponse;
import org.openapis.openapi.models.operations.FetchCompositionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCompositionRequest req = new FetchCompositionRequest("culpa");            

            FetchCompositionResponse res = sdk.sdk.fetchComposition(req, new FetchCompositionSecurity("consequuntur", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Composition != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCompositionHook

Returns a single CompositionHook resource identified by a CompositionHook SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCompositionHookRequest;
import org.openapis.openapi.models.operations.FetchCompositionHookResponse;
import org.openapis.openapi.models.operations.FetchCompositionHookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCompositionHookRequest req = new FetchCompositionHookRequest("mollitia");            

            FetchCompositionHookResponse res = sdk.sdk.fetchCompositionHook(req, new FetchCompositionHookSecurity("occaecati", "numquam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1CompositionHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCompositionSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCompositionSettingsResponse;
import org.openapis.openapi.models.operations.FetchCompositionSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCompositionSettingsResponse res = sdk.sdk.fetchCompositionSettings(new FetchCompositionSettingsSecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1CompositionSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecording

Returns a single Recording resource identified by a Recording SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingRequest;
import org.openapis.openapi.models.operations.FetchRecordingResponse;
import org.openapis.openapi.models.operations.FetchRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingRequest req = new FetchRecordingRequest("molestiae");            

            FetchRecordingResponse res = sdk.sdk.fetchRecording(req, new FetchRecordingSecurity("velit", "error") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Recording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecordingSettings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRecordingSettingsResponse;
import org.openapis.openapi.models.operations.FetchRecordingSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRecordingSettingsResponse res = sdk.sdk.fetchRecordingSettings(new FetchRecordingSettingsSecurity("quia", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RecordingSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoom

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomRequest;
import org.openapis.openapi.models.operations.FetchRoomResponse;
import org.openapis.openapi.models.operations.FetchRoomSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomRequest req = new FetchRoomRequest("vitae");            

            FetchRoomResponse res = sdk.sdk.fetchRoom(req, new FetchRoomSecurity("laborum", "animi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Room != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomParticipant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomParticipantRequest;
import org.openapis.openapi.models.operations.FetchRoomParticipantResponse;
import org.openapis.openapi.models.operations.FetchRoomParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomParticipantRequest req = new FetchRoomParticipantRequest("enim", "odit");            

            FetchRoomParticipantResponse res = sdk.sdk.fetchRoomParticipant(req, new FetchRoomParticipantSecurity("quo", "sequi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomParticipantPublishedTrack

Returns a single Track resource represented by TrackName or SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomParticipantPublishedTrackRequest;
import org.openapis.openapi.models.operations.FetchRoomParticipantPublishedTrackResponse;
import org.openapis.openapi.models.operations.FetchRoomParticipantPublishedTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomParticipantPublishedTrackRequest req = new FetchRoomParticipantPublishedTrackRequest("tenetur", "ipsam", "id");            

            FetchRoomParticipantPublishedTrackResponse res = sdk.sdk.fetchRoomParticipantPublishedTrack(req, new FetchRoomParticipantPublishedTrackSecurity("possimus", "aut") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipantRoomParticipantPublishedTrack != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomParticipantSubscribeRule

Returns a list of Subscribe Rules for the Participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribeRuleRequest;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribeRuleResponse;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribeRuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomParticipantSubscribeRuleRequest req = new FetchRoomParticipantSubscribeRuleRequest("quasi", "error");            

            FetchRoomParticipantSubscribeRuleResponse res = sdk.sdk.fetchRoomParticipantSubscribeRule(req, new FetchRoomParticipantSubscribeRuleSecurity("temporibus", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomParticipantSubscribedTrack

Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribedTrackRequest;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribedTrackResponse;
import org.openapis.openapi.models.operations.FetchRoomParticipantSubscribedTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomParticipantSubscribedTrackRequest req = new FetchRoomParticipantSubscribedTrackRequest("quasi", "reiciendis", "voluptatibus");            

            FetchRoomParticipantSubscribedTrackResponse res = sdk.sdk.fetchRoomParticipantSubscribedTrack(req, new FetchRoomParticipantSubscribedTrackSecurity("vero", "nihil") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipantRoomParticipantSubscribedTrack != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomRecording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomRecordingRequest;
import org.openapis.openapi.models.operations.FetchRoomRecordingResponse;
import org.openapis.openapi.models.operations.FetchRoomRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomRecordingRequest req = new FetchRoomRecordingRequest("praesentium", "voluptatibus");            

            FetchRoomRecordingResponse res = sdk.sdk.fetchRoomRecording(req, new FetchRoomRecordingSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRoomRecordingRule

Returns a list of Recording Rules for the Room.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchRoomRecordingRuleRequest;
import org.openapis.openapi.models.operations.FetchRoomRecordingRuleResponse;
import org.openapis.openapi.models.operations.FetchRoomRecordingRuleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchRoomRecordingRuleRequest req = new FetchRoomRecordingRuleRequest("voluptate");            

            FetchRoomRecordingRuleResponse res = sdk.sdk.fetchRoomRecordingRule(req, new FetchRoomRecordingRuleSecurity("cum", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomRecordingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listComposition

List of all Recording compositions.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCompositionRequest;
import org.openapis.openapi.models.operations.ListCompositionResponse;
import org.openapis.openapi.models.operations.ListCompositionSecurity;
import org.openapis.openapi.models.shared.CompositionEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCompositionRequest req = new ListCompositionRequest() {{
                dateCreatedAfter = OffsetDateTime.parse("2022-07-23T18:36:43.822Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-01-08T10:49:12.847Z");
                page = 120196L;
                pageSize = 359444L;
                pageToken = "dolore";
                roomSid = "iusto";
                status = CompositionEnumStatusEnum.ENQUEUED;
            }};            

            ListCompositionResponse res = sdk.sdk.listComposition(req, new ListCompositionSecurity("harum", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCompositionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCompositionHook

List of all Recording CompositionHook resources.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCompositionHookRequest;
import org.openapis.openapi.models.operations.ListCompositionHookResponse;
import org.openapis.openapi.models.operations.ListCompositionHookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCompositionHookRequest req = new ListCompositionHookRequest() {{
                dateCreatedAfter = OffsetDateTime.parse("2021-10-04T09:10:06.610Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-10-22T18:12:12.288Z");
                enabled = false;
                friendlyName = "ipsum";
                page = 692472L;
                pageSize = 565189L;
                pageToken = "excepturi";
            }};            

            ListCompositionHookResponse res = sdk.sdk.listCompositionHook(req, new ListCompositionHookSecurity("pariatur", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCompositionHookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRecording

List of all Track recordings.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRecordingRequest;
import org.openapis.openapi.models.operations.ListRecordingResponse;
import org.openapis.openapi.models.operations.ListRecordingSecurity;
import org.openapis.openapi.models.shared.RecordingEnumStatusEnum;
import org.openapis.openapi.models.shared.RecordingEnumTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRecordingRequest req = new ListRecordingRequest() {{
                dateCreatedAfter = OffsetDateTime.parse("2021-12-15T00:41:38.329Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-09-20T03:14:35.704Z");
                groupingSid = new String[]{{
                    add("sint"),
                    add("veritatis"),
                    add("itaque"),
                    add("incidunt"),
                }};
                mediaType = RecordingEnumTypeEnum.AUDIO;
                page = 9356L;
                pageSize = 667411L;
                pageToken = "quibusdam";
                sourceSid = "explicabo";
                status = RecordingEnumStatusEnum.DELETED;
            }};            

            ListRecordingResponse res = sdk.sdk.listRecording(req, new ListRecordingSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoom

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomRequest;
import org.openapis.openapi.models.operations.ListRoomResponse;
import org.openapis.openapi.models.operations.ListRoomSecurity;
import org.openapis.openapi.models.shared.RoomEnumRoomStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoomRequest req = new ListRoomRequest() {{
                dateCreatedAfter = OffsetDateTime.parse("2022-09-26T08:57:48.803Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-08-08T19:05:24.174Z");
                page = 586513L;
                pageSize = 552822L;
                pageToken = "perferendis";
                status = RoomEnumRoomStatusEnum.IN_PROGRESS;
                uniqueName = "assumenda";
            }};            

            ListRoomResponse res = sdk.sdk.listRoom(req, new ListRoomSecurity("ipsam", "alias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoomResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoomParticipant

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomParticipantRequest;
import org.openapis.openapi.models.operations.ListRoomParticipantResponse;
import org.openapis.openapi.models.operations.ListRoomParticipantSecurity;
import org.openapis.openapi.models.shared.RoomParticipantEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoomParticipantRequest req = new ListRoomParticipantRequest("fugit") {{
                dateCreatedAfter = OffsetDateTime.parse("2021-11-11T04:17:07.569Z");
                dateCreatedBefore = OffsetDateTime.parse("2022-04-19T03:15:40.816Z");
                identity = "tempore";
                page = 288476L;
                pageSize = 962189L;
                pageToken = "eum";
                status = RoomParticipantEnumStatusEnum.CONNECTED;
            }};            

            ListRoomParticipantResponse res = sdk.sdk.listRoomParticipant(req, new ListRoomParticipantSecurity("eligendi", "sint") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoomParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoomParticipantPublishedTrack

Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomParticipantPublishedTrackRequest;
import org.openapis.openapi.models.operations.ListRoomParticipantPublishedTrackResponse;
import org.openapis.openapi.models.operations.ListRoomParticipantPublishedTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoomParticipantPublishedTrackRequest req = new ListRoomParticipantPublishedTrackRequest("aliquid", "provident") {{
                page = 896039L;
                pageSize = 572252L;
                pageToken = "officia";
            }};            

            ListRoomParticipantPublishedTrackResponse res = sdk.sdk.listRoomParticipantPublishedTrack(req, new ListRoomParticipantPublishedTrackSecurity("dolor", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoomParticipantPublishedTrackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoomParticipantSubscribedTrack

Returns a list of tracks that are subscribed for the participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomParticipantSubscribedTrackRequest;
import org.openapis.openapi.models.operations.ListRoomParticipantSubscribedTrackResponse;
import org.openapis.openapi.models.operations.ListRoomParticipantSubscribedTrackSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoomParticipantSubscribedTrackRequest req = new ListRoomParticipantSubscribedTrackRequest("a", "dolorum") {{
                page = 447125L;
                pageSize = 449198L;
                pageToken = "illum";
            }};            

            ListRoomParticipantSubscribedTrackResponse res = sdk.sdk.listRoomParticipantSubscribedTrack(req, new ListRoomParticipantSubscribedTrackSecurity("maiores", "rerum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoomParticipantSubscribedTrackResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRoomRecording

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRoomRecordingRequest;
import org.openapis.openapi.models.operations.ListRoomRecordingResponse;
import org.openapis.openapi.models.operations.ListRoomRecordingSecurity;
import org.openapis.openapi.models.shared.RoomRecordingEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListRoomRecordingRequest req = new ListRoomRecordingRequest("dicta") {{
                dateCreatedAfter = OffsetDateTime.parse("2022-03-27T00:52:20.281Z");
                dateCreatedBefore = OffsetDateTime.parse("2021-10-07T01:21:59.434Z");
                page = 396506L;
                pageSize = 675439L;
                pageToken = "accusamus";
                sourceSid = "non";
                status = RoomRecordingEnumStatusEnum.DELETED;
            }};            

            ListRoomRecordingResponse res = sdk.sdk.listRoomRecording(req, new ListRoomRecordingSecurity("enim", "accusamus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listRoomRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCompositionHook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCompositionHookRequest;
import org.openapis.openapi.models.operations.UpdateCompositionHookResponse;
import org.openapis.openapi.models.operations.UpdateCompositionHookSecurity;
import org.openapis.openapi.models.operations.UpdateCompositionHookUpdateCompositionHookRequest;
import org.openapis.openapi.models.operations.UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.shared.CompositionHookEnumFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCompositionHookRequest req = new UpdateCompositionHookRequest("delectus") {{
                requestBody = new UpdateCompositionHookUpdateCompositionHookRequest("quidem") {{
                    audioSources = new String[]{{
                        add("nam"),
                        add("id"),
                        add("blanditiis"),
                    }};
                    audioSourcesExcluded = new String[]{{
                        add("sapiente"),
                        add("amet"),
                        add("deserunt"),
                    }};
                    enabled = false;
                    format = CompositionHookEnumFormatEnum.MP4;
                    resolution = "vel";
                    statusCallback = "https://overjoyed-irony.com";
                    statusCallbackMethod = UpdateCompositionHookUpdateCompositionHookRequestStatusCallbackMethodEnum.POST;
                    trim = false;
                    videoLayout = "magnam";
                }};;
            }};            

            UpdateCompositionHookResponse res = sdk.sdk.updateCompositionHook(req, new UpdateCompositionHookSecurity("distinctio", "id") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1CompositionHook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoom

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomRequest;
import org.openapis.openapi.models.operations.UpdateRoomResponse;
import org.openapis.openapi.models.operations.UpdateRoomSecurity;
import org.openapis.openapi.models.operations.UpdateRoomUpdateRoomRequest;
import org.openapis.openapi.models.shared.RoomEnumRoomStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoomRequest req = new UpdateRoomRequest("labore") {{
                requestBody = new UpdateRoomUpdateRoomRequest(RoomEnumRoomStatusEnum.IN_PROGRESS);;
            }};            

            UpdateRoomResponse res = sdk.sdk.updateRoom(req, new UpdateRoomSecurity("suscipit", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1Room != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoomParticipant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomParticipantRequest;
import org.openapis.openapi.models.operations.UpdateRoomParticipantResponse;
import org.openapis.openapi.models.operations.UpdateRoomParticipantSecurity;
import org.openapis.openapi.models.operations.UpdateRoomParticipantUpdateRoomParticipantRequest;
import org.openapis.openapi.models.shared.RoomParticipantEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoomParticipantRequest req = new UpdateRoomParticipantRequest("nobis", "eum") {{
                requestBody = new UpdateRoomParticipantUpdateRoomParticipantRequest() {{
                    status = RoomParticipantEnumStatusEnum.DISCONNECTED;
                }};;
            }};            

            UpdateRoomParticipantResponse res = sdk.sdk.updateRoomParticipant(req, new UpdateRoomParticipantSecurity("aspernatur", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoomParticipantAnonymize

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomParticipantAnonymizeRequest;
import org.openapis.openapi.models.operations.UpdateRoomParticipantAnonymizeResponse;
import org.openapis.openapi.models.operations.UpdateRoomParticipantAnonymizeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoomParticipantAnonymizeRequest req = new UpdateRoomParticipantAnonymizeRequest("magnam", "et");            

            UpdateRoomParticipantAnonymizeResponse res = sdk.sdk.updateRoomParticipantAnonymize(req, new UpdateRoomParticipantAnonymizeSecurity("excepturi", "ullam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipantRoomParticipantAnonymize != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoomParticipantSubscribeRule

Update the Subscribe Rules for the Participant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomParticipantSubscribeRuleRequest;
import org.openapis.openapi.models.operations.UpdateRoomParticipantSubscribeRuleResponse;
import org.openapis.openapi.models.operations.UpdateRoomParticipantSubscribeRuleSecurity;
import org.openapis.openapi.models.operations.UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoomParticipantSubscribeRuleRequest req = new UpdateRoomParticipantSubscribeRuleRequest("provident", "quos") {{
                requestBody = new UpdateRoomParticipantSubscribeRuleUpdateRoomParticipantSubscribeRuleRequest() {{
                    rules = "sint";
                }};;
            }};            

            UpdateRoomParticipantSubscribeRuleResponse res = sdk.sdk.updateRoomParticipantSubscribeRule(req, new UpdateRoomParticipantSubscribeRuleSecurity("accusantium", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRoomRecordingRule

Update the Recording Rules for the Room

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRoomRecordingRuleRequest;
import org.openapis.openapi.models.operations.UpdateRoomRecordingRuleResponse;
import org.openapis.openapi.models.operations.UpdateRoomRecordingRuleSecurity;
import org.openapis.openapi.models.operations.UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRoomRecordingRuleRequest req = new UpdateRoomRecordingRuleRequest("reiciendis") {{
                requestBody = new UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest() {{
                    rules = "mollitia";
                }};;
            }};            

            UpdateRoomRecordingRuleResponse res = sdk.sdk.updateRoomRecordingRule(req, new UpdateRoomRecordingRuleSecurity("ad", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.videoV1RoomRoomRecordingRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
