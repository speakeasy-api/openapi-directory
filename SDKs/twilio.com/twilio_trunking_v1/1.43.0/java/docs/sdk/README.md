# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createCredentialList](#createcredentiallist)
* [createIpAccessControlList](#createipaccesscontrollist) - Associate an IP Access Control List with a Trunk
* [createOriginationUrl](#createoriginationurl)
* [createPhoneNumber](#createphonenumber)
* [createTrunk](#createtrunk)
* [deleteCredentialList](#deletecredentiallist)
* [deleteIpAccessControlList](#deleteipaccesscontrollist) - Remove an associated IP Access Control List from a Trunk
* [deleteOriginationUrl](#deleteoriginationurl)
* [deletePhoneNumber](#deletephonenumber)
* [deleteTrunk](#deletetrunk)
* [fetchCredentialList](#fetchcredentiallist)
* [fetchIpAccessControlList](#fetchipaccesscontrollist)
* [fetchOriginationUrl](#fetchoriginationurl)
* [fetchPhoneNumber](#fetchphonenumber)
* [fetchRecording](#fetchrecording)
* [fetchTrunk](#fetchtrunk)
* [listCredentialList](#listcredentiallist)
* [listIpAccessControlList](#listipaccesscontrollist) - List all IP Access Control Lists for a Trunk
* [listOriginationUrl](#listoriginationurl)
* [listPhoneNumber](#listphonenumber)
* [listTrunk](#listtrunk)
* [updateOriginationUrl](#updateoriginationurl)
* [updateRecording](#updaterecording)
* [updateTrunk](#updatetrunk)

## createCredentialList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCredentialListCreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListRequest;
import org.openapis.openapi.models.operations.CreateCredentialListResponse;
import org.openapis.openapi.models.operations.CreateCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCredentialListRequest req = new CreateCredentialListRequest("unde") {{
                requestBody = new CreateCredentialListCreateCredentialListRequest("nulla");;
            }};            

            CreateCredentialListResponse res = sdk.sdk.createCredentialList(req, new CreateCredentialListSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIpAccessControlList

Associate an IP Access Control List with a Trunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIpAccessControlListCreateIpAccessControlListRequest;
import org.openapis.openapi.models.operations.CreateIpAccessControlListRequest;
import org.openapis.openapi.models.operations.CreateIpAccessControlListResponse;
import org.openapis.openapi.models.operations.CreateIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIpAccessControlListRequest req = new CreateIpAccessControlListRequest("vel") {{
                requestBody = new CreateIpAccessControlListCreateIpAccessControlListRequest("error");;
            }};            

            CreateIpAccessControlListResponse res = sdk.sdk.createIpAccessControlList(req, new CreateIpAccessControlListSecurity("deserunt", "suscipit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkIpAccessControlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOriginationUrl

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOriginationUrlCreateOriginationUrlRequest;
import org.openapis.openapi.models.operations.CreateOriginationUrlRequest;
import org.openapis.openapi.models.operations.CreateOriginationUrlResponse;
import org.openapis.openapi.models.operations.CreateOriginationUrlSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateOriginationUrlRequest req = new CreateOriginationUrlRequest("iure") {{
                requestBody = new CreateOriginationUrlCreateOriginationUrlRequest(false, "magnam", 891773L, "http://whirlwind-diver.info", 477665L);;
            }};            

            CreateOriginationUrlResponse res = sdk.sdk.createOriginationUrl(req, new CreateOriginationUrlSecurity("minus", "placeat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkOriginationUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createPhoneNumber

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

            CreatePhoneNumberRequest req = new CreatePhoneNumberRequest("voluptatum") {{
                requestBody = new CreatePhoneNumberCreatePhoneNumberRequest("iusto");;
            }};            

            CreatePhoneNumberResponse res = sdk.sdk.createPhoneNumber(req, new CreatePhoneNumberSecurity("excepturi", "nisi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkPhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTrunkCreateTrunkRequest;
import org.openapis.openapi.models.operations.CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum;
import org.openapis.openapi.models.operations.CreateTrunkResponse;
import org.openapis.openapi.models.operations.CreateTrunkSecurity;
import org.openapis.openapi.models.shared.TrunkEnumTransferCallerIdEnum;
import org.openapis.openapi.models.shared.TrunkEnumTransferSettingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateTrunkCreateTrunkRequest req = new CreateTrunkCreateTrunkRequest() {{
                cnamLookupEnabled = false;
                disasterRecoveryMethod = CreateTrunkCreateTrunkRequestDisasterRecoveryMethodEnum.DELETE;
                disasterRecoveryUrl = "https://bite-sized-favorite.com";
                domainName = "deserunt";
                friendlyName = "perferendis";
                secure = false;
                transferCallerId = TrunkEnumTransferCallerIdEnum.FROM_TRANSFEREE;
                transferMode = TrunkEnumTransferSettingEnum.SIP_ONLY;
            }};            

            CreateTrunkResponse res = sdk.sdk.createTrunk(req, new CreateTrunkSecurity("sapiente", "quo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1Trunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCredentialList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCredentialListRequest;
import org.openapis.openapi.models.operations.DeleteCredentialListResponse;
import org.openapis.openapi.models.operations.DeleteCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCredentialListRequest req = new DeleteCredentialListRequest("odit", "at");            

            DeleteCredentialListResponse res = sdk.sdk.deleteCredentialList(req, new DeleteCredentialListSecurity("at", "maiores") {{
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

## deleteIpAccessControlList

Remove an associated IP Access Control List from a Trunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIpAccessControlListRequest;
import org.openapis.openapi.models.operations.DeleteIpAccessControlListResponse;
import org.openapis.openapi.models.operations.DeleteIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIpAccessControlListRequest req = new DeleteIpAccessControlListRequest("molestiae", "quod");            

            DeleteIpAccessControlListResponse res = sdk.sdk.deleteIpAccessControlList(req, new DeleteIpAccessControlListSecurity("quod", "esse") {{
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

## deleteOriginationUrl

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteOriginationUrlRequest;
import org.openapis.openapi.models.operations.DeleteOriginationUrlResponse;
import org.openapis.openapi.models.operations.DeleteOriginationUrlSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteOriginationUrlRequest req = new DeleteOriginationUrlRequest("totam", "porro");            

            DeleteOriginationUrlResponse res = sdk.sdk.deleteOriginationUrl(req, new DeleteOriginationUrlSecurity("dolorum", "dicta") {{
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

            DeletePhoneNumberRequest req = new DeletePhoneNumberRequest("nam", "officia");            

            DeletePhoneNumberResponse res = sdk.sdk.deletePhoneNumber(req, new DeletePhoneNumberSecurity("occaecati", "fugit") {{
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

## deleteTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTrunkRequest;
import org.openapis.openapi.models.operations.DeleteTrunkResponse;
import org.openapis.openapi.models.operations.DeleteTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTrunkRequest req = new DeleteTrunkRequest("deleniti");            

            DeleteTrunkResponse res = sdk.sdk.deleteTrunk(req, new DeleteTrunkSecurity("hic", "optio") {{
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

## fetchCredentialList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCredentialListRequest;
import org.openapis.openapi.models.operations.FetchCredentialListResponse;
import org.openapis.openapi.models.operations.FetchCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCredentialListRequest req = new FetchCredentialListRequest("totam", "beatae");            

            FetchCredentialListResponse res = sdk.sdk.fetchCredentialList(req, new FetchCredentialListSecurity("commodi", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkCredentialList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIpAccessControlList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIpAccessControlListRequest;
import org.openapis.openapi.models.operations.FetchIpAccessControlListResponse;
import org.openapis.openapi.models.operations.FetchIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIpAccessControlListRequest req = new FetchIpAccessControlListRequest("modi", "qui");            

            FetchIpAccessControlListResponse res = sdk.sdk.fetchIpAccessControlList(req, new FetchIpAccessControlListSecurity("impedit", "cum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkIpAccessControlList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchOriginationUrl

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchOriginationUrlRequest;
import org.openapis.openapi.models.operations.FetchOriginationUrlResponse;
import org.openapis.openapi.models.operations.FetchOriginationUrlSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchOriginationUrlRequest req = new FetchOriginationUrlRequest("esse", "ipsum");            

            FetchOriginationUrlResponse res = sdk.sdk.fetchOriginationUrl(req, new FetchOriginationUrlSecurity("excepturi", "aspernatur") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkOriginationUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPhoneNumber

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

            FetchPhoneNumberRequest req = new FetchPhoneNumberRequest("perferendis", "ad");            

            FetchPhoneNumberResponse res = sdk.sdk.fetchPhoneNumber(req, new FetchPhoneNumberSecurity("natus", "sed") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkPhoneNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchRecording

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

            FetchRecordingRequest req = new FetchRecordingRequest("iste");            

            FetchRecordingResponse res = sdk.sdk.fetchRecording(req, new FetchRecordingSecurity("dolor", "natus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchTrunkRequest;
import org.openapis.openapi.models.operations.FetchTrunkResponse;
import org.openapis.openapi.models.operations.FetchTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchTrunkRequest req = new FetchTrunkRequest("laboriosam");            

            FetchTrunkResponse res = sdk.sdk.fetchTrunk(req, new FetchTrunkSecurity("hic", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1Trunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCredentialList

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCredentialListRequest;
import org.openapis.openapi.models.operations.ListCredentialListResponse;
import org.openapis.openapi.models.operations.ListCredentialListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCredentialListRequest req = new ListCredentialListRequest("fuga") {{
                page = 449950L;
                pageSize = 359508L;
                pageToken = "iste";
            }};            

            ListCredentialListResponse res = sdk.sdk.listCredentialList(req, new ListCredentialListSecurity("iure", "saepe") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listCredentialListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIpAccessControlList

List all IP Access Control Lists for a Trunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIpAccessControlListRequest;
import org.openapis.openapi.models.operations.ListIpAccessControlListResponse;
import org.openapis.openapi.models.operations.ListIpAccessControlListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIpAccessControlListRequest req = new ListIpAccessControlListRequest("quidem") {{
                page = 99280L;
                pageSize = 60225L;
                pageToken = "reiciendis";
            }};            

            ListIpAccessControlListResponse res = sdk.sdk.listIpAccessControlList(req, new ListIpAccessControlListSecurity("est", "mollitia") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIpAccessControlListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOriginationUrl

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOriginationUrlRequest;
import org.openapis.openapi.models.operations.ListOriginationUrlResponse;
import org.openapis.openapi.models.operations.ListOriginationUrlSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOriginationUrlRequest req = new ListOriginationUrlRequest("laborum") {{
                page = 170909L;
                pageSize = 210382L;
                pageToken = "corporis";
            }};            

            ListOriginationUrlResponse res = sdk.sdk.listOriginationUrl(req, new ListOriginationUrlSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listOriginationUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPhoneNumber

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

            ListPhoneNumberRequest req = new ListPhoneNumberRequest("enim") {{
                page = 607831L;
                pageSize = 363711L;
                pageToken = "minima";
            }};            

            ListPhoneNumberResponse res = sdk.sdk.listPhoneNumber(req, new ListPhoneNumberSecurity("excepturi", "accusantium") {{
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

## listTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTrunkRequest;
import org.openapis.openapi.models.operations.ListTrunkResponse;
import org.openapis.openapi.models.operations.ListTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTrunkRequest req = new ListTrunkRequest() {{
                page = 438601L;
                pageSize = 634274L;
                pageToken = "doloribus";
            }};            

            ListTrunkResponse res = sdk.sdk.listTrunk(req, new ListTrunkSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listTrunkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateOriginationUrl

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOriginationUrlRequest;
import org.openapis.openapi.models.operations.UpdateOriginationUrlResponse;
import org.openapis.openapi.models.operations.UpdateOriginationUrlSecurity;
import org.openapis.openapi.models.operations.UpdateOriginationUrlUpdateOriginationUrlRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateOriginationUrlRequest req = new UpdateOriginationUrlRequest("mollitia", "dolorem") {{
                requestBody = new UpdateOriginationUrlUpdateOriginationUrlRequest() {{
                    enabled = false;
                    friendlyName = "culpa";
                    priority = 161309L;
                    sipUrl = "https://prize-mud.biz";
                    weight = 414369L;
                }};;
            }};            

            UpdateOriginationUrlResponse res = sdk.sdk.updateOriginationUrl(req, new UpdateOriginationUrlSecurity("quam", "molestiae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkOriginationUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRecording

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRecordingRequest;
import org.openapis.openapi.models.operations.UpdateRecordingResponse;
import org.openapis.openapi.models.operations.UpdateRecordingSecurity;
import org.openapis.openapi.models.operations.UpdateRecordingUpdateRecordingRequest;
import org.openapis.openapi.models.shared.RecordingEnumRecordingModeEnum;
import org.openapis.openapi.models.shared.RecordingEnumRecordingTrimEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateRecordingRequest req = new UpdateRecordingRequest("velit") {{
                requestBody = new UpdateRecordingUpdateRecordingRequest() {{
                    mode = RecordingEnumRecordingModeEnum.RECORD_FROM_RINGING_DUAL;
                    trim = RecordingEnumRecordingTrimEnum.TRIM_SILENCE;
                }};;
            }};            

            UpdateRecordingResponse res = sdk.sdk.updateRecording(req, new UpdateRecordingSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1TrunkRecording != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTrunkRequest;
import org.openapis.openapi.models.operations.UpdateTrunkResponse;
import org.openapis.openapi.models.operations.UpdateTrunkSecurity;
import org.openapis.openapi.models.operations.UpdateTrunkUpdateTrunkRequest;
import org.openapis.openapi.models.operations.UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum;
import org.openapis.openapi.models.shared.TrunkEnumTransferCallerIdEnum;
import org.openapis.openapi.models.shared.TrunkEnumTransferSettingEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateTrunkRequest req = new UpdateTrunkRequest("laborum") {{
                requestBody = new UpdateTrunkUpdateTrunkRequest() {{
                    cnamLookupEnabled = false;
                    disasterRecoveryMethod = UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum.PATCH;
                    disasterRecoveryUrl = "http://conscious-screen.biz";
                    domainName = "tenetur";
                    friendlyName = "ipsam";
                    secure = false;
                    transferCallerId = TrunkEnumTransferCallerIdEnum.FROM_TRANSFEROR;
                    transferMode = TrunkEnumTransferSettingEnum.SIP_ONLY;
                }};;
            }};            

            UpdateTrunkResponse res = sdk.sdk.updateTrunk(req, new UpdateTrunkSecurity("aut", "quasi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.trunkingV1Trunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
