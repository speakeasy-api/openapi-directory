# reports

### Available Operations

* [doubleclicksearchReportsGenerate](#doubleclicksearchreportsgenerate) - Generates and returns a report immediately.
* [doubleclicksearchReportsGet](#doubleclicksearchreportsget) - Polls for the status of a report request.
* [doubleclicksearchReportsGetFile](#doubleclicksearchreportsgetfile) - Downloads a report file encoded in UTF-8.
* [doubleclicksearchReportsGetIdMappingFile](#doubleclicksearchreportsgetidmappingfile) - Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
* [doubleclicksearchReportsRequest](#doubleclicksearchreportsrequest) - Inserts a report request into the reporting system.

## doubleclicksearchReportsGenerate

Generates and returns a report immediately.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGenerateRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGenerateResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGenerateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportApiColumnSpec;
import org.openapis.openapi.models.shared.ReportRequest;
import org.openapis.openapi.models.shared.ReportRequestFilters;
import org.openapis.openapi.models.shared.ReportRequestOrderBy;
import org.openapis.openapi.models.shared.ReportRequestReportScope;
import org.openapis.openapi.models.shared.ReportRequestTimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchReportsGenerateRequest req = new DoubleclicksearchReportsGenerateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                reportRequest = new ReportRequest() {{
                    columns = new org.openapis.openapi.models.shared.ReportApiColumnSpec[]{{
                        add(new ReportApiColumnSpec() {{
                            columnName = "perferendis";
                            customDimensionName = "fugiat";
                            customMetricName = "amet";
                            endDate = "aut";
                            groupByColumn = false;
                            headerText = "cumque";
                            platformSource = "corporis";
                            productReportPerspective = "hic";
                            savedColumnName = "libero";
                            startDate = "nobis";
                        }}),
                        add(new ReportApiColumnSpec() {{
                            columnName = "dolores";
                            customDimensionName = "quis";
                            customMetricName = "totam";
                            endDate = "dignissimos";
                            groupByColumn = false;
                            headerText = "eaque";
                            platformSource = "quis";
                            productReportPerspective = "nesciunt";
                            savedColumnName = "eos";
                            startDate = "perferendis";
                        }}),
                        add(new ReportApiColumnSpec() {{
                            columnName = "dolores";
                            customDimensionName = "minus";
                            customMetricName = "quam";
                            endDate = "dolor";
                            groupByColumn = false;
                            headerText = "vero";
                            platformSource = "nostrum";
                            productReportPerspective = "hic";
                            savedColumnName = "recusandae";
                            startDate = "omnis";
                        }}),
                        add(new ReportApiColumnSpec() {{
                            columnName = "facilis";
                            customDimensionName = "perspiciatis";
                            customMetricName = "voluptatem";
                            endDate = "porro";
                            groupByColumn = false;
                            headerText = "consequuntur";
                            platformSource = "blanditiis";
                            productReportPerspective = "error";
                            savedColumnName = "eaque";
                            startDate = "occaecati";
                        }}),
                    }};
                    downloadFormat = "rerum";
                    filters = new org.openapis.openapi.models.shared.ReportRequestFilters[]{{
                        add(new ReportRequestFilters() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "asperiores";
                                customDimensionName = "earum";
                                customMetricName = "modi";
                                endDate = "iste";
                                groupByColumn = false;
                                headerText = "dolorum";
                                platformSource = "deleniti";
                                productReportPerspective = "pariatur";
                                savedColumnName = "provident";
                                startDate = "nobis";
                            }};
                            operator = "libero";
                            values = new Object[]{{
                                add("quaerat"),
                                add("quos"),
                                add("aliquid"),
                                add("dolorem"),
                            }};
                        }}),
                    }};
                    includeDeletedEntities = false;
                    includeRemovedEntities = false;
                    maxRowsPerFile = 209843;
                    orderBy = new org.openapis.openapi.models.shared.ReportRequestOrderBy[]{{
                        add(new ReportRequestOrderBy() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "qui";
                                customDimensionName = "ipsum";
                                customMetricName = "hic";
                                endDate = "excepturi";
                                groupByColumn = false;
                                headerText = "cum";
                                platformSource = "voluptate";
                                productReportPerspective = "dignissimos";
                                savedColumnName = "reiciendis";
                                startDate = "amet";
                            }};
                            sortOrder = "dolorum";
                        }}),
                    }};
                    reportScope = new ReportRequestReportScope() {{
                        adGroupId = "numquam";
                        adId = "veritatis";
                        advertiserId = "ipsa";
                        agencyId = "ipsa";
                        campaignId = "iure";
                        engineAccountId = "odio";
                        keywordId = "quaerat";
                    }};;
                    reportType = "accusamus";
                    rowCount = 696344;
                    startRow = 976405;
                    statisticsCurrency = "voluptas";
                    timeRange = new ReportRequestTimeRange() {{
                        changedAttributesSinceTimestamp = "natus";
                        changedMetricsSinceTimestamp = "eos";
                        endDate = "atque";
                        startDate = "sit";
                    }};;
                    verifySingleTimeZone = false;
                }};;
                accessToken = "fugiat";
                alt = AltEnum.JSON;
                callback = "soluta";
                fields = "dolorum";
                key = "iusto";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dolorum";
                uploadType = "deleniti";
                uploadProtocol = "omnis";
            }};            

            DoubleclicksearchReportsGenerateResponse res = sdk.reports.doubleclicksearchReportsGenerate(req, new DoubleclicksearchReportsGenerateSecurity("necessitatibus", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchReportsGet

Polls for the status of a report request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchReportsGetRequest req = new DoubleclicksearchReportsGetRequest("asperiores") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "id";
                fields = "saepe";
                key = "eius";
                oauthToken = "aspernatur";
                prettyPrint = false;
                quotaUser = "perferendis";
                uploadType = "amet";
                uploadProtocol = "optio";
            }};            

            DoubleclicksearchReportsGetResponse res = sdk.reports.doubleclicksearchReportsGet(req, new DoubleclicksearchReportsGetSecurity("accusamus", "ad") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchReportsGetFile

Downloads a report file encoded in UTF-8.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetFileRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetFileResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchReportsGetFileRequest req = new DoubleclicksearchReportsGetFileRequest(904425L, "suscipit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "provident";
                alt = AltEnum.JSON;
                callback = "repellendus";
                fields = "totam";
                key = "similique";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "quaerat";
                uploadProtocol = "tempora";
            }};            

            DoubleclicksearchReportsGetFileResponse res = sdk.reports.doubleclicksearchReportsGetFile(req, new DoubleclicksearchReportsGetFileSecurity("vel", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## doubleclicksearchReportsGetIdMappingFile

Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetIdMappingFileRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetIdMappingFileResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsGetIdMappingFileSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchReportsGetIdMappingFileRequest req = new DoubleclicksearchReportsGetIdMappingFileRequest("officiis", "qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.MEDIA;
                callback = "harum";
                fields = "iusto";
                key = "ipsum";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "tenetur";
                uploadType = "amet";
                uploadProtocol = "tempore";
            }};            

            DoubleclicksearchReportsGetIdMappingFileResponse res = sdk.reports.doubleclicksearchReportsGetIdMappingFile(req, new DoubleclicksearchReportsGetIdMappingFileSecurity("accusamus", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.idMappingFile != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## doubleclicksearchReportsRequest

Inserts a report request into the reporting system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsRequestRequest;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsRequestResponse;
import org.openapis.openapi.models.operations.DoubleclicksearchReportsRequestSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ReportApiColumnSpec;
import org.openapis.openapi.models.shared.ReportRequest;
import org.openapis.openapi.models.shared.ReportRequestFilters;
import org.openapis.openapi.models.shared.ReportRequestOrderBy;
import org.openapis.openapi.models.shared.ReportRequestReportScope;
import org.openapis.openapi.models.shared.ReportRequestTimeRange;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DoubleclicksearchReportsRequestRequest req = new DoubleclicksearchReportsRequestRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                reportRequest = new ReportRequest() {{
                    columns = new org.openapis.openapi.models.shared.ReportApiColumnSpec[]{{
                        add(new ReportApiColumnSpec() {{
                            columnName = "sapiente";
                            customDimensionName = "totam";
                            customMetricName = "nihil";
                            endDate = "sit";
                            groupByColumn = false;
                            headerText = "expedita";
                            platformSource = "neque";
                            productReportPerspective = "sed";
                            savedColumnName = "vel";
                            startDate = "libero";
                        }}),
                    }};
                    downloadFormat = "voluptas";
                    filters = new org.openapis.openapi.models.shared.ReportRequestFilters[]{{
                        add(new ReportRequestFilters() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "quam";
                                customDimensionName = "ipsum";
                                customMetricName = "incidunt";
                                endDate = "qui";
                                groupByColumn = false;
                                headerText = "cupiditate";
                                platformSource = "maxime";
                                productReportPerspective = "pariatur";
                                savedColumnName = "soluta";
                                startDate = "dicta";
                            }};
                            operator = "laborum";
                            values = new Object[]{{
                                add("incidunt"),
                                add("aspernatur"),
                                add("dolores"),
                            }};
                        }}),
                        add(new ReportRequestFilters() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "distinctio";
                                customDimensionName = "facilis";
                                customMetricName = "aliquid";
                                endDate = "quam";
                                groupByColumn = false;
                                headerText = "molestias";
                                platformSource = "temporibus";
                                productReportPerspective = "qui";
                                savedColumnName = "neque";
                                startDate = "fugit";
                            }};
                            operator = "magni";
                            values = new Object[]{{
                                add("sunt"),
                                add("ullam"),
                            }};
                        }}),
                        add(new ReportRequestFilters() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "nam";
                                customDimensionName = "hic";
                                customMetricName = "voluptatem";
                                endDate = "cumque";
                                groupByColumn = false;
                                headerText = "soluta";
                                platformSource = "nobis";
                                productReportPerspective = "et";
                                savedColumnName = "saepe";
                                startDate = "ipsum";
                            }};
                            operator = "veritatis";
                            values = new Object[]{{
                                add("quos"),
                                add("tempore"),
                                add("cupiditate"),
                            }};
                        }}),
                    }};
                    includeDeletedEntities = false;
                    includeRemovedEntities = false;
                    maxRowsPerFile = 45614;
                    orderBy = new org.openapis.openapi.models.shared.ReportRequestOrderBy[]{{
                        add(new ReportRequestOrderBy() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "dolorem";
                                customDimensionName = "dolore";
                                customMetricName = "labore";
                                endDate = "adipisci";
                                groupByColumn = false;
                                headerText = "dolorum";
                                platformSource = "architecto";
                                productReportPerspective = "quae";
                                savedColumnName = "aut";
                                startDate = "quas";
                            }};
                            sortOrder = "itaque";
                        }}),
                        add(new ReportRequestOrderBy() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "consequatur";
                                customDimensionName = "est";
                                customMetricName = "repellendus";
                                endDate = "porro";
                                groupByColumn = false;
                                headerText = "doloribus";
                                platformSource = "ut";
                                productReportPerspective = "facilis";
                                savedColumnName = "cupiditate";
                                startDate = "qui";
                            }};
                            sortOrder = "quae";
                        }}),
                        add(new ReportRequestOrderBy() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "laudantium";
                                customDimensionName = "odio";
                                customMetricName = "occaecati";
                                endDate = "voluptatibus";
                                groupByColumn = false;
                                headerText = "quisquam";
                                platformSource = "vero";
                                productReportPerspective = "omnis";
                                savedColumnName = "quis";
                                startDate = "ipsum";
                            }};
                            sortOrder = "delectus";
                        }}),
                        add(new ReportRequestOrderBy() {{
                            column = new ReportApiColumnSpec() {{
                                columnName = "voluptate";
                                customDimensionName = "consectetur";
                                customMetricName = "vero";
                                endDate = "tenetur";
                                groupByColumn = false;
                                headerText = "dignissimos";
                                platformSource = "hic";
                                productReportPerspective = "distinctio";
                                savedColumnName = "quod";
                                startDate = "odio";
                            }};
                            sortOrder = "similique";
                        }}),
                    }};
                    reportScope = new ReportRequestReportScope() {{
                        adGroupId = "facilis";
                        adId = "vero";
                        advertiserId = "ducimus";
                        agencyId = "dolore";
                        campaignId = "quibusdam";
                        engineAccountId = "illum";
                        keywordId = "sequi";
                    }};;
                    reportType = "natus";
                    rowCount = 773326;
                    startRow = 13236;
                    statisticsCurrency = "voluptatibus";
                    timeRange = new ReportRequestTimeRange() {{
                        changedAttributesSinceTimestamp = "exercitationem";
                        changedMetricsSinceTimestamp = "nulla";
                        endDate = "fugit";
                        startDate = "porro";
                    }};;
                    verifySingleTimeZone = false;
                }};;
                accessToken = "maiores";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "eligendi";
                key = "ducimus";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "officia";
                uploadType = "tempora";
                uploadProtocol = "ipsam";
            }};            

            DoubleclicksearchReportsRequestResponse res = sdk.reports.doubleclicksearchReportsRequest(req, new DoubleclicksearchReportsRequestSecurity("ea", "aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
