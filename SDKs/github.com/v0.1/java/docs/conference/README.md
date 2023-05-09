# conference

## Overview

API methods responsible for managing conference rooms

### Available Operations

* [postV01ConferenceDeaf](#postv01conferencedeaf) - /v0.1/ConferenceDeaf/
* [postV01ConferenceHangup](#postv01conferencehangup) - /v0.1/ConferenceHangup/
* [postV01ConferenceKick](#postv01conferencekick) - /v0.1/ConferenceKick/
* [postV01ConferenceList](#postv01conferencelist) - /v0.1/ConferenceList/
* [postV01ConferenceListMembers](#postv01conferencelistmembers) - /v0.1/ConferenceListMembers/
* [postV01ConferenceMute](#postv01conferencemute) - /v0.1/ConferenceMute/
* [postV01ConferencePlay](#postv01conferenceplay) - /v0.1/ConferencePlay/
* [postV01ConferenceRecordStart](#postv01conferencerecordstart) - /v0.1/ConferenceRecordStart/
* [postV01ConferenceRecordStop](#postv01conferencerecordstop) - /v0.1/ConferenceRecordStop/
* [postV01ConferenceSpeak](#postv01conferencespeak) - /v0.1/ConferenceSpeak/
* [postV01ConferenceUndeaf](#postv01conferenceundeaf) - /v0.1/ConferenceUndeaf/
* [postV01ConferenceUnmute](#postv01conferenceunmute) - /v0.1/ConferenceUnmute/

## postV01ConferenceDeaf

Blocks audio to one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceDeafResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceDeafSecurity;
import org.openapis.openapi.models.shared.ConferenceDeafParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceDeafParameters req = new ConferenceDeafParameters("Room402", "13,42");            

            PostV01ConferenceDeafResponse res = sdk.conference.postV01ConferenceDeaf(req, new PostV01ConferenceDeafSecurity("odit", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceDeafResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceHangup

Kicks one or more conference members, without playing the kick sound

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceHangupResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceHangupSecurity;
import org.openapis.openapi.models.shared.ConferenceHangupParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceHangupParameters req = new ConferenceHangupParameters("Room402", "13,42");            

            PostV01ConferenceHangupResponse res = sdk.conference.postV01ConferenceHangup(req, new PostV01ConferenceHangupSecurity("at", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceHangupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceKick

Kicks one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceKickResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceKickSecurity;
import org.openapis.openapi.models.shared.ConferenceKickParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceKickParameters req = new ConferenceKickParameters("Room402", "13,42");            

            PostV01ConferenceKickResponse res = sdk.conference.postV01ConferenceKick(req, new PostV01ConferenceKickSecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceKickResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceList

Returns a list of all established conferences

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceListResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceListSecurity;
import org.openapis.openapi.models.shared.ConferenceListParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceListParameters req = new ConferenceListParameters() {{
                callUUIDFilter = "872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e";
                deafFilter = true;
                memberFilter = "13,42";
                mutedFilter = true;
            }};            

            PostV01ConferenceListResponse res = sdk.conference.postV01ConferenceList(req, new PostV01ConferenceListSecurity("quod", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceListMembers

Retrieves the member list for a given conference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceListMembersResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceListMembersSecurity;
import org.openapis.openapi.models.shared.ConferenceListMembersParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceListMembersParameters req = new ConferenceListMembersParameters("Room402") {{
                callUUIDFilter = "872066e1-fd89-4c57-8733-93c113980bc9,55e4214a-604a-4b56-82e4-97834b0d524e";
                deafFilter = true;
                memberFilter = "13,42";
                mutedFilter = true;
            }};            

            PostV01ConferenceListMembersResponse res = sdk.conference.postV01ConferenceListMembers(req, new PostV01ConferenceListMembersSecurity("totam", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceListMembersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceMute

Blocks audio from one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceMuteResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceMuteSecurity;
import org.openapis.openapi.models.shared.ConferenceMuteParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceMuteParameters req = new ConferenceMuteParameters("Room402", "13,42");            

            PostV01ConferenceMuteResponse res = sdk.conference.postV01ConferenceMute(req, new PostV01ConferenceMuteSecurity("dolorum", "dicta") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceMuteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferencePlay

Plays media to one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferencePlayResponse;
import org.openapis.openapi.models.operations.PostV01ConferencePlaySecurity;
import org.openapis.openapi.models.shared.ConferencePlayParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferencePlayParameters req = new ConferencePlayParameters("Room402", "/var/local/media/sample.wav", "13,42");            

            PostV01ConferencePlayResponse res = sdk.conference.postV01ConferencePlay(req, new PostV01ConferencePlaySecurity("nam", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferencePlayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceRecordStart

Initiates a conference recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceRecordStartResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceRecordStartSecurity;
import org.openapis.openapi.models.shared.ConferenceRecordStartParameters;
import org.openapis.openapi.models.shared.ConferenceRecordStartParametersFileFormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceRecordStartParameters req = new ConferenceRecordStartParameters("Room402") {{
                fileFormat = ConferenceRecordStartParametersFileFormatEnum.WAV;
                fileName = "Room402Rec";
                filePath = "/tmp/recordings";
            }};            

            PostV01ConferenceRecordStartResponse res = sdk.conference.postV01ConferenceRecordStart(req, new PostV01ConferenceRecordStartSecurity("occaecati", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceRecordStartResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceRecordStop

Stops a conference recording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceRecordStopResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceRecordStopSecurity;
import org.openapis.openapi.models.shared.ConferenceRecordStopParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceRecordStopParameters req = new ConferenceRecordStopParameters("Room402", "/tmp/recording/sample.wav");            

            PostV01ConferenceRecordStopResponse res = sdk.conference.postV01ConferenceRecordStop(req, new PostV01ConferenceRecordStopSecurity("deleniti", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceRecordStopResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceSpeak

Plays synthesized speech into a conference

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceSpeakResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceSpeakSecurity;
import org.openapis.openapi.models.shared.ConferenceSpeakParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceSpeakParameters req = new ConferenceSpeakParameters("Room402", "13,42", "The quick brown fox jumps over the lazy dog");            

            PostV01ConferenceSpeakResponse res = sdk.conference.postV01ConferenceSpeak(req, new PostV01ConferenceSpeakSecurity("optio", "totam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceSpeakResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceUndeaf

Restores audio to one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceUndeafResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceUndeafSecurity;
import org.openapis.openapi.models.shared.ConferenceUndeafParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceUndeafParameters req = new ConferenceUndeafParameters("Room402", "13,42");            

            PostV01ConferenceUndeafResponse res = sdk.conference.postV01ConferenceUndeaf(req, new PostV01ConferenceUndeafSecurity("beatae", "commodi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceUndeafResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV01ConferenceUnmute

Restores audio from one or more conference members

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV01ConferenceUnmuteResponse;
import org.openapis.openapi.models.operations.PostV01ConferenceUnmuteSecurity;
import org.openapis.openapi.models.shared.ConferenceUnmuteParameters;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ConferenceUnmuteParameters req = new ConferenceUnmuteParameters("Room402", "13,42");            

            PostV01ConferenceUnmuteResponse res = sdk.conference.postV01ConferenceUnmute(req, new PostV01ConferenceUnmuteSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.conferenceUnmuteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
