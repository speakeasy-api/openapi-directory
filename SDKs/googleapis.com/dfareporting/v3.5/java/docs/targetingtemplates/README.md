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

            DfareportingTargetingTemplatesGetRequest req = new DfareportingTargetingTemplatesGetRequest("ducimus", "omnis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "necessitatibus";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "hic";
                key = "rerum";
                oauthToken = "repellendus";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "molestias";
                uploadProtocol = "earum";
            }};            

            DfareportingTargetingTemplatesGetResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesGet(req, new DfareportingTargetingTemplatesGetSecurity("temporibus", "pariatur") {{
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

            DfareportingTargetingTemplatesInsertRequest req = new DfareportingTargetingTemplatesInsertRequest("voluptas") {{
                dollarXgafv = XgafvEnum.TWO;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "ducimus";
                    advertiserId = "a";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "inventore";
                        etag = "reiciendis";
                        id = "5eefd49b-ed6f-4f3f-9950-9e5ecf076451";
                        kind = "deserunt";
                        matchType = DimensionValueMatchTypeEnum.WILDCARD_EXPRESSION;
                        value = "ratione";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                            add(DayPartTargetingDaysOfWeekEnum.SATURDAY),
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(11244),
                            add(817366),
                            add(988564),
                            add(110989),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "GM";
                                countryDartId = "doloribus";
                                dartId = "facere";
                                kind = "tenetur";
                                metroCode = "tempore";
                                metroDmaId = "iusto";
                                name = "Miguel Rowe Jr.";
                                regionCode = "assumenda";
                                regionDartId = "neque";
                            }}),
                            add(new City() {{
                                countryCode = "BG";
                                countryDartId = "corrupti";
                                dartId = "possimus";
                                kind = "sequi";
                                metroCode = "enim";
                                metroDmaId = "voluptas";
                                name = "Erika Dietrich PhD";
                                regionCode = "ducimus";
                                regionDartId = "quisquam";
                            }}),
                            add(new City() {{
                                countryCode = "SD";
                                countryDartId = "omnis";
                                dartId = "mollitia";
                                kind = "quo";
                                metroCode = "asperiores";
                                metroDmaId = "consequuntur";
                                name = "Gustavo Rempel";
                                regionCode = "magni";
                                regionDartId = "dicta";
                            }}),
                            add(new City() {{
                                countryCode = "HR";
                                countryDartId = "suscipit";
                                dartId = "quasi";
                                kind = "nulla";
                                metroCode = "at";
                                metroDmaId = "quis";
                                name = "Joan Crona";
                                regionCode = "omnis";
                                regionDartId = "architecto";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "SI";
                                dartId = "cumque";
                                kind = "minus";
                                name = "Wilfred McGlynn DVM";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "JM";
                                countryDartId = "reprehenderit";
                                dartId = "atque";
                                dmaId = "architecto";
                                kind = "adipisci";
                                metroCode = "libero";
                                name = "Dale Hintz";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "et";
                                countryCode = "EE";
                                countryDartId = "natus";
                                id = "d58abf33-3f91-43f3-b10c-b13ebd52ff95";
                                kind = "libero";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "CR";
                                countryDartId = "illo";
                                dartId = "est";
                                kind = "fugit";
                                name = "Mr. Ron Volkman";
                                regionCode = "voluptate";
                            }}),
                            add(new Region() {{
                                countryCode = "MQ";
                                countryDartId = "molestias";
                                dartId = "explicabo";
                                kind = "sint";
                                name = "Janis Jacobs III";
                                regionCode = "mollitia";
                            }}),
                            add(new Region() {{
                                countryCode = "CI";
                                countryDartId = "quisquam";
                                dartId = "perspiciatis";
                                kind = "molestiae";
                                name = "Eric Kreiger I";
                                regionCode = "qui";
                            }}),
                            add(new Region() {{
                                countryCode = "HK";
                                countryDartId = "adipisci";
                                dartId = "sequi";
                                kind = "corporis";
                                name = "Darrel Schuppe";
                                regionCode = "doloremque";
                            }}),
                        }};
                    }};;
                    id = "impedit";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "ad";
                    }};;
                    kind = "corrupti";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "quas";
                                kind = "ratione";
                                languageCode = "nesciunt";
                                name = "Charles Metz";
                            }}),
                            add(new Language() {{
                                id = "quidem";
                                kind = "accusamus";
                                languageCode = "aliquid";
                                name = "Sandy Veum";
                            }}),
                            add(new Language() {{
                                id = "ullam";
                                kind = "quis";
                                languageCode = "suscipit";
                                name = "Dallas Abbott";
                            }}),
                            add(new Language() {{
                                id = "reiciendis";
                                kind = "in";
                                languageCode = "eius";
                                name = "Marian Buckridge";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "molestiae";
                    }};;
                    name = "Gene Cormier";
                    subaccountId = "magnam";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "perferendis";
                                dartId = "eveniet";
                                kind = "maxime";
                                majorVersion = "maiores";
                                minorVersion = "voluptate";
                                name = "Charlotte Mohr";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "quia";
                                dartId = "minus";
                                kind = "tenetur";
                                majorVersion = "saepe";
                                minorVersion = "perspiciatis";
                                name = "Esther Hermann";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "asperiores";
                                dartId = "nihil";
                                kind = "deserunt";
                                majorVersion = "quis";
                                minorVersion = "consequuntur";
                                name = "Israel Bednar";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "incidunt";
                                kind = "cupiditate";
                                name = "Miss Theresa Connelly";
                            }}),
                            add(new ConnectionType() {{
                                id = "numquam";
                                kind = "adipisci";
                                name = "Mrs. Lula Mayer";
                            }}),
                            add(new ConnectionType() {{
                                id = "doloribus";
                                kind = "blanditiis";
                                name = "Duane Pollich";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "LU";
                                countryDartId = "harum";
                                id = "eaque";
                                kind = "sit";
                                name = "Silvia Bernhard";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "PR";
                                countryDartId = "illum";
                                id = "hic";
                                kind = "doloremque";
                                name = "Whitney Braun DVM";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "incidunt";
                                kind = "sint";
                                majorVersion = "ea";
                                minorVersion = "ullam";
                                name = "Miss Courtney Cummings";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "nulla";
                                    desktop = false;
                                    kind = "saepe";
                                    mobile = false;
                                    name = "Jesse Rath";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "minima";
                                kind = "cum";
                                majorVersion = "tenetur";
                                minorVersion = "at";
                                name = "Jacqueline Fay";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "asperiores";
                                    desktop = false;
                                    kind = "corporis";
                                    mobile = false;
                                    name = "Joyce Wyman";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "tempora";
                                desktop = false;
                                kind = "iusto";
                                mobile = false;
                                name = "Marilyn Mitchell";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "nam";
                                desktop = false;
                                kind = "repellat";
                                mobile = false;
                                name = "Jasmine Terry";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "consequuntur";
                                desktop = false;
                                kind = "repellat";
                                mobile = false;
                                name = "Dennis Pagac";
                            }}),
                            add(new OperatingSystem() {{
                                dartId = "eius";
                                desktop = false;
                                kind = "veniam";
                                mobile = false;
                                name = "Faye Greenfelder";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "similique";
                                kind = "odio";
                                name = "Erma Braun IV";
                            }}),
                            add(new PlatformType() {{
                                id = "iste";
                                kind = "odit";
                                name = "Estelle Hilpert PhD";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "dignissimos";
                alt = AltEnum.PROTO;
                callback = "modi";
                fields = "sed";
                key = "at";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "aliquam";
                uploadProtocol = "commodi";
            }};            

            DfareportingTargetingTemplatesInsertResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesInsert(req, new DfareportingTargetingTemplatesInsertSecurity("a", "repudiandae") {{
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

            DfareportingTargetingTemplatesListRequest req = new DfareportingTargetingTemplatesListRequest("molestias") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maiores";
                advertiserId = "assumenda";
                alt = AltEnum.MEDIA;
                callback = "provident";
                fields = "officiis";
                ids = new String[]{{
                    add("eveniet"),
                    add("et"),
                    add("itaque"),
                    add("quo"),
                }};
                key = "corporis";
                maxResults = 41450L;
                oauthToken = "quaerat";
                pageToken = "beatae";
                prettyPrint = false;
                quotaUser = "illo";
                searchString = "placeat";
                sortField = DfareportingTargetingTemplatesListSortFieldEnum.NAME;
                sortOrder = DfareportingTargetingTemplatesListSortOrderEnum.DESCENDING;
                uploadType = "ab";
                uploadProtocol = "perspiciatis";
            }};            

            DfareportingTargetingTemplatesListResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesList(req, new DfareportingTargetingTemplatesListSecurity("molestias", "voluptates") {{
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

            DfareportingTargetingTemplatesPatchRequest req = new DfareportingTargetingTemplatesPatchRequest("ad", "nisi") {{
                dollarXgafv = XgafvEnum.ONE;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "alias";
                    advertiserId = "hic";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "illo";
                        etag = "quibusdam";
                        id = "bc4d9673-32bb-40ca-abf1-94be37b90c9d";
                        kind = "placeat";
                        matchType = DimensionValueMatchTypeEnum.EXACT;
                        value = "eaque";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.TUESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(691991),
                            add(944242),
                            add(676693),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "HN";
                                countryDartId = "deserunt";
                                dartId = "nisi";
                                kind = "officia";
                                metroCode = "eum";
                                metroDmaId = "commodi";
                                name = "Dana Grant";
                                regionCode = "doloribus";
                                regionDartId = "maxime";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "KE";
                                dartId = "assumenda";
                                kind = "est";
                                name = "Damon Robel";
                                sslEnabled = false;
                            }}),
                            add(new Country() {{
                                countryCode = "GA";
                                dartId = "facilis";
                                kind = "voluptatum";
                                name = "Lois Goldner";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "IO";
                                countryDartId = "fugit";
                                dartId = "consequuntur";
                                dmaId = "commodi";
                                kind = "ad";
                                metroCode = "ut";
                                name = "Don Becker";
                            }}),
                            add(new Metro() {{
                                countryCode = "CU";
                                countryDartId = "nemo";
                                dartId = "odio";
                                dmaId = "earum";
                                kind = "et";
                                metroCode = "labore";
                                name = "Abel Moen";
                            }}),
                            add(new Metro() {{
                                countryCode = "CW";
                                countryDartId = "sed";
                                dartId = "necessitatibus";
                                dmaId = "impedit";
                                kind = "quaerat";
                                metroCode = "officiis";
                                name = "Geraldine Kerluke";
                            }}),
                            add(new Metro() {{
                                countryCode = "TZ";
                                countryDartId = "praesentium";
                                dartId = "rerum";
                                dmaId = "eaque";
                                kind = "veniam";
                                metroCode = "reiciendis";
                                name = "Raul Mante";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "praesentium";
                                countryCode = "FK";
                                countryDartId = "totam";
                                id = "92ca55b9-141b-4194-b8b4-b4d8f07d4981";
                                kind = "veritatis";
                            }}),
                            add(new PostalCode() {{
                                code = "voluptatibus";
                                countryCode = "GM";
                                countryDartId = "labore";
                                id = "539d5ba7-7ee7-4100-b744-56ef9ec58b95";
                                kind = "cumque";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "VA";
                                countryDartId = "ipsa";
                                dartId = "expedita";
                                kind = "explicabo";
                                name = "Blanca Hermiston";
                                regionCode = "impedit";
                            }}),
                            add(new Region() {{
                                countryCode = "AQ";
                                countryDartId = "voluptates";
                                dartId = "accusamus";
                                kind = "quaerat";
                                name = "Ms. Glen Ferry Jr.";
                                regionCode = "a";
                            }}),
                        }};
                    }};;
                    id = "ab";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "ipsum";
                    }};;
                    kind = "quos";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "amet";
                                kind = "modi";
                                languageCode = "eos";
                                name = "Essie Kunde";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "doloremque";
                    }};;
                    name = "Valerie Greenfelder";
                    subaccountId = "sapiente";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "aliquam";
                                dartId = "voluptatibus";
                                kind = "omnis";
                                majorVersion = "explicabo";
                                minorVersion = "totam";
                                name = "Mr. Tricia Baumbach";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "distinctio";
                                dartId = "dolores";
                                kind = "possimus";
                                majorVersion = "porro";
                                minorVersion = "illo";
                                name = "Whitney Smith";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "aliquid";
                                dartId = "tenetur";
                                kind = "doloribus";
                                majorVersion = "reprehenderit";
                                minorVersion = "nemo";
                                name = "Alice Rippin";
                            }}),
                            add(new Browser() {{
                                browserVersionId = "similique";
                                dartId = "officia";
                                kind = "tempore";
                                majorVersion = "ipsa";
                                minorVersion = "iste";
                                name = "Guillermo Ryan";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "accusamus";
                                kind = "alias";
                                name = "Nancy Rodriguez";
                            }}),
                            add(new ConnectionType() {{
                                id = "modi";
                                kind = "deserunt";
                                name = "Sonia Leannon";
                            }}),
                            add(new ConnectionType() {{
                                id = "dolor";
                                kind = "accusamus";
                                name = "Charlene Skiles Jr.";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "DZ";
                                countryDartId = "officiis";
                                id = "minus";
                                kind = "inventore";
                                name = "Mr. Jacqueline Gerhold PhD";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "SI";
                                countryDartId = "facere";
                                id = "error";
                                kind = "ea";
                                name = "Julia Keeling";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "FK";
                                countryDartId = "rerum";
                                id = "praesentium";
                                kind = "corporis";
                                name = "Stacy Lubowitz";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "non";
                                kind = "doloremque";
                                majorVersion = "iure";
                                minorVersion = "natus";
                                name = "Erik Crist";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "in";
                                    desktop = false;
                                    kind = "minima";
                                    mobile = false;
                                    name = "Sheri Howe";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "itaque";
                                desktop = false;
                                kind = "ipsum";
                                mobile = false;
                                name = "Sue Franecki";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "ipsum";
                                kind = "reprehenderit";
                                name = "Cesar Waters Sr.";
                            }}),
                            add(new PlatformType() {{
                                id = "nobis";
                                kind = "fugit";
                                name = "Kayla Shanahan";
                            }}),
                            add(new PlatformType() {{
                                id = "rerum";
                                kind = "quaerat";
                                name = "Karen Kautzer";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "perspiciatis";
                alt = AltEnum.JSON;
                callback = "magnam";
                fields = "consectetur";
                key = "vitae";
                oauthToken = "voluptatem";
                prettyPrint = false;
                quotaUser = "quas";
                uploadType = "iusto";
                uploadProtocol = "rerum";
            }};            

            DfareportingTargetingTemplatesPatchResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesPatch(req, new DfareportingTargetingTemplatesPatchSecurity("iusto", "error") {{
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

            DfareportingTargetingTemplatesUpdateRequest req = new DfareportingTargetingTemplatesUpdateRequest("laboriosam") {{
                dollarXgafv = XgafvEnum.ONE;
                targetingTemplate = new TargetingTemplate() {{
                    accountId = "quasi";
                    advertiserId = "debitis";
                    advertiserIdDimensionValue = new DimensionValue() {{
                        dimensionName = "nihil";
                        etag = "iure";
                        id = "914bf756-1835-4e38-afcf-584ac5cc08d9";
                        kind = "in";
                        matchType = DimensionValueMatchTypeEnum.CONTAINS;
                        value = "quasi";
                    }};;
                    dayPartTargeting = new DayPartTargeting() {{
                        daysOfWeek = new org.openapis.openapi.models.shared.DayPartTargetingDaysOfWeekEnum[]{{
                            add(DayPartTargetingDaysOfWeekEnum.FRIDAY),
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                            add(DayPartTargetingDaysOfWeekEnum.WEDNESDAY),
                        }};
                        hoursOfDay = new Integer[]{{
                            add(929086),
                        }};
                        userLocalTime = false;
                    }};;
                    geoTargeting = new GeoTargeting() {{
                        cities = new org.openapis.openapi.models.shared.City[]{{
                            add(new City() {{
                                countryCode = "SJ";
                                countryDartId = "impedit";
                                dartId = "magni";
                                kind = "dolores";
                                metroCode = "impedit";
                                metroDmaId = "iusto";
                                name = "Lorraine Green";
                                regionCode = "adipisci";
                                regionDartId = "vitae";
                            }}),
                        }};
                        countries = new org.openapis.openapi.models.shared.Country[]{{
                            add(new Country() {{
                                countryCode = "PY";
                                dartId = "quam";
                                kind = "soluta";
                                name = "Dawn Reynolds";
                                sslEnabled = false;
                            }}),
                        }};
                        excludeCountries = false;
                        metros = new org.openapis.openapi.models.shared.Metro[]{{
                            add(new Metro() {{
                                countryCode = "MX";
                                countryDartId = "distinctio";
                                dartId = "excepturi";
                                dmaId = "alias";
                                kind = "quisquam";
                                metroCode = "expedita";
                                name = "Ada Johns";
                            }}),
                        }};
                        postalCodes = new org.openapis.openapi.models.shared.PostalCode[]{{
                            add(new PostalCode() {{
                                code = "repellat";
                                countryCode = "NL";
                                countryDartId = "rerum";
                                id = "9b364dd5-d055-4f5f-bbe3-832701ce8685";
                                kind = "dolorum";
                            }}),
                            add(new PostalCode() {{
                                code = "voluptate";
                                countryCode = "GG";
                                countryDartId = "repudiandae";
                                id = "ee1438c6-d008-49cb-82b6-3a112807c634";
                                kind = "iure";
                            }}),
                            add(new PostalCode() {{
                                code = "eligendi";
                                countryCode = "BI";
                                countryDartId = "deserunt";
                                id = "896c41f3-47a8-4f8b-8a6c-0ad6539faab0";
                                kind = "cupiditate";
                            }}),
                        }};
                        regions = new org.openapis.openapi.models.shared.Region[]{{
                            add(new Region() {{
                                countryCode = "PF";
                                countryDartId = "doloremque";
                                dartId = "vero";
                                kind = "nulla";
                                name = "Rodney Rosenbaum";
                                regionCode = "nesciunt";
                            }}),
                            add(new Region() {{
                                countryCode = "TM";
                                countryDartId = "officia";
                                dartId = "molestias";
                                kind = "mollitia";
                                name = "Noel Reichel";
                                regionCode = "repellendus";
                            }}),
                        }};
                    }};;
                    id = "voluptatibus";
                    keyValueTargetingExpression = new KeyValueTargetingExpression() {{
                        expression = "optio";
                    }};;
                    kind = "alias";
                    languageTargeting = new LanguageTargeting() {{
                        languages = new org.openapis.openapi.models.shared.Language[]{{
                            add(new Language() {{
                                id = "laudantium";
                                kind = "fugiat";
                                languageCode = "quas";
                                name = "Crystal Connelly";
                            }}),
                            add(new Language() {{
                                id = "amet";
                                kind = "explicabo";
                                languageCode = "dolore";
                                name = "Boyd Nikolaus";
                            }}),
                            add(new Language() {{
                                id = "sunt";
                                kind = "iure";
                                languageCode = "placeat";
                                name = "Peter Kreiger";
                            }}),
                        }};
                    }};;
                    listTargetingExpression = new ListTargetingExpression() {{
                        expression = "magnam";
                    }};;
                    name = "Ms. Rosemarie Fay";
                    subaccountId = "molestias";
                    technologyTargeting = new TechnologyTargeting() {{
                        browsers = new org.openapis.openapi.models.shared.Browser[]{{
                            add(new Browser() {{
                                browserVersionId = "adipisci";
                                dartId = "nulla";
                                kind = "et";
                                majorVersion = "itaque";
                                minorVersion = "dolorem";
                                name = "Ken Streich";
                            }}),
                        }};
                        connectionTypes = new org.openapis.openapi.models.shared.ConnectionType[]{{
                            add(new ConnectionType() {{
                                id = "esse";
                                kind = "aperiam";
                                name = "Timothy Windler";
                            }}),
                            add(new ConnectionType() {{
                                id = "quos";
                                kind = "in";
                                name = "Phil Franecki";
                            }}),
                        }};
                        mobileCarriers = new org.openapis.openapi.models.shared.MobileCarrier[]{{
                            add(new MobileCarrier() {{
                                countryCode = "AO";
                                countryDartId = "ab";
                                id = "perspiciatis";
                                kind = "inventore";
                                name = "Marty Emard";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "BT";
                                countryDartId = "dicta";
                                id = "molestias";
                                kind = "fugit";
                                name = "Harriet Grimes";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "GA";
                                countryDartId = "exercitationem";
                                id = "unde";
                                kind = "temporibus";
                                name = "Eula Armstrong";
                            }}),
                            add(new MobileCarrier() {{
                                countryCode = "IL";
                                countryDartId = "vero";
                                id = "fugit";
                                kind = "vero";
                                name = "Elvira Windler";
                            }}),
                        }};
                        operatingSystemVersions = new org.openapis.openapi.models.shared.OperatingSystemVersion[]{{
                            add(new OperatingSystemVersion() {{
                                id = "sapiente";
                                kind = "dignissimos";
                                majorVersion = "atque";
                                minorVersion = "eius";
                                name = "Gerard Predovic";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "fugit";
                                    desktop = false;
                                    kind = "debitis";
                                    mobile = false;
                                    name = "Noel Vandervort";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "ab";
                                kind = "architecto";
                                majorVersion = "placeat";
                                minorVersion = "nemo";
                                name = "Desiree Pacocha";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "cumque";
                                    desktop = false;
                                    kind = "tempore";
                                    mobile = false;
                                    name = "Nick Wolf";
                                }};
                            }}),
                            add(new OperatingSystemVersion() {{
                                id = "incidunt";
                                kind = "porro";
                                majorVersion = "quibusdam";
                                minorVersion = "laboriosam";
                                name = "Harvey Green";
                                operatingSystem = new OperatingSystem() {{
                                    dartId = "numquam";
                                    desktop = false;
                                    kind = "corrupti";
                                    mobile = false;
                                    name = "Marvin Osinski Sr.";
                                }};
                            }}),
                        }};
                        operatingSystems = new org.openapis.openapi.models.shared.OperatingSystem[]{{
                            add(new OperatingSystem() {{
                                dartId = "sequi";
                                desktop = false;
                                kind = "voluptatem";
                                mobile = false;
                                name = "Jaime Crona";
                            }}),
                        }};
                        platformTypes = new org.openapis.openapi.models.shared.PlatformType[]{{
                            add(new PlatformType() {{
                                id = "quibusdam";
                                kind = "odio";
                                name = "Leona Bailey";
                            }}),
                            add(new PlatformType() {{
                                id = "voluptates";
                                kind = "quaerat";
                                name = "Miss Edgar Kutch";
                            }}),
                            add(new PlatformType() {{
                                id = "omnis";
                                kind = "vero";
                                name = "Rhonda Cronin";
                            }}),
                        }};
                    }};;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "eveniet";
                key = "nam";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "aliquam";
                uploadType = "tempore";
                uploadProtocol = "rem";
            }};            

            DfareportingTargetingTemplatesUpdateResponse res = sdk.targetingTemplates.dfareportingTargetingTemplatesUpdate(req, new DfareportingTargetingTemplatesUpdateSecurity("qui", "repudiandae") {{
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
