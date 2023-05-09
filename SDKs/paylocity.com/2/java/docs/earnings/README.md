# earnings

### Available Operations

* [addOrUpdateAnEmployeeEarning](#addorupdateanemployeeearning) - Add/Update Earning
* [deleteEarningByEarningCodeAndStartDate](#deleteearningbyearningcodeandstartdate) - Delete Earning by Earning Code and Start Date
* [getAllEarnings](#getallearnings) - Get All Earnings
* [getEarningByEarningCodeAndStartDate](#getearningbyearningcodeandstartdate) - Get Earning by Earning Code and Start Date
* [getEarningsByEarningCode](#getearningsbyearningcode) - Get Earnings by Earning Code

## addOrUpdateAnEmployeeEarning

Add/Update Earning API sends new or updated employee earnings information directly to Web Pay.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddOrUpdateAnEmployeeEarningRequest;
import org.openapis.openapi.models.operations.AddOrUpdateAnEmployeeEarningResponse;
import org.openapis.openapi.models.operations.AddOrUpdateAnEmployeeEarningSecurity;
import org.openapis.openapi.models.shared.Earning;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddOrUpdateAnEmployeeEarningRequest req = new AddOrUpdateAnEmployeeEarningRequest("esse",                 new Earning("totam", "porro") {{
                                agency = "dolorum";
                                amount = 1182.74;
                                annualMaximum = 7206.33;
                                calculationCode = "officia";
                                costCenter1 = "occaecati";
                                costCenter2 = "fugit";
                                costCenter3 = "deleniti";
                                effectiveDate = "hic";
                                endDate = "optio";
                                frequency = "totam";
                                goal = 1059.07;
                                hoursOrUnits = 4146.62;
                                isSelfInsured = false;
                                jobCode = "molestiae";
                                miscellaneousInfo = "modi";
                                paidTowardsGoal = 1863.32;
                                payPeriodMaximum = 7742.34;
                                payPeriodMinimum = 7369.18;
                                rate = 4561.5;
                                rateCode = "ipsum";
                            }};, "excepturi");            

            AddOrUpdateAnEmployeeEarningResponse res = sdk.earnings.addOrUpdateAnEmployeeEarning(req, new AddOrUpdateAnEmployeeEarningSecurity("aspernatur") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteEarningByEarningCodeAndStartDate

Delete Earning by Earning Code and Start Date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEarningByEarningCodeAndStartDateRequest;
import org.openapis.openapi.models.operations.DeleteEarningByEarningCodeAndStartDateResponse;
import org.openapis.openapi.models.operations.DeleteEarningByEarningCodeAndStartDateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteEarningByEarningCodeAndStartDateRequest req = new DeleteEarningByEarningCodeAndStartDateRequest("perferendis", "ad", "natus", "sed");            

            DeleteEarningByEarningCodeAndStartDateResponse res = sdk.earnings.deleteEarningByEarningCodeAndStartDate(req, new DeleteEarningByEarningCodeAndStartDateSecurity("iste") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getAllEarnings

Get All Earnings returns all earnings for the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllEarningsRequest;
import org.openapis.openapi.models.operations.GetAllEarningsResponse;
import org.openapis.openapi.models.operations.GetAllEarningsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllEarningsRequest req = new GetAllEarningsRequest("dolor", "natus");            

            GetAllEarningsResponse res = sdk.earnings.getAllEarnings(req, new GetAllEarningsSecurity("laboriosam") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.earnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEarningByEarningCodeAndStartDate

Get Earnings returns the single earning with the provided earning code and start date for the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEarningByEarningCodeAndStartDateRequest;
import org.openapis.openapi.models.operations.GetEarningByEarningCodeAndStartDateResponse;
import org.openapis.openapi.models.operations.GetEarningByEarningCodeAndStartDateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEarningByEarningCodeAndStartDateRequest req = new GetEarningByEarningCodeAndStartDateRequest("hic", "saepe", "fuga", "in");            

            GetEarningByEarningCodeAndStartDateResponse res = sdk.earnings.getEarningByEarningCodeAndStartDate(req, new GetEarningByEarningCodeAndStartDateSecurity("corporis") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.earning != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEarningsByEarningCode

Get Earnings returns all earnings with the provided earning code for the selected employee.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEarningsByEarningCodeRequest;
import org.openapis.openapi.models.operations.GetEarningsByEarningCodeResponse;
import org.openapis.openapi.models.operations.GetEarningsByEarningCodeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEarningsByEarningCodeRequest req = new GetEarningsByEarningCodeRequest("iste", "iure", "saepe");            

            GetEarningsByEarningCodeResponse res = sdk.earnings.getEarningsByEarningCode(req, new GetEarningsByEarningCodeSecurity("quidem") {{
                paylocityAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.earnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
