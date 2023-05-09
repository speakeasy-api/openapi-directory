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

            DfareportingReportsCompatibleFieldsQueryRequest req = new DfareportingReportsCompatibleFieldsQueryRequest("at") {{
                dollarXgafv = XgafvEnum.ONE;
                report = new Report() {{
                    accountId = "unde";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "a";
                                    etag = "maiores";
                                    id = "c8745005-e9d3-4d93-8e03-6f5c388664f6";
                                    kind = "error";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "corporis";
                                }}),
                            }};
                            kind = "quis";
                            metricNames = new String[]{{
                                add("perferendis"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "fugit";
                                    etag = "repudiandae";
                                    id = "2aed6aaf-863c-428d-840c-69a3d906f6eb";
                                    kind = "at";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "officia";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "fugiat";
                                    etag = "quam";
                                    id = "ec7394f2-5f63-44b3-b307-14e6be8c3e09";
                                    kind = "impedit";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "quaerat";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "quibusdam";
                                    etag = "dolorem";
                                    id = "42ac299a-6e5e-47ae-b134-02e945f53743";
                                    kind = "eveniet";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "placeat";
                                }}),
                            }};
                            kind = "repudiandae";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-09");
                            kind = "sint";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2022-10-28");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "repellat";
                                etag = "iste";
                                id = "b1f7d9af-fe69-4682-acee-fb04f8c512ca";
                                kind = "id";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "saepe";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "esse";
                                name = "Mattie Von";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "iste";
                                name = "Carroll Frami";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "labore";
                                name = "Sarah Hermiston";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("impedit"),
                            add("nesciunt"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "magnam";
                                name = "Herman Kuhn";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-29");
                            kind = "accusantium";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2021-03-16");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "qui";
                                etag = "corporis";
                                id = "3b6d7658-86ee-4ae5-bd4b-39f8a1490678";
                                kind = "reiciendis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "dolor";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("commodi"),
                            add("laudantium"),
                            add("laboriosam"),
                            add("repellendus"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("neque"),
                            add("omnis"),
                            add("earum"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.ATTACHMENT;
                        message = "occaecati";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Elza_Witting61@yahoo.com";
                                kind = "consequatur";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Teagan_Hamill@yahoo.com";
                                kind = "soluta";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Skylar.Predovic@gmail.com";
                                kind = "magnam";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Darien_Balistreri12@gmail.com";
                                kind = "molestias";
                            }}),
                        }};
                    }};;
                    etag = "neque";
                    fileName = "reprehenderit";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "explicabo";
                                id = "bedee767-90ed-40c1-aa7b-a478404489f6";
                                kind = "dignissimos";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "ipsa";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "itaque";
                                etag = "earum";
                                id = "048091a2-ba25-4ee6-875a-f8a60a7ae346";
                                kind = "recusandae";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "iste";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-02");
                            kind = "debitis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_WEEK;
                            startDate = LocalDate.parse("2021-02-01");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eum";
                                etag = "consequatur";
                                id = "acaca645-de98-4675-91a9-cce61ec2c79a";
                                kind = "consectetur";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "fuga";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "officiis";
                                etag = "ipsam";
                                id = "a4d5a65b-4d55-462d-9b7d-9e2d6fcf5576";
                                kind = "dolores";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nulla";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "harum";
                                etag = "corrupti";
                                id = "75c3a890-282a-451f-81cf-6796ed3d724c";
                                kind = "ab";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "repellat";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ad";
                                etag = "rem";
                                id = "1e98cce3-f716-4600-9a0e-3aa61c6fe09d";
                                kind = "totam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "explicabo";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ad";
                                name = "Luz Douglas";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "cumque";
                                name = "Rachael Dicki";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "alias";
                                name = "Jerry Hodkiewicz";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "excepturi";
                            etag = "perferendis";
                            id = "5cb4bede-f3c1-427c-b909-95528250dcbb";
                            kind = "eligendi";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "velit";
                        }};;
                        metricNames = new String[]{{
                            add("architecto"),
                            add("magni"),
                            add("dicta"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "atque";
                    kind = "quas";
                    lastModifiedTime = "placeat";
                    name = "Cecelia Ullrich";
                    ownerProfileId = "voluptate";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "autem";
                                id = "1391cc8f-a0b7-4d17-a492-6b0cf5e6cb6e";
                                kind = "harum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "expedita";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "quis";
                                id = "e0b99f3b-1358-4d6a-87bb-7aecbe569d70";
                                kind = "minus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "consequatur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "suscipit";
                                etag = "cupiditate";
                                id = "907f9894-4145-42a9-b01f-3442c61be133";
                                kind = "distinctio";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "optio";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "nulla";
                            kind = "debitis";
                            name = "Rita Dare";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "reiciendis";
                                                        ids = new String[]{{
                                                            add("suscipit"),
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
                                            }};
                                            kind = "eligendi";
                                        }}),
                                    }};
                                    kind = "numquam";
                                    name = "Meredith Dach";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quod";
                                                        ids = new String[]{{
                                                            add("culpa"),
                                                            add("sit"),
                                                            add("eum"),
                                                        }};
                                                        kind = "provident";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("at"),
                                                            add("fugit"),
                                                            add("cupiditate"),
                                                        }};
                                                    }};
                                                    kind = "dicta";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "libero";
                                                        ids = new String[]{{
                                                            add("libero"),
                                                            add("blanditiis"),
                                                            add("quae"),
                                                            add("eaque"),
                                                        }};
                                                        kind = "est";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("laborum"),
                                                            add("atque"),
                                                            add("molestiae"),
                                                        }};
                                                    }};
                                                    kind = "aliquam";
                                                }}),
                                            }};
                                            kind = "perspiciatis";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "esse";
                                                        ids = new String[]{{
                                                            add("recusandae"),
                                                            add("quibusdam"),
                                                            add("assumenda"),
                                                        }};
                                                        kind = "modi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("earum"),
                                                            add("ducimus"),
                                                            add("libero"),
                                                            add("corporis"),
                                                        }};
                                                    }};
                                                    kind = "eaque";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "optio";
                                                        ids = new String[]{{
                                                            add("blanditiis"),
                                                            add("molestiae"),
                                                            add("a"),
                                                            add("quae"),
                                                        }};
                                                        kind = "deleniti";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("excepturi"),
                                                        }};
                                                    }};
                                                    kind = "fugit";
                                                }}),
                                            }};
                                            kind = "esse";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "perferendis";
                                                        ids = new String[]{{
                                                            add("vel"),
                                                            add("culpa"),
                                                        }};
                                                        kind = "qui";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("consequatur"),
                                                            add("porro"),
                                                        }};
                                                    }};
                                                    kind = "deleniti";
                                                }}),
                                            }};
                                            kind = "maiores";
                                        }}),
                                    }};
                                    kind = "doloremque";
                                    name = "Kelvin Will Jr.";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-17");
                            kind = "saepe";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2021-01-13");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ea";
                                name = "Nick Hoeger";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "odit";
                                name = "Miss Jeannette Veum";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "tenetur";
                                name = "Colleen Kutch";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "fugiat";
                            etag = "fugit";
                            id = "3f86600c-61c7-4834-a73c-aa9118b38f1b";
                            kind = "ea";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "est";
                        }};;
                        metricNames = new String[]{{
                            add("ratione"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ipsam";
                                            ids = new String[]{{
                                                add("possimus"),
                                                add("cumque"),
                                            }};
                                            kind = "ab";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("iste"),
                                            }};
                                        }};
                                        kind = "modi";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "reiciendis";
                                            ids = new String[]{{
                                                add("eos"),
                                                add("voluptatibus"),
                                                add("debitis"),
                                            }};
                                            kind = "possimus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("perspiciatis"),
                                            }};
                                        }};
                                        kind = "expedita";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "mollitia";
                                            ids = new String[]{{
                                                add("asperiores"),
                                                add("dignissimos"),
                                                add("et"),
                                            }};
                                            kind = "eveniet";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("iste"),
                                                add("aspernatur"),
                                                add("placeat"),
                                            }};
                                        }};
                                        kind = "magni";
                                    }}),
                                }};
                                kind = "doloremque";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "inventore";
                                etag = "quia";
                                id = "28ac3adc-647d-4240-bc11-ea482824ccc6";
                                kind = "laborum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "voluptatibus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ipsa";
                                etag = "reiciendis";
                                id = "5b9d3cb1-1a76-487d-b100-e8e2b9b0d746";
                                kind = "possimus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "dolorum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nihil";
                                etag = "quisquam";
                                id = "7d1ea0e7-9fa9-4bbe-9f17-9f650b1e707e";
                                kind = "ducimus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "dolore";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "neque";
                                etag = "molestias";
                                id = "6713bacc-e072-4abd-a191-8d279c10c185";
                                kind = "ab";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "doloribus";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "repellendus";
                            kind = "in";
                            name = "Jean VonRueden";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "esse";
                                                        ids = new String[]{{
                                                            add("ea"),
                                                        }};
                                                        kind = "odit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("officia"),
                                                            add("ullam"),
                                                            add("ipsa"),
                                                            add("ratione"),
                                                        }};
                                                    }};
                                                    kind = "natus";
                                                }}),
                                            }};
                                            kind = "vel";
                                        }}),
                                    }};
                                    kind = "aspernatur";
                                    name = "Franklin Koelpin";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-12");
                            kind = "neque";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2022-09-03");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "qui";
                                name = "Luz Blick";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "sint";
                            etag = "libero";
                            id = "b6ef72a5-0871-4d99-b661-a7def168b6cc";
                            kind = "facilis";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "deleniti";
                        }};;
                        metricNames = new String[]{{
                            add("dolores"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "dolorum";
                                            ids = new String[]{{
                                                add("totam"),
                                                add("ipsam"),
                                                add("alias"),
                                            }};
                                            kind = "repudiandae";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("doloribus"),
                                            }};
                                        }};
                                        kind = "dolore";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "est";
                                            ids = new String[]{{
                                                add("itaque"),
                                            }};
                                            kind = "excepturi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("fuga"),
                                                add("voluptates"),
                                            }};
                                        }};
                                        kind = "exercitationem";
                                    }}),
                                }};
                                kind = "ullam";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "voluptatem";
                                            ids = new String[]{{
                                                add("voluptate"),
                                                add("corporis"),
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
                                }};
                                kind = "enim";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "cumque";
                                            ids = new String[]{{
                                                add("accusamus"),
                                                add("incidunt"),
                                                add("dicta"),
                                                add("quo"),
                                            }};
                                            kind = "natus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("hic"),
                                                add("ut"),
                                                add("nisi"),
                                            }};
                                        }};
                                        kind = "provident";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "delectus";
                                            ids = new String[]{{
                                                add("delectus"),
                                                add("beatae"),
                                            }};
                                            kind = "quod";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("dolorum"),
                                            }};
                                        }};
                                        kind = "adipisci";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "a";
                                            ids = new String[]{{
                                                add("sed"),
                                            }};
                                            kind = "sequi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("autem"),
                                                add("omnis"),
                                            }};
                                        }};
                                        kind = "itaque";
                                    }}),
                                }};
                                kind = "laboriosam";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "fugit";
                                etag = "aliquid";
                                id = "012eba05-7988-4c67-a0c3-103f1a40c0f3";
                                kind = "debitis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "deleniti";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "aliquid";
                                etag = "blanditiis";
                                id = "8fd8ec6f-c031-428f-8aaa-eee004eba7bf";
                                kind = "quos";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "neque";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "harum";
                                name = "Alvin Abshire";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "atque";
                                name = "Dr. Joan DuBuque III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "tempore";
                                etag = "quo";
                                id = "e55a8687-143c-4979-85ff-797a5da664b7";
                                kind = "vero";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dignissimos";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-09-11");
                            kind = "nihil";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.YEAR_TO_DATE;
                            startDate = LocalDate.parse("2021-10-01");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "culpa";
                            etag = "culpa";
                            id = "2832bb65-862d-42a3-9f9b-14aa6bdec7f4";
                            kind = "magnam";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "dolores";
                        }};;
                        metricNames = new String[]{{
                            add("qui"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "unde";
                                name = "Leo Swift";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laborum";
                                name = "Marcos Kuhn";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "cupiditate";
                                name = "Bob Bernier";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "tenetur";
                                name = "Ruben Lubowitz";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 806335;
                            impressionsLookbackWindow = 136774;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 847548;
                            maximumImpressionInteractions = 704820;
                            maximumInteractionGap = 897288;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "nesciunt";
                                    etag = "pariatur";
                                    id = "58e8247d-122c-49f6-b678-fa2795836736";
                                    kind = "dolor";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "est";
                                }}),
                            }};
                            kind = "aut";
                            metricNames = new String[]{{
                                add("excepturi"),
                                add("doloremque"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "ea";
                                    etag = "doloribus";
                                    id = "aeb86480-730d-48f8-b89d-9ca6075656fc";
                                    kind = "alias";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "cum";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "earum";
                                    etag = "ex";
                                    id = "7155e2d0-6a30-470d-ae29-7f581fabaaa7";
                                    kind = "pariatur";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "consequatur";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "et";
                                    etag = "voluptatem";
                                    id = "88076ff5-f6ed-4298-9408-8269b6a70b0d";
                                    kind = "temporibus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "consequuntur";
                                }}),
                            }};
                            kind = "earum";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-29");
                            kind = "hic";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST60_DAYS;
                            startDate = LocalDate.parse("2020-12-03");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "et";
                                etag = "officiis";
                                id = "1e21ddc6-9038-4b1d-987b-51eb5fd30bfe";
                                kind = "eaque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "eius";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "cupiditate";
                                etag = "sit";
                                id = "cf20254a-9590-443c-b462-d6bc9917f98e";
                                kind = "eius";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "unde";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "aspernatur";
                                etag = "facilis";
                                id = "979a413d-6a8c-4916-83bd-861d0d98ccf8";
                                kind = "excepturi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "amet";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "totam";
                                etag = "ex";
                                id = "1186ed76-c002-4fac-b13a-c24c8143b866";
                                kind = "optio";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "iusto";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "officia";
                                name = "Kate Crona";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ducimus";
                                name = "Ruth Pouros";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("sit"),
                            add("recusandae"),
                            add("corrupti"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("nam"),
                            add("quod"),
                            add("dolore"),
                            add("atque"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 818172;
                        expirationDate = LocalDate.parse("2020-08-30");
                        repeats = "esse";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.WEDNESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.THURSDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.DAY_OF_MONTH;
                        startDate = LocalDate.parse("2022-12-04");
                    }};;
                    subAccountId = "sit";
                    type = ReportTypeEnum.PATH_TO_CONVERSION;
                }};;
                accessToken = "consequatur";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "dicta";
                key = "ut";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "est";
                uploadProtocol = "et";
            }};            

            DfareportingReportsCompatibleFieldsQueryResponse res = sdk.reports.dfareportingReportsCompatibleFieldsQuery(req, new DfareportingReportsCompatibleFieldsQuerySecurity("sit", "nemo") {{
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

            DfareportingReportsDeleteRequest req = new DfareportingReportsDeleteRequest("atque", "laudantium") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quaerat";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "impedit";
                key = "consectetur";
                oauthToken = "commodi";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "perspiciatis";
                uploadProtocol = "ut";
            }};            

            DfareportingReportsDeleteResponse res = sdk.reports.dfareportingReportsDelete(req, new DfareportingReportsDeleteSecurity("corrupti", "corrupti") {{
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

            DfareportingReportsFilesGetRequest req = new DfareportingReportsFilesGetRequest("occaecati", "eos", "iusto") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "magni";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "aliquam";
                key = "debitis";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "voluptatum";
                uploadProtocol = "maiores";
            }};            

            DfareportingReportsFilesGetResponse res = sdk.reports.dfareportingReportsFilesGet(req, new DfareportingReportsFilesGetSecurity("quo", "eaque") {{
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

            DfareportingReportsFilesListRequest req = new DfareportingReportsFilesListRequest("illum", "enim") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "sapiente";
                alt = AltEnum.JSON;
                callback = "iure";
                fields = "tempore";
                key = "unde";
                maxResults = 992116L;
                oauthToken = "excepturi";
                pageToken = "rem";
                prettyPrint = false;
                quotaUser = "odit";
                sortField = DfareportingReportsFilesListSortFieldEnum.ID;
                sortOrder = DfareportingReportsFilesListSortOrderEnum.DESCENDING;
                uploadType = "accusamus";
                uploadProtocol = "ipsa";
            }};            

            DfareportingReportsFilesListResponse res = sdk.reports.dfareportingReportsFilesList(req, new DfareportingReportsFilesListSecurity("iusto", "deleniti") {{
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

            DfareportingReportsGetRequest req = new DfareportingReportsGetRequest("aperiam", "quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nesciunt";
                alt = AltEnum.MEDIA;
                callback = "nobis";
                fields = "cupiditate";
                key = "necessitatibus";
                oauthToken = "consequuntur";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "esse";
                uploadProtocol = "sit";
            }};            

            DfareportingReportsGetResponse res = sdk.reports.dfareportingReportsGet(req, new DfareportingReportsGetSecurity("adipisci", "quaerat") {{
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

            DfareportingReportsInsertRequest req = new DfareportingReportsInsertRequest("magnam") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "accusantium";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "maiores";
                                    etag = "tempora";
                                    id = "78eb5394-83f7-448e-afcc-b69d541b4b39";
                                    kind = "amet";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "amet";
                                }}),
                            }};
                            kind = "ad";
                            metricNames = new String[]{{
                                add("nisi"),
                                add("suscipit"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "quis";
                                    etag = "expedita";
                                    id = "ea32201d-ec37-49c5-98ea-1d48c5c2f9e2";
                                    kind = "et";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "provident";
                                }}),
                            }};
                            kind = "voluptatem";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-06-19");
                            kind = "enim";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.MONTH_TO_DATE;
                            startDate = LocalDate.parse("2022-07-06");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "libero";
                                etag = "repellat";
                                id = "c7677f0f-504a-46e4-828f-b6daee19c26c";
                                kind = "quae";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "facilis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ex";
                                etag = "quasi";
                                id = "8c6331ca-bdab-4767-a444-dd0da0abe58e";
                                kind = "expedita";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "nulla";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "labore";
                                name = "Lyle Blanda";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laborum";
                                name = "Jim Marvin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("maxime"),
                            add("quasi"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "harum";
                                name = "Holly Trantow";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "ea";
                                name = "Naomi Cole";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "voluptas";
                                name = "Phil Maggio";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-11-22");
                            kind = "eligendi";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST90_DAYS;
                            startDate = LocalDate.parse("2022-03-15");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.SITE_BY_ADVERTISER;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "iusto";
                                etag = "sint";
                                id = "08d73809-a02f-406e-9228-b56065a5074b";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "cum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "totam";
                                etag = "laborum";
                                id = "f6849d2b-9940-4436-ba09-64c053876e39";
                                kind = "fugiat";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "tenetur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "perspiciatis";
                                etag = "quisquam";
                                id = "765dfd73-54e5-4cb9-8977-017a26204bb2";
                                kind = "eum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "laborum";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("eveniet"),
                            add("cupiditate"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("excepturi"),
                            add("quos"),
                            add("eos"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.ATTACHMENT;
                        message = "iure";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Wanda68@hotmail.com";
                                kind = "fugit";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Horacio_Abernathy@yahoo.com";
                                kind = "doloribus";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Margarette_Schumm@gmail.com";
                                kind = "unde";
                            }}),
                        }};
                    }};;
                    etag = "recusandae";
                    fileName = "architecto";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "consectetur";
                                etag = "tempora";
                                id = "715acda0-44fa-4aed-ae13-a620e2e918c7";
                                kind = "quis";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "alias";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "modi";
                                etag = "rem";
                                id = "6cf398a0-b374-4617-9d95-ce3044be4eb3";
                                kind = "cum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "quasi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "cum";
                                id = "503c3140-d877-42c5-b5e1-dd6bf64b454e";
                                kind = "natus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "sequi";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-02-12");
                            kind = "molestiae";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-01-20");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "debitis";
                                etag = "exercitationem";
                                id = "7f54ebf2-d2b4-4609-befa-44a8dff40cdd";
                                kind = "inventore";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "enim";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "soluta";
                                name = "Miss Vernon Pagac";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "quas";
                            etag = "facilis";
                            id = "7860afea-6c63-4513-ad53-086c10a856a1";
                            kind = "perspiciatis";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "modi";
                        }};;
                        metricNames = new String[]{{
                            add("nisi"),
                            add("ipsam"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "laborum";
                    kind = "omnis";
                    lastModifiedTime = "reprehenderit";
                    name = "Brittany Metz";
                    ownerProfileId = "corporis";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "consequatur";
                                id = "cecbc78b-d248-4ec6-a8b2-40b1c06c9c06";
                                kind = "modi";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nulla";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sed";
                                etag = "distinctio";
                                id = "dd9e58dd-b166-45c3-92c7-f550d4721c17";
                                kind = "aliquid";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "error";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "consequuntur";
                                etag = "nulla";
                                id = "d7878e71-bf8c-4141-841f-e1f87ea103a9";
                                kind = "voluptatum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "laboriosam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "recusandae";
                                etag = "laborum";
                                id = "1606399e-f17b-4817-98d4-ab5bc80dea77";
                                kind = "doloribus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "omnis";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "cupiditate";
                            kind = "dolor";
                            name = "Alyssa Schmitt";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "impedit";
                                                        ids = new String[]{{
                                                            add("maiores"),
                                                            add("magni"),
                                                            add("quisquam"),
                                                            add("dolores"),
                                                        }};
                                                        kind = "aliquid";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("corrupti"),
                                                            add("dolore"),
                                                            add("doloremque"),
                                                        }};
                                                    }};
                                                    kind = "animi";
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
                                                }}),
                                            }};
                                            kind = "soluta";
                                        }}),
                                    }};
                                    kind = "molestiae";
                                    name = "Sonya Dietrich";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-03");
                            kind = "consectetur";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.QUARTER_TO_DATE;
                            startDate = LocalDate.parse("2020-06-19");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "adipisci";
                                name = "Rhonda Medhurst V";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "qui";
                                name = "Irene Aufderhar";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sunt";
                                name = "Angelo Gutkowski PhD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "officiis";
                            etag = "repellendus";
                            id = "4b5cf061-6ee9-4227-975b-d60daa0e149c";
                            kind = "pariatur";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "quod";
                        }};;
                        metricNames = new String[]{{
                            add("assumenda"),
                            add("illum"),
                            add("ipsum"),
                            add("ea"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quidem";
                                            ids = new String[]{{
                                                add("sint"),
                                                add("qui"),
                                                add("amet"),
                                                add("natus"),
                                            }};
                                            kind = "alias";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("quis"),
                                            }};
                                        }};
                                        kind = "a";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "odit";
                                            ids = new String[]{{
                                                add("deleniti"),
                                                add("excepturi"),
                                            }};
                                            kind = "unde";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("numquam"),
                                                add("delectus"),
                                                add("delectus"),
                                                add("accusamus"),
                                            }};
                                        }};
                                        kind = "cum";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "excepturi";
                                            ids = new String[]{{
                                                add("officiis"),
                                                add("impedit"),
                                                add("ullam"),
                                            }};
                                            kind = "aperiam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("rem"),
                                            }};
                                        }};
                                        kind = "laborum";
                                    }}),
                                }};
                                kind = "voluptatum";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "expedita";
                                etag = "consequatur";
                                id = "1d297f7b-456a-4855-a508-8c8a326341ac";
                                kind = "eligendi";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "impedit";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "culpa";
                                etag = "nisi";
                                id = "63d4a859-5c1b-432b-b213-e3b31cd6a5be";
                                kind = "odio";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "omnis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "vel";
                                id = "b96c636e-74d2-48a4-8149-a1b841198640";
                                kind = "minima";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "dignissimos";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "vel";
                                etag = "tempore";
                                id = "3087113d-e406-4108-ad09-53c89cd927a5";
                                kind = "soluta";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "nostrum";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "exercitationem";
                            kind = "vitae";
                            name = "Latoya Quitzon";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "iste";
                                                        ids = new String[]{{
                                                            add("rem"),
                                                            add("dolore"),
                                                        }};
                                                        kind = "voluptatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                    kind = "eum";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "incidunt";
                                                        ids = new String[]{{
                                                            add("neque"),
                                                            add("sequi"),
                                                        }};
                                                        kind = "architecto";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("minima"),
                                                            add("rerum"),
                                                            add("voluptates"),
                                                            add("suscipit"),
                                                        }};
                                                    }};
                                                    kind = "veritatis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nam";
                                                        ids = new String[]{{
                                                            add("sapiente"),
                                                        }};
                                                        kind = "dolorem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("odio"),
                                                        }};
                                                    }};
                                                    kind = "dolores";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "voluptatum";
                                                        ids = new String[]{{
                                                            add("modi"),
                                                            add("minus"),
                                                        }};
                                                        kind = "non";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("placeat"),
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "possimus";
                                                }}),
                                            }};
                                            kind = "labore";
                                        }}),
                                    }};
                                    kind = "consectetur";
                                    name = "Grady Russel";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "placeat";
                                                        ids = new String[]{{
                                                            add("illum"),
                                                            add("alias"),
                                                            add("aperiam"),
                                                        }};
                                                        kind = "nisi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("esse"),
                                                            add("minus"),
                                                        }};
                                                    }};
                                                    kind = "iure";
                                                }}),
                                            }};
                                            kind = "accusamus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "distinctio";
                                                        ids = new String[]{{
                                                            add("quo"),
                                                            add("iste"),
                                                            add("itaque"),
                                                        }};
                                                        kind = "provident";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("incidunt"),
                                                            add("eligendi"),
                                                        }};
                                                    }};
                                                    kind = "ipsam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quidem";
                                                        ids = new String[]{{
                                                            add("numquam"),
                                                            add("enim"),
                                                        }};
                                                        kind = "fuga";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("maiores"),
                                                            add("quia"),
                                                            add("asperiores"),
                                                        }};
                                                    }};
                                                    kind = "eligendi";
                                                }}),
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
                                            }};
                                            kind = "aspernatur";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "officiis";
                                                        ids = new String[]{{
                                                            add("aut"),
                                                            add("ex"),
                                                            add("dolorum"),
                                                        }};
                                                        kind = "autem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("distinctio"),
                                                            add("officiis"),
                                                            add("fugit"),
                                                        }};
                                                    }};
                                                    kind = "explicabo";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "officia";
                                                        ids = new String[]{{
                                                            add("sunt"),
                                                        }};
                                                        kind = "asperiores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("animi"),
                                                            add("nihil"),
                                                        }};
                                                    }};
                                                    kind = "ipsam";
                                                }}),
                                            }};
                                            kind = "quibusdam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "maiores";
                                                        ids = new String[]{{
                                                            add("tempora"),
                                                            add("quaerat"),
                                                            add("quis"),
                                                            add("dolores"),
                                                        }};
                                                        kind = "harum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("iusto"),
                                                            add("modi"),
                                                            add("ducimus"),
                                                            add("aut"),
                                                        }};
                                                    }};
                                                    kind = "a";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "impedit";
                                                        ids = new String[]{{
                                                            add("blanditiis"),
                                                            add("minus"),
                                                        }};
                                                        kind = "odit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("harum"),
                                                        }};
                                                    }};
                                                    kind = "praesentium";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nihil";
                                                        ids = new String[]{{
                                                            add("suscipit"),
                                                        }};
                                                        kind = "porro";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("doloribus"),
                                                            add("aliquid"),
                                                        }};
                                                    }};
                                                    kind = "libero";
                                                }}),
                                            }};
                                            kind = "et";
                                        }}),
                                    }};
                                    kind = "voluptate";
                                    name = "Mr. Stella Lindgren II";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-03-08");
                            kind = "aperiam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-07-03");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "magnam";
                                name = "Gustavo Little";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "voluptatibus";
                                name = "Conrad Flatley";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "incidunt";
                                name = "Annette Ankunding";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "nemo";
                            etag = "dolorum";
                            id = "7f8cc291-1a6b-47eb-9c60-09f01dd38523";
                            kind = "quo";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "animi";
                        }};;
                        metricNames = new String[]{{
                            add("officiis"),
                            add("soluta"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "asperiores";
                                            ids = new String[]{{
                                                add("laudantium"),
                                                add("sequi"),
                                                add("repellat"),
                                                add("totam"),
                                            }};
                                            kind = "neque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("iste"),
                                                add("quidem"),
                                                add("aut"),
                                                add("minus"),
                                            }};
                                        }};
                                        kind = "numquam";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "vel";
                                            ids = new String[]{{
                                                add("eaque"),
                                                add("iste"),
                                                add("tempora"),
                                            }};
                                            kind = "necessitatibus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("provident"),
                                                add("quod"),
                                                add("explicabo"),
                                                add("qui"),
                                            }};
                                        }};
                                        kind = "aut";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ipsam";
                                            ids = new String[]{{
                                                add("delectus"),
                                                add("saepe"),
                                                add("odio"),
                                                add("laboriosam"),
                                            }};
                                            kind = "veniam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("a"),
                                                add("rerum"),
                                                add("eligendi"),
                                                add("quidem"),
                                            }};
                                        }};
                                        kind = "rem";
                                    }}),
                                }};
                                kind = "commodi";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.PATH_MATCH_POSITION_UNSPECIFIED;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ad";
                                            ids = new String[]{{
                                                add("magni"),
                                                add("veritatis"),
                                                add("aliquid"),
                                                add("est"),
                                            }};
                                            kind = "fuga";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("aut"),
                                                add("esse"),
                                            }};
                                        }};
                                        kind = "consequatur";
                                    }}),
                                }};
                                kind = "odio";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quam";
                                            ids = new String[]{{
                                                add("unde"),
                                            }};
                                            kind = "corrupti";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("odio"),
                                                add("officia"),
                                            }};
                                        }};
                                        kind = "totam";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "esse";
                                            ids = new String[]{{
                                                add("beatae"),
                                            }};
                                            kind = "esse";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("illum"),
                                                add("sint"),
                                                add("commodi"),
                                                add("qui"),
                                            }};
                                        }};
                                        kind = "possimus";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "a";
                                            ids = new String[]{{
                                                add("debitis"),
                                            }};
                                            kind = "itaque";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("porro"),
                                                add("consectetur"),
                                            }};
                                        }};
                                        kind = "molestias";
                                    }}),
                                }};
                                kind = "nostrum";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "natus";
                                etag = "in";
                                id = "0e1a1a8d-bcf6-4e19-b901-2c444e231ba1";
                                kind = "magnam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "in";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sed";
                                etag = "iusto";
                                id = "de95f72a-dabf-4680-8b01-bcbc032f2c19";
                                kind = "quibusdam";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "asperiores";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "architecto";
                                name = "Julie Nienow";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "maiores";
                                name = "Amy Herman";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "odio";
                                name = "Annie Johnson";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "culpa";
                                etag = "laboriosam";
                                id = "e596aa41-b9e2-4053-ae8c-315325b5e022";
                                kind = "iste";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "iusto";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sed";
                                etag = "voluptas";
                                id = "d88138da-ce6d-4d2a-8991-b6d1760043c7";
                                kind = "unde";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "animi";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-05-04");
                            kind = "inventore";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2020-11-09");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "veritatis";
                            etag = "sunt";
                            id = "9dc524ab-b7b1-40ca-b244-de103d0830ac";
                            kind = "dolore";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "doloremque";
                        }};;
                        metricNames = new String[]{{
                            add("aut"),
                            add("minus"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "eveniet";
                                name = "Miriam Howell";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sunt";
                                name = "Alvin Sauer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 411446;
                            impressionsLookbackWindow = 220719;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 468227;
                            maximumImpressionInteractions = 218541;
                            maximumInteractionGap = 209394;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "incidunt";
                                    etag = "illum";
                                    id = "ad58b890-542e-45a5-9a10-fd8ac0f482f9";
                                    kind = "accusamus";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "laborum";
                                }}),
                            }};
                            kind = "nemo";
                            metricNames = new String[]{{
                                add("optio"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "quae";
                                    etag = "non";
                                    id = "dae122f0-bfec-4c41-932d-704b3ae70934";
                                    kind = "nulla";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "recusandae";
                                }}),
                            }};
                            kind = "harum";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-03-25");
                            kind = "est";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2021-02-10");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "asperiores";
                                etag = "iure";
                                id = "1b0652fe-6536-4fb3-8a41-4aa294d64c08";
                                kind = "officia";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "accusamus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "inventore";
                                id = "a807151a-354b-4a1a-ad7d-dc39917b844c";
                                kind = "rem";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aut";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "officia";
                                name = "Alejandro Tillman";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("occaecati"),
                            add("modi"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("porro"),
                            add("est"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 152179;
                        expirationDate = LocalDate.parse("2021-09-05");
                        repeats = "odit";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.TUESDAY),
                            add(ReportScheduleRepeatsOnWeekDaysEnum.FRIDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2022-07-31");
                    }};;
                    subAccountId = "non";
                    type = ReportTypeEnum.CROSS_DIMENSION_REACH;
                }};;
                accessToken = "inventore";
                alt = AltEnum.JSON;
                callback = "odio";
                fields = "odit";
                key = "non";
                oauthToken = "officia";
                prettyPrint = false;
                quotaUser = "fuga";
                uploadType = "aut";
                uploadProtocol = "adipisci";
            }};            

            DfareportingReportsInsertResponse res = sdk.reports.dfareportingReportsInsert(req, new DfareportingReportsInsertSecurity("earum", "deleniti") {{
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

            DfareportingReportsListRequest req = new DfareportingReportsListRequest("amet") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "illo";
                alt = AltEnum.PROTO;
                callback = "veritatis";
                fields = "saepe";
                key = "quam";
                maxResults = 668499L;
                oauthToken = "quidem";
                pageToken = "dolorem";
                prettyPrint = false;
                quotaUser = "earum";
                scope = DfareportingReportsListScopeEnum.ALL;
                sortField = DfareportingReportsListSortFieldEnum.LAST_MODIFIED_TIME;
                sortOrder = DfareportingReportsListSortOrderEnum.DESCENDING;
                uploadType = "ipsa";
                uploadProtocol = "corporis";
            }};            

            DfareportingReportsListResponse res = sdk.reports.dfareportingReportsList(req, new DfareportingReportsListSecurity("officiis", "dicta") {{
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

            DfareportingReportsPatchRequest req = new DfareportingReportsPatchRequest("nesciunt", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                report = new Report() {{
                    accountId = "deleniti";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "tenetur";
                                    etag = "minima";
                                    id = "91f98329-f919-422f-bcad-07b6545000a5";
                                    kind = "nobis";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "vel";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "est";
                                    etag = "sed";
                                    id = "22e3ff77-0a2b-442e-9edf-64a2a875c6a7";
                                    kind = "quae";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "saepe";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "minima";
                                    etag = "numquam";
                                    id = "b47ec6aa-f9bd-4832-be8f-7d316145ebdd";
                                    kind = "praesentium";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ratione";
                                }}),
                            }};
                            kind = "error";
                            metricNames = new String[]{{
                                add("consequuntur"),
                                add("optio"),
                                add("vitae"),
                                add("iure"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "excepturi";
                                    etag = "nulla";
                                    id = "8a0a4664-6ec6-458e-9817-cde0aee8c722";
                                    kind = "ab";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "hic";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "aliquam";
                                    etag = "consequuntur";
                                    id = "5a0338b7-1b3d-42fd-bb63-6c073088e75a";
                                    kind = "rerum";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "hic";
                                }}),
                            }};
                            kind = "tenetur";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-05-07");
                            kind = "beatae";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2020-11-22");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "reprehenderit";
                                etag = "ut";
                                id = "cd44c23c-0b11-4281-ad68-35b93ced687b";
                                kind = "quidem";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "corporis";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "hic";
                                name = "Rhonda Pfeffer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("porro"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "placeat";
                                name = "Jeremiah Cartwright";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "accusamus";
                                name = "Lester Connelly";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-10-10");
                            kind = "blanditiis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_MONTH;
                            startDate = LocalDate.parse("2022-04-30");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "magni";
                                etag = "earum";
                                id = "87d87b51-e22e-477c-8e6e-11c883326dc5";
                                kind = "harum";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "aperiam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ipsum";
                                etag = "voluptatem";
                                id = "67a899e2-5c6a-44c1-8ff1-87497b140816";
                                kind = "velit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "fuga";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dicta";
                                etag = "laboriosam";
                                id = "60070c0b-cde7-4e50-aa44-1101c138b462";
                                kind = "natus";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "non";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("minima"),
                            add("sit"),
                            add("doloribus"),
                            add("ducimus"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("illo"),
                            add("distinctio"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.LINK;
                        message = "praesentium";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Dariana.Nienow@gmail.com";
                                kind = "eligendi";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.ATTACHMENT;
                                email = "Mae_Senger35@gmail.com";
                                kind = "fugit";
                            }}),
                        }};
                    }};;
                    etag = "in";
                    fileName = "sunt";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "consequatur";
                                etag = "autem";
                                id = "539024bd-09d0-4fc6-8dff-8fe0e0e46f22";
                                kind = "exercitationem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "aspernatur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "occaecati";
                                etag = "repellendus";
                                id = "79d39d87-90e2-4e60-94a3-3d970b2b531b";
                                kind = "doloribus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "consectetur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "necessitatibus";
                                id = "da3f8e5e-392f-422a-b7cb-7af1b63ecde0";
                                kind = "atque";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "asperiores";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-12-05");
                            kind = "consequatur";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST365_DAYS;
                            startDate = LocalDate.parse("2022-09-04");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "adipisci";
                                etag = "autem";
                                id = "c53d4159-955c-45c7-9760-4597f37719dd";
                                kind = "blanditiis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "corrupti";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "numquam";
                                etag = "quos";
                                id = "2c0265d9-2c4c-48c9-b8a0-ac1e04d2aceb";
                                kind = "aut";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "temporibus";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "perferendis";
                                name = "Lorena Lind";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "blanditiis";
                                name = "Olga Nicolas";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "dolor";
                                name = "Sergio Ebert Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sunt";
                                name = "Dr. Rudolph Champlin III";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "modi";
                            etag = "temporibus";
                            id = "17852d28-be1d-4b01-9691-9f831593a84e";
                            kind = "similique";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "pariatur";
                        }};;
                        metricNames = new String[]{{
                            add("et"),
                            add("ullam"),
                            add("quod"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.CSV;
                    id = "cumque";
                    kind = "quasi";
                    lastModifiedTime = "nostrum";
                    name = "Tomas Hoeger";
                    ownerProfileId = "perferendis";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "dignissimos";
                                etag = "dolorum";
                                id = "675597ec-beb7-4982-baf9-a7da6c29b938";
                                kind = "officiis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "inventore";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "similique";
                                etag = "molestiae";
                                id = "e6ed6f7f-f04f-4da0-8669-eae818240365";
                                kind = "nostrum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "laborum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "excepturi";
                                etag = "consequuntur";
                                id = "3c49919e-bd1c-4f77-9538-cbbfcdf4ece9";
                                kind = "eum";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "quisquam";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "magnam";
                            kind = "reiciendis";
                            name = "Edwin Conroy";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "provident";
                                                        ids = new String[]{{
                                                            add("illo"),
                                                            add("reprehenderit"),
                                                        }};
                                                        kind = "placeat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("beatae"),
                                                            add("repellendus"),
                                                        }};
                                                    }};
                                                    kind = "quibusdam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "maxime";
                                                        ids = new String[]{{
                                                            add("corporis"),
                                                        }};
                                                        kind = "sit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("consequatur"),
                                                            add("quo"),
                                                        }};
                                                    }};
                                                    kind = "dignissimos";
                                                }}),
                                            }};
                                            kind = "exercitationem";
                                        }}),
                                    }};
                                    kind = "dicta";
                                    name = "Victor Ondricka";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-06-13");
                            kind = "tempore";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2022-09-03");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Gina Haag MD";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Ed Little";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "cupiditate";
                                name = "Camille Beer";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "architecto";
                            etag = "magnam";
                            id = "46f793d3-b100-4201-87cd-1b83160b3e3e";
                            kind = "unde";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "occaecati";
                        }};;
                        metricNames = new String[]{{
                            add("perferendis"),
                            add("mollitia"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "mollitia";
                                            ids = new String[]{{
                                                add("quo"),
                                                add("ducimus"),
                                                add("est"),
                                                add("deleniti"),
                                            }};
                                            kind = "ea";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("distinctio"),
                                                add("officia"),
                                                add("quis"),
                                            }};
                                        }};
                                        kind = "ipsa";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "accusantium";
                                            ids = new String[]{{
                                                add("quas"),
                                                add("hic"),
                                                add("ut"),
                                            }};
                                            kind = "minus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("dolores"),
                                                add("eveniet"),
                                            }};
                                        }};
                                        kind = "quibusdam";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ex";
                                            ids = new String[]{{
                                                add("a"),
                                                add("voluptas"),
                                                add("qui"),
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
                                    }}),
                                }};
                                kind = "enim";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "non";
                                id = "212f7b59-b715-4464-ab9e-37c84c3d3ca4";
                                kind = "sint";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "blanditiis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "dolorem";
                                etag = "molestiae";
                                id = "97888d15-6f01-4ae3-abb8-d0028e3e1dc9";
                                kind = "alias";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "occaecati";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sapiente";
                                etag = "molestiae";
                                id = "ef0f1385-b67c-4246-b3ac-98f6d268f92a";
                                kind = "suscipit";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "cum";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "doloremque";
                            kind = "laudantium";
                            name = "Joan Hilpert";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "aperiam";
                                                        ids = new String[]{{
                                                            add("quam"),
                                                            add("qui"),
                                                        }};
                                                        kind = "laudantium";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("est"),
                                                            add("odit"),
                                                        }};
                                                    }};
                                                    kind = "quae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "beatae";
                                                        ids = new String[]{{
                                                            add("optio"),
                                                            add("reiciendis"),
                                                            add("nobis"),
                                                            add("voluptate"),
                                                        }};
                                                        kind = "magnam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("maiores"),
                                                            add("hic"),
                                                            add("minima"),
                                                        }};
                                                    }};
                                                    kind = "temporibus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "repudiandae";
                                                        ids = new String[]{{
                                                            add("voluptatibus"),
                                                            add("aspernatur"),
                                                        }};
                                                        kind = "expedita";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("blanditiis"),
                                                            add("corporis"),
                                                            add("esse"),
                                                        }};
                                                    }};
                                                    kind = "soluta";
                                                }}),
                                            }};
                                            kind = "nobis";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cumque";
                                                        ids = new String[]{{
                                                            add("ab"),
                                                            add("voluptatibus"),
                                                            add("reiciendis"),
                                                        }};
                                                        kind = "sequi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("et"),
                                                            add("sint"),
                                                        }};
                                                    }};
                                                    kind = "eaque";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "accusantium";
                                                        ids = new String[]{{
                                                            add("expedita"),
                                                        }};
                                                        kind = "quia";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("voluptates"),
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "velit";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "porro";
                                                        ids = new String[]{{
                                                            add("nobis"),
                                                            add("dolor"),
                                                        }};
                                                        kind = "ex";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("expedita"),
                                                        }};
                                                    }};
                                                    kind = "adipisci";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "error";
                                                        ids = new String[]{{
                                                            add("ullam"),
                                                            add("rerum"),
                                                            add("repellat"),
                                                            add("nihil"),
                                                        }};
                                                        kind = "unde";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "tempora";
                                                }}),
                                            }};
                                            kind = "autem";
                                        }}),
                                    }};
                                    kind = "repellendus";
                                    name = "Shirley Dicki";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-14");
                            kind = "molestias";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST30_DAYS;
                            startDate = LocalDate.parse("2021-09-29");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "perferendis";
                                name = "Miss Megan Hoeger II";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "accusantium";
                            etag = "quasi";
                            id = "e7bd8643-968d-4d0d-b73a-07c3076c862d";
                            kind = "necessitatibus";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "ea";
                        }};;
                        metricNames = new String[]{{
                            add("qui"),
                            add("a"),
                            add("iste"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
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
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "maxime";
                                            ids = new String[]{{
                                                add("non"),
                                                add("in"),
                                                add("sequi"),
                                            }};
                                            kind = "eligendi";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("iure"),
                                                add("iste"),
                                            }};
                                        }};
                                        kind = "corrupti";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "ex";
                                            ids = new String[]{{
                                                add("officiis"),
                                                add("ad"),
                                            }};
                                            kind = "molestias";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("voluptatibus"),
                                                add("necessitatibus"),
                                                add("harum"),
                                                add("optio"),
                                            }};
                                        }};
                                        kind = "inventore";
                                    }}),
                                }};
                                kind = "corrupti";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "deserunt";
                                            ids = new String[]{{
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
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "sequi";
                                            ids = new String[]{{
                                                add("voluptates"),
                                                add("dolore"),
                                            }};
                                            kind = "placeat";
                                            matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                            values = new String[]{{
                                                add("aperiam"),
                                                add("ex"),
                                                add("eos"),
                                                add("numquam"),
                                            }};
                                        }};
                                        kind = "assumenda";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "debitis";
                                            ids = new String[]{{
                                                add("ipsam"),
                                            }};
                                            kind = "nesciunt";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("magnam"),
                                                add("vitae"),
                                                add("accusamus"),
                                                add("dolore"),
                                            }};
                                        }};
                                        kind = "eos";
                                    }}),
                                }};
                                kind = "facere";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.LAST;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "molestiae";
                                            ids = new String[]{{
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
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "sint";
                                            ids = new String[]{{
                                                add("occaecati"),
                                                add("cupiditate"),
                                                add("modi"),
                                            }};
                                            kind = "facere";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("quis"),
                                                add("dolor"),
                                                add("nobis"),
                                            }};
                                        }};
                                        kind = "dolore";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "sed";
                                            ids = new String[]{{
                                                add("autem"),
                                                add("impedit"),
                                            }};
                                            kind = "sit";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sit"),
                                                add("perferendis"),
                                            }};
                                        }};
                                        kind = "asperiores";
                                    }}),
                                }};
                                kind = "minus";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "explicabo";
                                            ids = new String[]{{
                                                add("molestias"),
                                                add("minus"),
                                                add("esse"),
                                                add("inventore"),
                                            }};
                                            kind = "aperiam";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("vitae"),
                                                add("itaque"),
                                                add("voluptatibus"),
                                            }};
                                        }};
                                        kind = "molestiae";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "tempore";
                                            ids = new String[]{{
                                                add("dicta"),
                                            }};
                                            kind = "laborum";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("asperiores"),
                                                add("voluptates"),
                                            }};
                                        }};
                                        kind = "facere";
                                    }}),
                                }};
                                kind = "molestiae";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "vero";
                                etag = "aperiam";
                                id = "fba2734d-3134-4756-ae2a-90304a708e21";
                                kind = "perspiciatis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "omnis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "libero";
                                etag = "ea";
                                id = "7335519b-00c5-40e7-ba8e-26f6d65fc994";
                                kind = "dolor";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aspernatur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ullam";
                                etag = "non";
                                id = "3a8f8c1e-639e-461d-bf23-53545dbfd69d";
                                kind = "corrupti";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "eius";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "officiis";
                                etag = "saepe";
                                id = "4956d861-c1fe-403a-8381-758654652475";
                                kind = "autem";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "hic";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Cora Monahan";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "cum";
                                name = "Salvador Streich";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "excepturi";
                                name = "Douglas Armstrong";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "fuga";
                                name = "Jose Waelchi V";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "itaque";
                                name = "Ms. Cornelius Lind";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "aliquid";
                                name = "Cassandra McKenzie";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "optio";
                                etag = "ut";
                                id = "e0edcd82-70b6-4c80-b077-2d93721e4eb4";
                                kind = "possimus";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "incidunt";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eligendi";
                                etag = "odio";
                                id = "f22ce20a-aaa3-4e63-9268-3ff48c35c49a";
                                kind = "dolorum";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "debitis";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "aut";
                                etag = "quidem";
                                id = "938f6dc8-5a8b-46d7-b772-acf428241d1d";
                                kind = "fugiat";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "voluptatem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nemo";
                                etag = "maxime";
                                id = "e1d3992d-befe-4d11-9077-aeeb0f5aeecc";
                                kind = "possimus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "consectetur";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-26");
                            kind = "explicabo";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2021-01-21");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ipsam";
                            etag = "corporis";
                            id = "964ee5eb-f7e6-4989-bf05-1aa7c59e69b7";
                            kind = "nobis";
                            matchType = DimensionValueMatchTypeEnum.EXACT;
                            value = "vero";
                        }};;
                        metricNames = new String[]{{
                            add("laboriosam"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "sequi";
                                name = "Rodney Koelpin";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fugiat";
                                name = "Phil Bins";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "fuga";
                                name = "Bennie Legros";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 298506;
                            impressionsLookbackWindow = 142067;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 88663;
                            maximumImpressionInteractions = 3324;
                            maximumInteractionGap = 878403;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "commodi";
                                    etag = "facilis";
                                    id = "76f9669a-be38-442b-9c33-0450b65ef68c";
                                    kind = "illo";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "quaerat";
                                }}),
                            }};
                            kind = "cupiditate";
                            metricNames = new String[]{{
                                add("a"),
                                add("corrupti"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "veritatis";
                                    etag = "occaecati";
                                    id = "f06dfbf0-4c4b-4a16-858a-e373848982d1";
                                    kind = "tenetur";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "voluptates";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "omnis";
                                    etag = "sequi";
                                    id = "4dc510b8-6167-47bf-9c53-d20b955c8839";
                                    kind = "consectetur";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "temporibus";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "nostrum";
                                    etag = "quod";
                                    id = "4dd75ad7-f370-4def-b4ca-1de629d2cfb7";
                                    kind = "harum";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "nesciunt";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "voluptatum";
                                    etag = "animi";
                                    id = "81cdb3e7-ce0c-430a-bd87-db981664a0f2";
                                    kind = "suscipit";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "doloribus";
                                }}),
                            }};
                            kind = "iure";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-10-11");
                            kind = "quam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-05-03");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "aspernatur";
                                etag = "vel";
                                id = "b6ef375c-3803-44f8-a42d-e03993e99d36";
                                kind = "modi";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "dolorum";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "reiciendis";
                                etag = "soluta";
                                id = "699442ca-63d2-4821-b5b3-ea4d9fee3775";
                                kind = "delectus";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "a";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "delectus";
                                etag = "laudantium";
                                id = "a76fa943-58b9-4483-a226-d61f242008d1";
                                kind = "debitis";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "sunt";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "quam";
                                name = "Dr. Sue Jacobi";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "pariatur";
                                name = "Celia Nikolaus";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "id";
                                name = "Sarah Sipes";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("animi"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("autem"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 278510;
                        expirationDate = LocalDate.parse("2021-01-19");
                        repeats = "nihil";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.SATURDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2022-12-10");
                    }};;
                    subAccountId = "atque";
                    type = ReportTypeEnum.FLOODLIGHT;
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "eum";
                fields = "voluptate";
                key = "veritatis";
                oauthToken = "dolor";
                prettyPrint = false;
                quotaUser = "corrupti";
                uploadType = "quis";
                uploadProtocol = "eligendi";
            }};            

            DfareportingReportsPatchResponse res = sdk.reports.dfareportingReportsPatch(req, new DfareportingReportsPatchSecurity("quaerat", "animi") {{
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

            DfareportingReportsRunRequest req = new DfareportingReportsRunRequest("expedita", "consectetur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsum";
                alt = AltEnum.MEDIA;
                callback = "illum";
                fields = "facere";
                key = "debitis";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "temporibus";
                synchronous = false;
                uploadType = "quisquam";
                uploadProtocol = "eaque";
            }};            

            DfareportingReportsRunResponse res = sdk.reports.dfareportingReportsRun(req, new DfareportingReportsRunSecurity("rem", "tempora") {{
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

            DfareportingReportsUpdateRequest req = new DfareportingReportsUpdateRequest("repellendus", "suscipit") {{
                dollarXgafv = XgafvEnum.ONE;
                report = new Report() {{
                    accountId = "quasi";
                    criteria = new ReportCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "reprehenderit";
                                    etag = "quidem";
                                    id = "7d67dd78-bfbe-4369-b0c7-81f0b63f1a45";
                                    kind = "tempore";
                                    matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                    value = "quos";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "quas";
                                    etag = "aliquid";
                                    id = "ac107dcb-62f6-490f-89f3-74593dc3b805";
                                    kind = "impedit";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "vitae";
                                }}),
                            }};
                            kind = "cumque";
                            metricNames = new String[]{{
                                add("doloremque"),
                                add("veniam"),
                                add("dolorem"),
                                add("voluptate"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "alias";
                                    etag = "quibusdam";
                                    id = "d94e87eb-25d1-48ce-9d77-4140cd070aae";
                                    kind = "eaque";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "mollitia";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "necessitatibus";
                                    etag = "quia";
                                    id = "0749c3d9-f148-4c9f-88f4-107c22068496";
                                    kind = "adipisci";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "est";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "vel";
                                    etag = "eligendi";
                                    id = "eec84857-5890-4a9f-aef9-40e8d668c08f";
                                    kind = "beatae";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "ab";
                                }}),
                            }};
                            kind = "tempora";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-12-05");
                            kind = "magnam";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_YEAR;
                            startDate = LocalDate.parse("2022-08-25");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "voluptas";
                                etag = "amet";
                                id = "caef2940-7514-4624-ae33-9b43fa19375d";
                                kind = "veritatis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "facere";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "molestiae";
                                etag = "labore";
                                id = "f62f8d44-10d1-49a9-a862-2981eae02324";
                                kind = "eius";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "aliquam";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Gayle Bins MD";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "architecto";
                                name = "Amber Donnelly";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "qui";
                                name = "Danielle Grant";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quae";
                                name = "Johnathan D'Amore";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("odit"),
                            add("saepe"),
                            add("unde"),
                        }};
                    }};;
                    crossDimensionReachCriteria = new ReportCrossDimensionReachCriteria() {{
                        breakdown = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "dicta";
                                name = "Lawrence Price";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "laboriosam";
                                name = "Lora Goyette I";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2021-04-01");
                            kind = "tenetur";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_MONTH;
                            startDate = LocalDate.parse("2021-08-31");
                        }};;
                        dimension = ReportCrossDimensionReachCriteriaDimensionEnum.CAMPAIGN;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "atque";
                                etag = "fuga";
                                id = "d6bbbf40-9e03-44d3-a6db-c4320d3e97c3";
                                kind = "iure";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "delectus";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "commodi";
                                etag = "reiciendis";
                                id = "ce8891f8-1776-47d8-a212-f6f9d4f73f70";
                                kind = "aut";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "mollitia";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "molestiae";
                                etag = "cumque";
                                id = "bb43c16c-12aa-40eb-9029-eddb5946c575";
                                kind = "praesentium";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "voluptatem";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "voluptatum";
                                etag = "illum";
                                id = "2deba95c-f1d9-4945-85c1-4573f90bd4a8";
                                kind = "rem";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "esse";
                            }}),
                        }};
                        metricNames = new String[]{{
                            add("consequatur"),
                            add("soluta"),
                            add("cumque"),
                        }};
                        overlapMetricNames = new String[]{{
                            add("dolorem"),
                        }};
                        pivoted = false;
                    }};;
                    delivery = new ReportDelivery() {{
                        emailOwner = false;
                        emailOwnerDeliveryType = ReportDeliveryEmailOwnerDeliveryTypeEnum.ATTACHMENT;
                        message = "placeat";
                        recipients = new org.openapis.openapi.models.shared.Recipient[]{{
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Mattie36@gmail.com";
                                kind = "ea";
                            }}),
                            add(new Recipient() {{
                                deliveryType = RecipientDeliveryTypeEnum.LINK;
                                email = "Daphne.Weimann@hotmail.com";
                                kind = "necessitatibus";
                            }}),
                        }};
                    }};;
                    etag = "eius";
                    fileName = "aspernatur";
                    floodlightCriteria = new ReportFloodlightCriteria() {{
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "ipsum";
                                etag = "neque";
                                id = "05ba8277-0bf6-4d2d-ae1c-b27fde0b6480";
                                kind = "reprehenderit";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "placeat";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "perspiciatis";
                                etag = "harum";
                                id = "fd241a62-cf5f-4a3e-bc61-47e0c2cce298";
                                kind = "illo";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "qui";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quia";
                                etag = "tempora";
                                id = "e200e513-e655-4c46-bb6d-88760650d0eb";
                                kind = "voluptatem";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "vero";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-11-26");
                            kind = "at";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.LAST7_DAYS;
                            startDate = LocalDate.parse("2021-01-09");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "doloribus";
                                etag = "ullam";
                                id = "b5a53eb6-c072-4c5d-a6df-fa577403383a";
                                kind = "laboriosam";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "assumenda";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "cum";
                                etag = "aliquid";
                                id = "bb78aa73-10c3-4d14-ba92-c26349d59272";
                                kind = "debitis";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "exercitationem";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "ea";
                                name = "Carrie Hyatt";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "excepturi";
                            etag = "repudiandae";
                            id = "aadacd2b-866c-4e16-9e80-82e0ab164fb6";
                            kind = "et";
                            matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                            value = "eius";
                        }};;
                        metricNames = new String[]{{
                            add("eius"),
                            add("repellendus"),
                            add("facilis"),
                        }};
                        reportProperties = new ReportFloodlightCriteriaReportProperties() {{
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                        }};;
                    }};;
                    format = ReportFormatEnum.EXCEL;
                    id = "eaque";
                    kind = "facilis";
                    lastModifiedTime = "nostrum";
                    name = "Miss Kristin Leannon";
                    ownerProfileId = "maiores";
                    pathAttributionCriteria = new ReportPathAttributionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "natus";
                                etag = "reiciendis";
                                id = "7d9ec432-ba73-4092-b913-7eac1f806d4e";
                                kind = "dolores";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "consectetur";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "sint";
                                etag = "necessitatibus";
                                id = "706278aa-c613-444b-a7b3-f7bd633e88b6";
                                kind = "dicta";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "ipsa";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "tempora";
                                etag = "dolor";
                                id = "56ca70d8-d4f5-4d60-b464-11237b62fbc3";
                                kind = "cupiditate";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "corrupti";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "possimus";
                            kind = "eaque";
                            name = "Sonya Schuppe";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "similique";
                                                        ids = new String[]{{
                                                            add("non"),
                                                            add("ipsum"),
                                                            add("eaque"),
                                                            add("qui"),
                                                        }};
                                                        kind = "ut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("veniam"),
                                                            add("tempore"),
                                                            add("voluptate"),
                                                            add("dolorum"),
                                                        }};
                                                    }};
                                                    kind = "aperiam";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "delectus";
                                                        ids = new String[]{{
                                                            add("impedit"),
                                                            add("hic"),
                                                        }};
                                                        kind = "repudiandae";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("possimus"),
                                                            add("dolorem"),
                                                            add("similique"),
                                                        }};
                                                    }};
                                                    kind = "commodi";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "cupiditate";
                                                        ids = new String[]{{
                                                            add("reiciendis"),
                                                            add("amet"),
                                                        }};
                                                        kind = "dignissimos";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("eveniet"),
                                                            add("consectetur"),
                                                            add("iure"),
                                                            add("architecto"),
                                                        }};
                                                    }};
                                                    kind = "repellendus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("nostrum"),
                                                            add("illum"),
                                                            add("esse"),
                                                            add("nesciunt"),
                                                        }};
                                                        kind = "officiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("corporis"),
                                                            add("officia"),
                                                            add("officia"),
                                                        }};
                                                    }};
                                                    kind = "laboriosam";
                                                }}),
                                            }};
                                            kind = "esse";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "porro";
                                                        ids = new String[]{{
                                                            add("et"),
                                                            add("omnis"),
                                                        }};
                                                        kind = "quasi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quaerat"),
                                                            add("praesentium"),
                                                        }};
                                                    }};
                                                    kind = "veritatis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "temporibus";
                                                        ids = new String[]{{
                                                            add("tempore"),
                                                        }};
                                                        kind = "sint";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("optio"),
                                                        }};
                                                    }};
                                                    kind = "voluptate";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ab";
                                                        ids = new String[]{{
                                                            add("ipsam"),
                                                            add("cupiditate"),
                                                            add("nobis"),
                                                            add("voluptatibus"),
                                                        }};
                                                        kind = "vel";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("mollitia"),
                                                            add("iure"),
                                                            add("earum"),
                                                            add("ad"),
                                                        }};
                                                    }};
                                                    kind = "exercitationem";
                                                }}),
                                            }};
                                            kind = "hic";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quod";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                            add("veniam"),
                                                            add("error"),
                                                            add("consequatur"),
                                                        }};
                                                        kind = "autem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("ex"),
                                                            add("totam"),
                                                        }};
                                                    }};
                                                    kind = "beatae";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ex";
                                                        ids = new String[]{{
                                                            add("autem"),
                                                            add("minima"),
                                                            add("asperiores"),
                                                        }};
                                                        kind = "magni";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("necessitatibus"),
                                                        }};
                                                    }};
                                                    kind = "quidem";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rerum";
                                                        ids = new String[]{{
                                                            add("impedit"),
                                                            add("nisi"),
                                                            add("ipsum"),
                                                            add("cumque"),
                                                        }};
                                                        kind = "porro";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("autem"),
                                                            add("corporis"),
                                                        }};
                                                    }};
                                                    kind = "aperiam";
                                                }}),
                                            }};
                                            kind = "veniam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "accusantium";
                                                        ids = new String[]{{
                                                            add("omnis"),
                                                        }};
                                                        kind = "a";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("quia"),
                                                            add("occaecati"),
                                                        }};
                                                    }};
                                                    kind = "eveniet";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "hic";
                                                        ids = new String[]{{
                                                            add("sint"),
                                                            add("illo"),
                                                        }};
                                                        kind = "dolores";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                            add("ratione"),
                                                            add("ex"),
                                                            add("explicabo"),
                                                        }};
                                                    }};
                                                    kind = "consectetur";
                                                }}),
                                            }};
                                            kind = "corporis";
                                        }}),
                                    }};
                                    kind = "odio";
                                    name = "Victoria Wolff";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "est";
                                                        ids = new String[]{{
                                                            add("velit"),
                                                            add("ex"),
                                                            add("ab"),
                                                            add("illo"),
                                                        }};
                                                        kind = "earum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("asperiores"),
                                                            add("est"),
                                                            add("nulla"),
                                                        }};
                                                    }};
                                                    kind = "autem";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nostrum";
                                                        ids = new String[]{{
                                                            add("repellendus"),
                                                            add("molestias"),
                                                        }};
                                                        kind = "necessitatibus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("est"),
                                                            add("vero"),
                                                            add("placeat"),
                                                            add("qui"),
                                                        }};
                                                    }};
                                                    kind = "necessitatibus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "minus";
                                                        ids = new String[]{{
                                                            add("ipsa"),
                                                            add("in"),
                                                            add("maxime"),
                                                            add("expedita"),
                                                        }};
                                                        kind = "sint";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("voluptas"),
                                                            add("quos"),
                                                            add("quas"),
                                                        }};
                                                    }};
                                                    kind = "perspiciatis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "dolorum";
                                                        ids = new String[]{{
                                                            add("rerum"),
                                                        }};
                                                        kind = "voluptatem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("dignissimos"),
                                                            add("labore"),
                                                            add("exercitationem"),
                                                            add("maxime"),
                                                        }};
                                                    }};
                                                    kind = "minus";
                                                }}),
                                            }};
                                            kind = "facilis";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "molestias";
                                                        ids = new String[]{{
                                                            add("beatae"),
                                                            add("quia"),
                                                            add("ab"),
                                                            add("vel"),
                                                        }};
                                                        kind = "suscipit";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("sequi"),
                                                            add("amet"),
                                                            add("veritatis"),
                                                            add("autem"),
                                                        }};
                                                    }};
                                                    kind = "fugiat";
                                                }}),
                                            }};
                                            kind = "officia";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ducimus";
                                                        ids = new String[]{{
                                                            add("sit"),
                                                        }};
                                                        kind = "itaque";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("repudiandae"),
                                                            add("voluptate"),
                                                            add("unde"),
                                                            add("sequi"),
                                                        }};
                                                    }};
                                                    kind = "occaecati";
                                                }}),
                                            }};
                                            kind = "culpa";
                                        }}),
                                    }};
                                    kind = "temporibus";
                                    name = "Estelle Hansen";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "possimus";
                                                        ids = new String[]{{
                                                            add("tempore"),
                                                            add("dignissimos"),
                                                            add("quibusdam"),
                                                            add("quos"),
                                                        }};
                                                        kind = "explicabo";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("esse"),
                                                            add("expedita"),
                                                        }};
                                                    }};
                                                    kind = "beatae";
                                                }}),
                                            }};
                                            kind = "libero";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "illo";
                                                        ids = new String[]{{
                                                            add("expedita"),
                                                            add("sunt"),
                                                            add("error"),
                                                            add("alias"),
                                                        }};
                                                        kind = "exercitationem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("velit"),
                                                            add("voluptatem"),
                                                        }};
                                                    }};
                                                    kind = "consequatur";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nisi";
                                                        ids = new String[]{{
                                                            add("aliquam"),
                                                            add("fugiat"),
                                                        }};
                                                        kind = "eum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("ipsam"),
                                                            add("fugit"),
                                                            add("sed"),
                                                        }};
                                                    }};
                                                    kind = "iusto";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "explicabo";
                                                        ids = new String[]{{
                                                            add("asperiores"),
                                                            add("non"),
                                                            add("at"),
                                                            add("pariatur"),
                                                        }};
                                                        kind = "earum";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("vitae"),
                                                            add("sapiente"),
                                                            add("dicta"),
                                                        }};
                                                    }};
                                                    kind = "dignissimos";
                                                }}),
                                            }};
                                            kind = "deserunt";
                                        }}),
                                    }};
                                    kind = "doloremque";
                                    name = "Dr. Curtis Turner";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-04-21");
                            kind = "ab";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2022-01-09");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "blanditiis";
                                name = "Lola Welch";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "tempora";
                                name = "Mr. Dan Goyette";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "ad";
                            etag = "vitae";
                            id = "a423a913-e1a7-4902-bb73-dcfcefac4598";
                            kind = "aliquam";
                            matchType = DimensionValueMatchTypeEnum.CONTAINS;
                            value = "quam";
                        }};;
                        metricNames = new String[]{{
                            add("officiis"),
                            add("quod"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "voluptatum";
                                            ids = new String[]{{
                                                add("tempore"),
                                            }};
                                            kind = "ipsa";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("sint"),
                                                add("modi"),
                                                add("corrupti"),
                                            }};
                                        }};
                                        kind = "illum";
                                    }}),
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "quam";
                                            ids = new String[]{{
                                                add("nobis"),
                                                add("vitae"),
                                                add("ducimus"),
                                                add("quas"),
                                            }};
                                            kind = "possimus";
                                            matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                            values = new String[]{{
                                                add("assumenda"),
                                                add("optio"),
                                            }};
                                        }};
                                        kind = "at";
                                    }}),
                                }};
                                kind = "occaecati";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "libero";
                                            ids = new String[]{{
                                                add("quis"),
                                                add("suscipit"),
                                                add("assumenda"),
                                                add("amet"),
                                            }};
                                            kind = "architecto";
                                            matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                            values = new String[]{{
                                                add("quidem"),
                                                add("deserunt"),
                                                add("quas"),
                                            }};
                                        }};
                                        kind = "eius";
                                    }}),
                                }};
                                kind = "praesentium";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.FIRST;
                            }}),
                        }};
                    }};;
                    pathCriteria = new ReportPathCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "eveniet";
                                etag = "rem";
                                id = "902b4853-4fa3-4fc8-bc1f-c5b0acdb04c4";
                                kind = "corrupti";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "aliquam";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "quia";
                                etag = "dignissimos";
                                id = "d7de963f-f03e-4497-9897-002de0defd4e";
                                kind = "inventore";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "sapiente";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "eos";
                                etag = "neque";
                                id = "03b32529-3841-4339-88aa-fabda028e65c";
                                kind = "fugit";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "sit";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "omnis";
                                etag = "eos";
                                id = "4d345419-bbef-40ca-991e-3a76595202b3";
                                kind = "voluptas";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "nulla";
                            }}),
                        }};
                        customChannelGrouping = new ChannelGrouping() {{
                            fallbackName = "modi";
                            kind = "voluptates";
                            name = "Vicki Leannon";
                            rules = new org.openapis.openapi.models.shared.ChannelGroupingRule[]{{
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "libero";
                                                        ids = new String[]{{
                                                            add("sit"),
                                                        }};
                                                        kind = "quidem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("a"),
                                                            add("blanditiis"),
                                                        }};
                                                    }};
                                                    kind = "esse";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "eius";
                                                        ids = new String[]{{
                                                            add("nobis"),
                                                        }};
                                                        kind = "ut";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("at"),
                                                        }};
                                                    }};
                                                    kind = "blanditiis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "impedit";
                                                        ids = new String[]{{
                                                            add("eveniet"),
                                                        }};
                                                        kind = "repellat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("reiciendis"),
                                                            add("laboriosam"),
                                                        }};
                                                    }};
                                                    kind = "ab";
                                                }}),
                                            }};
                                            kind = "quae";
                                        }}),
                                    }};
                                    kind = "recusandae";
                                    name = "Harold Casper";
                                }}),
                                add(new ChannelGroupingRule() {{
                                    disjunctiveMatchStatements = new org.openapis.openapi.models.shared.DisjunctiveMatchStatement[]{{
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "labore";
                                                        ids = new String[]{{
                                                            add("blanditiis"),
                                                        }};
                                                        kind = "repellendus";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("laborum"),
                                                        }};
                                                    }};
                                                    kind = "iusto";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "necessitatibus";
                                                        ids = new String[]{{
                                                            add("quidem"),
                                                            add("adipisci"),
                                                        }};
                                                        kind = "ratione";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("est"),
                                                        }};
                                                    }};
                                                    kind = "iste";
                                                }}),
                                            }};
                                            kind = "minus";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "ea";
                                                        ids = new String[]{{
                                                            add("enim"),
                                                            add("qui"),
                                                            add("tempore"),
                                                            add("repellendus"),
                                                        }};
                                                        kind = "modi";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("quidem"),
                                                            add("dolore"),
                                                            add("ratione"),
                                                            add("eaque"),
                                                        }};
                                                    }};
                                                    kind = "culpa";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "nihil";
                                                        ids = new String[]{{
                                                            add("magnam"),
                                                            add("id"),
                                                            add("quam"),
                                                        }};
                                                        kind = "laboriosam";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("doloribus"),
                                                            add("ipsa"),
                                                        }};
                                                    }};
                                                    kind = "voluptatibus";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "explicabo";
                                                        ids = new String[]{{
                                                            add("modi"),
                                                            add("saepe"),
                                                            add("adipisci"),
                                                        }};
                                                        kind = "quaerat";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("doloremque"),
                                                            add("cumque"),
                                                            add("omnis"),
                                                            add("ullam"),
                                                        }};
                                                    }};
                                                    kind = "soluta";
                                                }}),
                                            }};
                                            kind = "nam";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "quasi";
                                                        ids = new String[]{{
                                                            add("consectetur"),
                                                            add("voluptas"),
                                                        }};
                                                        kind = "dolorem";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                                        values = new String[]{{
                                                            add("consectetur"),
                                                            add("nesciunt"),
                                                            add("autem"),
                                                        }};
                                                    }};
                                                    kind = "ut";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "consequuntur";
                                                        ids = new String[]{{
                                                            add("sint"),
                                                            add("hic"),
                                                        }};
                                                        kind = "eius";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                                        values = new String[]{{
                                                            add("repellendus"),
                                                            add("omnis"),
                                                        }};
                                                    }};
                                                    kind = "voluptate";
                                                }}),
                                            }};
                                            kind = "saepe";
                                        }}),
                                        add(new DisjunctiveMatchStatement() {{
                                            eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "rerum";
                                                        ids = new String[]{{
                                                            add("similique"),
                                                            add("esse"),
                                                        }};
                                                        kind = "blanditiis";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.EXACT;
                                                        values = new String[]{{
                                                            add("tempora"),
                                                        }};
                                                    }};
                                                    kind = "officiis";
                                                }}),
                                                add(new EventFilter() {{
                                                    dimensionFilter = new PathReportDimensionValue() {{
                                                        dimensionName = "qui";
                                                        ids = new String[]{{
                                                            add("accusamus"),
                                                            add("eligendi"),
                                                            add("harum"),
                                                            add("quam"),
                                                        }};
                                                        kind = "aspernatur";
                                                        matchType = PathReportDimensionValueMatchTypeEnum.BEGINS_WITH;
                                                        values = new String[]{{
                                                            add("voluptatem"),
                                                            add("minima"),
                                                        }};
                                                    }};
                                                    kind = "quaerat";
                                                }}),
                                            }};
                                            kind = "aut";
                                        }}),
                                    }};
                                    kind = "modi";
                                    name = "Bert Kiehn";
                                }}),
                            }};
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2022-06-15");
                            kind = "perferendis";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.PREVIOUS_QUARTER;
                            startDate = LocalDate.parse("2022-03-09");
                        }};;
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "praesentium";
                                name = "Ellen Lehner";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "eaque";
                                name = "Mrs. Lewis Spinka";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "eos";
                            etag = "deserunt";
                            id = "0fc3a3bd-dcd5-4b00-a88c-c9a5a2cec673";
                            kind = "beatae";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "facere";
                        }};;
                        metricNames = new String[]{{
                            add("unde"),
                        }};
                        pathFilters = new org.openapis.openapi.models.shared.PathFilter[]{{
                            add(new PathFilter() {{
                                eventFilters = new org.openapis.openapi.models.shared.EventFilter[]{{
                                    add(new EventFilter() {{
                                        dimensionFilter = new PathReportDimensionValue() {{
                                            dimensionName = "pariatur";
                                            ids = new String[]{{
                                                add("perspiciatis"),
                                                add("nisi"),
                                                add("ratione"),
                                                add("enim"),
                                            }};
                                            kind = "ut";
                                            matchType = PathReportDimensionValueMatchTypeEnum.CONTAINS;
                                            values = new String[]{{
                                                add("laborum"),
                                                add("itaque"),
                                                add("recusandae"),
                                                add("occaecati"),
                                            }};
                                        }};
                                        kind = "sit";
                                    }}),
                                }};
                                kind = "nisi";
                                pathMatchPosition = PathFilterPathMatchPositionEnum.ANY;
                            }}),
                        }};
                    }};;
                    pathToConversionCriteria = new ReportPathToConversionCriteria() {{
                        activityFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "doloremque";
                                etag = "expedita";
                                id = "deb44fc0-aaa8-4c22-b908-256b16e703eb";
                                kind = "ea";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "suscipit";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ducimus";
                                etag = "sed";
                                id = "8e45275f-10bb-4960-affc-ef1a8f1c046c";
                                kind = "consequatur";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "commodi";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "praesentium";
                                etag = "qui";
                                id = "ec8df364-8095-4fdb-9951-0351d82fbd37";
                                kind = "accusamus";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "ad";
                            }}),
                        }};
                        conversionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "officiis";
                                name = "Byron Homenick PhD";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customFloodlightVariables = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "reprehenderit";
                                name = "Kayla Bauch";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "saepe";
                                name = "Darrin Mraz Jr.";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "quod";
                                name = "Cecilia Hegmann IV";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "explicabo";
                                name = "Jacob Effertz";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        customRichMediaEvents = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "excepturi";
                                etag = "ipsam";
                                id = "fd560f93-7e24-4d87-9304-5d2f713e05b5";
                                kind = "veniam";
                                matchType = DimensionValueMatchTypeEnum.CONTAINS;
                                value = "dolores";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "distinctio";
                                etag = "tenetur";
                                id = "c7395f71-223b-4584-aa1b-9c76a14e6540";
                                kind = "nesciunt";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "praesentium";
                            }}),
                        }};
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-07-07");
                            kind = "velit";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.TODAY;
                            startDate = LocalDate.parse("2021-07-18");
                        }};;
                        floodlightConfigId = new DimensionValue() {{
                            dimensionName = "culpa";
                            etag = "nobis";
                            id = "eabf8012-4590-448f-a667-67e29d4e543c";
                            kind = "modi";
                            matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                            value = "est";
                        }};;
                        metricNames = new String[]{{
                            add("officia"),
                            add("debitis"),
                        }};
                        perInteractionDimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "necessitatibus";
                                name = "Malcolm Stoltenberg";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                            add(new SortedDimension() {{
                                kind = "sit";
                                name = "Randall Dooley";
                                sortOrder = SortedDimensionSortOrderEnum.ASCENDING;
                            }}),
                        }};
                        reportProperties = new ReportPathToConversionCriteriaReportProperties() {{
                            clicksLookbackWindow = 524609;
                            impressionsLookbackWindow = 121552;
                            includeAttributedIPConversions = false;
                            includeUnattributedCookieConversions = false;
                            includeUnattributedIPConversions = false;
                            maximumClickInteractions = 645664;
                            maximumImpressionInteractions = 173724;
                            maximumInteractionGap = 992514;
                            pivotOnInteractionPath = false;
                        }};;
                    }};;
                    reachCriteria = new ReportReachCriteria() {{
                        activities = new Activities() {{
                            filters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "voluptatibus";
                                    etag = "maiores";
                                    id = "e931a78c-4264-4cab-91b2-c0d08c6b9320";
                                    kind = "neque";
                                    matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                    value = "possimus";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "magnam";
                                    etag = "facere";
                                    id = "76271677-4383-47d1-aaff-2becc38bafd4";
                                    kind = "voluptatum";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "deserunt";
                                }}),
                                add(new DimensionValue() {{
                                    dimensionName = "distinctio";
                                    etag = "voluptatibus";
                                    id = "cb61cb2f-7690-41b9-83ef-2a620b7c3190";
                                    kind = "soluta";
                                    matchType = DimensionValueMatchTypeEnum.EXACT;
                                    value = "incidunt";
                                }}),
                            }};
                            kind = "quaerat";
                            metricNames = new String[]{{
                                add("quaerat"),
                            }};
                        }};;
                        customRichMediaEvents = new CustomRichMediaEvents() {{
                            filteredEventIds = new org.openapis.openapi.models.shared.DimensionValue[]{{
                                add(new DimensionValue() {{
                                    dimensionName = "cum";
                                    etag = "numquam";
                                    id = "7d0673b4-1583-4584-92c4-b53c23e5dd0e";
                                    kind = "sit";
                                    matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                    value = "odio";
                                }}),
                            }};
                            kind = "quasi";
                        }};;
                        dateRange = new DateRange() {{
                            endDate = LocalDate.parse("2020-01-08");
                            kind = "recusandae";
                            relativeDateRange = DateRangeRelativeDateRangeEnum.WEEK_TO_DATE;
                            startDate = LocalDate.parse("2022-06-22");
                        }};;
                        dimensionFilters = new org.openapis.openapi.models.shared.DimensionValue[]{{
                            add(new DimensionValue() {{
                                dimensionName = "voluptates";
                                etag = "commodi";
                                id = "9a15d26b-34a0-42ff-a31f-c8db48ad116a";
                                kind = "dolor";
                                matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                                value = "velit";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "nihil";
                                etag = "delectus";
                                id = "7008aaf5-230c-4427-a3fc-d362ad94af44";
                                kind = "blanditiis";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "illo";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "atque";
                                etag = "consectetur";
                                id = "765262c2-d817-459a-b099-33473ccb7911";
                                kind = "vero";
                                matchType = DimensionValueMatchTypeEnum.EXACT;
                                value = "aliquid";
                            }}),
                            add(new DimensionValue() {{
                                dimensionName = "ex";
                                etag = "omnis";
                                id = "ffa9c8fe-1e77-4bac-a845-249e08d2ccb4";
                                kind = "recusandae";
                                matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                                value = "sapiente";
                            }}),
                        }};
                        dimensions = new org.openapis.openapi.models.shared.SortedDimension[]{{
                            add(new SortedDimension() {{
                                kind = "nihil";
                                name = "Kayla Robel";
                                sortOrder = SortedDimensionSortOrderEnum.DESCENDING;
                            }}),
                        }};
                        enableAllDimensionCombinations = false;
                        metricNames = new String[]{{
                            add("animi"),
                            add("cum"),
                            add("iure"),
                            add("reiciendis"),
                        }};
                        reachByFrequencyMetricNames = new String[]{{
                            add("aspernatur"),
                            add("ipsa"),
                            add("voluptatem"),
                        }};
                    }};;
                    schedule = new ReportSchedule() {{
                        active = false;
                        every = 23181;
                        expirationDate = LocalDate.parse("2021-06-29");
                        repeats = "dignissimos";
                        repeatsOnWeekDays = new org.openapis.openapi.models.shared.ReportScheduleRepeatsOnWeekDaysEnum[]{{
                            add(ReportScheduleRepeatsOnWeekDaysEnum.MONDAY),
                        }};
                        runsOnDayOfMonth = ReportScheduleRunsOnDayOfMonthEnum.WEEK_OF_MONTH;
                        startDate = LocalDate.parse("2022-08-10");
                    }};;
                    subAccountId = "ad";
                    type = ReportTypeEnum.PATH_ATTRIBUTION;
                }};;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "blanditiis";
                key = "eaque";
                oauthToken = "tempora";
                prettyPrint = false;
                quotaUser = "impedit";
                uploadType = "architecto";
                uploadProtocol = "consequatur";
            }};            

            DfareportingReportsUpdateResponse res = sdk.reports.dfareportingReportsUpdate(req, new DfareportingReportsUpdateSecurity("atque", "sunt") {{
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
