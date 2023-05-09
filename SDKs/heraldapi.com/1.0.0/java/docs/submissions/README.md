# submissions

### Available Operations

* [getSubmissionsSubmissionId](#getsubmissionssubmissionid) - /submissions/{submission_id}
* [postSubmissions](#postsubmissions) - /submissions

## getSubmissionsSubmissionId

### Get a submission

Get the latest details for a specific [submission](https://www.heraldapi.com/docs/submission).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubmissionsSubmissionIdRequest;
import org.openapis.openapi.models.operations.GetSubmissionsSubmissionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetSubmissionsSubmissionIdRequest req = new GetSubmissionsSubmissionIdRequest("7fd2ed02-8921-4cdd-8692-601fb576b0d5");            

            GetSubmissionsSubmissionIdResponse res = sdk.submissions.getSubmissionsSubmissionId(req);

            if (res.getSubmissionsSubmissionId200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSubmissions

### Create a submission

A [submission](https://www.heraldapi.com/docs/submission) creates quotes by sending an application to the institutions associated with a list of desired products. A submission can be for a single product or multiple products.

> The `application` object of the request can either be a full application (with all `risk_values` and `coverage_values`), or the `id` of a completed application created via [`/applications`](../reference/HeraldAPI.v1.yaml/paths/~1applications/post). See the 'examples' dropdown to the right for example requests and responses.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSubmissionsRequestBody;
import org.openapis.openapi.models.operations.PostSubmissionsResponse;
import org.openapis.openapi.models.shared.AddressV1;
import org.openapis.openapi.models.shared.AddressV1CountryCodeEnum;
import org.openapis.openapi.models.shared.AddressV1StateEnum;
import org.openapis.openapi.models.shared.ApplicationIDV1;
import org.openapis.openapi.models.shared.ApplicationWriteV1;
import org.openapis.openapi.models.shared.ClaimEventV1;
import org.openapis.openapi.models.shared.CoverageValueWriteV1;
import org.openapis.openapi.models.shared.RiskValueWriteV1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            PostSubmissionsRequestBody req = new PostSubmissionsRequestBody(                new ApplicationWriteV1(                new String[]{{
                                                add("prd_mc4r_herald_general_liability"),
                                                add("prd_mc4r_herald_general_liability"),
                                                add("prd_mc4r_herald_general_liability"),
                                            }}) {{
                                coverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date",                 new String[]{{
                                                        add("libero"),
                                                        add("nobis"),
                                                        add("dolores"),
                                                        add("quis"),
                                                    }}) {{
                                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                            add(new CoverageValueWriteV1() {{}}),
                                        }};
                                        coverageParameterId = "cvg_48oo_gl_effective_date";
                                        value = "cumque";
                                    }}),
                                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date",                 new String[]{{
                                                        add("eos"),
                                                    }}) {{
                                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                            add(new CoverageValueWriteV1() {{}}),
                                            add(new CoverageValueWriteV1() {{}}),
                                            add(new CoverageValueWriteV1() {{}}),
                                        }};
                                        coverageParameterId = "cvg_48oo_gl_effective_date";
                                        value = 543.38;
                                    }}),
                                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", 2239.24) {{
                                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                            add(new CoverageValueWriteV1() {{}}),
                                        }};
                                        coverageParameterId = "cvg_48oo_gl_effective_date";
                                        value = "minus";
                                    }}),
                                    add(new CoverageValueWriteV1("cvg_48oo_gl_effective_date", "porro") {{
                                        childCoverageValues = new org.openapis.openapi.models.shared.CoverageValueWriteV1[]{{
                                            add(new CoverageValueWriteV1() {{}}),
                                            add(new CoverageValueWriteV1() {{}}),
                                            add(new CoverageValueWriteV1() {{}}),
                                            add(new CoverageValueWriteV1() {{}}),
                                        }};
                                        coverageParameterId = "cvg_48oo_gl_effective_date";
                                        value = new String[]{{
                                            add("recusandae"),
                                            add("omnis"),
                                            add("facilis"),
                                            add("perspiciatis"),
                                        }};
                                    }}),
                                }};
                                products = new String[]{{
                                    add("prd_mc4r_herald_general_liability"),
                                }};
                                riskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                                    add(new RiskValueWriteV1("rsk_14b8_fein", false) {{
                                        childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                                            add(new RiskValueWriteV1() {{}}),
                                            add(new RiskValueWriteV1() {{}}),
                                            add(new RiskValueWriteV1() {{}}),
                                        }};
                                        riskParameterId = "rsk_14b8_fein";
                                        value = "occaecati";
                                    }}),
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
                                        value = new AddressV1("Hill Valley", AddressV1CountryCodeEnum.USA, "1640 Riverside Drive", "95420", AddressV1StateEnum.CA) {{
                                            city = "Hill Valley";
                                            countryCode = AddressV1CountryCodeEnum.USA;
                                            line1 = "1640 Riverside Drive";
                                            line2 = "Floor 3";
                                            line3 = "Suite 5";
                                            organization = "ACME Corporation";
                                            postalCode = "95420";
                                            state = AddressV1StateEnum.CA;
                                        }};
                                    }}),
                                    add(new RiskValueWriteV1("rsk_14b8_fein", false) {{
                                        childRiskValues = new org.openapis.openapi.models.shared.RiskValueWriteV1[]{{
                                            add(new RiskValueWriteV1() {{}}),
                                            add(new RiskValueWriteV1() {{}}),
                                        }};
                                        riskParameterId = "rsk_14b8_fein";
                                        value = false;
                                    }}),
                                }};
                            }}, "pariatur");            

            PostSubmissionsResponse res = sdk.submissions.postSubmissions(req);

            if (res.postSubmissions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
