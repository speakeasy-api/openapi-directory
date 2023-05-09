# offeringLearners

### Available Operations

* [deleteOfferingsOfferingIdUsersMarkerEmailMarks](#deleteofferingsofferingidusersmarkeremailmarks) - Remove learners from coach's marking list
* [deleteOfferingsOfferingIdUsersUserEmail](#deleteofferingsofferingidusersuseremail) - Removes user from the offering
* [getOfferingsOfferingIdUsers](#getofferingsofferingidusers) - Find offering's users
* [getOfferingsOfferingIdUsersMarkerEmailMarks](#getofferingsofferingidusersmarkeremailmarks) - Find Learners marked by a coach
* [patchUsersUserEmailTransfer](#patchusersuseremailtransfer) - Transfer a user between offerings
* [postOfferingsOfferingIdUsers](#postofferingsofferingidusers) - Adds user to the offering
* [postOfferingsOfferingIdUsersMarkerEmailMarks](#postofferingsofferingidusersmarkeremailmarks) - Add learners to be marked by a coach

## deleteOfferingsOfferingIdUsersMarkerEmailMarks

Removes an array of learners from coach's marking list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest req = new DeleteOfferingsOfferingIdUsersMarkerEmailMarksRequest(                new String[]{{
                                add("excepturi"),
                                add("tempora"),
                                add("facilis"),
                            }}, "tempore", "labore");            

            DeleteOfferingsOfferingIdUsersMarkerEmailMarksResponse res = sdk.offeringLearners.deleteOfferingsOfferingIdUsersMarkerEmailMarks(req);

            if (res.offeringUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteOfferingsOfferingIdUsersUserEmail

Removes a user from the offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersUserEmailRequest;
import org.openapis.openapi.models.operations.DeleteOfferingsOfferingIdUsersUserEmailResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteOfferingsOfferingIdUsersUserEmailRequest req = new DeleteOfferingsOfferingIdUsersUserEmailRequest("eum", "Nigel_Mayer@gmail.com");            

            DeleteOfferingsOfferingIdUsersUserEmailResponse res = sdk.offeringLearners.deleteOfferingsOfferingIdUsersUserEmail(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdUsers

Responds with a list of users in the offering (facilitators, learners and markers.).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersFacilitatorsEnum;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersLearnersEnum;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersMarkersEnum;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdUsersRequest req = new GetOfferingsOfferingIdUsersRequest("sint") {{
                facilitators = GetOfferingsOfferingIdUsersFacilitatorsEnum.FALSE;
                learners = GetOfferingsOfferingIdUsersLearnersEnum.TRUE;
                markers = GetOfferingsOfferingIdUsersMarkersEnum.FALSE;
            }};            

            GetOfferingsOfferingIdUsersResponse res = sdk.offeringLearners.getOfferingsOfferingIdUsers(req);

            if (res.offeringUserResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOfferingsOfferingIdUsersMarkerEmailMarks

Responds with all learners marked by the specified coach.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersMarkerEmailMarksRequest;
import org.openapis.openapi.models.operations.GetOfferingsOfferingIdUsersMarkerEmailMarksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOfferingsOfferingIdUsersMarkerEmailMarksRequest req = new GetOfferingsOfferingIdUsersMarkerEmailMarksRequest("dolorum", "in");            

            GetOfferingsOfferingIdUsersMarkerEmailMarksResponse res = sdk.offeringLearners.getOfferingsOfferingIdUsersMarkerEmailMarks(req);

            if (res.offeringUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchUsersUserEmailTransfer

Moves the user's access and progress from one offering to another.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchUsersUserEmailTransferRequest;
import org.openapis.openapi.models.operations.PatchUsersUserEmailTransferResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransferRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PatchUsersUserEmailTransferRequest req = new PatchUsersUserEmailTransferRequest(                new TransferRequest() {{
                                fromOfferingId = "illum";
                                sendInvite = false;
                                toOfferingId = "maiores";
                            }};, "Bettye_Gulgowski41@hotmail.com");            

            PatchUsersUserEmailTransferResponse res = sdk.offeringLearners.patchUsersUserEmailTransfer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdUsers

Adds one or more users to the offering.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersResponse;
import org.openapis.openapi.models.shared.OfferingUser;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserMetadata;
import org.openapis.openapi.models.shared.UserProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdUsersRequest req = new PostOfferingsOfferingIdUsersRequest(                new org.openapis.openapi.models.shared.OfferingUser[]{{
                                add(new OfferingUser("amet") {{
                                    email = "Delphine88@hotmail.com";
                                    firstName = "Virgil";
                                    isFacilitator = false;
                                    isMarker = false;
                                    isReadonly = false;
                                    lastName = "Pouros";
                                    metadata = new UserMetadata() {{
                                        tags = new String[]{{
                                            add("nam"),
                                            add("id"),
                                            add("blanditiis"),
                                        }};
                                    }};
                                    personId = "deleniti";
                                    profile = new UserProfileRequest() {{
                                        displayName = "sapiente";
                                    }};
                                    sendInvite = false;
                                    sendNotificationEmail = false;
                                }}),
                                add(new OfferingUser("labore") {{
                                    email = "Golda_Kassulke@yahoo.com";
                                    firstName = "Jarred";
                                    isFacilitator = false;
                                    isMarker = false;
                                    isReadonly = false;
                                    lastName = "Aufderhar";
                                    metadata = new UserMetadata() {{
                                        tags = new String[]{{
                                            add("magnam"),
                                            add("distinctio"),
                                        }};
                                    }};
                                    personId = "id";
                                    profile = new UserProfileRequest() {{
                                        displayName = "labore";
                                    }};
                                    sendInvite = false;
                                    sendNotificationEmail = false;
                                }}),
                                add(new OfferingUser("quos") {{
                                    email = "Liana_Rohan@yahoo.com";
                                    firstName = "Brice";
                                    isFacilitator = false;
                                    isMarker = false;
                                    isReadonly = false;
                                    lastName = "Brakus";
                                    metadata = new UserMetadata() {{
                                        tags = new String[]{{
                                            add("et"),
                                            add("excepturi"),
                                        }};
                                    }};
                                    personId = "ullam";
                                    profile = new UserProfileRequest() {{
                                        displayName = "provident";
                                    }};
                                    sendInvite = false;
                                    sendNotificationEmail = false;
                                }}),
                            }}, "sint");            

            PostOfferingsOfferingIdUsersResponse res = sdk.offeringLearners.postOfferingsOfferingIdUsers(req);

            if (res.offeringUserAddResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postOfferingsOfferingIdUsersMarkerEmailMarks

Adds an array of learners to be marked by the specified coach.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersMarkerEmailMarksRequest;
import org.openapis.openapi.models.operations.PostOfferingsOfferingIdUsersMarkerEmailMarksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    authorization = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostOfferingsOfferingIdUsersMarkerEmailMarksRequest req = new PostOfferingsOfferingIdUsersMarkerEmailMarksRequest(                new String[]{{
                                add("reiciendis"),
                                add("mollitia"),
                                add("ad"),
                            }}, "eum", "dolor");            

            PostOfferingsOfferingIdUsersMarkerEmailMarksResponse res = sdk.offeringLearners.postOfferingsOfferingIdUsersMarkerEmailMarks(req);

            if (res.offeringUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
