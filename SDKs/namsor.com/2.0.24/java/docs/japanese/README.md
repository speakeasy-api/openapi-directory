# japanese

## Overview

JAPANESE special features

### Available Operations

* [genderJapaneseNameFull](#genderjapanesenamefull) - Infer the likely gender of a Japanese full name ex. 王晓明
* [genderJapaneseNameFullBatch](#genderjapanesenamefullbatch) - Infer the likely gender of up to 100 full names
* [genderJapaneseNamePinyin](#genderjapanesenamepinyin) - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* [genderJapaneseNamePinyinBatch](#genderjapanesenamepinyinbatch) - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* [japaneseNameGenderKanjiCandidatesBatch](#japanesenamegenderkanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates](#japanesenamekanjicandidates) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* [japaneseNameKanjiCandidatesBatch](#japanesenamekanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates1](#japanesenamekanjicandidates1) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* [japaneseNameLatinCandidates](#japanesenamelatincandidates) - Romanize japanese name, based on the name in Kanji.
* [japaneseNameLatinCandidatesBatch](#japanesenamelatincandidatesbatch) - Romanize japanese names, based on the name in KANJI
* [japaneseNameMatch](#japanesenamematch) - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [japaneseNameMatchBatch](#japanesenamematchbatch) - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* [japaneseNameMatchFeedbackLoop](#japanesenamematchfeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [parseJapaneseName](#parsejapanesename) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* [parseJapaneseNameBatch](#parsejapanesenamebatch) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

## genderJapaneseNameFull

Infer the likely gender of a Japanese full name ex. 王晓明

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderJapaneseNameFullRequest;
import org.openapis.openapi.models.operations.GenderJapaneseNameFullResponse;
import org.openapis.openapi.models.operations.GenderJapaneseNameFullSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderJapaneseNameFullRequest req = new GenderJapaneseNameFullRequest("provident");            

            GenderJapaneseNameFullResponse res = sdk.japanese.genderJapaneseNameFull(req, new GenderJapaneseNameFullSecurity("cum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderJapaneseNameFullBatch

Infer the likely gender of up to 100 full names

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderJapaneseNameFullBatchResponse;
import org.openapis.openapi.models.operations.GenderJapaneseNameFullBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameIn req = new BatchPersonalNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "bbe6949f-b2bb-44ec-ae6c-3d5db3adebd5";
                        name = "Pablo Veum";
                    }}),
                    add(new FactIn() {{
                        id = "c506a8aa-94c0-4264-8cf5-e9d9a4578adc";
                        name = "Joanna Schmidt Jr.";
                    }}),
                    add(new FactIn() {{
                        id = "dec001ac-802e-42ec-89ff-8f0f816ff347";
                        name = "Sheri Botsford";
                    }}),
                    add(new FactIn() {{
                        id = "902c1412-5b09-460a-a681-51a472af923c";
                        name = "Shelly Gutmann";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "3f350cf8-76ff-4b90-9c6e-cbb4e243cf78";
                        name = "Jerald Wilkinson";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "eda53e5a-e6e0-4ac1-84c2-b9c247c88373";
                        name = "Edwin Bahringer V";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "42f32e55-0557-456f-9d56-d0bd0af2dfe1";
                        name = "Meredith Pfeffer";
                    }}),
                }};
            }};            

            GenderJapaneseNameFullBatchResponse res = sdk.japanese.genderJapaneseNameFullBatch(req, new GenderJapaneseNameFullBatchSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderJapaneseNamePinyin

Infer the likely gender of a Japanese name in LATIN (Pinyin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderJapaneseNamePinyinRequest;
import org.openapis.openapi.models.operations.GenderJapaneseNamePinyinResponse;
import org.openapis.openapi.models.operations.GenderJapaneseNamePinyinSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderJapaneseNamePinyinRequest req = new GenderJapaneseNamePinyinRequest("explicabo", "minus");            

            GenderJapaneseNamePinyinResponse res = sdk.japanese.genderJapaneseNamePinyin(req, new GenderJapaneseNamePinyinSecurity("soluta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.firstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genderJapaneseNamePinyinBatch

Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderJapaneseNamePinyinBatchResponse;
import org.openapis.openapi.models.operations.GenderJapaneseNamePinyinBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameIn req = new BatchFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "3f8941ae-bc0b-480a-a924-d3b2ecfcc8f8";
                        name = "Mr. Zachary Bashirian";
                    }}),
                    add(new FactIn() {{
                        id = "5dd3d6fa-1804-4e54-882f-168a363c8873";
                        name = "Eddie Labadie";
                    }}),
                    add(new FactIn() {{
                        id = "80b1f6b8-ca27-45a6-8a04-c495cc699171";
                        name = "Roberto Boyle MD";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Melissa";
                        id = "1cf4b888-ebdf-4c4c-8ca9-9bc7fc0b2dce";
                        lastName = "Boehm";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Adrain";
                        id = "873e42b0-06d6-4788-b8ba-8581a58208c5";
                        lastName = "Grant";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Vernie";
                        id = "efa9c95f-2eac-4556-9d30-7cfee81206e2";
                        lastName = "Lind";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Boris";
                        id = "3fa4a41c-480d-43f2-932a-f03102d514f4";
                        lastName = "Rowe";
                    }}),
                }};
            }};            

            GenderJapaneseNamePinyinBatchResponse res = sdk.japanese.genderJapaneseNamePinyinBatch(req, new GenderJapaneseNamePinyinBatchSecurity("nobis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchFirstLastNameGenderedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameGenderKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameGenderKanjiCandidatesBatchResponse;
import org.openapis.openapi.models.operations.JapaneseNameGenderKanjiCandidatesBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameGenderIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameGenderIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameGenderIn req = new BatchFirstLastNameGenderIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "f18bf962-1a6a-44f7-ba87-ee3e4be752c6";
                        name = "Flora Erdman";
                    }}),
                    add(new FactIn() {{
                        id = "18e3bb91-c8d9-475e-8e84-19d8f84f144f";
                        name = "Kerry Altenwerth";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGenderIn[]{{
                    add(new FirstLastNameGenderIn() {{
                        firstName = "Pat";
                        gender = "male";
                        id = "4aa5f3ca-bd90-45a9-b2e0-56728227b2d3";
                        lastName = "Beer";
                    }}),
                    add(new FirstLastNameGenderIn() {{
                        firstName = "King";
                        gender = "female";
                        id = "70bf7a4f-a87c-4f53-9a6f-ae54ebf60c32";
                        lastName = "Bruen";
                    }}),
                    add(new FirstLastNameGenderIn() {{
                        firstName = "Wava";
                        gender = "female";
                        id = "23b75d23-67fe-41a0-8c8d-f79f0a396d90";
                        lastName = "Rutherford";
                    }}),
                    add(new FirstLastNameGenderIn() {{
                        firstName = "Clifford";
                        gender = "female";
                        id = "4b7c15df-bace-4188-b1c4-ee2c8c6ce611";
                        lastName = "Wunsch";
                    }}),
                }};
            }};            

            JapaneseNameGenderKanjiCandidatesBatchResponse res = sdk.japanese.japaneseNameGenderKanjiCandidatesBatch(req, new JapaneseNameGenderKanjiCandidatesBatchSecurity("itaque") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchNameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameKanjiCandidates

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidatesRequest;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidatesResponse;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidatesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JapaneseNameKanjiCandidatesRequest req = new JapaneseNameKanjiCandidatesRequest("vero", "quidem", "illo");            

            JapaneseNameKanjiCandidatesResponse res = sdk.japanese.japaneseNameKanjiCandidates(req, new JapaneseNameKanjiCandidatesSecurity("quo") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameKanjiCandidatesBatch

Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidatesBatchResponse;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidatesBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameIn req = new BatchFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "cbdb6eec-7437-48ba-a531-7747dc915ad2";
                        name = "Wilbur Zulauf";
                    }}),
                    add(new FactIn() {{
                        id = "d6723dc0-f5ae-42f3-a6b7-00878756143f";
                        name = "Monique Kerluke";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Misael";
                        id = "55554080-d40b-4cac-86cb-d6b5f3ec9093";
                        lastName = "Barton";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Eliseo";
                        id = "f926bad2-5538-419b-874b-0ed20e56248f";
                        lastName = "Wuckert";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Yolanda";
                        id = "639a910a-bdca-4b62-a766-96e1ec00221b";
                        lastName = "Dickinson";
                    }}),
                }};
            }};            

            JapaneseNameKanjiCandidatesBatchResponse res = sdk.japanese.japaneseNameKanjiCandidatesBatch(req, new JapaneseNameKanjiCandidatesBatchSecurity("amet") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchNameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameKanjiCandidates1

Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidates1Request;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidates1Response;
import org.openapis.openapi.models.operations.JapaneseNameKanjiCandidates1Security;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JapaneseNameKanjiCandidates1Request req = new JapaneseNameKanjiCandidates1Request("exercitationem", "illum");            

            JapaneseNameKanjiCandidates1Response res = sdk.japanese.japaneseNameKanjiCandidates1(req, new JapaneseNameKanjiCandidates1Security("praesentium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameLatinCandidates

Romanize japanese name, based on the name in Kanji.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameLatinCandidatesRequest;
import org.openapis.openapi.models.operations.JapaneseNameLatinCandidatesResponse;
import org.openapis.openapi.models.operations.JapaneseNameLatinCandidatesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JapaneseNameLatinCandidatesRequest req = new JapaneseNameLatinCandidatesRequest("unde", "similique");            

            JapaneseNameLatinCandidatesResponse res = sdk.japanese.japaneseNameLatinCandidates(req, new JapaneseNameLatinCandidatesSecurity("eligendi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameLatinCandidatesBatch

Romanize japanese names, based on the name in KANJI

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameLatinCandidatesBatchResponse;
import org.openapis.openapi.models.operations.JapaneseNameLatinCandidatesBatchSecurity;
import org.openapis.openapi.models.shared.BatchFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchFirstLastNameIn req = new BatchFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "3ecfda8d-0c54-49ef-8300-4978a61fa1cf";
                        name = "Carol Johns";
                    }}),
                    add(new FactIn() {{
                        id = "f77c1ffc-71dc-4a16-bf2a-3c80a97ff334";
                        name = "Clint Strosin";
                    }}),
                    add(new FactIn() {{
                        id = "57a9e618-76c6-4ab2-9d29-dfc94d6fecd7";
                        name = "Rene Ernser Jr.";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Germaine";
                        id = "a6d2d000-3553-438c-ac08-6fa21e9152cb";
                        lastName = "Franey";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Bernhard";
                        id = "19167b8e-3c8d-4b03-808d-6d364ffd4559";
                        lastName = "Abernathy";
                    }}),
                }};
            }};            

            JapaneseNameLatinCandidatesBatchResponse res = sdk.japanese.japaneseNameLatinCandidatesBatch(req, new JapaneseNameLatinCandidatesBatchSecurity("ex") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchNameMatchCandidatesOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameMatch

Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameMatchRequest;
import org.openapis.openapi.models.operations.JapaneseNameMatchResponse;
import org.openapis.openapi.models.operations.JapaneseNameMatchSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JapaneseNameMatchRequest req = new JapaneseNameMatchRequest("quibusdam", "dicta", "quia");            

            JapaneseNameMatchResponse res = sdk.japanese.japaneseNameMatch(req, new JapaneseNameMatchSecurity("commodi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.nameMatchedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameMatchBatch

Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameMatchBatchResponse;
import org.openapis.openapi.models.operations.JapaneseNameMatchBatchSecurity;
import org.openapis.openapi.models.shared.BatchMatchPersonalFirstLastNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.FirstLastNameIn;
import org.openapis.openapi.models.shared.MatchPersonalFirstLastNameIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchMatchPersonalFirstLastNameIn req = new BatchMatchPersonalFirstLastNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "d48e935c-2c9e-481f-b0be-3e43202d7216";
                        name = "Colleen Kautzer III";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.MatchPersonalFirstLastNameIn[]{{
                    add(new MatchPersonalFirstLastNameIn() {{
                        id = "41870d9d-21f9-4ad0-b0c4-ecc11a083642";
                        name1 = new FirstLastNameIn() {{
                            firstName = "Lewis";
                            id = "068b8502-a55e-47f7-bbc8-45e320a319f4";
                            lastName = "Prohaska";
                        }};
                        name2 = new PersonalNameIn() {{
                            id = "adf947c9-a867-4bc4-a426-665816ddca8e";
                            name = "Maurice Bins";
                        }};
                    }}),
                    add(new MatchPersonalFirstLastNameIn() {{
                        id = "b4c593ec-12cd-4aad-8ec7-afedbd80df44";
                        name1 = new FirstLastNameIn() {{
                            firstName = "Kasey";
                            id = "a47f9390-c588-4809-83da-bf9ef3ffdd9f";
                            lastName = "Kuhlman";
                        }};
                        name2 = new PersonalNameIn() {{
                            id = "f079af4d-3572-44cd-b0f4-d281187d5684";
                            name = "Eloise Stoltenberg";
                        }};
                    }}),
                }};
            }};            

            JapaneseNameMatchBatchResponse res = sdk.japanese.japaneseNameMatchBatch(req, new JapaneseNameMatchBatchSecurity("praesentium") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchNameMatchedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## japaneseNameMatchFeedbackLoop

[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.JapaneseNameMatchFeedbackLoopRequest;
import org.openapis.openapi.models.operations.JapaneseNameMatchFeedbackLoopResponse;
import org.openapis.openapi.models.operations.JapaneseNameMatchFeedbackLoopSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            JapaneseNameMatchFeedbackLoopRequest req = new JapaneseNameMatchFeedbackLoopRequest("enim", "animi", "unde");            

            JapaneseNameMatchFeedbackLoopResponse res = sdk.japanese.japaneseNameMatchFeedbackLoop(req, new JapaneseNameMatchFeedbackLoopSecurity("quae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.feedbackLoopOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseJapaneseName

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseJapaneseNameRequest;
import org.openapis.openapi.models.operations.ParseJapaneseNameResponse;
import org.openapis.openapi.models.operations.ParseJapaneseNameSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParseJapaneseNameRequest req = new ParseJapaneseNameRequest("eum");            

            ParseJapaneseNameResponse res = sdk.japanese.parseJapaneseName(req, new ParseJapaneseNameSecurity("nostrum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.personalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## parseJapaneseNameBatch

Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseJapaneseNameBatchResponse;
import org.openapis.openapi.models.operations.ParseJapaneseNameBatchSecurity;
import org.openapis.openapi.models.shared.BatchPersonalNameIn;
import org.openapis.openapi.models.shared.FactIn;
import org.openapis.openapi.models.shared.PersonalNameIn;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.BatchPersonalNameIn req = new BatchPersonalNameIn() {{
                facts = new org.openapis.openapi.models.shared.FactIn[]{{
                    add(new FactIn() {{
                        id = "628bdfc2-032b-46c8-b992-3b7e13584f7a";
                        name = "Carl Davis";
                    }}),
                    add(new FactIn() {{
                        id = "891f82ce-1157-4172-b053-77dcfa89df97";
                        name = "Tasha Dickinson";
                    }}),
                    add(new FactIn() {{
                        id = "686092e9-c3dd-4c5f-911d-ea1026d541a4";
                        name = "Dr. Terry Mohr";
                    }}),
                    add(new FactIn() {{
                        id = "b21780bc-cc0d-4bbd-9b48-4708fb4e391e";
                        name = "Mrs. Susie Schowalter";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "4c4e5459-9ea3-4422-a0e9-b200ce78a1bd";
                        name = "Cary Predovic";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "0a116ce7-23d4-4097-ba30-e9af725b2912";
                        name = "Dr. Barbara Farrell";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "3f5aeb77-99d2-42e8-81f8-493825fdc42c";
                        name = "Harvey Jerde";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "c2dfb4cf-c1c7-4623-8f84-1fb1bd23fdb1";
                        name = "Meredith Quitzon";
                    }}),
                }};
            }};            

            ParseJapaneseNameBatchResponse res = sdk.japanese.parseJapaneseNameBatch(req, new ParseJapaneseNameBatchSecurity("recusandae") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.batchPersonalNameParsedOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
