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
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateRequest;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.DeviceTypeEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeFieldFormatEnum;
import org.openapis.openapi.models.shared.DataTypeField;
import org.openapis.openapi.models.shared.Application;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FitnessUsersDataSourcesCreateRequest req = new FitnessUsersDataSourcesCreateRequest() {{
                dollarXgafv = "2";
                dataSource = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "provident";
                        name = "distinctio";
                        packageName = "quibusdam";
                        version = "unde";
                    }};
                    dataQualityStandard = new org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum[]{{
                        add("dataQualityBloodPressureBhsAB"),
                        add("dataQualityBloodGlucoseIso151972003"),
                        add("dataQualityBloodPressureBhsAA"),
                        add("dataQualityBloodPressureBhsBA"),
                    }};
                    dataStreamId = "deserunt";
                    dataStreamName = "suscipit";
                    dataType = new DataType() {{
                        field = new org.openapis.openapi.models.shared.DataTypeField[]{{
                            add(new DataTypeField() {{
                                format = "string";
                                name = "debitis";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = "integer";
                                name = "delectus";
                                optional = false;
                            }}),
                        }};
                        name = "tempora";
                    }};
                    device = new Device() {{
                        manufacturer = "suscipit";
                        model = "molestiae";
                        type = "headMounted";
                        uid = "placeat";
                        version = "voluptatum";
                    }};
                    name = "iusto";
                    type = "derived";
                }};
                accessToken = "nisi";
                alt = "proto";
                callback = "temporibus";
                fields = "ab";
                key = "quis";
                oauthToken = "veritatis";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "perferendis";
                uploadProtocol = "ipsam";
                userId = "repellendus";
            }}            

            FitnessUsersDataSourcesCreateResponse res = sdk.users.fitnessUsersDataSourcesCreate(req, new FitnessUsersDataSourcesCreateSecurity() {{
                option1 = new FitnessUsersDataSourcesCreateSecurityOption1() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataSource.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->