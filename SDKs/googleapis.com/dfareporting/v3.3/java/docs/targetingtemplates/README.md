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

            DfareportingTargetingTemplatesGetRequest req = new DfareportingTargetingTemplatesGetRequest("nobis", "velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.JSON;
                callback = "rerum";
                fields = "laborum";
                key = "excepturi";
                oauthToken = "eos";
                prettyPrint = false;
                quotaUser = "minus";
                uploadType = "sed";
                uploadProtocol = "ex";
            }};            

            DfareportingTargetingTemplatesGetResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesGet(req, new DfareportingTargetingTemplatesGetSecurity("adipisci", "eius") {{
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

            DfareportingTargetingTemplatesInsertRequest req = new DfareportingTargetingTemplatesInsertRequest("unde") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "quis";
                    advertiserId = "molestias";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "consequuntur";
                        etag = "molestiae";
                        id = "2ed50664-62c9-49ea-adac-d2b866ce16de";
                        kind = "praesentium";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "corrupti";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.SUNDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(682680),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "BE";
                                countryDartId = "eum";
                                dartId = "numquam";
                                kind = "a";
                                metroCode = "expedita";
                                metroDmaId = "ea";
                                name = "Clara Gibson";
                                regionCode = "repellendus";
                                regionDartId = "facilis";
                            }}),
                            add(new City() {{
                                countryCode = "PN";
                                countryDartId = "eaque";
                                dartId = "facilis";
                                kind = "nostrum";
                                metroCode = "eaque";
                                metroDmaId = "vel";
                                name = "Gregory Olson";
                                regionCode = "voluptatum";
                                regionDartId = "natus";
                            }}),
                            add(new City() {{
                                countryCode = "VU";
                                countryDartId = "dignissimos";
                                dartId = "at";
                                kind = "perspiciatis";
                                metroCode = "itaque";
                                metroDmaId = "cumque";
                                name = "Ethel Corwin";
                                regionCode = "reprehenderit";
                                regionDartId = "nesciunt";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "MN";
                                dartId = "explicabo";
                                kind = "sequi";
                                name = "Eric Farrell";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "RW";
                                countryDartId = "quasi";
                                dartId = "delectus";
                                dmaId = "quos";
                                kind = "consequatur";
                                metroCode = "iure";
                                name = "Bradley Upton";
                            }}),
                            add(new Metro() {{
                                countryCode = "DK";
                                countryDartId = "sint";
                                dartId = "necessitatibus";
                                dmaId = "iure";
                                kind = "voluptatem";
                                metroCode = "commodi";
                                name = "Nellie Leannon";
                            }}),
                            add(new Metro() {{
                                countryCode = "SH";
                                countryDartId = "ea";
                                dartId = "inventore";
                                dmaId = "adipisci";
                                kind = "tempora";
                                metroCode = "tempora";
                                name = "Hubert Koepp";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "esse";
                                countryCode = "PG";
                                countryDartId = "possimus";
                                id = "633e88b6-1304-4356-8a70-d8d4f5d60746";
                                kind = "non";
                            }}),
                            add(new PostalCode() {{
                                code = "veritatis";
                                countryCode = "BH";
                                countryDartId = "quia";
                                id = "37b62fbc-39f8-4d06-ad96-8ecac33024ac";
                                kind = "veniam";
                            }}),
                            add(new PostalCode() {{
                                code = "tempore";
                                countryCode = "JP";
                                countryDartId = "dolorum";
                                id = "0f6cfeb9-d3a6-497f-b71c-e361d2e5d73e";
                                kind = "iusto";
                            }}),
                            add(new PostalCode() {{
                                code = "provident";
                                countryCode = "GS";
                                countryDartId = "officia";
                                id = "a67ac619-1874-481d-9b99-1c71e59cf64f";
                                kind = "mollitia";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "US";
                                countryDartId = "ad";
                                dartId = "exercitationem";
                                kind = "hic";
                                name = "Israel Stamm";
                                regionCode = "error";
                            }}),
                            add(new Region() {{
                                countryCode = "AF";
                                countryDartId = "autem";
                                dartId = "asperiores";
                                kind = "dolore";
                                name = "Christy Brekke";
                                regionCode = "autem";
                            }}),
                        }};
                    }};;
                    id = "minima";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "asperiores";
                    }};;
                    kind = "magni";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "dicta";
                                kind = "necessitatibus";
                                languageCode = "quidem";
                                name = "Marlon Russel";
                            }}),
                            add(new Language() {{
                                id = "cumque";
                                kind = "porro";
                                languageCode = "animi";
                                name = "Mrs. Stacey Hettinger";
                            }}),
                            add(new Language() {{
                                id = "accusantium";
                                kind = "voluptatem";
                                languageCode = "omnis";
                                name = "Darrin Jast";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "eveniet";
                    }};;
                    name = "Mr. Francis Mayer";
                    subaccountId = "a";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "ratione";
                                dartId = "ex";
                                kind = "explicabo";
                                majorVersion = "consectetur";
                                minorVersion = "corporis";
                                name = "Vera Fay";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "quos";
                                dartId = "officia";
                                kind = "maxime";
                                majorVersion = "est";
                                minorVersion = "cumque";
                                name = "Dr. Carla Bernhard MD";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "est";
                                kind = "nulla";
                                name = "Audrey Keebler";
                            }}),
                            add(new ConnectionType() {{
                                id = "necessitatibus";
                                kind = "accusantium";
                                name = "Rex Swift";
                            }}),
                            add(new ConnectionType() {{
                                id = "necessitatibus";
                                kind = "minus";
                                name = "Jose Kilback";
                            }}),
                            add(new ConnectionType() {{
                                id = "sint";
                                kind = "tempore";
                                name = "Shane Lubowitz";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "AR";
                                countryDartId = "rerum";
                                id = "voluptatem";
                                kind = "numquam";
                                name = "Julio Greenfelder";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "SG";
                                countryDartId = "facilis";
                                id = "aperiam";
                                kind = "molestias";
                                name = "Ms. Jack Cremin";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "BB";
                                countryDartId = "recusandae";
                                id = "sequi";
                                kind = "amet";
                                name = "Wilma Steuber IV";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "sit";
                                kind = "itaque";
                                majorVersion = "quidem";
                                minorVersion = "maiores";
                                name = "Jared Miller";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "culpa";
                                    desktop = false;
                                    kind = "temporibus";
                                    mobile = false;
                                    name = "Estelle Hansen";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "ab";
                                desktop = false;
                                kind = "possimus";
                                mobile = false;
                                name = "Geoffrey Kuhn";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "explicabo";
                                desktop = false;
                                kind = "assumenda";
                                mobile = false;
                                name = "Miss Joy Quitzon";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "debitis";
                                kind = "expedita";
                                name = "Marguerite Abernathy";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "aliquam";
                alt = AltEnum.JSON;
                callback = "voluptatem";
                fields = "consequatur";
                key = "nisi";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "fugiat";
                uploadProtocol = "eum";
            }};            

            DfareportingTargetingTemplatesInsertResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesInsert(req, new DfareportingTargetingTemplatesInsertSecurity("est", "facilis") {{
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

            DfareportingTargetingTemplatesListRequest req = new DfareportingTargetingTemplatesListRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sed";
                advertiserId = "iusto";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "asperiores";
                ids = new String[]{{
                    add("at"),
                }};
                key = "pariatur";
                maxResults = 935054L;
                oauthToken = "itaque";
                pageToken = "sint";
                prettyPrint = false;
                quotaUser = "vitae";
                searchString = "sapiente";
                sortField = DfareportingTargetingTemplatesListSortFieldEnum.ID;
                sortOrder = DfareportingTargetingTemplatesListSortOrderEnum.ASCENDING;
                uploadType = "deserunt";
                uploadProtocol = "doloremque";
            }};            

            DfareportingTargetingTemplatesListResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesList(req, new DfareportingTargetingTemplatesListSecurity("totam", "dolor") {{
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

            DfareportingTargetingTemplatesPatchRequest req = new DfareportingTargetingTemplatesPatchRequest("saepe", "ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "harum";
                    advertiserId = "blanditiis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "exercitationem";
                        etag = "ab";
                        id = "01f784bf-3a74-4b54-9230-51a423a913e1";
                        kind = "similique";
                        matchType = DimensionValueMatchTypeEnum.BEGINS_WITH;
                        value = "occaecati";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(740871),
                            add(478008),
                            add(236052),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "SH";
                                countryDartId = "delectus";
                                dartId = "quo";
                                kind = "saepe";
                                metroCode = "earum";
                                metroDmaId = "culpa";
                                name = "Jesus Hickle";
                                regionCode = "aliquam";
                                regionDartId = "similique";
                            }}),
                            add(new City() {{
                                countryCode = "KG";
                                countryDartId = "modi";
                                dartId = "officiis";
                                kind = "quod";
                                metroCode = "odio";
                                metroDmaId = "minima";
                                name = "Dr. Benjamin Rice";
                                regionCode = "sint";
                                regionDartId = "modi";
                            }}),
                            add(new City() {{
                                countryCode = "MA";
                                countryDartId = "illum";
                                dartId = "quam";
                                kind = "impedit";
                                metroCode = "nobis";
                                metroDmaId = "vitae";
                                name = "Billie Senger";
                                regionCode = "assumenda";
                                regionDartId = "optio";
                            }}),
                            add(new City() {{
                                countryCode = "TH";
                                countryDartId = "occaecati";
                                dartId = "eius";
                                kind = "amet";
                                metroCode = "libero";
                                metroDmaId = "minus";
                                name = "Laurie Shields I";
                                regionCode = "fuga";
                                regionDartId = "quidem";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "MD";
                                dartId = "eius";
                                kind = "praesentium";
                                name = "Boyd Vandervort";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "AO";
                                dartId = "qui";
                                kind = "facilis";
                                name = "Kay Herman";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "VU";
                                dartId = "fuga";
                                kind = "ipsum";
                                name = "Garrett Labadie";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "VA";
                                countryDartId = "quod";
                                dartId = "voluptas";
                                dmaId = "distinctio";
                                kind = "aperiam";
                                metroCode = "est";
                                name = "Mrs. Al Rice";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "corrupti";
                                countryCode = "PG";
                                countryDartId = "aliquam";
                                id = "27d7de96-3ff0-43e4-97d8-97002de0defd";
                                kind = "magnam";
                            }}),
                            add(new PostalCode() {{
                                code = "earum";
                                countryCode = "BE";
                                countryDartId = "enim";
                                id = "f2303b32-5293-4841-b394-8aafabda028e";
                                kind = "laboriosam";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "SE";
                                countryDartId = "fugit";
                                dartId = "amet";
                                kind = "sit";
                                name = "Alan Glover";
                                regionCode = "numquam";
                            }}),
                            add(new Region() {{
                                countryCode = "GH";
                                countryDartId = "labore";
                                dartId = "quae";
                                kind = "unde";
                                name = "Kelvin Thompson DDS";
                                regionCode = "mollitia";
                            }}),
                        }};
                    }};;
                    id = "iste";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "molestias";
                    }};;
                    kind = "ab";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "consectetur";
                                kind = "fuga";
                                languageCode = "dignissimos";
                                name = "Lynn Mayert Jr.";
                            }}),
                            add(new Language() {{
                                id = "consequuntur";
                                kind = "tempore";
                                languageCode = "dolor";
                                name = "Glenda Stiedemann";
                            }}),
                            add(new Language() {{
                                id = "architecto";
                                kind = "aliquid";
                                languageCode = "totam";
                                name = "Ms. Rickey Jacobi";
                            }}),
                            add(new Language() {{
                                id = "non";
                                kind = "sit";
                                languageCode = "quidem";
                                name = "Tyrone Wilderman";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "eius";
                    }};;
                    name = "Gayle Grady";
                    subaccountId = "at";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "impedit";
                                dartId = "eos";
                                kind = "eveniet";
                                majorVersion = "repellat";
                                minorVersion = "nobis";
                                name = "Mr. Faith Howell";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "perspiciatis";
                                dartId = "veritatis";
                                kind = "sunt";
                                majorVersion = "corrupti";
                                minorVersion = "eius";
                                name = "Ms. Miguel Green";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "officia";
                                dartId = "vitae";
                                kind = "laborum";
                                majorVersion = "iusto";
                                minorVersion = "necessitatibus";
                                name = "Alison Feil";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "est";
                                kind = "iste";
                                name = "Wendell Jast";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "PS";
                                countryDartId = "repellendus";
                                id = "modi";
                                kind = "occaecati";
                                name = "Abraham Grimes V";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "error";
                                kind = "magnam";
                                majorVersion = "id";
                                minorVersion = "quam";
                                name = "Joanne Gulgowski DVM";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "explicabo";
                                    desktop = false;
                                    kind = "natus";
                                    mobile = false;
                                    name = "Tricia Feil";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "quisquam";
                                kind = "doloremque";
                                majorVersion = "cumque";
                                minorVersion = "omnis";
                                name = "Latoya Reichert III";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "consectetur";
                                    desktop = false;
                                    kind = "voluptas";
                                    mobile = false;
                                    name = "Beulah Muller";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "ut";
                                desktop = false;
                                kind = "consequuntur";
                                mobile = false;
                                name = "Velma Welch";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "vel";
                                desktop = false;
                                kind = "repellendus";
                                mobile = false;
                                name = "Jared Turner";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "similique";
                                kind = "esse";
                                name = "Fred Dach";
                            }}),
                            add(new PlatformType() {{
                                id = "qui";
                                kind = "minus";
                                name = "Guillermo Pollich";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "eius";
                alt = AltEnum.MEDIA;
                callback = "voluptatem";
                fields = "minima";
                key = "quaerat";
                oauthToken = "aut";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "cum";
                uploadProtocol = "saepe";
            }};            

            DfareportingTargetingTemplatesPatchResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesPatch(req, new DfareportingTargetingTemplatesPatchSecurity("reprehenderit", "nemo") {{
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

            DfareportingTargetingTemplatesUpdateRequest req = new DfareportingTargetingTemplatesUpdateRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "qui";
                    advertiserId = "perferendis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "odio";
                        etag = "maiores";
                        id = "44854848-6095-4d14-852a-0fc3a3bddcd5";
                        kind = "expedita";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "voluptatem";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.THURSDAY),
                            add(DayPartTargetingDaysOfWeekEnum.THURSDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(760155),
                            add(612221),
                            add(660947),
                            add(361459),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "CL";
                                countryDartId = "maxime";
                                dartId = "officiis";
                                kind = "quo";
                                metroCode = "ex";
                                metroDmaId = "molestiae";
                                name = "Heather Waters V";
                                regionCode = "eaque";
                                regionDartId = "accusantium";
                            }}),
                            add(new City() {{
                                countryCode = "TF";
                                countryDartId = "quisquam";
                                dartId = "perspiciatis";
                                kind = "nisi";
                                metroCode = "ratione";
                                metroDmaId = "enim";
                                name = "Myrtle Simonis";
                                regionCode = "recusandae";
                                regionDartId = "occaecati";
                            }}),
                            add(new City() {{
                                countryCode = "AM";
                                countryDartId = "nisi";
                                dartId = "aliquam";
                                kind = "culpa";
                                metroCode = "doloremque";
                                metroDmaId = "expedita";
                                name = "Terence Prosacco";
                                regionCode = "delectus";
                                regionDartId = "impedit";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "MY";
                                dartId = "laborum";
                                kind = "id";
                                name = "Loren Conn";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "AD";
                                countryDartId = "totam";
                                dartId = "quia";
                                dmaId = "quis";
                                kind = "ea";
                                metroCode = "libero";
                                name = "Vera Walker I";
                            }}),
                            add(new Metro() {{
                                countryCode = "TV";
                                countryDartId = "cum";
                                dartId = "ea";
                                dmaId = "consequatur";
                                kind = "suscipit";
                                metroCode = "ducimus";
                                name = "Cassandra Tillman";
                            }}),
                            add(new Metro() {{
                                countryCode = "CG";
                                countryDartId = "molestiae";
                                dartId = "exercitationem";
                                dmaId = "delectus";
                                kind = "beatae";
                                metroCode = "eaque";
                                name = "Rudolph McClure DVM";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "a";
                                countryCode = "SA";
                                countryDartId = "necessitatibus";
                                id = "f1a8f1c0-46c0-4168-aec8-df3648095fdb";
                                kind = "possimus";
                            }}),
                            add(new PostalCode() {{
                                code = "perspiciatis";
                                countryCode = "GS";
                                countryDartId = "quae";
                                id = "0351d82f-bd37-4e85-8ed8-6b0def74a085";
                                kind = "quisquam";
                            }}),
                            add(new PostalCode() {{
                                code = "saepe";
                                countryCode = "VI";
                                countryDartId = "sapiente";
                                id = "9d109c0a-5a17-442e-b3cc-a695fd560f93";
                                kind = "nihil";
                            }}),
                            add(new PostalCode() {{
                                code = "accusamus";
                                countryCode = "CI";
                                countryDartId = "tempora";
                                id = "d8713045-d2f7-413e-85b5-592bfc7395f7";
                                kind = "dicta";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "CL";
                                countryDartId = "ipsum";
                                dartId = "expedita";
                                kind = "corporis";
                                name = "Miguel Johns DDS";
                                regionCode = "cupiditate";
                            }}),
                        }};
                    }};;
                    id = "quisquam";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "reprehenderit";
                    }};;
                    kind = "commodi";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "dicta";
                                kind = "magnam";
                                languageCode = "earum";
                                name = "Mrs. Bernice Hackett";
                            }}),
                            add(new Language() {{
                                id = "praesentium";
                                kind = "voluptates";
                                languageCode = "assumenda";
                                name = "Carol White";
                            }}),
                            add(new Language() {{
                                id = "nobis";
                                kind = "recusandae";
                                languageCode = "culpa";
                                name = "Mr. Marlon Lynch";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "modi";
                    }};;
                    name = "Katrina Abshire";
                    subaccountId = "a";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "suscipit";
                                dartId = "autem";
                                kind = "dignissimos";
                                majorVersion = "commodi";
                                minorVersion = "iure";
                                name = "Phillip Moore";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "vero";
                                dartId = "ad";
                                kind = "modi";
                                majorVersion = "nesciunt";
                                minorVersion = "quod";
                                name = "Angel Ortiz";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "debitis";
                                dartId = "eius";
                                kind = "necessitatibus";
                                majorVersion = "atque";
                                minorVersion = "expedita";
                                name = "Loren Gleichner IV";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "nesciunt";
                                kind = "hic";
                                name = "Miss Christopher Leffler";
                            }}),
                            add(new ConnectionType() {{
                                id = "asperiores";
                                kind = "facilis";
                                name = "Emilio Treutel";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "NP";
                                countryDartId = "esse";
                                id = "quos";
                                kind = "porro";
                                name = "Ruby Johnson";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "libero";
                                kind = "enim";
                                majorVersion = "veritatis";
                                minorVersion = "libero";
                                name = "Bethany Abbott V";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "porro";
                                    desktop = false;
                                    kind = "voluptas";
                                    mobile = false;
                                    name = "Wendell Dietrich I";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "minus";
                                kind = "possimus";
                                majorVersion = "magnam";
                                minorVersion = "facere";
                                name = "Rosemary Conroy III";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "nihil";
                                    desktop = false;
                                    kind = "voluptate";
                                    mobile = false;
                                    name = "Grace Lesch";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "repellendus";
                                kind = "ab";
                                majorVersion = "est";
                                minorVersion = "mollitia";
                                name = "Darin Cronin";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "quisquam";
                                    desktop = false;
                                    kind = "cumque";
                                    mobile = false;
                                    name = "Gwendolyn Prohaska";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "labore";
                                desktop = false;
                                kind = "voluptatum";
                                mobile = false;
                                name = "Joanna Ratke";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "nam";
                                desktop = false;
                                kind = "suscipit";
                                mobile = false;
                                name = "Jacquelyn Raynor";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "quam";
                                desktop = false;
                                kind = "nisi";
                                mobile = false;
                                name = "Anthony Boyle";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "quaerat";
                                desktop = false;
                                kind = "velit";
                                mobile = false;
                                name = "Irvin Deckow";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "sit";
                                kind = "facilis";
                                name = "Ms. Nichole Dickens DDS";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "veritatis";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "aspernatur";
                key = "quaerat";
                oauthToken = "dicta";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "numquam";
                uploadProtocol = "in";
            }};            

            DfareportingTargetingTemplatesUpdateResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesUpdate(req, new DfareportingTargetingTemplatesUpdateSecurity("assumenda", "consequatur") {{
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
