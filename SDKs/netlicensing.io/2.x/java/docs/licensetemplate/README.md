# licenseTemplate

## Overview

License Template operations

License Template Services
<https://netlicensing.io/wiki/license-template-services>
### Available Operations

* [createLicenseTemplate](#createlicensetemplate) - Create License Template
* [deleteLicenseTemplate](#deletelicensetemplate) - Delete License Template
* [getLicenseTemplate](#getlicensetemplate) - Get License Template
* [listLicenseTemplates](#listlicensetemplates) - List License Templates
* [updateLicenseTemplate](#updatelicensetemplate) - Update License Template

## createLicenseTemplate

Creates a new License Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLicenseTemplateRequestBody;
import org.openapis.openapi.models.operations.CreateLicenseTemplateResponse;
import org.openapis.openapi.models.operations.CreateLicenseTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateLicenseTemplateRequestBody req = new CreateLicenseTemplateRequestBody(false, "esse", "ipsum", "excepturi") {{
                automatic = false;
                currency = "aspernatur";
                hidden = false;
                hideLicenses = false;
                maxSessions = "perferendis";
                number = "ad";
                price = 6176.36;
                quantity = "sed";
                quota = "iste";
                timeVolume = "dolor";
                timeVolumePeriod = "natus";
            }};            

            CreateLicenseTemplateResponse res = sdk.licenseTemplate.createLicenseTemplate(req, new CreateLicenseTemplateSecurity("laboriosam", "hic") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteLicenseTemplate

Delete a License Template by 'number'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteLicenseTemplateRequest;
import org.openapis.openapi.models.operations.DeleteLicenseTemplateResponse;
import org.openapis.openapi.models.operations.DeleteLicenseTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteLicenseTemplateRequest req = new DeleteLicenseTemplateRequest("saepe") {{
                forceCascade = false;
            }};            

            DeleteLicenseTemplateResponse res = sdk.licenseTemplate.deleteLicenseTemplate(req, new DeleteLicenseTemplateSecurity("fuga", "in") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLicenseTemplate

Return a License Template by 'licenseTemplateNumber'

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLicenseTemplateRequest;
import org.openapis.openapi.models.operations.GetLicenseTemplateResponse;
import org.openapis.openapi.models.operations.GetLicenseTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLicenseTemplateRequest req = new GetLicenseTemplateRequest("corporis");            

            GetLicenseTemplateResponse res = sdk.licenseTemplate.getLicenseTemplate(req, new GetLicenseTemplateSecurity("iste", "iure") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLicenseTemplates

Return a list of all License Templates for the current Vendor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLicenseTemplatesResponse;
import org.openapis.openapi.models.operations.ListLicenseTemplatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLicenseTemplatesResponse res = sdk.licenseTemplate.listLicenseTemplates(new ListLicenseTemplatesSecurity("saepe", "quidem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLicenseTemplate

Sets the provided properties to a License Template. Return an updated License Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLicenseTemplateRequest;
import org.openapis.openapi.models.operations.UpdateLicenseTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdateLicenseTemplateResponse;
import org.openapis.openapi.models.operations.UpdateLicenseTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateLicenseTemplateRequest req = new UpdateLicenseTemplateRequest("architecto") {{
                requestBody = new UpdateLicenseTemplateRequestBody() {{
                    active = false;
                    automatic = false;
                    currency = "ipsa";
                    hidden = false;
                    hideLicenses = false;
                    licenseType = "reiciendis";
                    maxSessions = "est";
                    name = "Cameron Dach";
                    number = "explicabo";
                    price = 7506.86;
                    quantity = "enim";
                    quota = "omnis";
                    timeVolume = "nemo";
                    timeVolumePeriod = "minima";
                }};;
            }};            

            UpdateLicenseTemplateResponse res = sdk.licenseTemplate.updateLicenseTemplate(req, new UpdateLicenseTemplateSecurity("excepturi", "accusantium") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.netlicensing != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
