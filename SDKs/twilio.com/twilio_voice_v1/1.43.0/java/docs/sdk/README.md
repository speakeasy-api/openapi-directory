# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createByocTrunk](#createbyoctrunk)
* [createConnectionPolicy](#createconnectionpolicy)
* [createConnectionPolicyTarget](#createconnectionpolicytarget)
* [createDialingPermissionsCountryBulkUpdate](#createdialingpermissionscountrybulkupdate) - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [createIpRecord](#createiprecord)
* [createSourceIpMapping](#createsourceipmapping)
* [deleteArchivedCall](#deletearchivedcall) - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* [deleteByocTrunk](#deletebyoctrunk)
* [deleteConnectionPolicy](#deleteconnectionpolicy)
* [deleteConnectionPolicyTarget](#deleteconnectionpolicytarget)
* [deleteIpRecord](#deleteiprecord)
* [deleteSourceIpMapping](#deletesourceipmapping)
* [fetchByocTrunk](#fetchbyoctrunk)
* [fetchConnectionPolicy](#fetchconnectionpolicy)
* [fetchConnectionPolicyTarget](#fetchconnectionpolicytarget)
* [fetchDialingPermissionsCountry](#fetchdialingpermissionscountry) - Retrieve voice dialing country permissions identified by the given ISO country code
* [fetchDialingPermissionsSettings](#fetchdialingpermissionssettings) - Retrieve voice dialing permissions inheritance for the sub-account
* [fetchIpRecord](#fetchiprecord)
* [fetchSourceIpMapping](#fetchsourceipmapping)
* [listByocTrunk](#listbyoctrunk)
* [listConnectionPolicy](#listconnectionpolicy)
* [listConnectionPolicyTarget](#listconnectionpolicytarget)
* [listDialingPermissionsCountry](#listdialingpermissionscountry) - Retrieve all voice dialing country permissions for this account
* [listDialingPermissionsHrsPrefixes](#listdialingpermissionshrsprefixes) - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* [listIpRecord](#listiprecord)
* [listSourceIpMapping](#listsourceipmapping)
* [updateByocTrunk](#updatebyoctrunk)
* [updateConnectionPolicy](#updateconnectionpolicy)
* [updateConnectionPolicyTarget](#updateconnectionpolicytarget)
* [updateDialingPermissionsSettings](#updatedialingpermissionssettings) - Update voice dialing permissions inheritance for the sub-account
* [updateIpRecord](#updateiprecord)
* [updateSourceIpMapping](#updatesourceipmapping)

## createByocTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequest;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum;
import org.openapis.openapi.models.operations.CreateByocTrunkResponse;
import org.openapis.openapi.models.operations.CreateByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateByocTrunkCreateByocTrunkRequest req = new CreateByocTrunkCreateByocTrunkRequest() {{
                cnamLookupEnabled = false;
                connectionPolicySid = "minus";
                friendlyName = "placeat";
                fromDomainSid = "voluptatum";
                statusCallbackMethod = CreateByocTrunkCreateByocTrunkRequestStatusCallbackMethodEnum.POST;
                statusCallbackUrl = "https://hospitable-travel.org";
                voiceFallbackMethod = CreateByocTrunkCreateByocTrunkRequestVoiceFallbackMethodEnum.HEAD;
                voiceFallbackUrl = "http://bountiful-pension.com";
                voiceMethod = CreateByocTrunkCreateByocTrunkRequestVoiceMethodEnum.POST;
                voiceUrl = "https://well-informed-screamer.com";
            }};            

            CreateByocTrunkResponse res = sdk.sdk.createByocTrunk(req, new CreateByocTrunkSecurity("at", "at") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ByocTrunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnectionPolicy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionPolicyCreateConnectionPolicyRequest;
import org.openapis.openapi.models.operations.CreateConnectionPolicyResponse;
import org.openapis.openapi.models.operations.CreateConnectionPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConnectionPolicyCreateConnectionPolicyRequest req = new CreateConnectionPolicyCreateConnectionPolicyRequest() {{
                friendlyName = "maiores";
            }};            

            CreateConnectionPolicyResponse res = sdk.sdk.createConnectionPolicy(req, new CreateConnectionPolicySecurity("molestiae", "quod") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnectionPolicyTarget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.CreateConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.CreateConnectionPolicyTargetResponse;
import org.openapis.openapi.models.operations.CreateConnectionPolicyTargetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConnectionPolicyTargetRequest req = new CreateConnectionPolicyTargetRequest("quod") {{
                requestBody = new CreateConnectionPolicyTargetCreateConnectionPolicyTargetRequest("http://meager-seabass.net") {{
                    enabled = false;
                    friendlyName = "dicta";
                    priority = 720633L;
                    weight = 639921L;
                }};;
            }};            

            CreateConnectionPolicyTargetResponse res = sdk.sdk.createConnectionPolicyTarget(req, new CreateConnectionPolicyTargetSecurity("occaecati", "fugit") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicyConnectionPolicyTarget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDialingPermissionsCountryBulkUpdate

Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest;
import org.openapis.openapi.models.operations.CreateDialingPermissionsCountryBulkUpdateResponse;
import org.openapis.openapi.models.operations.CreateDialingPermissionsCountryBulkUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest req = new CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest("deleniti");            

            CreateDialingPermissionsCountryBulkUpdateResponse res = sdk.sdk.createDialingPermissionsCountryBulkUpdate(req, new CreateDialingPermissionsCountryBulkUpdateSecurity("hic", "optio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIpRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIpRecordCreateIpRecordRequest;
import org.openapis.openapi.models.operations.CreateIpRecordResponse;
import org.openapis.openapi.models.operations.CreateIpRecordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateIpRecordCreateIpRecordRequest req = new CreateIpRecordCreateIpRecordRequest("totam") {{
                cidrPrefixLength = 105907L;
                friendlyName = "commodi";
            }};            

            CreateIpRecordResponse res = sdk.sdk.createIpRecord(req, new CreateIpRecordSecurity("molestiae", "modi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1IpRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSourceIpMapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSourceIpMappingCreateSourceIpMappingRequest;
import org.openapis.openapi.models.operations.CreateSourceIpMappingResponse;
import org.openapis.openapi.models.operations.CreateSourceIpMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSourceIpMappingCreateSourceIpMappingRequest req = new CreateSourceIpMappingCreateSourceIpMappingRequest("qui", "impedit");            

            CreateSourceIpMappingResponse res = sdk.sdk.createSourceIpMapping(req, new CreateSourceIpMappingSecurity("cum", "esse") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1SourceIpMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArchivedCall

Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArchivedCallRequest;
import org.openapis.openapi.models.operations.DeleteArchivedCallResponse;
import org.openapis.openapi.models.operations.DeleteArchivedCallSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArchivedCallRequest req = new DeleteArchivedCallRequest(LocalDate.parse("2022-06-07"), "aspernatur");            

            DeleteArchivedCallResponse res = sdk.sdk.deleteArchivedCall(req, new DeleteArchivedCallSecurity("perferendis", "ad") {{
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

## deleteByocTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteByocTrunkRequest;
import org.openapis.openapi.models.operations.DeleteByocTrunkResponse;
import org.openapis.openapi.models.operations.DeleteByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteByocTrunkRequest req = new DeleteByocTrunkRequest("natus");            

            DeleteByocTrunkResponse res = sdk.sdk.deleteByocTrunk(req, new DeleteByocTrunkSecurity("sed", "iste") {{
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

## deleteConnectionPolicy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionPolicyRequest;
import org.openapis.openapi.models.operations.DeleteConnectionPolicyResponse;
import org.openapis.openapi.models.operations.DeleteConnectionPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionPolicyRequest req = new DeleteConnectionPolicyRequest("dolor");            

            DeleteConnectionPolicyResponse res = sdk.sdk.deleteConnectionPolicy(req, new DeleteConnectionPolicySecurity("natus", "laboriosam") {{
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

## deleteConnectionPolicyTarget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.DeleteConnectionPolicyTargetResponse;
import org.openapis.openapi.models.operations.DeleteConnectionPolicyTargetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConnectionPolicyTargetRequest req = new DeleteConnectionPolicyTargetRequest("hic", "saepe");            

            DeleteConnectionPolicyTargetResponse res = sdk.sdk.deleteConnectionPolicyTarget(req, new DeleteConnectionPolicyTargetSecurity("fuga", "in") {{
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

## deleteIpRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteIpRecordRequest;
import org.openapis.openapi.models.operations.DeleteIpRecordResponse;
import org.openapis.openapi.models.operations.DeleteIpRecordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteIpRecordRequest req = new DeleteIpRecordRequest("corporis");            

            DeleteIpRecordResponse res = sdk.sdk.deleteIpRecord(req, new DeleteIpRecordSecurity("iste", "iure") {{
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

## deleteSourceIpMapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceIpMappingRequest;
import org.openapis.openapi.models.operations.DeleteSourceIpMappingResponse;
import org.openapis.openapi.models.operations.DeleteSourceIpMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSourceIpMappingRequest req = new DeleteSourceIpMappingRequest("saepe");            

            DeleteSourceIpMappingResponse res = sdk.sdk.deleteSourceIpMapping(req, new DeleteSourceIpMappingSecurity("quidem", "architecto") {{
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

## fetchByocTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchByocTrunkRequest;
import org.openapis.openapi.models.operations.FetchByocTrunkResponse;
import org.openapis.openapi.models.operations.FetchByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchByocTrunkRequest req = new FetchByocTrunkRequest("ipsa");            

            FetchByocTrunkResponse res = sdk.sdk.fetchByocTrunk(req, new FetchByocTrunkSecurity("reiciendis", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ByocTrunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConnectionPolicy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConnectionPolicyRequest;
import org.openapis.openapi.models.operations.FetchConnectionPolicyResponse;
import org.openapis.openapi.models.operations.FetchConnectionPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConnectionPolicyRequest req = new FetchConnectionPolicyRequest("mollitia");            

            FetchConnectionPolicyResponse res = sdk.sdk.fetchConnectionPolicy(req, new FetchConnectionPolicySecurity("laborum", "dolores") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchConnectionPolicyTarget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.FetchConnectionPolicyTargetResponse;
import org.openapis.openapi.models.operations.FetchConnectionPolicyTargetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchConnectionPolicyTargetRequest req = new FetchConnectionPolicyTargetRequest("dolorem", "corporis");            

            FetchConnectionPolicyTargetResponse res = sdk.sdk.fetchConnectionPolicyTarget(req, new FetchConnectionPolicyTargetSecurity("explicabo", "nobis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicyConnectionPolicyTarget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDialingPermissionsCountry

Retrieve voice dialing country permissions identified by the given ISO country code

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDialingPermissionsCountryRequest;
import org.openapis.openapi.models.operations.FetchDialingPermissionsCountryResponse;
import org.openapis.openapi.models.operations.FetchDialingPermissionsCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDialingPermissionsCountryRequest req = new FetchDialingPermissionsCountryRequest("enim");            

            FetchDialingPermissionsCountryResponse res = sdk.sdk.fetchDialingPermissionsCountry(req, new FetchDialingPermissionsCountrySecurity("omnis", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1DialingPermissionsDialingPermissionsCountryInstance != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchDialingPermissionsSettings

Retrieve voice dialing permissions inheritance for the sub-account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchDialingPermissionsSettingsResponse;
import org.openapis.openapi.models.operations.FetchDialingPermissionsSettingsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchDialingPermissionsSettingsResponse res = sdk.sdk.fetchDialingPermissionsSettings(new FetchDialingPermissionsSettingsSecurity("minima", "excepturi") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1DialingPermissionsDialingPermissionsSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchIpRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchIpRecordRequest;
import org.openapis.openapi.models.operations.FetchIpRecordResponse;
import org.openapis.openapi.models.operations.FetchIpRecordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchIpRecordRequest req = new FetchIpRecordRequest("accusantium");            

            FetchIpRecordResponse res = sdk.sdk.fetchIpRecord(req, new FetchIpRecordSecurity("iure", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1IpRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchSourceIpMapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchSourceIpMappingRequest;
import org.openapis.openapi.models.operations.FetchSourceIpMappingResponse;
import org.openapis.openapi.models.operations.FetchSourceIpMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchSourceIpMappingRequest req = new FetchSourceIpMappingRequest("doloribus");            

            FetchSourceIpMappingResponse res = sdk.sdk.fetchSourceIpMapping(req, new FetchSourceIpMappingSecurity("sapiente", "architecto") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1SourceIpMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listByocTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListByocTrunkRequest;
import org.openapis.openapi.models.operations.ListByocTrunkResponse;
import org.openapis.openapi.models.operations.ListByocTrunkSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListByocTrunkRequest req = new ListByocTrunkRequest() {{
                page = 652790L;
                pageSize = 208876L;
                pageToken = "culpa";
            }};            

            ListByocTrunkResponse res = sdk.sdk.listByocTrunk(req, new ListByocTrunkSecurity("consequuntur", "repellat") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listByocTrunkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectionPolicy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionPolicyRequest;
import org.openapis.openapi.models.operations.ListConnectionPolicyResponse;
import org.openapis.openapi.models.operations.ListConnectionPolicySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConnectionPolicyRequest req = new ListConnectionPolicyRequest() {{
                page = 653108L;
                pageSize = 581850L;
                pageToken = "numquam";
            }};            

            ListConnectionPolicyResponse res = sdk.sdk.listConnectionPolicy(req, new ListConnectionPolicySecurity("commodi", "quam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConnectionPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectionPolicyTarget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.ListConnectionPolicyTargetResponse;
import org.openapis.openapi.models.operations.ListConnectionPolicyTargetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListConnectionPolicyTargetRequest req = new ListConnectionPolicyTargetRequest("molestiae") {{
                page = 244425L;
                pageSize = 623510L;
                pageToken = "quia";
            }};            

            ListConnectionPolicyTargetResponse res = sdk.sdk.listConnectionPolicyTarget(req, new ListConnectionPolicyTargetSecurity("quis", "vitae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listConnectionPolicyTargetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDialingPermissionsCountry

Retrieve all voice dialing country permissions for this account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDialingPermissionsCountryRequest;
import org.openapis.openapi.models.operations.ListDialingPermissionsCountryResponse;
import org.openapis.openapi.models.operations.ListDialingPermissionsCountrySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDialingPermissionsCountryRequest req = new ListDialingPermissionsCountryRequest() {{
                continent = "laborum";
                countryCode = "NG";
                highRiskSpecialNumbersEnabled = false;
                highRiskTollfraudNumbersEnabled = false;
                isoCode = "enim";
                lowRiskNumbersEnabled = false;
                page = 138183L;
                pageSize = 778346L;
                pageToken = "sequi";
            }};            

            ListDialingPermissionsCountryResponse res = sdk.sdk.listDialingPermissionsCountry(req, new ListDialingPermissionsCountrySecurity("tenetur", "ipsam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDialingPermissionsCountryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDialingPermissionsHrsPrefixes

Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDialingPermissionsHrsPrefixesRequest;
import org.openapis.openapi.models.operations.ListDialingPermissionsHrsPrefixesResponse;
import org.openapis.openapi.models.operations.ListDialingPermissionsHrsPrefixesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDialingPermissionsHrsPrefixesRequest req = new ListDialingPermissionsHrsPrefixesRequest("id") {{
                page = 820994L;
                pageSize = 13571L;
                pageToken = "quasi";
            }};            

            ListDialingPermissionsHrsPrefixesResponse res = sdk.sdk.listDialingPermissionsHrsPrefixes(req, new ListDialingPermissionsHrsPrefixesSecurity("error", "temporibus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listDialingPermissionsHrsPrefixesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIpRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIpRecordRequest;
import org.openapis.openapi.models.operations.ListIpRecordResponse;
import org.openapis.openapi.models.operations.ListIpRecordSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListIpRecordRequest req = new ListIpRecordRequest() {{
                page = 673660L;
                pageSize = 96098L;
                pageToken = "reiciendis";
            }};            

            ListIpRecordResponse res = sdk.sdk.listIpRecord(req, new ListIpRecordSecurity("voluptatibus", "vero") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listIpRecordResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceIpMapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceIpMappingRequest;
import org.openapis.openapi.models.operations.ListSourceIpMappingResponse;
import org.openapis.openapi.models.operations.ListSourceIpMappingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListSourceIpMappingRequest req = new ListSourceIpMappingRequest() {{
                page = 468651L;
                pageSize = 509624L;
                pageToken = "voluptatibus";
            }};            

            ListSourceIpMappingResponse res = sdk.sdk.listSourceIpMapping(req, new ListSourceIpMappingSecurity("ipsa", "omnis") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.listSourceIpMappingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateByocTrunk

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateByocTrunkRequest;
import org.openapis.openapi.models.operations.UpdateByocTrunkResponse;
import org.openapis.openapi.models.operations.UpdateByocTrunkSecurity;
import org.openapis.openapi.models.operations.UpdateByocTrunkUpdateByocTrunkRequest;
import org.openapis.openapi.models.operations.UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;
import org.openapis.openapi.models.operations.UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateByocTrunkRequest req = new UpdateByocTrunkRequest("voluptate") {{
                requestBody = new UpdateByocTrunkUpdateByocTrunkRequest() {{
                    cnamLookupEnabled = false;
                    connectionPolicySid = "cum";
                    friendlyName = "perferendis";
                    fromDomainSid = "doloremque";
                    statusCallbackMethod = UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum.POST;
                    statusCallbackUrl = "http://wooden-cabin.info";
                    voiceFallbackMethod = UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum.GET;
                    voiceFallbackUrl = "http://classic-presidency.biz";
                    voiceMethod = UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum.DELETE;
                    voiceUrl = "http://utilized-bank.biz";
                }};;
            }};            

            UpdateByocTrunkResponse res = sdk.sdk.updateByocTrunk(req, new UpdateByocTrunkSecurity("quidem", "molestias") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ByocTrunk != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectionPolicy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyRequest;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyResponse;
import org.openapis.openapi.models.operations.UpdateConnectionPolicySecurity;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyUpdateConnectionPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConnectionPolicyRequest req = new UpdateConnectionPolicyRequest("excepturi") {{
                requestBody = new UpdateConnectionPolicyUpdateConnectionPolicyRequest() {{
                    friendlyName = "pariatur";
                }};;
            }};            

            UpdateConnectionPolicyResponse res = sdk.sdk.updateConnectionPolicy(req, new UpdateConnectionPolicySecurity("modi", "praesentium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnectionPolicyTarget

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyTargetRequest;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyTargetResponse;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyTargetSecurity;
import org.openapis.openapi.models.operations.UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConnectionPolicyTargetRequest req = new UpdateConnectionPolicyTargetRequest("rem", "voluptates") {{
                requestBody = new UpdateConnectionPolicyTargetUpdateConnectionPolicyTargetRequest() {{
                    enabled = false;
                    friendlyName = "quasi";
                    priority = 921158L;
                    target = "https://bony-trip.biz";
                    weight = 318569L;
                }};;
            }};            

            UpdateConnectionPolicyTargetResponse res = sdk.sdk.updateConnectionPolicyTarget(req, new UpdateConnectionPolicyTargetSecurity("consequatur", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1ConnectionPolicyConnectionPolicyTarget != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDialingPermissionsSettings

Update voice dialing permissions inheritance for the sub-account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDialingPermissionsSettingsResponse;
import org.openapis.openapi.models.operations.UpdateDialingPermissionsSettingsSecurity;
import org.openapis.openapi.models.operations.UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest req = new UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest() {{
                dialingPermissionsInheritance = false;
            }};            

            UpdateDialingPermissionsSettingsResponse res = sdk.sdk.updateDialingPermissionsSettings(req, new UpdateDialingPermissionsSettingsSecurity("quibusdam", "explicabo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1DialingPermissionsDialingPermissionsSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateIpRecord

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateIpRecordRequest;
import org.openapis.openapi.models.operations.UpdateIpRecordResponse;
import org.openapis.openapi.models.operations.UpdateIpRecordSecurity;
import org.openapis.openapi.models.operations.UpdateIpRecordUpdateIpRecordRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateIpRecordRequest req = new UpdateIpRecordRequest("deserunt") {{
                requestBody = new UpdateIpRecordUpdateIpRecordRequest() {{
                    friendlyName = "distinctio";
                }};;
            }};            

            UpdateIpRecordResponse res = sdk.sdk.updateIpRecord(req, new UpdateIpRecordSecurity("quibusdam", "labore") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1IpRecord != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSourceIpMapping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSourceIpMappingRequest;
import org.openapis.openapi.models.operations.UpdateSourceIpMappingResponse;
import org.openapis.openapi.models.operations.UpdateSourceIpMappingSecurity;
import org.openapis.openapi.models.operations.UpdateSourceIpMappingUpdateSourceIpMappingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSourceIpMappingRequest req = new UpdateSourceIpMappingRequest("modi") {{
                requestBody = new UpdateSourceIpMappingUpdateSourceIpMappingRequest("qui");;
            }};            

            UpdateSourceIpMappingResponse res = sdk.sdk.updateSourceIpMapping(req, new UpdateSourceIpMappingSecurity("aliquid", "cupiditate") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.voiceV1SourceIpMapping != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
