# rootArchive

## Overview

Archival.

### Available Operations

* [disableArchivalLocation](#disablearchivallocation) - Disable location for archival and modification operations
* [enableArchivalLocation](#enablearchivallocation) - Enable archival location for archival and modification operations
* [getAwsAccountId](#getawsaccountid) - Get the AWS account ID of an AWS S3 archival location
* [refreshArchivalLocationDataSources](#refresharchivallocationdatasources) - Refresh archive information for a list of data sources

## disableArchivalLocation

Disables archiving and any changes to the data for the specified archival location. This operation disables snapshot upload, snapshot expiration, consolidation, and garbage collection operations on the archival location.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableArchivalLocationRequest;
import org.openapis.openapi.models.operations.DisableArchivalLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("quibusdam", "unde") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            DisableArchivalLocationRequest req = new DisableArchivalLocationRequest("nulla");            

            DisableArchivalLocationResponse res = sdk.rootArchive.disableArchivalLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableArchivalLocation

Enable archiving and other operations that were previously disabled on the specified archival location.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableArchivalLocationRequest;
import org.openapis.openapi.models.operations.EnableArchivalLocationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("corrupti", "illum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            EnableArchivalLocationRequest req = new EnableArchivalLocationRequest("vel");            

            EnableArchivalLocationResponse res = sdk.rootArchive.enableArchivalLocation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAwsAccountId

Get the AWS account ID of an AWS S3 archival location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAwsAccountIdRequest;
import org.openapis.openapi.models.operations.GetAwsAccountIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("error", "deserunt") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetAwsAccountIdRequest req = new GetAwsAccountIdRequest("suscipit");            

            GetAwsAccountIdResponse res = sdk.rootArchive.getAwsAccountId(req);

            if (res.stringResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## refreshArchivalLocationDataSources

Update the current Rubrik CDM cluster with information about the changes made to a list of data sources in an archival location by the Rubrik CDM cluster that owns the archival location.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RefreshArchivalLocationDataSourcesRequest;
import org.openapis.openapi.models.operations.RefreshArchivalLocationDataSourcesResponse;
import org.openapis.openapi.models.shared.ReaderRefreshDataSourcesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("iure", "magnam") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            RefreshArchivalLocationDataSourcesRequest req = new RefreshArchivalLocationDataSourcesRequest(                new ReaderRefreshDataSourcesRequest() {{
                                archivalDataSourceIds = new String[]{{
                                    add("ipsa"),
                                    add("delectus"),
                                    add("tempora"),
                                    add("suscipit"),
                                }};
                                localDataSourceIds = new String[]{{
                                    add("minus"),
                                    add("placeat"),
                                }};
                            }};, "voluptatum");            

            RefreshArchivalLocationDataSourcesResponse res = sdk.rootArchive.refreshArchivalLocationDataSources(req);

            if (res.asyncRequestStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
