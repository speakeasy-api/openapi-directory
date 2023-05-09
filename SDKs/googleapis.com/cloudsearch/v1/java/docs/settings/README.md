# settings

### Available Operations

* [cloudsearchSettingsDatasourcesCreate](#cloudsearchsettingsdatasourcescreate) - Creates a datasource. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsDatasourcesList](#cloudsearchsettingsdatasourceslist) - Lists datasources. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsGetCustomer](#cloudsearchsettingsgetcustomer) - Get customer settings. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsCreate](#cloudsearchsettingssearchapplicationscreate) - Creates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsDelete](#cloudsearchsettingssearchapplicationsdelete) - Deletes a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsGet](#cloudsearchsettingssearchapplicationsget) - Gets the specified search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsList](#cloudsearchsettingssearchapplicationslist) - Lists all search applications. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsPatch](#cloudsearchsettingssearchapplicationspatch) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsReset](#cloudsearchsettingssearchapplicationsreset) - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsSearchapplicationsUpdate](#cloudsearchsettingssearchapplicationsupdate) - Updates a search application. **Note:** This API requires an admin account to execute.
* [cloudsearchSettingsUpdateCustomer](#cloudsearchsettingsupdatecustomer) - Update customer settings. **Note:** This API requires an admin account to execute.

## cloudsearchSettingsDatasourcesCreate

Creates a datasource. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DataSource;
import org.openapis.openapi.models.shared.GSuitePrincipal;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsDatasourcesCreateRequest req = new CloudsearchSettingsDatasourcesCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                dataSource = new DataSource() {{
                    disableModifications = false;
                    disableServing = false;
                    displayName = "voluptatibus";
                    indexingServiceAccounts = new String[]{{
                        add("officiis"),
                        add("sapiente"),
                        add("cumque"),
                    }};
                    itemsVisibility = new org.openapis.openapi.models.shared.GSuitePrincipal[]{{
                        add(new GSuitePrincipal() {{
                            gsuiteDomain = false;
                            gsuiteGroupEmail = "rerum";
                            gsuiteUserEmail = "tempora";
                        }}),
                    }};
                    name = "Carolyn Corkery Jr.";
                    operationIds = new String[]{{
                        add("aspernatur"),
                    }};
                    returnThumbnailUrls = false;
                    shortName = "eum";
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "at";
                fields = "impedit";
                key = "eos";
                oauthToken = "sapiente";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dicta";
                uploadProtocol = "minima";
            }};            

            CloudsearchSettingsDatasourcesCreateResponse res = sdk.settings.cloudsearchSettingsDatasourcesCreate(req, new CloudsearchSettingsDatasourcesCreateSecurity() {{
                option1 = new CloudsearchSettingsDatasourcesCreateSecurityOption1("beatae", "cupiditate") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsDatasourcesList

Lists datasources. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsDatasourcesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsDatasourcesListRequest req = new CloudsearchSettingsDatasourcesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "earum";
                alt = AltEnum.PROTO;
                callback = "hic";
                debugOptionsEnableDebugging = false;
                fields = "illum";
                key = "eaque";
                oauthToken = "earum";
                pageSize = 596211L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "aliquid";
                uploadProtocol = "porro";
            }};            

            CloudsearchSettingsDatasourcesListResponse res = sdk.settings.cloudsearchSettingsDatasourcesList(req, new CloudsearchSettingsDatasourcesListSecurity() {{
                option1 = new CloudsearchSettingsDatasourcesListSecurityOption1("suscipit", "dolorem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listDataSourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsGetCustomer

Get customer settings. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsGetCustomerSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsGetCustomerRequest req = new CloudsearchSettingsGetCustomerRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ratione";
                fields = "animi";
                key = "necessitatibus";
                oauthToken = "nulla";
                prettyPrint = false;
                quotaUser = "consequatur";
                uploadType = "quasi";
                uploadProtocol = "et";
            }};            

            CloudsearchSettingsGetCustomerResponse res = sdk.settings.cloudsearchSettingsGetCustomer(req, new CloudsearchSettingsGetCustomerSecurity() {{
                option1 = new CloudsearchSettingsGetCustomerSecurityOption1("ducimus", "natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.customerSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsCreate

Creates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsCreateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterLogicOperatorEnum;
import org.openapis.openapi.models.shared.DataSourceRestriction;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.FacetOptions;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOptions;
import org.openapis.openapi.models.shared.IntegerFacetingOptions;
import org.openapis.openapi.models.shared.QueryInterpretationConfig;
import org.openapis.openapi.models.shared.ScoringConfig;
import org.openapis.openapi.models.shared.SearchApplicationInput;
import org.openapis.openapi.models.shared.SortOptions;
import org.openapis.openapi.models.shared.SortOptionsSortOrderEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.SourceCrowdingConfig;
import org.openapis.openapi.models.shared.SourcePredefinedSourceEnum;
import org.openapis.openapi.models.shared.SourceScoringConfig;
import org.openapis.openapi.models.shared.SourceScoringConfigSourceImportanceEnum;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsCreateRequest req = new CloudsearchSettingsSearchapplicationsCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                searchApplicationInput = new SearchApplicationInput() {{
                    dataSourceRestrictions = new org.openapis.openapi.models.shared.DataSourceRestriction[]{{
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "doloribus";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 859581;
                                                    month = 896582;
                                                    year = 58534;
                                                }};
                                                doubleValue = 2711.13;
                                                integerValue = "nihil";
                                                stringValue = "molestiae";
                                                timestampValue = "dicta";
                                            }};
                                        }};
                                    }};
                                    objectType = "iusto";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Irma Wuckert";
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
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "odio";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 271252;
                                                    month = 458259;
                                                    year = 403793;
                                                }};
                                                doubleValue = 2352.63;
                                                integerValue = "aliquid";
                                                stringValue = "ipsa";
                                                timestampValue = "laborum";
                                            }};
                                        }};
                                    }};
                                    objectType = "sunt";
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
                                            operatorName = "expedita";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 399667;
                                                    month = 639187;
                                                    year = 381397;
                                                }};
                                                doubleValue = 3991.61;
                                                integerValue = "perferendis";
                                                stringValue = "eum";
                                                timestampValue = "voluptas";
                                            }};
                                        }};
                                    }};
                                    objectType = "iste";
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
                                            operatorName = "error";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 822407;
                                                    month = 913992;
                                                    year = 653421;
                                                }};
                                                doubleValue = 6717.94;
                                                integerValue = "libero";
                                                stringValue = "ad";
                                                timestampValue = "deleniti";
                                            }};
                                        }};
                                    }};
                                    objectType = "enim";
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
                                            operatorName = "ex";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 775803;
                                                    month = 405373;
                                                    year = 281153;
                                                }};
                                                doubleValue = 3210.43;
                                                integerValue = "expedita";
                                                stringValue = "voluptatem";
                                                timestampValue = "molestias";
                                            }};
                                        }};
                                    }};
                                    objectType = "cum";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Doris Lemke MD";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_SITES;
                            }};
                        }}),
                    }};
                    defaultFacetOptions = new org.openapis.openapi.models.shared.FacetOptions[]{{
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("sapiente"),
                                }};
                            }};
                            numFacetBuckets = 889288;
                            objectType = "architecto";
                            operatorName = "fuga";
                            sourceName = "pariatur";
                        }}),
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("voluptatem"),
                                    add("alias"),
                                    add("deleniti"),
                                    add("earum"),
                                }};
                            }};
                            numFacetBuckets = 404244;
                            objectType = "sapiente";
                            operatorName = "rem";
                            sourceName = "minus";
                        }}),
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("asperiores"),
                                    add("ratione"),
                                }};
                            }};
                            numFacetBuckets = 355225;
                            objectType = "perferendis";
                            operatorName = "illum";
                            sourceName = "totam";
                        }}),
                    }};
                    defaultSortOptions = new SortOptions() {{
                        operatorName = "impedit";
                        sortOrder = SortOptionsSortOrderEnum.DESCENDING;
                    }};;
                    displayName = "nam";
                    enableAuditLog = false;
                    name = "Molly Fadel IV";
                    queryInterpretationConfig = new QueryInterpretationConfig() {{
                        forceDisableSupplementalResults = false;
                        forceVerbatimMode = false;
                    }};;
                    returnResultThumbnailUrls = false;
                    scoringConfig = new ScoringConfig() {{
                        disableFreshness = false;
                        disablePersonalization = false;
                    }};;
                    sourceConfig = new org.openapis.openapi.models.shared.SourceConfig[]{{
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 274575;
                                numSuggestions = 221396;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.DEFAULT_;
                            }};
                            source = new Source() {{
                                name = "Karen Gleason IV";
                                predefinedSource = SourcePredefinedSourceEnum.NONE;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "ipsam";
                fields = "consequuntur";
                key = "ipsa";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "eveniet";
                uploadType = "impedit";
                uploadProtocol = "officiis";
            }};            

            CloudsearchSettingsSearchapplicationsCreateResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsCreate(req, new CloudsearchSettingsSearchapplicationsCreateSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsCreateSecurityOption1("esse", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsDelete

Deletes a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsDeleteSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsDeleteRequest req = new CloudsearchSettingsSearchapplicationsDeleteRequest("sed") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nesciunt";
                alt = AltEnum.PROTO;
                callback = "eum";
                debugOptionsEnableDebugging = false;
                fields = "vel";
                key = "voluptatum";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "exercitationem";
                uploadType = "ab";
                uploadProtocol = "porro";
            }};            

            CloudsearchSettingsSearchapplicationsDeleteResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsDelete(req, new CloudsearchSettingsSearchapplicationsDeleteSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsDeleteSecurityOption1("autem", "nobis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsGet

Gets the specified search application. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsGetRequest req = new CloudsearchSettingsSearchapplicationsGetRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                debugOptionsEnableDebugging = false;
                fields = "necessitatibus";
                key = "quasi";
                oauthToken = "nisi";
                prettyPrint = false;
                quotaUser = "at";
                uploadType = "vero";
                uploadProtocol = "est";
            }};            

            CloudsearchSettingsSearchapplicationsGetResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsGet(req, new CloudsearchSettingsSearchapplicationsGetSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsGetSecurityOption1("harum", "sequi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchApplication != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsList

Lists all search applications. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsListRequest req = new CloudsearchSettingsSearchapplicationsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "repudiandae";
                alt = AltEnum.PROTO;
                callback = "occaecati";
                debugOptionsEnableDebugging = false;
                fields = "nemo";
                key = "voluptate";
                oauthToken = "blanditiis";
                pageSize = 642352L;
                pageToken = "voluptas";
                prettyPrint = false;
                quotaUser = "numquam";
                uploadType = "nemo";
                uploadProtocol = "quos";
            }};            

            CloudsearchSettingsSearchapplicationsListResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsList(req, new CloudsearchSettingsSearchapplicationsListSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsListSecurityOption1("eius", "aspernatur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listSearchApplicationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsPatch

Updates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsPatchSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterLogicOperatorEnum;
import org.openapis.openapi.models.shared.DataSourceRestriction;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.FacetOptions;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOptions;
import org.openapis.openapi.models.shared.IntegerFacetingOptions;
import org.openapis.openapi.models.shared.QueryInterpretationConfig;
import org.openapis.openapi.models.shared.ScoringConfig;
import org.openapis.openapi.models.shared.SearchApplicationInput;
import org.openapis.openapi.models.shared.SortOptions;
import org.openapis.openapi.models.shared.SortOptionsSortOrderEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.SourceCrowdingConfig;
import org.openapis.openapi.models.shared.SourcePredefinedSourceEnum;
import org.openapis.openapi.models.shared.SourceScoringConfig;
import org.openapis.openapi.models.shared.SourceScoringConfigSourceImportanceEnum;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsPatchRequest req = new CloudsearchSettingsSearchapplicationsPatchRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                searchApplicationInput = new SearchApplicationInput() {{
                    dataSourceRestrictions = new org.openapis.openapi.models.shared.DataSourceRestriction[]{{
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "rem";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 851854;
                                                    month = 117380;
                                                    year = 395544;
                                                }};
                                                doubleValue = 1598.45;
                                                integerValue = "consectetur";
                                                stringValue = "aperiam";
                                                timestampValue = "cupiditate";
                                            }};
                                        }};
                                    }};
                                    objectType = "reiciendis";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "omnis";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 178580;
                                                    month = 579011;
                                                    year = 612867;
                                                }};
                                                doubleValue = 1700.99;
                                                integerValue = "inventore";
                                                stringValue = "fuga";
                                                timestampValue = "accusamus";
                                            }};
                                        }};
                                    }};
                                    objectType = "voluptatibus";
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
                                            operatorName = "delectus";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 328379;
                                                    month = 507636;
                                                    year = 802692;
                                                }};
                                                doubleValue = 3004.03;
                                                integerValue = "temporibus";
                                                stringValue = "quos";
                                                timestampValue = "commodi";
                                            }};
                                        }};
                                    }};
                                    objectType = "itaque";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Deanna Wehner";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_CALENDAR;
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
                                            operatorName = "alias";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 93894;
                                                    month = 247685;
                                                    year = 978548;
                                                }};
                                                doubleValue = 3182.33;
                                                integerValue = "sint";
                                                stringValue = "nulla";
                                                timestampValue = "deserunt";
                                            }};
                                        }};
                                    }};
                                    objectType = "esse";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Melinda Orn";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_CALENDAR;
                            }};
                        }}),
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "asperiores";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 404306;
                                                    month = 376741;
                                                    year = 895346;
                                                }};
                                                doubleValue = 9661.48;
                                                integerValue = "quae";
                                                stringValue = "minus";
                                                timestampValue = "fuga";
                                            }};
                                        }};
                                    }};
                                    objectType = "laborum";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "atque";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 216457;
                                                    month = 773035;
                                                    year = 166047;
                                                }};
                                                doubleValue = 7465.85;
                                                integerValue = "repudiandae";
                                                stringValue = "nam";
                                                timestampValue = "dolore";
                                            }};
                                        }};
                                    }};
                                    objectType = "iusto";
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
                                            operatorName = "dignissimos";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 205566;
                                                    month = 778172;
                                                    year = 535468;
                                                }};
                                                doubleValue = 8442.35;
                                                integerValue = "iure";
                                                stringValue = "odit";
                                                timestampValue = "voluptatibus";
                                            }};
                                        }};
                                    }};
                                    objectType = "vel";
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
                                            operatorName = "inventore";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 818034;
                                                    month = 726878;
                                                    year = 102413;
                                                }};
                                                doubleValue = 9754.25;
                                                integerValue = "quia";
                                                stringValue = "porro";
                                                timestampValue = "aliquam";
                                            }};
                                        }};
                                    }};
                                    objectType = "velit";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Ruth Kassulke PhD";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_SITES;
                            }};
                        }}),
                    }};
                    defaultFacetOptions = new org.openapis.openapi.models.shared.FacetOptions[]{{
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("ut"),
                                }};
                            }};
                            numFacetBuckets = 596433;
                            objectType = "earum";
                            operatorName = "dicta";
                            sourceName = "impedit";
                        }}),
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("iste"),
                                    add("itaque"),
                                    add("alias"),
                                    add("nisi"),
                                }};
                            }};
                            numFacetBuckets = 931505;
                            objectType = "velit";
                            operatorName = "laborum";
                            sourceName = "non";
                        }}),
                    }};
                    defaultSortOptions = new SortOptions() {{
                        operatorName = "dolor";
                        sortOrder = SortOptionsSortOrderEnum.ASCENDING;
                    }};;
                    displayName = "sit";
                    enableAuditLog = false;
                    name = "Barbara Nikolaus";
                    queryInterpretationConfig = new QueryInterpretationConfig() {{
                        forceDisableSupplementalResults = false;
                        forceVerbatimMode = false;
                    }};;
                    returnResultThumbnailUrls = false;
                    scoringConfig = new ScoringConfig() {{
                        disableFreshness = false;
                        disablePersonalization = false;
                    }};;
                    sourceConfig = new org.openapis.openapi.models.shared.SourceConfig[]{{
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 377406;
                                numSuggestions = 705148;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.HIGH;
                            }};
                            source = new Source() {{
                                name = "Malcolm Lind";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_DRIVE;
                            }};
                        }}),
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 600193;
                                numSuggestions = 897543;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.LOW;
                            }};
                            source = new Source() {{
                                name = "Clyde Herzog";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_GMAIL;
                            }};
                        }}),
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 288570;
                                numSuggestions = 85066;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.HIGH;
                            }};
                            source = new Source() {{
                                name = "Evelyn Bode";
                                predefinedSource = SourcePredefinedSourceEnum.QUERY_HISTORY;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "iste";
                alt = AltEnum.MEDIA;
                callback = "nemo";
                fields = "soluta";
                key = "libero";
                oauthToken = "rem";
                prettyPrint = false;
                quotaUser = "dolorum";
                updateMask = "odio";
                uploadType = "fugit";
                uploadProtocol = "alias";
            }};            

            CloudsearchSettingsSearchapplicationsPatchResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsPatch(req, new CloudsearchSettingsSearchapplicationsPatchSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsPatchSecurityOption1("magni", "vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsReset

Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsResetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DebugOptions;
import org.openapis.openapi.models.shared.ResetSearchApplicationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsResetRequest req = new CloudsearchSettingsSearchapplicationsResetRequest("quae") {{
                dollarXgafv = XgafvEnum.ONE;
                resetSearchApplicationRequest = new ResetSearchApplicationRequest() {{
                    debugOptions = new DebugOptions() {{
                        enableDebugging = false;
                    }};;
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "exercitationem";
                fields = "itaque";
                key = "et";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "unde";
                uploadType = "nulla";
                uploadProtocol = "distinctio";
            }};            

            CloudsearchSettingsSearchapplicationsResetResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsReset(req, new CloudsearchSettingsSearchapplicationsResetSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsResetSecurityOption1("maxime", "quia") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsSearchapplicationsUpdate

Updates a search application. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsSearchapplicationsUpdateSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CompositeFilter;
import org.openapis.openapi.models.shared.CompositeFilterLogicOperatorEnum;
import org.openapis.openapi.models.shared.DataSourceRestriction;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.FacetOptions;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.FilterOptions;
import org.openapis.openapi.models.shared.IntegerFacetingOptions;
import org.openapis.openapi.models.shared.QueryInterpretationConfig;
import org.openapis.openapi.models.shared.ScoringConfig;
import org.openapis.openapi.models.shared.SearchApplicationInput;
import org.openapis.openapi.models.shared.SortOptions;
import org.openapis.openapi.models.shared.SortOptionsSortOrderEnum;
import org.openapis.openapi.models.shared.Source;
import org.openapis.openapi.models.shared.SourceConfig;
import org.openapis.openapi.models.shared.SourceCrowdingConfig;
import org.openapis.openapi.models.shared.SourcePredefinedSourceEnum;
import org.openapis.openapi.models.shared.SourceScoringConfig;
import org.openapis.openapi.models.shared.SourceScoringConfigSourceImportanceEnum;
import org.openapis.openapi.models.shared.Value;
import org.openapis.openapi.models.shared.ValueFilter;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsSearchapplicationsUpdateRequest req = new CloudsearchSettingsSearchapplicationsUpdateRequest("quia") {{
                dollarXgafv = XgafvEnum.ONE;
                searchApplicationInput = new SearchApplicationInput() {{
                    dataSourceRestrictions = new org.openapis.openapi.models.shared.DataSourceRestriction[]{{
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
                                            operatorName = "libero";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 854460;
                                                    month = 637462;
                                                    year = 554603;
                                                }};
                                                doubleValue = 8119.39;
                                                integerValue = "sit";
                                                stringValue = "iusto";
                                                timestampValue = "ipsa";
                                            }};
                                        }};
                                    }};
                                    objectType = "voluptates";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.AND;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "totam";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 292888;
                                                    month = 755106;
                                                    year = 715053;
                                                }};
                                                doubleValue = 322.73;
                                                integerValue = "autem";
                                                stringValue = "esse";
                                                timestampValue = "dolores";
                                            }};
                                        }};
                                    }};
                                    objectType = "assumenda";
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
                                            operatorName = "facere";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 545918;
                                                    month = 473143;
                                                    year = 588812;
                                                }};
                                                doubleValue = 8822.84;
                                                integerValue = "necessitatibus";
                                                stringValue = "tempore";
                                                timestampValue = "sint";
                                            }};
                                        }};
                                    }};
                                    objectType = "ea";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Brittany Prosacco";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_KEEP;
                            }};
                        }}),
                        add(new DataSourceRestriction() {{
                            filterOptions = new org.openapis.openapi.models.shared.FilterOptions[]{{
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "alias";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 156653;
                                                    month = 694158;
                                                    year = 684126;
                                                }};
                                                doubleValue = 9195.08;
                                                integerValue = "accusantium";
                                                stringValue = "expedita";
                                                timestampValue = "officiis";
                                            }};
                                        }};
                                    }};
                                    objectType = "eos";
                                }}),
                                add(new FilterOptions() {{
                                    filter = new Filter() {{
                                        compositeFilter = new CompositeFilter() {{
                                            logicOperator = CompositeFilterLogicOperatorEnum.NOT;
                                            subFilters = new org.openapis.openapi.models.shared.Filter[]{{
                                                add(new Filter() {{}}),
                                                add(new Filter() {{}}),
                                            }};
                                        }};
                                        valueFilter = new ValueFilter() {{
                                            operatorName = "praesentium";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 140316;
                                                    month = 127688;
                                                    year = 358995;
                                                }};
                                                doubleValue = 6214.73;
                                                integerValue = "earum";
                                                stringValue = "adipisci";
                                                timestampValue = "recusandae";
                                            }};
                                        }};
                                    }};
                                    objectType = "similique";
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
                                            operatorName = "quis";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 106255;
                                                    month = 600213;
                                                    year = 476946;
                                                }};
                                                doubleValue = 9631.98;
                                                integerValue = "cupiditate";
                                                stringValue = "fugit";
                                                timestampValue = "numquam";
                                            }};
                                        }};
                                    }};
                                    objectType = "numquam";
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
                                            operatorName = "officia";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 491892;
                                                    month = 760744;
                                                    year = 898961;
                                                }};
                                                doubleValue = 3591.11;
                                                integerValue = "qui";
                                                stringValue = "expedita";
                                                timestampValue = "voluptatum";
                                            }};
                                        }};
                                    }};
                                    objectType = "cupiditate";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Nichole Halvorson";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_CALENDAR;
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
                                            operatorName = "magnam";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 914971;
                                                    month = 978173;
                                                    year = 731744;
                                                }};
                                                doubleValue = 460.13;
                                                integerValue = "libero";
                                                stringValue = "ratione";
                                                timestampValue = "labore";
                                            }};
                                        }};
                                    }};
                                    objectType = "totam";
                                }}),
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
                                            operatorName = "quo";
                                            value = new Value() {{
                                                booleanValue = false;
                                                dateValue = new Date() {{
                                                    day = 242099;
                                                    month = 795591;
                                                    year = 684553;
                                                }};
                                                doubleValue = 3445.3;
                                                integerValue = "est";
                                                stringValue = "impedit";
                                                timestampValue = "delectus";
                                            }};
                                        }};
                                    }};
                                    objectType = "tempore";
                                }}),
                            }};
                            source = new Source() {{
                                name = "Fred Zieme";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_DRIVE;
                            }};
                        }}),
                    }};
                    defaultFacetOptions = new org.openapis.openapi.models.shared.FacetOptions[]{{
                        add(new FacetOptions() {{
                            integerFacetingOptions = new IntegerFacetingOptions() {{
                                integerBuckets = new String[]{{
                                    add("minima"),
                                    add("in"),
                                }};
                            }};
                            numFacetBuckets = 496915;
                            objectType = "excepturi";
                            operatorName = "dolores";
                            sourceName = "error";
                        }}),
                    }};
                    defaultSortOptions = new SortOptions() {{
                        operatorName = "veritatis";
                        sortOrder = SortOptionsSortOrderEnum.ASCENDING;
                    }};;
                    displayName = "voluptate";
                    enableAuditLog = false;
                    name = "Bradford Murazik";
                    queryInterpretationConfig = new QueryInterpretationConfig() {{
                        forceDisableSupplementalResults = false;
                        forceVerbatimMode = false;
                    }};;
                    returnResultThumbnailUrls = false;
                    scoringConfig = new ScoringConfig() {{
                        disableFreshness = false;
                        disablePersonalization = false;
                    }};;
                    sourceConfig = new org.openapis.openapi.models.shared.SourceConfig[]{{
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 416692;
                                numSuggestions = 888616;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.HIGH;
                            }};
                            source = new Source() {{
                                name = "Jorge Kohler";
                                predefinedSource = SourcePredefinedSourceEnum.NONE;
                            }};
                        }}),
                        add(new SourceConfig() {{
                            crowdingConfig = new SourceCrowdingConfig() {{
                                numResults = 575534;
                                numSuggestions = 876027;
                            }};
                            scoringConfig = new SourceScoringConfig() {{
                                sourceImportance = SourceScoringConfigSourceImportanceEnum.DEFAULT_;
                            }};
                            source = new Source() {{
                                name = "Bennie Carter";
                                predefinedSource = SourcePredefinedSourceEnum.GOOGLE_SITES;
                            }};
                        }}),
                    }};
                }};;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "dicta";
                fields = "consequuntur";
                key = "necessitatibus";
                oauthToken = "nobis";
                prettyPrint = false;
                quotaUser = "ipsa";
                updateMask = "ducimus";
                uploadType = "maiores";
                uploadProtocol = "veritatis";
            }};            

            CloudsearchSettingsSearchapplicationsUpdateResponse res = sdk.settings.cloudsearchSettingsSearchapplicationsUpdate(req, new CloudsearchSettingsSearchapplicationsUpdateSecurity() {{
                option1 = new CloudsearchSettingsSearchapplicationsUpdateSecurityOption1("quasi", "laboriosam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloudsearchSettingsUpdateCustomer

Update customer settings. **Note:** This API requires an admin account to execute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerRequest;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerResponse;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerSecurity;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerSecurityOption1;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerSecurityOption2;
import org.openapis.openapi.models.operations.CloudsearchSettingsUpdateCustomerSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditLoggingSettings;
import org.openapis.openapi.models.shared.CustomerSettings;
import org.openapis.openapi.models.shared.VPCSettings;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudsearchSettingsUpdateCustomerRequest req = new CloudsearchSettingsUpdateCustomerRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                customerSettings = new CustomerSettings() {{
                    auditLoggingSettings = new AuditLoggingSettings() {{
                        logAdminReadActions = false;
                        logDataReadActions = false;
                        logDataWriteActions = false;
                        project = "libero";
                    }};;
                    vpcSettings = new VPCSettings() {{
                        project = "excepturi";
                    }};;
                }};;
                accessToken = "occaecati";
                alt = AltEnum.MEDIA;
                callback = "aliquam";
                fields = "nostrum";
                key = "doloribus";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                updateMask = "enim";
                uploadType = "hic";
                uploadProtocol = "animi";
            }};            

            CloudsearchSettingsUpdateCustomerResponse res = sdk.settings.cloudsearchSettingsUpdateCustomer(req, new CloudsearchSettingsUpdateCustomerSecurity() {{
                option1 = new CloudsearchSettingsUpdateCustomerSecurityOption1("quas", "totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
