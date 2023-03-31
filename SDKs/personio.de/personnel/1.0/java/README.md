# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdPathParams;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdRequest;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompanyAttendancesIdRequest req = new DeleteCompanyAttendancesIdRequest() {{
                pathParams = new DeleteCompanyAttendancesIdPathParams() {{
                    id = 548814;
                }};
            }};            

            DeleteCompanyAttendancesIdResponse res = sdk.deleteCompanyAttendancesId(req);

            if (res.response.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `deleteCompanyAttendancesId` - This endpoint is responsible for deleting attendance data for the company employees.
* `deleteCompanyTimeOffsId` - This endpoint is responsible for deleting absence period data for the company employees.
* `getCompanyAttendances` - This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
* `getCompanyEmployees` - List Employees
* `getCompanyEmployeesEmployeeId` - Show employee by ID
* `getCompanyEmployeesEmployeeIdProfilePictureWidth` - Show employee profile picture
* `getCompanyTimeOffTypes` - Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
* `getCompanyTimeOffs` - This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
* `getCompanyTimeOffsId` - Absence Period
* `patchCompanyAttendancesId` - This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
* `postCompanyAttendances` - This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
* `postCompanyEmployees` - Create an employee
* `postCompanyTimeOffs` - This endpoint is responsible for adding absence data for the company employees.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
