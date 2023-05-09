# targetingTemplates

### Available Operations

* [dfareportingTargetingTemplatesGet](#dfareportingtargetingtemplatesget) - Gets one targeting template by ID.
* [dfareportingTargetingTemplatesInsert](#dfareportingtargetingtemplatesinsert) - Inserts a new targeting template.
* [dfareportingTargetingTemplatesList](#dfareportingtargetingtemplateslist) - Retrieves a list of targeting templates, optionally filtered. This method supports paging.
* [dfareportingTargetingTemplatesPatch](#dfareportingtargetingtemplatespatch) - Updates an existing targeting template. This method supports patch semantics.
* [dfareportingTargetingTemplatesUpdate](#dfareportingtargetingtemplatesupdate) - Updates an existing targeting template.

## dfareportingTargetingTemplatesGet

Gets one targeting template by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesGetRequest;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesGetResponse;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetingTemplatesGetRequest req = new DfareportingTargetingTemplatesGetRequest("sit", "eligendi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "officia";
                fields = "corrupti";
                key = "quas";
                oauthToken = "porro";
                prettyPrint = false;
                quotaUser = "quos";
                uploadType = "molestiae";
                uploadProtocol = "sequi";
            }};            

            DfareportingTargetingTemplatesGetResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesGet(req, new DfareportingTargetingTemplatesGetSecurity("dolore", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingTargetingTemplatesInsert

Inserts a new targeting template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesInsertRequest;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesInsertResponse;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesInsertSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.TargetingTemplate;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetingTemplatesInsertRequest req = new DfareportingTargetingTemplatesInsertRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "recusandae";
                    advertiserId = "debitis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "distinctio";
                        etag = "aperiam";
                        id = "090092c2-28ef-4e9c-ba35-316f54f2cff9";
                        kind = "iure";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "voluptatem";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(607768),
                            add(69948),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "MF";
                                countryDartId = "atque";
                                dartId = "nobis";
                                kind = "voluptatum";
                                metroCode = "quos";
                                metroDmaId = "quae";
                                name = "Ruby Runolfsson";
                                regionCode = "doloremque";
                                regionDartId = "corporis";
                            }}),
                            add(new City() {{
                                countryCode = "SK";
                                countryDartId = "harum";
                                dartId = "nisi";
                                kind = "optio";
                                metroCode = "illo";
                                metroDmaId = "amet";
                                name = "Brandon Bernhard";
                                regionCode = "blanditiis";
                                regionDartId = "cumque";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "US";
                                dartId = "laboriosam";
                                kind = "accusantium";
                                name = "Frank Nicolas";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "IN";
                                dartId = "ipsum";
                                kind = "delectus";
                                name = "Arnold Cummerata";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "GQ";
                                dartId = "harum";
                                kind = "qui";
                                name = "Maryann Schinner";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "MG";
                                dartId = "temporibus";
                                kind = "maxime";
                                name = "Samantha MacGyver";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "DK";
                                countryDartId = "ab";
                                dartId = "libero";
                                dmaId = "harum";
                                kind = "quidem";
                                metroCode = "reprehenderit";
                                name = "Wade Lueilwitz";
                            }}),
                            add(new Metro() {{
                                countryCode = "EH";
                                countryDartId = "enim";
                                dartId = "laborum";
                                dmaId = "eum";
                                kind = "quas";
                                metroCode = "provident";
                                name = "Alexander Weber";
                            }}),
                            add(new Metro() {{
                                countryCode = "PR";
                                countryDartId = "ab";
                                dartId = "iure";
                                dmaId = "nostrum";
                                kind = "dolor";
                                metroCode = "consequatur";
                                name = "Elena Stehr";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "facilis";
                                countryCode = "SG";
                                countryDartId = "nesciunt";
                                id = "a2939b6e-2fae-40d3-80f7-05b6b971f4a3";
                                kind = "odio";
                            }}),
                            add(new PostalCode() {{
                                code = "officiis";
                                countryCode = "LU";
                                countryDartId = "cum";
                                id = "e28d97dc-9be5-4496-91e4-19db62214727";
                                kind = "et";
                            }}),
                            add(new PostalCode() {{
                                code = "quam";
                                countryCode = "EH";
                                countryDartId = "voluptas";
                                id = "70baf235-1d6e-4b1d-b3e5-4115e5681b27";
                                kind = "impedit";
                            }}),
                            add(new PostalCode() {{
                                code = "alias";
                                countryCode = "LI";
                                countryDartId = "cum";
                                id = "b3aa9e36-804e-4148-b35f-dea2452027c1";
                                kind = "architecto";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "BZ";
                                countryDartId = "omnis";
                                dartId = "provident";
                                kind = "ad";
                                name = "Melanie Becker";
                                regionCode = "id";
                            }}),
                            add(new Region() {{
                                countryCode = "FM";
                                countryDartId = "ad";
                                dartId = "ex";
                                kind = "officiis";
                                name = "Miss Lionel Rosenbaum IV";
                                regionCode = "possimus";
                            }}),
                            add(new Region() {{
                                countryCode = "BA";
                                countryDartId = "nemo";
                                dartId = "voluptate";
                                kind = "aut";
                                name = "Ann Sipes";
                                regionCode = "facere";
                            }}),
                            add(new Region() {{
                                countryCode = "ID";
                                countryDartId = "tempore";
                                dartId = "ipsa";
                                kind = "nemo";
                                name = "Marjorie Oberbrunner";
                                regionCode = "magni";
                            }}),
                        }};
                    }};;
                    id = "possimus";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "vel";
                    }};;
                    kind = "aliquid";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "tenetur";
                                kind = "nihil";
                                languageCode = "assumenda";
                                name = "Adrienne Langosh";
                            }}),
                            add(new Language() {{
                                id = "adipisci";
                                kind = "iusto";
                                languageCode = "exercitationem";
                                name = "Ms. Alan Huel DDS";
                            }}),
                            add(new Language() {{
                                id = "commodi";
                                kind = "corrupti";
                                languageCode = "accusantium";
                                name = "Bonnie Kovacek";
                            }}),
                            add(new Language() {{
                                id = "ducimus";
                                kind = "amet";
                                languageCode = "architecto";
                                name = "Gretchen Hackett IV";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "natus";
                    }};;
                    name = "Mr. Orlando Yundt";
                    subaccountId = "rerum";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "inventore";
                                dartId = "ut";
                                kind = "occaecati";
                                majorVersion = "perferendis";
                                minorVersion = "impedit";
                                name = "Alvin Hartmann";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "ad";
                                dartId = "delectus";
                                kind = "quaerat";
                                majorVersion = "iusto";
                                minorVersion = "veniam";
                                name = "Hubert McClure DVM";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "tempora";
                                dartId = "possimus";
                                kind = "dolores";
                                majorVersion = "occaecati";
                                minorVersion = "ad";
                                name = "Don Lueilwitz";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "vel";
                                kind = "illum";
                                name = "Cory Anderson";
                            }}),
                            add(new ConnectionType() {{
                                id = "beatae";
                                kind = "qui";
                                name = "Steve Mraz";
                            }}),
                            add(new ConnectionType() {{
                                id = "perferendis";
                                kind = "eos";
                                name = "Tricia Champlin";
                            }}),
                            add(new ConnectionType() {{
                                id = "aspernatur";
                                kind = "quibusdam";
                                name = "Alfonso Schaefer";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "ET";
                                countryDartId = "illum";
                                id = "veritatis";
                                kind = "ipsam";
                                name = "Kayla Mertz";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "HK";
                                countryDartId = "officiis";
                                id = "accusantium";
                                kind = "excepturi";
                                name = "Teresa Hoppe";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "AM";
                                countryDartId = "illo";
                                id = "optio";
                                kind = "doloribus";
                                name = "Maryann Pfeffer";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "magnam";
                                kind = "id";
                                majorVersion = "quos";
                                minorVersion = "ratione";
                                name = "Ms. Marianne Ratke";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "aliquam";
                                    desktop = false;
                                    kind = "magnam";
                                    mobile = false;
                                    name = "Edmund Champlin";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "iusto";
                                desktop = false;
                                kind = "temporibus";
                                mobile = false;
                                name = "Randy Block";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "doloremque";
                                kind = "laborum";
                                name = "Alison Krajcik";
                            }}),
                            add(new PlatformType() {{
                                id = "quaerat";
                                kind = "labore";
                                name = "Lila Moore";
                            }}),
                            add(new PlatformType() {{
                                id = "accusantium";
                                kind = "iure";
                                name = "Rogelio Dibbert";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "praesentium";
                alt = AltEnum.MEDIA;
                callback = "enim";
                fields = "consequatur";
                key = "tempore";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "illum";
                uploadType = "praesentium";
                uploadProtocol = "quaerat";
            }};            

            DfareportingTargetingTemplatesInsertResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesInsert(req, new DfareportingTargetingTemplatesInsertSecurity("quisquam", "recusandae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingTargetingTemplatesList

Retrieves a list of targeting templates, optionally filtered. This method supports paging.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesListRequest;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesListResponse;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesListSecurity;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesListSortFieldEnum;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesListSortOrderEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetingTemplatesListRequest req = new DfareportingTargetingTemplatesListRequest("in") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "illum";
                advertiserId = "ad";
                alt = AltEnum.PROTO;
                callback = "iste";
                fields = "deleniti";
                ids = new String[]{{
                    add("quidem"),
                }};
                key = "eveniet";
                maxResults = 360924L;
                oauthToken = "minus";
                pageToken = "assumenda";
                prettyPrint = false;
                quotaUser = "sunt";
                searchString = "consectetur";
                sortField = DfareportingTargetingTemplatesListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetingTemplatesListSortOrderEnum.DESCENDING;
                uploadType = "vero";
                uploadProtocol = "veniam";
            }};            

            DfareportingTargetingTemplatesListResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesList(req, new DfareportingTargetingTemplatesListSecurity("similique", "rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingTemplatesListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingTargetingTemplatesPatch

Updates an existing targeting template. This method supports patch semantics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesPatchRequest;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesPatchResponse;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.TargetingTemplate;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetingTemplatesPatchRequest req = new DfareportingTargetingTemplatesPatchRequest("earum", "nesciunt") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "veritatis";
                    advertiserId = "harum";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "dolorem";
                        etag = "accusamus";
                        id = "f4f4017c-ae1b-45d4-9874-b66440fd6ddf";
                        kind = "unde";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "exercitationem";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                            add(DayPartTargetingDaysOfWeekEnum.SATURDAY),
                            add(DayPartTargetingDaysOfWeekEnum.SUNDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(305831),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "AT";
                                countryDartId = "quae";
                                dartId = "provident";
                                kind = "numquam";
                                metroCode = "eaque";
                                metroDmaId = "aspernatur";
                                name = "Bernice Witting";
                                regionCode = "voluptas";
                                regionDartId = "porro";
                            }}),
                            add(new City() {{
                                countryCode = "KE";
                                countryDartId = "aut";
                                dartId = "molestiae";
                                kind = "iure";
                                metroCode = "unde";
                                metroDmaId = "autem";
                                name = "Francis Boehm";
                                regionCode = "aliquid";
                                regionDartId = "labore";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "RS";
                                dartId = "ullam";
                                kind = "deleniti";
                                name = "Dr. Candace Tremblay";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "SX";
                                countryDartId = "ad";
                                dartId = "optio";
                                dmaId = "ipsam";
                                kind = "corrupti";
                                metroCode = "distinctio";
                                name = "Susie Kunde";
                            }}),
                            add(new Metro() {{
                                countryCode = "LV";
                                countryDartId = "molestias";
                                dartId = "dolor";
                                dmaId = "occaecati";
                                kind = "amet";
                                metroCode = "aliquid";
                                name = "Vicky Bashirian";
                            }}),
                            add(new Metro() {{
                                countryCode = "DJ";
                                countryDartId = "perspiciatis";
                                dartId = "similique";
                                dmaId = "voluptate";
                                kind = "quasi";
                                metroCode = "modi";
                                name = "Mr. Lola Jacobs";
                            }}),
                            add(new Metro() {{
                                countryCode = "BH";
                                countryDartId = "voluptas";
                                dartId = "corrupti";
                                dmaId = "minima";
                                kind = "expedita";
                                metroCode = "accusamus";
                                name = "Grant Towne";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "natus";
                                countryCode = "CA";
                                countryDartId = "vitae";
                                id = "d174da31-457f-4d36-8c0b-b662a304cf20";
                                kind = "non";
                            }}),
                            add(new PostalCode() {{
                                code = "commodi";
                                countryCode = "PK";
                                countryDartId = "nulla";
                                id = "9443de0e-3122-40f9-8f0e-5aa32c0e5a5c";
                                kind = "maiores";
                            }}),
                            add(new PostalCode() {{
                                code = "minus";
                                countryCode = "TH";
                                countryDartId = "similique";
                                id = "b7e8cecf-7d25-488d-9e31-d40c9a960b23";
                                kind = "provident";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "LU";
                                countryDartId = "quis";
                                dartId = "voluptatem";
                                kind = "saepe";
                                name = "Simon Bahringer";
                                regionCode = "reiciendis";
                            }}),
                        }};
                    }};;
                    id = "velit";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "itaque";
                    }};;
                    kind = "illo";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "laborum";
                                kind = "amet";
                                languageCode = "eum";
                                name = "Sheila Nader";
                            }}),
                            add(new Language() {{
                                id = "eveniet";
                                kind = "itaque";
                                languageCode = "quos";
                                name = "Elaine Bradtke";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "voluptas";
                    }};;
                    name = "Alyssa Daugherty";
                    subaccountId = "magni";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "necessitatibus";
                                dartId = "similique";
                                kind = "dolorem";
                                majorVersion = "adipisci";
                                minorVersion = "alias";
                                name = "Allan Schneider";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "eos";
                                dartId = "consequuntur";
                                kind = "repellendus";
                                majorVersion = "optio";
                                minorVersion = "a";
                                name = "Christie Pouros";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "labore";
                                dartId = "perferendis";
                                kind = "nostrum";
                                majorVersion = "ullam";
                                minorVersion = "quia";
                                name = "Marsha Sipes IV";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "possimus";
                                kind = "dolores";
                                name = "Nina Heidenreich I";
                            }}),
                            add(new ConnectionType() {{
                                id = "aut";
                                kind = "distinctio";
                                name = "Sonya Schuster";
                            }}),
                            add(new ConnectionType() {{
                                id = "ea";
                                kind = "possimus";
                                name = "Opal Abbott";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "LT";
                                countryDartId = "expedita";
                                id = "enim";
                                kind = "excepturi";
                                name = "Jamie Baumbach";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "voluptas";
                                kind = "nostrum";
                                majorVersion = "officiis";
                                minorVersion = "quis";
                                name = "Cora Hettinger";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "atque";
                                    desktop = false;
                                    kind = "alias";
                                    mobile = false;
                                    name = "Andre Okuneva";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "a";
                                kind = "id";
                                majorVersion = "recusandae";
                                minorVersion = "saepe";
                                name = "Christopher Hermiston";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "voluptatem";
                                    desktop = false;
                                    kind = "animi";
                                    mobile = false;
                                    name = "Ms. Clifford Champlin";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "beatae";
                                kind = "quibusdam";
                                majorVersion = "deserunt";
                                minorVersion = "praesentium";
                                name = "Frank Batz";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "inventore";
                                    desktop = false;
                                    kind = "voluptatum";
                                    mobile = false;
                                    name = "Colleen Pouros";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "quaerat";
                                desktop = false;
                                kind = "at";
                                mobile = false;
                                name = "Tony Pagac";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "ipsam";
                                desktop = false;
                                kind = "laudantium";
                                mobile = false;
                                name = "Candice Gutkowski";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "nihil";
                                desktop = false;
                                kind = "omnis";
                                mobile = false;
                                name = "Mrs. Julian Raynor";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "quia";
                                desktop = false;
                                kind = "exercitationem";
                                mobile = false;
                                name = "Terry Gusikowski";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "dolor";
                                kind = "aspernatur";
                                name = "Thelma Schinner";
                            }}),
                            add(new PlatformType() {{
                                id = "dolores";
                                kind = "soluta";
                                name = "Archie Gulgowski";
                            }}),
                            add(new PlatformType() {{
                                id = "molestiae";
                                kind = "totam";
                                name = "Wade Johns";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "voluptatum";
                fields = "temporibus";
                key = "numquam";
                oauthToken = "eveniet";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "nobis";
                uploadProtocol = "illum";
            }};            

            DfareportingTargetingTemplatesPatchResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesPatch(req, new DfareportingTargetingTemplatesPatchSecurity("neque", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dfareportingTargetingTemplatesUpdate

Updates an existing targeting template.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesUpdateRequest;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesUpdateResponse;
import org.openapis.openapi.models.operations.DfareportingTargetingTemplatesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Browser;
import org.openapis.openapi.models.shared.City;
import org.openapis.openapi.models.shared.ConnectionType;
import org.openapis.openapi.models.shared.Country;
import org.openapis.openapi.models.shared.DayPartTargeting;
import org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum;
import org.openapis.openapi.models.shared.DimensionValue;
import org.openapis.openapi.models.shared.DimensionValueMatchTypeEnum;
import org.openapis.openapi.models.shared.GeoTargeting;
import org.openapis.openapi.models.shared.KeyValueTargetingExpression;
import org.openapis.openapi.models.shared.Language;
import org.openapis.openapi.models.shared.LanguageTargeting;
import org.openapis.openapi.models.shared.ListTargetingExpression;
import org.openapis.openapi.models.shared.Metro;
import org.openapis.openapi.models.shared.MobileCarrier;
import org.openapis.openapi.models.shared.OperatingSystem;
import org.openapis.openapi.models.shared.OperatingSystemVersion;
import org.openapis.openapi.models.shared.PlatformType;
import org.openapis.openapi.models.shared.PostalCode;
import org.openapis.openapi.models.shared.Region;
import org.openapis.openapi.models.shared.TargetingTemplate;
import org.openapis.openapi.models.shared.TechnologyTargeting;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DfareportingTargetingTemplatesUpdateRequest req = new DfareportingTargetingTemplatesUpdateRequest("accusamus") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "harum";
                    advertiserId = "nam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "temporibus";
                        etag = "perspiciatis";
                        id = "79b8e690-a938-43b2-b970-bdd986954679";
                        kind = "ducimus";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "fugit";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(834462),
                            add(363340),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "UY";
                                countryDartId = "dicta";
                                dartId = "recusandae";
                                kind = "sapiente";
                                metroCode = "ea";
                                metroDmaId = "aspernatur";
                                name = "Toni Hickle";
                                regionCode = "dolorem";
                                regionDartId = "repellendus";
                            }}),
                            add(new City() {{
                                countryCode = "BV";
                                countryDartId = "reiciendis";
                                dartId = "repudiandae";
                                kind = "facere";
                                metroCode = "sunt";
                                metroDmaId = "alias";
                                name = "Gretchen Luettgen";
                                regionCode = "nihil";
                                regionDartId = "labore";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "AR";
                                dartId = "error";
                                kind = "error";
                                name = "Dr. Ivan Schoen";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "TM";
                                dartId = "minima";
                                kind = "voluptate";
                                name = "Francisco Hermann";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "CO";
                                dartId = "totam";
                                kind = "dignissimos";
                                name = "Ron Medhurst";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "HU";
                                dartId = "vel";
                                kind = "occaecati";
                                name = "Miss Jaime Kovacek";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "IO";
                                countryDartId = "omnis";
                                dartId = "vel";
                                dmaId = "quod";
                                kind = "libero";
                                metroCode = "consequatur";
                                name = "Olga Dare";
                            }}),
                            add(new Metro() {{
                                countryCode = "VU";
                                countryDartId = "non";
                                dartId = "illum";
                                dmaId = "maiores";
                                kind = "quo";
                                metroCode = "quis";
                                name = "Dixie Kunde";
                            }}),
                            add(new Metro() {{
                                countryCode = "PM";
                                countryDartId = "tenetur";
                                dartId = "mollitia";
                                dmaId = "asperiores";
                                kind = "itaque";
                                metroCode = "minus";
                                name = "Fredrick Parker";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "quas";
                                countryCode = "LI";
                                countryDartId = "ullam";
                                id = "835450cb-3371-4a5d-9ab3-3553877097b1";
                                kind = "culpa";
                            }}),
                            add(new PostalCode() {{
                                code = "omnis";
                                countryCode = "OM";
                                countryDartId = "facere";
                                id = "0daebf40-8e08-40ca-aa1b-878962150802";
                                kind = "vitae";
                            }}),
                            add(new PostalCode() {{
                                code = "nostrum";
                                countryCode = "AO";
                                countryDartId = "dicta";
                                id = "beed33ee-8811-4dc7-9f80-d513c0252788";
                                kind = "vero";
                            }}),
                            add(new PostalCode() {{
                                code = "quo";
                                countryCode = "FI";
                                countryDartId = "ad";
                                id = "c06a6e19-d384-4552-98d2-1328bdade975";
                                kind = "molestias";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "TH";
                                countryDartId = "excepturi";
                                dartId = "ut";
                                kind = "error";
                                name = "Bradford Frami II";
                                regionCode = "in";
                            }}),
                            add(new Region() {{
                                countryCode = "CF";
                                countryDartId = "perferendis";
                                dartId = "reiciendis";
                                kind = "tempore";
                                name = "Melvin Batz";
                                regionCode = "sit";
                            }}),
                        }};
                    }};;
                    id = "dolores";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "laboriosam";
                    }};;
                    kind = "autem";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "occaecati";
                                kind = "asperiores";
                                languageCode = "ipsam";
                                name = "Mabel Pfeffer IV";
                            }}),
                            add(new Language() {{
                                id = "atque";
                                kind = "corrupti";
                                languageCode = "commodi";
                                name = "Sheila Orn";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "officiis";
                    }};;
                    name = "Eula Balistreri";
                    subaccountId = "ullam";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "impedit";
                                dartId = "magnam";
                                kind = "impedit";
                                majorVersion = "aut";
                                minorVersion = "debitis";
                                name = "Tricia Senger";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "atque";
                                dartId = "iusto";
                                kind = "occaecati";
                                majorVersion = "eos";
                                minorVersion = "nesciunt";
                                name = "Essie Goldner";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "optio";
                                dartId = "corrupti";
                                kind = "quam";
                                majorVersion = "sit";
                                minorVersion = "pariatur";
                                name = "Mrs. Mercedes Bradtke";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "illum";
                                kind = "ipsum";
                                name = "Percy Howell";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "MD";
                                countryDartId = "error";
                                id = "nobis";
                                kind = "vitae";
                                name = "Irving Beier";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "BY";
                                countryDartId = "autem";
                                id = "officia";
                                kind = "voluptas";
                                name = "Sherri Sipes";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "TG";
                                countryDartId = "id";
                                id = "eaque";
                                kind = "minus";
                                name = "Joanna Schulist";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "CX";
                                countryDartId = "tempore";
                                id = "earum";
                                kind = "suscipit";
                                name = "Lula Krajcik";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "explicabo";
                                kind = "aspernatur";
                                majorVersion = "minima";
                                minorVersion = "recusandae";
                                name = "Mrs. Drew Hauck";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "impedit";
                                    desktop = false;
                                    kind = "tempora";
                                    mobile = false;
                                    name = "Roxanne Koss";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "incidunt";
                                kind = "voluptatibus";
                                majorVersion = "quae";
                                minorVersion = "optio";
                                name = "Patricia Dickinson";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "error";
                                    desktop = false;
                                    kind = "maxime";
                                    mobile = false;
                                    name = "Amos Leffler";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "dolorem";
                                kind = "inventore";
                                majorVersion = "excepturi";
                                minorVersion = "voluptas";
                                name = "Alonzo Watsica";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "quas";
                                    desktop = false;
                                    kind = "velit";
                                    mobile = false;
                                    name = "Darryl Goldner";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "beatae";
                                kind = "quos";
                                majorVersion = "exercitationem";
                                minorVersion = "a";
                                name = "Moses Kub";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "non";
                                    desktop = false;
                                    kind = "ipsum";
                                    mobile = false;
                                    name = "May Kassulke";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "quae";
                                desktop = false;
                                kind = "reiciendis";
                                mobile = false;
                                name = "Kara Langosh DDS";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "culpa";
                                desktop = false;
                                kind = "a";
                                mobile = false;
                                name = "Alexis Buckridge";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "qui";
                                desktop = false;
                                kind = "qui";
                                mobile = false;
                                name = "Yolanda Walter";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "doloribus";
                                kind = "dolores";
                                name = "Janet Bechtelar";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "perspiciatis";
                fields = "nam";
                key = "nisi";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "modi";
                uploadProtocol = "magnam";
            }};            

            DfareportingTargetingTemplatesUpdateResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesUpdate(req, new DfareportingTargetingTemplatesUpdateSecurity("aut", "aperiam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.targetingTemplate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
