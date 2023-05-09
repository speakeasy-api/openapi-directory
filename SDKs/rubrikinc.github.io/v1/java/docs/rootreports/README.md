# rootReports

## Overview

Report.

### Available Operations

* [getComplianceSummarySlav1](#getcompliancesummaryslav1) - Get compliance summary information
* [getComplianceSummaryV1](#getcompliancesummaryv1) - Get compliance summary information
* [setReportConfig](#setreportconfig) - Modify the report config

## getComplianceSummarySlav1

Returns the compliance summary information for all protected objects based on whether the last expected snapshot was successful. This requirement is based on the SLA Domain assigned to the objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceSummarySlav1Request;
import org.openapis.openapi.models.operations.GetComplianceSummarySlav1Response;
import org.openapis.openapi.models.operations.GetComplianceSummarySlav1SnapshotRangeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("pariatur", "harum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetComplianceSummarySlav1Request req = new GetComplianceSummarySlav1Request(GetComplianceSummarySlav1SnapshotRangeEnum.LAST2_SNAPSHOTS);            

            GetComplianceSummarySlav1Response res = sdk.rootReports.getComplianceSummarySlav1(req);

            if (res.complianceSummarySlav1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getComplianceSummaryV1

Returns the compliance summary information for all protected objects based on a time-based requirement of at least one snapshot in each 24 hour report period. This view ignores the policies assigned to protected objects through SLA Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetComplianceSummaryV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("voluptatibus", "iure") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetComplianceSummaryV1Response res = sdk.rootReports.getComplianceSummaryV1();

            if (res.complianceSummaryV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setReportConfig

Set the different report config parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetReportConfigResponse;
import org.openapis.openapi.models.shared.ReportConfigPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("explicabo", "minus") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            org.openapis.openapi.models.shared.ReportConfigPatch req = new ReportConfigPatch() {{
                cleanupReportJobInstanceForLogJobs = 746688;
            }};            

            SetReportConfigResponse res = sdk.rootReports.setReportConfig(req);

            if (res.reportConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
