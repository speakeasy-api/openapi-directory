# soundEffects

### Available Operations

* [downloadSfx](#downloadsfx) - Download sound effects
* [getSfxDetails](#getsfxdetails) - Get details about sound effects
* [getSfxLicenseList](#getsfxlicenselist) - List sound effects licenses
* [getSfxListDetails](#getsfxlistdetails) - List details about sound effects
* [licensesSFX](#licensessfx) - License sound effects
* [searchSFX](#searchsfx) - Search for sound effects

## downloadSfx

This endpoint redownloads sound effects that you have already received a license for. The download links in the response are valid for 8 hours.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DownloadSfxRequest;
import org.openapis.openapi.models.operations.DownloadSfxResponse;
import org.openapis.openapi.models.operations.DownloadSfxSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DownloadSfxRequest req = new DownloadSfxRequest("doloribus");            

            DownloadSfxResponse res = sdk.soundEffects.downloadSfx(req, new DownloadSfxSecurity("fugiat") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sfxUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSfxDetails

This endpoint shows information about a sound effect.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSfxDetailsLibraryEnum;
import org.openapis.openapi.models.operations.GetSfxDetailsRequest;
import org.openapis.openapi.models.operations.GetSfxDetailsResponse;
import org.openapis.openapi.models.operations.GetSfxDetailsSecurity;
import org.openapis.openapi.models.operations.GetSfxDetailsViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSfxDetailsRequest req = new GetSfxDetailsRequest(668577L) {{
                language = LanguageEnum.CS;
                library = GetSfxDetailsLibraryEnum.PREMIUMBEAT;
                searchId = "velit";
                view = GetSfxDetailsViewEnum.MINIMAL;
            }};            

            GetSfxDetailsResponse res = sdk.soundEffects.getSfxDetails(req, new GetSfxDetailsSecurity() {{
                basic = new SchemeBasic("nesciunt", "similique") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.sfx != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSfxLicenseList

This endpoint lists existing licenses.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSfxLicenseListDownloadAvailabilityEnum;
import org.openapis.openapi.models.operations.GetSfxLicenseListRequest;
import org.openapis.openapi.models.operations.GetSfxLicenseListResponse;
import org.openapis.openapi.models.operations.GetSfxLicenseListSecurity;
import org.openapis.openapi.models.operations.GetSfxLicenseListSortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSfxLicenseListRequest req = new GetSfxLicenseListRequest() {{
                downloadAvailability = GetSfxLicenseListDownloadAvailabilityEnum.ALL;
                endDate = OffsetDateTime.parse("2021-11-29T06:44:11.905Z");
                license = "doloribus";
                licenseId = "possimus";
                page = 603323L;
                perPage = 275425L;
                sfxId = "explicabo";
                sort = GetSfxLicenseListSortEnum.NEWEST;
                startDate = OffsetDateTime.parse("2021-06-24T03:37:44.417Z");
                teamHistory = false;
                username = "Abby41";
            }};            

            GetSfxLicenseListResponse res = sdk.soundEffects.getSfxLicenseList(req, new GetSfxLicenseListSecurity("sapiente") {{
                customerAccessCode = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.downloadHistoryDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSfxListDetails

This endpoint shows information about sound effects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSfxListDetailsLibraryEnum;
import org.openapis.openapi.models.operations.GetSfxListDetailsRequest;
import org.openapis.openapi.models.operations.GetSfxListDetailsResponse;
import org.openapis.openapi.models.operations.GetSfxListDetailsSecurity;
import org.openapis.openapi.models.operations.GetSfxListDetailsViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSfxListDetailsRequest req = new GetSfxListDetailsRequest(                new String[]{{
                                add("veniam"),
                            }}) {{
                language = LanguageEnum.CS;
                library = GetSfxListDetailsLibraryEnum.PREMIUMBEAT;
                searchId = "officia";
                view = GetSfxListDetailsViewEnum.FULL;
            }};            

            GetSfxListDetailsResponse res = sdk.soundEffects.getSfxListDetails(req, new GetSfxListDetailsSecurity() {{
                basic = new SchemeBasic("ut", "numquam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.sfxDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## licensesSFX

This endpoint licenses sounds effect assets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LicensesSFXResponse;
import org.openapis.openapi.models.operations.LicensesSFXSecurity;
import org.openapis.openapi.models.shared.LicenseSFX;
import org.openapis.openapi.models.shared.LicenseSFXAudioLayoutEnum;
import org.openapis.openapi.models.shared.LicenseSFXFormatEnum;
import org.openapis.openapi.models.shared.LicenseSFXRequest;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LicenseSFXRequest req = new LicenseSFXRequest(                new org.openapis.openapi.models.shared.LicenseSFX[]{{
                                add(new LicenseSFX("minus", "ab") {{
                                    audioLayout = LicenseSFXAudioLayoutEnum.AMBISONIC;
                                    format = LicenseSFXFormatEnum.MP3;
                                    searchId = "in";
                                    sfxId = "minima";
                                    subscriptionId = "ex";
                                }}),
                                add(new LicenseSFX("ducimus", "fuga") {{
                                    audioLayout = LicenseSFXAudioLayoutEnum.AMBISONIC;
                                    format = LicenseSFXFormatEnum.MP3;
                                    searchId = "nisi";
                                    sfxId = "quisquam";
                                    subscriptionId = "dolor";
                                }}),
                                add(new LicenseSFX("incidunt", "adipisci") {{
                                    audioLayout = LicenseSFXAudioLayoutEnum.AMBISONIC;
                                    format = LicenseSFXFormatEnum.WAV;
                                    searchId = "qui";
                                    sfxId = "aliquid";
                                    subscriptionId = "magni";
                                }}),
                                add(new LicenseSFX("impedit", "sit") {{
                                    audioLayout = LicenseSFXAudioLayoutEnum.FIVE1;
                                    format = LicenseSFXFormatEnum.WAV;
                                    searchId = "exercitationem";
                                    sfxId = "expedita";
                                    subscriptionId = "facilis";
                                }}),
                            }});            

            LicensesSFXResponse res = sdk.soundEffects.licensesSFX(req, new LicensesSFXSecurity() {{
                basic = new SchemeBasic("nemo", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.licenseSFXResultDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchSFX

This endpoint searches for sound effects. If you specify more than one search parameter, the API uses an AND condition.

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchSFXRequest;
import org.openapis.openapi.models.operations.SearchSFXResponse;
import org.openapis.openapi.models.operations.SearchSFXSecurity;
import org.openapis.openapi.models.operations.SearchSFXSortEnum;
import org.openapis.openapi.models.operations.SearchSFXViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchSFXRequest req = new SearchSFXRequest() {{
                addedDate = LocalDate.parse("2022-10-08");
                addedDateEnd = LocalDate.parse("2022-06-18");
                addedDateStart = LocalDate.parse("2022-03-14");
                duration = 932250L;
                durationFrom = 955569L;
                durationTo = 788661L;
                language = LanguageEnum.CS;
                page = 316550L;
                perPage = 987759L;
                query = "assumenda";
                safe = false;
                sort = SearchSFXSortEnum.OLDEST;
                view = SearchSFXViewEnum.MINIMAL;
            }};            

            SearchSFXResponse res = sdk.soundEffects.searchSFX(req, new SearchSFXSecurity() {{
                basic = new SchemeBasic("alias", "culpa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.sfxSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
