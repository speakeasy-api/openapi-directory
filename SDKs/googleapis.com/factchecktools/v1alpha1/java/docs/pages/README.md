# pages

### Available Operations

* [factchecktoolsPagesCreate](#factchecktoolspagescreate) - Create `ClaimReview` markup on a page.
* [factchecktoolsPagesDelete](#factchecktoolspagesdelete) - Delete all `ClaimReview` markup on a page.
* [factchecktoolsPagesGet](#factchecktoolspagesget) - Get all `ClaimReview` markup on a page.
* [factchecktoolsPagesList](#factchecktoolspageslist) - List the `ClaimReview` markup pages for a specific URL or for an organization.
* [factchecktoolsPagesUpdate](#factchecktoolspagesupdate) - Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

## factchecktoolsPagesCreate

Create `ClaimReview` markup on a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsPagesCreateRequest;
import org.openapis.openapi.models.operations.FactchecktoolsPagesCreateResponse;
import org.openapis.openapi.models.operations.FactchecktoolsPagesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsPagesCreateRequest req = new FactchecktoolsPagesCreateRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage() {{
                    claimReviewAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor() {{
                        imageUrl = "sapiente";
                        name = "Fred Strosin";
                    }};;
                    claimReviewMarkups = new org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[]{{
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("quod"),
                                add("esse"),
                                add("totam"),
                                add("porro"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "dolorum";
                                jobTitle = "Direct Assurance Orchestrator";
                                name = "Wayne Lind";
                                sameAs = "totam";
                            }};
                            claimDate = "beatae";
                            claimFirstAppearance = "commodi";
                            claimLocation = "molestiae";
                            claimReviewed = "modi";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 186332;
                                imageUrl = "impedit";
                                ratingExplanation = "cum";
                                ratingValue = 456150;
                                textualRating = "ipsum";
                                worstRating = 568434;
                            }};
                            url = "aspernatur";
                        }}),
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("ad"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "natus";
                                jobTitle = "Corporate Communications Manager";
                                name = "Lester Welch";
                                sameAs = "in";
                            }};
                            claimDate = "corporis";
                            claimFirstAppearance = "iste";
                            claimLocation = "iure";
                            claimReviewed = "saepe";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 697631;
                                imageUrl = "architecto";
                                ratingExplanation = "ipsa";
                                ratingValue = 969810;
                                textualRating = "est";
                                worstRating = 653140;
                            }};
                            url = "laborum";
                        }}),
                    }};
                    name = "Connie Herzog";
                    pageUrl = "enim";
                    publishDate = "omnis";
                    versionId = "nemo";
                }};;
                accessToken = "minima";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "iure";
                key = "culpa";
                oauthToken = "doloribus";
                prettyPrint = false;
                quotaUser = "sapiente";
                uploadType = "architecto";
                uploadProtocol = "mollitia";
            }};            

            FactchecktoolsPagesCreateResponse res = sdk.pages.factchecktoolsPagesCreate(req, new FactchecktoolsPagesCreateSecurity("dolorem", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## factchecktoolsPagesDelete

Delete all `ClaimReview` markup on a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsPagesDeleteRequest;
import org.openapis.openapi.models.operations.FactchecktoolsPagesDeleteResponse;
import org.openapis.openapi.models.operations.FactchecktoolsPagesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsPagesDeleteRequest req = new FactchecktoolsPagesDeleteRequest("consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "mollitia";
                alt = AltEnum.MEDIA;
                callback = "numquam";
                fields = "commodi";
                key = "quam";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "error";
                uploadProtocol = "quia";
            }};            

            FactchecktoolsPagesDeleteResponse res = sdk.pages.factchecktoolsPagesDelete(req, new FactchecktoolsPagesDeleteSecurity("quis", "vitae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## factchecktoolsPagesGet

Get all `ClaimReview` markup on a page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsPagesGetRequest;
import org.openapis.openapi.models.operations.FactchecktoolsPagesGetResponse;
import org.openapis.openapi.models.operations.FactchecktoolsPagesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsPagesGetRequest req = new FactchecktoolsPagesGetRequest("laborum") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "enim";
                alt = AltEnum.JSON;
                callback = "quo";
                fields = "sequi";
                key = "tenetur";
                oauthToken = "ipsam";
                prettyPrint = false;
                quotaUser = "id";
                uploadType = "possimus";
                uploadProtocol = "aut";
            }};            

            FactchecktoolsPagesGetResponse res = sdk.pages.factchecktoolsPagesGet(req, new FactchecktoolsPagesGetSecurity("quasi", "error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## factchecktoolsPagesList

List the `ClaimReview` markup pages for a specific URL or for an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsPagesListRequest;
import org.openapis.openapi.models.operations.FactchecktoolsPagesListResponse;
import org.openapis.openapi.models.operations.FactchecktoolsPagesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsPagesListRequest req = new FactchecktoolsPagesListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                offset = 509624L;
                organization = "voluptatibus";
                pageSize = 55714L;
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "voluptate";
                uploadType = "cum";
                uploadProtocol = "perferendis";
                url = "doloremque";
            }};            

            FactchecktoolsPagesListResponse res = sdk.pages.factchecktoolsPagesList(req, new FactchecktoolsPagesListSecurity("reprehenderit", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## factchecktoolsPagesUpdate

Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FactchecktoolsPagesUpdateRequest;
import org.openapis.openapi.models.operations.FactchecktoolsPagesUpdateResponse;
import org.openapis.openapi.models.operations.FactchecktoolsPagesUpdateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup;
import org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FactchecktoolsPagesUpdateRequest req = new FactchecktoolsPagesUpdateRequest("maiores") {{
                dollarXgafv = XgafvEnum.ONE;
                googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage() {{
                    claimReviewAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor() {{
                        imageUrl = "corporis";
                        name = "Heidi Carter";
                    }};;
                    claimReviewMarkups = new org.openapis.openapi.models.shared.GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[]{{
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("repudiandae"),
                                add("quae"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "ipsum";
                                jobTitle = "International Infrastructure Planner";
                                name = "Joel Lang";
                                sameAs = "quasi";
                            }};
                            claimDate = "repudiandae";
                            claimFirstAppearance = "sint";
                            claimLocation = "veritatis";
                            claimReviewed = "itaque";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 277718;
                                imageUrl = "enim";
                                ratingExplanation = "consequatur";
                                ratingValue = 667411;
                                textualRating = "quibusdam";
                                worstRating = 131797;
                            }};
                            url = "deserunt";
                        }}),
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("quibusdam"),
                                add("labore"),
                                add("modi"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "qui";
                                jobTitle = "Regional Intranet Designer";
                                name = "Louise Simonis Sr.";
                                sameAs = "dolorum";
                            }};
                            claimDate = "excepturi";
                            claimFirstAppearance = "tempora";
                            claimLocation = "facilis";
                            claimReviewed = "tempore";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 288476;
                                imageUrl = "delectus";
                                ratingExplanation = "eum";
                                ratingValue = 248753;
                                textualRating = "eligendi";
                                worstRating = 576157;
                            }};
                            url = "aliquid";
                        }}),
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("necessitatibus"),
                                add("sint"),
                                add("officia"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "dolor";
                                jobTitle = "Human Usability Developer";
                                name = "Arlene Stamm";
                                sameAs = "dicta";
                            }};
                            claimDate = "magnam";
                            claimFirstAppearance = "cumque";
                            claimLocation = "facere";
                            claimReviewed = "ea";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 396506;
                                imageUrl = "laborum";
                                ratingExplanation = "accusamus";
                                ratingValue = 249796;
                                textualRating = "occaecati";
                                worstRating = 313218;
                            }};
                            url = "accusamus";
                        }}),
                        add(new GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup() {{
                            claimAppearances = new String[]{{
                                add("quidem"),
                                add("provident"),
                                add("nam"),
                                add("id"),
                            }};
                            claimAuthor = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor() {{
                                imageUrl = "blanditiis";
                                jobTitle = "Global Usability Manager";
                                name = "Tyler Kassulke";
                                sameAs = "molestiae";
                            }};
                            claimDate = "perferendis";
                            claimFirstAppearance = "nihil";
                            claimLocation = "magnam";
                            claimReviewed = "distinctio";
                            rating = new GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating() {{
                                bestRating = 660174;
                                imageUrl = "labore";
                                ratingExplanation = "labore";
                                ratingValue = 383462;
                                textualRating = "natus";
                                worstRating = 749170;
                            }};
                            url = "eum";
                        }}),
                    }};
                    name = "Brandon Brakus V";
                    pageUrl = "ullam";
                    publishDate = "provident";
                    versionId = "quos";
                }};;
                accessToken = "sint";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "reiciendis";
                key = "mollitia";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "eum";
                uploadType = "dolor";
                uploadProtocol = "necessitatibus";
            }};            

            FactchecktoolsPagesUpdateResponse res = sdk.pages.factchecktoolsPagesUpdate(req, new FactchecktoolsPagesUpdateSecurity("odit", "nemo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
