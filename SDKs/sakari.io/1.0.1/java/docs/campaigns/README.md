# campaigns

## Overview

Define reusable message campaigns with a predefined contact list/filter, template and schedule

### Available Operations

* [campaignsCreate](#campaignscreate) - Create campaign
* [campaignsFetch](#campaignsfetch) - Fetch campaign by ID
* [campaignsFetchAll](#campaignsfetchall) - Fetch campaigns
* [campaignsRemove](#campaignsremove) - Deletes a campaign
* [campaignsUpdate](#campaignsupdate) - Updates a campaign

## campaignsCreate

Create campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignsCreateRequest;
import org.openapis.openapi.models.operations.CampaignsCreateResponse;
import org.openapis.openapi.models.operations.CampaignsCreateSecurity;
import org.openapis.openapi.models.shared.CampaignRequest;
import org.openapis.openapi.models.shared.CampaignRequestFilters;
import org.openapis.openapi.models.shared.CampaignRequestTrigger;
import org.openapis.openapi.models.shared.CampaignRequestTriggerCodeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignsCreateRequest req = new CampaignsCreateRequest("corrupti") {{
                campaignRequest = new CampaignRequest() {{
                    filters = new CampaignRequestFilters() {{
                        attributes = new String[]{{
                            add("distinctio"),
                            add("quibusdam"),
                            add("unde"),
                        }};
                        contacts = new String[]{{
                            add("corrupti"),
                            add("illum"),
                            add("vel"),
                            add("error"),
                        }};
                        tags = new String[]{{
                            add("suscipit"),
                            add("iure"),
                            add("magnam"),
                        }};
                    }};;
                    template = "debitis";
                    trigger = new CampaignRequestTrigger() {{
                        code = CampaignRequestTriggerCodeEnum.M;
                    }};;
                }};;
            }};            

            CampaignsCreateResponse res = sdk.campaigns.campaignsCreate(req, new CampaignsCreateSecurity("delectus") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignsFetch

Fetch campaign by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignsFetchRequest;
import org.openapis.openapi.models.operations.CampaignsFetchResponse;
import org.openapis.openapi.models.operations.CampaignsFetchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignsFetchRequest req = new CampaignsFetchRequest("tempora", "suscipit");            

            CampaignsFetchResponse res = sdk.campaigns.campaignsFetch(req, new CampaignsFetchSecurity("molestiae") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignsFetchAll

Fetch campaigns

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignsFetchAllRequest;
import org.openapis.openapi.models.operations.CampaignsFetchAllResponse;
import org.openapis.openapi.models.operations.CampaignsFetchAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignsFetchAllRequest req = new CampaignsFetchAllRequest("minus") {{
                limit = 812169L;
                name = "Ted Mante";
                offset = 836079L;
            }};            

            CampaignsFetchAllResponse res = sdk.campaigns.campaignsFetchAll(req, new CampaignsFetchAllSecurity("ab") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignsRemove

Deletes a campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignsRemoveRequest;
import org.openapis.openapi.models.operations.CampaignsRemoveResponse;
import org.openapis.openapi.models.operations.CampaignsRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignsRemoveRequest req = new CampaignsRemoveRequest("quis", "veritatis");            

            CampaignsRemoveResponse res = sdk.campaigns.campaignsRemove(req, new CampaignsRemoveSecurity("deserunt") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignsRemove200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## campaignsUpdate

Updates a campaign

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CampaignsUpdateRequest;
import org.openapis.openapi.models.operations.CampaignsUpdateResponse;
import org.openapis.openapi.models.operations.CampaignsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CampaignsUpdateRequest req = new CampaignsUpdateRequest("perferendis", "ipsam");            

            CampaignsUpdateResponse res = sdk.campaigns.campaignsUpdate(req, new CampaignsUpdateSecurity("repellendus") {{
                sakariAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.campaignResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
