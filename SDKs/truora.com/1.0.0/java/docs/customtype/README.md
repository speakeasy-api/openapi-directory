# customType

## Overview

The Custom Type API allows the creation of new products so only desired datasets are included in background checks.

## Score Configuration
The `ScoreConfig` object has `Rules` to apply to related *databases* which are summed up creating a `Score` which is associated to a *dataset* of a background `check`. All weights given to the configuration must sum up 1.


### Available Operations

* [deleteCustomType](#deletecustomtype) - Delete Custom Type
* [updateCustomType](#updatecustomtype) - Update Custom Type
* [createScoreConfig](#createscoreconfig) - Create Score Configurations
* [listScoreConfigs](#listscoreconfigs) - List Score Configurations

## deleteCustomType

Allows deleting a custom type. Person, vehicle, and company types cannot be deleted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomTypeCountryEnum;
import org.openapis.openapi.models.operations.DeleteCustomTypeRequest;
import org.openapis.openapi.models.operations.DeleteCustomTypeResponse;
import org.openapis.openapi.models.operations.DeleteCustomTypeSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomTypeRequest req = new DeleteCustomTypeRequest("reiciendis") {{
                country = DeleteCustomTypeCountryEnum.MX;
            }};            

            DeleteCustomTypeResponse res = sdk.customType.deleteCustomType(req, new DeleteCustomTypeSecurity("mollitia") {{
                apiKey = "YOUR_API_KEY_HERE";
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

## updateCustomType

Allows updating a custom type. Person, vehicle, and company types are not modifiable

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomTypeResponse;
import org.openapis.openapi.models.operations.UpdateCustomTypeSecurity;
import org.openapis.openapi.models.shared.CreateConfigInput;
import org.openapis.openapi.models.shared.CreateConfigInputCountryEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateConfigInput req = new CreateConfigInput(CreateConfigInputCountryEnum.MX, "dolores") {{
                datasetAffiliationsAndInsurances = 2103.82;
                datasetAlertInMedia = 3581.52;
                datasetBusinessBackground = 1289.26;
                datasetCriminalRecord = 7506.86;
                datasetDrivingLicenses = 3154.28;
                datasetInternationalBackground = 6078.31;
                datasetLegalBackground = 3637.11;
                datasetPersonalIdentity = 3250.47;
                datasetProfessionalBackground = 5701.97;
                datasetTaxesAndFinances = 384.25;
                datasetTrafficFines = 4386.01;
                datasetVehicleInformation = 6342.74;
                datasetVehiclePermits = 9883.74;
            }};            

            UpdateCustomTypeResponse res = sdk.customType.updateCustomType(req, new UpdateCustomTypeSecurity("sapiente") {{
                apiKey = "YOUR_API_KEY_HERE";
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

## createScoreConfig

Create a custom score configuration selecting the weight for each background check dataset and the country where it applies. Weights are numbers between 0 and 1 that represent how impactful the dataset is for the score. Keep in mind that the sum of all weights must equal 1.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateScoreConfigResponse;
import org.openapis.openapi.models.shared.CreateConfigInput;
import org.openapis.openapi.models.shared.CreateConfigInputCountryEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateConfigInput req = new CreateConfigInput(CreateConfigInputCountryEnum.EC, "dolorem") {{
                datasetAffiliationsAndInsurances = 6350.59;
                datasetAlertInMedia = 1613.09;
                datasetBusinessBackground = 9953;
                datasetCriminalRecord = 6531.08;
                datasetDrivingLicenses = 5818.5;
                datasetInternationalBackground = 2532.91;
                datasetLegalBackground = 4143.69;
                datasetPersonalIdentity = 4663.11;
                datasetProfessionalBackground = 4746.97;
                datasetTaxesAndFinances = 2444.25;
                datasetTrafficFines = 6235.1;
                datasetVehicleInformation = 1589.69;
                datasetVehiclePermits = 3380.07;
            }};            

            CreateScoreConfigResponse res = sdk.customType.createScoreConfig(req);

            if (res.scoreConfigOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScoreConfigs

Lists the custom score configurations of the associated account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScoreConfigsRequest;
import org.openapis.openapi.models.operations.ListScoreConfigsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListScoreConfigsRequest req = new ListScoreConfigsRequest() {{
                startKey = "laborum";
            }};            

            ListScoreConfigsResponse res = sdk.customType.listScoreConfigs(req);

            if (res.scoreConfigsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
