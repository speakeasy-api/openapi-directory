<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption10;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption11;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption3;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption4;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption5;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption6;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption7;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption8;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption9;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurity;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreatePathParams;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateQueryParams;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateRequest;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateResponse;
import org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.DeviceTypeEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeFieldFormatEnum;
import org.openapis.openapi.models.shared.DataTypeField;
import org.openapis.openapi.models.shared.Application;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FitnessUsersDataSourcesCreateRequest req = new FitnessUsersDataSourcesCreateRequest() {{
                security = new FitnessUsersDataSourcesCreateSecurity() {{
                    option1 = new FitnessUsersDataSourcesCreateSecurityOption1() {{
                        oauth2 = new SchemeOauth2() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                        oauth2c = new SchemeOauth2c() {{
                            authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                        }};
                    }};
                }};
                pathParams = new FitnessUsersDataSourcesCreatePathParams() {{
                    userId = "corrupti";
                }};
                queryParams = new FitnessUsersDataSourcesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "suscipit";
                        name = "iure";
                        packageName = "magnam";
                        version = "debitis";
                    }};
                    dataQualityStandard = new org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum[]{{
                        add("dataQualityBloodGlucoseIso151972013"),
                    }};
                    dataStreamId = "tempora";
                    dataStreamName = "suscipit";
                    dataType = new DataType() {{
                        field = new org.openapis.openapi.models.shared.DataTypeField[]{{
                            add(new DataTypeField() {{
                                format = "floatList";
                                name = "placeat";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = "map";
                                name = "iusto";
                                optional = false;
                            }}),
                        }};
                        name = "excepturi";
                    }};
                    device = new Device() {{
                        manufacturer = "nisi";
                        model = "recusandae";
                        type = "headMounted";
                        uid = "ab";
                        version = "quis";
                    }};
                    name = "veritatis";
                    type = "derived";
                }};
            }};            

            FitnessUsersDataSourcesCreateResponse res = sdk.users.fitnessUsersDataSourcesCreate(req);

            if (res.dataSource.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->