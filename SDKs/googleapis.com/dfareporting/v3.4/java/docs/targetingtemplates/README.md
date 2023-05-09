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

            DfareportingTargetingTemplatesGetRequest req = new DfareportingTargetingTemplatesGetRequest("veritatis", "aperiam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "fugiat";
                alt = AltEnum.PROTO;
                callback = "quibusdam";
                fields = "iusto";
                key = "explicabo";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "nam";
                uploadType = "accusamus";
                uploadProtocol = "eaque";
            }};            

            DfareportingTargetingTemplatesGetResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesGet(req, new DfareportingTargetingTemplatesGetSecurity("a", "placeat") {{
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

            DfareportingTargetingTemplatesInsertRequest req = new DfareportingTargetingTemplatesInsertRequest("numquam") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "explicabo";
                    advertiserId = "reiciendis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "sequi";
                        etag = "eum";
                        id = "47d6b89d-bdc0-48a1-9d97-b9b31bbdd00d";
                        kind = "ad";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "nesciunt";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                            add(DayPartTargetingDaysOfWeekEnum.SUNDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(537619),
                            add(454953),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "SS";
                                countryDartId = "ipsum";
                                dartId = "tempora";
                                kind = "sunt";
                                metroCode = "harum";
                                metroDmaId = "quia";
                                name = "Rosemarie Tromp";
                                regionCode = "natus";
                                regionDartId = "consequatur";
                            }}),
                            add(new City() {{
                                countryCode = "GR";
                                countryDartId = "nesciunt";
                                dartId = "reprehenderit";
                                kind = "tenetur";
                                metroCode = "fugiat";
                                metroDmaId = "voluptatum";
                                name = "Dr. Wilbur Harvey";
                                regionCode = "enim";
                                regionDartId = "laborum";
                            }}),
                            add(new City() {{
                                countryCode = "QA";
                                countryDartId = "qui";
                                dartId = "quisquam";
                                kind = "ratione";
                                metroCode = "corporis";
                                metroDmaId = "soluta";
                                name = "Randall Koelpin";
                                regionCode = "inventore";
                                regionDartId = "libero";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "TW";
                                dartId = "culpa";
                                kind = "cupiditate";
                                name = "Kerry Beier";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "LY";
                                dartId = "aliquam";
                                kind = "non";
                                name = "Gerard Marks MD";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "BI";
                                dartId = "ipsa";
                                kind = "officia";
                                name = "Melanie Ferry";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "CD";
                                dartId = "earum";
                                kind = "illum";
                                name = "Shawn Feeney";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "AU";
                                countryDartId = "consequatur";
                                dartId = "ut";
                                dmaId = "sint";
                                kind = "quis";
                                metroCode = "eos";
                                name = "Lora Reichel";
                            }}),
                            add(new Metro() {{
                                countryCode = "MZ";
                                countryDartId = "architecto";
                                dartId = "voluptate";
                                dmaId = "mollitia";
                                kind = "blanditiis";
                                metroCode = "quaerat";
                                name = "Bennie Rath";
                            }}),
                            add(new Metro() {{
                                countryCode = "BY";
                                countryDartId = "facere";
                                dartId = "qui";
                                dmaId = "libero";
                                kind = "quos";
                                metroCode = "vitae";
                                name = "Miss Nettie Homenick";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "fugiat";
                                countryCode = "TJ";
                                countryDartId = "totam";
                                id = "b02b13a1-85bc-48bf-bf44-ec8c4df61ea6";
                                kind = "aut";
                            }}),
                            add(new PostalCode() {{
                                code = "expedita";
                                countryCode = "MU";
                                countryDartId = "unde";
                                id = "b5e31a1e-3601-4a4d-a163-ae1c1e222a25";
                                kind = "alias";
                            }}),
                            add(new PostalCode() {{
                                code = "fuga";
                                countryCode = "ET";
                                countryDartId = "sed";
                                id = "93f368d6-3af9-4000-95de-d9d00dc26611";
                                kind = "repellat";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "NG";
                                countryDartId = "consequatur";
                                dartId = "facere";
                                kind = "vero";
                                name = "Anne Franey";
                                regionCode = "dolor";
                            }}),
                            add(new Region() {{
                                countryCode = "LA";
                                countryDartId = "odit";
                                dartId = "reprehenderit";
                                kind = "fugit";
                                name = "Teri Altenwerth II";
                                regionCode = "id";
                            }}),
                            add(new Region() {{
                                countryCode = "DZ";
                                countryDartId = "dolorum";
                                dartId = "saepe";
                                kind = "voluptatum";
                                name = "Howard Hegmann";
                                regionCode = "voluptates";
                            }}),
                            add(new Region() {{
                                countryCode = "TW";
                                countryDartId = "praesentium";
                                dartId = "neque";
                                kind = "corrupti";
                                name = "Kate Murray";
                                regionCode = "fuga";
                            }}),
                        }};
                    }};;
                    id = "eos";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "esse";
                    }};;
                    kind = "omnis";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "esse";
                                kind = "nemo";
                                languageCode = "quia";
                                name = "Bobbie Hermiston";
                            }}),
                            add(new Language() {{
                                id = "quidem";
                                kind = "non";
                                languageCode = "non";
                                name = "Christy Hudson";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "recusandae";
                    }};;
                    name = "Mathew Bartell";
                    subaccountId = "voluptatum";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "repellat";
                                dartId = "ex";
                                kind = "necessitatibus";
                                majorVersion = "magni";
                                minorVersion = "doloribus";
                                name = "Josephine Rutherford";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "voluptate";
                                dartId = "nam";
                                kind = "rerum";
                                majorVersion = "earum";
                                minorVersion = "nam";
                                name = "Milton Abbott";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "quam";
                                dartId = "deserunt";
                                kind = "cumque";
                                majorVersion = "sit";
                                minorVersion = "dignissimos";
                                name = "Omar Osinski";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "dolorum";
                                dartId = "rem";
                                kind = "nemo";
                                majorVersion = "reiciendis";
                                minorVersion = "iusto";
                                name = "Neil Schimmel";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "eius";
                                kind = "voluptates";
                                name = "Ramiro Littel";
                            }}),
                            add(new ConnectionType() {{
                                id = "nesciunt";
                                kind = "harum";
                                name = "Robin Oberbrunner";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "CD";
                                countryDartId = "voluptate";
                                id = "iusto";
                                kind = "possimus";
                                name = "Sidney O'Connell";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "SX";
                                countryDartId = "dolore";
                                id = "similique";
                                kind = "exercitationem";
                                name = "Laurie Runte";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "CV";
                                countryDartId = "numquam";
                                id = "esse";
                                kind = "sunt";
                                name = "Rosa Brown";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "aperiam";
                                kind = "molestiae";
                                majorVersion = "ex";
                                minorVersion = "neque";
                                name = "Micheal Wiza";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "soluta";
                                    desktop = false;
                                    kind = "numquam";
                                    mobile = false;
                                    name = "Dana Adams";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "itaque";
                                kind = "pariatur";
                                majorVersion = "eligendi";
                                minorVersion = "facere";
                                name = "Julia Boyle";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "consectetur";
                                    desktop = false;
                                    kind = "sapiente";
                                    mobile = false;
                                    name = "Ellen Reilly MD";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "nulla";
                                kind = "asperiores";
                                majorVersion = "porro";
                                minorVersion = "numquam";
                                name = "Ana Yundt";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "quam";
                                    desktop = false;
                                    kind = "illo";
                                    mobile = false;
                                    name = "Tami Macejkovic";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "maiores";
                                kind = "aliquid";
                                majorVersion = "saepe";
                                minorVersion = "incidunt";
                                name = "Merle Treutel";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "consectetur";
                                    desktop = false;
                                    kind = "accusamus";
                                    mobile = false;
                                    name = "Tara Kutch DVM";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "consectetur";
                                desktop = false;
                                kind = "expedita";
                                mobile = false;
                                name = "Gerardo Harvey PhD";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "provident";
                                kind = "rerum";
                                name = "Harold Weber";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "dicta";
                key = "in";
                oauthToken = "doloremque";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "nisi";
                uploadProtocol = "cupiditate";
            }};            

            DfareportingTargetingTemplatesInsertResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesInsert(req, new DfareportingTargetingTemplatesInsertSecurity("consequatur", "nesciunt") {{
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

            DfareportingTargetingTemplatesListRequest req = new DfareportingTargetingTemplatesListRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "voluptate";
                advertiserId = "dicta";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "ducimus";
                ids = new String[]{{
                    add("aut"),
                    add("totam"),
                }};
                key = "at";
                maxResults = 675732L;
                oauthToken = "repudiandae";
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "unde";
                searchString = "explicabo";
                sortField = DfareportingTargetingTemplatesListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetingTemplatesListSortOrderEnum.ASCENDING;
                uploadType = "quae";
                uploadProtocol = "non";
            }};            

            DfareportingTargetingTemplatesListResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesList(req, new DfareportingTargetingTemplatesListSecurity("quidem", "architecto") {{
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

            DfareportingTargetingTemplatesPatchRequest req = new DfareportingTargetingTemplatesPatchRequest("veritatis", "cupiditate") {{
                dollarXgafv = XgafvEnum.ONE;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "natus";
                    advertiserId = "magnam";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "non";
                        etag = "quibusdam";
                        id = "c7f113e7-df63-46c9-aba3-34ca89e71b32";
                        kind = "cumque";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "quis";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(135720),
                            add(221566),
                            add(119193),
                            add(803287),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "TH";
                                countryDartId = "ea";
                                dartId = "fugit";
                                kind = "dolores";
                                metroCode = "eos";
                                metroDmaId = "laborum";
                                name = "Leslie Weber";
                                regionCode = "suscipit";
                                regionDartId = "deleniti";
                            }}),
                            add(new City() {{
                                countryCode = "SO";
                                countryDartId = "repellat";
                                dartId = "sint";
                                kind = "porro";
                                metroCode = "placeat";
                                metroDmaId = "animi";
                                name = "Christian Hettinger";
                                regionCode = "laboriosam";
                                regionDartId = "maxime";
                            }}),
                            add(new City() {{
                                countryCode = "CI";
                                countryDartId = "voluptatem";
                                dartId = "aperiam";
                                kind = "dolores";
                                metroCode = "molestiae";
                                metroDmaId = "similique";
                                name = "Gerardo McLaughlin";
                                regionCode = "impedit";
                                regionDartId = "tempore";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "TV";
                                dartId = "repudiandae";
                                kind = "illum";
                                name = "Robin Schaefer";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "DJ";
                                dartId = "itaque";
                                kind = "reprehenderit";
                                name = "Elijah Rice";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "ZM";
                                dartId = "delectus";
                                kind = "architecto";
                                name = "Ms. Bonnie Jast";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "LI";
                                dartId = "cum";
                                kind = "dolor";
                                name = "Reginald Larson";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "VE";
                                countryDartId = "distinctio";
                                dartId = "alias";
                                dmaId = "perferendis";
                                kind = "magni";
                                metroCode = "laborum";
                                name = "Josephine Zboncak";
                            }}),
                            add(new Metro() {{
                                countryCode = "HK";
                                countryDartId = "beatae";
                                dartId = "sint";
                                dmaId = "asperiores";
                                kind = "dolor";
                                metroCode = "eos";
                                name = "Leon Turcotte";
                            }}),
                            add(new Metro() {{
                                countryCode = "AL";
                                countryDartId = "quae";
                                dartId = "ad";
                                dmaId = "earum";
                                kind = "esse";
                                metroCode = "corrupti";
                                name = "Kari Paucek PhD";
                            }}),
                            add(new Metro() {{
                                countryCode = "VI";
                                countryDartId = "totam";
                                dartId = "necessitatibus";
                                dmaId = "voluptatibus";
                                kind = "eaque";
                                metroCode = "iure";
                                name = "Ethel Terry PhD";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "ipsa";
                                countryCode = "MY";
                                countryDartId = "cum";
                                id = "355db339-12ce-4024-a534-ce21c081b180";
                                kind = "quas";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "MR";
                                countryDartId = "impedit";
                                dartId = "amet";
                                kind = "accusantium";
                                name = "Gustavo Gislason";
                                regionCode = "voluptates";
                            }}),
                            add(new Region() {{
                                countryCode = "KZ";
                                countryDartId = "molestiae";
                                dartId = "amet";
                                kind = "perspiciatis";
                                name = "Mr. Caleb Gusikowski";
                                regionCode = "necessitatibus";
                            }}),
                        }};
                    }};;
                    id = "nihil";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "iure";
                    }};;
                    kind = "iusto";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "natus";
                                kind = "commodi";
                                languageCode = "vero";
                                name = "Beulah Dooley";
                            }}),
                            add(new Language() {{
                                id = "dicta";
                                kind = "corporis";
                                languageCode = "molestias";
                                name = "Morris Howell";
                            }}),
                            add(new Language() {{
                                id = "voluptatem";
                                kind = "quod";
                                languageCode = "cumque";
                                name = "Lauren Terry";
                            }}),
                            add(new Language() {{
                                id = "accusamus";
                                kind = "minima";
                                languageCode = "itaque";
                                name = "Jennifer Mertz";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "optio";
                    }};;
                    name = "Miranda Feeney";
                    subaccountId = "delectus";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "maxime";
                                dartId = "adipisci";
                                kind = "reiciendis";
                                majorVersion = "deserunt";
                                minorVersion = "fugit";
                                name = "Andy Johnson";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "magni";
                                kind = "nostrum";
                                name = "Brandon Jakubowski";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "CO";
                                countryDartId = "optio";
                                id = "magni";
                                kind = "fuga";
                                name = "Gerardo Hudson";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "eum";
                                kind = "vitae";
                                majorVersion = "placeat";
                                minorVersion = "eius";
                                name = "Earnest Beahan";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "consequuntur";
                                    desktop = false;
                                    kind = "reiciendis";
                                    mobile = false;
                                    name = "Clint Aufderhar";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "impedit";
                                desktop = false;
                                kind = "in";
                                mobile = false;
                                name = "Mae Lubowitz";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "tempore";
                                desktop = false;
                                kind = "quidem";
                                mobile = false;
                                name = "Ruby Kemmer";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "quod";
                                desktop = false;
                                kind = "consequatur";
                                mobile = false;
                                name = "Anita Sauer";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "saepe";
                                kind = "distinctio";
                                name = "Jack Nienow";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "possimus";
                alt = AltEnum.JSON;
                callback = "fuga";
                fields = "quis";
                key = "voluptates";
                oauthToken = "officiis";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "quaerat";
                uploadProtocol = "dolor";
            }};            

            DfareportingTargetingTemplatesPatchResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesPatch(req, new DfareportingTargetingTemplatesPatchSecurity("magnam", "possimus") {{
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

            DfareportingTargetingTemplatesUpdateRequest req = new DfareportingTargetingTemplatesUpdateRequest("esse") {{
                dollarXgafv = XgafvEnum.ONE;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "ratione";
                    advertiserId = "repellendus";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "vero";
                        etag = "provident";
                        id = "c8295624-67a2-449c-8fa9-a5eb840eec16";
                        kind = "libero";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "sequi";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.MONDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(954746),
                            add(740860),
                            add(35710),
                            add(378111),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "BB";
                                countryDartId = "in";
                                dartId = "eum";
                                kind = "cupiditate";
                                metroCode = "alias";
                                metroDmaId = "eos";
                                name = "Juana Gerhold IV";
                                regionCode = "omnis";
                                regionDartId = "sunt";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "SX";
                                dartId = "ea";
                                kind = "hic";
                                name = "Marcos Carroll";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "SV";
                                dartId = "pariatur";
                                kind = "voluptas";
                                name = "Dr. Allan Wilkinson";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "TV";
                                dartId = "voluptates";
                                kind = "sapiente";
                                name = "Randall Mertz";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "SS";
                                dartId = "vel";
                                kind = "a";
                                name = "Stanley West";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "AU";
                                countryDartId = "omnis";
                                dartId = "officiis";
                                dmaId = "exercitationem";
                                kind = "eveniet";
                                metroCode = "quod";
                                name = "Mark Kozey";
                            }}),
                            add(new Metro() {{
                                countryCode = "GS";
                                countryDartId = "veritatis";
                                dartId = "deserunt";
                                dmaId = "accusamus";
                                kind = "ratione";
                                metroCode = "nam";
                                name = "Forrest Haag DDS";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "vitae";
                                countryCode = "SD";
                                countryDartId = "quis";
                                id = "fdfb7c4c-e10d-4318-9356-393e1d7cc9ac";
                                kind = "asperiores";
                            }}),
                            add(new PostalCode() {{
                                code = "consequuntur";
                                countryCode = "RW";
                                countryDartId = "temporibus";
                                id = "b4621661-dd55-4128-a911-ccc8d940f377";
                                kind = "atque";
                            }}),
                            add(new PostalCode() {{
                                code = "architecto";
                                countryCode = "DM";
                                countryDartId = "libero";
                                id = "d355f014-9d58-4abf-b33f-913f3b10cb13";
                                kind = "officiis";
                            }}),
                            add(new PostalCode() {{
                                code = "cum";
                                countryCode = "TG";
                                countryDartId = "quis";
                                id = "2ff95be3-1a2a-47e0-9479-8291d6416a2c";
                                kind = "perspiciatis";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "TH";
                                countryDartId = "quae";
                                dartId = "molestiae";
                                kind = "iste";
                                name = "Sylvia Denesik";
                                regionCode = "sequi";
                            }}),
                            add(new Region() {{
                                countryCode = "GS";
                                countryDartId = "officia";
                                dartId = "debitis";
                                kind = "possimus";
                                name = "Betsy Baumbach";
                                regionCode = "corrupti";
                            }}),
                        }};
                    }};;
                    id = "nobis";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "quas";
                    }};;
                    kind = "ratione";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "blanditiis";
                                kind = "aut";
                                languageCode = "perspiciatis";
                                name = "Clint Predovic";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "magnam";
                    }};;
                    name = "Pat Hane";
                    subaccountId = "quis";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "at";
                                dartId = "illum";
                                kind = "alias";
                                majorVersion = "neque";
                                minorVersion = "sed";
                                name = "Ms. Harvey Gibson I";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "iure";
                                dartId = "molestiae";
                                kind = "cum";
                                majorVersion = "aliquid";
                                minorVersion = "sed";
                                name = "Eula Gusikowski PhD";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "maiores";
                                kind = "voluptate";
                                name = "Charlotte Mohr";
                            }}),
                            add(new ConnectionType() {{
                                id = "quia";
                                kind = "minus";
                                name = "Mrs. Alonzo Metz";
                            }}),
                            add(new ConnectionType() {{
                                id = "eius";
                                kind = "molestiae";
                                name = "Christian Nolan";
                            }}),
                            add(new ConnectionType() {{
                                id = "delectus";
                                kind = "quod";
                                name = "Willie Sawayn";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "HM";
                                countryDartId = "odit";
                                id = "odit";
                                kind = "sunt";
                                name = "Colin Gerhold";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "PK";
                                countryDartId = "occaecati";
                                id = "sit";
                                kind = "dolore";
                                name = "Santos Kutch";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "OM";
                                countryDartId = "minus";
                                id = "quia";
                                kind = "ea";
                                name = "Ms. Horace Becker";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "corrupti";
                                kind = "aliquid";
                                majorVersion = "libero";
                                minorVersion = "illum";
                                name = "Brian Johnston MD";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "accusantium";
                                    desktop = false;
                                    kind = "sapiente";
                                    mobile = false;
                                    name = "Amber Mayer";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "odio";
                                desktop = false;
                                kind = "magni";
                                mobile = false;
                                name = "Faye Crooks";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "itaque";
                                desktop = false;
                                kind = "eos";
                                mobile = false;
                                name = "Alfredo Langworth";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "at";
                                kind = "quasi";
                                name = "Victoria Ritchie";
                            }}),
                            add(new PlatformType() {{
                                id = "corporis";
                                kind = "suscipit";
                                name = "Melba Crist";
                            }}),
                            add(new PlatformType() {{
                                id = "tempora";
                                kind = "iusto";
                                name = "Marilyn Mitchell";
                            }}),
                            add(new PlatformType() {{
                                id = "nam";
                                kind = "repellat";
                                name = "Jasmine Terry";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "consequuntur";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "inventore";
                key = "dolorum";
                oauthToken = "natus";
                prettyPrint = false;
                quotaUser = "odit";
                uploadType = "eius";
                uploadProtocol = "veniam";
            }};            

            DfareportingTargetingTemplatesUpdateResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesUpdate(req, new DfareportingTargetingTemplatesUpdateSecurity("sed", "natus") {{
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
