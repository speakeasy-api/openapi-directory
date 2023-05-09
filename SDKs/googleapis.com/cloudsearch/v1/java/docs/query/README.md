# query

### Available Operations

* [cloudsearchQuerySearch](#cloudsearchquerysearch) - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySourcesList](#cloudsearchquerysourceslist) - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* [cloudsearchQuerySuggest](#cloudsearchquerysuggest) - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

## cloudsearchQuerySearch

The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchQuerySearchRequest;
import org.openapis.openapi.models.operations.CloudsearchQuerySearchResponse;
import org.openapis.openapi.models.operations.CloudsearchQuerySearchSecurity;
import org.openapis.openapi.models.operations.CloudsearchQuerySearchSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchQuerySearchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterLogicOperatorEnum;
import org.openapis.openapi.models.shared.ContextAttribute;
import org.openapis.openapi.models.shared.DataSourceRestriction;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.FacetOptions;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOptions;
import org.openapis.openapi.models.shared.IntegerFacetingOptions;
import org.openapis.openapi.models.shared.QueryInterpretationOptions;
import org.openapis.openapi.models.shared.RequestOptions;
import org.openapis.openapi.models.shared.SearchRequest;
import org.openapis.openapi.models.shared.SortOptions;
import org.openapis.openapi.models.shared.SortOptionsSortOrderEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourcePredefinedSourceEnum;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchQuerySearchRequest req = new CloudsearchQuerySearchRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                searchRequest = new SearchRequest() {{
                    contextAttributes = new org.openapis.openapi.models.shared.ContextAttribute[]{{
                        add(new ContextAttribute() {{
                            name = "Troy Cormier";
                            values = new String[]{{
                                add("ipsum"),
                                add("ea"),
                                add("occaecati"),
                                add("quos"),
                            }};
                        }}),
                        add(new ContextAttribute() {{
                            name = "Eddie Goodwin";
                            values = new String[]{{
                                add("sit"),
                                add("non"),
                            }};
                        }}),
                        add(new ContextAttribute() {{
                            name = "Clayton Quitzon";
                            values = new String[]{{
                                add("debitis"),
                                add("rem"),
                            }};
                        }}),
                    }};
                    dataSourceRestrictions = new org.openapis.openapi.models.shared.DataSourceRestriction[]{{
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.OR;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "minima";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 924159;
                                                    month = 967122;
                                                    year = 862319;
                                                }};
                                                doubleValue = 1685.76;
                                                integerValue = "aperiam";
                                                stringValue = "saepe";
                                                timestampValue = "numquam";
                                            }};
                                        }};
                                    }};
                                    objectType = "veniam";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.OR;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "beatae";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 512452;
                                                    month = 348476;
                                                    year = 510629;
                                                }};
                                                doubleValue = 7400.98;
                                                integerValue = "laboriosam";
                                                stringValue = "dolorum";
                                                timestampValue = "voluptatum";
                                            }};
                                        }};
                                    }};
                                    objectType = "error";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "debitis";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 204923;
                                                    month = 677115;
                                                    year = 341698;
                                                }};
                                                doubleValue = 6390.28;
                                                integerValue = "dolorum";
                                                stringValue = "corrupti";
                                                timestampValue = "accusamus";
                                            }};
                                        }};
                                    }};
                                    objectType = "tempora";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.OR;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "ut";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 856303;
                                                    month = 30235;
                                                    year = 635057;
                                                }};
                                                doubleValue = 7103.37;
                                                integerValue = "magnam";
                                                stringValue = "consequatur";
                                                timestampValue = "esse";
                                            }};
                                        }};
                                    }};
                                    objectType = "ipsam";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Nora Lynch";
                                predefinedSource = SourcePredefinedSourceEnum.NONE;
                            }};
                        }}),
                    }};
                    facetOptions = new org.openapis.openapi.models.shared.FacetOptions[]{{
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("sed"),
                                    add("sit"),
                                }};
                            }};
                            numFacetBuckets = 425508;
                            objectType = "nostrum";
                            operatorName = "saepe";
                            sourceName = "error";
                        }}),
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("incidunt"),
                                }};
                            }};
                            numFacetBuckets = 968865;
                            objectType = "dolorem";
                            operatorName = "harum";
                            sourceName = "dicta";
                        }}),
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("occaecati"),
                                }};
                            }};
                            numFacetBuckets = 289776;
                            objectType = "quidem";
                            operatorName = "atque";
                            sourceName = "laborum";
                        }}),
                    }};
                    pageSize = 724148;
                    query = "tenetur";
                    queryInterpretationOptions = new QueryInterpretationOptions() {{
                        disableNlInterpretation = false;
                        disableSupplementalResults = false;
                        enableVerbatimMode = false;
                    }};;
                    requestOptions = new RequestOptions() {{
                        debugOptions = new DebugOptions() {{
                            enableDebugging = false;
                        }};;
                        languageCode = "laboriosam";
                        searchApplicationId = "alias";
                        timeZone = "amet";
                    }};;
                    sortOptions = new SortOptions() {{
                        operatorName = "deserunt";
                        sortOrder = SortOptionsSortOrderEnum.ASCENDING;
                    }};;
                    start = 600392;
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "delectus";
                key = "voluptates";
                oauthToken = "perferendis";
                prettyPrint = false;
                quotaUser = "est";
                uploadType = "quidem";
                uploadProtocol = "reprehenderit";
            }};            

            CloudsearchQuerySearchResponse res = sdk.query.cloudsearchQuerySearch(req, new CloudsearchQuerySearchSecurity() {{
                option1 = new CloudsearchQuerySearchSecurityOption1("facere", "fuga") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchQuerySourcesList

Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchQuerySourcesListRequest;
import org.openapis.openapi.models.operations.CloudsearchQuerySourcesListResponse;
import org.openapis.openapi.models.operations.CloudsearchQuerySourcesListSecurity;
import org.openapis.openapi.models.operations.CloudsearchQuerySourcesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchQuerySourcesListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchQuerySourcesListRequest req = new CloudsearchQuerySourcesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "quisquam";
                key = "repudiandae";
                oauthToken = "quasi";
                pageToken = "atque";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestOptionsDebugOptionsEnableDebugging = false;
                requestOptionsLanguageCode = "asperiores";
                requestOptionsSearchApplicationId = "totam";
                requestOptionsTimeZone = "suscipit";
                uploadType = "quidem";
                uploadProtocol = "maxime";
            }};            

            CloudsearchQuerySourcesListResponse res = sdk.query.cloudsearchQuerySourcesList(req, new CloudsearchQuerySourcesListSecurity() {{
                option1 = new CloudsearchQuerySourcesListSecurityOption1("et", "esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listQuerySourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchQuerySuggest

Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchQuerySuggestRequest;
import org.openapis.openapi.models.operations.CloudsearchQuerySuggestResponse;
import org.openapis.openapi.models.operations.CloudsearchQuerySuggestSecurity;
import org.openapis.openapi.models.operations.CloudsearchQuerySuggestSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchQuerySuggestSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterLogicOperatorEnum;
import org.openapis.openapi.models.shared.DataSourceRestriction;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOptions;
import org.openapis.openapi.models.shared.RequestOptions;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourcePredefinedSourceEnum;
import org.openapis.openapi.models.shared.SuggestRequest;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchQuerySuggestRequest req = new CloudsearchQuerySuggestRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                suggestRequest = new SuggestRequest() {{
                    dataSourceRestrictions = new org.openapis.openapi.models.shared.DataSourceRestriction[]{{
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.OR;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "officiis";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 886961;
                                                    month = 880107;
                                                    year = 618826;
                                                }};
                                                doubleValue = 3283.03;
                                                integerValue = "aspernatur";
                                                stringValue = "ex";
                                                timestampValue = "maiores";
                                            }};
                                        }};
                                    }};
                                    objectType = "corrupti";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "blanditiis";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 379356;
                                                    month = 922348;
                                                    year = 542129;
                                                }};
                                                doubleValue = 5413.81;
                                                integerValue = "sunt";
                                                stringValue = "recusandae";
                                                timestampValue = "dolorum";
                                            }};
                                        }};
                                    }};
                                    objectType = "repellendus";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Lela Baumbach Jr.";
                                predefinedSource = SourcePredefinedSourceEnum.NONE;
                            }};
                        }}),
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "velit";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 952143;
                                                    month = 562783;
                                                    year = 300029;
                                                }};
                                                doubleValue = 9063.55;
                                                integerValue = "consequuntur";
                                                stringValue = "occaecati";
                                                timestampValue = "officiis";
                                            }};
                                        }};
                                    }};
                                    objectType = "perspiciatis";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Sylvia Upton";
                                predefinedSource = SourcePredefinedSourceEnum.QUERY_HISTORY;
                            }};
                        }}),
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.OR;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "error";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 76486;
                                                    month = 361306;
                                                    year = 696463;
                                                }};
                                                doubleValue = 9109.94;
                                                integerValue = "non";
                                                stringValue = "vero";
                                                timestampValue = "doloremque";
                                            }};
                                        }};
                                    }};
                                    objectType = "iure";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "quae";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 474668;
                                                    month = 907733;
                                                    year = 184362;
                                                }};
                                                doubleValue = 7398.84;
                                                integerValue = "iure";
                                                stringValue = "necessitatibus";
                                                timestampValue = "ratione";
                                            }};
                                        }};
                                    }};
                                    objectType = "laborum";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "rem";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 304446;
                                                    month = 320565;
                                                    year = 997963;
                                                }};
                                                doubleValue = 30.99;
                                                integerValue = "corporis";
                                                stringValue = "perspiciatis";
                                                timestampValue = "nihil";
                                            }};
                                        }};
                                    }};
                                    objectType = "mollitia";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Linda Wuckert";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_SITES;
                            }};
                        }}),
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "nesciunt";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 63207;
                                                    month = 925703;
                                                    year = 607249;
                                                }};
                                                doubleValue = 3092.51;
                                                integerValue = "molestiae";
                                                stringValue = "ex";
                                                timestampValue = "ut";
                                            }};
                                        }};
                                    }};
                                    objectType = "culpa";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "laudantium";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 432606;
                                                    month = 367927;
                                                    year = 928219;
                                                }};
                                                doubleValue = 4565.2;
                                                integerValue = "provident";
                                                stringValue = "quis";
                                                timestampValue = "eum";
                                            }};
                                        }};
                                    }};
                                    objectType = "reiciendis";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Miss Bruce Hermann";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_SITES;
                            }};
                        }}),
                    }};
                    query = "provident";
                    requestOptions = new RequestOptions() {{
                        debugOptions = new DebugOptions() {{
                            enableDebugging = false;
                        }};;
                        languageCode = "possimus";
                        searchApplicationId = "animi";
                        timeZone = "ex";
                    }};;
                }};;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "repellat";
                fields = "doloribus";
                key = "ullam";
                oauthToken = "in";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "earum";
                uploadProtocol = "officia";
            }};            

            CloudsearchQuerySuggestResponse res = sdk.query.cloudsearchQuerySuggest(req, new CloudsearchQuerySuggestSecurity() {{
                option1 = new CloudsearchQuerySuggestSecurityOption1("laborum", "placeat") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.suggestResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
