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
import org.openapis.openapi.models.shared.UvarFilter;
import org.openapis.openapi.models.shared.UvarFilterMatchEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsCompatibleFieldsQueryRequest req = new DfareportingReportsCompatibleFieldsQueryRequest("alias") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "expedita";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "suscipit";
                                    etag = "cupiditate";
                                    id = "907f9894-4145-42a9-b01f-3442c61be133";
                                    kind = "distinctio";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "optio";
                                }}),
                            }};
                            kind = "nulla";
                            metricNames = new String[]{{
                                add("corporis"),
                                add("neque"),
                                add("eos"),
                                add("nam"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ullam";
                                    etag = "eos";
                                    id = "6f862853-fe28-459c-a322-231fe6664c41";
                                    kind = "pariatur";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "maiores";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nam";
                                    etag = "est";
                                    id = "5cba069b-8d29-41be-b810-a2aa8749479e";
                                    kind = "quibusdam";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "modi";
                                }}),
                            }};
                            kind = "maiores";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-03-08");
                            kind = "ducimus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST90_DAYS;
                            startDate = LocalDate.parse("2022-12-12");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "repellat";
                                etag = "blanditiis";
                                id = "7f08f392-7107-46a2-8b40-c8f08bff1081";
                                kind = "saepe";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "praesentium";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "maiores";
                                etag = "blanditiis";
                                id = "6996c8e2-2be0-4a3c-b478-93bd23f86600";
                                kind = "minus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "inventore";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "porro";
                                etag = "nihil";
                                id = "834273ca-a911-48b3-8f1b-61a331a54dc1";
                                kind = "voluptatem";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "iste";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "modi";
                                etag = "reiciendis";
                                id = "92fed939-ba8f-471e-a992-c20ee1228ac3";
                                kind = "id";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "optio";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "dolore";
                                name = "Christie Champlin MD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "beatae";
                                name = "Kellie Nikolaus";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("sunt"),
                            add("magnam"),
                            add("quisquam"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "porro";
                                name = "Maggie Corwin DVM";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "libero";
                                name = "Marty Ernser";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "beatae";
                                name = "Christian Jerde";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolor";
                                name = "Helen Abbott";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-05");
                            kind = "sint";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST90_DAYS;
                            startDate = LocalDate.parse("2022-03-02");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nisi";
                                etag = "possimus";
                                id = "2a7c7d1e-a0e7-49fa-9bbe-5f179f650b1e";
                                kind = "quam";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ducimus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "repudiandae";
                                etag = "ducimus";
                                id = "e4396713-bacc-4e07-aabd-61918d279c10";
                                kind = "maxime";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "blanditiis";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("ab"),
                            add("aliquid"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("repellendus"),
                            add("in"),
                            add("praesentium"),
                            add("rerum"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.ATTACHMENT;
                        message = "fugit";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Carli41@gmail.com";
                                kind = "odit";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Lucie19@hotmail.com";
                                kind = "natus";
                            }}),
                        }};
                    }};;
                    etag = "vel";
                    fileName = "aspernatur";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eum";
                                etag = "esse";
                                id = "e72b3a65-024b-4157-b9bb-6ef72a50871d";
                                kind = "unde";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "autem";
                                id = "1a7def16-8b6c-4cb2-822b-4a9850ed2f4a";
                                kind = "veritatis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "excepturi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "numquam";
                                id = "ae55140e-7572-46e0-83c2-f0294192518c";
                                kind = "saepe";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "incidunt";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-03-23");
                            kind = "natus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_YEAR;
                            startDate = LocalDate.parse("2021-02-10");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nisi";
                                etag = "provident";
                                id = "f6f1cf1a-3f02-43c6-a9e6-a626012eba05";
                                kind = "iusto";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "quos";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "rem";
                                etag = "placeat";
                                id = "6720c310-3f1a-440c-8f3e-c8688fd8ec6f";
                                kind = "optio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "consectetur";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "dolores";
                                name = "Jan Abshire";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "officiis";
                            etag = "vero";
                            id = "e004eba7-bf87-432b-a509-c5087131f06f";
                            kind = "voluptatem";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "quo";
                        }};;
                        metricNames = new String[]{{
                            add("enim"),
                            add("enim"),
                            add("officia"),
                            add("quas"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "voluptatum";
                    kind = "iure";
                    lastModifiedTime = "veritatis";
                    name = "Paula Schaefer";
                    ownerProfileId = "iste";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ullam";
                                etag = "hic";
                                id = "f797a5da-664b-47e7-b8a7-4baaa2832bb6";
                                kind = "ad";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "laboriosam";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "fugit";
                            kind = "illum";
                            name = "Dr. Lee Frami";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "deserunt";
                                                        ids = new String[]{{
                                                            add("nisi"),
                                                            add("harum"),
                                                            add("placeat"),
                                                        }};
                                                        kind = "debitis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("repellat"),
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "magnam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dolore";
                                                        kind = "dolores";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "unde";
                                                        ids = new String[]{{
                                                            add("veniam"),
                                                            add("at"),
                                                            add("eveniet"),
                                                        }};
                                                        kind = "debitis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("cumque"),
                                                            add("repellendus"),
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    kind = "sed";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "officia";
                                                        kind = "voluptatum";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                            add("ab"),
                                                            add("rerum"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "quis";
                                        }}),
                                    }};
                                    kind = "corrupti";
                                    name = "Lamar Jaskolski";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "maxime";
                                                        ids = new String[]{{
                                                            add("illum"),
                                                        }};
                                                        kind = "facilis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                    kind = "pariatur";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nostrum";
                                                        kind = "voluptatum";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("sed"),
                                                            add("magnam"),
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "facere";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequuntur";
                                                        ids = new String[]{{
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
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "praesentium";
                                                        kind = "maiores";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("ducimus"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "occaecati";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "atque";
                                                        ids = new String[]{{
                                                            add("commodi"),
                                                        }};
                                                        kind = "quam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dolor"),
                                                            add("facere"),
                                                        }};
                                                    }};
                                                    kind = "est";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "aut";
                                                        kind = "iusto";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("natus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ea";
                                                        ids = new String[]{{
                                                            add("deserunt"),
                                                            add("officiis"),
                                                            add("nam"),
                                                            add("totam"),
                                                        }};
                                                        kind = "ex";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                            add("reprehenderit"),
                                                            add("adipisci"),
                                                        }};
                                                    }};
                                                    kind = "voluptatem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "illum";
                                                        kind = "laudantium";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("rerum"),
                                                            add("rem"),
                                                            add("unde"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "pariatur";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quo";
                                                        ids = new String[]{{
                                                            add("nisi"),
                                                            add("alias"),
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "ipsam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("suscipit"),
                                                            add("voluptatibus"),
                                                        }};
                                                    }};
                                                    kind = "quo";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "alias";
                                                        kind = "debitis";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ex"),
                                                            add("iusto"),
                                                            add("quae"),
                                                            add("veniam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corporis";
                                                        ids = new String[]{{
                                                            add("explicabo"),
                                                            add("assumenda"),
                                                            add("accusantium"),
                                                            add("autem"),
                                                        }};
                                                        kind = "fuga";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("in"),
                                                        }};
                                                    }};
                                                    kind = "aut";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nulla";
                                                        kind = "vel";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("natus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "in";
                                                        ids = new String[]{{
                                                            add("nemo"),
                                                            add("totam"),
                                                            add("architecto"),
                                                            add("a"),
                                                        }};
                                                        kind = "officia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dolorum"),
                                                            add("deserunt"),
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "pariatur";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "laudantium";
                                                        kind = "consequatur";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "rem";
                                        }}),
                                    }};
                                    kind = "eaque";
                                    name = "Kristen Zboncak";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "recusandae";
                                                        ids = new String[]{{
                                                            add("quia"),
                                                            add("error"),
                                                            add("laudantium"),
                                                            add("ab"),
                                                        }};
                                                        kind = "numquam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                            add("explicabo"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                    kind = "perspiciatis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "tempore";
                                                        kind = "nisi";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("alias"),
                                                            add("libero"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "perferendis";
                                                        ids = new String[]{{
                                                            add("temporibus"),
                                                            add("quos"),
                                                            add("consequuntur"),
                                                            add("earum"),
                                                        }};
                                                        kind = "excepturi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("repellat"),
                                                            add("delectus"),
                                                            add("quidem"),
                                                            add("quibusdam"),
                                                        }};
                                                    }};
                                                    kind = "et";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "officiis";
                                                        kind = "vitae";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("illo"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "nulla";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quisquam";
                                                        ids = new String[]{{
                                                            add("sint"),
                                                            add("doloremque"),
                                                        }};
                                                        kind = "sequi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dicta"),
                                                            add("quibusdam"),
                                                            add("inventore"),
                                                        }};
                                                    }};
                                                    kind = "praesentium";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nihil";
                                                        kind = "quidem";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tempore";
                                                        ids = new String[]{{
                                                            add("doloribus"),
                                                            add("possimus"),
                                                        }};
                                                        kind = "non";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("tenetur"),
                                                            add("earum"),
                                                            add("eaque"),
                                                        }};
                                                    }};
                                                    kind = "non";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "eius";
                                                        kind = "cupiditate";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                            add("odit"),
                                                            add("eaque"),
                                                            add("sed"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "exercitationem";
                                                        ids = new String[]{{
                                                            add("id"),
                                                            add("omnis"),
                                                        }};
                                                        kind = "ad";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quaerat"),
                                                        }};
                                                    }};
                                                    kind = "adipisci";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "maxime";
                                                        kind = "distinctio";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("aspernatur"),
                                                            add("possimus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aliquid";
                                                        ids = new String[]{{
                                                            add("minus"),
                                                            add("cupiditate"),
                                                            add("cupiditate"),
                                                        }};
                                                        kind = "quasi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("iste"),
                                                            add("totam"),
                                                            add("accusamus"),
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "dignissimos";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "unde";
                                                        kind = "aspernatur";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nihil"),
                                                            add("perspiciatis"),
                                                            add("officia"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "ut";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sequi";
                                                        ids = new String[]{{
                                                            add("laboriosam"),
                                                            add("dolorum"),
                                                            add("rem"),
                                                            add("impedit"),
                                                        }};
                                                        kind = "perspiciatis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("totam"),
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                    kind = "quidem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "at";
                                                        kind = "rem";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("illum"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "quae";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "natus";
                                                        ids = new String[]{{
                                                            add("quod"),
                                                            add("quo"),
                                                            add("repellat"),
                                                        }};
                                                        kind = "voluptatum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("amet"),
                                                            add("totam"),
                                                            add("ex"),
                                                            add("quae"),
                                                        }};
                                                    }};
                                                    kind = "beatae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "praesentium";
                                                        kind = "commodi";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("voluptate"),
                                                            add("nisi"),
                                                            add("minus"),
                                                            add("eaque"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequatur";
                                                        ids = new String[]{{
                                                            add("tenetur"),
                                                        }};
                                                        kind = "est";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("dicta"),
                                                            add("nesciunt"),
                                                            add("dolorum"),
                                                        }};
                                                    }};
                                                    kind = "placeat";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sed";
                                                        kind = "ut";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ab"),
                                                            add("quaerat"),
                                                            add("sequi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quidem";
                                                        ids = new String[]{{
                                                            add("voluptas"),
                                                            add("suscipit"),
                                                            add("optio"),
                                                        }};
                                                        kind = "ullam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("officia"),
                                                            add("ab"),
                                                        }};
                                                    }};
                                                    kind = "recusandae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quia";
                                                        kind = "iure";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("ducimus"),
                                                            add("ratione"),
                                                            add("accusantium"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quidem";
                                                        ids = new String[]{{
                                                            add("dolorem"),
                                                            add("ducimus"),
                                                            add("harum"),
                                                            add("sit"),
                                                        }};
                                                        kind = "recusandae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nam"),
                                                            add("quod"),
                                                            add("dolore"),
                                                            add("atque"),
                                                        }};
                                                    }};
                                                    kind = "facere";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "temporibus";
                                                        kind = "quo";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("excepturi"),
                                                            add("rerum"),
                                                            add("ipsam"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "neque";
                                        }}),
                                    }};
                                    kind = "quis";
                                    name = "Mrs. Karen Hilll Sr.";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-02-23");
                            kind = "porro";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2022-12-22");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
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
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "occaecati";
                            etag = "eos";
                            id = "782d34e0-b8fc-40d5-9f57-b9f9820be078";
                            kind = "aperiam";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "maxime";
                        }};;
                        metricNames = new String[]{{
                            add("commodi"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "necessitatibus";
                                            ids = new String[]{{
                                                add("maiores"),
                                            }};
                                            kind = "esse";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("quaerat"),
                                            }};
                                        }};
                                        kind = "magnam";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "recusandae";
                                            kind = "accusantium";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("tempora"),
                                                add("reprehenderit"),
                                                add("deleniti"),
                                                add("saepe"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "cum";
                                            ids = new String[]{{
                                                add("amet"),
                                                add("error"),
                                            }};
                                            kind = "magnam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("maiores"),
                                            }};
                                        }};
                                        kind = "reprehenderit";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "dolore";
                                            kind = "blanditiis";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("delectus"),
                                                add("impedit"),
                                                add("quisquam"),
                                                add("distinctio"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "vel";
                                            ids = new String[]{{
                                                add("repellendus"),
                                                add("minima"),
                                                add("numquam"),
                                            }};
                                            kind = "ab";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("tempore"),
                                                add("sequi"),
                                            }};
                                        }};
                                        kind = "sint";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "amet";
                                            kind = "voluptatibus";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("eum"),
                                                add("nisi"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "suscipit";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "expedita";
                                            ids = new String[]{{
                                                add("laborum"),
                                                add("nesciunt"),
                                                add("magni"),
                                                add("consequuntur"),
                                            }};
                                            kind = "quae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("recusandae"),
                                                add("porro"),
                                                add("sequi"),
                                                add("reprehenderit"),
                                            }};
                                        }};
                                        kind = "sint";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "optio";
                                            kind = "voluptas";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("saepe"),
                                                add("officia"),
                                                add("illo"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "temporibus";
                                            ids = new String[]{{
                                                add("praesentium"),
                                                add("porro"),
                                            }};
                                            kind = "minima";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("tenetur"),
                                            }};
                                        }};
                                        kind = "omnis";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "itaque";
                                            kind = "aspernatur";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("provident"),
                                                add("voluptatem"),
                                                add("earum"),
                                                add("quibusdam"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "enim";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odio";
                                            ids = new String[]{{
                                                add("libero"),
                                                add("repellat"),
                                            }};
                                            kind = "porro";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("molestiae"),
                                                add("ducimus"),
                                            }};
                                        }};
                                        kind = "voluptatibus";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "voluptatem";
                                            kind = "doloribus";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("eius"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "mollitia";
                                            ids = new String[]{{
                                                add("debitis"),
                                                add("magnam"),
                                            }};
                                            kind = "deleniti";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("hic"),
                                                add("nam"),
                                                add("eum"),
                                            }};
                                        }};
                                        kind = "assumenda";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "officia";
                                            kind = "repudiandae";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("sint"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "cumque";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quisquam";
                                            ids = new String[]{{
                                                add("impedit"),
                                            }};
                                            kind = "facilis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("atque"),
                                            }};
                                        }};
                                        kind = "maxime";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "vel";
                                            kind = "neque";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("optio"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "est";
                                            ids = new String[]{{
                                                add("at"),
                                                add("deserunt"),
                                                add("rerum"),
                                            }};
                                            kind = "voluptate";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("est"),
                                                add("magnam"),
                                            }};
                                        }};
                                        kind = "tempora";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "modi";
                                            kind = "facere";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("nulla"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "culpa";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "distinctio";
                                etag = "itaque";
                                id = "58eb3d54-ba1c-4b3a-949b-8e5c18b25e87";
                                kind = "maiores";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "incidunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "corrupti";
                                etag = "aspernatur";
                                id = "3255be95-c0cb-4cb2-8a87-908d73809a02";
                                kind = "doloribus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "itaque";
                                etag = "unde";
                                id = "228b5606-5a50-474b-afb8-af6849d2b994";
                                kind = "consequatur";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "neque";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "eum";
                            kind = "adipisci";
                            name = "Daniel Morissette";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "velit";
                                                        ids = new String[]{{
                                                            add("voluptate"),
                                                            add("ea"),
                                                            add("eveniet"),
                                                        }};
                                                        kind = "ratione";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("vero"),
                                                            add("tenetur"),
                                                            add("perspiciatis"),
                                                            add("quisquam"),
                                                        }};
                                                    }};
                                                    kind = "reprehenderit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "suscipit";
                                                        kind = "minima";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("fugiat"),
                                                            add("iusto"),
                                                            add("ipsum"),
                                                            add("corporis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tempora";
                                                        ids = new String[]{{
                                                            add("veniam"),
                                                            add("placeat"),
                                                            add("nam"),
                                                            add("provident"),
                                                        }};
                                                        kind = "non";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ducimus"),
                                                            add("voluptatem"),
                                                        }};
                                                    }};
                                                    kind = "quasi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptate";
                                                        kind = "harum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("fugit"),
                                                            add("perferendis"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "eius";
                                        }}),
                                    }};
                                    kind = "libero";
                                    name = "Roy Keebler";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cupiditate";
                                                        ids = new String[]{{
                                                            add("excepturi"),
                                                            add("quos"),
                                                            add("eos"),
                                                        }};
                                                        kind = "voluptatum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("possimus"),
                                                            add("debitis"),
                                                            add("reiciendis"),
                                                        }};
                                                    }};
                                                    kind = "optio";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "perferendis";
                                                        kind = "harum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("natus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eum";
                                                        ids = new String[]{{
                                                            add("autem"),
                                                        }};
                                                        kind = "eligendi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("aut"),
                                                            add("laborum"),
                                                            add("facere"),
                                                        }};
                                                    }};
                                                    kind = "error";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "atque";
                                                        kind = "unde";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("officia"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consectetur";
                                                        ids = new String[]{{
                                                            add("quam"),
                                                            add("et"),
                                                        }};
                                                        kind = "veniam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("possimus"),
                                                            add("laborum"),
                                                            add("voluptatem"),
                                                            add("quaerat"),
                                                        }};
                                                    }};
                                                    kind = "eius";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "a";
                                                        kind = "officia";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("illum"),
                                                            add("ex"),
                                                            add("saepe"),
                                                            add("dicta"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sequi";
                                                        ids = new String[]{{
                                                            add("aliquid"),
                                                            add("consequuntur"),
                                                            add("quae"),
                                                        }};
                                                        kind = "saepe";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("cupiditate"),
                                                            add("illo"),
                                                            add("totam"),
                                                            add("eligendi"),
                                                        }};
                                                    }};
                                                    kind = "iure";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quis";
                                                        kind = "distinctio";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("rem"),
                                                            add("commodi"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "minus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "amet";
                                                        ids = new String[]{{
                                                            add("laudantium"),
                                                            add("fuga"),
                                                            add("voluptatem"),
                                                        }};
                                                        kind = "soluta";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eius"),
                                                            add("eum"),
                                                        }};
                                                    }};
                                                    kind = "beatae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nihil";
                                                        kind = "quibusdam";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nemo"),
                                                            add("minus"),
                                                            add("officiis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ipsum";
                                                        ids = new String[]{{
                                                            add("ut"),
                                                        }};
                                                        kind = "numquam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("eius"),
                                                            add("itaque"),
                                                            add("expedita"),
                                                            add("neque"),
                                                        }};
                                                    }};
                                                    kind = "cum";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "ipsum";
                                                        kind = "quasi";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("voluptatem"),
                                                            add("neque"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quo";
                                                        ids = new String[]{{
                                                            add("et"),
                                                        }};
                                                        kind = "aliquam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("deleniti"),
                                                            add("esse"),
                                                            add("iusto"),
                                                            add("explicabo"),
                                                        }};
                                                    }};
                                                    kind = "cumque";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "ipsam";
                                                        kind = "consectetur";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("illo"),
                                                            add("possimus"),
                                                            add("possimus"),
                                                            add("ea"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tempore";
                                                        ids = new String[]{{
                                                            add("iure"),
                                                            add("modi"),
                                                            add("rerum"),
                                                            add("non"),
                                                        }};
                                                        kind = "quis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("natus"),
                                                            add("blanditiis"),
                                                            add("sequi"),
                                                            add("vitae"),
                                                        }};
                                                    }};
                                                    kind = "accusamus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "molestiae";
                                                        kind = "omnis";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("accusantium"),
                                                            add("debitis"),
                                                            add("exercitationem"),
                                                            add("ducimus"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "voluptatibus";
                                        }}),
                                    }};
                                    kind = "enim";
                                    name = "Kelley Reilly";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tempore";
                                                        ids = new String[]{{
                                                            add("laboriosam"),
                                                            add("aut"),
                                                        }};
                                                        kind = "cupiditate";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("reiciendis"),
                                                            add("est"),
                                                            add("ut"),
                                                            add("dolore"),
                                                        }};
                                                    }};
                                                    kind = "est";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptatum";
                                                        kind = "quibusdam";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("sit"),
                                                            add("cumque"),
                                                            add("quibusdam"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "quibusdam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatum";
                                                        ids = new String[]{{
                                                            add("perferendis"),
                                                            add("soluta"),
                                                        }};
                                                        kind = "tenetur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                            add("minus"),
                                                            add("soluta"),
                                                        }};
                                                    }};
                                                    kind = "impedit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quas";
                                                        kind = "facilis";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("commodi"),
                                                            add("eaque"),
                                                            add("similique"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "voluptatibus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "similique";
                                                        ids = new String[]{{
                                                            add("nobis"),
                                                            add("laboriosam"),
                                                        }};
                                                        kind = "non";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                    kind = "eos";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "repellendus";
                                                        kind = "ipsam";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("quos"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptas";
                                                        ids = new String[]{{
                                                            add("illo"),
                                                            add("sit"),
                                                            add("culpa"),
                                                            add("blanditiis"),
                                                        }};
                                                        kind = "quaerat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("illo"),
                                                            add("perspiciatis"),
                                                            add("possimus"),
                                                        }};
                                                    }};
                                                    kind = "modi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "ex";
                                                        kind = "nisi";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("laborum"),
                                                            add("omnis"),
                                                            add("reprehenderit"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("perspiciatis"),
                                                            add("molestias"),
                                                        }};
                                                        kind = "reprehenderit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eligendi"),
                                                            add("consequatur"),
                                                            add("optio"),
                                                            add("vero"),
                                                        }};
                                                    }};
                                                    kind = "eligendi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "facilis";
                                                        kind = "quisquam";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("libero"),
                                                            add("possimus"),
                                                            add("fugit"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "modi";
                                                        ids = new String[]{{
                                                            add("voluptates"),
                                                            add("cumque"),
                                                            add("ex"),
                                                        }};
                                                        kind = "voluptates";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("magni"),
                                                            add("aliquam"),
                                                            add("accusantium"),
                                                        }};
                                                    }};
                                                    kind = "distinctio";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "et";
                                                        kind = "quo";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("impedit"),
                                                            add("perspiciatis"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "optio";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "commodi";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                            add("nulla"),
                                                        }};
                                                        kind = "sed";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("fugiat"),
                                                            add("error"),
                                                            add("necessitatibus"),
                                                            add("ullam"),
                                                        }};
                                                    }};
                                                    kind = "deleniti";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "fugiat";
                                                        kind = "temporibus";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("autem"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "voluptas";
                                        }}),
                                    }};
                                    kind = "nemo";
                                    name = "Danny Bins";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ipsam";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("at"),
                                                        }};
                                                        kind = "quaerat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("sunt"),
                                                        }};
                                                    }};
                                                    kind = "quod";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "veritatis";
                                                        kind = "iusto";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("error"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequuntur";
                                                        ids = new String[]{{
                                                            add("facere"),
                                                            add("voluptate"),
                                                            add("quas"),
                                                            add("molestiae"),
                                                        }};
                                                        kind = "blanditiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("dicta"),
                                                            add("soluta"),
                                                        }};
                                                    }};
                                                    kind = "delectus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quos";
                                                        kind = "quo";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("ab"),
                                                            add("quos"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "modi";
                                                        ids = new String[]{{
                                                            add("voluptatibus"),
                                                        }};
                                                        kind = "officiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("deleniti"),
                                                            add("voluptate"),
                                                            add("repudiandae"),
                                                            add("id"),
                                                        }};
                                                    }};
                                                    kind = "illo";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "aut";
                                                        kind = "ratione";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                            add("aut"),
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "recusandae";
                                                        ids = new String[]{{
                                                            add("beatae"),
                                                            add("commodi"),
                                                            add("ipsa"),
                                                        }};
                                                        kind = "suscipit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("iste"),
                                                            add("accusamus"),
                                                            add("hic"),
                                                        }};
                                                    }};
                                                    kind = "beatae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "iusto";
                                                        kind = "cum";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("reprehenderit"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "ullam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellendus";
                                                        ids = new String[]{{
                                                            add("laborum"),
                                                            add("quidem"),
                                                        }};
                                                        kind = "veniam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("totam"),
                                                            add("alias"),
                                                            add("nulla"),
                                                            add("accusamus"),
                                                        }};
                                                    }};
                                                    kind = "id";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "reprehenderit";
                                                        kind = "dignissimos";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("omnis"),
                                                            add("cupiditate"),
                                                            add("dolor"),
                                                            add("illo"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "debitis";
                                                        ids = new String[]{{
                                                            add("molestias"),
                                                            add("quibusdam"),
                                                            add("quasi"),
                                                            add("aperiam"),
                                                        }};
                                                        kind = "aliquid";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("maiores"),
                                                            add("magni"),
                                                            add("quisquam"),
                                                            add("dolores"),
                                                        }};
                                                    }};
                                                    kind = "aliquid";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "culpa";
                                                        kind = "distinctio";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                            add("animi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quia";
                                                        ids = new String[]{{
                                                            add("repudiandae"),
                                                            add("id"),
                                                            add("aperiam"),
                                                        }};
                                                        kind = "commodi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("quibusdam"),
                                                        }};
                                                    }};
                                                    kind = "autem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "soluta";
                                                        kind = "molestiae";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("sequi"),
                                                            add("ut"),
                                                            add("maxime"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "deserunt";
                                        }}),
                                    }};
                                    kind = "labore";
                                    name = "Eva Runolfsdottir";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-19");
                            kind = "tempora";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-10-28");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "reiciendis";
                                name = "Ms. Beatrice Corwin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sunt";
                                name = "Angelo Gutkowski PhD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Calvin Pouros";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "consequatur";
                            etag = "eum";
                            id = "16ee9227-575b-4d60-9aa0-e149cd1ccdd3";
                            kind = "ea";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "rerum";
                        }};;
                        metricNames = new String[]{{
                            add("reiciendis"),
                            add("sint"),
                            add("qui"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "alias";
                                            ids = new String[]{{
                                                add("illo"),
                                            }};
                                            kind = "quis";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("laboriosam"),
                                            }};
                                        }};
                                        kind = "deleniti";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "excepturi";
                                            kind = "unde";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("numquam"),
                                                add("delectus"),
                                                add("delectus"),
                                                add("accusamus"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "cum";
                                            ids = new String[]{{
                                                add("expedita"),
                                                add("officiis"),
                                                add("impedit"),
                                            }};
                                            kind = "ullam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("beatae"),
                                            }};
                                        }};
                                        kind = "rem";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "laborum";
                                            kind = "voluptatum";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("expedita"),
                                                add("consequatur"),
                                                add("beatae"),
                                                add("fugiat"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eos";
                                            ids = new String[]{{
                                                add("iusto"),
                                                add("hic"),
                                                add("odio"),
                                            }};
                                            kind = "soluta";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("suscipit"),
                                                add("culpa"),
                                            }};
                                        }};
                                        kind = "quas";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "ipsam";
                                            kind = "enim";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("perferendis"),
                                                add("rem"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "quos";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "id";
                                etag = "ratione";
                                id = "26341acc-cca6-463d-8a85-95c1b32bb213";
                                kind = "repudiandae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "harum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dolor";
                                etag = "vitae";
                                id = "cd6a5be7-4906-4b96-8636-e74d28a48149";
                                kind = "similique";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "distinctio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "rem";
                                etag = "tempora";
                                id = "11986405-876b-4308-b113-de4061082d09";
                                kind = "corporis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "placeat";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sint";
                                name = "Lionel Marquardt";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ad";
                                name = "Oliver Heathcote Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "expedita";
                                name = "Dr. Dale Kovacek";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "dolore";
                                name = "Robin Bradtke";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ducimus";
                                name = "Emily Brakus";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "rerum";
                                name = "Sam Boehm";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quam";
                                etag = "beatae";
                                id = "72874c37-7c8d-4439-ac6b-d2cad006d77c";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "soluta";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-07-24");
                            kind = "quo";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2021-03-25");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "odio";
                            etag = "aliquam";
                            id = "4c5b645a-4af2-4fca-bccb-ca32925eb06a";
                            kind = "autem";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "est";
                        }};;
                        metricNames = new String[]{{
                            add("officiis"),
                            add("fugit"),
                            add("explicabo"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "et";
                                name = "Ollie Koepp";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ipsam";
                                name = "Felix Wuckert";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quis";
                                name = "Maryann Upton";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 496357;
                            impressionsLookbackWindow = 13507;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 953563;
                            maximumImpressionInteractions = 769956;
                            maximumInteractionGap = 267807;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "minus";
                                    etag = "odit";
                                    id = "82b8716c-27f6-4b17-9780-304c40ac2b4a";
                                    kind = "temporibus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "eos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "exercitationem";
                                    etag = "ut";
                                    id = "fde37724-350e-4d85-a7f8-cc2911a6b7eb";
                                    kind = "fugiat";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "commodi";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "alias";
                                    etag = "doloremque";
                                    id = "9f01dd38-523c-4da4-abb9-fd83f83df9b0";
                                    kind = "minus";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "vel";
                                }}),
                            }};
                            kind = "fuga";
                            metricNames = new String[]{{
                                add("iste"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "necessitatibus";
                                    etag = "fugit";
                                    id = "e9c2205d-fe76-45bf-bbcb-86015f216aa0";
                                    kind = "magnam";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "esse";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "consequatur";
                                    etag = "odio";
                                    id = "fa739824-7a87-4217-bed9-62df3eee7c38";
                                    kind = "nostrum";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "in";
                                }}),
                            }};
                            kind = "natus";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-29");
                            kind = "officiis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YESTERDAY;
                            startDate = LocalDate.parse("2022-10-13");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quos";
                                etag = "temporibus";
                                id = "bcf6e19b-9012-4c44-8e23-1ba147727de9";
                                kind = "ullam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "esse";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "odit";
                                etag = "fuga";
                                id = "dabf6800-b01b-4cbc-832f-2c19dbf7111a";
                                kind = "molestias";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "assumenda";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "maiores";
                                etag = "quia";
                                id = "1523e371-3652-417a-ae59-6aa41b9e2053";
                                kind = "est";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "quos";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nesciunt";
                                name = "Marion Feest";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ad";
                                name = "Gary Dach";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "iusto";
                                name = "Melanie Shields";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolor";
                                name = "Dallas Okuneva";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("quibusdam"),
                            add("dolores"),
                            add("officia"),
                            add("consequatur"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("error"),
                            add("architecto"),
                            add("facilis"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 408205;
                        expirationDate = LocalDate.parse("2022-10-14");
                        repeats = "reprehenderit";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-03-19");
                        timezone = "esse";
                    }};;
                    subAccountId = "unde";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "id";
                fields = "inventore";
                key = "praesentium";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "veritatis";
                uploadProtocol = "sunt";
            }};            

            DfareportingReportsCompatibleFieldsQueryResponse res = sdk.reports.dfareportingReportsCompatibleFieldsQuery(req, new DfareportingReportsCompatibleFieldsQuerySecurity("excepturi", "assumenda") {{
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

            DfareportingReportsDeleteRequest req = new DfareportingReportsDeleteRequest("minus", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "libero";
                key = "iure";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "eaque";
                uploadProtocol = "impedit";
            }};            

            DfareportingReportsDeleteResponse res = sdk.reports.dfareportingReportsDelete(req, new DfareportingReportsDeleteSecurity("officia", "asperiores") {{
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

            DfareportingReportsFilesGetRequest req = new DfareportingReportsFilesGetRequest("quia", "magnam", "magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "itaque";
                alt = AltEnum.JSON;
                callback = "eaque";
                fields = "neque";
                key = "nulla";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "ratione";
                uploadProtocol = "voluptatem";
            }};            

            DfareportingReportsFilesGetResponse res = sdk.reports.dfareportingReportsFilesGet(req, new DfareportingReportsFilesGetSecurity("id", "eligendi") {{
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

            DfareportingReportsFilesListRequest req = new DfareportingReportsFilesListRequest("dolore", "nulla") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "aliquam";
                key = "eveniet";
                maxResults = 240343L;
                oauthToken = "excepturi";
                pageToken = "laboriosam";
                prettyPrint = false;
                quotaUser = "voluptates";
                sortField = DfareportingReportsFilesListSortFieldEnum.ID;
                sortOrder = DfareportingReportsFilesListSortOrderEnum.ASCENDING;
                uploadType = "sunt";
                uploadProtocol = "placeat";
            }};            

            DfareportingReportsFilesListResponse res = sdk.reports.dfareportingReportsFilesList(req, new DfareportingReportsFilesListSecurity("quis", "porro") {{
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

            DfareportingReportsGetRequest req = new DfareportingReportsGetRequest("impedit", "distinctio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "nihil";
                fields = "ipsum";
                key = "dolorem";
                oauthToken = "inventore";
                prettyPrint = false;
                quotaUser = "incidunt";
                uploadType = "illum";
                uploadProtocol = "fuga";
            }};            

            DfareportingReportsGetResponse res = sdk.reports.dfareportingReportsGet(req, new DfareportingReportsGetSecurity("quibusdam", "minima") {{
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
import org.openapis.openapi.models.shared.UvarFilter;
import org.openapis.openapi.models.shared.UvarFilterMatchEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsInsertRequest req = new DfareportingReportsInsertRequest("quas") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "praesentium";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "alias";
                                    etag = "ullam";
                                    id = "42e5a55a-10fd-48ac-8f48-2f9e9a53c304";
                                    kind = "assumenda";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "officiis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "sunt";
                                    etag = "qui";
                                    id = "2f0bfecc-4193-42d7-84b3-ae70934d9ebb";
                                    kind = "laboriosam";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "fugit";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "voluptatum";
                                    etag = "hic";
                                    id = "6f71b065-2fe6-4536-bb30-a414aa294d64";
                                    kind = "cumque";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quas";
                                }}),
                            }};
                            kind = "officia";
                            metricNames = new String[]{{
                                add("accusamus"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "inventore";
                                    etag = "officia";
                                    id = "807151a3-54ba-41a6-97dd-c39917b844c8";
                                    kind = "nemo";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "aspernatur";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "officia";
                                    etag = "omnis";
                                    id = "9e62f494-6ca2-4d72-a6cd-763812723aa0";
                                    kind = "adipisci";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "deleniti";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "amet";
                                    etag = "culpa";
                                    id = "1e1e7ab3-e07c-405e-93db-88f591f98329";
                                    kind = "delectus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "et";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "perspiciatis";
                                    etag = "qui";
                                    id = "2f7cad07-b654-4500-8a5b-36a222e3ff77";
                                    kind = "eaque";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "dolores";
                                }}),
                            }};
                            kind = "facilis";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-13");
                            kind = "vero";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YEAR_TO_DATE;
                            startDate = LocalDate.parse("2020-06-08");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ea";
                                etag = "eius";
                                id = "a2a875c6-a710-4e54-b47e-c6aaf9bd8327";
                                kind = "repudiandae";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "repellat";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "esse";
                                etag = "quibusdam";
                                id = "316145eb-dd82-42af-ac16-79d8a0a46646";
                                kind = "itaque";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "ea";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ipsam";
                                etag = "laudantium";
                                id = "e1817cde-0aee-48c7-a213-f425a0338b71";
                                kind = "distinctio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "possimus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "magni";
                                etag = "repellat";
                                id = "d3b636c0-7308-48e7-9ab7-ff2a12fb074c";
                                kind = "at";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "incidunt";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "dolores";
                                name = "Johnnie Aufderhar Sr.";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "blanditiis";
                                name = "Henrietta Streich";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "corporis";
                                name = "Jackie Farrell";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "autem";
                                name = "Lonnie Pouros";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("hic"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "tempora";
                                name = "Toby Glover DDS";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "placeat";
                                name = "Jeremiah Cartwright";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-03-12");
                            kind = "laboriosam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2020-04-30");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "amet";
                                etag = "blanditiis";
                                id = "75a4a2e8-7d87-4b51-a22e-77c0e6e11c88";
                                kind = "dolorem";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eos";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("pariatur"),
                            add("minus"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("harum"),
                            add("beatae"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "ipsum";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Mabel_Lowe@yahoo.com";
                                kind = "recusandae";
                            }}),
                        }};
                    }};;
                    etag = "aspernatur";
                    fileName = "enim";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "aliquid";
                                etag = "dolorum";
                                id = "4c14ff18-7497-4b14-8816-31a1660070c0";
                                kind = "soluta";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "at";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "officiis";
                                etag = "nihil";
                                id = "e50ea441-101c-4138-b462-923d50f751b2";
                                kind = "praesentium";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "animi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "neque";
                                etag = "consectetur";
                                id = "a86cc3ad-f852-471a-8653-9024bd09d0fc";
                                kind = "commodi";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quibusdam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "a";
                                etag = "doloribus";
                                id = "8fe0e0e4-6f22-45e2-9d79-d39d8790e2e6";
                                kind = "eaque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "labore";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-13");
                            kind = "sequi";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST24_MONTHS;
                            startDate = LocalDate.parse("2022-01-14");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "rerum";
                                etag = "fugit";
                                id = "b531bfb3-0eda-43f8-a5e3-92f22a77cb7a";
                                kind = "asperiores";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "tempore";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "neque";
                                name = "Clark Stroman IV";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "asperiores";
                                name = "Casey Altenwerth II";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "adipisci";
                            etag = "autem";
                            id = "c53d4159-955c-45c7-9760-4597f37719dd";
                            kind = "blanditiis";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "corrupti";
                        }};;
                        metricNames = new String[]{{
                            add("quos"),
                            add("explicabo"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "alias";
                    kind = "fugit";
                    lastModifiedTime = "aliquid";
                    name = "Ginger Mayer";
                    ownerProfileId = "labore";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "atque";
                                etag = "eligendi";
                                id = "9f8a0ac1-e04d-42ac-ab0c-de00e8ecf818";
                                kind = "culpa";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "amet";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "consequatur";
                                etag = "dolor";
                                id = "e93f00a1-8b21-4f06-94d1-7852d28be1db";
                                kind = "ipsa";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "at";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nisi";
                                etag = "error";
                                id = "19f83159-3a84-4ea7-9b15-c4c15fe6cd09";
                                kind = "dignissimos";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nisi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "esse";
                                etag = "veniam";
                                id = "597ecbeb-7982-4baf-9a7d-a6c29b938e51";
                                kind = "similique";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "necessitatibus";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "iure";
                            kind = "accusamus";
                            name = "Franklin Wisozk";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "asperiores";
                                                        ids = new String[]{{
                                                            add("est"),
                                                            add("perferendis"),
                                                            add("non"),
                                                            add("commodi"),
                                                        }};
                                                        kind = "voluptas";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("fuga"),
                                                            add("voluptates"),
                                                            add("quas"),
                                                            add("sunt"),
                                                        }};
                                                    }};
                                                    kind = "deleniti";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "fugit";
                                                        kind = "tempora";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("nisi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "veniam";
                                                        ids = new String[]{{
                                                            add("est"),
                                                            add("laborum"),
                                                        }};
                                                        kind = "excepturi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quod"),
                                                        }};
                                                    }};
                                                    kind = "modi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "occaecati";
                                                        kind = "occaecati";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("necessitatibus"),
                                                            add("tempore"),
                                                            add("illum"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "sunt";
                                        }}),
                                    }};
                                    kind = "eligendi";
                                    name = "Ted Koepp";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "optio";
                                                        ids = new String[]{{
                                                            add("quidem"),
                                                            add("voluptatibus"),
                                                            add("quod"),
                                                        }};
                                                        kind = "temporibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("officiis"),
                                                            add("porro"),
                                                        }};
                                                    }};
                                                    kind = "debitis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "iste";
                                                        kind = "eum";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("magnam"),
                                                            add("reiciendis"),
                                                            add("expedita"),
                                                            add("modi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fugit";
                                                        ids = new String[]{{
                                                            add("dolor"),
                                                            add("velit"),
                                                            add("ipsa"),
                                                            add("ut"),
                                                        }};
                                                        kind = "provident";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("reprehenderit"),
                                                        }};
                                                    }};
                                                    kind = "placeat";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "rerum";
                                                        kind = "molestiae";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("quibusdam"),
                                                            add("maxime"),
                                                            add("aspernatur"),
                                                            add("corporis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sit";
                                                        ids = new String[]{{
                                                            add("ex"),
                                                            add("consequatur"),
                                                            add("quo"),
                                                        }};
                                                        kind = "dignissimos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("illum"),
                                                        }};
                                                    }};
                                                    kind = "magni";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "id";
                                                        kind = "officiis";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("totam"),
                                                            add("tempore"),
                                                            add("provident"),
                                                            add("rem"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "consequuntur";
                                        }}),
                                    }};
                                    kind = "molestias";
                                    name = "Shawn Kautzer";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "veniam";
                                                        ids = new String[]{{
                                                            add("minus"),
                                                            add("soluta"),
                                                            add("corrupti"),
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "a";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("voluptatibus"),
                                                            add("ipsa"),
                                                        }};
                                                    }};
                                                    kind = "modi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "hic";
                                                        kind = "incidunt";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                            add("vel"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tenetur";
                                                        ids = new String[]{{
                                                            add("occaecati"),
                                                            add("ratione"),
                                                        }};
                                                        kind = "fugiat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dicta"),
                                                            add("aperiam"),
                                                            add("alias"),
                                                        }};
                                                    }};
                                                    kind = "sed";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "perferendis";
                                                        kind = "dicta";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("optio"),
                                                            add("facere"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dicta";
                                                        ids = new String[]{{
                                                            add("quos"),
                                                            add("neque"),
                                                            add("quasi"),
                                                        }};
                                                        kind = "commodi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("consectetur"),
                                                            add("debitis"),
                                                            add("dolor"),
                                                        }};
                                                    }};
                                                    kind = "voluptates";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "unde";
                                                        kind = "blanditiis";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("perferendis"),
                                                            add("mollitia"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "aut";
                                        }}),
                                    }};
                                    kind = "id";
                                    name = "Boyd Sanford";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "esse";
                                                        ids = new String[]{{
                                                            add("distinctio"),
                                                            add("officia"),
                                                            add("quis"),
                                                        }};
                                                        kind = "ipsa";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quas"),
                                                            add("hic"),
                                                            add("ut"),
                                                        }};
                                                    }};
                                                    kind = "minus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nobis";
                                                        kind = "nihil";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("quibusdam"),
                                                            add("ex"),
                                                            add("optio"),
                                                            add("a"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptas";
                                                        ids = new String[]{{
                                                            add("dolores"),
                                                        }};
                                                        kind = "exercitationem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nostrum"),
                                                            add("ea"),
                                                        }};
                                                    }};
                                                    kind = "architecto";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "enim";
                                                        kind = "praesentium";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("non"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "consequuntur";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aspernatur";
                                                        ids = new String[]{{
                                                            add("ducimus"),
                                                            add("facilis"),
                                                            add("minima"),
                                                            add("unde"),
                                                        }};
                                                        kind = "nam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("nemo"),
                                                        }};
                                                    }};
                                                    kind = "aliquam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptas";
                                                        kind = "magnam";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("occaecati"),
                                                            add("accusamus"),
                                                            add("ipsum"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "dignissimos";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "molestias";
                                                        ids = new String[]{{
                                                            add("quod"),
                                                            add("sequi"),
                                                        }};
                                                        kind = "at";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("laborum"),
                                                            add("eius"),
                                                            add("sint"),
                                                            add("illo"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dolorem";
                                                        kind = "molestiae";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("corrupti"),
                                                            add("corrupti"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "praesentium";
                                                        ids = new String[]{{
                                                            add("illo"),
                                                            add("ullam"),
                                                            add("ea"),
                                                            add("earum"),
                                                        }};
                                                        kind = "sit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("itaque"),
                                                            add("velit"),
                                                            add("eum"),
                                                        }};
                                                    }};
                                                    kind = "facilis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "harum";
                                                        kind = "voluptatum";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "odit";
                                                        ids = new String[]{{
                                                            add("eveniet"),
                                                            add("ratione"),
                                                            add("vero"),
                                                        }};
                                                        kind = "ab";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("excepturi"),
                                                            add("alias"),
                                                            add("corporis"),
                                                            add("occaecati"),
                                                        }};
                                                    }};
                                                    kind = "sapiente";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "molestiae";
                                                        kind = "eveniet";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("earum"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sunt";
                                                        ids = new String[]{{
                                                            add("atque"),
                                                        }};
                                                        kind = "nemo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quam"),
                                                            add("quisquam"),
                                                        }};
                                                    }};
                                                    kind = "qui";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quaerat";
                                                        kind = "autem";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "maxime";
                                        }}),
                                    }};
                                    kind = "omnis";
                                    name = "Dominick Jast";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-27");
                            kind = "voluptatibus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_YEAR;
                            startDate = LocalDate.parse("2022-05-07");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "facilis";
                                name = "Ronald Langosh III";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolores";
                                name = "Mrs. Lauren Predovic";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "laudantium";
                            etag = "repudiandae";
                            id = "7a201ecf-b74f-4aff-9de4-f2b0a857bcec";
                            kind = "molestias";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "voluptatibus";
                        }};;
                        metricNames = new String[]{{
                            add("sequi"),
                            add("numquam"),
                            add("rerum"),
                            add("voluptas"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eaque";
                                            ids = new String[]{{
                                                add("neque"),
                                            }};
                                            kind = "expedita";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("incidunt"),
                                            }};
                                        }};
                                        kind = "voluptates";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "blanditiis";
                                            kind = "velit";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("nobis"),
                                                add("dolor"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ex";
                                            ids = new String[]{{
                                                add("corporis"),
                                                add("voluptas"),
                                                add("expedita"),
                                            }};
                                            kind = "adipisci";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("ullam"),
                                                add("rerum"),
                                                add("repellat"),
                                                add("nihil"),
                                            }};
                                        }};
                                        kind = "unde";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "labore";
                                            kind = "ipsa";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("autem"),
                                                add("repellendus"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quam";
                                            ids = new String[]{{
                                                add("ratione"),
                                            }};
                                            kind = "iste";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("quos"),
                                                add("molestias"),
                                            }};
                                        }};
                                        kind = "animi";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "hic";
                                            kind = "autem";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("ipsam"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "magnam";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "distinctio";
                                etag = "voluptatem";
                                id = "5f01e7bd-8643-4968-9d0d-773a07c3076c";
                                kind = "corrupti";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dolores";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "facere";
                            kind = "necessitatibus";
                            name = "Angel McClure";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corrupti";
                                                        ids = new String[]{{
                                                            add("quisquam"),
                                                            add("voluptatem"),
                                                        }};
                                                        kind = "ipsum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("adipisci"),
                                                            add("voluptatibus"),
                                                            add("sed"),
                                                            add("dolor"),
                                                        }};
                                                    }};
                                                    kind = "possimus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "maxime";
                                                        kind = "blanditiis";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("sequi"),
                                                            add("eligendi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dicta";
                                                        ids = new String[]{{
                                                            add("iure"),
                                                            add("iste"),
                                                        }};
                                                        kind = "corrupti";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("officiis"),
                                                            add("ad"),
                                                        }};
                                                    }};
                                                    kind = "molestias";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "explicabo";
                                                        kind = "saepe";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("harum"),
                                                            add("optio"),
                                                            add("inventore"),
                                                            add("corrupti"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fuga";
                                                        ids = new String[]{{
                                                            add("deserunt"),
                                                            add("dolor"),
                                                            add("pariatur"),
                                                        }};
                                                        kind = "repudiandae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("sit"),
                                                            add("quisquam"),
                                                            add("perspiciatis"),
                                                            add("sit"),
                                                        }};
                                                    }};
                                                    kind = "alias";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sequi";
                                                        kind = "ad";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("placeat"),
                                                            add("et"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "illum";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ex";
                                                        ids = new String[]{{
                                                            add("numquam"),
                                                        }};
                                                        kind = "assumenda";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("ipsam"),
                                                        }};
                                                    }};
                                                    kind = "nesciunt";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "magnam";
                                                        kind = "sapiente";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("accusamus"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "dolore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "facere";
                                                        ids = new String[]{{
                                                            add("culpa"),
                                                            add("molestiae"),
                                                            add("ab"),
                                                            add("eius"),
                                                        }};
                                                        kind = "itaque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                    kind = "laudantium";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sint";
                                                        kind = "iste";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("modi"),
                                                            add("facere"),
                                                            add("impedit"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "natus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolor";
                                                        ids = new String[]{{
                                                            add("dolore"),
                                                            add("sed"),
                                                            add("ex"),
                                                        }};
                                                        kind = "autem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("saepe"),
                                                        }};
                                                    }};
                                                    kind = "ipsam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sit";
                                                        kind = "perferendis";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                            add("modi"),
                                                            add("explicabo"),
                                                            add("porro"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "molestias";
                                                        ids = new String[]{{
                                                            add("esse"),
                                                            add("inventore"),
                                                            add("aperiam"),
                                                            add("totam"),
                                                        }};
                                                        kind = "occaecati";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatibus"),
                                                            add("molestiae"),
                                                            add("tempore"),
                                                            add("amet"),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "laborum";
                                                        kind = "praesentium";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                            add("facere"),
                                                            add("molestiae"),
                                                            add("libero"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "porro";
                                        }}),
                                    }};
                                    kind = "vero";
                                    name = "Dixie Reynolds";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolore";
                                                        ids = new String[]{{
                                                            add("dolor"),
                                                            add("sunt"),
                                                            add("dolor"),
                                                            add("dolore"),
                                                        }};
                                                        kind = "in";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eveniet"),
                                                            add("necessitatibus"),
                                                        }};
                                                    }};
                                                    kind = "fugit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "deserunt";
                                                        kind = "natus";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("ipsa"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "labore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "in";
                                                        ids = new String[]{{
                                                            add("corrupti"),
                                                        }};
                                                        kind = "voluptates";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("perspiciatis"),
                                                        }};
                                                    }};
                                                    kind = "ipsa";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "omnis";
                                                        kind = "libero";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                            add("ratione"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "veniam";
                                                        ids = new String[]{{
                                                            add("quasi"),
                                                            add("perspiciatis"),
                                                        }};
                                                        kind = "soluta";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("minus"),
                                                        }};
                                                    }};
                                                    kind = "veniam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "perferendis";
                                                        kind = "recusandae";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("deserunt"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rem";
                                                        ids = new String[]{{
                                                            add("sed"),
                                                            add("autem"),
                                                            add("tenetur"),
                                                            add("autem"),
                                                        }};
                                                        kind = "possimus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("tenetur"),
                                                            add("nobis"),
                                                        }};
                                                    }};
                                                    kind = "provident";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "excepturi";
                                                        kind = "dolore";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("aspernatur"),
                                                            add("ullam"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "non";
                                        }}),
                                    }};
                                    kind = "ratione";
                                    name = "Dwight Wilkinson";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptas";
                                                        ids = new String[]{{
                                                            add("perspiciatis"),
                                                        }};
                                                        kind = "voluptates";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("assumenda"),
                                                        }};
                                                    }};
                                                    kind = "hic";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "maiores";
                                                        kind = "odit";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("dolor"),
                                                            add("nostrum"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "labore";
                                                        ids = new String[]{{
                                                            add("pariatur"),
                                                            add("cum"),
                                                        }};
                                                        kind = "earum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("excepturi"),
                                                            add("quibusdam"),
                                                        }};
                                                    }};
                                                    kind = "corrupti";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quis";
                                                        kind = "eius";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("magnam"),
                                                            add("molestias"),
                                                            add("nostrum"),
                                                            add("ea"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "fugiat";
                                                        ids = new String[]{{
                                                            add("ea"),
                                                            add("beatae"),
                                                            add("porro"),
                                                        }};
                                                        kind = "vitae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("aperiam"),
                                                            add("ipsum"),
                                                            add("dolorum"),
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                    kind = "amet";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quas";
                                                        kind = "beatae";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quas"),
                                                            add("vel"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nemo";
                                                        ids = new String[]{{
                                                            add("ex"),
                                                            add("veniam"),
                                                        }};
                                                        kind = "magni";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("autem"),
                                                        }};
                                                    }};
                                                    kind = "adipisci";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "hic";
                                                        kind = "praesentium";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("natus"),
                                                            add("iste"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "delectus";
                                        }}),
                                    }};
                                    kind = "eius";
                                    name = "Celia Reichert";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-01-02");
                            kind = "sapiente";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_YEAR;
                            startDate = LocalDate.parse("2022-10-27");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quis";
                                name = "Alfred Pacocha";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "repudiandae";
                            etag = "iusto";
                            id = "186e9e80-8966-4689-a74c-c4e0edcd8270";
                            kind = "soluta";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "impedit";
                        }};;
                        metricNames = new String[]{{
                            add("aut"),
                            add("sequi"),
                            add("accusantium"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eos";
                                            ids = new String[]{{
                                                add("sint"),
                                                add("ipsum"),
                                                add("esse"),
                                                add("fugit"),
                                            }};
                                            kind = "et";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("debitis"),
                                                add("tempore"),
                                            }};
                                        }};
                                        kind = "modi";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "possimus";
                                            kind = "temporibus";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("odio"),
                                                add("repellat"),
                                                add("explicabo"),
                                                add("consequuntur"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "maxime";
                                            ids = new String[]{{
                                                add("fugit"),
                                                add("ipsa"),
                                                add("officia"),
                                                add("laborum"),
                                            }};
                                            kind = "deserunt";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("voluptates"),
                                            }};
                                        }};
                                        kind = "iure";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "amet";
                                            kind = "inventore";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("laudantium"),
                                                add("ratione"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "a";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quos";
                                            ids = new String[]{{
                                                add("sequi"),
                                                add("ad"),
                                                add("quisquam"),
                                                add("numquam"),
                                            }};
                                            kind = "sint";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("impedit"),
                                                add("debitis"),
                                                add("aut"),
                                            }};
                                        }};
                                        kind = "quidem";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "cupiditate";
                                            kind = "nesciunt";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("laboriosam"),
                                                add("nulla"),
                                                add("porro"),
                                                add("blanditiis"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ullam";
                                            ids = new String[]{{
                                                add("corrupti"),
                                                add("tempore"),
                                                add("vel"),
                                            }};
                                            kind = "assumenda";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("odio"),
                                            }};
                                        }};
                                        kind = "dignissimos";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quia";
                                            kind = "animi";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("labore"),
                                                add("qui"),
                                                add("laudantium"),
                                                add("aspernatur"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "tempora";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "quasi";
                                etag = "repellendus";
                                id = "df05ce1d-3992-4dbe-bed1-11077aeeb0f5";
                                kind = "similique";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "accusamus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quo";
                                etag = "placeat";
                                id = "d831a29d-a559-464e-a5eb-f7e69897f051";
                                kind = "similique";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "reprehenderit";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "impedit";
                                etag = "nostrum";
                                id = "9e69b7c0-e268-43f3-baa8-dbe1562afb86";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "magnam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "odit";
                                etag = "et";
                                id = "0e06b76f-9669-4abe-b842-bdc330450b65";
                                kind = "saepe";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "ex";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "optio";
                                name = "Angela Hackett";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "corrupti";
                                name = "Patrick Mayert III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sapiente";
                                name = "Terrell Bailey";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "culpa";
                                name = "Katie Leuschke";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "debitis";
                                name = "Delores Doyle";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "perspiciatis";
                                name = "Dr. Clarence Stehr";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "sequi";
                                etag = "eius";
                                id = "dc510b86-1677-4bfd-853d-20b955c88393";
                                kind = "amet";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "nostrum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quod";
                                etag = "eius";
                                id = "dd75ad7f-370d-4efb-8ca1-de629d2cfb7a";
                                kind = "reprehenderit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "voluptatum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "animi";
                                etag = "atque";
                                id = "1cdb3e7c-e0c3-40a7-987d-b981664a0f26";
                                kind = "aliquam";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "iure";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-10-11");
                            kind = "quam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-05-03");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "occaecati";
                            etag = "aspernatur";
                            id = "6b6ef375-c380-434f-8e42-de03993e99d3";
                            kind = "nisi";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "molestiae";
                        }};;
                        metricNames = new String[]{{
                            add("reiciendis"),
                            add("soluta"),
                            add("laboriosam"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "omnis";
                                name = "Gail Dibbert";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "amet";
                                name = "Russell Leuschke DDS";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "expedita";
                                name = "Kate Oberbrunner";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 965377;
                            impressionsLookbackWindow = 919617;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 898503;
                            maximumImpressionInteractions = 223505;
                            maximumInteractionGap = 480070;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "nemo";
                                    etag = "delectus";
                                    id = "5ff8a76f-a943-458b-9483-6226d61f2420";
                                    kind = "doloremque";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "nulla";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "quasi";
                                    etag = "debitis";
                                    id = "41973662-ed0d-46ba-a94a-30d3702a0649";
                                    kind = "voluptatibus";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "voluptatem";
                                }}),
                            }};
                            kind = "delectus";
                            metricNames = new String[]{{
                                add("aspernatur"),
                                add("ipsa"),
                                add("atque"),
                                add("laborum"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "exercitationem";
                                    etag = "eum";
                                    id = "71385c4a-b3d3-46dd-a0dc-084d63167b7d";
                                    kind = "ea";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "quibusdam";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "illum";
                                    etag = "odio";
                                    id = "8bfbe369-f0c7-481f-8b63-f1a45bb886ac";
                                    kind = "dicta";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "nihil";
                                }}),
                            }};
                            kind = "facere";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-10-03");
                            kind = "suscipit";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.MONTH_TO_DATE;
                            startDate = LocalDate.parse("2021-11-01");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "accusantium";
                                etag = "hic";
                                id = "09f37459-3dc3-4b80-9cd1-cf053790dd94";
                                kind = "recusandae";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nihil";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "recusandae";
                                etag = "soluta";
                                id = "25d18ce5-d774-4140-8d07-0aae04ae2074";
                                kind = "omnis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "ipsum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "fugiat";
                                etag = "omnis";
                                id = "f148c9f0-8f41-407c-a206-84963ea6ceec";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "deleniti";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Miss Leah Moen";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officia";
                                name = "Edmond Moore DVM";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("ex"),
                            add("eum"),
                            add("corrupti"),
                            add("quisquam"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("deleniti"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 995763;
                        expirationDate = LocalDate.parse("2022-12-11");
                        repeats = "ab";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-01-18");
                        timezone = "ullam";
                    }};;
                    subAccountId = "eum";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "amet";
                alt = AltEnum.PROTO;
                callback = "id";
                fields = "saepe";
                key = "voluptatibus";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "incidunt";
                uploadProtocol = "ipsa";
            }};            

            DfareportingReportsInsertResponse res = sdk.reports.dfareportingReportsInsert(req, new DfareportingReportsInsertSecurity("molestiae", "nemo") {{
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

            DfareportingReportsListRequest req = new DfareportingReportsListRequest("vitae") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "odit";
                key = "repudiandae";
                maxResults = 226389L;
                oauthToken = "nesciunt";
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "nam";
                scope = DfareportingReportsListScopeEnum.ALL;
                sortField = DfareportingReportsListSortFieldEnum.ID;
                sortOrder = DfareportingReportsListSortOrderEnum.DESCENDING;
                uploadType = "error";
                uploadProtocol = "architecto";
            }};            

            DfareportingReportsListResponse res = sdk.reports.dfareportingReportsList(req, new DfareportingReportsListSecurity("occaecati", "non") {{
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
import org.openapis.openapi.models.shared.UvarFilter;
import org.openapis.openapi.models.shared.UvarFilterMatchEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsPatchRequest req = new DfareportingReportsPatchRequest("esse", "nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "veritatis";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "facere";
                                    etag = "molestiae";
                                    id = "4f62f8d4-410d-419a-9a86-22981eae0232";
                                    kind = "dolore";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "incidunt";
                                }}),
                            }};
                            kind = "aliquam";
                            metricNames = new String[]{{
                                add("explicabo"),
                                add("labore"),
                                add("nobis"),
                                add("illo"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ab";
                                    etag = "dolorum";
                                    id = "21643431-2744-488f-8cb2-dc9b2e961d2b";
                                    kind = "culpa";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "architecto";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "laboriosam";
                                    etag = "inventore";
                                    id = "d4c13dd9-f7e7-46c8-ad6b-bbf409e034d3";
                                    kind = "accusamus";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "pariatur";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "cum";
                                    etag = "placeat";
                                    id = "4320d3e9-7c37-44f6-bce8-891f817767d8";
                                    kind = "aliquid";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quasi";
                                }}),
                            }};
                            kind = "magni";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-10-03");
                            kind = "a";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-02-03");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ducimus";
                                etag = "dolorem";
                                id = "f7007a7c-bb43-4c16-812a-a0ebd029eddb";
                                kind = "ad";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "non";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eum";
                                etag = "maxime";
                                id = "5758608d-2deb-4a95-8f1d-9945c5c14573";
                                kind = "tenetur";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "alias";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nam";
                                etag = "possimus";
                                id = "4a88c7a0-bc33-4ac4-b3b4-0567b3f53e42";
                                kind = "animi";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "neque";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quae";
                                etag = "ullam";
                                id = "ba82770b-f6d2-4dee-9cb2-7fde0b648077";
                                kind = "placeat";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "harum";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "at";
                                name = "Lucille Borer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "nobis";
                                name = "Wesley Yost";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "in";
                                name = "Ricardo Brakus";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "accusantium";
                                name = "Martin Rowe";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("quas"),
                            add("illo"),
                            add("iste"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quia";
                                name = "Mr. Tasha Davis";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-22");
                            kind = "necessitatibus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_WEEK;
                            startDate = LocalDate.parse("2022-08-20");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nisi";
                                etag = "quidem";
                                id = "b6d88760-650d-40eb-86d2-1d9af7f5b5a5";
                                kind = "ipsum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "facilis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "minus";
                                id = "072c5d26-dffa-4577-8033-83a66db6bb78";
                                kind = "error";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "in";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("inventore"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("nobis"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "at";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Mariah79@hotmail.com";
                                kind = "sed";
                            }}),
                        }};
                    }};;
                    etag = "ex";
                    fileName = "adipisci";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "unde";
                                etag = "nulla";
                                id = "59272ed5-0664-462c-99ea-adacd2b866ce";
                                kind = "sunt";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "at";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "recusandae";
                                etag = "praesentium";
                                id = "082e0ab1-64fb-4614-894d-bb0b50681a7f";
                                kind = "voluptatum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "reiciendis";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-02-16");
                            kind = "perspiciatis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST14_DAYS;
                            startDate = LocalDate.parse("2022-03-10");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "sed";
                                etag = "nobis";
                                id = "a7309239-137e-4ac1-b806-d4e2f39e7062";
                                kind = "molestiae";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "est";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quod";
                                name = "Amanda Fisher";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "mollitia";
                                name = "Lula Farrell";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "possimus";
                                name = "Robin Franecki";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "libero";
                            etag = "eum";
                            id = "1304356c-a70d-48d4-b5d6-0746411237b6";
                            kind = "odit";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "quidem";
                        }};;
                        metricNames = new String[]{{
                            add("dolor"),
                            add("cupiditate"),
                            add("delectus"),
                            add("corrupti"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "eaque";
                    kind = "voluptas";
                    lastModifiedTime = "dolorum";
                    name = "Virgil Kertzmann";
                    ownerProfileId = "cumque";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "porro";
                                etag = "non";
                                id = "3024ac5b-7a0f-46cf-ab9d-3a697f371ce3";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "repellendus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "qui";
                                etag = "saepe";
                                id = "5d73e795-aa67-4ac6-9918-7481d1b991c7";
                                kind = "ab";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "ipsam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "cupiditate";
                                etag = "nobis";
                                id = "f64fa7e5-5f8c-4d95-906f-46816b65f2b1";
                                kind = "necessitatibus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "rerum";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "asperiores";
                            kind = "impedit";
                            name = "Edna Runolfsdottir";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aperiam";
                                                        ids = new String[]{{
                                                            add("ea"),
                                                            add("accusantium"),
                                                        }};
                                                        kind = "voluptatem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                            add("ea"),
                                                            add("quia"),
                                                            add("occaecati"),
                                                        }};
                                                    }};
                                                    kind = "eveniet";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "hic";
                                                        kind = "numquam";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dolores"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "magni";
                                                        ids = new String[]{{
                                                            add("dignissimos"),
                                                            add("ratione"),
                                                            add("ex"),
                                                            add("explicabo"),
                                                        }};
                                                        kind = "consectetur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("iure"),
                                                            add("amet"),
                                                        }};
                                                    }};
                                                    kind = "voluptatibus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "eos";
                                                        kind = "quos";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("est"),
                                                            add("cumque"),
                                                            add("velit"),
                                                            add("ex"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "ab";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "earum";
                                                        ids = new String[]{{
                                                            add("deserunt"),
                                                        }};
                                                        kind = "asperiores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("autem"),
                                                            add("nostrum"),
                                                            add("vel"),
                                                            add("repellendus"),
                                                        }};
                                                    }};
                                                    kind = "molestias";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "necessitatibus";
                                                        kind = "accusantium";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("vero"),
                                                            add("placeat"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "necessitatibus";
                                        }}),
                                    }};
                                    kind = "minus";
                                    name = "Jose Kilback";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "tempore";
                                                        ids = new String[]{{
                                                            add("quos"),
                                                            add("quas"),
                                                        }};
                                                        kind = "perspiciatis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("rerum"),
                                                        }};
                                                    }};
                                                    kind = "voluptatem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "numquam";
                                                        kind = "placeat";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("exercitationem"),
                                                            add("maxime"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "minus";
                                                        ids = new String[]{{
                                                            add("aperiam"),
                                                            add("molestias"),
                                                            add("repellat"),
                                                        }};
                                                        kind = "beatae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("vel"),
                                                        }};
                                                    }};
                                                    kind = "suscipit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "ab";
                                                        kind = "recusandae";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("veritatis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "autem";
                                                        ids = new String[]{{
                                                            add("officia"),
                                                            add("accusantium"),
                                                            add("ducimus"),
                                                            add("aperiam"),
                                                        }};
                                                        kind = "sit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("maiores"),
                                                            add("repudiandae"),
                                                            add("voluptate"),
                                                        }};
                                                    }};
                                                    kind = "unde";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sequi";
                                                        kind = "occaecati";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("sequi"),
                                                            add("repellendus"),
                                                            add("minima"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "illum";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ab";
                                                        ids = new String[]{{
                                                            add("optio"),
                                                            add("tempore"),
                                                            add("dignissimos"),
                                                            add("quibusdam"),
                                                        }};
                                                        kind = "quos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("iure"),
                                                            add("esse"),
                                                            add("expedita"),
                                                            add("beatae"),
                                                        }};
                                                    }};
                                                    kind = "libero";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "officia";
                                                        kind = "illo";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("sunt"),
                                                            add("error"),
                                                            add("alias"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "exercitationem";
                                                        ids = new String[]{{
                                                            add("aliquam"),
                                                            add("velit"),
                                                            add("voluptatem"),
                                                        }};
                                                        kind = "consequatur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("aliquam"),
                                                            add("fugiat"),
                                                        }};
                                                    }};
                                                    kind = "eum";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "est";
                                                        kind = "facilis";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("sed"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "iusto";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "minus";
                                                        ids = new String[]{{
                                                            add("non"),
                                                            add("at"),
                                                            add("pariatur"),
                                                            add("earum"),
                                                        }};
                                                        kind = "itaque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dignissimos";
                                                        kind = "deserunt";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("dolor"),
                                                            add("saepe"),
                                                            add("ipsa"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "quod";
                                        }}),
                                    }};
                                    kind = "harum";
                                    name = "Mr. Jorge Bernhard";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-01");
                            kind = "aliquam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST90_DAYS;
                            startDate = LocalDate.parse("2022-04-05");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quam";
                                name = "Yvette Hermiston Sr.";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "doloremque";
                                name = "Jean Nitzsche";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolorum";
                                name = "Keith Feeney V";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "occaecati";
                            etag = "eaque";
                            id = "2bb73dcf-cefa-4c45-984a-74ec7582b0da";
                            kind = "sint";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "corrupti";
                        }};;
                        metricNames = new String[]{{
                            add("quam"),
                            add("impedit"),
                            add("nobis"),
                            add("vitae"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "possimus";
                                            ids = new String[]{{
                                                add("in"),
                                                add("assumenda"),
                                                add("optio"),
                                                add("at"),
                                            }};
                                            kind = "occaecati";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("libero"),
                                            }};
                                        }};
                                        kind = "minus";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quis";
                                            kind = "suscipit";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("architecto"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "modi";
                                            ids = new String[]{{
                                                add("quidem"),
                                                add("deserunt"),
                                                add("quas"),
                                            }};
                                            kind = "eius";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("voluptatibus"),
                                                add("eveniet"),
                                                add("rem"),
                                            }};
                                        }};
                                        kind = "iste";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "voluptatem";
                                            kind = "qui";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("atque"),
                                                add("exercitationem"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "velit";
                                            ids = new String[]{{
                                                add("reiciendis"),
                                                add("fuga"),
                                            }};
                                            kind = "ipsum";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("blanditiis"),
                                                add("adipisci"),
                                                add("quisquam"),
                                                add("inventore"),
                                            }};
                                        }};
                                        kind = "hic";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quod";
                                            kind = "voluptas";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("est"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "eligendi";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "alias";
                                            ids = new String[]{{
                                                add("impedit"),
                                                add("modi"),
                                            }};
                                            kind = "corrupti";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("quia"),
                                                add("dignissimos"),
                                            }};
                                        }};
                                        kind = "quibusdam";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "molestiae";
                                            kind = "nulla";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("voluptas"),
                                                add("ipsum"),
                                                add("tenetur"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tenetur";
                                            ids = new String[]{{
                                                add("consectetur"),
                                            }};
                                            kind = "eveniet";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("reprehenderit"),
                                                add("assumenda"),
                                                add("totam"),
                                            }};
                                        }};
                                        kind = "occaecati";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "voluptate";
                                            kind = "doloremque";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("nulla"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "eveniet";
                                            ids = new String[]{{
                                                add("repellendus"),
                                            }};
                                            kind = "accusamus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("magnam"),
                                                add("earum"),
                                                add("inventore"),
                                                add("enim"),
                                            }};
                                        }};
                                        kind = "sapiente";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "eos";
                                            kind = "neque";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("harum"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "amet";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "magni";
                                etag = "excepturi";
                                id = "38413394-8aaf-4abd-a028-e65c230924d3";
                                kind = "numquam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "labore";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quae";
                                etag = "unde";
                                id = "bbef0ca9-91e3-4a76-9952-02b367d4e168";
                                kind = "cupiditate";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "aliquid";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "quasi";
                            kind = "rem";
                            name = "Melvin Bailey";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "esse";
                                                        ids = new String[]{{
                                                            add("quae"),
                                                            add("nobis"),
                                                        }};
                                                        kind = "ut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "impedit";
                                                        kind = "eos";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nobis"),
                                                            add("autem"),
                                                            add("reiciendis"),
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ab";
                                                        ids = new String[]{{
                                                            add("recusandae"),
                                                        }};
                                                        kind = "perspiciatis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("corrupti"),
                                                        }};
                                                    }};
                                                    kind = "eius";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quisquam";
                                                        kind = "magnam";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellendus";
                                                        ids = new String[]{{
                                                            add("vitae"),
                                                            add("laborum"),
                                                            add("iusto"),
                                                        }};
                                                        kind = "necessitatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("adipisci"),
                                                            add("ratione"),
                                                            add("dolor"),
                                                        }};
                                                    }};
                                                    kind = "aperiam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "est";
                                                        kind = "iste";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ea"),
                                                            add("saepe"),
                                                            add("enim"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "qui";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repellendus";
                                                        ids = new String[]{{
                                                            add("occaecati"),
                                                            add("at"),
                                                        }};
                                                        kind = "quidem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eaque"),
                                                        }};
                                                    }};
                                                    kind = "culpa";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nihil";
                                                        kind = "error";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("quam"),
                                                            add("laboriosam"),
                                                            add("dolore"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "magnam";
                                                        ids = new String[]{{
                                                            add("ipsa"),
                                                            add("voluptatibus"),
                                                            add("explicabo"),
                                                            add("natus"),
                                                        }};
                                                        kind = "modi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("quaerat"),
                                                        }};
                                                    }};
                                                    kind = "exercitationem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quisquam";
                                                        kind = "doloremque";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ullam"),
                                                            add("soluta"),
                                                            add("nam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "iusto";
                                                        ids = new String[]{{
                                                            add("suscipit"),
                                                        }};
                                                        kind = "consectetur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("distinctio"),
                                                        }};
                                                    }};
                                                    kind = "error";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "consectetur";
                                                        kind = "nesciunt";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("consequuntur"),
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "sint";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eius";
                                                        ids = new String[]{{
                                                            add("vel"),
                                                            add("repellendus"),
                                                            add("omnis"),
                                                            add("voluptate"),
                                                        }};
                                                        kind = "saepe";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("similique"),
                                                            add("esse"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "odit";
                                                        kind = "magni";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("qui"),
                                                            add("minus"),
                                                            add("accusamus"),
                                                            add("eligendi"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "harum";
                                                        ids = new String[]{{
                                                            add("aspernatur"),
                                                            add("eius"),
                                                        }};
                                                        kind = "eum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quaerat"),
                                                            add("aut"),
                                                        }};
                                                    }};
                                                    kind = "modi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "cum";
                                                        kind = "saepe";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("possimus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("odio"),
                                                        }};
                                                        kind = "maiores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("praesentium"),
                                                            add("minima"),
                                                        }};
                                                    }};
                                                    kind = "non";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptatum";
                                                        kind = "dolore";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eaque"),
                                                            add("iste"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "corporis";
                                                        ids = new String[]{{
                                                            add("et"),
                                                            add("incidunt"),
                                                            add("incidunt"),
                                                            add("minima"),
                                                        }};
                                                        kind = "eos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("repellat"),
                                                        }};
                                                    }};
                                                    kind = "eligendi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "amet";
                                                        kind = "animi";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("possimus"),
                                                            add("possimus"),
                                                            add("quod"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "repellendus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "expedita";
                                                        ids = new String[]{{
                                                            add("voluptatem"),
                                                        }};
                                                        kind = "eum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("eligendi"),
                                                            add("optio"),
                                                            add("iste"),
                                                        }};
                                                    }};
                                                    kind = "id";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "corporis";
                                                        kind = "laborum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("officiis"),
                                                            add("quo"),
                                                            add("ex"),
                                                            add("molestiae"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolor";
                                                        ids = new String[]{{
                                                            add("itaque"),
                                                        }};
                                                        kind = "facere";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eaque"),
                                                            add("accusantium"),
                                                            add("pariatur"),
                                                        }};
                                                    }};
                                                    kind = "quisquam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "perspiciatis";
                                                        kind = "nisi";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("ut"),
                                                            add("laudantium"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "assumenda";
                                        }}),
                                    }};
                                    kind = "laborum";
                                    name = "Mrs. Rolando Mayert";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "expedita";
                                                        ids = new String[]{{
                                                            add("necessitatibus"),
                                                            add("facilis"),
                                                            add("aliquam"),
                                                            add("tempora"),
                                                        }};
                                                        kind = "delectus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                    kind = "laborum";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "id";
                                                        kind = "quas";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("consequuntur"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "libero";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "alias";
                                                        ids = new String[]{{
                                                            add("quia"),
                                                            add("quis"),
                                                            add("ea"),
                                                        }};
                                                        kind = "libero";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("recusandae"),
                                                            add("nihil"),
                                                        }};
                                                    }};
                                                    kind = "perferendis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dolorem";
                                                        kind = "eveniet";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ducimus";
                                                        ids = new String[]{{
                                                            add("deleniti"),
                                                        }};
                                                        kind = "accusamus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("magni"),
                                                            add("molestiae"),
                                                        }};
                                                    }};
                                                    kind = "exercitationem";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "delectus";
                                                        kind = "beatae";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("expedita"),
                                                            add("occaecati"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "doloremque";
                                                        ids = new String[]{{
                                                            add("a"),
                                                            add("a"),
                                                            add("impedit"),
                                                            add("necessitatibus"),
                                                        }};
                                                        kind = "voluptatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                            add("hic"),
                                                            add("vitae"),
                                                        }};
                                                    }};
                                                    kind = "maxime";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "accusantium";
                                                        kind = "quaerat";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                            add("sunt"),
                                                            add("commodi"),
                                                            add("praesentium"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "qui";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quod";
                                                        ids = new String[]{{
                                                            add("fugiat"),
                                                            add("tenetur"),
                                                            add("consectetur"),
                                                        }};
                                                        kind = "suscipit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("aut"),
                                                            add("excepturi"),
                                                            add("nemo"),
                                                        }};
                                                    }};
                                                    kind = "sapiente";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "repellendus";
                                                        kind = "facilis";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("quae"),
                                                            add("voluptatem"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolor";
                                                        ids = new String[]{{
                                                            add("sunt"),
                                                            add("nulla"),
                                                        }};
                                                        kind = "laudantium";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("cum"),
                                                            add("temporibus"),
                                                            add("amet"),
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "accusamus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "laudantium";
                                                        kind = "ad";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("temporibus"),
                                                            add("quos"),
                                                            add("suscipit"),
                                                            add("nam"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatem";
                                                        ids = new String[]{{
                                                            add("recusandae"),
                                                            add("tenetur"),
                                                            add("reprehenderit"),
                                                            add("non"),
                                                        }};
                                                        kind = "laborum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("veniam"),
                                                            add("quisquam"),
                                                            add("saepe"),
                                                        }};
                                                    }};
                                                    kind = "delectus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sapiente";
                                                        kind = "error";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("voluptatem"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "provident";
                                                        ids = new String[]{{
                                                            add("voluptatem"),
                                                            add("culpa"),
                                                            add("nostrum"),
                                                            add("est"),
                                                        }};
                                                        kind = "illo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("explicabo"),
                                                            add("necessitatibus"),
                                                        }};
                                                    }};
                                                    kind = "velit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dolorem";
                                                        kind = "quisquam";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("aliquid"),
                                                            add("excepturi"),
                                                            add("ipsam"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "delectus";
                                        }}),
                                    }};
                                    kind = "quibusdam";
                                    name = "Gertrude Auer";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-14");
                            kind = "accusamus";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-02-27");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "iure";
                                name = "Wendy Beahan";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eos";
                                name = "Lance Botsford";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ullam";
                                name = "Maurice Hartmann";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "tenetur";
                            etag = "quo";
                            id = "7395f712-23b5-4846-a1b9-c76a14e65403";
                            kind = "ea";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "voluptates";
                        }};;
                        metricNames = new String[]{{
                            add("velit"),
                            add("accusantium"),
                            add("tenetur"),
                            add("odio"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "recusandae";
                                            ids = new String[]{{
                                                add("soluta"),
                                                add("asperiores"),
                                                add("quas"),
                                            }};
                                            kind = "ipsa";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("modi"),
                                            }};
                                        }};
                                        kind = "ad";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "perspiciatis";
                                            kind = "consequatur";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("a"),
                                                add("officia"),
                                                add("suscipit"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "autem";
                                            ids = new String[]{{
                                                add("commodi"),
                                                add("iure"),
                                            }};
                                            kind = "vero";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("repellendus"),
                                                add("eius"),
                                                add("vero"),
                                            }};
                                        }};
                                        kind = "ad";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "modi";
                                            kind = "nesciunt";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("illum"),
                                                add("est"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ad";
                                            ids = new String[]{{
                                                add("debitis"),
                                                add("eius"),
                                                add("necessitatibus"),
                                            }};
                                            kind = "atque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("nobis"),
                                                add("modi"),
                                                add("voluptate"),
                                                add("sit"),
                                            }};
                                        }};
                                        kind = "atque";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "incidunt";
                                            kind = "nesciunt";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("perferendis"),
                                                add("rem"),
                                                add("sunt"),
                                                add("deserunt"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolores";
                                            ids = new String[]{{
                                                add("facilis"),
                                                add("voluptatibus"),
                                                add("maiores"),
                                                add("necessitatibus"),
                                            }};
                                            kind = "provident";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("laborum"),
                                            }};
                                        }};
                                        kind = "esse";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quos";
                                            kind = "porro";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("commodi"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "dolore";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "libero";
                                            ids = new String[]{{
                                                add("veritatis"),
                                                add("libero"),
                                            }};
                                            kind = "aspernatur";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("repellendus"),
                                            }};
                                        }};
                                        kind = "ipsa";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quos";
                                            kind = "porro";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("natus"),
                                                add("sequi"),
                                                add("qui"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "sit";
                                            ids = new String[]{{
                                                add("minus"),
                                            }};
                                            kind = "possimus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("in"),
                                                add("ea"),
                                                add("odit"),
                                                add("nihil"),
                                            }};
                                        }};
                                        kind = "vitae";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "eum";
                                            kind = "nihil";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("amet"),
                                                add("deleniti"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ipsum";
                                            ids = new String[]{{
                                                add("repellendus"),
                                                add("ab"),
                                            }};
                                            kind = "est";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("earum"),
                                                add("consequuntur"),
                                                add("facilis"),
                                                add("recusandae"),
                                            }};
                                        }};
                                        kind = "quisquam";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "cumque";
                                            kind = "amet";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("mollitia"),
                                                add("asperiores"),
                                                add("temporibus"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "labore";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "deserunt";
                                            ids = new String[]{{
                                                add("voluptatibus"),
                                                add("quod"),
                                                add("nam"),
                                            }};
                                            kind = "suscipit";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("distinctio"),
                                                add("magni"),
                                                add("voluptatibus"),
                                                add("quam"),
                                            }};
                                        }};
                                        kind = "nisi";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "perspiciatis";
                                            kind = "doloremque";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("occaecati"),
                                                add("quaerat"),
                                                add("velit"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "repudiandae";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "est";
                                etag = "voluptas";
                                id = "20b7c319-0b14-4424-9b47-d0673b415835";
                                kind = "atque";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "excepturi";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quo";
                                name = "Yvette Haley";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "saepe";
                                name = "Dr. Krystal Spencer II";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "temporibus";
                                etag = "asperiores";
                                id = "e238ce69-a15d-426b-b4a0-2ff631fc8db4";
                                kind = "corrupti";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "pariatur";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-19");
                            kind = "laboriosam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2022-01-06");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "velit";
                            etag = "nihil";
                            id = "f7008aaf-5230-4c42-ba3f-cd362ad94af4";
                            kind = "incidunt";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "beatae";
                        }};;
                        metricNames = new String[]{{
                            add("atque"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "molestiae";
                                name = "Stacy Crona";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 178274;
                            impressionsLookbackWindow = 822417;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 551520;
                            maximumImpressionInteractions = 110541;
                            maximumInteractionGap = 452420;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "error";
                                    etag = "animi";
                                    id = "f0993347-3ccb-4791-9d26-69ffa9c8fe1e";
                                    kind = "molestiae";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "facilis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "fuga";
                                    etag = "quod";
                                    id = "a845249e-08d2-4ccb-8e5f-074abfddeab7";
                                    kind = "reiciendis";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "aspernatur";
                                }}),
                            }};
                            kind = "ipsa";
                            metricNames = new String[]{{
                                add("sit"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "eligendi";
                                    etag = "dignissimos";
                                    id = "24c765fa-1480-44c1-8810-739795bd4465";
                                    kind = "assumenda";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "neque";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "dolores";
                                    etag = "nisi";
                                    id = "956c15ce-ff63-495d-ac38-94945d8149a7";
                                    kind = "quidem";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "iure";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "maxime";
                                    etag = "saepe";
                                    id = "21f454d2-2cc4-4a3c-af7a-d83b9ca74323";
                                    kind = "totam";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "iste";
                                }}),
                            }};
                            kind = "optio";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-20");
                            kind = "sint";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST90_DAYS;
                            startDate = LocalDate.parse("2022-11-14");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "laborum";
                                etag = "dolorum";
                                id = "089d0cb8-c668-45e3-8d87-8cf9e262744d";
                                kind = "aperiam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "a";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sequi";
                                name = "Jeremiah Quitzon";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "aperiam";
                                name = "Adrian Hessel";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "vitae";
                                name = "Gordon Nikolaus";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quod";
                                name = "Dwayne Rau";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("sed"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("ex"),
                            add("dolor"),
                            add("dignissimos"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 441898;
                        expirationDate = LocalDate.parse("2022-03-19");
                        repeats = "non";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SUNDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.WEDNESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.THURSDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-12-08");
                        timezone = "repellendus";
                    }};;
                    subAccountId = "totam";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "vitae";
                alt = AltEnum.PROTO;
                callback = "asperiores";
                fields = "ullam";
                key = "cum";
                oauthToken = "dignissimos";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "alias";
                uploadProtocol = "temporibus";
            }};            

            DfareportingReportsPatchResponse res = sdk.reports.dfareportingReportsPatch(req, new DfareportingReportsPatchSecurity("reiciendis", "architecto") {{
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

            DfareportingReportsRunRequest req = new DfareportingReportsRunRequest("officiis", "vero") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "inventore";
                fields = "repudiandae";
                key = "iure";
                oauthToken = "repellat";
                prettyPrint = false;
                quotaUser = "perspiciatis";
                synchronous = false;
                uploadType = "ipsam";
                uploadProtocol = "error";
            }};            

            DfareportingReportsRunResponse res = sdk.reports.dfareportingReportsRun(req, new DfareportingReportsRunSecurity("cum", "cum") {{
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
import org.openapis.openapi.models.shared.UvarFilter;
import org.openapis.openapi.models.shared.UvarFilterMatchEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingReportsUpdateRequest req = new DfareportingReportsUpdateRequest("veniam", "animi") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "deserunt";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "possimus";
                                    etag = "est";
                                    id = "09f96b41-72f9-4e4d-83a4-6dda23fddefa";
                                    kind = "consequatur";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "sequi";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "quos";
                                    etag = "pariatur";
                                    id = "dd4cf85c-1829-4adc-b067-2c181652d115";
                                    kind = "minima";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "vero";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nemo";
                                    etag = "molestias";
                                    id = "103a86fb-6d6b-4448-adba-df2ffda03c39";
                                    kind = "error";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "consequuntur";
                                }}),
                            }};
                            kind = "voluptatibus";
                            metricNames = new String[]{{
                                add("dolor"),
                                add("harum"),
                                add("corporis"),
                                add("quis"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "eum";
                                    etag = "quis";
                                    id = "3d08c06e-a84a-4b80-9bfc-70b3de109170";
                                    kind = "asperiores";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "earum";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "magnam";
                                    etag = "qui";
                                    id = "2187d0f7-2b1e-4bf2-a4e7-5469d57c2270";
                                    kind = "ipsam";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "veritatis";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "dignissimos";
                                    etag = "exercitationem";
                                    id = "8f5ecf39-d133-4b2b-b8ee-3e621504f9cd";
                                    kind = "iure";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "magni";
                                }}),
                            }};
                            kind = "totam";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-08");
                            kind = "iure";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-04-07");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "nobis";
                                etag = "incidunt";
                                id = "34522e13-a0bf-41ff-b2d8-2712db5a5fb1";
                                kind = "eligendi";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "iste";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quasi";
                                name = "Mr. Herman Torp Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "facere";
                                name = "Freda Cronin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "possimus";
                                name = "Kristine Keebler";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ut";
                                name = "Rufus Walter";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("facilis"),
                            add("et"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "blanditiis";
                                name = "Edmund Cremin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "neque";
                                name = "Tiffany Bahringer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Dr. Arturo Abernathy";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-09-08");
                            kind = "eligendi";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST365_DAYS;
                            startDate = LocalDate.parse("2021-06-21");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "praesentium";
                                etag = "blanditiis";
                                id = "13a2a6dc-053a-4a68-8670-cd14c597e813";
                                kind = "odio";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "tenetur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "recusandae";
                                etag = "ipsum";
                                id = "3881fc7d-e209-4840-849e-4667c67b3658";
                                kind = "incidunt";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "consequuntur";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("porro"),
                            add("deleniti"),
                            add("commodi"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("omnis"),
                            add("at"),
                            add("assumenda"),
                            add("nostrum"),
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
                                email = "Jaden.Kub@yahoo.com";
                                kind = "reiciendis";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Willa67@gmail.com";
                                kind = "quaerat";
                            }}),
                        }};
                    }};;
                    etag = "ipsum";
                    fileName = "nisi";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "perspiciatis";
                                etag = "quo";
                                id = "b49fc257-ebb7-4d8f-b20e-541ccc7d6ccf";
                                kind = "animi";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "commodi";
                            }}),
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
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-23");
                            kind = "excepturi";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YEAR_TO_DATE;
                            startDate = LocalDate.parse("2021-09-30");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "sed";
                                etag = "perferendis";
                                id = "281624ae-ac44-4406-97be-9ac5cca7b9aa";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "odio";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "blanditiis";
                                etag = "harum";
                                id = "1bddf7e1-0ddf-4d72-8be0-fc4c2f3647d6";
                                kind = "cum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "provident";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "facere";
                                etag = "nam";
                                id = "dc08a19d-97b9-4b31-bbdd-00d5a3a09d58";
                                kind = "voluptate";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "repellendus";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "tempora";
                                name = "Maryann Crist";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "eius";
                            etag = "aspernatur";
                            id = "90537fd8-ba50-4ea5-ac2c-35b847491bde";
                            kind = "culpa";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "perferendis";
                        }};;
                        metricNames = new String[]{{
                            add("ipsa"),
                            add("asperiores"),
                            add("quis"),
                            add("corrupti"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "non";
                    kind = "vero";
                    lastModifiedTime = "officia";
                    name = "Pete Botsford Jr.";
                    ownerProfileId = "officia";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "adipisci";
                                id = "f32fda23-42b0-4049-924d-ba9a17a84fbb";
                                kind = "odio";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "odit";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "facere";
                            kind = "qui";
                            name = "Julian Bruen";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cumque";
                                                        ids = new String[]{{
                                                            add("fugiat"),
                                                            add("vero"),
                                                            add("totam"),
                                                        }};
                                                        kind = "harum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("cum"),
                                                        }};
                                                    }};
                                                    kind = "architecto";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "neque";
                                                        kind = "deserunt";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("tempore"),
                                                            add("placeat"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quos";
                                                        ids = new String[]{{
                                                            add("doloribus"),
                                                            add("a"),
                                                            add("maiores"),
                                                        }};
                                                        kind = "aliquam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("minus"),
                                                            add("rem"),
                                                            add("cumque"),
                                                            add("aliquam"),
                                                        }};
                                                    }};
                                                    kind = "temporibus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sapiente";
                                                        kind = "autem";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("error"),
                                                            add("voluptas"),
                                                            add("aut"),
                                                            add("expedita"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "natus";
                                                        ids = new String[]{{
                                                            add("tempore"),
                                                            add("nemo"),
                                                            add("accusamus"),
                                                        }};
                                                        kind = "amet";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("veritatis"),
                                                            add("saepe"),
                                                            add("adipisci"),
                                                        }};
                                                    }};
                                                    kind = "aliquid";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "eaque";
                                                        kind = "quasi";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("pariatur"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dicta";
                                                        ids = new String[]{{
                                                            add("sequi"),
                                                            add("officia"),
                                                        }};
                                                        kind = "necessitatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("vitae"),
                                                            add("repudiandae"),
                                                            add("dolores"),
                                                            add("odit"),
                                                        }};
                                                    }};
                                                    kind = "magni";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "est";
                                                        kind = "dolores";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("fuga"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "tempora";
                                        }}),
                                    }};
                                    kind = "sed";
                                    name = "Jimmy Zemlak";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "suscipit";
                                                        ids = new String[]{{
                                                            add("laborum"),
                                                        }};
                                                        kind = "hic";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                        }};
                                                    }};
                                                    kind = "sit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "fugiat";
                                                        kind = "corporis";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("facere"),
                                                            add("excepturi"),
                                                            add("temporibus"),
                                                            add("accusantium"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatem";
                                                        ids = new String[]{{
                                                            add("impedit"),
                                                            add("consequuntur"),
                                                            add("laboriosam"),
                                                            add("voluptas"),
                                                        }};
                                                        kind = "vitae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("itaque"),
                                                            add("animi"),
                                                            add("consequatur"),
                                                            add("facere"),
                                                        }};
                                                    }};
                                                    kind = "vero";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "magni";
                                                        kind = "magni";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("ea"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolor";
                                                        ids = new String[]{{
                                                            add("odit"),
                                                            add("reprehenderit"),
                                                            add("fugit"),
                                                        }};
                                                        kind = "eius";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("commodi"),
                                                        }};
                                                    }};
                                                    kind = "doloremque";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "nemo";
                                                        kind = "id";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("saepe"),
                                                            add("voluptatum"),
                                                            add("cupiditate"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quia";
                                                        ids = new String[]{{
                                                            add("aliquid"),
                                                            add("sequi"),
                                                        }};
                                                        kind = "voluptates";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("neque"),
                                                            add("corrupti"),
                                                            add("quae"),
                                                        }};
                                                    }};
                                                    kind = "recusandae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "similique";
                                                        kind = "reiciendis";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("eos"),
                                                            add("esse"),
                                                            add("omnis"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "labore";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nemo";
                                                        ids = new String[]{{
                                                            add("voluptas"),
                                                        }};
                                                        kind = "sint";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("natus"),
                                                            add("quidem"),
                                                            add("non"),
                                                        }};
                                                    }};
                                                    kind = "non";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "eius";
                                                        kind = "totam";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("modi"),
                                                            add("recusandae"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "necessitatibus";
                                                        ids = new String[]{{
                                                            add("voluptatem"),
                                                            add("excepturi"),
                                                        }};
                                                        kind = "mollitia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("repellat"),
                                                            add("ex"),
                                                            add("necessitatibus"),
                                                            add("magni"),
                                                        }};
                                                    }};
                                                    kind = "doloribus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dolorem";
                                                        kind = "adipisci";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("nemo"),
                                                            add("voluptate"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "nam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "earum";
                                                        ids = new String[]{{
                                                            add("rem"),
                                                            add("autem"),
                                                            add("alias"),
                                                        }};
                                                        kind = "rem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("deserunt"),
                                                            add("cumque"),
                                                        }};
                                                    }};
                                                    kind = "sit";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "dignissimos";
                                                        kind = "repellat";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("possimus"),
                                                            add("suscipit"),
                                                            add("dolorum"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rem";
                                                        ids = new String[]{{
                                                            add("reiciendis"),
                                                            add("iusto"),
                                                        }};
                                                        kind = "distinctio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("sapiente"),
                                                            add("ullam"),
                                                            add("iure"),
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "voluptates";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "fuga";
                                                        kind = "eveniet";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("porro"),
                                                            add("nesciunt"),
                                                            add("harum"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "vel";
                                                        ids = new String[]{{
                                                            add("deserunt"),
                                                        }};
                                                        kind = "deserunt";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("consequuntur"),
                                                            add("voluptate"),
                                                            add("iusto"),
                                                        }};
                                                    }};
                                                    kind = "possimus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "unde";
                                                        kind = "corrupti";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("iste"),
                                                            add("quibusdam"),
                                                            add("dolore"),
                                                            add("similique"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "exercitationem";
                                        }}),
                                    }};
                                    kind = "reprehenderit";
                                    name = "Myra Doyle";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-17");
                            kind = "sunt";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-11-21");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "blanditiis";
                                name = "Jason Krajcik";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolore";
                                name = "Roosevelt Kutch";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "similique";
                            etag = "consequatur";
                            id = "23edcd22-1ee3-4f14-b20b-dfc405f58714";
                            kind = "voluptatibus";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "accusamus";
                        }};;
                        metricNames = new String[]{{
                            add("maiores"),
                            add("aliquid"),
                            add("saepe"),
                            add("incidunt"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "necessitatibus";
                                            ids = new String[]{{
                                                add("consectetur"),
                                                add("consectetur"),
                                                add("accusamus"),
                                            }};
                                            kind = "exercitationem";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("quaerat"),
                                                add("et"),
                                                add("maiores"),
                                            }};
                                        }};
                                        kind = "accusantium";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "consectetur";
                                            kind = "expedita";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("veniam"),
                                                add("nihil"),
                                                add("beatae"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "pariatur";
                                            ids = new String[]{{
                                                add("provident"),
                                            }};
                                            kind = "rerum";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("earum"),
                                            }};
                                        }};
                                        kind = "ducimus";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quisquam";
                                            kind = "laboriosam";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("dicta"),
                                                add("in"),
                                                add("doloremque"),
                                                add("laborum"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "nisi";
                                            ids = new String[]{{
                                                add("consequatur"),
                                                add("nesciunt"),
                                                add("cum"),
                                            }};
                                            kind = "recusandae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("tempore"),
                                            }};
                                        }};
                                        kind = "nihil";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "ducimus";
                                            kind = "dignissimos";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("at"),
                                                add("laborum"),
                                                add("repudiandae"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "perferendis";
                                            ids = new String[]{{
                                                add("explicabo"),
                                                add("rerum"),
                                                add("esse"),
                                            }};
                                            kind = "quae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("architecto"),
                                                add("veritatis"),
                                                add("cupiditate"),
                                            }};
                                        }};
                                        kind = "ad";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "natus";
                                            kind = "magnam";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("quo"),
                                                add("quam"),
                                                add("tenetur"),
                                                add("quae"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "illo";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "reprehenderit";
                                            ids = new String[]{{
                                                add("tenetur"),
                                                add("laboriosam"),
                                                add("adipisci"),
                                                add("aliquid"),
                                            }};
                                            kind = "quo";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("tempore"),
                                            }};
                                        }};
                                        kind = "officia";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "amet";
                                            kind = "amet";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("deserunt"),
                                                add("atque"),
                                                add("error"),
                                                add("debitis"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "reprehenderit";
                                            ids = new String[]{{
                                                add("libero"),
                                            }};
                                            kind = "ratione";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("recusandae"),
                                                add("quis"),
                                                add("animi"),
                                                add("ab"),
                                            }};
                                        }};
                                        kind = "ipsum";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "rerum";
                                            kind = "fugiat";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("dicta"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "maxime";
                                            ids = new String[]{{
                                                add("vero"),
                                                add("ea"),
                                                add("fugit"),
                                            }};
                                            kind = "dolores";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("totam"),
                                                add("commodi"),
                                                add("earum"),
                                            }};
                                        }};
                                        kind = "fuga";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "sint";
                                            kind = "suscipit";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("repellat"),
                                                add("sint"),
                                                add("porro"),
                                                add("placeat"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "animi";
                                            ids = new String[]{{
                                                add("nihil"),
                                                add("corporis"),
                                                add("reprehenderit"),
                                            }};
                                            kind = "laboriosam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("dolores"),
                                                add("voluptatem"),
                                                add("aperiam"),
                                                add("dolores"),
                                            }};
                                        }};
                                        kind = "molestiae";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "similique";
                                            kind = "minus";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("fugiat"),
                                                add("ratione"),
                                                add("impedit"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "tempore";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "repudiandae";
                                            ids = new String[]{{
                                                add("autem"),
                                                add("nesciunt"),
                                                add("quisquam"),
                                                add("autem"),
                                            }};
                                            kind = "dolore";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("reprehenderit"),
                                                add("repellat"),
                                                add("maiores"),
                                                add("tempore"),
                                            }};
                                        }};
                                        kind = "iusto";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "veniam";
                                            kind = "repellat";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("doloremque"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolores";
                                            ids = new String[]{{
                                                add("explicabo"),
                                                add("praesentium"),
                                            }};
                                            kind = "ea";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("dolor"),
                                                add("temporibus"),
                                                add("ex"),
                                            }};
                                        }};
                                        kind = "totam";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "expedita";
                                            kind = "fugiat";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("distinctio"),
                                                add("alias"),
                                                add("perferendis"),
                                                add("magni"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "laborum";
                                            ids = new String[]{{
                                                add("adipisci"),
                                            }};
                                            kind = "asperiores";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("suscipit"),
                                                add("beatae"),
                                                add("sint"),
                                                add("asperiores"),
                                            }};
                                        }};
                                        kind = "dolor";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "eos";
                                            kind = "dolorum";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("debitis"),
                                                add("veniam"),
                                                add("perferendis"),
                                                add("quae"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ad";
                                            ids = new String[]{{
                                                add("esse"),
                                                add("corrupti"),
                                                add("illo"),
                                                add("repellendus"),
                                            }};
                                            kind = "fuga";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("vero"),
                                            }};
                                        }};
                                        kind = "delectus";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "totam";
                                            kind = "necessitatibus";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("iure"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "doloremque";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "at";
                                etag = "veritatis";
                                id = "e20ab355-db33-4912-8e02-4a534ce21c08";
                                kind = "dicta";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "beatae";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "totam";
                                etag = "voluptatem";
                                id = "849c309d-474e-4773-99e4-12ee767f96d0";
                                kind = "distinctio";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "rerum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "temporibus";
                                etag = "dicta";
                                id = "59d86840-cc15-4e66-a5e3-09dfc5f3f3f1";
                                kind = "maxime";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "reiciendis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "deserunt";
                                etag = "fugit";
                                id = "b96cf325-b269-4333-82af-b699061c4cc0";
                                kind = "fuga";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "consequuntur";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "reiciendis";
                            kind = "totam";
                            name = "Thomas Grimes";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cupiditate";
                                                        ids = new String[]{{
                                                            add("molestias"),
                                                            add("optio"),
                                                            add("tempore"),
                                                        }};
                                                        kind = "quidem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("eum"),
                                                        }};
                                                    }};
                                                    kind = "hic";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "occaecati";
                                                        kind = "quod";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "porro";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "numquam";
                                                        ids = new String[]{{
                                                            add("saepe"),
                                                        }};
                                                        kind = "distinctio";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("culpa"),
                                                        }};
                                                    }};
                                                    kind = "nam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "animi";
                                                        kind = "possimus";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("quis"),
                                                            add("voluptates"),
                                                            add("officiis"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "expedita";
                                                        ids = new String[]{{
                                                            add("dolor"),
                                                            add("magnam"),
                                                        }};
                                                        kind = "possimus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("ratione"),
                                                        }};
                                                    }};
                                                    kind = "repellendus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "vero";
                                                        kind = "provident";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("explicabo"),
                                                            add("occaecati"),
                                                            add("ad"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "nisi";
                                        }}),
                                    }};
                                    kind = "fugit";
                                    name = "Kristen Koelpin";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cumque";
                                                        ids = new String[]{{
                                                            add("delectus"),
                                                            add("laborum"),
                                                            add("iste"),
                                                        }};
                                                        kind = "officia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("tempore"),
                                                            add("totam"),
                                                            add("modi"),
                                                            add("aut"),
                                                        }};
                                                    }};
                                                    kind = "officiis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "accusamus";
                                                        kind = "optio";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("libero"),
                                                            add("tempore"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "sequi";
                                                        ids = new String[]{{
                                                            add("sunt"),
                                                        }};
                                                        kind = "porro";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("accusantium"),
                                                            add("voluptas"),
                                                            add("voluptatem"),
                                                        }};
                                                    }};
                                                    kind = "ab";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "in";
                                                        kind = "eum";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eos"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aspernatur";
                                                        ids = new String[]{{
                                                            add("numquam"),
                                                            add("earum"),
                                                            add("accusantium"),
                                                        }};
                                                        kind = "ducimus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("necessitatibus"),
                                                        }};
                                                    }};
                                                    kind = "quibusdam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "ea";
                                                        kind = "hic";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("dicta"),
                                                            add("molestias"),
                                                            add("earum"),
                                                            add("temporibus"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "pariatur";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "pariatur";
                                                        ids = new String[]{{
                                                            add("a"),
                                                            add("inventore"),
                                                        }};
                                                        kind = "reiciendis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                            add("sapiente"),
                                                            add("fugiat"),
                                                            add("incidunt"),
                                                        }};
                                                    }};
                                                    kind = "perspiciatis";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "harum";
                                                        kind = "saepe";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("a"),
                                                            add("earum"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolorem";
                                                        ids = new String[]{{
                                                            add("illum"),
                                                            add("excepturi"),
                                                            add("ipsam"),
                                                            add("eaque"),
                                                        }};
                                                        kind = "omnis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("eveniet"),
                                                            add("quod"),
                                                        }};
                                                    }};
                                                    kind = "hic";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sit";
                                                        kind = "nihil";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("veritatis"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "deserunt";
                                        }}),
                                    }};
                                    kind = "accusamus";
                                    name = "Candice Olson";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "facere";
                                                        ids = new String[]{{
                                                            add("vitae"),
                                                            add("porro"),
                                                            add("quis"),
                                                            add("doloribus"),
                                                        }};
                                                        kind = "facere";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("iusto"),
                                                            add("cumque"),
                                                            add("magnam"),
                                                        }};
                                                    }};
                                                    kind = "optio";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "debitis";
                                                        kind = "ab";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("neque"),
                                                            add("veritatis"),
                                                            add("corrupti"),
                                                            add("possimus"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "sequi";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptas";
                                                        ids = new String[]{{
                                                            add("perspiciatis"),
                                                        }};
                                                        kind = "sequi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("repellendus"),
                                                        }};
                                                    }};
                                                    kind = "ducimus";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quisquam";
                                                        kind = "porro";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("quo"),
                                                            add("asperiores"),
                                                            add("consequuntur"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "impedit";
                                                        ids = new String[]{{
                                                            add("libero"),
                                                            add("aliquam"),
                                                            add("ea"),
                                                            add("magni"),
                                                        }};
                                                        kind = "dicta";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("quasi"),
                                                            add("nulla"),
                                                        }};
                                                    }};
                                                    kind = "at";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "quis";
                                                        kind = "nostrum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("voluptatum"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "voluptates";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "architecto";
                                                        ids = new String[]{{
                                                            add("quod"),
                                                        }};
                                                        kind = "cumque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("at"),
                                                            add("cupiditate"),
                                                            add("eius"),
                                                        }};
                                                    }};
                                                    kind = "accusantium";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptatibus";
                                                        kind = "ipsum";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("atque"),
                                                            add("architecto"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "adipisci";
                                                        ids = new String[]{{
                                                            add("at"),
                                                            add("ipsum"),
                                                            add("ipsam"),
                                                        }};
                                                        kind = "corporis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("et"),
                                                        }};
                                                    }};
                                                    kind = "numquam";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "natus";
                                                        kind = "illum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("mollitia"),
                                                            add("tempore"),
                                                            add("voluptatibus"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "neque";
                                                        ids = new String[]{{
                                                            add("sequi"),
                                                        }};
                                                        kind = "delectus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ratione"),
                                                        }};
                                                    }};
                                                    kind = "a";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "sequi";
                                                        kind = "harum";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("optio"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "cum";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ipsum";
                                                        ids = new String[]{{
                                                            add("cum"),
                                                            add("at"),
                                                            add("quis"),
                                                            add("consequuntur"),
                                                        }};
                                                        kind = "sapiente";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nostrum"),
                                                            add("libero"),
                                                            add("officiis"),
                                                        }};
                                                    }};
                                                    kind = "sequi";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "illo";
                                                        kind = "est";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("reprehenderit"),
                                                            add("voluptates"),
                                                            add("aperiam"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "beatae";
                                        }}),
                                    }};
                                    kind = "tempora";
                                    name = "Claire MacGyver";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ex";
                                                        ids = new String[]{{
                                                            add("architecto"),
                                                            add("aliquid"),
                                                        }};
                                                        kind = "mollitia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("perspiciatis"),
                                                            add("molestiae"),
                                                            add("at"),
                                                            add("quae"),
                                                        }};
                                                    }};
                                                    kind = "molestiae";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "iste";
                                                        kind = "et";
                                                        match = UvarFilterMatchEnum.UNSPECIFIED;
                                                        values = new String[]{{
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "adipisci";
                                                        ids = new String[]{{
                                                            add("corporis"),
                                                        }};
                                                        kind = "officia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("nostrum"),
                                                            add("nulla"),
                                                            add("doloremque"),
                                                            add("impedit"),
                                                        }};
                                                    }};
                                                    kind = "ad";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "corrupti";
                                                        kind = "nobis";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("nesciunt"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "blanditiis";
                                                        ids = new String[]{{
                                                            add("perspiciatis"),
                                                        }};
                                                        kind = "quas";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("accusamus"),
                                                            add("aliquid"),
                                                            add("magnam"),
                                                        }};
                                                    }};
                                                    kind = "deserunt";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "voluptates";
                                                        kind = "minima";
                                                        match = UvarFilterMatchEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quis"),
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "at";
                                                        ids = new String[]{{
                                                            add("alias"),
                                                            add("neque"),
                                                            add("sed"),
                                                            add("reiciendis"),
                                                        }};
                                                        kind = "in";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                    uvarFilter = new UvarFilter() {{
                                                        complement = false;
                                                        index = "numquam";
                                                        kind = "iure";
                                                        match = UvarFilterMatchEnum.EXACT;
                                                        values = new String[]{{
                                                            add("aliquid"),
                                                            add("sed"),
                                                            add("voluptas"),
                                                        }};
                                                    }};
                                                }}),
                                            }};
                                            kind = "vero";
                                        }}),
                                    }};
                                    kind = "magnam";
                                    name = "Christopher Upton";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-09-21");
                            kind = "eius";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-04-02");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "minus";
                                name = "Mrs. Alonzo Metz";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "molestiae";
                            etag = "asperiores";
                            id = "7a52fc06-ca49-4622-9ac4-34b904ff8f6b";
                            kind = "minus";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "ea";
                        }};;
                        metricNames = new String[]{{
                            add("harum"),
                            add("eaque"),
                            add("sit"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ab";
                                            ids = new String[]{{
                                                add("aliquid"),
                                                add("libero"),
                                                add("illum"),
                                            }};
                                            kind = "hic";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("tempore"),
                                                add("architecto"),
                                            }};
                                        }};
                                        kind = "dolorum";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "accusantium";
                                            kind = "sapiente";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("sint"),
                                                add("ea"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ullam";
                                            ids = new String[]{{
                                                add("odio"),
                                                add("magni"),
                                            }};
                                            kind = "explicabo";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("nulla"),
                                            }};
                                        }};
                                        kind = "saepe";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "itaque";
                                            kind = "eos";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("laudantium"),
                                                add("minima"),
                                                add("cum"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tenetur";
                                            ids = new String[]{{
                                                add("quasi"),
                                                add("dolores"),
                                                add("amet"),
                                                add("cum"),
                                            }};
                                            kind = "magnam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("suscipit"),
                                                add("quasi"),
                                            }};
                                        }};
                                        kind = "doloribus";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quia";
                                            kind = "ipsum";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("iusto"),
                                                add("incidunt"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "consequuntur";
                                            ids = new String[]{{
                                                add("voluptates"),
                                                add("repellendus"),
                                                add("nam"),
                                            }};
                                            kind = "repellat";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("vero"),
                                                add("ipsam"),
                                                add("cum"),
                                                add("consequuntur"),
                                            }};
                                        }};
                                        kind = "repellat";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "debitis";
                                            kind = "inventore";
                                            match = UvarFilterMatchEnum.CONTAINS;
                                            values = new String[]{{
                                                add("odit"),
                                                add("eius"),
                                                add("veniam"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "sed";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "esse";
                                            ids = new String[]{{
                                                add("quis"),
                                                add("similique"),
                                                add("odio"),
                                            }};
                                            kind = "enim";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("repellendus"),
                                            }};
                                        }};
                                        kind = "sunt";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "voluptatum";
                                            kind = "iste";
                                            match = UvarFilterMatchEnum.UNSPECIFIED;
                                            values = new String[]{{
                                                add("repellendus"),
                                                add("ipsam"),
                                            }};
                                        }};
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "esse";
                                            ids = new String[]{{
                                                add("necessitatibus"),
                                            }};
                                            kind = "dignissimos";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sed"),
                                                add("at"),
                                            }};
                                        }};
                                        kind = "ullam";
                                        uvarFilter = new UvarFilter() {{
                                            complement = false;
                                            index = "quidem";
                                            kind = "aliquam";
                                            match = UvarFilterMatchEnum.EXACT;
                                            values = new String[]{{
                                                add("repudiandae"),
                                                add("molestias"),
                                                add("quas"),
                                                add("maiores"),
                                            }};
                                        }};
                                    }}),
                                }};
                                kind = "assumenda";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "officiis";
                                etag = "hic";
                                id = "e1ec5041-1c9b-4198-a560-0f1dbc4d9673";
                                kind = "consectetur";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "soluta";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "rerum";
                                etag = "voluptatem";
                                id = "ca2bf194-be37-4b90-89dc-108532bbfa06";
                                kind = "deserunt";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "officia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eum";
                                etag = "commodi";
                                id = "fa46cfc7-7dae-4bb9-a4b8-22497d622654";
                                kind = "distinctio";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eaque";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "culpa";
                                name = "Ida Kuhlman II";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "reiciendis";
                                name = "Nicolas Turner";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quaerat";
                                name = "Mitchell Hammes";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "voluptates";
                                name = "Ira Bechtelar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "autem";
                                name = "Marcos McKenzie";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "totam";
                                name = "Ernest Rutherford";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "unde";
                                etag = "beatae";
                                id = "41b194b8-b4b4-4d8f-87d4-9811f54539d5";
                                kind = "nobis";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "dignissimos";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dignissimos";
                                etag = "vero";
                                id = "e7100b74-456e-4f9e-858b-95c6f0b20c5f";
                                kind = "impedit";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "accusantium";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptates";
                                etag = "accusamus";
                                id = "4a530600-f138-4334-a4f7-a6004427fd4f";
                                kind = "omnis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "totam";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-02-03");
                            kind = "doloremque";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-09-04");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "distinctio";
                            etag = "dolores";
                            id = "dc16bd68-6ff7-4551-b22a-ab09bcc82ae0";
                            kind = "et";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "soluta";
                        }};;
                        metricNames = new String[]{{
                            add("voluptates"),
                            add("modi"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "commodi";
                                name = "Jimmie Reichel";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "magnam";
                                name = "Mr. Estelle Kulas";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Patrick Kuhlman";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 86004;
                            impressionsLookbackWindow = 106535;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 831169;
                            maximumImpressionInteractions = 802418;
                            maximumInteractionGap = 814026;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ea";
                                    etag = "dolor";
                                    id = "26794b85-6586-4a24-8698-7247751c6593";
                                    kind = "itaque";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ducimus";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nisi";
                                    etag = "velit";
                                    id = "87837ebe-602b-427a-9a9b-5306e3944310";
                                    kind = "quas";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "rerum";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "iusto";
                                    etag = "error";
                                    id = "601e7691-4bf7-4561-835e-38efcf584ac5";
                                    kind = "impedit";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "consequatur";
                                }}),
                            }};
                            kind = "blanditiis";
                            metricNames = new String[]{{
                                add("molestias"),
                                add("in"),
                                add("animi"),
                                add("quasi"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "natus";
                                    etag = "minima";
                                    id = "53e2cc22-c745-444f-b10b-7b33bef1ab90";
                                    kind = "quisquam";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "ipsa";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "natus";
                                    etag = "commodi";
                                    id = "65afab9b-364d-4d5d-855f-5fbbe3832701";
                                    kind = "cumque";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "corrupti";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "ea";
                                    etag = "rem";
                                    id = "5a75eee1-438c-46d0-889c-bc2b63a11280";
                                    kind = "reprehenderit";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "voluptas";
                                }}),
                            }};
                            kind = "neque";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-07-26");
                            kind = "eligendi";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YESTERDAY;
                            startDate = LocalDate.parse("2021-12-03");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ea";
                                etag = "optio";
                                id = "41f347a8-f8b8-4a6c-8ad6-539faab096b0";
                                kind = "vero";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "maiores";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dolor";
                                etag = "eligendi";
                                id = "8b3ea9ad-cb8a-4dfc-888d-81329f324afa";
                                kind = "blanditiis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "sunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "iure";
                                etag = "placeat";
                                id = "817ba41d-3197-4913-91e3-b8d6247090fd";
                                kind = "provident";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "in";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "repudiandae";
                                name = "Candace Conn Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "inventore";
                                name = "Marty Emard";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dicta";
                                name = "Steve Hand";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quia";
                                name = "Yvonne Miller";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("provident"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("commodi"),
                            add("vero"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 145580;
                        expirationDate = LocalDate.parse("2022-07-22");
                        repeats = "repudiandae";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SATURDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.THURSDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SATURDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-06-22");
                        timezone = "doloribus";
                    }};;
                    subAccountId = "deserunt";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "iste";
                alt = AltEnum.PROTO;
                callback = "fugit";
                fields = "debitis";
                key = "optio";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "cum";
                uploadProtocol = "quaerat";
            }};            

            DfareportingReportsUpdateResponse res = sdk.reports.dfareportingReportsUpdate(req, new DfareportingReportsUpdateSecurity("ab", "architecto") {{
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
