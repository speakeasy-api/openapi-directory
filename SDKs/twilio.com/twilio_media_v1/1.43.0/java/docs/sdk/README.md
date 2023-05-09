# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createMediaProcessor](#createmediaprocessor)
* [createPlayerStreamer](#createplayerstreamer)
* [createPlayerStreamerPlaybackGrant](#createplayerstreamerplaybackgrant)
* [deleteMediaRecording](#deletemediarecording) - Deletes a MediaRecording resource identified by a SID.
* [fetchMediaProcessor](#fetchmediaprocessor) - Returns a single MediaProcessor resource identified by a SID.
* [fetchMediaRecording](#fetchmediarecording) - Returns a single MediaRecording resource identified by a SID.
* [fetchPlayerStreamer](#fetchplayerstreamer) - Returns a single PlayerStreamer resource identified by a SID.
* [fetchPlayerStreamerPlaybackGrant](#fetchplayerstreamerplaybackgrant) - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* [listMediaProcessor](#listmediaprocessor) - Returns a list of MediaProcessors.
* [listMediaRecording](#listmediarecording) - Returns a list of MediaRecordings.
* [listPlayerStreamer](#listplayerstreamer) - Returns a list of PlayerStreamers.
* [updateMediaProcessor](#updatemediaprocessor) - Updates a MediaProcessor resource identified by a SID.
* [updatePlayerStreamer](#updateplayerstreamer) - Updates a PlayerStreamer resource identified by a SID.

## createMediaProcessor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequest;
import org.openapis.openapi.models.operations.CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateMediaProcessorResponse;
import org.openapis.openapi.models.operations.CreateMediaProcessorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMediaProcessorCreateMediaProcessorRequest req = new CreateMediaProcessorCreateMediaProcessorRequest("suscipit", "iure") {{
                extensionEnvironment = "magnam";
                maxDuration = 891773L;
                statusCallback = "http://whirlwind-diver.info";
                statusCallbackMethod = CreateMediaProcessorCreateMediaProcessorRequestStatusCallbackMethodEnum.POST;
            }};            

            CreateMediaProcessorResponse res = sdk.sdk.createMediaProcessor(req, new CreateMediaProcessorSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlayerStreamer

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlayerStreamerCreatePlayerStreamerRequest;
import org.openapis.openapi.models.operations.CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreatePlayerStreamerResponse;
import org.openapis.openapi.models.operations.CreatePlayerStreamerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePlayerStreamerCreatePlayerStreamerRequest req = new CreatePlayerStreamerCreatePlayerStreamerRequest() {{
                maxDuration = 528895L;
                statusCallback = "http://nice-gorilla.org";
                statusCallbackMethod = CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum.DELETE;
                video = false;
            }};            

            CreatePlayerStreamerResponse res = sdk.sdk.createPlayerStreamer(req, new CreatePlayerStreamerSecurity("ab", "quis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1PlayerStreamer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPlayerStreamerPlaybackGrant

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest;
import org.openapis.openapi.models.operations.CreatePlayerStreamerPlaybackGrantRequest;
import org.openapis.openapi.models.operations.CreatePlayerStreamerPlaybackGrantResponse;
import org.openapis.openapi.models.operations.CreatePlayerStreamerPlaybackGrantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePlayerStreamerPlaybackGrantRequest req = new CreatePlayerStreamerPlaybackGrantRequest("veritatis") {{
                requestBody = new CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest() {{
                    accessControlAllowOrigin = "deserunt";
                    ttl = 20218L;
                }};;
            }};            

            CreatePlayerStreamerPlaybackGrantResponse res = sdk.sdk.createPlayerStreamerPlaybackGrant(req, new CreatePlayerStreamerPlaybackGrantSecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteMediaRecording

Deletes a MediaRecording resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMediaRecordingRequest;
import org.openapis.openapi.models.operations.DeleteMediaRecordingResponse;
import org.openapis.openapi.models.operations.DeleteMediaRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMediaRecordingRequest req = new DeleteMediaRecordingRequest("sapiente");            

            DeleteMediaRecordingResponse res = sdk.sdk.deleteMediaRecording(req, new DeleteMediaRecordingSecurity("quo", "odit") {{
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

## fetchMediaProcessor

Returns a single MediaProcessor resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMediaProcessorRequest;
import org.openapis.openapi.models.operations.FetchMediaProcessorResponse;
import org.openapis.openapi.models.operations.FetchMediaProcessorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMediaProcessorRequest req = new FetchMediaProcessorRequest("at");            

            FetchMediaProcessorResponse res = sdk.sdk.fetchMediaProcessor(req, new FetchMediaProcessorSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMediaRecording

Returns a single MediaRecording resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMediaRecordingRequest;
import org.openapis.openapi.models.operations.FetchMediaRecordingResponse;
import org.openapis.openapi.models.operations.FetchMediaRecordingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMediaRecordingRequest req = new FetchMediaRecordingRequest("molestiae");            

            FetchMediaRecordingResponse res = sdk.sdk.fetchMediaRecording(req, new FetchMediaRecordingSecurity("quod", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPlayerStreamer

Returns a single PlayerStreamer resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPlayerStreamerRequest;
import org.openapis.openapi.models.operations.FetchPlayerStreamerResponse;
import org.openapis.openapi.models.operations.FetchPlayerStreamerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPlayerStreamerRequest req = new FetchPlayerStreamerRequest("esse");            

            FetchPlayerStreamerResponse res = sdk.sdk.fetchPlayerStreamer(req, new FetchPlayerStreamerSecurity("totam", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1PlayerStreamer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPlayerStreamerPlaybackGrant

**This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPlayerStreamerPlaybackGrantRequest;
import org.openapis.openapi.models.operations.FetchPlayerStreamerPlaybackGrantResponse;
import org.openapis.openapi.models.operations.FetchPlayerStreamerPlaybackGrantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPlayerStreamerPlaybackGrantRequest req = new FetchPlayerStreamerPlaybackGrantRequest("dolorum");            

            FetchPlayerStreamerPlaybackGrantResponse res = sdk.sdk.fetchPlayerStreamerPlaybackGrant(req, new FetchPlayerStreamerPlaybackGrantSecurity("dicta", "nam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMediaProcessor

Returns a list of MediaProcessors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMediaProcessorRequest;
import org.openapis.openapi.models.operations.ListMediaProcessorResponse;
import org.openapis.openapi.models.operations.ListMediaProcessorSecurity;
import org.openapis.openapi.models.shared.MediaProcessorEnumOrderEnum;
import org.openapis.openapi.models.shared.MediaProcessorEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMediaProcessorRequest req = new ListMediaProcessorRequest() {{
                order = MediaProcessorEnumOrderEnum.DESC;
                page = 582020L;
                pageSize = 143353L;
                pageToken = "deleniti";
                status = MediaProcessorEnumStatusEnum.ENDED;
            }};            

            ListMediaProcessorResponse res = sdk.sdk.listMediaProcessor(req, new ListMediaProcessorSecurity("optio", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMediaProcessorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMediaRecording

Returns a list of MediaRecordings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMediaRecordingRequest;
import org.openapis.openapi.models.operations.ListMediaRecordingResponse;
import org.openapis.openapi.models.operations.ListMediaRecordingSecurity;
import org.openapis.openapi.models.shared.MediaRecordingEnumOrderEnum;
import org.openapis.openapi.models.shared.MediaRecordingEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMediaRecordingRequest req = new ListMediaRecordingRequest() {{
                order = MediaRecordingEnumOrderEnum.ASC;
                page = 414662L;
                pageSize = 473600L;
                pageToken = "modi";
                processorSid = "qui";
                sourceSid = "impedit";
                status = MediaRecordingEnumStatusEnum.DELETED;
            }};            

            ListMediaRecordingResponse res = sdk.sdk.listMediaRecording(req, new ListMediaRecordingSecurity("esse", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMediaRecordingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPlayerStreamer

Returns a list of PlayerStreamers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPlayerStreamerRequest;
import org.openapis.openapi.models.operations.ListPlayerStreamerResponse;
import org.openapis.openapi.models.operations.ListPlayerStreamerSecurity;
import org.openapis.openapi.models.shared.PlayerStreamerEnumOrderEnum;
import org.openapis.openapi.models.shared.PlayerStreamerEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPlayerStreamerRequest req = new ListPlayerStreamerRequest() {{
                order = PlayerStreamerEnumOrderEnum.DESC;
                page = 135218L;
                pageSize = 18789L;
                pageToken = "ad";
                status = PlayerStreamerEnumStatusEnum.ENDED;
            }};            

            ListPlayerStreamerResponse res = sdk.sdk.listPlayerStreamer(req, new ListPlayerStreamerSecurity("sed", "iste") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listPlayerStreamerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMediaProcessor

Updates a MediaProcessor resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMediaProcessorRequest;
import org.openapis.openapi.models.operations.UpdateMediaProcessorResponse;
import org.openapis.openapi.models.operations.UpdateMediaProcessorSecurity;
import org.openapis.openapi.models.operations.UpdateMediaProcessorUpdateMediaProcessorRequest;
import org.openapis.openapi.models.shared.MediaProcessorEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateMediaProcessorRequest req = new UpdateMediaProcessorRequest("dolor") {{
                requestBody = new UpdateMediaProcessorUpdateMediaProcessorRequest(MediaProcessorEnumUpdateStatusEnum.ENDED);;
            }};            

            UpdateMediaProcessorResponse res = sdk.sdk.updateMediaProcessor(req, new UpdateMediaProcessorSecurity("natus", "laboriosam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1MediaProcessor != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePlayerStreamer

Updates a PlayerStreamer resource identified by a SID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePlayerStreamerRequest;
import org.openapis.openapi.models.operations.UpdatePlayerStreamerResponse;
import org.openapis.openapi.models.operations.UpdatePlayerStreamerSecurity;
import org.openapis.openapi.models.operations.UpdatePlayerStreamerUpdatePlayerStreamerRequest;
import org.openapis.openapi.models.shared.PlayerStreamerEnumUpdateStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePlayerStreamerRequest req = new UpdatePlayerStreamerRequest("hic") {{
                requestBody = new UpdatePlayerStreamerUpdatePlayerStreamerRequest(PlayerStreamerEnumUpdateStatusEnum.ENDED);;
            }};            

            UpdatePlayerStreamerResponse res = sdk.sdk.updatePlayerStreamer(req, new UpdatePlayerStreamerSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.mediaV1PlayerStreamer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
