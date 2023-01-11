<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

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
                    userId = "sit";
                }};
                queryParams = new FitnessUsersDataSourcesCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "dicta";
                        name = "debitis";
                        packageName = "voluptatum";
                        version = "et";
                    }};
                    dataQualityStandard = new openapisdk.models.shared.DataSourceDataQualityStandardEnum[]() {{
                        add("dataQualityUnknown"),
                        add("dataQualityUnknown"),
                        add("dataQualityBloodPressureBhsAA"),
                    }};
                    dataStreamId = "iste";
                    dataStreamName = "vitae";
                    dataType = new DataType() {{
                        field = new openapisdk.models.shared.DataTypeField[]() {{
                            add(new DataTypeField() {{
                                format = "map";
                                name = "illum";
                                optional = true;
                            }}),
                            add(new DataTypeField() {{
                                format = "floatPoint";
                                name = "odio";
                                optional = true;
                            }}),
                            add(new DataTypeField() {{
                                format = "integerList";
                                name = "aspernatur";
                                optional = true;
                            }}),
                        }};
                        name = "totam";
                    }};
                    device = new Device() {{
                        manufacturer = "commodi";
                        model = "quis";
                        type = "phone";
                        uid = "aut";
                        version = "odit";
                    }};
                    name = "non";
                    type = "raw";
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