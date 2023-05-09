# projects

### Available Operations

* [speechProjectsLocationsCustomClassesCreate](#speechprojectslocationscustomclassescreate) - Create a custom class.
* [speechProjectsLocationsCustomClassesList](#speechprojectslocationscustomclasseslist) - List custom classes.
* [speechProjectsLocationsPhraseSetsCreate](#speechprojectslocationsphrasesetscreate) - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
* [speechProjectsLocationsPhraseSetsDelete](#speechprojectslocationsphrasesetsdelete) - Delete a phrase set.
* [speechProjectsLocationsPhraseSetsGet](#speechprojectslocationsphrasesetsget) - Get a phrase set.
* [speechProjectsLocationsPhraseSetsList](#speechprojectslocationsphrasesetslist) - List phrase sets.
* [speechProjectsLocationsPhraseSetsPatch](#speechprojectslocationsphrasesetspatch) - Update a phrase set.

## speechProjectsLocationsCustomClassesCreate

Create a custom class.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesCreateRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesCreateResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ClassItem;
import org.openapis.openapi.models.shared.CreateCustomClassRequestInput;
import org.openapis.openapi.models.shared.CustomClassInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsCustomClassesCreateRequest req = new SpeechProjectsLocationsCustomClassesCreateRequest("porro") {{
                dollarXgafv = XgafvEnum.TWO;
                createCustomClassRequestInput = new CreateCustomClassRequestInput() {{
                    customClass = new CustomClassInput() {{
                        customClassId = "dicta";
                        items = new org.openapis.openapi.models.shared.ClassItem[]{{
                            add(new ClassItem() {{
                                value = "officia";
                            }}),
                            add(new ClassItem() {{
                                value = "occaecati";
                            }}),
                            add(new ClassItem() {{
                                value = "fugit";
                            }}),
                        }};
                        name = "Irvin Rosenbaum III";
                    }};;
                    customClassId = "molestiae";
                }};;
                accessToken = "modi";
                alt = AltEnum.JSON;
                callback = "impedit";
                fields = "cum";
                key = "esse";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "aspernatur";
                uploadProtocol = "perferendis";
            }};            

            SpeechProjectsLocationsCustomClassesCreateResponse res = sdk.projects.speechProjectsLocationsCustomClassesCreate(req, new SpeechProjectsLocationsCustomClassesCreateSecurity("ad", "natus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.customClass != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsCustomClassesList

List custom classes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesListRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesListResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsCustomClassesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsCustomClassesListRequest req = new SpeechProjectsLocationsCustomClassesListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.MEDIA;
                callback = "laboriosam";
                fields = "hic";
                key = "saepe";
                oauthToken = "fuga";
                pageSize = 449950L;
                pageToken = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                uploadType = "iure";
                uploadProtocol = "saepe";
            }};            

            SpeechProjectsLocationsCustomClassesListResponse res = sdk.projects.speechProjectsLocationsCustomClassesList(req, new SpeechProjectsLocationsCustomClassesListSecurity("quidem", "architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomClassesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsPhraseSetsCreate

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsCreateRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsCreateResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CreatePhraseSetRequestInput;
import org.openapis.openapi.models.shared.Phrase;
import org.openapis.openapi.models.shared.PhraseSetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsPhraseSetsCreateRequest req = new SpeechProjectsLocationsPhraseSetsCreateRequest("ipsa") {{
                dollarXgafv = XgafvEnum.TWO;
                createPhraseSetRequestInput = new CreatePhraseSetRequestInput() {{
                    phraseSet = new PhraseSetInput() {{
                        boost = 6667.67;
                        name = "Cameron Dach";
                        phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                            add(new Phrase() {{
                                boost = 7506.86;
                                value = "enim";
                            }}),
                        }};
                    }};;
                    phraseSetId = "omnis";
                }};;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "excepturi";
                fields = "accusantium";
                key = "iure";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "doloribus";
                uploadType = "sapiente";
                uploadProtocol = "architecto";
            }};            

            SpeechProjectsLocationsPhraseSetsCreateResponse res = sdk.projects.speechProjectsLocationsPhraseSetsCreate(req, new SpeechProjectsLocationsPhraseSetsCreateSecurity("mollitia", "dolorem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.phraseSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsPhraseSetsDelete

Delete a phrase set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsDeleteRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsDeleteResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsPhraseSetsDeleteRequest req = new SpeechProjectsLocationsPhraseSetsDeleteRequest("culpa") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellat";
                alt = AltEnum.MEDIA;
                callback = "occaecati";
                fields = "numquam";
                key = "commodi";
                oauthToken = "quam";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "velit";
                uploadProtocol = "error";
            }};            

            SpeechProjectsLocationsPhraseSetsDeleteResponse res = sdk.projects.speechProjectsLocationsPhraseSetsDelete(req, new SpeechProjectsLocationsPhraseSetsDeleteSecurity("quia", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsPhraseSetsGet

Get a phrase set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsGetRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsGetResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsPhraseSetsGetRequest req = new SpeechProjectsLocationsPhraseSetsGetRequest("vitae") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.JSON;
                callback = "odit";
                fields = "quo";
                key = "sequi";
                oauthToken = "tenetur";
                prettyPrint = false;
                quotaUser = "ipsam";
                uploadType = "id";
                uploadProtocol = "possimus";
            }};            

            SpeechProjectsLocationsPhraseSetsGetResponse res = sdk.projects.speechProjectsLocationsPhraseSetsGet(req, new SpeechProjectsLocationsPhraseSetsGetSecurity("aut", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.phraseSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsPhraseSetsList

List phrase sets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsListRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsListResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsPhraseSetsListRequest req = new SpeechProjectsLocationsPhraseSetsListRequest("error") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "reiciendis";
                fields = "voluptatibus";
                key = "vero";
                oauthToken = "nihil";
                pageSize = 509624L;
                pageToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "omnis";
                uploadProtocol = "voluptate";
            }};            

            SpeechProjectsLocationsPhraseSetsListResponse res = sdk.projects.speechProjectsLocationsPhraseSetsList(req, new SpeechProjectsLocationsPhraseSetsListSecurity("cum", "perferendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listPhraseSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## speechProjectsLocationsPhraseSetsPatch

Update a phrase set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsPatchRequest;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsPatchResponse;
import org.openapis.openapi.models.operations.SpeechProjectsLocationsPhraseSetsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Phrase;
import org.openapis.openapi.models.shared.PhraseSetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SpeechProjectsLocationsPhraseSetsPatchRequest req = new SpeechProjectsLocationsPhraseSetsPatchRequest("doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                phraseSetInput = new PhraseSetInput() {{
                    boost = 2828.07;
                    name = "Willie Hessel";
                    phrases = new org.openapis.openapi.models.shared.Phrase[]{{
                        add(new Phrase() {{
                            boost = 6886.61;
                            value = "enim";
                        }}),
                    }};
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                updateMask = "excepturi";
                uploadType = "pariatur";
                uploadProtocol = "modi";
            }};            

            SpeechProjectsLocationsPhraseSetsPatchResponse res = sdk.projects.speechProjectsLocationsPhraseSetsPatch(req, new SpeechProjectsLocationsPhraseSetsPatchSecurity("praesentium", "rem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.phraseSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
