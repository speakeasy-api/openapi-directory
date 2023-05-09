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
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.ChannelGroupingRule;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathReportDimensionValue;
import org.openapis.openapi.models.shared.PathReportDimensionValueMatchTypeEnum;
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
import org.openapis.openapi.models.shared.ReportPathAttributionCriteria;
import org.openapis.openapi.models.shared.ReportPathCriteria;
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

            DfareportingReportsCompatibleFieldsQueryRequest req = new DfareportingReportsCompatibleFieldsQueryRequest("earum") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "quam";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "expedita";
                                    etag = "itaque";
                                    id = "069fb36a-dd70-4408-8e0a-3fc73a5a034b";
                                    kind = "inventore";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ut";
                                }}),
                            }};
                            kind = "sint";
                            metricNames = new String[]{{
                                add("eos"),
                                add("eius"),
                                add("ratione"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "maiores";
                                    etag = "mollitia";
                                    id = "6987a472-b709-4a15-be22-301068539ce0";
                                    kind = "perspiciatis";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "eos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "repellendus";
                                    etag = "vitae";
                                    id = "0acd15d8-cc30-46b7-86b3-d37bd204a1f3";
                                    kind = "dolore";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "nam";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "rerum";
                                    etag = "dolor";
                                    id = "6f677a48-519c-4337-8902-848826bb03c7";
                                    kind = "asperiores";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "consequuntur";
                                }}),
                            }};
                            kind = "odit";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-02-08");
                            kind = "dolore";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_MONTH;
                            startDate = LocalDate.parse("2022-01-15");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "culpa";
                                etag = "blanditiis";
                                id = "8ed72a2d-4af4-4158-ac2d-0f0f58c3b87b";
                                kind = "ut";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eaque";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "aut";
                                name = "Richard Simonis";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "unde";
                                name = "Dwight Dare";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("alias"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "voluptatibus";
                                name = "Audrey Krajcik";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quisquam";
                                name = "Mr. Grady Rippin";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-29");
                            kind = "distinctio";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST365_DAYS;
                            startDate = LocalDate.parse("2022-10-06");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quas";
                                etag = "id";
                                id = "b378f2fc-ff81-4ddf-be08-8f74ef54c921";
                                kind = "laboriosam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "atque";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("qui"),
                            add("aliquid"),
                            add("sequi"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("velit"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.ATTACHMENT;
                        message = "soluta";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Brandy_Satterfield@hotmail.com";
                                kind = "fugit";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Armando.Batz@gmail.com";
                                kind = "quidem";
                            }}),
                        }};
                    }};;
                    etag = "vel";
                    fileName = "autem";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "fugiat";
                                etag = "laboriosam";
                                id = "e3e1d9d3-b660-4334-a11a-a1d5d2247de9";
                                kind = "libero";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "pariatur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "labore";
                                etag = "laboriosam";
                                id = "170e768a-96bb-4398-b883-98eba1bbf714";
                                kind = "ratione";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "enim";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ex";
                                etag = "tenetur";
                                id = "6349a164-249b-4211-8e46-b951652b158c";
                                kind = "culpa";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "et";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-11");
                            kind = "reiciendis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-11-02");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "dolor";
                                etag = "quia";
                                id = "b31cad69-2ffc-4874-9005-e9d3d934e036";
                                kind = "sapiente";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "quo";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "velit";
                                etag = "quas";
                                id = "8664f698-5530-4a2e-aaed-6aaf863c28d0";
                                kind = "incidunt";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eligendi";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "perspiciatis";
                                name = "Marvin Stracke III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ea";
                                name = "Gerardo Swift";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "quam";
                            etag = "vero";
                            id = "c7394f25-f634-4b37-b071-4e6be8c3e09c";
                            kind = "vel";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "quibusdam";
                        }};;
                        metricNames = new String[]{{
                            add("aliquam"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "dolorum";
                    kind = "placeat";
                    lastModifiedTime = "eos";
                    name = "Eduardo Nitzsche";
                    ownerProfileId = "voluptas";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quam";
                                etag = "dolorum";
                                id = "ef13402e-945f-4537-83ef-de1198221f9b";
                                kind = "inventore";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "nihil";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "fugiat";
                                etag = "iste";
                                id = "affe6968-2ace-4efb-84f8-c512caabea70";
                                kind = "blanditiis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "temporibus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "corporis";
                                etag = "odio";
                                id = "98d385d4-6059-49d5-8334-9576d55209e9";
                                kind = "est";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "qui";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "corporis";
                                etag = "neque";
                                id = "b6d76588-6eea-4e5f-94b3-9f8a1490678f";
                                kind = "sunt";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quisquam";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "commodi";
                            kind = "laudantium";
                            name = "Kari Lubowitz";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "saepe";
                                                        ids = new String[]{{
                                                            add("esse"),
                                                        }};
                                                        kind = "enim";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("similique"),
                                                            add("iste"),
                                                            add("consequatur"),
                                                            add("autem"),
                                                        }};
                                                    }};
                                                    kind = "similique";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptates";
                                                        ids = new String[]{{
                                                            add("corporis"),
                                                            add("error"),
                                                        }};
                                                        kind = "soluta";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("debitis"),
                                                        }};
                                                    }};
                                                    kind = "quidem";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vel";
                                                        ids = new String[]{{
                                                            add("magnam"),
                                                            add("vel"),
                                                        }};
                                                        kind = "accusantium";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("doloribus"),
                                                        }};
                                                    }};
                                                    kind = "accusamus";
                                                }}),
                                            }};
                                            kind = "sunt";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "neque";
                                                        ids = new String[]{{
                                                            add("voluptas"),
                                                            add("eligendi"),
                                                        }};
                                                        kind = "explicabo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("at"),
                                                            add("eveniet"),
                                                            add("vero"),
                                                            add("iure"),
                                                        }};
                                                    }};
                                                    kind = "aliquid";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dignissimos";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("recusandae"),
                                                            add("temporibus"),
                                                        }};
                                                        kind = "doloremque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nisi"),
                                                        }};
                                                    }};
                                                    kind = "laborum";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "molestiae";
                                                        ids = new String[]{{
                                                            add("id"),
                                                            add("dolore"),
                                                            add("quam"),
                                                        }};
                                                        kind = "rem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("magnam"),
                                                        }};
                                                    }};
                                                    kind = "ut";
                                                }}),
                                            }};
                                            kind = "totam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellat";
                                                        ids = new String[]{{
                                                            add("dignissimos"),
                                                            add("dignissimos"),
                                                        }};
                                                        kind = "ipsa";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                            add("aliquam"),
                                                            add("praesentium"),
                                                            add("doloremque"),
                                                        }};
                                                    }};
                                                    kind = "occaecati";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "illo";
                                                        ids = new String[]{{
                                                            add("dolores"),
                                                            add("soluta"),
                                                            add("culpa"),
                                                        }};
                                                        kind = "fugit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                            add("commodi"),
                                                            add("minus"),
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "ad";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "id";
                                                        ids = new String[]{{
                                                            add("voluptatum"),
                                                            add("est"),
                                                            add("autem"),
                                                            add("perferendis"),
                                                        }};
                                                        kind = "laborum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eveniet"),
                                                            add("dolor"),
                                                            add("dolore"),
                                                        }};
                                                    }};
                                                    kind = "vel";
                                                }}),
                                            }};
                                            kind = "recusandae";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "iste";
                                                        ids = new String[]{{
                                                            add("cupiditate"),
                                                            add("debitis"),
                                                        }};
                                                        kind = "nemo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("debitis"),
                                                            add("eum"),
                                                            add("consequatur"),
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                    kind = "impedit";
                                                }}),
                                            }};
                                            kind = "culpa";
                                        }}),
                                    }};
                                    kind = "quisquam";
                                    name = "Charlie Haag";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "atque";
                                                        ids = new String[]{{
                                                            add("voluptate"),
                                                            add("ad"),
                                                        }};
                                                        kind = "veniam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("iste"),
                                                            add("porro"),
                                                            add("porro"),
                                                        }};
                                                    }};
                                                    kind = "eveniet";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "autem";
                                                        ids = new String[]{{
                                                            add("voluptates"),
                                                        }};
                                                        kind = "impedit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("odio"),
                                                            add("occaecati"),
                                                            add("officia"),
                                                            add("consectetur"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fuga";
                                                        ids = new String[]{{
                                                            add("ipsam"),
                                                            add("fuga"),
                                                            add("magnam"),
                                                            add("assumenda"),
                                                        }};
                                                        kind = "nemo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nostrum"),
                                                            add("expedita"),
                                                        }};
                                                    }};
                                                    kind = "tempora";
                                                }}),
                                            }};
                                            kind = "fugiat";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "veniam";
                                                        ids = new String[]{{
                                                            add("aspernatur"),
                                                            add("assumenda"),
                                                        }};
                                                        kind = "cupiditate";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("assumenda"),
                                                            add("excepturi"),
                                                        }};
                                                    }};
                                                    kind = "recusandae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eos";
                                                        ids = new String[]{{
                                                            add("iure"),
                                                            add("delectus"),
                                                            add("quod"),
                                                            add("tenetur"),
                                                        }};
                                                        kind = "veniam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("nisi"),
                                                            add("dolores"),
                                                        }};
                                                    }};
                                                    kind = "sint";
                                                }}),
                                            }};
                                            kind = "nulla";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corrupti";
                                                        ids = new String[]{{
                                                            add("ad"),
                                                            add("quisquam"),
                                                        }};
                                                        kind = "sequi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("perspiciatis"),
                                                            add("sit"),
                                                            add("fugit"),
                                                        }};
                                                    }};
                                                    kind = "deleniti";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolores";
                                                        ids = new String[]{{
                                                            add("enim"),
                                                            add("quasi"),
                                                            add("delectus"),
                                                        }};
                                                        kind = "magnam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                            add("iure"),
                                                            add("molestiae"),
                                                            add("iste"),
                                                        }};
                                                    }};
                                                    kind = "iure";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "necessitatibus";
                                                        ids = new String[]{{
                                                            add("dolor"),
                                                            add("repellendus"),
                                                            add("nihil"),
                                                            add("aspernatur"),
                                                        }};
                                                        kind = "numquam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("praesentium"),
                                                        }};
                                                    }};
                                                    kind = "repellat";
                                                }}),
                                            }};
                                            kind = "ad";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "beatae";
                                                        ids = new String[]{{
                                                            add("provident"),
                                                            add("laudantium"),
                                                            add("porro"),
                                                            add("minus"),
                                                        }};
                                                        kind = "officiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("esse"),
                                                            add("sunt"),
                                                            add("autem"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                    kind = "accusantium";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aperiam";
                                                        ids = new String[]{{
                                                            add("culpa"),
                                                            add("doloremque"),
                                                            add("officiis"),
                                                            add("dolor"),
                                                        }};
                                                        kind = "harum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("veritatis"),
                                                            add("optio"),
                                                        }};
                                                    }};
                                                    kind = "ex";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellat";
                                                        ids = new String[]{{
                                                            add("alias"),
                                                            add("sint"),
                                                            add("assumenda"),
                                                            add("totam"),
                                                        }};
                                                        kind = "minima";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("ad"),
                                                            add("adipisci"),
                                                            add("rerum"),
                                                        }};
                                                    }};
                                                    kind = "nesciunt";
                                                }}),
                                            }};
                                            kind = "eos";
                                        }}),
                                    }};
                                    kind = "placeat";
                                    name = "Spencer Kuhn";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quasi";
                                                        ids = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                        kind = "inventore";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ipsum"),
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "perferendis";
                                                        ids = new String[]{{
                                                            add("quisquam"),
                                                            add("expedita"),
                                                        }};
                                                        kind = "labore";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("illum"),
                                                            add("itaque"),
                                                            add("asperiores"),
                                                            add("amet"),
                                                        }};
                                                    }};
                                                    kind = "quod";
                                                }}),
                                            }};
                                            kind = "inventore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "in";
                                                        ids = new String[]{{
                                                            add("ipsum"),
                                                            add("excepturi"),
                                                            add("aperiam"),
                                                            add("molestias"),
                                                        }};
                                                        kind = "iste";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("consequuntur"),
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "dolores";
                                                }}),
                                            }};
                                            kind = "ipsam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "pariatur";
                                                        ids = new String[]{{
                                                            add("nobis"),
                                                            add("soluta"),
                                                            add("eligendi"),
                                                            add("fugiat"),
                                                        }};
                                                        kind = "velit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("magni"),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                }}),
                                            }};
                                            kind = "tempore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quas";
                                                        ids = new String[]{{
                                                            add("beatae"),
                                                            add("officiis"),
                                                            add("saepe"),
                                                            add("minima"),
                                                        }};
                                                        kind = "saepe";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                            add("autem"),
                                                            add("quasi"),
                                                        }};
                                                    }};
                                                    kind = "adipisci";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "excepturi";
                                                        ids = new String[]{{
                                                            add("placeat"),
                                                        }};
                                                        kind = "maxime";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("deserunt"),
                                                            add("aut"),
                                                            add("soluta"),
                                                            add("iusto"),
                                                        }};
                                                    }};
                                                    kind = "repellendus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "beatae";
                                                        ids = new String[]{{
                                                            add("autem"),
                                                            add("ut"),
                                                        }};
                                                        kind = "occaecati";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("facilis"),
                                                            add("perferendis"),
                                                        }};
                                                    }};
                                                    kind = "cumque";
                                                }}),
                                            }};
                                            kind = "doloribus";
                                        }}),
                                    }};
                                    kind = "minima";
                                    name = "Reginald Rutherford";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "similique";
                                                        ids = new String[]{{
                                                            add("debitis"),
                                                            add("quis"),
                                                            add("accusamus"),
                                                        }};
                                                        kind = "doloremque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("cupiditate"),
                                                            add("tenetur"),
                                                            add("velit"),
                                                        }};
                                                    }};
                                                    kind = "nobis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "illo";
                                                        ids = new String[]{{
                                                            add("enim"),
                                                        }};
                                                        kind = "quas";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("deserunt"),
                                                            add("corrupti"),
                                                        }};
                                                    }};
                                                    kind = "reprehenderit";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nam";
                                                        ids = new String[]{{
                                                            add("odio"),
                                                            add("est"),
                                                            add("voluptates"),
                                                        }};
                                                        kind = "minus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ullam"),
                                                            add("eum"),
                                                            add("iste"),
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "voluptate";
                                                }}),
                                            }};
                                            kind = "alias";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "expedita";
                                                        ids = new String[]{{
                                                            add("suscipit"),
                                                        }};
                                                        kind = "cupiditate";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    kind = "maiores";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "provident";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                            add("incidunt"),
                                                            add("incidunt"),
                                                        }};
                                                        kind = "vitae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("explicabo"),
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                    kind = "sint";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatibus";
                                                        ids = new String[]{{
                                                            add("quasi"),
                                                        }};
                                                        kind = "sapiente";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("eos"),
                                                        }};
                                                    }};
                                                    kind = "cumque";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vel";
                                                        ids = new String[]{{
                                                            add("quidem"),
                                                        }};
                                                        kind = "debitis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                    kind = "distinctio";
                                                }}),
                                            }};
                                            kind = "dolorum";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nulla";
                                                        ids = new String[]{{
                                                            add("corporis"),
                                                            add("neque"),
                                                            add("eos"),
                                                            add("nam"),
                                                        }};
                                                        kind = "ea";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                    kind = "reiciendis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "praesentium";
                                                        ids = new String[]{{
                                                            add("explicabo"),
                                                            add("quos"),
                                                        }};
                                                        kind = "corporis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eveniet"),
                                                            add("eos"),
                                                            add("laudantium"),
                                                            add("enim"),
                                                        }};
                                                    }};
                                                    kind = "provident";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "maxime";
                                                        ids = new String[]{{
                                                            add("non"),
                                                            add("magni"),
                                                            add("consequuntur"),
                                                            add("quia"),
                                                        }};
                                                        kind = "ratione";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("earum"),
                                                            add("commodi"),
                                                            add("nisi"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                    kind = "dolore";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eligendi";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("pariatur"),
                                                        }};
                                                        kind = "magni";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("est"),
                                                            add("ad"),
                                                            add("quod"),
                                                        }};
                                                    }};
                                                    kind = "rerum";
                                                }}),
                                            }};
                                            kind = "culpa";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eum";
                                                        ids = new String[]{{
                                                            add("tempore"),
                                                            add("corrupti"),
                                                            add("at"),
                                                        }};
                                                        kind = "fugit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("libero"),
                                                        }};
                                                    }};
                                                    kind = "recusandae";
                                                }}),
                                            }};
                                            kind = "libero";
                                        }}),
                                    }};
                                    kind = "blanditiis";
                                    name = "Deborah O'Reilly";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-12-01");
                            kind = "molestiae";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YEAR_TO_DATE;
                            startDate = LocalDate.parse("2022-06-03");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "unde";
                                name = "Taylor Shanahan";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "earum";
                                name = "Miss Pam Herzog";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "molestiae";
                            etag = "a";
                            id = "08f39271-076a-424b-80c8-f08bff1081e8";
                            kind = "praesentium";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "blanditiis";
                        }};;
                        metricNames = new String[]{{
                            add("occaecati"),
                            add("natus"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "totam";
                                            ids = new String[]{{
                                                add("odit"),
                                                add("eos"),
                                                add("libero"),
                                                add("eveniet"),
                                            }};
                                            kind = "aut";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("maxime"),
                                            }};
                                        }};
                                        kind = "tenetur";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolore";
                                            ids = new String[]{{
                                                add("blanditiis"),
                                                add("sint"),
                                            }};
                                            kind = "dolorem";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("fugit"),
                                                add("neque"),
                                                add("asperiores"),
                                                add("corrupti"),
                                            }};
                                        }};
                                        kind = "autem";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "autem";
                                            ids = new String[]{{
                                                add("eaque"),
                                            }};
                                            kind = "minus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("porro"),
                                            }};
                                        }};
                                        kind = "nihil";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "voluptatum";
                                            ids = new String[]{{
                                                add("aliquam"),
                                            }};
                                            kind = "magni";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("impedit"),
                                            }};
                                        }};
                                        kind = "est";
                                    }}),
                                }};
                                kind = "est";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quae";
                                            ids = new String[]{{
                                                add("tempore"),
                                                add("nesciunt"),
                                                add("atque"),
                                            }};
                                            kind = "maiores";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("ea"),
                                                add("inventore"),
                                                add("est"),
                                            }};
                                        }};
                                        kind = "non";
                                    }}),
                                }};
                                kind = "ratione";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ipsam";
                                etag = "modi";
                                id = "dc10294f-92fe-4d93-9ba8-f71e2992c20e";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "odit";
                                etag = "quas";
                                id = "ac3adc64-7d24-40bc-91ea-482824ccc6a2";
                                kind = "voluptatibus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "reiciendis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nostrum";
                                etag = "libero";
                                id = "9d3cb11a-7687-4d31-80e8-e2b9b0d746d2";
                                kind = "dolorum";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "quisquam";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "molestiae";
                            kind = "fugiat";
                            name = "Dr. Raquel Pagac";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sint";
                                                        ids = new String[]{{
                                                            add("distinctio"),
                                                            add("earum"),
                                                            add("veniam"),
                                                        }};
                                                        kind = "maiores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("sint"),
                                                            add("hic"),
                                                        }};
                                                    }};
                                                    kind = "vel";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corporis";
                                                        ids = new String[]{{
                                                            add("libero"),
                                                        }};
                                                        kind = "quasi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("aut"),
                                                            add("ducimus"),
                                                        }};
                                                    }};
                                                    kind = "repudiandae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ducimus";
                                                        ids = new String[]{{
                                                            add("dolore"),
                                                            add("neque"),
                                                            add("molestias"),
                                                            add("ea"),
                                                        }};
                                                        kind = "odio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("soluta"),
                                                        }};
                                                    }};
                                                    kind = "similique";
                                                }}),
                                            }};
                                            kind = "quo";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "accusamus";
                                                        ids = new String[]{{
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "qui";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quibusdam"),
                                                            add("ex"),
                                                            add("et"),
                                                        }};
                                                    }};
                                                    kind = "cupiditate";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dicta";
                                                        ids = new String[]{{
                                                            add("facere"),
                                                            add("magni"),
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "omnis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("alias"),
                                                        }};
                                                    }};
                                                    kind = "maxime";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vitae";
                                                        ids = new String[]{{
                                                            add("ipsam"),
                                                            add("ab"),
                                                            add("aliquid"),
                                                        }};
                                                        kind = "doloribus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("praesentium"),
                                                            add("rerum"),
                                                        }};
                                                    }};
                                                    kind = "repudiandae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fugit";
                                                        ids = new String[]{{
                                                            add("fugit"),
                                                            add("ab"),
                                                        }};
                                                        kind = "quia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ea"),
                                                        }};
                                                    }};
                                                    kind = "odit";
                                                }}),
                                            }};
                                            kind = "quos";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "officia";
                                                        ids = new String[]{{
                                                            add("ipsa"),
                                                            add("ratione"),
                                                        }};
                                                        kind = "natus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "eum";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "esse";
                                                        ids = new String[]{{
                                                            add("esse"),
                                                            add("aspernatur"),
                                                            add("nam"),
                                                            add("neque"),
                                                        }};
                                                        kind = "laborum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                    kind = "labore";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rerum";
                                                        ids = new String[]{{
                                                            add("minima"),
                                                        }};
                                                        kind = "molestiae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("libero"),
                                                            add("nobis"),
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                    kind = "recusandae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellat";
                                                        ids = new String[]{{
                                                            add("aspernatur"),
                                                            add("similique"),
                                                        }};
                                                        kind = "ad";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("molestiae"),
                                                            add("sunt"),
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "unde";
                                                }}),
                                            }};
                                            kind = "provident";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptas";
                                                        ids = new String[]{{
                                                            add("et"),
                                                            add("officia"),
                                                        }};
                                                        kind = "ducimus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                            add("illo"),
                                                            add("commodi"),
                                                            add("voluptatum"),
                                                        }};
                                                    }};
                                                    kind = "nam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vel";
                                                        ids = new String[]{{
                                                            add("optio"),
                                                            add("facilis"),
                                                            add("sed"),
                                                            add("deleniti"),
                                                        }};
                                                        kind = "dolores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("modi"),
                                                            add("dolorum"),
                                                            add("perspiciatis"),
                                                        }};
                                                    }};
                                                    kind = "totam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ipsam";
                                                        ids = new String[]{{
                                                            add("repudiandae"),
                                                        }};
                                                        kind = "fugiat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dolore"),
                                                            add("est"),
                                                            add("veritatis"),
                                                            add("itaque"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                            }};
                                            kind = "eligendi";
                                        }}),
                                    }};
                                    kind = "numquam";
                                    name = "Grady Herman I";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptate";
                                                        ids = new String[]{{
                                                            add("esse"),
                                                            add("dolores"),
                                                        }};
                                                        kind = "laboriosam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                        }};
                                                    }};
                                                    kind = "nesciunt";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "porro";
                                                        ids = new String[]{{
                                                            add("asperiores"),
                                                        }};
                                                        kind = "aut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("aliquam"),
                                                            add("architecto"),
                                                            add("excepturi"),
                                                        }};
                                                    }};
                                                    kind = "sed";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "enim";
                                                        ids = new String[]{{
                                                            add("atque"),
                                                        }};
                                                        kind = "cumque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("dicta"),
                                                            add("quo"),
                                                            add("natus"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "natus";
                                                        ids = new String[]{{
                                                            add("ut"),
                                                            add("nisi"),
                                                            add("provident"),
                                                            add("delectus"),
                                                        }};
                                                        kind = "eum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("quod"),
                                                        }};
                                                    }};
                                                    kind = "sapiente";
                                                }}),
                                            }};
                                            kind = "quasi";
                                        }}),
                                    }};
                                    kind = "dolorum";
                                    name = "Elsa Beier";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "autem";
                                                        ids = new String[]{{
                                                            add("itaque"),
                                                            add("laboriosam"),
                                                            add("harum"),
                                                        }};
                                                        kind = "commodi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatem"),
                                                            add("ab"),
                                                        }};
                                                    }};
                                                    kind = "sunt";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vero";
                                                        ids = new String[]{{
                                                            add("id"),
                                                            add("consequatur"),
                                                            add("quis"),
                                                        }};
                                                        kind = "iusto";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("rem"),
                                                            add("placeat"),
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                    kind = "in";
                                                }}),
                                            }};
                                            kind = "odit";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "impedit";
                                                        ids = new String[]{{
                                                            add("illo"),
                                                        }};
                                                        kind = "aperiam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quae"),
                                                            add("officia"),
                                                            add("ut"),
                                                            add("alias"),
                                                        }};
                                                    }};
                                                    kind = "eligendi";
                                                }}),
                                            }};
                                            kind = "doloremque";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "amet";
                                                        ids = new String[]{{
                                                            add("quo"),
                                                            add("deleniti"),
                                                            add("aliquid"),
                                                            add("blanditiis"),
                                                        }};
                                                        kind = "blanditiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("blanditiis"),
                                                            add("debitis"),
                                                            add("nobis"),
                                                            add("vel"),
                                                        }};
                                                    }};
                                                    kind = "tenetur";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "optio";
                                                        ids = new String[]{{
                                                            add("consectetur"),
                                                        }};
                                                        kind = "illo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatibus"),
                                                            add("alias"),
                                                            add("officia"),
                                                        }};
                                                    }};
                                                    kind = "mollitia";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "animi";
                                                        ids = new String[]{{
                                                            add("vero"),
                                                            add("repudiandae"),
                                                            add("sit"),
                                                            add("aut"),
                                                        }};
                                                        kind = "labore";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("dolorum"),
                                                            add("voluptate"),
                                                            add("soluta"),
                                                        }};
                                                    }};
                                                    kind = "hic";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quos";
                                                        ids = new String[]{{
                                                            add("neque"),
                                                            add("explicabo"),
                                                        }};
                                                        kind = "harum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("alias"),
                                                            add("provident"),
                                                        }};
                                                    }};
                                                    kind = "optio";
                                                }}),
                                            }};
                                            kind = "exercitationem";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "atque";
                                                        ids = new String[]{{
                                                            add("sunt"),
                                                            add("neque"),
                                                        }};
                                                        kind = "quae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                    kind = "maiores";
                                                }}),
                                            }};
                                            kind = "voluptatem";
                                        }}),
                                    }};
                                    kind = "tempore";
                                    name = "Noah Halvorson";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-03-11");
                            kind = "voluptatum";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_MONTH;
                            startDate = LocalDate.parse("2022-09-26");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quisquam";
                                name = "Mrs. Darryl Morar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ducimus";
                            etag = "sint";
                            id = "7a5da664-b7e7-478a-b4ba-aa2832bb6586";
                            kind = "fugit";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "odit";
                        }};;
                        metricNames = new String[]{{
                            add("velit"),
                            add("veritatis"),
                            add("doloribus"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "veritatis";
                                            ids = new String[]{{
                                                add("deserunt"),
                                                add("deserunt"),
                                            }};
                                            kind = "nisi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("debitis"),
                                                add("quo"),
                                                add("reprehenderit"),
                                                add("repellat"),
                                            }};
                                        }};
                                        kind = "eius";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "magnam";
                                            ids = new String[]{{
                                                add("dolores"),
                                                add("ratione"),
                                            }};
                                            kind = "qui";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("mollitia"),
                                                add("veniam"),
                                                add("at"),
                                            }};
                                        }};
                                        kind = "eveniet";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "debitis";
                                            ids = new String[]{{
                                                add("laborum"),
                                            }};
                                            kind = "cumque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sed"),
                                                add("officia"),
                                            }};
                                        }};
                                        kind = "voluptatum";
                                    }}),
                                }};
                                kind = "cupiditate";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ab";
                                            ids = new String[]{{
                                                add("quis"),
                                                add("corrupti"),
                                                add("tenetur"),
                                            }};
                                            kind = "repudiandae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("magni"),
                                                add("repudiandae"),
                                                add("sunt"),
                                            }};
                                        }};
                                        kind = "maxime";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "aspernatur";
                                            ids = new String[]{{
                                                add("facilis"),
                                                add("necessitatibus"),
                                                add("sed"),
                                                add("nesciunt"),
                                            }};
                                            kind = "pariatur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("necessitatibus"),
                                                add("deleniti"),
                                                add("sed"),
                                            }};
                                        }};
                                        kind = "magnam";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dignissimos";
                                            ids = new String[]{{
                                                add("beatae"),
                                                add("consequuntur"),
                                                add("sed"),
                                                add("minus"),
                                            }};
                                            kind = "provident";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("iusto"),
                                                add("vel"),
                                            }};
                                        }};
                                        kind = "nihil";
                                    }}),
                                }};
                                kind = "praesentium";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolores";
                                            ids = new String[]{{
                                                add("occaecati"),
                                                add("nostrum"),
                                            }};
                                            kind = "atque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("quam"),
                                                add("dolor"),
                                            }};
                                        }};
                                        kind = "voluptas";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolor";
                                            ids = new String[]{{
                                                add("est"),
                                                add("aut"),
                                                add("iusto"),
                                                add("excepturi"),
                                            }};
                                            kind = "doloremque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("doloribus"),
                                                add("deserunt"),
                                            }};
                                        }};
                                        kind = "officiis";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "nam";
                                            ids = new String[]{{
                                                add("ex"),
                                                add("labore"),
                                                add("atque"),
                                            }};
                                            kind = "consequatur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("voluptatem"),
                                            }};
                                        }};
                                        kind = "illum";
                                    }}),
                                }};
                                kind = "laudantium";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
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
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sint";
                                name = "Annie Lesch PhD";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "praesentium";
                                name = "Dr. Yvette Haley";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "possimus";
                                name = "Linda Rice";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "non";
                                name = "Misty Bailey";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eaque";
                                name = "Annette Hackett";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "unde";
                                name = "Bertha Fisher";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "aspernatur";
                                etag = "possimus";
                                id = "6bc9917f-98e4-4792-b979-a413d6a8c916";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quidem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "at";
                                etag = "rem";
                                id = "61d0d98c-cf89-4d38-a118-6ed76c002fac";
                                kind = "harum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "nesciunt";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-05-19");
                            kind = "sed";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.QUARTER_TO_DATE;
                            startDate = LocalDate.parse("2021-05-02");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ab";
                            etag = "quaerat";
                            id = "3b866c57-5a1e-4266-8730-be37b0e8fbc4";
                            kind = "atque";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "temporibus";
                        }};;
                        metricNames = new String[]{{
                            add("esse"),
                            add("officiis"),
                            add("voluptas"),
                            add("excepturi"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ipsam";
                                name = "Mrs. Erica Blanda II";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dicta";
                                name = "Ginger Sawayn Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "atque";
                                name = "Aaron Hahn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 233222;
                            impressionsLookbackWindow = 413054;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 890437;
                            maximumImpressionInteractions = 596865;
                            maximumInteractionGap = 282394;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "corrupti";
                                    etag = "occaecati";
                                    id = "2782d34e-0b8f-4c0d-99f5-7b9f9820be07";
                                    kind = "deleniti";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "maxime";
                                    etag = "nesciunt";
                                    id = "6c9e2f70-344e-400f-878e-b539483f748e";
                                    kind = "necessitatibus";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "impedit";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "quisquam";
                                    etag = "distinctio";
                                    id = "69d541b4-b393-4f35-a662-5bea32201dec";
                                    kind = "sequi";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "sint";
                                }}),
                            }};
                            kind = "optio";
                            metricNames = new String[]{{
                                add("error"),
                                add("quas"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "officia";
                                    etag = "illo";
                                    id = "d48c5c2f-9e21-4d90-bd53-776bfc7677f0";
                                    kind = "doloribus";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "doloremque";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "eius";
                                    etag = "mollitia";
                                    id = "6e4828fb-6dae-4e19-826c-0cb618c6331c";
                                    kind = "est";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "at";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "deserunt";
                                    etag = "rerum";
                                    id = "767a444d-d0da-40ab-a58e-b3d54ba1cb3a";
                                    kind = "quibusdam";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "sint";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "expedita";
                                    etag = "molestias";
                                    id = "e5c18b25-e87f-4648-a325-5be95c0cbcb2";
                                    kind = "quod";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "laudantium";
                                }}),
                            }};
                            kind = "iusto";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-16");
                            kind = "quos";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST24_MONTHS;
                            startDate = LocalDate.parse("2022-10-12");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "aut";
                                etag = "iste";
                                id = "a02f06e9-228b-4560-a5a5-074befb8af68";
                                kind = "ut";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "possimus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "odit";
                                etag = "harum";
                                id = "99404363-a096-44c0-9387-6e39def9c765";
                                kind = "temporibus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "fugiat";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "iusto";
                                etag = "ipsum";
                                id = "54e5cb94-9770-417a-a620-4bb26ca4e999";
                                kind = "quos";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "voluptatum";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iste";
                                name = "Doyle Witting MD";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "velit";
                                name = "Andre Abernathy";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("aut"),
                            add("laborum"),
                            add("facere"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("atque"),
                            add("unde"),
                            add("recusandae"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 102412;
                        expirationDate = LocalDate.parse("2022-07-13");
                        repeats = "tempora";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2020-07-17");
                        timezone = "laborum";
                    }};;
                    subAccountId = "voluptatem";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "eius";
                alt = AltEnum.PROTO;
                callback = "officia";
                fields = "deserunt";
                key = "saepe";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "saepe";
                uploadProtocol = "dicta";
            }};            

            DfareportingReportsCompatibleFieldsQueryResponse res = sdk.reports.dfareportingReportsCompatibleFieldsQuery(req, new DfareportingReportsCompatibleFieldsQuerySecurity("sequi", "mollitia") {{
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

            DfareportingReportsDeleteRequest req = new DfareportingReportsDeleteRequest("aliquid", "consequuntur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "saepe";
                alt = AltEnum.JSON;
                callback = "accusamus";
                fields = "cupiditate";
                key = "illo";
                oauthToken = "totam";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "iure";
                uploadProtocol = "quis";
            }};            

            DfareportingReportsDeleteResponse res = sdk.reports.dfareportingReportsDelete(req, new DfareportingReportsDeleteSecurity("distinctio", "alias") {{
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

            DfareportingReportsFilesGetRequest req = new DfareportingReportsFilesGetRequest("modi", "rem", "commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "laudantium";
                key = "fuga";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "nesciunt";
                uploadProtocol = "in";
            }};            

            DfareportingReportsFilesGetResponse res = sdk.reports.dfareportingReportsFilesGet(req, new DfareportingReportsFilesGetSecurity("eius", "eum") {{
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

            DfareportingReportsFilesListRequest req = new DfareportingReportsFilesListRequest("beatae", "nihil") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nulla";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "minus";
                key = "officiis";
                maxResults = 218634L;
                oauthToken = "doloremque";
                pageToken = "ut";
                prettyPrint = false;
                quotaUser = "numquam";
                sortField = DfareportingReportsFilesListSortFieldEnum.LAST_MODIFIED_TIME;
                sortOrder = DfareportingReportsFilesListSortOrderEnum.DESCENDING;
                uploadType = "eius";
                uploadProtocol = "itaque";
            }};            

            DfareportingReportsFilesListResponse res = sdk.reports.dfareportingReportsFilesList(req, new DfareportingReportsFilesListSecurity("expedita", "neque") {{
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

            DfareportingReportsGetRequest req = new DfareportingReportsGetRequest("cum", "ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "corporis";
                fields = "voluptatem";
                key = "neque";
                oauthToken = "quo";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "et";
                uploadProtocol = "aliquam";
            }};            

            DfareportingReportsGetResponse res = sdk.reports.dfareportingReportsGet(req, new DfareportingReportsGetSecurity("aperiam", "repellendus") {{
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
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.ChannelGroupingRule;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathReportDimensionValue;
import org.openapis.openapi.models.shared.PathReportDimensionValueMatchTypeEnum;
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
import org.openapis.openapi.models.shared.ReportPathAttributionCriteria;
import org.openapis.openapi.models.shared.ReportPathCriteria;
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

            DfareportingReportsInsertRequest req = new DfareportingReportsInsertRequest("deleniti") {{
                dollarXgafv = XgafvEnum.ONE;
                report = new Report() {{
                    accountId = "iusto";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "cumque";
                                    etag = "ipsam";
                                    id = "35e1dd6b-f64b-4454-a983-1e795f0e57f5";
                                    kind = "eius";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "nam";
                                }}),
                            }};
                            kind = "delectus";
                            metricNames = new String[]{{
                                add("pariatur"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "tempore";
                                    etag = "dolore";
                                    id = "6097efa4-4a8d-4ff4-8cdd-1850bf5a0cbc";
                                    kind = "quas";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "quam";
                                }}),
                            }};
                            kind = "blanditiis";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-12");
                            kind = "similique";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST60_DAYS;
                            startDate = LocalDate.parse("2021-02-11");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nobis";
                                etag = "laboriosam";
                                id = "35132d53-086c-410a-856a-19d4665ba972";
                                kind = "ipsam";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "molestias";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "reprehenderit";
                                etag = "corporis";
                                id = "dc0cecbc-78bd-4248-ac6e-8b240b1c06c9";
                                kind = "optio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "commodi";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "omnis";
                                name = "Jeremy Rau";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "necessitatibus";
                                name = "Margie Stiedemann";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("voluptas"),
                            add("nemo"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nesciunt";
                                name = "Bonnie Runolfsdottir";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ullam";
                                name = "Teri Hagenes";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quod";
                                name = "Marlene Jacobi";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "nulla";
                                name = "Jared Lynch";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-18");
                            kind = "soluta";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST60_DAYS;
                            startDate = LocalDate.parse("2021-06-11");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ab";
                                etag = "quos";
                                id = "41fe1f87-ea10-43a9-806e-a1606399ef17";
                                kind = "cum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "sunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "reprehenderit";
                                etag = "ullam";
                                id = "8d4ab5bc-80de-4a77-bd99-31ec9d106cff";
                                kind = "magni";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "dolores";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("culpa"),
                            add("distinctio"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("dolore"),
                            add("doloremque"),
                            add("animi"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "totam";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Harrison84@gmail.com";
                                kind = "autem";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Cordelia28@yahoo.com";
                                kind = "maxime";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Darrell_Gottlieb72@gmail.com";
                                kind = "adipisci";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Larry56@gmail.com";
                                kind = "reiciendis";
                            }}),
                        }};
                    }};;
                    etag = "qui";
                    fileName = "quis";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "perferendis";
                                etag = "nihil";
                                id = "8a18a4b0-daed-44b5-8f06-16ee9227575b";
                                kind = "nulla";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "doloremque";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-01-30");
                            kind = "est";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-10-23");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "unde";
                                etag = "placeat";
                                id = "d1ccdd36-2bbf-4923-9001-5f26899cf4ff";
                                kind = "accusamus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "excepturi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "expedita";
                                etag = "officiis";
                                id = "c50318a8-1eb0-41d2-97f7-b456a855e508";
                                kind = "quos";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "praesentium";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ratione";
                                name = "Jessie Ebert MD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eligendi";
                                name = "Myron Nicolas";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "facere";
                                name = "Brandi Lesch";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "minus";
                            etag = "dicta";
                            id = "b32bb213-e3b3-41cd-aa5b-e74906b96c63";
                            kind = "vel";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "voluptate";
                        }};;
                        metricNames = new String[]{{
                            add("repellendus"),
                            add("fugit"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "culpa";
                    kind = "quaerat";
                    lastModifiedTime = "rem";
                    name = "Jamie Marks MD";
                    ownerProfileId = "rem";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "veritatis";
                                etag = "dicta";
                                id = "98640587-6b30-4871-93de-4061082d0953";
                                kind = "placeat";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "sint";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nobis";
                                etag = "temporibus";
                                id = "927a5ba5-511b-4b83-b0d9-784fb1464733";
                                kind = "architecto";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "quod";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "minima";
                            kind = "rerum";
                            name = "Sam Boehm";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "beatae";
                                                        ids = new String[]{{
                                                            add("dolores"),
                                                            add("voluptatum"),
                                                        }};
                                                        kind = "reprehenderit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("non"),
                                                            add("in"),
                                                            add("odio"),
                                                            add("placeat"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "possimus";
                                                        ids = new String[]{{
                                                            add("consectetur"),
                                                            add("occaecati"),
                                                        }};
                                                        kind = "voluptates";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("harum"),
                                                            add("assumenda"),
                                                        }};
                                                    }};
                                                    kind = "fugit";
                                                }}),
                                            }};
                                            kind = "placeat";
                                        }}),
                                    }};
                                    kind = "officia";
                                    name = "John Beatty";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "minus";
                                                        ids = new String[]{{
                                                            add("accusamus"),
                                                            add("soluta"),
                                                        }};
                                                        kind = "distinctio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("iste"),
                                                            add("itaque"),
                                                            add("provident"),
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "aliquam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "incidunt";
                                                        ids = new String[]{{
                                                            add("ipsam"),
                                                            add("quidem"),
                                                            add("eum"),
                                                            add("numquam"),
                                                        }};
                                                        kind = "enim";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("est"),
                                                            add("maiores"),
                                                        }};
                                                    }};
                                                    kind = "quia";
                                                }}),
                                            }};
                                            kind = "asperiores";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "deserunt";
                                                        ids = new String[]{{
                                                            add("placeat"),
                                                            add("quisquam"),
                                                            add("nam"),
                                                        }};
                                                        kind = "quo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("fugit"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aspernatur";
                                                        ids = new String[]{{
                                                            add("officiis"),
                                                            add("cum"),
                                                        }};
                                                        kind = "aut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("autem"),
                                                            add("maxime"),
                                                            add("est"),
                                                        }};
                                                    }};
                                                    kind = "distinctio";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "officiis";
                                                        ids = new String[]{{
                                                            add("explicabo"),
                                                        }};
                                                        kind = "officia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("asperiores"),
                                                        }};
                                                    }};
                                                    kind = "quam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "iusto";
                                                        ids = new String[]{{
                                                            add("nihil"),
                                                            add("ipsam"),
                                                            add("quibusdam"),
                                                        }};
                                                        kind = "totam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                            add("quaerat"),
                                                            add("quis"),
                                                            add("dolores"),
                                                        }};
                                                    }};
                                                    kind = "harum";
                                                }}),
                                            }};
                                            kind = "eveniet";
                                        }}),
                                    }};
                                    kind = "fugiat";
                                    name = "Dr. Juanita Kunze";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "minus";
                                                        ids = new String[]{{
                                                            add("quas"),
                                                        }};
                                                        kind = "dolores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nihil"),
                                                            add("beatae"),
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                    kind = "porro";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fugit";
                                                        ids = new String[]{{
                                                            add("doloribus"),
                                                            add("aliquid"),
                                                        }};
                                                        kind = "libero";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("minima"),
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    kind = "atque";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "alias";
                                                        ids = new String[]{{
                                                            add("voluptatem"),
                                                        }};
                                                        kind = "incidunt";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("aperiam"),
                                                            add("error"),
                                                        }};
                                                    }};
                                                    kind = "impedit";
                                                }}),
                                            }};
                                            kind = "magni";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "magnam";
                                                        ids = new String[]{{
                                                            add("temporibus"),
                                                            add("corrupti"),
                                                            add("eos"),
                                                        }};
                                                        kind = "exercitationem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("nulla"),
                                                            add("eveniet"),
                                                            add("velit"),
                                                            add("molestiae"),
                                                        }};
                                                    }};
                                                    kind = "molestiae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolores";
                                                        ids = new String[]{{
                                                            add("consectetur"),
                                                            add("exercitationem"),
                                                        }};
                                                        kind = "aut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("deleniti"),
                                                            add("nemo"),
                                                            add("dolorum"),
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "delectus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rem";
                                                        ids = new String[]{{
                                                            add("minus"),
                                                            add("consequuntur"),
                                                            add("iste"),
                                                            add("veritatis"),
                                                        }};
                                                        kind = "ab";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quidem"),
                                                            add("esse"),
                                                        }};
                                                    }};
                                                    kind = "debitis";
                                                }}),
                                            }};
                                            kind = "distinctio";
                                        }}),
                                    }};
                                    kind = "fugiat";
                                    name = "Ms. Leslie Abshire";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "temporibus";
                                                        ids = new String[]{{
                                                            add("adipisci"),
                                                            add("atque"),
                                                            add("veniam"),
                                                            add("sed"),
                                                        }};
                                                        kind = "consectetur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("animi"),
                                                            add("magnam"),
                                                            add("officiis"),
                                                            add("soluta"),
                                                        }};
                                                    }};
                                                    kind = "distinctio";
                                                }}),
                                            }};
                                            kind = "iste";
                                        }}),
                                    }};
                                    kind = "asperiores";
                                    name = "Dwight Donnelly";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-03-02");
                            kind = "asperiores";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-12-23");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "numquam";
                                name = "Candace Becker";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fugit";
                                name = "Eduardo Schmidt";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ipsam";
                                name = "Toby Turner";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "libero";
                                name = "Tommie Price";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "commodi";
                            etag = "aperiam";
                            id = "15f216aa-0407-407f-a739-8247a87217fe";
                            kind = "illum";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "commodi";
                        }};;
                        metricNames = new String[]{{
                            add("possimus"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "debitis";
                                            ids = new String[]{{
                                                add("recusandae"),
                                                add("dignissimos"),
                                                add("porro"),
                                                add("consectetur"),
                                            }};
                                            kind = "molestias";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("in"),
                                                add("natus"),
                                                add("in"),
                                                add("consequatur"),
                                            }};
                                        }};
                                        kind = "officiis";
                                    }}),
                                }};
                                kind = "dicta";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "culpa";
                                            ids = new String[]{{
                                                add("temporibus"),
                                                add("quidem"),
                                                add("impedit"),
                                            }};
                                            kind = "earum";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("et"),
                                                add("perspiciatis"),
                                                add("cum"),
                                                add("excepturi"),
                                            }};
                                        }};
                                        kind = "aperiam";
                                    }}),
                                }};
                                kind = "ab";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ut";
                                            ids = new String[]{{
                                                add("modi"),
                                                add("repudiandae"),
                                            }};
                                            kind = "explicabo";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("quidem"),
                                            }};
                                        }};
                                        kind = "deserunt";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "vitae";
                                            ids = new String[]{{
                                                add("dignissimos"),
                                                add("in"),
                                            }};
                                            kind = "sed";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("eveniet"),
                                                add("iste"),
                                                add("ullam"),
                                                add("voluptatibus"),
                                            }};
                                        }};
                                        kind = "esse";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odit";
                                            ids = new String[]{{
                                                add("fugiat"),
                                                add("fuga"),
                                                add("tempore"),
                                            }};
                                            kind = "hic";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("perferendis"),
                                                add("eaque"),
                                                add("tempore"),
                                            }};
                                        }};
                                        kind = "eaque";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quasi";
                                            ids = new String[]{{
                                                add("placeat"),
                                                add("tempore"),
                                                add("quod"),
                                            }};
                                            kind = "aperiam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("delectus"),
                                            }};
                                        }};
                                        kind = "fugit";
                                    }}),
                                }};
                                kind = "minus";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quibusdam";
                                            ids = new String[]{{
                                                add("asperiores"),
                                                add("nihil"),
                                                add("architecto"),
                                            }};
                                            kind = "et";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("molestias"),
                                                add("commodi"),
                                                add("assumenda"),
                                            }};
                                        }};
                                        kind = "maiores";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quia";
                                            ids = new String[]{{
                                                add("ullam"),
                                            }};
                                            kind = "consequuntur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("consectetur"),
                                                add("odio"),
                                                add("beatae"),
                                                add("sequi"),
                                            }};
                                        }};
                                        kind = "autem";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quaerat";
                                            ids = new String[]{{
                                                add("illo"),
                                            }};
                                            kind = "reprehenderit";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("repudiandae"),
                                                add("ad"),
                                            }};
                                        }};
                                        kind = "excepturi";
                                    }}),
                                }};
                                kind = "suscipit";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "dolore";
                                etag = "dicta";
                                id = "b9e2053a-e8c3-4153-a5b5-e02294725d88";
                                kind = "sunt";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "atque";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "illum";
                                etag = "animi";
                                id = "ce6dd2a0-991b-46d1-b600-43c799a2a18d";
                                kind = "distinctio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "sunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "excepturi";
                                etag = "assumenda";
                                id = "c524abb7-b10c-4af2-84de-103d0830ac4d";
                                kind = "doloremque";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aut";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "minus";
                            kind = "aliquam";
                            name = "Chad Mante";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "placeat";
                                                        ids = new String[]{{
                                                            add("porro"),
                                                            add("impedit"),
                                                        }};
                                                        kind = "distinctio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dolor"),
                                                            add("nihil"),
                                                        }};
                                                    }};
                                                    kind = "ipsum";
                                                }}),
                                            }};
                                            kind = "dolorem";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "incidunt";
                                                        ids = new String[]{{
                                                            add("fuga"),
                                                            add("quibusdam"),
                                                            add("minima"),
                                                            add("quas"),
                                                        }};
                                                        kind = "nam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("alias"),
                                                            add("ullam"),
                                                            add("numquam"),
                                                        }};
                                                    }};
                                                    kind = "magni";
                                                }}),
                                            }};
                                            kind = "officiis";
                                        }}),
                                    }};
                                    kind = "ad";
                                    name = "Herman Harber Jr.";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "deleniti";
                                                        ids = new String[]{{
                                                            add("maxime"),
                                                            add("eaque"),
                                                            add("tenetur"),
                                                        }};
                                                        kind = "non";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("maiores"),
                                                        }};
                                                    }};
                                                    kind = "occaecati";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "accusamus";
                                                        ids = new String[]{{
                                                            add("laborum"),
                                                            add("nemo"),
                                                            add("neque"),
                                                        }};
                                                        kind = "optio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("non"),
                                                        }};
                                                    }};
                                                    kind = "assumenda";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolorum";
                                                        ids = new String[]{{
                                                            add("sunt"),
                                                            add("qui"),
                                                            add("consequuntur"),
                                                            add("hic"),
                                                        }};
                                                        kind = "ipsa";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("debitis"),
                                                            add("quo"),
                                                            add("minus"),
                                                            add("quaerat"),
                                                        }};
                                                    }};
                                                    kind = "ab";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cupiditate";
                                                        ids = new String[]{{
                                                            add("sed"),
                                                        }};
                                                        kind = "illum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "expedita";
                                                }}),
                                            }};
                                            kind = "dolorem";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eveniet";
                                                        ids = new String[]{{
                                                            add("eaque"),
                                                            add("sint"),
                                                        }};
                                                        kind = "ipsum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("provident"),
                                                            add("recusandae"),
                                                            add("harum"),
                                                            add("nobis"),
                                                        }};
                                                    }};
                                                    kind = "laboriosam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "est";
                                                        ids = new String[]{{
                                                            add("voluptatum"),
                                                        }};
                                                        kind = "hic";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("iure"),
                                                            add("ab"),
                                                            add("cum"),
                                                            add("ipsa"),
                                                        }};
                                                    }};
                                                    kind = "laboriosam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nemo";
                                                        ids = new String[]{{
                                                            add("earum"),
                                                        }};
                                                        kind = "accusamus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("amet"),
                                                            add("vel"),
                                                        }};
                                                    }};
                                                    kind = "voluptatibus";
                                                }}),
                                            }};
                                            kind = "tempore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eaque";
                                                        ids = new String[]{{
                                                            add("modi"),
                                                            add("vitae"),
                                                            add("aliquam"),
                                                        }};
                                                        kind = "culpa";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("unde"),
                                                        }};
                                                    }};
                                                    kind = "incidunt";
                                                }}),
                                            }};
                                            kind = "nulla";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolore";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("quas"),
                                                            add("officia"),
                                                            add("eos"),
                                                        }};
                                                        kind = "accusamus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("officia"),
                                                        }};
                                                    }};
                                                    kind = "laudantium";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "perferendis";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("nemo"),
                                                        }};
                                                        kind = "et";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ullam"),
                                                        }};
                                                    }};
                                                    kind = "incidunt";
                                                }}),
                                            }};
                                            kind = "soluta";
                                        }}),
                                    }};
                                    kind = "dolorum";
                                    name = "Eunice Johns";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-05-29");
                            kind = "quisquam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.MONTH_TO_DATE;
                            startDate = LocalDate.parse("2021-11-09");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nihil";
                                name = "Armando Gutkowski";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "nemo";
                            etag = "aut";
                            id = "2a99e62f-4946-4ca2-9726-6cd763812723";
                            kind = "officia";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "aut";
                        }};;
                        metricNames = new String[]{{
                            add("earum"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "culpa";
                                            ids = new String[]{{
                                                add("necessitatibus"),
                                            }};
                                            kind = "veritatis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("est"),
                                                add("quidem"),
                                            }};
                                        }};
                                        kind = "dolorem";
                                    }}),
                                }};
                                kind = "earum";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "nobis";
                                            ids = new String[]{{
                                                add("corporis"),
                                            }};
                                            kind = "officiis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("temporibus"),
                                            }};
                                        }};
                                        kind = "facilis";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "deleniti";
                                            ids = new String[]{{
                                                add("tenetur"),
                                                add("minima"),
                                                add("occaecati"),
                                            }};
                                            kind = "veritatis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("corrupti"),
                                                add("dolor"),
                                                add("dolores"),
                                            }};
                                        }};
                                        kind = "unde";
                                    }}),
                                }};
                                kind = "delectus";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "perspiciatis";
                                            ids = new String[]{{
                                                add("consequuntur"),
                                            }};
                                            kind = "repellat";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("officia"),
                                                add("quibusdam"),
                                                add("alias"),
                                                add("nihil"),
                                            }};
                                        }};
                                        kind = "distinctio";
                                    }}),
                                }};
                                kind = "voluptas";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "corporis";
                                etag = "eaque";
                                id = "00a5b36a-222e-43ff-b70a-2b42e5edf64a";
                                kind = "dolores";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "rem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quam";
                                etag = "nostrum";
                                id = "c6a710e5-4b47-4ec6-aaf9-bd8327e8f7d3";
                                kind = "quasi";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "vitae";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nemo";
                                name = "Rickey Swift";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ratione";
                                name = "Tommie Cronin III";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nulla";
                                name = "Dana Bailey";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Laurie Waters";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laudantium";
                                name = "Ms. Gregory Legros";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "sit";
                                etag = "culpa";
                                id = "ee8c7221-3f42-45a0-b38b-71b3d2fd3b63";
                                kind = "voluptas";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "accusantium";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dignissimos";
                                etag = "adipisci";
                                id = "088e75ab-7ff2-4a12-bb07-4cd44c23c0b1";
                                kind = "beatae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "blanditiis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "illo";
                                etag = "debitis";
                                id = "d6835b93-ced6-487b-b453-f44af461c7cb";
                                kind = "error";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "placeat";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dignissimos";
                                etag = "provident";
                                id = "e962de32-3875-4a4a-ae87-d87b51e22e77";
                                kind = "optio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "necessitatibus";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-01-27");
                            kind = "dicta";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YESTERDAY;
                            startDate = LocalDate.parse("2021-05-19");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "corrupti";
                            etag = "dolorem";
                            id = "326dc5b1-0306-47a8-99e2-5c6a4c14ff18";
                            kind = "molestiae";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "excepturi";
                        }};;
                        metricNames = new String[]{{
                            add("rerum"),
                            add("architecto"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "consequatur";
                                name = "Douglas Howell MD";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laboriosam";
                                name = "Helen Abernathy DDS";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 746479;
                            impressionsLookbackWindow = 765402;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 871350;
                            maximumImpressionInteractions = 889398;
                            maximumInteractionGap = 471549;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ad";
                                    etag = "consequatur";
                                    id = "ea441101-c138-4b46-a923-d50f751b287a";
                                    kind = "neque";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "culpa";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "corrupti";
                                    etag = "voluptas";
                                    id = "cc3adf85-271a-4065-b902-4bd09d0fc60d";
                                    kind = "a";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "laudantium";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "hic";
                                    etag = "eveniet";
                                    id = "0e0e46f2-25e2-49d7-9d39-d8790e2e6014";
                                    kind = "deserunt";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "sequi";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "pariatur";
                                    etag = "perspiciatis";
                                    id = "70b2b531-bfb3-40ed-a3f8-e5e392f22a77";
                                    kind = "porro";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "iusto";
                                }}),
                            }};
                            kind = "deserunt";
                            metricNames = new String[]{{
                                add("ab"),
                                add("tempore"),
                                add("suscipit"),
                                add("neque"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "placeat";
                                    etag = "pariatur";
                                    id = "e080fb80-c056-436c-93d4-159955c5c717";
                                    kind = "vel";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ut";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "enim";
                                    etag = "provident";
                                    id = "7f37719d-d8c8-4482-8026-5d92c4c8c9f8";
                                    kind = "similique";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "deserunt";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "impedit";
                                    etag = "quae";
                                    id = "e04d2ace-b0cd-4e00-a8ec-f818a9303e93";
                                    kind = "doloribus";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "doloremque";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "culpa";
                                    etag = "sunt";
                                    id = "8b21f06d-4d17-4852-928b-e1db01d6919f";
                                    kind = "praesentium";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "vitae";
                                }}),
                            }};
                            kind = "nemo";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-30");
                            kind = "officia";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_YEAR;
                            startDate = LocalDate.parse("2022-01-29");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "iusto";
                                etag = "pariatur";
                                id = "b15c4c15-fe6c-4d09-ba67-5597ecbeb798";
                                kind = "explicabo";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "est";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sapiente";
                                etag = "provident";
                                id = "a7da6c29-b938-4e51-a7e6-ed6f7ff04fda";
                                kind = "perferendis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "commodi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "cupiditate";
                                id = "eae81824-0365-45aa-923c-49919ebd1cf7";
                                kind = "quam";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nemo";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quos";
                                name = "Malcolm Powlowski";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("ut"),
                            add("officiis"),
                            add("porro"),
                            add("debitis"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("eum"),
                            add("est"),
                            add("quisquam"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 301177;
                        expirationDate = LocalDate.parse("2020-11-10");
                        repeats = "modi";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-12-10");
                        timezone = "ut";
                    }};;
                    subAccountId = "provident";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "illo";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "rerum";
                key = "molestiae";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "quibusdam";
                uploadProtocol = "maxime";
            }};            

            DfareportingReportsInsertResponse res = sdk.reports.dfareportingReportsInsert(req, new DfareportingReportsInsertSecurity("aspernatur", "corporis") {{
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

            DfareportingReportsListRequest req = new DfareportingReportsListRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ex";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "dignissimos";
                key = "exercitationem";
                maxResults = 118886L;
                oauthToken = "illum";
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "id";
                scope = DfareportingReportsListScopeEnum.MINE;
                sortField = DfareportingReportsListSortFieldEnum.NAME;
                sortOrder = DfareportingReportsListSortOrderEnum.DESCENDING;
                uploadType = "totam";
                uploadProtocol = "tempore";
            }};            

            DfareportingReportsListResponse res = sdk.reports.dfareportingReportsList(req, new DfareportingReportsListSecurity("provident", "rem") {{
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
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.ChannelGroupingRule;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathReportDimensionValue;
import org.openapis.openapi.models.shared.PathReportDimensionValueMatchTypeEnum;
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
import org.openapis.openapi.models.shared.ReportPathAttributionCriteria;
import org.openapis.openapi.models.shared.ReportPathCriteria;
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

            DfareportingReportsPatchRequest req = new DfareportingReportsPatchRequest("consequuntur", "molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "qui";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "aliquam";
                                    etag = "iure";
                                    id = "1a5ecb87-f794-4f04-b414-46f793d3b100";
                                    kind = "sed";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "dicta";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ut";
                                    etag = "iusto";
                                    id = "cd1b8316-0b3e-43e9-8960-a0aafc7a8678";
                                    kind = "distinctio";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "quis";
                                }}),
                            }};
                            kind = "ipsa";
                            metricNames = new String[]{{
                                add("officia"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "hic";
                                    etag = "ut";
                                    id = "cb72ed6c-f622-45d5-9615-8803212f7b59";
                                    kind = "nam";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "beatae";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nemo";
                                    etag = "aliquam";
                                    id = "642b9e37-c84c-43d3-8a49-183797888d15";
                                    kind = "ea";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "sit";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ab";
                                    etag = "mollitia";
                                    id = "e36bb8d0-028e-43e1-9c90-59f7ef0f1385";
                                    kind = "harum";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "quam";
                                }}),
                            }};
                            kind = "quisquam";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-09-09");
                            kind = "autem";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_MONTH;
                            startDate = LocalDate.parse("2022-05-14");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "omnis";
                                etag = "atque";
                                id = "f6d268f9-2a6b-4b08-a152-225b05728e7a";
                                kind = "odit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "beatae";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "vero";
                                etag = "optio";
                                id = "fb74faff-5de4-4f2b-8a85-7bcec81ff34b";
                                kind = "voluptas";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "sint";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eaque";
                                etag = "accusantium";
                                id = "3b234e83-c6c3-46a5-ab3a-d5bf7940d46d";
                                kind = "quam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ratione";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "iste";
                                etag = "repellendus";
                                id = "489af600-5460-4b05-b01e-7bd8643968dd";
                                kind = "aperiam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "odio";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sequi";
                                name = "Frank Kohler";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "odio";
                                name = "Rachael Lockman";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("occaecati"),
                            add("ea"),
                            add("occaecati"),
                            add("qui"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iste";
                                name = "Luke Lowe";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ipsum";
                                name = "Israel Ferry";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "possimus";
                                name = "Clayton Friesen";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dicta";
                                name = "Willie Moore";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-01-14");
                            kind = "molestias";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2020-01-31");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "optio";
                                etag = "inventore";
                                id = "8aaa3deb-d0c9-4003-9e4c-1d0624de3534";
                                kind = "sapiente";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "vitae";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "accusamus";
                                etag = "dolore";
                                id = "2dda714e-9446-4899-994d-c953b4266c0e";
                                kind = "ipsam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "perferendis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "asperiores";
                                etag = "minus";
                                id = "742c9c71-0891-4ef7-b31a-84fed7bce0fb";
                                kind = "deserunt";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ducimus";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("dolore"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("dolor"),
                            add("sunt"),
                            add("dolor"),
                            add("dolore"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "ipsam";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Bryon.Oberbrunner@hotmail.com";
                                kind = "nesciunt";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Lonzo54@gmail.com";
                                kind = "voluptates";
                            }}),
                        }};
                    }};;
                    etag = "dolores";
                    fileName = "veritatis";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ipsa";
                                etag = "omnis";
                                id = "b6733551-9b00-4c50-a73a-8e26f6d65fc9";
                                kind = "excepturi";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dolor";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "aspernatur";
                                id = "533a8f8c-1e63-49e6-9dff-2353545dbfd6";
                                kind = "excepturi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "corrupti";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quis";
                                etag = "eius";
                                id = "ee4956d8-61c1-4fe0-ba43-817586546524";
                                kind = "ducimus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "autem";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-01-22");
                            kind = "praesentium";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-05-21");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "delectus";
                                etag = "eius";
                                id = "1bb9dd5f-9a10-4583-aa80-e7186e9e8089";
                                kind = "ea";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "deleniti";
                                etag = "provident";
                                id = "a74cc4e0-edcd-4827-8b6c-8030772d9372";
                                kind = "et";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "numquam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "tempore";
                                id = "4dd4c7f2-2ce2-40aa-aa3e-6312683ff48c";
                                kind = "sequi";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "quisquam";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sint";
                                name = "Lorenzo Russel MD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "nesciunt";
                                name = "Tommie Hudson";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ullam";
                            etag = "officia";
                            id = "8b6d7377-2acf-4428-a41d-1ddf05ce1d39";
                            kind = "provident";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "facere";
                        }};;
                        metricNames = new String[]{{
                            add("debitis"),
                            add("hic"),
                            add("accusamus"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "ab";
                    kind = "illo";
                    lastModifiedTime = "inventore";
                    name = "Tamara Koelpin";
                    ownerProfileId = "necessitatibus";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ipsa";
                                etag = "repellat";
                                id = "5aeeccd8-31a2-49da-9596-4ee5ebf7e698";
                                kind = "unde";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "delectus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eaque";
                                etag = "ipsam";
                                id = "1aa7c59e-69b7-4c0e-a683-f37aa8dbe156";
                                kind = "consequuntur";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "reiciendis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "cum";
                                etag = "voluptatum";
                                id = "6e04210e-06b7-46f9-a69a-be3842bdc330";
                                kind = "quaerat";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "consequatur";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "nam";
                            kind = "laboriosam";
                            name = "Gwen Zboncak";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quaerat";
                                                        ids = new String[]{{
                                                            add("quaerat"),
                                                            add("a"),
                                                            add("corrupti"),
                                                        }};
                                                        kind = "doloribus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("tenetur"),
                                                            add("aut"),
                                                            add("commodi"),
                                                        }};
                                                    }};
                                                    kind = "temporibus";
                                                }}),
                                            }};
                                            kind = "sapiente";
                                        }}),
                                    }};
                                    kind = "tempore";
                                    name = "Paul Goldner";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quasi";
                                                        ids = new String[]{{
                                                            add("deleniti"),
                                                            add("veniam"),
                                                        }};
                                                        kind = "corrupti";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("adipisci"),
                                                            add("reprehenderit"),
                                                            add("nesciunt"),
                                                            add("quas"),
                                                        }};
                                                    }};
                                                    kind = "magnam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quos";
                                                        ids = new String[]{{
                                                            add("totam"),
                                                            add("qui"),
                                                            add("fugiat"),
                                                        }};
                                                        kind = "et";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                            add("omnis"),
                                                            add("sequi"),
                                                        }};
                                                    }};
                                                    kind = "eius";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "pariatur";
                                                        ids = new String[]{{
                                                            add("enim"),
                                                            add("ab"),
                                                            add("aut"),
                                                            add("expedita"),
                                                        }};
                                                        kind = "deleniti";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ex"),
                                                        }};
                                                    }};
                                                    kind = "ducimus";
                                                }}),
                                            }};
                                            kind = "molestiae";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "maiores";
                                                        ids = new String[]{{
                                                            add("minus"),
                                                            add("ad"),
                                                            add("sequi"),
                                                            add("temporibus"),
                                                        }};
                                                        kind = "eos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("natus"),
                                                            add("ad"),
                                                            add("exercitationem"),
                                                        }};
                                                    }};
                                                    kind = "minus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corrupti";
                                                        ids = new String[]{{
                                                            add("ratione"),
                                                            add("cupiditate"),
                                                            add("consectetur"),
                                                        }};
                                                        kind = "amet";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("quod"),
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "fugiat";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "assumenda";
                                                        ids = new String[]{{
                                                            add("ipsam"),
                                                            add("id"),
                                                        }};
                                                        kind = "pariatur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("non"),
                                                            add("iure"),
                                                            add("consequatur"),
                                                            add("repellendus"),
                                                        }};
                                                    }};
                                                    kind = "repudiandae";
                                                }}),
                                            }};
                                            kind = "a";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aliquam";
                                                        ids = new String[]{{
                                                            add("similique"),
                                                            add("illo"),
                                                            add("pariatur"),
                                                            add("accusamus"),
                                                        }};
                                                        kind = "laboriosam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quibusdam"),
                                                            add("dolores"),
                                                            add("cumque"),
                                                        }};
                                                    }};
                                                    kind = "doloribus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cum";
                                                        ids = new String[]{{
                                                            add("harum"),
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "nesciunt";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("atque"),
                                                            add("beatae"),
                                                            add("quo"),
                                                        }};
                                                    }};
                                                    kind = "nulla";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quidem";
                                                        ids = new String[]{{
                                                            add("officiis"),
                                                        }};
                                                        kind = "reprehenderit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                            add("minus"),
                                                            add("consectetur"),
                                                            add("accusantium"),
                                                        }};
                                                    }};
                                                    kind = "fuga";
                                                }}),
                                            }};
                                            kind = "odio";
                                        }}),
                                    }};
                                    kind = "quibusdam";
                                    name = "Darren Smith";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nisi";
                                                        ids = new String[]{{
                                                            add("magnam"),
                                                            add("id"),
                                                        }};
                                                        kind = "eaque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                    kind = "aliquam";
                                                }}),
                                            }};
                                            kind = "doloribus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corrupti";
                                                        ids = new String[]{{
                                                            add("quam"),
                                                            add("fugit"),
                                                            add("commodi"),
                                                        }};
                                                        kind = "id";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("vel"),
                                                        }};
                                                    }};
                                                    kind = "quidem";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "suscipit";
                                                        ids = new String[]{{
                                                            add("maiores"),
                                                            add("dolor"),
                                                            add("ducimus"),
                                                            add("ad"),
                                                        }};
                                                        kind = "quo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quae"),
                                                            add("consectetur"),
                                                            add("incidunt"),
                                                        }};
                                                    }};
                                                    kind = "tenetur";
                                                }}),
                                            }};
                                            kind = "blanditiis";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eius";
                                                        ids = new String[]{{
                                                            add("assumenda"),
                                                        }};
                                                        kind = "officiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("perspiciatis"),
                                                        }};
                                                    }};
                                                    kind = "excepturi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "neque";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                            add("molestias"),
                                                            add("fugiat"),
                                                            add("dolorem"),
                                                        }};
                                                        kind = "nisi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("dolorum"),
                                                            add("reiciendis"),
                                                        }};
                                                    }};
                                                    kind = "soluta";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "laboriosam";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                            add("ut"),
                                                            add("quaerat"),
                                                        }};
                                                        kind = "qui";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("ea"),
                                                            add("amet"),
                                                            add("illum"),
                                                        }};
                                                    }};
                                                    kind = "consequuntur";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "deleniti";
                                                        ids = new String[]{{
                                                            add("veritatis"),
                                                        }};
                                                        kind = "cum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("non"),
                                                            add("recusandae"),
                                                            add("deserunt"),
                                                        }};
                                                    }};
                                                    kind = "eius";
                                                }}),
                                            }};
                                            kind = "repellendus";
                                        }}),
                                    }};
                                    kind = "provident";
                                    name = "Phil Treutel";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "delectus";
                                                        ids = new String[]{{
                                                            add("a"),
                                                            add("delectus"),
                                                        }};
                                                        kind = "laudantium";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("laboriosam"),
                                                            add("hic"),
                                                        }};
                                                    }};
                                                    kind = "dolorum";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "unde";
                                                        ids = new String[]{{
                                                            add("velit"),
                                                            add("ullam"),
                                                        }};
                                                        kind = "totam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("numquam"),
                                                            add("quos"),
                                                            add("non"),
                                                        }};
                                                    }};
                                                    kind = "ex";
                                                }}),
                                            }};
                                            kind = "magni";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ex";
                                                        ids = new String[]{{
                                                            add("iure"),
                                                            add("vitae"),
                                                            add("sapiente"),
                                                            add("odit"),
                                                        }};
                                                        kind = "modi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                }}),
                                            }};
                                            kind = "nulla";
                                        }}),
                                    }};
                                    kind = "quasi";
                                    name = "Randall Cartwright";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-08-10");
                            kind = "aliquid";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2020-05-29");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "pariatur";
                                name = "Celia Nikolaus";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "id";
                            etag = "ratione";
                            id = "0d3702a0-649f-470f-a208-a65671385c4a";
                            kind = "expedita";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "at";
                        }};;
                        metricNames = new String[]{{
                            add("ea"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "debitis";
                                            ids = new String[]{{
                                                add("temporibus"),
                                            }};
                                            kind = "quisquam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("tempora"),
                                                add("repellendus"),
                                                add("suscipit"),
                                            }};
                                        }};
                                        kind = "dolor";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quasi";
                                            ids = new String[]{{
                                                add("reprehenderit"),
                                                add("quidem"),
                                            }};
                                            kind = "nihil";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("iusto"),
                                                add("quibusdam"),
                                            }};
                                        }};
                                        kind = "illum";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odio";
                                            ids = new String[]{{
                                                add("nobis"),
                                                add("asperiores"),
                                                add("nam"),
                                            }};
                                            kind = "saepe";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("cupiditate"),
                                                add("a"),
                                            }};
                                        }};
                                        kind = "eaque";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "cumque";
                                            ids = new String[]{{
                                                add("rem"),
                                                add("dicta"),
                                            }};
                                            kind = "asperiores";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("voluptas"),
                                                add("sequi"),
                                                add("delectus"),
                                            }};
                                        }};
                                        kind = "vitae";
                                    }}),
                                }};
                                kind = "fuga";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tempore";
                                            ids = new String[]{{
                                                add("quos"),
                                                add("quas"),
                                                add("aliquid"),
                                            }};
                                            kind = "id";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sit"),
                                            }};
                                        }};
                                        kind = "nihil";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "facere";
                                            ids = new String[]{{
                                                add("nobis"),
                                                add("suscipit"),
                                                add("eos"),
                                                add("a"),
                                            }};
                                            kind = "laboriosam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("hic"),
                                            }};
                                        }};
                                        kind = "aut";
                                    }}),
                                }};
                                kind = "excepturi";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odio";
                                            ids = new String[]{{
                                                add("ipsam"),
                                                add("occaecati"),
                                            }};
                                            kind = "sequi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sequi"),
                                                add("facilis"),
                                                add("corrupti"),
                                                add("alias"),
                                            }};
                                        }};
                                        kind = "exercitationem";
                                    }}),
                                }};
                                kind = "impedit";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "cumque";
                                            ids = new String[]{{
                                                add("doloremque"),
                                                add("veniam"),
                                                add("dolorem"),
                                                add("voluptate"),
                                            }};
                                            kind = "perspiciatis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("assumenda"),
                                                add("error"),
                                                add("quaerat"),
                                                add("recusandae"),
                                            }};
                                        }};
                                        kind = "quas";
                                    }}),
                                }};
                                kind = "nihil";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quia";
                                etag = "quis";
                                id = "d18ce5d7-7414-40cd-870a-ae04ae20749c";
                                kind = "ipsum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "omnis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "hic";
                                etag = "quasi";
                                id = "48c9f08f-4107-4c22-8684-963ea6ceec84";
                                kind = "deleniti";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "iure";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ipsam";
                                etag = "atque";
                                id = "90a9faef-940e-48d6-a8c0-8f1014414875";
                                kind = "eum";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "amet";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "quisquam";
                            kind = "id";
                            name = "Emilio Cummerata";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vitae";
                                                        ids = new String[]{{
                                                            add("laboriosam"),
                                                            add("quia"),
                                                        }};
                                                        kind = "magnam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("amet"),
                                                            add("nesciunt"),
                                                            add("sint"),
                                                            add("nam"),
                                                        }};
                                                    }};
                                                    kind = "numquam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ipsum";
                                                        ids = new String[]{{
                                                            add("error"),
                                                            add("architecto"),
                                                            add("occaecati"),
                                                            add("non"),
                                                        }};
                                                        kind = "esse";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("veritatis"),
                                                            add("dolor"),
                                                            add("facere"),
                                                            add("molestiae"),
                                                        }};
                                                    }};
                                                    kind = "labore";
                                                }}),
                                            }};
                                            kind = "maiores";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("corrupti"),
                                                            add("pariatur"),
                                                            add("dolore"),
                                                            add("magnam"),
                                                        }};
                                                        kind = "sunt";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("illo"),
                                                            add("occaecati"),
                                                            add("similique"),
                                                            add("occaecati"),
                                                        }};
                                                    }};
                                                    kind = "deserunt";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corrupti";
                                                        ids = new String[]{{
                                                            add("qui"),
                                                            add("qui"),
                                                        }};
                                                        kind = "excepturi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                    }};
                                                    kind = "fuga";
                                                }}),
                                            }};
                                            kind = "officiis";
                                        }}),
                                    }};
                                    kind = "eaque";
                                    name = "Paula Cummings";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-09-12");
                            kind = "placeat";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-04-02");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "provident";
                                name = "Mrs. Sonya Cormier";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "labore";
                            etag = "consectetur";
                            id = "1274488f-0cb2-4dc9-b2e9-61d2ba4161d4";
                            kind = "placeat";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "velit";
                        }};;
                        metricNames = new String[]{{
                            add("temporibus"),
                            add("cupiditate"),
                            add("tenetur"),
                            add("iure"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "suscipit";
                                            ids = new String[]{{
                                                add("atque"),
                                                add("fuga"),
                                                add("quibusdam"),
                                                add("laboriosam"),
                                            }};
                                            kind = "distinctio";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("voluptatibus"),
                                                add("ut"),
                                                add("perferendis"),
                                            }};
                                        }};
                                        kind = "iste";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "recusandae";
                                            ids = new String[]{{
                                                add("dolor"),
                                            }};
                                            kind = "magnam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("accusamus"),
                                            }};
                                        }};
                                        kind = "laboriosam";
                                    }}),
                                }};
                                kind = "pariatur";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eius";
                                            ids = new String[]{{
                                                add("eos"),
                                            }};
                                            kind = "quae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("voluptates"),
                                            }};
                                        }};
                                        kind = "natus";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "in";
                                            ids = new String[]{{
                                                add("velit"),
                                                add("iure"),
                                                add("non"),
                                                add("delectus"),
                                            }};
                                            kind = "commodi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("itaque"),
                                                add("molestias"),
                                                add("laudantium"),
                                                add("occaecati"),
                                            }};
                                        }};
                                        kind = "inventore";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "maiores";
                                            ids = new String[]{{
                                                add("inventore"),
                                                add("reprehenderit"),
                                                add("molestiae"),
                                            }};
                                            kind = "autem";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("quos"),
                                                add("aliquid"),
                                                add("magni"),
                                                add("quasi"),
                                            }};
                                        }};
                                        kind = "magni";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "delectus";
                                            ids = new String[]{{
                                                add("a"),
                                                add("omnis"),
                                            }};
                                            kind = "facere";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("ducimus"),
                                                add("dolorem"),
                                                add("doloribus"),
                                                add("in"),
                                            }};
                                        }};
                                        kind = "voluptatem";
                                    }}),
                                }};
                                kind = "aut";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "molestiae";
                                            ids = new String[]{{
                                                add("harum"),
                                                add("expedita"),
                                                add("modi"),
                                                add("dolorem"),
                                            }};
                                            kind = "quod";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("quo"),
                                                add("quasi"),
                                            }};
                                        }};
                                        kind = "explicabo";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "similique";
                                            ids = new String[]{{
                                                add("sit"),
                                                add("vero"),
                                                add("distinctio"),
                                            }};
                                            kind = "fugiat";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("perspiciatis"),
                                            }};
                                        }};
                                        kind = "recusandae";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "at";
                                            ids = new String[]{{
                                                add("rerum"),
                                                add("ad"),
                                                add("error"),
                                                add("non"),
                                            }};
                                            kind = "eum";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("reprehenderit"),
                                                add("ipsam"),
                                            }};
                                        }};
                                        kind = "praesentium";
                                    }}),
                                }};
                                kind = "voluptas";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "illum";
                                            ids = new String[]{{
                                                add("repellendus"),
                                            }};
                                            kind = "accusamus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("excepturi"),
                                                add("voluptas"),
                                                add("quo"),
                                            }};
                                        }};
                                        kind = "maiores";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "inventore";
                                            ids = new String[]{{
                                                add("cupiditate"),
                                                add("omnis"),
                                                add("tempora"),
                                                add("ipsam"),
                                            }};
                                            kind = "quod";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("ab"),
                                                add("numquam"),
                                                add("nostrum"),
                                                add("dignissimos"),
                                            }};
                                        }};
                                        kind = "velit";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tenetur";
                                            ids = new String[]{{
                                                add("alias"),
                                                add("nam"),
                                                add("possimus"),
                                            }};
                                            kind = "dolore";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("rem"),
                                                add("quisquam"),
                                                add("esse"),
                                            }};
                                        }};
                                        kind = "officia";
                                    }}),
                                }};
                                kind = "consequatur";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ipsum";
                                etag = "dolorem";
                                id = "ac473b40-567b-43f5-be42-a3305ba82770";
                                kind = "quidem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "nisi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quibusdam";
                                etag = "odit";
                                id = "dee1cb27-fde0-4b64-8077-d9bfd241a62c";
                                kind = "maiores";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "doloribus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "id";
                                etag = "consectetur";
                                id = "e7c6147e-0c2c-4ce2-9819-224e200e513e";
                                kind = "laboriosam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "nemo";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quisquam";
                                etag = "labore";
                                id = "6bb6d887-6065-40d0-ab06-d21d9af7f5b5";
                                kind = "id";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "ipsum";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "facilis";
                                name = "Brooke Aufderhar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "exercitationem";
                                name = "Victor Kemmer";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolorum";
                                name = "Bessie Kuhic I";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "corrupti";
                                name = "Hattie Howell";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "facilis";
                                name = "Roland Lehner";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sequi";
                                name = "Sharon Rolfson";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "rerum";
                                etag = "laborum";
                                id = "92c26349-d592-472e-9506-6462c99eaada";
                                kind = "eligendi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "magni";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "rerum";
                                etag = "atque";
                                id = "66ce16de-8082-4e0a-b164-fb614494dbb0";
                                kind = "facilis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eaque";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-25");
                            kind = "illo";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2022-01-08");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "voluptatum";
                            etag = "natus";
                            id = "f7d9ec43-2ba7-4309-a391-37eac1f806d4";
                            kind = "eveniet";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "delectus";
                        }};;
                        metricNames = new String[]{{
                            add("sint"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Tonya Corkery";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fuga";
                                name = "Nathaniel Block";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "tempore";
                                name = "Darryl Ratke";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "facilis";
                                name = "Raul Dooley";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 541181;
                            impressionsLookbackWindow = 726566;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 433055;
                            maximumImpressionInteractions = 116592;
                            maximumInteractionGap = 187702;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "tempora";
                                    etag = "dolor";
                                    id = "56ca70d8-d4f5-4d60-b464-11237b62fbc3";
                                    kind = "cupiditate";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "corrupti";
                                }}),
                            }};
                            kind = "possimus";
                            metricNames = new String[]{{
                                add("voluptas"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "possimus";
                                    etag = "molestias";
                                    id = "68ecac33-024a-4c5b-ba0f-6cfeb9d3a697";
                                    kind = "reiciendis";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "dignissimos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "vitae";
                                    etag = "quisquam";
                                    id = "e361d2e5-d73e-4795-aa67-ac619187481d";
                                    kind = "sunt";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "sint";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "unde";
                                    etag = "illo";
                                    id = "c71e59cf-64fa-47e5-9f8c-d95906f46816";
                                    kind = "tempore";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "minima";
                                }}),
                            }};
                            kind = "asperiores";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-23");
                            kind = "dicta";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST14_DAYS;
                            startDate = LocalDate.parse("2021-08-06");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "impedit";
                                etag = "nisi";
                                id = "3cca5650-5600-49ff-a29e-f49122f73623";
                                kind = "corporis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "iure";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "amet";
                                etag = "voluptatibus";
                                id = "28acac36-11e1-4afa-9656-d9e0eaec2ecc";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "maxime";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "expedita";
                                etag = "sint";
                                id = "bb6889a0-b04c-4745-8cb0-9f121661e331";
                                kind = "autem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "officia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "accusantium";
                                etag = "ducimus";
                                id = "00ebfe79-39ad-43d5-ad61-dcb7d82d77b1";
                                kind = "libero";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "illo";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "expedita";
                                name = "Marguerite Abernathy";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "velit";
                                name = "Barbara Huel";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eum";
                                name = "Malcolm Hills";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Emmett Franey";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("sint"),
                            add("vitae"),
                            add("sapiente"),
                            add("dicta"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("deserunt"),
                            add("doloremque"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 517190;
                        expirationDate = LocalDate.parse("2022-02-05");
                        repeats = "ipsa";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.THURSDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.WEDNESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-01-09");
                        timezone = "in";
                    }};;
                    subAccountId = "blanditiis";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "distinctio";
                alt = AltEnum.PROTO;
                callback = "non";
                fields = "est";
                key = "quam";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "ullam";
                uploadProtocol = "ut";
            }};            

            DfareportingReportsPatchResponse res = sdk.reports.dfareportingReportsPatch(req, new DfareportingReportsPatchSecurity("inventore", "explicabo") {{
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

            DfareportingReportsRunRequest req = new DfareportingReportsRunRequest("non", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "vitae";
                alt = AltEnum.MEDIA;
                callback = "magnam";
                fields = "dolores";
                key = "amet";
                oauthToken = "dolorum";
                prettyPrint = false;
                quotaUser = "sint";
                synchronous = false;
                uploadType = "dicta";
                uploadProtocol = "consectetur";
            }};            

            DfareportingReportsRunResponse res = sdk.reports.dfareportingReportsRun(req, new DfareportingReportsRunSecurity("debitis", "sunt") {{
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
import org.openapis.openapi.models.shared.ChannelGrouping;
import org.openapis.openapi.models.shared.ChannelGroupingRule;
import org.openapis.openapi.models.shared.CustomRichMediaEvents;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.DateRangeRelativeDateRangeEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.DisjunctiveMatchStatement;
import org.openapis.openapi.models.shared.EventFilter;
import org.openapis.openapi.models.shared.PathFilter;
import org.openapis.openapi.models.shared.PathFilterPathMatchPositionEnum;
import org.openapis.openapi.models.shared.PathReportDimensionValue;
import org.openapis.openapi.models.shared.PathReportDimensionValueMatchTypeEnum;
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
import org.openapis.openapi.models.shared.ReportPathAttributionCriteria;
import org.openapis.openapi.models.shared.ReportPathCriteria;
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

            DfareportingReportsUpdateRequest req = new DfareportingReportsUpdateRequest("similique", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "eaque";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "distinctio";
                                    etag = "cum";
                                    id = "73dcfcef-ac45-4984-a74e-c7582b0da948";
                                    kind = "illum";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "impedit";
                                }}),
                            }};
                            kind = "nobis";
                            metricNames = new String[]{{
                                add("ducimus"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "possimus";
                                    etag = "reiciendis";
                                    id = "7dcd943b-c56d-4314-aba8-48afe8902b48";
                                    kind = "exercitationem";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quaerat";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "reiciendis";
                                    etag = "fuga";
                                    id = "3fc83c1f-c5b0-4acd-b04c-48b427d7de96";
                                    kind = "ipsum";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "tenetur";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "doloremque";
                                    etag = "consectetur";
                                    id = "e497d897-002d-4e0d-afd4-e15f2303b325";
                                    kind = "magni";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "amet";
                                }}),
                            }};
                            kind = "laudantium";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-08");
                            kind = "dolorem";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.QUARTER_TO_DATE;
                            startDate = LocalDate.parse("2022-06-24");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "id";
                                etag = "mollitia";
                                id = "fabda028-e65c-4230-924d-345419bbef0c";
                                kind = "mollitia";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "molestias";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ab";
                                etag = "saepe";
                                id = "3a765952-02b3-467d-8e16-89b618b30bb7";
                                kind = "a";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "esse";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eius";
                                etag = "quae";
                                id = "b4a2d8c2-efc6-4f61-9e91-184c4418da1a";
                                kind = "iusto";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "labore";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "adipisci";
                                name = "Rosa Beatty";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "natus";
                                name = "Tricia Hamill";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "modi";
                                name = "Wilfred Powlowski";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("nihil"),
                            add("error"),
                            add("magnam"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quam";
                                name = "Joanne Gulgowski DVM";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "natus";
                                name = "Tricia Feil";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "doloremque";
                                name = "Arturo Hermiston";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-08-15");
                            kind = "consectetur";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_WEEK;
                            startDate = LocalDate.parse("2022-04-13");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nesciunt";
                                etag = "autem";
                                id = "4249f4f6-d97e-47b5-a782-24e2cecb7246";
                                kind = "voluptatem";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "quaerat";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("modi"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("saepe"),
                            add("reprehenderit"),
                            add("nemo"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "possimus";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Will50@yahoo.com";
                                kind = "minima";
                            }}),
                        }};
                    }};;
                    etag = "non";
                    fileName = "voluptatum";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "laudantium";
                                etag = "vel";
                                id = "095d1445-2a0f-4c3a-bbdd-cd5b00688cc9";
                                kind = "id";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "laborum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "qui";
                                etag = "maxime";
                                id = "ec6731ed-1900-4dc9-a354-8daee9064a0b";
                                kind = "quibusdam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "facilis";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-09-24");
                            kind = "delectus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST365_DAYS;
                            startDate = LocalDate.parse("2022-05-14");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "id";
                                etag = "quas";
                                id = "c22b9082-56b1-46e7-83eb-606728e45275";
                                kind = "delectus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eaque";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nam";
                                etag = "expedita";
                                id = "960effce-f1a8-4f1c-846c-01682ec8df36";
                                kind = "modi";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "aut";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "excepturi";
                                etag = "nemo";
                                id = "fdbd9510-351d-482f-bd37-e850ed86b0de";
                                kind = "tenetur";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "non";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "doloremque";
                                name = "Jerome Schamberger";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "error";
                                name = "Keith Bartell";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "culpa";
                                name = "Janie Bins";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "necessitatibus";
                            etag = "velit";
                            id = "3cca695f-d560-4f93-be24-d8713045d2f7";
                            kind = "quasi";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "vero";
                        }};;
                        metricNames = new String[]{{
                            add("ullam"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "nemo";
                    kind = "veniam";
                    lastModifiedTime = "unde";
                    name = "Verna White";
                    ownerProfileId = "nesciunt";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "enim";
                                etag = "delectus";
                                id = "71223b58-46a1-4b9c-b6a1-4e6540368ed3";
                                kind = "accusantium";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "odio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "culpa";
                                etag = "nobis";
                                id = "eabf8012-4590-448f-a667-67e29d4e543c";
                                kind = "modi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "est";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ad";
                                etag = "officia";
                                id = "e4e8bdc4-7084-43fe-881a-2fbffe931a78";
                                kind = "porro";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eos";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "commodi";
                            kind = "dolore";
                            name = "Carlton Renner DDS";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellendus";
                                                        ids = new String[]{{
                                                            add("quos"),
                                                        }};
                                                        kind = "porro";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("natus"),
                                                            add("sequi"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                    kind = "sit";
                                                }}),
                                            }};
                                            kind = "neque";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "possimus";
                                                        ids = new String[]{{
                                                            add("facere"),
                                                            add("in"),
                                                        }};
                                                        kind = "ea";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("vitae"),
                                                            add("eum"),
                                                        }};
                                                    }};
                                                    kind = "nihil";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptate";
                                                        ids = new String[]{{
                                                            add("amet"),
                                                            add("deleniti"),
                                                        }};
                                                        kind = "ipsum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ab"),
                                                            add("est"),
                                                            add("mollitia"),
                                                            add("voluptatibus"),
                                                        }};
                                                    }};
                                                    kind = "earum";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequuntur";
                                                        ids = new String[]{{
                                                            add("recusandae"),
                                                            add("quisquam"),
                                                            add("cumque"),
                                                        }};
                                                        kind = "amet";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("mollitia"),
                                                            add("asperiores"),
                                                            add("temporibus"),
                                                        }};
                                                    }};
                                                    kind = "labore";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatum";
                                                        ids = new String[]{{
                                                            add("deserunt"),
                                                        }};
                                                        kind = "distinctio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nam"),
                                                            add("suscipit"),
                                                            add("inventore"),
                                                            add("optio"),
                                                        }};
                                                    }};
                                                    kind = "distinctio";
                                                }}),
                                            }};
                                            kind = "magni";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quam";
                                                        ids = new String[]{{
                                                            add("perspiciatis"),
                                                            add("doloremque"),
                                                        }};
                                                        kind = "quasi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quaerat"),
                                                            add("velit"),
                                                            add("repudiandae"),
                                                        }};
                                                    }};
                                                    kind = "hic";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("voluptas"),
                                                            add("explicabo"),
                                                            add("sit"),
                                                        }};
                                                        kind = "facilis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ratione"),
                                                            add("vitae"),
                                                            add("perspiciatis"),
                                                            add("consequatur"),
                                                        }};
                                                    }};
                                                    kind = "soluta";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "veritatis";
                                                        ids = new String[]{{
                                                            add("quaerat"),
                                                            add("aspernatur"),
                                                        }};
                                                        kind = "quaerat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("numquam"),
                                                            add("in"),
                                                            add("assumenda"),
                                                        }};
                                                    }};
                                                    kind = "consequatur";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eum";
                                                        ids = new String[]{{
                                                            add("sequi"),
                                                            add("distinctio"),
                                                        }};
                                                        kind = "ut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("deleniti"),
                                                            add("neque"),
                                                        }};
                                                    }};
                                                    kind = "ullam";
                                                }}),
                                            }};
                                            kind = "atque";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "excepturi";
                                                        ids = new String[]{{
                                                            add("quo"),
                                                        }};
                                                        kind = "dolore";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("velit"),
                                                            add("porro"),
                                                        }};
                                                    }};
                                                    kind = "quia";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "amet";
                                                        ids = new String[]{{
                                                            add("corporis"),
                                                            add("assumenda"),
                                                            add("temporibus"),
                                                            add("consequatur"),
                                                        }};
                                                        kind = "necessitatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("odio"),
                                                            add("quasi"),
                                                        }};
                                                    }};
                                                    kind = "temporibus";
                                                }}),
                                            }};
                                            kind = "asperiores";
                                        }}),
                                    }};
                                    kind = "recusandae";
                                    name = "Annie Leffler";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-05");
                            kind = "mollitia";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YESTERDAY;
                            startDate = LocalDate.parse("2022-02-23");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Lee Hackett I";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "reiciendis";
                            etag = "eum";
                            id = "31fc8db4-8ad1-416a-bf37-f7008aaf5230";
                            kind = "minus";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "dolores";
                        }};;
                        metricNames = new String[]{{
                            add("mollitia"),
                            add("sequi"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "temporibus";
                                            ids = new String[]{{
                                                add("vel"),
                                            }};
                                            kind = "sed";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("provident"),
                                                add("eius"),
                                                add("mollitia"),
                                                add("a"),
                                            }};
                                        }};
                                        kind = "quaerat";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "incidunt";
                                            ids = new String[]{{
                                                add("beatae"),
                                                add("illo"),
                                                add("atque"),
                                            }};
                                            kind = "consectetur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("corporis"),
                                                add("quia"),
                                            }};
                                        }};
                                        kind = "eum";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "consequuntur";
                                            ids = new String[]{{
                                                add("eos"),
                                                add("possimus"),
                                                add("quos"),
                                                add("vitae"),
                                            }};
                                            kind = "voluptate";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("animi"),
                                                add("maiores"),
                                                add("aut"),
                                            }};
                                        }};
                                        kind = "omnis";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "occaecati";
                                            ids = new String[]{{
                                                add("neque"),
                                            }};
                                            kind = "modi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("impedit"),
                                            }};
                                        }};
                                        kind = "quo";
                                    }}),
                                }};
                                kind = "distinctio";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "vitae";
                                            ids = new String[]{{
                                                add("vero"),
                                            }};
                                            kind = "sed";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("omnis"),
                                                add("sapiente"),
                                            }};
                                        }};
                                        kind = "voluptatibus";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "mollitia";
                                            ids = new String[]{{
                                                add("minus"),
                                                add("praesentium"),
                                                add("asperiores"),
                                            }};
                                            kind = "eveniet";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("molestiae"),
                                                add("voluptate"),
                                                add("facilis"),
                                                add("fuga"),
                                            }};
                                        }};
                                        kind = "quod";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolorum";
                                            ids = new String[]{{
                                                add("dolore"),
                                                add("nemo"),
                                                add("consequuntur"),
                                            }};
                                            kind = "aliquam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("accusantium"),
                                                add("totam"),
                                                add("possimus"),
                                                add("magni"),
                                            }};
                                        }};
                                        kind = "optio";
                                    }}),
                                }};
                                kind = "minus";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "recusandae";
                                            ids = new String[]{{
                                                add("sapiente"),
                                                add("sit"),
                                            }};
                                            kind = "nihil";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("soluta"),
                                                add("voluptatibus"),
                                                add("temporibus"),
                                            }};
                                        }};
                                        kind = "fugiat";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "itaque";
                                            ids = new String[]{{
                                                add("cum"),
                                                add("iure"),
                                                add("reiciendis"),
                                            }};
                                            kind = "soluta";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("voluptatem"),
                                            }};
                                        }};
                                        kind = "sit";
                                    }}),
                                }};
                                kind = "cum";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "explicabo";
                                            ids = new String[]{{
                                                add("placeat"),
                                                add("voluptate"),
                                            }};
                                            kind = "nisi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("laborum"),
                                                add("quae"),
                                                add("aliquam"),
                                                add("blanditiis"),
                                            }};
                                        }};
                                        kind = "eaque";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tempora";
                                            ids = new String[]{{
                                                add("architecto"),
                                                add("consequatur"),
                                                add("atque"),
                                                add("sunt"),
                                            }};
                                            kind = "consequatur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("occaecati"),
                                            }};
                                        }};
                                        kind = "voluptate";
                                    }}),
                                }};
                                kind = "cupiditate";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "pariatur";
                                etag = "numquam";
                                id = "465de326-956c-415c-aff6-395d2c389494";
                                kind = "veniam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "quas";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "illo";
                                etag = "magnam";
                                id = "9a7b76ce-21f4-454d-a2cc-4a3caf7ad83b";
                                kind = "occaecati";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "mollitia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "esse";
                                etag = "modi";
                                id = "323809c9-59c7-423a-a089-d0cb8c6685e3";
                                kind = "rem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "deleniti";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "nihil";
                            kind = "totam";
                            name = "Boyd Mraz";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eius";
                                                        ids = new String[]{{
                                                            add("nulla"),
                                                            add("aperiam"),
                                                        }};
                                                        kind = "ad";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("sequi"),
                                                            add("similique"),
                                                            add("error"),
                                                            add("facilis"),
                                                        }};
                                                    }};
                                                    kind = "vero";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ut";
                                                        ids = new String[]{{
                                                            add("aperiam"),
                                                            add("temporibus"),
                                                        }};
                                                        kind = "voluptate";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("tempore"),
                                                            add("quis"),
                                                            add("vitae"),
                                                        }};
                                                    }};
                                                    kind = "a";
                                                }}),
                                            }};
                                            kind = "nostrum";
                                        }}),
                                    }};
                                    kind = "officia";
                                    name = "Marlon Lakin";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequuntur";
                                                        ids = new String[]{{
                                                            add("mollitia"),
                                                            add("ratione"),
                                                        }};
                                                        kind = "sed";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dolor"),
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    kind = "reprehenderit";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ducimus";
                                                        ids = new String[]{{
                                                            add("non"),
                                                            add("eveniet"),
                                                            add("sit"),
                                                            add("nesciunt"),
                                                        }};
                                                        kind = "quos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("quae"),
                                                        }};
                                                    }};
                                                    kind = "repellendus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "totam";
                                                        ids = new String[]{{
                                                            add("vitae"),
                                                            add("nulla"),
                                                        }};
                                                        kind = "asperiores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                            add("nemo"),
                                                            add("alias"),
                                                        }};
                                                    }};
                                                    kind = "temporibus";
                                                }}),
                                            }};
                                            kind = "reiciendis";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "officiis";
                                                        ids = new String[]{{
                                                            add("ratione"),
                                                            add("animi"),
                                                            add("occaecati"),
                                                            add("inventore"),
                                                        }};
                                                        kind = "repudiandae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("perspiciatis"),
                                                            add("ipsam"),
                                                            add("error"),
                                                            add("cum"),
                                                        }};
                                                    }};
                                                    kind = "cum";
                                                }}),
                                            }};
                                            kind = "veniam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "temporibus";
                                                        ids = new String[]{{
                                                            add("natus"),
                                                            add("possimus"),
                                                            add("est"),
                                                        }};
                                                        kind = "perferendis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("molestias"),
                                                            add("eum"),
                                                            add("facilis"),
                                                            add("ut"),
                                                        }};
                                                    }};
                                                    kind = "veritatis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dignissimos";
                                                        ids = new String[]{{
                                                            add("hic"),
                                                        }};
                                                        kind = "iste";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("facere"),
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "dolor";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fuga";
                                                        ids = new String[]{{
                                                            add("nisi"),
                                                            add("assumenda"),
                                                        }};
                                                        kind = "pariatur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("velit"),
                                                        }};
                                                    }};
                                                    kind = "reiciendis";
                                                }}),
                                            }};
                                            kind = "at";
                                        }}),
                                    }};
                                    kind = "temporibus";
                                    name = "Dr. Randal Nicolas";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-04-09");
                            kind = "nulla";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST24_MONTHS;
                            startDate = LocalDate.parse("2022-03-18");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "voluptatum";
                                name = "Francis Bradtke";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "culpa";
                                name = "Mrs. Guillermo Robel";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "porro";
                                name = "Gwendolyn Buckridge";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quibusdam";
                                name = "Ann Hartmann";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "nemo";
                            etag = "molestias";
                            id = "103a86fb-6d6b-4448-adba-df2ffda03c39";
                            kind = "error";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "consequuntur";
                        }};;
                        metricNames = new String[]{{
                            add("quod"),
                            add("dolor"),
                            add("harum"),
                            add("corporis"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eum";
                                            ids = new String[]{{
                                                add("consectetur"),
                                                add("pariatur"),
                                            }};
                                            kind = "aut";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("alias"),
                                                add("aliquid"),
                                                add("eveniet"),
                                                add("deserunt"),
                                            }};
                                        }};
                                        kind = "rem";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "incidunt";
                                            ids = new String[]{{
                                                add("soluta"),
                                                add("praesentium"),
                                                add("quae"),
                                            }};
                                            kind = "iste";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("maxime"),
                                                add("reprehenderit"),
                                                add("alias"),
                                                add("rerum"),
                                            }};
                                        }};
                                        kind = "nesciunt";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "nulla";
                                            ids = new String[]{{
                                                add("beatae"),
                                                add("alias"),
                                                add("occaecati"),
                                                add("architecto"),
                                            }};
                                            kind = "esse";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("earum"),
                                                add("earum"),
                                                add("magnam"),
                                                add("qui"),
                                            }};
                                        }};
                                        kind = "qui";
                                    }}),
                                }};
                                kind = "quasi";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quibusdam";
                                            ids = new String[]{{
                                                add("sapiente"),
                                            }};
                                            kind = "ducimus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("ab"),
                                                add("accusamus"),
                                                add("soluta"),
                                            }};
                                        }};
                                        kind = "delectus";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odit";
                                            ids = new String[]{{
                                                add("non"),
                                                add("voluptates"),
                                                add("odio"),
                                                add("veniam"),
                                            }};
                                            kind = "non";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("facere"),
                                                add("ipsam"),
                                                add("nihil"),
                                            }};
                                        }};
                                        kind = "impedit";
                                    }}),
                                }};
                                kind = "sed";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "ipsam";
                                id = "a1758f5e-cf39-4d13-bb2b-38ee3e621504";
                                kind = "tenetur";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "optio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "temporibus";
                                etag = "iure";
                                id = "528f0608-51c4-4345-a2e1-3a0bf1ffb2d8";
                                kind = "quia";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "inventore";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "pariatur";
                                name = "Lewis Orn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "eligendi";
                                name = "Dr. Joey Toy";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "perferendis";
                                etag = "quasi";
                                id = "1bd4d2ff-fd1a-4655-a4dd-eadf4b1a8ec2";
                                kind = "maiores";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "voluptates";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-20");
                            kind = "ipsum";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-05-15");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ex";
                            etag = "explicabo";
                            id = "a900db36-5cdb-4c77-8813-a2a6dc053aa6";
                            kind = "quos";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "commodi";
                        }};;
                        metricNames = new String[]{{
                            add("sit"),
                            add("quisquam"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "vitae";
                                name = "Rachael Hickle";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "corrupti";
                                name = "Josephine Kuhlman";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ipsum";
                                name = "Dr. Maxine Lubowitz";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "possimus";
                                name = "Fred Bashirian";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 2874;
                            impressionsLookbackWindow = 504591;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 270987;
                            maximumImpressionInteractions = 597146;
                            maximumInteractionGap = 916633;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "commodi";
                                    etag = "autem";
                                    id = "7c67b365-8412-4bc8-af9d-d5655a97781f";
                                    kind = "totam";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "maiores";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "perspiciatis";
                                    etag = "accusantium";
                                    id = "a43699cb-49fc-4257-abb7-d8f720e541cc";
                                    kind = "eligendi";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "nulla";
                                }}),
                            }};
                            kind = "ea";
                            metricNames = new String[]{{
                                add("optio"),
                                add("maiores"),
                                add("animi"),
                                add("aliquid"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "delectus";
                                    etag = "aspernatur";
                                    id = "277316de-f416-4a04-a818-a8f3e70b461a";
                                    kind = "ex";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "voluptate";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "deserunt";
                                    etag = "magni";
                                    id = "7cf5b6b4-14b6-406e-87bf-1d1c27182f07";
                                    kind = "assumenda";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quod";
                                }}),
                            }};
                            kind = "ad";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-06");
                            kind = "minima";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2021-12-17");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "perferendis";
                                etag = "dolores";
                                id = "81624aea-c444-406d-bbe9-ac5cca7b9aa6";
                                kind = "minima";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "blanditiis";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "architecto";
                                name = "Dallas Sporer";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "veritatis";
                                name = "Lora Stehr";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Dr. Alton Thompson";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("explicabo"),
                            add("reiciendis"),
                            add("sequi"),
                            add("eum"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("ducimus"),
                            add("nulla"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 431108;
                        expirationDate = LocalDate.parse("2021-12-24");
                        repeats = "provident";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SATURDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2022-11-13");
                        timezone = "error";
                    }};;
                    subAccountId = "illum";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "reprehenderit";
                alt = AltEnum.PROTO;
                callback = "unde";
                fields = "tempore";
                key = "adipisci";
                oauthToken = "beatae";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "expedita";
                uploadProtocol = "illum";
            }};            

            DfareportingReportsUpdateResponse res = sdk.reports.dfareportingReportsUpdate(req, new DfareportingReportsUpdateSecurity("assumenda", "perferendis") {{
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
