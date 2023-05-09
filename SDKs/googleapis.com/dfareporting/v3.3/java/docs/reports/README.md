# reports

### Available Operations

* [dfareportingReportsCompatibleFieldsQuery](#dfareportingreportscompatiblefieldsquery) - Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.
* [dfareportingReportsDelete](#dfareportingreportsdelete) - Deletes a report by its ID.
* [dfareportingReportsFilesGet](#dfareportingreportsfilesget) - Retrieves a report file by its report ID and file ID. This method supports media download.
* [dfareportingReportsFilesList](#dfareportingreportsfileslist) - Lists files for a report.
* [dfareportingReportsGet](#dfareportingreportsget) - Retrieves a report by its ID.
* [dfareportingReportsInsert](#dfareportingreportsinsert) - Creates a report.
* [dfareportingReportsList](#dfareportingreportslist) - Retrieves list of reports.
* [dfareportingReportsPatch](#dfareportingreportspatch) - Updates an existing report. This method supports patch semantics.
* [dfareportingReportsRun](#dfareportingreportsrun) - Runs a report.
* [dfareportingReportsUpdate](#dfareportingreportsupdate) - Updates a report.

## dfareportingReportsCompatibleFieldsQuery

Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsCompatibleFieldsQueryRequest;
import org.openapis.openapi.models.operations.DfareportingReportsCompatibleFieldsQueryResponse;
import org.openapis.openapi.models.operations.DfareportingReportsCompatibleFieldsQuerySecurity;
import org.openapis.openapi.models.shared.Activities;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientDeliveryTypeEnum;
import org.openapis.openapi.models.shared.Report;
import org.openapis.openapi.models.shared.ReportCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteriaDimensionEnum;
import org.openapis.openapi.models.shared.ReportDelivery;
import org.openapis.openapi.models.shared.ReportDeliveryEmailOwnerDeliveryTypeEnum;
import org.openapis.openapi.models.shared.ReportFloodlightCriteria;
import org.openapis.openapi.models.shared.ReportFloodlightCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteria;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportReachCriteria;
import org.openapis.openapi.models.shared.ReportSchedule;
import org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum;
import org.openapis.openapi.models.shared.ReportScheduleRunsOnDayOfMonthEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.SortedDimension;
import org.openapis.openapi.models.shared.SortedDimensionSortOrderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsCompatibleFieldsQueryRequest req = new DfareportingReportsCompatibleFieldsQueryRequest("id") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "ab";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ipsam";
                                    etag = "at";
                                    id = "2247de9b-3d46-4170-a768-a96bb3987883";
                                    kind = "perspiciatis";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "vero";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "tempore";
                                    etag = "dolorum";
                                    id = "1bbf7143-356f-4634-9a16-4249b211ce46";
                                    kind = "tempore";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "nemo";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "veritatis";
                                    etag = "vel";
                                    id = "52b158ca-9142-4f05-a632-b31cad692ffc";
                                    kind = "blanditiis";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "dolore";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nostrum";
                                    etag = "ipsa";
                                    id = "05e9d3d9-34e0-436f-9c38-8664f6985530";
                                    kind = "est";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "repudiandae";
                                }}),
                            }};
                            kind = "sed";
                            metricNames = new String[]{{
                                add("repudiandae"),
                                add("assumenda"),
                                add("vel"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "est";
                                    etag = "tenetur";
                                    id = "863c28d0-40c6-49a3-9906-f6ebd5ad7ec7";
                                    kind = "neque";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "dolore";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "reiciendis";
                                    etag = "dolores";
                                    id = "5f634b37-3071-44e6-be8c-3e09c64d342a";
                                    kind = "placeat";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "natus";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "provident";
                                    etag = "officia";
                                    id = "6e5e7aef-1340-42e9-85f5-3743efde1198";
                                    kind = "quia";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "illo";
                                }}),
                            }};
                            kind = "repellat";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-07-16");
                            kind = "inventore";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST60_DAYS;
                            startDate = LocalDate.parse("2022-02-22");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "deserunt";
                                etag = "earum";
                                id = "fe69682a-ceef-4b04-b8c5-12caabea708e";
                                kind = "temporibus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "odio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "iste";
                                etag = "rem";
                                id = "d385d460-599d-45c3-b495-76d55209e9a2";
                                kind = "qui";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "neque";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "facilis";
                                etag = "aliquid";
                                id = "d765886e-eae5-4fd4-b39f-8a1490678f13";
                                kind = "quisquam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "laudantium";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "repellendus";
                                name = "Luis Mohr";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "saepe";
                                name = "Joy Haley";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("consequatur"),
                            add("autem"),
                            add("similique"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "enim";
                                name = "Sabrina Rogahn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quidem";
                                name = "Marian Gusikowski I";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "doloribus";
                                name = "Ralph MacGyver";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eligendi";
                                name = "Mamie Weber";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-08-07");
                            kind = "dignissimos";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-01-28");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "porro";
                                etag = "inventore";
                                id = "6a7ba478-4044-489f-a770-ef048091a2ba";
                                kind = "fugit";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "repudiandae";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("commodi"),
                            add("minus"),
                            add("odio"),
                            add("ad"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("doloribus"),
                            add("voluptatum"),
                            add("est"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "perferendis";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Talia42@hotmail.com";
                                kind = "recusandae";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Jacynthe.McCullough64@yahoo.com";
                                kind = "sapiente";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Adaline_Nicolas78@yahoo.com";
                                kind = "deserunt";
                            }}),
                        }};
                    }};;
                    etag = "nisi";
                    fileName = "aliquam";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "pariatur";
                                etag = "repudiandae";
                                id = "9867551a-9cce-461e-82c7-9a39ae5a4d5a";
                                kind = "laboriosam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "expedita";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "tempora";
                                etag = "fugiat";
                                id = "5562d9b7-d9e2-4d6f-8f55-7629db875c3a";
                                kind = "blanditiis";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "sit";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-20");
                            kind = "dolores";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2022-11-26");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "magnam";
                                etag = "illo";
                                id = "cf6796ed-3d72-44c1-8f58-1e98cce3f716";
                                kind = "aliquid";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "aperiam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "possimus";
                                etag = "culpa";
                                id = "0e3aa61c-6fe0-49d8-92b5-3b32c8c7c3c7";
                                kind = "quasi";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "accusamus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "inventore";
                                etag = "voluptas";
                                id = "73d905cb-4bed-4ef3-8127-c39099552825";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "maxime";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nobis";
                                etag = "soluta";
                                id = "cd3b121b-88c1-4ee5-a7a0-61391cc8fa0b";
                                kind = "iusto";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "beatae";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "autem";
                                name = "Toni Cole";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "cumque";
                                name = "Derek Walsh";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "aliquid";
                            etag = "necessitatibus";
                            id = "babe5e0b-99f3-4b13-98d6-a87bb7aecbe5";
                            kind = "eum";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "at";
                        }};;
                        metricNames = new String[]{{
                            add("alias"),
                            add("minus"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "consequatur";
                    kind = "suscipit";
                    lastModifiedTime = "cupiditate";
                    name = "Daniel Kulas";
                    ownerProfileId = "praesentium";
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "incidunt";
                                etag = "incidunt";
                                id = "1452a9f0-1f34-442c-a1be-133bacde532b";
                                kind = "ea";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eos";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "laboriosam";
                                etag = "reiciendis";
                                id = "862853fe-2859-4ce3-a223-1fe6664c41d2";
                                kind = "maiores";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "est";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ad";
                                etag = "quod";
                                id = "ba069b8d-291b-4eb8-90a2-aa8749479edd";
                                kind = "modi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "cumque";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ducimus";
                                name = "Dan Bechtelar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "molestiae";
                                name = "Frank Lind";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fugit";
                                name = "Debra Aufderhar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "qui";
                                name = "Miss Beulah Goodwin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "praesentium";
                                name = "Mr. Timmy Wilderman";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "laudantium";
                                etag = "praesentium";
                                id = "f86996c8-e22b-4e0a-bcf4-7893bd23f866";
                                kind = "alias";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "minus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "commodi";
                                etag = "inventore";
                                id = "c7834273-caa9-4118-b38f-1b61a331a54d";
                                kind = "cumque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "voluptatem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "magni";
                                etag = "iste";
                                id = "4f92fed9-39ba-48f7-9e29-92c20ee1228a";
                                kind = "cumque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "id";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "assumenda";
                                etag = "optio";
                                id = "647d240b-c11e-4a48-a824-ccc6a2f0f5b9";
                                kind = "quibusdam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quo";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-05");
                            kind = "beatae";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-08-02");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "deleniti";
                            etag = "dignissimos";
                            id = "d3100e8e-2b9b-40d7-86d2-a7c7d1ea0e79";
                            kind = "tenetur";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "sint";
                        }};;
                        metricNames = new String[]{{
                            add("distinctio"),
                            add("earum"),
                            add("veniam"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "et";
                                name = "Violet Welch";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "libero";
                                name = "Ms. Lila Koepp";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Gladys Maggio";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "non";
                                name = "Otis Sanford";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 441452;
                            impressionsLookbackWindow = 182499;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 630062;
                            maximumImpressionInteractions = 710835;
                            maximumInteractionGap = 843648;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "et";
                                    etag = "cupiditate";
                                    id = "18d279c1-0c18-4516-bd78-be2621272628";
                                    kind = "doloribus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "ullam";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ipsa";
                                    etag = "ratione";
                                    id = "962867e7-2b3a-4650-a4b1-57f9bb6ef72a";
                                    kind = "ad";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "voluptatum";
                                }}),
                            }};
                            kind = "molestiae";
                            metricNames = new String[]{{
                                add("at"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "provident";
                                    etag = "nam";
                                    id = "661a7def-168b-46cc-b282-2b4a9850ed2f";
                                    kind = "dolore";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "veritatis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "itaque";
                                    etag = "excepturi";
                                    id = "c4ae5514-0e75-4726-a003-c2f029419251";
                                    kind = "atque";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "saepe";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "accusamus";
                                    etag = "incidunt";
                                    id = "1c999f46-9f6f-41cf-9a3f-023c669e6a62";
                                    kind = "aliquid";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ab";
                                }}),
                            }};
                            kind = "sunt";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-11-11");
                            kind = "id";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-07-10");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quos";
                                etag = "rem";
                                id = "c6720c31-03f1-4a40-80f3-ec8688fd8ec6";
                                kind = "tenetur";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "consequatur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "consectetur";
                                etag = "illo";
                                id = "28f0aaae-ee00-44eb-a7bf-8732be509c50";
                                kind = "atque";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "sunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "neque";
                                etag = "quae";
                                id = "f06f0bce-55a8-4687-943c-97905ff797a5";
                                kind = "repellendus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "vel";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "non";
                                name = "Roland Terry";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "mollitia";
                                name = "Eleanor Raynor";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("laudantium"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("consequuntur"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 730230;
                        expirationDate = LocalDate.parse("2022-02-18");
                        repeats = "ad";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-07-06");
                    }};;
                    subAccountId = "veritatis";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "molestias";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "tempora";
                key = "deserunt";
                oauthToken = "deserunt";
                prettyPrint = false;
                quotaUser = "nisi";
                uploadType = "harum";
                uploadProtocol = "placeat";
            }};            

            DfareportingReportsCompatibleFieldsQueryResponse res = sdk.reports.dfareportingReportsCompatibleFieldsQuery(req, new DfareportingReportsCompatibleFieldsQuerySecurity("debitis", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.compatibleFields != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingReportsDelete

Deletes a report by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsDeleteRequest;
import org.openapis.openapi.models.operations.DfareportingReportsDeleteResponse;
import org.openapis.openapi.models.operations.DfareportingReportsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsDeleteRequest req = new DfareportingReportsDeleteRequest("reprehenderit", "repellat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.JSON;
                callback = "dolores";
                fields = "ratione";
                key = "qui";
                oauthToken = "voluptates";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "mollitia";
                uploadProtocol = "veniam";
            }};            

            DfareportingReportsDeleteResponse res = sdk.reports.dfareportingReportsDelete(req, new DfareportingReportsDeleteSecurity("at", "eveniet") {{
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

## dfareportingReportsFilesGet

Retrieves a report file by its report ID and file ID. This method supports media download.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsFilesGetRequest;
import org.openapis.openapi.models.operations.DfareportingReportsFilesGetResponse;
import org.openapis.openapi.models.operations.DfareportingReportsFilesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsFilesGetRequest req = new DfareportingReportsFilesGetRequest("debitis", "inventore", "laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repellendus";
                alt = AltEnum.MEDIA;
                callback = "sed";
                fields = "officia";
                key = "voluptatum";
                oauthToken = "cupiditate";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "voluptatum";
                uploadProtocol = "ab";
            }};            

            DfareportingReportsFilesGetResponse res = sdk.reports.dfareportingReportsFilesGet(req, new DfareportingReportsFilesGetSecurity("rerum", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingReportsFilesList

Lists files for a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsFilesListRequest;
import org.openapis.openapi.models.operations.DfareportingReportsFilesListResponse;
import org.openapis.openapi.models.operations.DfareportingReportsFilesListSecurity;
import org.openapis.openapi.models.operations.DfareportingReportsFilesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingReportsFilesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsFilesListRequest req = new DfareportingReportsFilesListRequest("corrupti", "tenetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.MEDIA;
                callback = "magni";
                fields = "repudiandae";
                key = "sunt";
                maxResults = 806335L;
                oauthToken = "aspernatur";
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "facilis";
                sortField = DfareportingReportsFilesListSortFieldEnum.LAST_MODIFIED_TIME;
                sortOrder = DfareportingReportsFilesListSortOrderEnum.ASCENDING;
                uploadType = "nesciunt";
                uploadProtocol = "pariatur";
            }};            

            DfareportingReportsFilesListResponse res = sdk.reports.dfareportingReportsFilesList(req, new DfareportingReportsFilesListSecurity("nostrum", "voluptatum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.fileList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingReportsGet

Retrieves a report by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsGetRequest;
import org.openapis.openapi.models.operations.DfareportingReportsGetResponse;
import org.openapis.openapi.models.operations.DfareportingReportsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsGetRequest req = new DfareportingReportsGetRequest("necessitatibus", "deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "magnam";
                alt = AltEnum.MEDIA;
                callback = "facere";
                fields = "beatae";
                key = "consequuntur";
                oauthToken = "sed";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "provident";
                uploadProtocol = "doloribus";
            }};            

            DfareportingReportsGetResponse res = sdk.reports.dfareportingReportsGet(req, new DfareportingReportsGetSecurity("aliquid", "iusto") {{
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

## dfareportingReportsInsert

Creates a report.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsInsertRequest;
import org.openapis.openapi.models.operations.DfareportingReportsInsertResponse;
import org.openapis.openapi.models.operations.DfareportingReportsInsertSecurity;
import org.openapis.openapi.models.shared.Activities;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientDeliveryTypeEnum;
import org.openapis.openapi.models.shared.Report;
import org.openapis.openapi.models.shared.ReportCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteriaDimensionEnum;
import org.openapis.openapi.models.shared.ReportDelivery;
import org.openapis.openapi.models.shared.ReportDeliveryEmailOwnerDeliveryTypeEnum;
import org.openapis.openapi.models.shared.ReportFloodlightCriteria;
import org.openapis.openapi.models.shared.ReportFloodlightCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteria;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportReachCriteria;
import org.openapis.openapi.models.shared.ReportSchedule;
import org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum;
import org.openapis.openapi.models.shared.ReportScheduleRunsOnDayOfMonthEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.SortedDimension;
import org.openapis.openapi.models.shared.SortedDimensionSortOrderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsInsertRequest req = new DfareportingReportsInsertRequest("vel") {{
                dollarXgafv = XgafvEnum.ONE;
                report = new Report() {{
                    accountId = "praesentium";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "id";
                                    etag = "dolores";
                                    id = "79583673-63da-4079-896f-aeb86480730d";
                                    kind = "laudantium";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "quos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "rerum";
                                    etag = "rem";
                                    id = "9d9ca607-5656-4fc0-abe6-7155e2d06a30";
                                    kind = "in";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "nulla";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "vel";
                                    etag = "earum";
                                    id = "297f581f-abaa-4a7d-8010-88076ff5f6ed";
                                    kind = "quia";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "laudantium";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ab";
                                    etag = "numquam";
                                    id = "088269b6-a70b-40dd-82f9-4fffbd1e1e21";
                                    kind = "nulla";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "quisquam";
                                }}),
                            }};
                            kind = "commodi";
                            metricNames = new String[]{{
                                add("doloremque"),
                                add("sequi"),
                                add("deleniti"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "dicta";
                                    etag = "quibusdam";
                                    id = "187b51eb-5fd3-40bf-a034-90cf20254a95";
                                    kind = "unde";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quaerat";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "adipisci";
                                    etag = "maxime";
                                    id = "b462d6bc-9917-4f98-a479-2b979a413d6a";
                                    kind = "rem";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "perspiciatis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "vitae";
                                    etag = "suscipit";
                                    id = "83bd861d-0d98-4ccf-89d3-861186ed76c0";
                                    kind = "consequatur";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "tenetur";
                                }}),
                            }};
                            kind = "est";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-12-05");
                            kind = "dicta";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.MONTH_TO_DATE;
                            startDate = LocalDate.parse("2021-05-19");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ut";
                                etag = "placeat";
                                id = "8143b866-c575-4a1e-a668-730be37b0e8f";
                                kind = "nam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "dolore";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "facere";
                                name = "Cedric Koch";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "rerum";
                                name = "Mr. Rita Hauck";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quis";
                                name = "Katherine Graham";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("sit"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "atque";
                                name = "Aaron Hahn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "consectetur";
                                name = "Raquel Metz";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-08-25");
                            kind = "iusto";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2022-03-05");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "sit";
                                id = "b8fc0d59-f57b-49f9-820b-e07808c36c9e";
                                kind = "consequuntur";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "esse";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sit";
                                etag = "adipisci";
                                id = "44e00f47-8eb5-4394-83f7-48eefccb69d5";
                                kind = "numquam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "expedita";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("tempore"),
                            add("sequi"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("amet"),
                            add("voluptatibus"),
                            add("amet"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "eum";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Ethyl_Rath20@gmail.com";
                                kind = "magni";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Ardella_Spencer19@gmail.com";
                                kind = "reprehenderit";
                            }}),
                        }};
                    }};;
                    etag = "sint";
                    fileName = "optio";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "error";
                                etag = "quas";
                                id = "ea1d48c5-c2f9-4e21-990f-d53776bfc767";
                                kind = "ducimus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "voluptatem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "doloribus";
                                etag = "nostrum";
                                id = "04a6e482-8fb6-4dae-a19c-26c0cb618c63";
                                kind = "dolor";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "optio";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-07-06");
                            kind = "at";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-02-02");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quam";
                                etag = "est";
                                id = "444dd0da-0abe-458e-b3d5-4ba1cb3ad49b";
                                kind = "molestias";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "corporis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "maxime";
                                etag = "quasi";
                                id = "8b25e87f-6482-4325-9be9-5c0cbcb2ca87";
                                kind = "sint";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quos";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "in";
                                name = "Carole Ankunding";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolores";
                                name = "Frank Keeling";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "qui";
                                name = "Bennie Hilll III";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "similique";
                                name = "Helen Kunde";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "repellat";
                            etag = "cum";
                            id = "8af6849d-2b99-4404-b63a-0964c053876e";
                            kind = "ratione";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "fugiat";
                        }};;
                        metricNames = new String[]{{
                            add("tenetur"),
                            add("perspiciatis"),
                            add("quisquam"),
                            add("reprehenderit"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "minima";
                    kind = "temporibus";
                    lastModifiedTime = "reiciendis";
                    name = "Ted Emard";
                    ownerProfileId = "eveniet";
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "placeat";
                                etag = "nam";
                                id = "94977017-a262-404b-b26c-a4e99982879d";
                                kind = "debitis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "optio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "perferendis";
                                etag = "harum";
                                id = "239606cf-90ad-4989-a1a3-4715acda044f";
                                kind = "officia";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "saepe";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ex";
                                name = "Willie Donnelly";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quae";
                                name = "Steve Tillman IV";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Verna Abernathy";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "minus";
                                name = "Allen Mante";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nesciunt";
                                name = "Ms. Monica Keeling";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sint";
                                name = "Brooke Torp II";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "distinctio";
                                name = "Ray Watsica";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quasi";
                                etag = "eligendi";
                                id = "b503c314-0d87-472c-935e-1dd6bf64b454";
                                kind = "earum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "blanditiis";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-21");
                            kind = "accusamus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2022-04-13");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "tenetur";
                            etag = "accusantium";
                            id = "e57f54eb-f2d2-4b46-897e-fa44a8dff40c";
                            kind = "quibusdam";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "inventore";
                        }};;
                        metricNames = new String[]{{
                            add("enim"),
                            add("perferendis"),
                            add("soluta"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ipsam";
                                name = "Larry Schinner";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "facilis";
                                name = "Miss Terry Jerde";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "similique";
                                name = "Della Howell";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "nesciunt";
                                name = "Estelle Hintz V";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 781342;
                            impressionsLookbackWindow = 72854;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 25794;
                            maximumImpressionInteractions = 634633;
                            maximumInteractionGap = 503514;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ex";
                                    etag = "dolorum";
                                    id = "19d4665b-a972-4598-b5dc-0cecbc78bd24";
                                    kind = "rem";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "cumque";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ex";
                                    etag = "voluptates";
                                    id = "8b240b1c-06c9-4c06-89d2-bdd9e58ddb16";
                                    kind = "voluptas";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "optio";
                                }}),
                            }};
                            kind = "nesciunt";
                            metricNames = new String[]{{
                                add("dolores"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "voluptate";
                                    etag = "delectus";
                                    id = "550d4721-c176-4292-9d78-78e71bf8c141";
                                    kind = "quos";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "vitae";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "voluptatibus";
                                    etag = "officiis";
                                    id = "1f87ea10-3a98-406e-a160-6399ef17b817";
                                    kind = "ullam";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "repellendus";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "tempora";
                                    etag = "laborum";
                                    id = "b5bc80de-a77f-4d99-b1ec-9d106cff2c26";
                                    kind = "culpa";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "corrupti";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "dolore";
                                    etag = "doloremque";
                                    id = "a28ea067-2d6b-473a-b4ca-434cdb3149a1";
                                    kind = "molestias";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "qui";
                                }}),
                            }};
                            kind = "quis";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-24");
                            kind = "nihil";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2022-10-04");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "mollitia";
                                etag = "magnam";
                                id = "b0daed4b-5cf0-4616-ae92-27575bd60daa";
                                kind = "voluptatem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "quae";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eius";
                                etag = "unde";
                                id = "cd1ccdd3-62bb-4f92-b900-15f26899cf4f";
                                kind = "delectus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "cum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "excepturi";
                                etag = "expedita";
                                id = "ec50318a-81eb-401d-a97f-7b456a855e50";
                                kind = "rem";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "maxime";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "id";
                                name = "Louise Keebler";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laborum";
                                name = "Delbert Schmeler";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "nisi";
                                name = "Mable Grimes";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("corporis"),
                            add("minus"),
                            add("dicta"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("amet"),
                            add("dolores"),
                            add("quidem"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 743991;
                        expirationDate = LocalDate.parse("2022-11-19");
                        repeats = "consectetur";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.THURSDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2021-10-07");
                    }};;
                    subAccountId = "dolorum";
                    type = ReportTypeEnum.REACH;
                }};;
                accessToken = "expedita";
                alt = AltEnum.PROTO;
                callback = "odio";
                fields = "incidunt";
                key = "omnis";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "vel";
                uploadType = "expedita";
                uploadProtocol = "excepturi";
            }};            

            DfareportingReportsInsertResponse res = sdk.reports.dfareportingReportsInsert(req, new DfareportingReportsInsertSecurity("vel", "quisquam") {{
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

## dfareportingReportsList

Retrieves list of reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsListRequest;
import org.openapis.openapi.models.operations.DfareportingReportsListResponse;
import org.openapis.openapi.models.operations.DfareportingReportsListScopeEnum;
import org.openapis.openapi.models.operations.DfareportingReportsListSecurity;
import org.openapis.openapi.models.operations.DfareportingReportsListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingReportsListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsListRequest req = new DfareportingReportsListRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vel";
                alt = AltEnum.PROTO;
                callback = "voluptate";
                fields = "aliquam";
                key = "repellendus";
                maxResults = 147566L;
                oauthToken = "totam";
                pageToken = "culpa";
                prettyPrint = false;
                quotaUser = "quaerat";
                scope = DfareportingReportsListScopeEnum.MINE;
                sortField = DfareportingReportsListSortFieldEnum.ID;
                sortOrder = DfareportingReportsListSortOrderEnum.ASCENDING;
                uploadType = "excepturi";
                uploadProtocol = "similique";
            }};            

            DfareportingReportsListResponse res = sdk.reports.dfareportingReportsList(req, new DfareportingReportsListSecurity("quae", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.reportList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingReportsPatch

Updates an existing report. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsPatchRequest;
import org.openapis.openapi.models.operations.DfareportingReportsPatchResponse;
import org.openapis.openapi.models.operations.DfareportingReportsPatchSecurity;
import org.openapis.openapi.models.shared.Activities;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientDeliveryTypeEnum;
import org.openapis.openapi.models.shared.Report;
import org.openapis.openapi.models.shared.ReportCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteriaDimensionEnum;
import org.openapis.openapi.models.shared.ReportDelivery;
import org.openapis.openapi.models.shared.ReportDeliveryEmailOwnerDeliveryTypeEnum;
import org.openapis.openapi.models.shared.ReportFloodlightCriteria;
import org.openapis.openapi.models.shared.ReportFloodlightCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteria;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportReachCriteria;
import org.openapis.openapi.models.shared.ReportSchedule;
import org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum;
import org.openapis.openapi.models.shared.ReportScheduleRunsOnDayOfMonthEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.SortedDimension;
import org.openapis.openapi.models.shared.SortedDimensionSortOrderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsPatchRequest req = new DfareportingReportsPatchRequest("rem", "tempora") {{
                dollarXgafv = XgafvEnum.ONE;
                report = new Report() {{
                    accountId = "dicta";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "praesentium";
                                    etag = "ea";
                                    id = "405876b3-0871-413d-a406-1082d0953c89";
                                    kind = "nobis";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "sint";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "dolores";
                                    etag = "odio";
                                    id = "a5ba5511-bb83-470d-9784-fb14647331bc";
                                    kind = "minima";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "voluptates";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "suscipit";
                                    etag = "veritatis";
                                    id = "b3f37172-874c-4377-88d4-39ec6bd2cad0";
                                    kind = "aperiam";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "quibusdam";
                                }}),
                            }};
                            kind = "esse";
                            metricNames = new String[]{{
                                add("minus"),
                                add("iure"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "soluta";
                                    etag = "distinctio";
                                    id = "bc9e9744-c5b6-445a-8af2-fcabccbca329";
                                    kind = "aspernatur";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "officiis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "cum";
                                    etag = "aut";
                                    id = "6a6cabe2-2a11-4f77-a75d-8ff4452bed74";
                                    kind = "ducimus";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "a";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "impedit";
                                    etag = "modi";
                                    id = "8c282b87-16c2-47f6-b175-780304c40ac2";
                                    kind = "expedita";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "dolorum";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "temporibus";
                                    etag = "corrupti";
                                    id = "254fde37-7243-450e-985a-7f8cc2911a6b";
                                    kind = "esse";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "distinctio";
                                }}),
                            }};
                            kind = "fugiat";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-10-04");
                            kind = "alias";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2021-01-29");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "sunt";
                                etag = "temporibus";
                                id = "d38523cd-a4eb-4b9f-983f-83df9b0c46a0";
                                kind = "iste";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "necessitatibus";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "recusandae";
                                name = "Forrest Christiansen III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("saepe"),
                            add("odio"),
                            add("laboriosam"),
                            add("veniam"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "delectus";
                                name = "Jean Romaguera";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "aperiam";
                                name = "Lauren Wyman III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fuga";
                                name = "Danielle Ankunding IV";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-01-28");
                            kind = "amet";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-09-19");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "officia";
                                etag = "totam";
                                id = "7217fed9-62df-43ee-a7c3-85c7970e1a1a";
                                kind = "quos";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "quidem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "impedit";
                                etag = "earum";
                                id = "6e19b901-2c44-44e2-b1ba-147727de95f7";
                                kind = "odit";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "fugiat";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("tempore"),
                            add("hic"),
                            add("laboriosam"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("perferendis"),
                            add("eaque"),
                            add("tempore"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "quasi";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Pietro12@hotmail.com";
                                kind = "delectus";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Ara_Mitchell98@hotmail.com";
                                kind = "nihil";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Beau.Nienow@gmail.com";
                                kind = "assumenda";
                            }}),
                        }};
                    }};;
                    etag = "maiores";
                    fileName = "quia";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ullam";
                                etag = "consequuntur";
                                id = "3e371365-217a-46e5-96aa-41b9e2053ae8";
                                kind = "maxime";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ab";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-07");
                            kind = "fugit";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_WEEK;
                            startDate = LocalDate.parse("2022-05-12");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eaque";
                                etag = "dolores";
                                id = "294725d8-8138-4dac-a6dd-2a0991b6d176";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "magnam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sequi";
                                etag = "quisquam";
                                id = "799a2a18-db12-49dc-924a-bb7b10caf244";
                                kind = "illum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "architecto";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eaque";
                                etag = "neque";
                                id = "d0830ac4-d070-4c4e-b96e-562c5ccb1637";
                                kind = "ipsum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "inventore";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "incidunt";
                                etag = "illum";
                                id = "ad58b890-542e-45a5-9a10-fd8ac0f482f9";
                                kind = "accusamus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "laborum";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "neque";
                                name = "Sean Berge";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Phyllis Cronin DDS";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "debitis";
                            etag = "quo";
                            id = "c41932d7-04b3-4ae7-8934-d9ebb6a28f6f";
                            kind = "iure";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "cum";
                        }};;
                        metricNames = new String[]{{
                            add("laboriosam"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "consequuntur";
                    kind = "earum";
                    lastModifiedTime = "accusamus";
                    name = "Vivian Fay";
                    ownerProfileId = "tempore";
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eaque";
                                etag = "fuga";
                                id = "414aa294-d64c-408a-aec1-a807151a354b";
                                kind = "dolorum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "mollitia";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "at";
                                name = "Mable Streich";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sint";
                                name = "Claudia Pfeffer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "rem";
                                name = "Jennifer Collier";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "accusamus";
                                name = "Bonnie Wuckert";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laboriosam";
                                name = "Ernesto Corwin";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "voluptas";
                                name = "Myra Schumm";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "inventore";
                                etag = "eos";
                                id = "723aa03f-83a1-4e1e-bab3-e07c05e13db8";
                                kind = "rem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "minima";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "occaecati";
                                etag = "veritatis";
                                id = "f98329f9-1922-4f7c-ad07-b6545000a5b3";
                                kind = "vel";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "sed";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "magni";
                                etag = "sunt";
                                id = "e3ff770a-2b42-4e5e-9f64-a2a875c6a710";
                                kind = "saepe";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "numquam";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-05-20");
                            kind = "iusto";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST24_MONTHS;
                            startDate = LocalDate.parse("2021-10-28");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "laborum";
                            etag = "mollitia";
                            id = "f9bd8327-e8f7-4d31-a145-ebdd822af2c1";
                            kind = "iure";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "excepturi";
                        }};;
                        metricNames = new String[]{{
                            add("deleniti"),
                            add("similique"),
                            add("sit"),
                            add("fuga"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nisi";
                                name = "Emma Homenick";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ipsam";
                                name = "Pat Bins IV";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 853449;
                            impressionsLookbackWindow = 932006;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 23056;
                            maximumImpressionInteractions = 636696;
                            maximumInteractionGap = 923482;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "totam";
                                    etag = "impedit";
                                    id = "72213f42-5a03-438b-b1b3-d2fd3b636c07";
                                    kind = "adipisci";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "corrupti";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "corrupti";
                                    etag = "vero";
                                    id = "75ab7ff2-a12f-4b07-8cd4-4c23c0b11281";
                                    kind = "debitis";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "vel";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "atque";
                                    etag = "dolor";
                                    id = "5b93ced6-87bb-4453-b44a-f461c7cb91c7";
                                    kind = "provident";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "unde";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "laboriosam";
                                    etag = "odit";
                                    id = "de323875-a4a2-4e87-987b-51e22e77c0e6";
                                    kind = "recusandae";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "vitae";
                                }}),
                            }};
                            kind = "porro";
                            metricNames = new String[]{{
                                add("corrupti"),
                                add("dolorem"),
                                add("ratione"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "laboriosam";
                                    etag = "pariatur";
                                    id = "c5b10306-7a89-49e2-9c6a-4c14ff187497";
                                    kind = "rerum";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "tempora";
                                }}),
                            }};
                            kind = "consequatur";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-27");
                            kind = "laboriosam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.QUARTER_TO_DATE;
                            startDate = LocalDate.parse("2022-04-26");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "laboriosam";
                                etag = "ex";
                                id = "0070c0bc-de7e-450e-a441-101c138b4629";
                                kind = "fugit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "temporibus";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sit";
                                name = "Miss Kelly Hickle";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quam";
                                name = "Luis Feeney";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("porro"),
                            add("ratione"),
                            add("animi"),
                            add("possimus"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("quos"),
                            add("ullam"),
                            add("fugit"),
                            add("in"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 124506;
                        expirationDate = LocalDate.parse("2022-12-25");
                        repeats = "autem";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.WEDNESDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-09-22");
                    }};;
                    subAccountId = "soluta";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "alias";
                key = "a";
                oauthToken = "quisquam";
                prettyPrint = false;
                quotaUser = "commodi";
                uploadType = "aut";
                uploadProtocol = "quibusdam";
            }};            

            DfareportingReportsPatchResponse res = sdk.reports.dfareportingReportsPatch(req, new DfareportingReportsPatchSecurity("a", "doloribus") {{
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

## dfareportingReportsRun

Runs a report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsRunRequest;
import org.openapis.openapi.models.operations.DfareportingReportsRunResponse;
import org.openapis.openapi.models.operations.DfareportingReportsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsRunRequest req = new DfareportingReportsRunRequest("laudantium", "hic") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.PROTO;
                callback = "eaque";
                fields = "officiis";
                key = "tempora";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "delectus";
                synchronous = false;
                uploadType = "qui";
                uploadProtocol = "fugit";
            }};            

            DfareportingReportsRunResponse res = sdk.reports.dfareportingReportsRun(req, new DfareportingReportsRunSecurity("exercitationem", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingReportsUpdate

Updates a report.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingReportsUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingReportsUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingReportsUpdateSecurity;
import org.openapis.openapi.models.shared.Activities;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.Recipient;
import org.openapis.openapi.models.shared.RecipientDeliveryTypeEnum;
import org.openapis.openapi.models.shared.Report;
import org.openapis.openapi.models.shared.ReportCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteria;
import org.openapis.openapi.models.shared.ReportCrossDimensionReachCriteriaDimensionEnum;
import org.openapis.openapi.models.shared.ReportDelivery;
import org.openapis.openapi.models.shared.ReportDeliveryEmailOwnerDeliveryTypeEnum;
import org.openapis.openapi.models.shared.ReportFloodlightCriteria;
import org.openapis.openapi.models.shared.ReportFloodlightCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportFormatEnum;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteria;
import org.openapis.openapi.models.shared.ReportPathToConversionCriteriaReportProperties;
import org.openapis.openapi.models.shared.ReportReachCriteria;
import org.openapis.openapi.models.shared.ReportSchedule;
import org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum;
import org.openapis.openapi.models.shared.ReportScheduleRunsOnDayOfMonthEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.SortedDimension;
import org.openapis.openapi.models.shared.SortedDimensionSortOrderEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsUpdateRequest req = new DfareportingReportsUpdateRequest("aspernatur", "occaecati") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "reprehenderit";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "temporibus";
                                    etag = "non";
                                    id = "9d8790e2-e601-44a3-bd97-0b2b531bfb30";
                                    kind = "necessitatibus";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "fuga";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "dolor";
                                    etag = "sapiente";
                                    id = "8e5e392f-22a7-47cb-baf1-b63ecde080fb";
                                    kind = "deleniti";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "impedit";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "aperiam";
                                    etag = "ad";
                                    id = "636c53d4-1599-455c-9c71-7604597f3771";
                                    kind = "excepturi";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "temporibus";
                                }}),
                            }};
                            kind = "blanditiis";
                            metricNames = new String[]{{
                                add("corrupti"),
                                add("numquam"),
                                add("quos"),
                                add("explicabo"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "alias";
                                    etag = "fugit";
                                    id = "65d92c4c-8c9f-48a0-ac1e-04d2aceb0cde";
                                    kind = "perferendis";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "itaque";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "deleniti";
                                    etag = "necessitatibus";
                                    id = "cf818a93-03e9-43f0-8a18-b21f06d4d178";
                                    kind = "ullam";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "assumenda";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "fugit";
                                    etag = "praesentium";
                                    id = "be1db01d-6919-4f83-9593-a84ea7db15c4";
                                    kind = "cumque";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "nostrum";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "reiciendis";
                                    etag = "accusamus";
                                    id = "6cd097a6-7559-47ec-beb7-982baf9a7da6";
                                    kind = "optio";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "cupiditate";
                                }}),
                            }};
                            kind = "facilis";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-06");
                            kind = "molestias";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST14_DAYS;
                            startDate = LocalDate.parse("2022-12-03");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "molestiae";
                                etag = "necessitatibus";
                                id = "6ed6f7ff-04fd-4a04-a69e-ae8182403655";
                                kind = "est";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "excepturi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "consequuntur";
                                etag = "sequi";
                                id = "c49919eb-d1cf-4779-938c-bbfcdf4ece96";
                                kind = "est";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "magnam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "reiciendis";
                                etag = "expedita";
                                id = "42c33049-617c-4b71-9dc2-50b60c751d2a";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "necessitatibus";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "tempore";
                                name = "Wallace Cruickshank";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "vel";
                                name = "Charlene Bergstrom";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "minus";
                                name = "Ivan Kiehn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("voluptatibus"),
                            add("ipsa"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "hic";
                                name = "Diane Gusikowski";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dignissimos";
                                name = "Johnny Stehr";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-31");
                            kind = "sed";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-09-19");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "facere";
                                etag = "dicta";
                                id = "b83160b3-e3e9-4896-8a0a-afc7a8678ba5";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "officia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quas";
                                etag = "hic";
                                id = "4cb72ed6-cf62-425d-9561-58803212f7b5";
                                kind = "unde";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "ducimus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "beatae";
                                etag = "nemo";
                                id = "4642b9e3-7c84-4c3d-bca4-9183797888d1";
                                kind = "ullam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "earum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sit";
                                etag = "ab";
                                id = "ae36bb8d-0028-4e3e-9dc9-059f7ef0f138";
                                kind = "nemo";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "suscipit";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("quisquam"),
                            add("qui"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("autem"),
                            add("reprehenderit"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "culpa";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Walter.Jast41@yahoo.com";
                                kind = "laudantium";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Brant_OHara@yahoo.com";
                                kind = "cum";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Gayle.Casper@yahoo.com";
                                kind = "dolores";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Mavis.Baumbach@gmail.com";
                                kind = "qui";
                            }}),
                        }};
                    }};;
                    etag = "laudantium";
                    fileName = "repudiandae";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "est";
                                etag = "odit";
                                id = "01ecfb74-faff-45de-8f2b-0a857bcec81f";
                                kind = "reiciendis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "numquam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "rerum";
                                etag = "voluptas";
                                id = "19003b23-4e83-4c6c-b6a5-6b3ad5bf7940";
                                kind = "at";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "autem";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-08-09");
                            kind = "eaque";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.MONTH_TO_DATE;
                            startDate = LocalDate.parse("2021-05-02");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quos";
                                etag = "molestias";
                                id = "af600546-0b05-4f01-a7bd-8643968dd0d7";
                                kind = "in";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "similique";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ipsa";
                                etag = "quam";
                                id = "c3076c86-2de9-4692-b9ea-86c03ac3f23d";
                                kind = "maxime";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "non";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sequi";
                                name = "Samuel Kovacek";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ex";
                                name = "Gretchen Hammes";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "voluptatibus";
                            etag = "necessitatibus";
                            id = "bc18aaa3-debd-40c9-8035-e4c1d0624de3";
                            kind = "ipsam";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "magnam";
                        }};;
                        metricNames = new String[]{{
                            add("magnam"),
                            add("vitae"),
                            add("accusamus"),
                            add("dolore"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "facere";
                    kind = "repellendus";
                    lastModifiedTime = "culpa";
                    name = "Virginia Gibson";
                    ownerProfileId = "incidunt";
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "laboriosam";
                                etag = "laudantium";
                                id = "99994dc9-53b4-4266-80e5-00fc742c9c71";
                                kind = "aperiam";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "occaecati";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "vitae";
                                etag = "itaque";
                                id = "f7b31a84-fed7-4bce-8fba-2734d3134756";
                                kind = "eveniet";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "fugit";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "natus";
                                name = "Crystal Bednar";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "aperiam";
                                name = "Ms. Noah Daniel V";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ea";
                                name = "Peggy Dibbert";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "soluta";
                                name = "Susan Schinner DVM";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ratione";
                                name = "Jordan Thompson";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "autem";
                                name = "Leslie Hahn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "dolore";
                                etag = "dolor";
                                id = "62533a8f-8c1e-4639-a61d-ff2353545dbf";
                                kind = "temporibus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "excepturi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quibusdam";
                                etag = "corrupti";
                                id = "54ee4956-d861-4c1f-a03a-438175865465";
                                kind = "magni";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "ducimus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "autem";
                                id = "3f82499f-41bb-49dd-9f9a-10583aa80e71";
                                kind = "quos";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "itaque";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-02-27");
                            kind = "atque";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2021-11-02");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ea";
                            etag = "aliquid";
                            id = "689a74cc-4e0e-4dcd-8270-b6c8030772d9";
                            kind = "ipsum";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "fugit";
                        }};;
                        metricNames = new String[]{{
                            add("itaque"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "debitis";
                                name = "Don Schuster";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "odio";
                                name = "Nicholas Cruickshank";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 56980;
                            impressionsLookbackWindow = 640414;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 673065;
                            maximumImpressionInteractions = 647971;
                            maximumInteractionGap = 669158;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "voluptates";
                                    etag = "iure";
                                    id = "312683ff-48c3-45c4-9aac-e0b938f6dc85";
                                    kind = "officia";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "tempore";
                                }}),
                            }};
                            kind = "vel";
                            metricNames = new String[]{{
                                add("in"),
                                add("nesciunt"),
                                add("odio"),
                                add("dignissimos"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "animi";
                                    etag = "maxime";
                                    id = "f428241d-1ddf-405c-a1d3-992dbefed111";
                                    kind = "sit";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "esse";
                                }}),
                            }};
                            kind = "animi";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-04-19");
                            kind = "nam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2021-12-02");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "saepe";
                                etag = "accusamus";
                                id = "ccd831a2-9da5-4596-8ee5-ebf7e69897f0";
                                kind = "ipsam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "similique";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "fuga";
                                etag = "reprehenderit";
                                id = "c59e69b7-c0e2-4683-b37a-a8dbe1562afb";
                                kind = "voluptatum";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "officiis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptatem";
                                etag = "magnam";
                                id = "210e06b7-6f96-469a-be38-42bdc330450b";
                                kind = "laboriosam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "saepe";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ex";
                                name = "Mrs. Earnest Bins";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "a";
                                name = "Domingo Boehm";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "commodi";
                                name = "Timmy Rice I";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolore";
                                name = "Oliver Boyer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("mollitia"),
                            add("debitis"),
                            add("adipisci"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("nesciunt"),
                            add("quas"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 299382;
                        expirationDate = LocalDate.parse("2021-10-22");
                        repeats = "totam";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2021-05-29");
                    }};;
                    subAccountId = "voluptates";
                    type = ReportTypeEnum.CROSS_DIMENSION_REACH;
                }};;
                accessToken = "sequi";
                alt = AltEnum.JSON;
                callback = "pariatur";
                fields = "cumque";
                key = "enim";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "aut";
                uploadType = "expedita";
                uploadProtocol = "deleniti";
            }};            

            DfareportingReportsUpdateResponse res = sdk.reports.dfareportingReportsUpdate(req, new DfareportingReportsUpdateSecurity("aliquid", "quasi") {{
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
