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
                    userId = "id";
                }};
                queryParams = new FitnessUsersDataSourcesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "odio";
                    alt = "json";
                    callback = "aspernatur";
                    fields = "ducimus";
                    key = "ut";
                    oauthToken = "expedita";
                    prettyPrint = true;
                    quotaUser = "enim";
                    uploadType = "explicabo";
                    uploadProtocol = "cupiditate";
                }};
                request = new DataSource() {{
                    application = new Application() {{
                        detailsUrl = "deleniti";
                        name = "consequatur";
                        packageName = "facere";
                        version = "animi";
                    }};
                    dataQualityStandard = new openapisdk.models.shared.DataSourceDataQualityStandardEnum[]() {{
                        add("dataQualityBloodPressureBhsAA"),
                        add("dataQualityBloodGlucoseIso151972003"),
                    }};
                    dataStreamId = "atque";
                    dataStreamName = "nisi";
                    dataType = new DataType() {{
                        field = new openapisdk.models.shared.DataTypeField[]() {{
                            add(new DataTypeField() {{
                                format = "string";
                                name = "ipsam";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = "integerList";
                                name = "velit";
                                optional = false;
                            }}),
                            add(new DataTypeField() {{
                                format = "integerList";
                                name = "impedit";
                                optional = true;
                            }}),
                        }};
                        name = "est";
                    }};
                    device = new Device() {{
                        manufacturer = "repellendus";
                        model = "asperiores";
                        type = "smartDisplay";
                        uid = "necessitatibus";
                        version = "et";
                    }};
                    name = "perspiciatis";
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