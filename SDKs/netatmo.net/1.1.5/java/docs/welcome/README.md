# welcome

## Overview

Welcome specific methods

### Available Operations

* [addwebhook](#addwebhook) - Links a callback url to a user.

* [dropwebhook](#dropwebhook) - Dissociates a webhook from a user.

* [getcamerapicture](#getcamerapicture) - Returns the snapshot associated to an event.

* [geteventsuntil](#geteventsuntil) - Returns the snapshot associated to an event.

* [gethomedata](#gethomedata) - Returns information about users homes and cameras.

* [getlasteventof](#getlasteventof) - Returns most recent events.

* [getnextevents](#getnextevents) - Returns previous events.

* [setpersonsaway](#setpersonsaway) - Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.

* [setpersonshome](#setpersonshome) - Sets a person as 'At home'.


## addwebhook

Links a callback url to a user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddwebhookRequest;
import org.openapis.openapi.models.operations.AddwebhookResponse;
import org.openapis.openapi.models.operations.AddwebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddwebhookRequest req = new AddwebhookRequest("ad", "natus");            

            AddwebhookResponse res = sdk.welcome.addwebhook(req, new AddwebhookSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dropwebhook

Dissociates a webhook from a user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DropwebhookRequest;
import org.openapis.openapi.models.operations.DropwebhookResponse;
import org.openapis.openapi.models.operations.DropwebhookSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DropwebhookRequest req = new DropwebhookRequest("sed");            

            DropwebhookResponse res = sdk.welcome.dropwebhook(req, new DropwebhookSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeWebhookResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getcamerapicture

Returns the snapshot associated to an event.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcamerapictureRequest;
import org.openapis.openapi.models.operations.GetcamerapictureResponse;
import org.openapis.openapi.models.operations.GetcamerapictureSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcamerapictureRequest req = new GetcamerapictureRequest("iste", "dolor");            

            GetcamerapictureResponse res = sdk.welcome.getcamerapicture(req, new GetcamerapictureSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getcamerapicture200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geteventsuntil

Returns the snapshot associated to an event.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GeteventsuntilRequest;
import org.openapis.openapi.models.operations.GeteventsuntilResponse;
import org.openapis.openapi.models.operations.GeteventsuntilSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GeteventsuntilRequest req = new GeteventsuntilRequest("natus", "laboriosam");            

            GeteventsuntilResponse res = sdk.welcome.geteventsuntil(req, new GeteventsuntilSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gethomedata

Returns information about users homes and cameras.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GethomedataRequest;
import org.openapis.openapi.models.operations.GethomedataResponse;
import org.openapis.openapi.models.operations.GethomedataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GethomedataRequest req = new GethomedataRequest() {{
                homeId = "hic";
                size = 902599L;
            }};            

            GethomedataResponse res = sdk.welcome.gethomedata(req, new GethomedataSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeHomeDataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlasteventof

Returns most recent events.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetlasteventofRequest;
import org.openapis.openapi.models.operations.GetlasteventofResponse;
import org.openapis.openapi.models.operations.GetlasteventofSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetlasteventofRequest req = new GetlasteventofRequest("fuga", "in") {{
                offset = 359508L;
            }};            

            GetlasteventofResponse res = sdk.welcome.getlasteventof(req, new GetlasteventofSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnextevents

Returns previous events.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetnexteventsRequest;
import org.openapis.openapi.models.operations.GetnexteventsResponse;
import org.openapis.openapi.models.operations.GetnexteventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetnexteventsRequest req = new GetnexteventsRequest("iste", "iure") {{
                size = 902349L;
            }};            

            GetnexteventsResponse res = sdk.welcome.getnextevents(req, new GetnexteventsSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomeEventResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setpersonsaway

Sets a person as 'Away' or the Home as 'Empty'. The event will be added to the user’s timeline.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetpersonsawayRequest;
import org.openapis.openapi.models.operations.SetpersonsawayResponse;
import org.openapis.openapi.models.operations.SetpersonsawaySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetpersonsawayRequest req = new SetpersonsawayRequest("quidem") {{
                personId = "architecto";
            }};            

            SetpersonsawayResponse res = sdk.welcome.setpersonsaway(req, new SetpersonsawaySecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomePersonsAwayResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setpersonshome

Sets a person as 'At home'.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetpersonshomeRequest;
import org.openapis.openapi.models.operations.SetpersonshomeResponse;
import org.openapis.openapi.models.operations.SetpersonshomeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SetpersonshomeRequest req = new SetpersonshomeRequest("ipsa", "reiciendis");            

            SetpersonshomeResponse res = sdk.welcome.setpersonshome(req, new SetpersonshomeSecurity() {{
                codeOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.naWelcomePersonsHomeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
