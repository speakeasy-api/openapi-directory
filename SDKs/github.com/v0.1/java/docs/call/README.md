# call

## Overview

API methods responsible for spawning and manipulating individual calls

### Available Operations

* [postV01BulkCall](#postv01bulkcall) - /v0.1/BulkCall/
* [postV01Call](#postv01call) - /v0.1/Call/
* [postV01CancelScheduledHangup](#postv01cancelscheduledhangup) - /v0.1/CancelScheduledHangup/
* [postV01CancelScheduledPlay](#postv01cancelscheduledplay) - /v0.1/CancelScheduledPlay/
* [postV01GroupCall](#postv01groupcall) - /v0.1/GroupCall/
* [postV01HangupAllCalls](#postv01hangupallcalls) - /v0.1/HangupAllCalls/
* [postV01HangupCall](#postv01hangupcall) - /v0.1/HangupCall/
* [postV01Play](#postv01play) - /v0.1/Play/
* [postV01PlayStop](#postv01playstop) - /v0.1/PlayStop/
* [postV01RecordStart](#postv01recordstart) - /v0.1/RecordStart/
* [postV01RecordStop](#postv01recordstop) - /v0.1/RecordStop/
* [postV01ScheduleHangup](#postv01schedulehangup) - /v0.1/ScheduleHangup/
* [postV01SchedulePlay](#postv01scheduleplay) - /v0.1/SchedulePlay/
* [postV01SendDigits](#postv01senddigits) - /v0.1/SendDigits/
* [postV01SoundTouch](#postv01soundtouch) - /v0.1/SoundTouch/
* [postV01SoundTouchStop](#postv01soundtouchstop) - /v0.1/SoundTouchStop/
* [postV01TransferCall](#postv01transfercall) - /v0.1/TransferCall/

## postV01BulkCall

Initiates multiple concurrent outbound calls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01BulkCallResponse;
import org.openapis.openapi.models.operations.PostV01BulkCallSecurity;
import org.openapis.openapi.models.shared.BulkCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BulkCallParameters req = new BulkCallParameters("https://example.com/answer/", "<", "15551234567", "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/", "15557654321") {{
                callerName = "Bulk Test";
                confirmKey = "1";
                confirmSound = "https://example.com/confirm_sound/";
                coreUUID = "2e8e6275-7cfe-4e3c-a8d6-25316b4519c7";
                extraDialString = "bridge_early_media=true,hangup_after_bridge=true";
                gatewayCodecs = "'PCMA,PCMU','G729,PCMU','PCMA,G729'";
                gatewayRetries = "3,1,2";
                gatewayTimeouts = "10,30,20";
                hangupOnRing = 90L;
                hangupUrl = "https://example.com/hangup/";
                rejectCauses = "USER_BUSY,NO_ANSWER";
                ringUrl = "https://example.com/ring/";
                sendDigits = "1w2w3W#*@1500";
                sendOnPreanswer = false;
                timeLimit = 90L;
            }};            

            PostV01BulkCallResponse res = sdk.call.postV01BulkCall(req, new PostV01BulkCallSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.bulkCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01Call

Initiates an outbound call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01CallResponse;
import org.openapis.openapi.models.operations.PostV01CallSecurity;
import org.openapis.openapi.models.shared.CallParameters;
import org.openapis.openapi.models.shared.CallParametersAsyncAmdStatusCallbackMethodEnum;
import org.openapis.openapi.models.shared.CallParametersMachineDetectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CallParameters req = new CallParameters("https://example.com/answer/", "15551234567", "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/", "15557654321") {{
                asyncAMD = true;
                asyncAmdStatusCallback = "unde";
                asyncAmdStatusCallbackMethod = CallParametersAsyncAmdStatusCallbackMethodEnum.GET;
                callerName = "Test";
                coreUUID = "45521fc6-a4b3-42b6-96ad-9136256be216";
                extraDialString = "bridge_early_media=true,hangup_after_bridge=true";
                gatewayCodecs = "'PCMA,PCMU','G729,PCMU','PCMA,G729'";
                gatewayRetries = "3,1,2";
                gatewayTimeouts = "10,30,20";
                hangupOnRing = 90L;
                hangupUrl = "https://example.com/hangup/";
                machineDetection = CallParametersMachineDetectionEnum.ENABLE;
                machineDetectionSilenceTimeout = 3000L;
                machineDetectionSpeechEndThreshold = 1000L;
                machineDetectionSpeechThreshold = 2000L;
                machineDetectionTimeout = 5L;
                ringUrl = "https://example.com/ring/";
                sendDigits = "1w2w3W#*@1500";
                sendOnPreanswer = false;
                timeLimit = 90L;
            }};            

            PostV01CallResponse res = sdk.call.postV01Call(req, new PostV01CallSecurity("nulla", "corrupti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.callResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01CancelScheduledHangup

Cancels a scheduled hangup for a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01CancelScheduledHangupResponse;
import org.openapis.openapi.models.operations.PostV01CancelScheduledHangupSecurity;
import org.openapis.openapi.models.shared.CancelScheduledHangupParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CancelScheduledHangupParameters req = new CancelScheduledHangupParameters("ea428fbd-ac9b-498c-8bb2-a36ac49f10fd");            

            PostV01CancelScheduledHangupResponse res = sdk.call.postV01CancelScheduledHangup(req, new PostV01CancelScheduledHangupSecurity("illum", "vel") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.cancelScheduledHangupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01CancelScheduledPlay

Cancels a scheduled playback request

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01CancelScheduledPlayResponse;
import org.openapis.openapi.models.operations.PostV01CancelScheduledPlaySecurity;
import org.openapis.openapi.models.shared.CancelScheduledPlayParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CancelScheduledPlayParameters req = new CancelScheduledPlayParameters("ea428fbd-ac9b-498c-8bb2-a36ac49f10fd");            

            PostV01CancelScheduledPlayResponse res = sdk.call.postV01CancelScheduledPlay(req, new PostV01CancelScheduledPlaySecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.cancelScheduledPlayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01GroupCall

Initiate multiple racing outbound calls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01GroupCallResponse;
import org.openapis.openapi.models.operations.PostV01GroupCallSecurity;
import org.openapis.openapi.models.shared.GroupCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GroupCallParameters req = new GroupCallParameters("https://example.com/answer/", "<", "15551234567", "user/,sofia/gateway/PSTNgateway1/,sofia/gateway/PSTNgateway2/", "15557654321") {{
                callerName = "Group Test";
                confirmKey = "1";
                confirmSound = "https://example.com/confirm_sound/";
                coreUUID = "46ae8cd9-c28e-447d-ba40-a09cba49d474";
                extraDialString = "bridge_early_media=true,hangup_after_bridge=true";
                gatewayCodecs = "'PCMA,PCMU','G729,PCMU','PCMA,G729'";
                gatewayRetries = "3,1,2";
                gatewayTimeouts = "10,30,20";
                hangupOnRing = 90L;
                hangupUrl = "https://example.com/hangup/";
                rejectCauses = "USER_BUSY,NO_ANSWER";
                ringUrl = "https://example.com/ring/";
                sendDigits = "1w2w3W#*@1500";
                sendOnPreanswer = false;
                timeLimit = 90L;
            }};            

            PostV01GroupCallResponse res = sdk.call.postV01GroupCall(req, new PostV01GroupCallSecurity("suscipit", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.groupCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01HangupAllCalls

Hangs up all established calls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01HangupAllCallsResponse;
import org.openapis.openapi.models.operations.PostV01HangupAllCallsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV01HangupAllCallsResponse res = sdk.call.postV01HangupAllCalls(new PostV01HangupAllCallsSecurity("magnam", "debitis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.hangupAllCallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01HangupCall

Hangs up a specific call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01HangupCallResponse;
import org.openapis.openapi.models.operations.PostV01HangupCallSecurity;
import org.openapis.openapi.models.shared.HangupCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.HangupCallParameters req = new HangupCallParameters() {{
                callUUID = "b0519011-6987-47c8-9270-a820e0978acd";
                requestUUID = "c059b96b-04d8-414b-920c-7b373bff916e";
            }};            

            PostV01HangupCallResponse res = sdk.call.postV01HangupCall(req, new PostV01HangupCallSecurity("ipsa", "delectus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.hangupCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01Play

Plays media into a live call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01PlayResponse;
import org.openapis.openapi.models.operations.PostV01PlaySecurity;
import org.openapis.openapi.models.shared.PlayParameters;
import org.openapis.openapi.models.shared.PlayParametersLegsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PlayParameters req = new PlayParameters("e69b32da-3243-4ba6-a965-5d2f64a57d48", "/tmp/prompt.wav") {{
                legs = PlayParametersLegsEnum.BOTH;
                length = 90L;
                loop = true;
                mix = false;
            }};            

            PostV01PlayResponse res = sdk.call.postV01Play(req, new PostV01PlaySecurity("tempora", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.playResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01PlayStop

Interrupts media playback on a given call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01PlayStopResponse;
import org.openapis.openapi.models.operations.PostV01PlayStopSecurity;
import org.openapis.openapi.models.shared.PlayStopParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PlayStopParameters req = new PlayStopParameters("441afb63-85bc-49d4-9ac8-8459f9bf5e6b");            

            PostV01PlayStopResponse res = sdk.call.postV01PlayStop(req, new PostV01PlayStopSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.playStopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01RecordStart

Initiates recording of a given call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01RecordStartResponse;
import org.openapis.openapi.models.operations.PostV01RecordStartSecurity;
import org.openapis.openapi.models.shared.RecordStartParameters;
import org.openapis.openapi.models.shared.RecordStartParametersFileFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecordStartParameters req = new RecordStartParameters() {{
                callUUID = "052d04e4-019a-45ff-a562-f74d4ae99ea2";
                fileFormat = RecordStartParametersFileFormatEnum.WAV;
                fileName = "sample_recording";
                filePath = "/tmp/recordings";
                timeLimit = 89L;
            }};            

            PostV01RecordStartResponse res = sdk.call.postV01RecordStart(req, new PostV01RecordStartSecurity("placeat", "voluptatum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.recordStartResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01RecordStop

Stops the recording of a given call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01RecordStopResponse;
import org.openapis.openapi.models.operations.PostV01RecordStopSecurity;
import org.openapis.openapi.models.shared.RecordStopParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RecordStopParameters req = new RecordStopParameters("eacfa857-4001-4379-b79a-c7ef6d963bcb", "/tmp/recording/sample.wav");            

            PostV01RecordStopResponse res = sdk.call.postV01RecordStop(req, new PostV01RecordStopSecurity("iusto", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.recordStopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ScheduleHangup

Schedules a hangup for a specific call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ScheduleHangupResponse;
import org.openapis.openapi.models.operations.PostV01ScheduleHangupSecurity;
import org.openapis.openapi.models.shared.ScheduleHangupParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ScheduleHangupParameters req = new ScheduleHangupParameters("f84fbadc-5df0-4c02-934b-aac0c1efb8ae", 59L);            

            PostV01ScheduleHangupResponse res = sdk.call.postV01ScheduleHangup(req, new PostV01ScheduleHangupSecurity("nisi", "recusandae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.scheduleHangupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01SchedulePlay

Schedules media playback for a specific call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01SchedulePlayResponse;
import org.openapis.openapi.models.operations.PostV01SchedulePlaySecurity;
import org.openapis.openapi.models.shared.SchedulePlayParameters;
import org.openapis.openapi.models.shared.SchedulePlayParametersLegsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SchedulePlayParameters req = new SchedulePlayParameters("e69b32da-3243-4ba6-a965-5d2f64a57d48", "/tmp/prompt.wav", 29L) {{
                legs = SchedulePlayParametersLegsEnum.BOTH;
                length = 90L;
                loop = true;
                mix = false;
            }};            

            PostV01SchedulePlayResponse res = sdk.call.postV01SchedulePlay(req, new PostV01SchedulePlaySecurity("temporibus", "ab") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.schedulePlayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01SendDigits

Emits DMTF tones to a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01SendDigitsResponse;
import org.openapis.openapi.models.operations.PostV01SendDigitsSecurity;
import org.openapis.openapi.models.shared.SendDigitsParameters;
import org.openapis.openapi.models.shared.SendDigitsParametersLegEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SendDigitsParameters req = new SendDigitsParameters("d4cd08fe-4245-490a-ae39-5b58c6addbe8", "1w2w3W#*@1500") {{
                leg = SendDigitsParametersLegEnum.BOTH;
            }};            

            PostV01SendDigitsResponse res = sdk.call.postV01SendDigits(req, new PostV01SendDigitsSecurity("quis", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.sendDigitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01SoundTouch

Applies SoundTouch effects to a live call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01SoundTouchResponse;
import org.openapis.openapi.models.operations.PostV01SoundTouchSecurity;
import org.openapis.openapi.models.shared.SoundTouchParameters;
import org.openapis.openapi.models.shared.SoundTouchParametersAudioDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SoundTouchParameters req = new SoundTouchParameters("b7054b68-0620-455a-8ac7-f8f126853b9d") {{
                audioDirection = SoundTouchParametersAudioDirectionEnum.IN;
                pitch = 4;
                pitchOctaves = 0.5;
                pitchSemiTones = 2;
                rate = 3;
                tempo = 2;
            }};            

            PostV01SoundTouchResponse res = sdk.call.postV01SoundTouch(req, new PostV01SoundTouchSecurity("deserunt", "perferendis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.soundTouchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01SoundTouchStop

Removes SoundTouch effects from a given call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01SoundTouchStopResponse;
import org.openapis.openapi.models.operations.PostV01SoundTouchStopSecurity;
import org.openapis.openapi.models.shared.SoundTouchStopParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SoundTouchStopParameters req = new SoundTouchStopParameters("fe372011-face-4bc2-bbcc-893d045bf67d");            

            PostV01SoundTouchStopResponse res = sdk.call.postV01SoundTouchStop(req, new PostV01SoundTouchStopSecurity("ipsam", "repellendus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.soundTouchStopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01TransferCall

Replaces the RestXML flow of a live call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01TransferCallResponse;
import org.openapis.openapi.models.operations.PostV01TransferCallSecurity;
import org.openapis.openapi.models.shared.TransferCallParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferCallParameters req = new TransferCallParameters("03694cf6-62b3-4f00-b0fc-6831ddcc2693", "https://example.org/restxml/endpoint/");            

            PostV01TransferCallResponse res = sdk.call.postV01TransferCall(req, new PostV01TransferCallSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.transferCallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
