<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateRequest;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateResponse;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurity;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption10;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption11;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption1;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption2;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption3;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption4;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption5;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption6;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption7;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption8;
import org.openapis.openapi.models.operations.FitnessUsersDataSourcesCreateSecurityOption9;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Application;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum;
import org.openapis.openapi.models.shared.DataSourceTypeEnum;
import org.openapis.openapi.models.shared.DataType;
import org.openapis.openapi.models.shared.DataTypeField;
import org.openapis.openapi.models.shared.DataTypeFieldFormatEnum;
import org.openapis.openapi.models.shared.Device;
import org.openapis.openapi.models.shared.DeviceTypeEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FitnessUsersDataSourcesCreateRequest req = new FitnessUsersDataSourcesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                dataSource = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "distinctio";
                        name = "Stuart Stiedemann";
                        packageName = "vel";
                        version = "error";
                    }};;
                    dataQualityStandard = new org.openapis.openapi.models.shared.DataSourceDataQualityStandardEnum[]{{
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_AAMI),
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_BHS_AA),
                        add(DataSourceDataQualityStandardEnum.DATA_QUALITY_BLOOD_PRESSURE_ESH2010),
                    }};
                    dataStreamId = "debitis";
                    dataStreamName = "ipsa";
                    dataType = new DataType() {{
                        field = new org.openapis.openapi.models.shared.DataTypeField[]{{
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.FLOAT_POINT;
                                name = "Minnie Schiller";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.MAP;
                                name = "Charlie Walsh II";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.INTEGER;
                                name = "Christopher Hills";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = DataTypeFieldFormatEnum.FLOAT_LIST;
                                name = "Teri Strosin";
                                optional = false;
                            }}),
                        }};
                        name = "Forrest Koepp";
                    }};;
                    device = new Device() {{
                        manufacturer = "dolorum";
                        model = "dicta";
                        type = DeviceTypeEnum.SCALE;
                        uid = "officia";
                        version = "occaecati";
                    }};;
                    name = "Cassandra Welch";
                    type = DataSourceTypeEnum.RAW;
                }};;
                accessToken = "commodi";
                alt = AltEnum.MEDIA;
                callback = "modi";
                fields = "qui";
                key = "impedit";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "ipsum";
                uploadProtocol = "excepturi";
            }};            

            FitnessUsersDataSourcesCreateResponse res = sdk.users.fitnessUsersDataSourcesCreate(req, new FitnessUsersDataSourcesCreateSecurity() {{
                option1 = new FitnessUsersDataSourcesCreateSecurityOption1("aspernatur", "perferendis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.dataSource != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->