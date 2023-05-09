# applications

### Available Operations

* [getApplicationsApplicationId](#getapplicationsapplicationid) - /applications/{application_id}
* [postApplications](#postapplications) - /applications
* [putApplicationsApplicationId](#putapplicationsapplicationid) - /applications/{application_id}

## getApplicationsApplicationId

### Get an application

Get the latest details for a specific [application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdRequest;
import org.openapis.openapi.models.operations.GetApplicationsApplicationIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetApplicationsApplicationIdRequest req = new GetApplicationsApplicationIdRequest("5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb");            

            GetApplicationsApplicationIdResponse res = sdk.applications.getApplicationsApplicationId(req);

            if (res.getApplicationsApplicationId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApplications

### Create an application

Create an [application](https://www.heraldapi.com/docs/dynamic-application) for a product or set of products. An application contains the set of information a carrier requires to get a quote for the product(s). Submitting only `products` will create a blank application. Including values when creating the application is optional. 

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApplicationsResponse;
import org.openapis.openapi.models.shared.AddressV1;
import org.openapis.openapi.models.shared.AddressV1CountryCodeEnum;
import org.openapis.openapi.models.shared.AddressV1StateEnum;
import org.openapis.openapi.models.shared.ApplicationWriteV1;
import org.openapis.openapi.models.shared.ClaimEventV1;
import org.openapis.openapi.models.shared.CoverageValueWriteV1;
import org.openapis.openapi.models.shared.RiskValueWriteV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApplicationWriteV1 req = new ApplicationWriteV1(                new String[]{{
                                add("prd_mc4r_herald_general_liability"),
                            }}) {{
                coverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", 149675L) {{
                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                            add(new CoverageValueWriteV1() {{}}),
                        }};
                        coverageParameterId = "cvg_48oo_gl_effective_date";
                        value = "ad";
                    }}),
                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", 449950L) {{
                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                            add(new CoverageValueWriteV1() {{}}),
                            add(new CoverageValueWriteV1() {{}}),
                            add(new CoverageValueWriteV1() {{}}),
                        }};
                        coverageParameterId = "cvg_48oo_gl_effective_date";
                        value = new String[]{{
                            add("laboriosam"),
                            add("hic"),
                            add("saepe"),
                        }};
                    }}),
                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", false) {{
                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                            add(new CoverageValueWriteV1() {{}}),
                            add(new CoverageValueWriteV1() {{}}),
                        }};
                        coverageParameterId = "cvg_48oo_gl_effective_date";
                        value = 437032L;
                    }}),
                }};
                riskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                    add(new RiskValueWriteV1("rsk_14b8_fein", false) {{
                        childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                            add(new RiskValueWriteV1() {{}}),
                        }};
                        riskParameterId = "rsk_14b8_fein";
                        value = "reiciendis";
                    }}),
                    add(new RiskValueWriteV1("rsk_14b8_fein",                 new String[]{{
                                        add("corporis"),
                                    }}) {{
                        childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                            add(new RiskValueWriteV1() {{}}),
                            add(new RiskValueWriteV1() {{}}),
                            add(new RiskValueWriteV1() {{}}),
                        }};
                        riskParameterId = "rsk_14b8_fein";
                        value = false;
                    }}),
                    add(new RiskValueWriteV1("rsk_14b8_fein", 38425L) {{
                        childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                            add(new RiskValueWriteV1() {{}}),
                        }};
                        riskParameterId = "rsk_14b8_fein";
                        value = new ClaimEventV1(10000, LocalDate.parse("2022-09-04")) {{
                            amount = 10000;
                            date = LocalDate.parse("2022-05-24");
                            description = "Kitchen fire";
                        }};
                    }}),
                }};
            }};            

            PostApplicationsResponse res = sdk.applications.postApplications(req);

            if (res.postApplications200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApplicationsApplicationId

<h3>Update an application</h3>

Submit values for a specific application. In order to submit an application for a quote, you need to continue to update the application until the status is `complete`.

Read our step-by-step guide to [building a Dynamic Application](https://www.heraldapi.com/docs/dynamic-application-steps).

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApplicationsApplicationIdRequest;
import org.openapis.openapi.models.operations.PutApplicationsApplicationIdResponse;
import org.openapis.openapi.models.shared.AddressV1;
import org.openapis.openapi.models.shared.AddressV1CountryCodeEnum;
import org.openapis.openapi.models.shared.AddressV1StateEnum;
import org.openapis.openapi.models.shared.ApplicationWriteV1;
import org.openapis.openapi.models.shared.ClaimEventV1;
import org.openapis.openapi.models.shared.CoverageValueWriteV1;
import org.openapis.openapi.models.shared.RiskValueWriteV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PutApplicationsApplicationIdRequest req = new PutApplicationsApplicationIdRequest("aff1a3a2-fa94-4677-b925-1aa52c3f5ad0") {{
                applicationWriteV1 = new ApplicationWriteV1(                new String[]{{
                                    add("prd_mc4r_herald_general_liability"),
                                }}) {{
                    coverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                        add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", false) {{
                            childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                            }};
                            coverageParameterId = "cvg_48oo_gl_effective_date";
                            value = 96098L;
                        }}),
                        add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", 5096.24) {{
                            childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                            }};
                            coverageParameterId = "cvg_48oo_gl_effective_date";
                            value = false;
                        }}),
                        add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", 7392.64) {{
                            childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                                add(new CoverageValueWriteV1() {{}}),
                            }};
                            coverageParameterId = "cvg_48oo_gl_effective_date";
                            value = "omnis";
                        }}),
                    }};
                    riskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                        add(new RiskValueWriteV1("rsk_14b8_fein",                 new AddressV1("Hill Valley", AddressV1CountryCodeEnum.USA, "1640 Riverside Drive", "95420", AddressV1StateEnum.CA) {{
                                            city = "Hill Valley";
                                            countryCode = AddressV1CountryCodeEnum.USA;
                                            line1 = "1640 Riverside Drive";
                                            line2 = "Floor 3";
                                            line3 = "Suite 5";
                                            organization = "ACME Corporation";
                                            postalCode = "95420";
                                            state = AddressV1StateEnum.CA;
                                        }}) {{
                            childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                                add(new RiskValueWriteV1() {{}}),
                            }};
                            riskParameterId = "rsk_14b8_fein";
                            value = 282807L;
                        }}),
                    }};
                }};;
            }};            

            PutApplicationsApplicationIdResponse res = sdk.applications.putApplicationsApplicationId(req);

            if (res.putApplicationsApplicationId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
