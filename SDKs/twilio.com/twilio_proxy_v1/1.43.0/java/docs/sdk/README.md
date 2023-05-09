# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createMessageInteraction](#createmessageinteraction) - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* [createParticipant](#createparticipant) - Add a new Participant to the Session
* [createPhoneNumber](#createphonenumber) - Add a Phone Number to a Service's Proxy Number Pool.
* [createService](#createservice) - Create a new Service for Twilio Proxy
* [createSession](#createsession) - Create a new Session
* [createShortCode](#createshortcode) - Add a Short Code to the Proxy Number Pool for the Service.
* [deleteInteraction](#deleteinteraction) - Delete a specific Interaction.
* [deleteParticipant](#deleteparticipant) - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* [deletePhoneNumber](#deletephonenumber) - Delete a specific Phone Number from a Service.
* [deleteService](#deleteservice) - Delete a specific Service.
* [deleteSession](#deletesession) - Delete a specific Session.
* [deleteShortCode](#deleteshortcode) - Delete a specific Short Code from a Service.
* [fetchInteraction](#fetchinteraction) - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* [fetchMessageInteraction](#fetchmessageinteraction)
* [fetchParticipant](#fetchparticipant) - Fetch a specific Participant.
* [fetchPhoneNumber](#fetchphonenumber) - Fetch a specific Phone Number.
* [fetchService](#fetchservice) - Fetch a specific Service.
* [fetchSession](#fetchsession) - Fetch a specific Session.
* [fetchShortCode](#fetchshortcode) - Fetch a specific Short Code.
* [listInteraction](#listinteraction) - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* [listMessageInteraction](#listmessageinteraction)
* [listParticipant](#listparticipant) - Retrieve a list of all Participants in a Session.
* [listPhoneNumber](#listphonenumber) - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* [listService](#listservice) - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* [listSession](#listsession) - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* [listShortCode](#listshortcode) - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* [updatePhoneNumber](#updatephonenumber) - Update a specific Proxy Number.
* [updateService](#updateservice) - Update a specific Service.
* [updateSession](#updatesession) - Update a specific Session.
* [updateShortCode](#updateshortcode) - Update a specific Short Code.

## createMessageInteraction

Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateMessageInteractionCreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionRequest;
import org.openapis.openapi.models.operations.CreateMessageInteractionResponse;
import org.openapis.openapi.models.operations.CreateMessageInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateMessageInteractionRequest req = new CreateMessageInteractionRequest("molestiae", "minus", "placeat") {{
                requestBody = new CreateMessageInteractionCreateMessageInteractionRequest() {{
                    body = "voluptatum";
                    mediaUrl = new String[]{{
                        add("https://hospitable-travel.org"),
                        add("http://gloomy-blanket.name"),
                    }};
                }};;
            }};            

            CreateMessageInteractionResponse res = sdk.sdk.createMessageInteraction(req, new CreateMessageInteractionSecurity("perferendis", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionParticipantMessageInteraction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createParticipant

Add a new Participant to the Session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateParticipantCreateParticipantRequest;
import org.openapis.openapi.models.operations.CreateParticipantRequest;
import org.openapis.openapi.models.operations.CreateParticipantResponse;
import org.openapis.openapi.models.operations.CreateParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateParticipantRequest req = new CreateParticipantRequest("repellendus", "sapiente") {{
                requestBody = new CreateParticipantCreateParticipantRequest("quo") {{
                    friendlyName = "odit";
                    proxyIdentifier = "at";
                    proxyIdentifierSid = "at";
                }};;
            }};            

            CreateParticipantResponse res = sdk.sdk.createParticipant(req, new CreateParticipantSecurity("maiores", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPhoneNumber

Add a Phone Number to a Service's Proxy Number Pool.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePhoneNumberCreatePhoneNumberRequest;
import org.openapis.openapi.models.operations.CreatePhoneNumberRequest;
import org.openapis.openapi.models.operations.CreatePhoneNumberResponse;
import org.openapis.openapi.models.operations.CreatePhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePhoneNumberRequest req = new CreatePhoneNumberRequest("quod") {{
                requestBody = new CreatePhoneNumberCreatePhoneNumberRequest() {{
                    isReserved = false;
                    phoneNumber = "quod";
                    sid = "esse";
                }};;
            }};            

            CreatePhoneNumberResponse res = sdk.sdk.createPhoneNumber(req, new CreatePhoneNumberSecurity("totam", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServicePhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createService

Create a new Service for Twilio Proxy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServiceCreateServiceRequest;
import org.openapis.openapi.models.operations.CreateServiceResponse;
import org.openapis.openapi.models.operations.CreateServiceSecurity;
import org.openapis.openapi.models.shared.ServiceEnumGeoMatchLevelEnum;
import org.openapis.openapi.models.shared.ServiceEnumNumberSelectionBehaviorEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateServiceCreateServiceRequest req = new CreateServiceCreateServiceRequest("dolorum") {{
                callbackUrl = "http://scaly-pathway.name";
                chatInstanceSid = "fugit";
                defaultTtl = 537373L;
                geoMatchLevel = ServiceEnumGeoMatchLevelEnum.COUNTRY;
                interceptCallbackUrl = "https://mean-brick.info";
                numberSelectionBehavior = ServiceEnumNumberSelectionBehaviorEnum.AVOID_STICKY;
                outOfSessionCallbackUrl = "http://dental-schedule.net";
            }};            

            CreateServiceResponse res = sdk.sdk.createService(req, new CreateServiceSecurity("esse", "ipsum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSession

Create a new Session

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSessionCreateSessionRequest;
import org.openapis.openapi.models.operations.CreateSessionRequest;
import org.openapis.openapi.models.operations.CreateSessionResponse;
import org.openapis.openapi.models.operations.CreateSessionSecurity;
import org.openapis.openapi.models.shared.SessionEnumModeEnum;
import org.openapis.openapi.models.shared.SessionEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSessionRequest req = new CreateSessionRequest("excepturi") {{
                requestBody = new CreateSessionCreateSessionRequest() {{
                    dateExpiry = OffsetDateTime.parse("2022-12-25T03:24:03.949Z");
                    mode = SessionEnumModeEnum.MESSAGE_ONLY;
                    participants = new Object[]{{
                        add("sed"),
                        add("iste"),
                        add("dolor"),
                    }};
                    status = SessionEnumStatusEnum.FAILED;
                    ttl = 386489L;
                    uniqueName = "hic";
                }};;
            }};            

            CreateSessionResponse res = sdk.sdk.createSession(req, new CreateSessionSecurity("saepe", "fuga") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createShortCode

Add a Short Code to the Proxy Number Pool for the Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateShortCodeCreateShortCodeRequest;
import org.openapis.openapi.models.operations.CreateShortCodeRequest;
import org.openapis.openapi.models.operations.CreateShortCodeResponse;
import org.openapis.openapi.models.operations.CreateShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateShortCodeRequest req = new CreateShortCodeRequest("in") {{
                requestBody = new CreateShortCodeCreateShortCodeRequest("corporis");;
            }};            

            CreateShortCodeResponse res = sdk.sdk.createShortCode(req, new CreateShortCodeSecurity("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteInteraction

Delete a specific Interaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteInteractionRequest;
import org.openapis.openapi.models.operations.DeleteInteractionResponse;
import org.openapis.openapi.models.operations.DeleteInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteInteractionRequest req = new DeleteInteractionRequest("saepe", "quidem", "architecto");            

            DeleteInteractionResponse res = sdk.sdk.deleteInteraction(req, new DeleteInteractionSecurity("ipsa", "reiciendis") {{
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

## deleteParticipant

Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteParticipantRequest;
import org.openapis.openapi.models.operations.DeleteParticipantResponse;
import org.openapis.openapi.models.operations.DeleteParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteParticipantRequest req = new DeleteParticipantRequest("est", "mollitia", "laborum");            

            DeleteParticipantResponse res = sdk.sdk.deleteParticipant(req, new DeleteParticipantSecurity("dolores", "dolorem") {{
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

## deletePhoneNumber

Delete a specific Phone Number from a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePhoneNumberRequest;
import org.openapis.openapi.models.operations.DeletePhoneNumberResponse;
import org.openapis.openapi.models.operations.DeletePhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePhoneNumberRequest req = new DeletePhoneNumberRequest("corporis", "explicabo");            

            DeletePhoneNumberResponse res = sdk.sdk.deletePhoneNumber(req, new DeletePhoneNumberSecurity("nobis", "enim") {{
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

## deleteService

Delete a specific Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServiceRequest;
import org.openapis.openapi.models.operations.DeleteServiceResponse;
import org.openapis.openapi.models.operations.DeleteServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteServiceRequest req = new DeleteServiceRequest("omnis");            

            DeleteServiceResponse res = sdk.sdk.deleteService(req, new DeleteServiceSecurity("nemo", "minima") {{
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

## deleteSession

Delete a specific Session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionRequest;
import org.openapis.openapi.models.operations.DeleteSessionResponse;
import org.openapis.openapi.models.operations.DeleteSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSessionRequest req = new DeleteSessionRequest("excepturi", "accusantium");            

            DeleteSessionResponse res = sdk.sdk.deleteSession(req, new DeleteSessionSecurity("iure", "culpa") {{
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

## deleteShortCode

Delete a specific Short Code from a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteShortCodeRequest;
import org.openapis.openapi.models.operations.DeleteShortCodeResponse;
import org.openapis.openapi.models.operations.DeleteShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteShortCodeRequest req = new DeleteShortCodeRequest("doloribus", "sapiente");            

            DeleteShortCodeResponse res = sdk.sdk.deleteShortCode(req, new DeleteShortCodeSecurity("architecto", "mollitia") {{
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

## fetchInteraction

Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchInteractionRequest;
import org.openapis.openapi.models.operations.FetchInteractionResponse;
import org.openapis.openapi.models.operations.FetchInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchInteractionRequest req = new FetchInteractionRequest("dolorem", "culpa", "consequuntur");            

            FetchInteractionResponse res = sdk.sdk.fetchInteraction(req, new FetchInteractionSecurity("repellat", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionInteraction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchMessageInteraction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchMessageInteractionRequest;
import org.openapis.openapi.models.operations.FetchMessageInteractionResponse;
import org.openapis.openapi.models.operations.FetchMessageInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchMessageInteractionRequest req = new FetchMessageInteractionRequest("occaecati", "numquam", "commodi", "quam");            

            FetchMessageInteractionResponse res = sdk.sdk.fetchMessageInteraction(req, new FetchMessageInteractionSecurity("molestiae", "velit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionParticipantMessageInteraction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchParticipant

Fetch a specific Participant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchParticipantRequest;
import org.openapis.openapi.models.operations.FetchParticipantResponse;
import org.openapis.openapi.models.operations.FetchParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchParticipantRequest req = new FetchParticipantRequest("error", "quia", "quis");            

            FetchParticipantResponse res = sdk.sdk.fetchParticipant(req, new FetchParticipantSecurity("vitae", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSessionParticipant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPhoneNumber

Fetch a specific Phone Number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPhoneNumberRequest;
import org.openapis.openapi.models.operations.FetchPhoneNumberResponse;
import org.openapis.openapi.models.operations.FetchPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("animi", "enim");            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("odit", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServicePhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchService

Fetch a specific Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchServiceRequest;
import org.openapis.openapi.models.operations.FetchServiceResponse;
import org.openapis.openapi.models.operations.FetchServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchServiceRequest req = new FetchServiceRequest("sequi");            

            FetchServiceResponse res = sdk.sdk.fetchService(req, new FetchServiceSecurity("tenetur", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSession

Fetch a specific Session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSessionRequest;
import org.openapis.openapi.models.operations.FetchSessionResponse;
import org.openapis.openapi.models.operations.FetchSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSessionRequest req = new FetchSessionRequest("id", "possimus");            

            FetchSessionResponse res = sdk.sdk.fetchSession(req, new FetchSessionSecurity("aut", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchShortCode

Fetch a specific Short Code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchShortCodeRequest;
import org.openapis.openapi.models.operations.FetchShortCodeResponse;
import org.openapis.openapi.models.operations.FetchShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchShortCodeRequest req = new FetchShortCodeRequest("error", "temporibus");            

            FetchShortCodeResponse res = sdk.sdk.fetchShortCode(req, new FetchShortCodeSecurity("laborum", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInteraction

Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInteractionRequest;
import org.openapis.openapi.models.operations.ListInteractionResponse;
import org.openapis.openapi.models.operations.ListInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInteractionRequest req = new ListInteractionRequest("reiciendis", "voluptatibus") {{
                page = 878194L;
                pageSize = 468651L;
                pageToken = "praesentium";
            }};            

            ListInteractionResponse res = sdk.sdk.listInteraction(req, new ListInteractionSecurity("voluptatibus", "ipsa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listInteractionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listMessageInteraction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListMessageInteractionRequest;
import org.openapis.openapi.models.operations.ListMessageInteractionResponse;
import org.openapis.openapi.models.operations.ListMessageInteractionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListMessageInteractionRequest req = new ListMessageInteractionRequest("omnis", "voluptate", "cum") {{
                page = 19987L;
                pageSize = 39187L;
                pageToken = "reprehenderit";
            }};            

            ListMessageInteractionResponse res = sdk.sdk.listMessageInteraction(req, new ListMessageInteractionSecurity("ut", "maiores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listMessageInteractionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listParticipant

Retrieve a list of all Participants in a Session.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListParticipantRequest;
import org.openapis.openapi.models.operations.ListParticipantResponse;
import org.openapis.openapi.models.operations.ListParticipantSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListParticipantRequest req = new ListParticipantRequest("dicta", "corporis") {{
                page = 296140L;
                pageSize = 480894L;
                pageToken = "dicta";
            }};            

            ListParticipantResponse res = sdk.sdk.listParticipant(req, new ListParticipantSecurity("harum", "enim") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listParticipantResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPhoneNumber

Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPhoneNumberRequest;
import org.openapis.openapi.models.operations.ListPhoneNumberResponse;
import org.openapis.openapi.models.operations.ListPhoneNumberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListPhoneNumberRequest req = new ListPhoneNumberRequest("accusamus") {{
                page = 414263L;
                pageSize = 918236L;
                pageToken = "quae";
            }};            

            ListPhoneNumberResponse res = sdk.sdk.listPhoneNumber(req, new ListPhoneNumberSecurity("ipsum", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listPhoneNumberResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listService

Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServiceRequest;
import org.openapis.openapi.models.operations.ListServiceResponse;
import org.openapis.openapi.models.operations.ListServiceSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListServiceRequest req = new ListServiceRequest() {{
                page = 565189L;
                pageSize = 566602L;
                pageToken = "pariatur";
            }};            

            ListServiceResponse res = sdk.sdk.listService(req, new ListServiceSecurity("modi", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listServiceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSession

Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSessionRequest;
import org.openapis.openapi.models.operations.ListSessionResponse;
import org.openapis.openapi.models.operations.ListSessionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSessionRequest req = new ListSessionRequest("rem") {{
                page = 916723L;
                pageSize = 93940L;
                pageToken = "repudiandae";
            }};            

            ListSessionResponse res = sdk.sdk.listSession(req, new ListSessionSecurity("sint", "veritatis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSessionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listShortCode

Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListShortCodeRequest;
import org.openapis.openapi.models.operations.ListShortCodeResponse;
import org.openapis.openapi.models.operations.ListShortCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListShortCodeRequest req = new ListShortCodeRequest("itaque") {{
                page = 277718L;
                pageSize = 318569L;
                pageToken = "consequatur";
            }};            

            ListShortCodeResponse res = sdk.sdk.listShortCode(req, new ListShortCodeSecurity("est", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listShortCodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePhoneNumber

Update a specific Proxy Number.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePhoneNumberRequest;
import org.openapis.openapi.models.operations.UpdatePhoneNumberResponse;
import org.openapis.openapi.models.operations.UpdatePhoneNumberSecurity;
import org.openapis.openapi.models.operations.UpdatePhoneNumberUpdatePhoneNumberRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePhoneNumberRequest req = new UpdatePhoneNumberRequest("explicabo", "deserunt") {{
                requestBody = new UpdatePhoneNumberUpdatePhoneNumberRequest() {{
                    isReserved = false;
                }};;
            }};            

            UpdatePhoneNumberResponse res = sdk.sdk.updatePhoneNumber(req, new UpdatePhoneNumberSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServicePhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateService

Update a specific Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServiceRequest;
import org.openapis.openapi.models.operations.UpdateServiceResponse;
import org.openapis.openapi.models.operations.UpdateServiceSecurity;
import org.openapis.openapi.models.operations.UpdateServiceUpdateServiceRequest;
import org.openapis.openapi.models.shared.ServiceEnumGeoMatchLevelEnum;
import org.openapis.openapi.models.shared.ServiceEnumNumberSelectionBehaviorEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateServiceRequest req = new UpdateServiceRequest("labore") {{
                requestBody = new UpdateServiceUpdateServiceRequest() {{
                    callbackUrl = "http://delightful-graph.name";
                    chatInstanceSid = "quos";
                    defaultTtl = 20107L;
                    geoMatchLevel = ServiceEnumGeoMatchLevelEnum.AREA_CODE;
                    interceptCallbackUrl = "https://hard-accordion.com";
                    numberSelectionBehavior = ServiceEnumNumberSelectionBehaviorEnum.PREFER_STICKY;
                    outOfSessionCallbackUrl = "https://far-off-prune.net";
                    uniqueName = "labore";
                }};;
            }};            

            UpdateServiceResponse res = sdk.sdk.updateService(req, new UpdateServiceSecurity("delectus", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1Service != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSession

Update a specific Session.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSessionRequest;
import org.openapis.openapi.models.operations.UpdateSessionResponse;
import org.openapis.openapi.models.operations.UpdateSessionSecurity;
import org.openapis.openapi.models.operations.UpdateSessionUpdateSessionRequest;
import org.openapis.openapi.models.shared.SessionEnumStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSessionRequest req = new UpdateSessionRequest("non", "eligendi") {{
                requestBody = new UpdateSessionUpdateSessionRequest() {{
                    dateExpiry = OffsetDateTime.parse("2022-03-17T20:21:28.792Z");
                    status = SessionEnumStatusEnum.CLOSED;
                    ttl = 896039L;
                }};;
            }};            

            UpdateSessionResponse res = sdk.sdk.updateSession(req, new UpdateSessionSecurity("sint", "officia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceSession != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateShortCode

Update a specific Short Code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateShortCodeRequest;
import org.openapis.openapi.models.operations.UpdateShortCodeResponse;
import org.openapis.openapi.models.operations.UpdateShortCodeSecurity;
import org.openapis.openapi.models.operations.UpdateShortCodeUpdateShortCodeRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateShortCodeRequest req = new UpdateShortCodeRequest("dolor", "debitis") {{
                requestBody = new UpdateShortCodeUpdateShortCodeRequest() {{
                    isReserved = false;
                }};;
            }};            

            UpdateShortCodeResponse res = sdk.sdk.updateShortCode(req, new UpdateShortCodeSecurity("a", "dolorum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.proxyV1ServiceShortCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
