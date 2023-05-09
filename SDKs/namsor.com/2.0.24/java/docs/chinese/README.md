# chinese

## Overview

CHINESE special features

### Available Operations

* [chineseNameCandidates](#chinesenamecandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* [chineseNameCandidatesBatch](#chinesenamecandidatesbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [chineseNameCandidatesGenderBatch](#chinesenamecandidatesgenderbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* [chineseNameGenderCandidates](#chinesenamegendercandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* [chineseNameMatch](#chinesenamematch) - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* [chineseNameMatchBatch](#chinesenamematchbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [genderChineseName](#genderchinesename) - Infer the likely gender of a Chinese full name ex. 王晓明
* [genderChineseNameBatch](#genderchinesenamebatch) - Infer the likely gender of up to 100 full names ex. 王晓明
* [genderChineseNamePinyin](#genderchinesenamepinyin) - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* [genderChineseNamePinyinBatch](#genderchinesenamepinyinbatch) - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* [parseChineseName](#parsechinesename) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* [parseChineseNameBatch](#parsechinesenamebatch) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* [pinyinChineseName](#pinyinchinesename) - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* [pinyinChineseNameBatch](#pinyinchinesenamebatch) - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

## chineseNameCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameCandidatesRequest;
import org.openapis.openapi.models.operations.ChineseNameCandidatesResponse;
import org.openapis.openapi.models.operations.ChineseNameCandidatesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChineseNameCandidatesRequest req = new ChineseNameCandidatesRequest("molestiae", "minus");            

            ChineseNameCandidatesResponse res = sdk.chinese.chineseNameCandidates(req, new ChineseNameCandidatesSecurity("placeat") {{
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

## chineseNameCandidatesBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameCandidatesBatchResponse;
import org.openapis.openapi.models.operations.ChineseNameCandidatesBatchSecurity;
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
                        id = "796ed151-a05d-4fc2-9df7-cc78ca1ba928";
                        name = "Ms. Earnest Lebsack";
                    }}),
                    add(new FactIn() {{
                        id = "42cb7392-0592-4939-afea-7596eb10faaa";
                        name = "Connie Herzog";
                    }}),
                    add(new FactIn() {{
                        id = "5955907a-ff1a-43a2-ba94-67739251aa52";
                        name = "Jimmy Wiegand";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Adrain";
                        id = "19da1ffe-78f0-497b-8074-f15471b5e6e1";
                        lastName = "Emmerich";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Mathilde";
                        id = "99d488e1-e91e-4450-ad2a-bd44269802d5";
                        lastName = "Abshire";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Caden";
                        id = "a94bb4f6-3c96-49e9-a3ef-a77dfb14cd66";
                        lastName = "Padberg";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Shaniya";
                        id = "395efb9b-a88f-43a6-a997-074ba4469b6e";
                        lastName = "Collins";
                    }}),
                }};
            }};            

            ChineseNameCandidatesBatchResponse res = sdk.chinese.chineseNameCandidatesBatch(req, new ChineseNameCandidatesBatchSecurity("architecto") {{
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

## chineseNameCandidatesGenderBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameCandidatesGenderBatchResponse;
import org.openapis.openapi.models.operations.ChineseNameCandidatesGenderBatchSecurity;
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
                        id = "1959890a-fa56-43e2-916f-e4c8b711e5b7";
                        name = "Marty Cormier";
                    }}),
                    add(new FactIn() {{
                        id = "028921cd-dc69-4260-9fb5-76b0d5f0d30c";
                        name = "Mindy Renner";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameGenderIn[]{{
                    add(new FirstLastNameGenderIn() {{
                        firstName = "Jovani";
                        gender = "female";
                        id = "053202c7-3d5f-4e9b-90c2-8909b3fe49a8";
                        lastName = "Stracke";
                    }}),
                    add(new FirstLastNameGenderIn() {{
                        firstName = "Lambert";
                        gender = "male";
                        id = "bf486333-23f9-4b77-b3a4-100674ebf692";
                        lastName = "Littel";
                    }}),
                }};
            }};            

            ChineseNameCandidatesGenderBatchResponse res = sdk.chinese.chineseNameCandidatesGenderBatch(req, new ChineseNameCandidatesGenderBatchSecurity("sit") {{
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

## chineseNameGenderCandidates

Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameGenderCandidatesRequest;
import org.openapis.openapi.models.operations.ChineseNameGenderCandidatesResponse;
import org.openapis.openapi.models.operations.ChineseNameGenderCandidatesSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChineseNameGenderCandidatesRequest req = new ChineseNameGenderCandidatesRequest("fugiat", "ab", "soluta");            

            ChineseNameGenderCandidatesResponse res = sdk.chinese.chineseNameGenderCandidates(req, new ChineseNameGenderCandidatesSecurity("dolorum") {{
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

## chineseNameMatch

Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameMatchRequest;
import org.openapis.openapi.models.operations.ChineseNameMatchResponse;
import org.openapis.openapi.models.operations.ChineseNameMatchSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChineseNameMatchRequest req = new ChineseNameMatchRequest("iusto", "voluptate", "dolorum");            

            ChineseNameMatchResponse res = sdk.chinese.chineseNameMatch(req, new ChineseNameMatchSecurity("deleniti") {{
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

## chineseNameMatchBatch

Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChineseNameMatchBatchResponse;
import org.openapis.openapi.models.operations.ChineseNameMatchBatchSecurity;
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
                        id = "ebf737ae-4203-4ce5-a6a9-5d8a0d446ce2";
                        name = "Randal Klocko";
                    }}),
                    add(new FactIn() {{
                        id = "3cf3be45-3f87-40b3-a6b5-a73429cdb1a8";
                        name = "Kelly Daniel";
                    }}),
                    add(new FactIn() {{
                        id = "679d2322-715b-4f0c-bb1e-31b8b90f3443";
                        name = "Ms. Joe Berge";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.MatchPersonalFirstLastNameIn[]{{
                    add(new MatchPersonalFirstLastNameIn() {{
                        id = "adcf4b92-1879-4fce-953f-73ef7fbc7abd";
                        name1 = new FirstLastNameIn() {{
                            firstName = "Jessica";
                            id = "4dd39c0f-5d2c-4ff7-870a-45626d436813";
                            lastName = "Wuckert";
                        }};
                        name2 = new PersonalNameIn() {{
                            id = "16d9f5fc-e6c5-4561-86c3-e250fb008c42";
                            name = "Miss Dennis Friesen";
                        }};
                    }}),
                }};
            }};            

            ChineseNameMatchBatchResponse res = sdk.chinese.chineseNameMatchBatch(req, new ChineseNameMatchBatchSecurity("placeat") {{
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

## genderChineseName

Infer the likely gender of a Chinese full name ex. 王晓明

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderChineseNameRequest;
import org.openapis.openapi.models.operations.GenderChineseNameResponse;
import org.openapis.openapi.models.operations.GenderChineseNameSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderChineseNameRequest req = new GenderChineseNameRequest("velit");            

            GenderChineseNameResponse res = sdk.chinese.genderChineseName(req, new GenderChineseNameSecurity("eum") {{
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

## genderChineseNameBatch

Infer the likely gender of up to 100 full names ex. 王晓明

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderChineseNameBatchResponse;
import org.openapis.openapi.models.operations.GenderChineseNameBatchSecurity;
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
                        id = "c8dd6b14-4290-4747-8778-a7bd466d28c1";
                        name = "Amelia Predovic";
                    }}),
                    add(new FactIn() {{
                        id = "dca42519-04e5-423c-be0b-c7178e4796f2";
                        name = "Fernando Barton";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "8282aa48-2562-4f22-ae98-17ee17cbe61e";
                        name = "Opal Kozey";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "5bc0ab3c-20c4-4f37-89fd-871f99dd2efd";
                        name = "Marilyn Botsford";
                    }}),
                    add(new PersonalNameIn() {{
                        id = "6f1e674b-db04-4f15-b560-82d68ea19f1d";
                        name = "Allison Bednar I";
                    }}),
                }};
            }};            

            GenderChineseNameBatchResponse res = sdk.chinese.genderChineseNameBatch(req, new GenderChineseNameBatchSecurity("adipisci") {{
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

## genderChineseNamePinyin

Infer the likely gender of a Chinese name in LATIN (Pinyin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderChineseNamePinyinRequest;
import org.openapis.openapi.models.operations.GenderChineseNamePinyinResponse;
import org.openapis.openapi.models.operations.GenderChineseNamePinyinSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenderChineseNamePinyinRequest req = new GenderChineseNamePinyinRequest("iste", "temporibus");            

            GenderChineseNamePinyinResponse res = sdk.chinese.genderChineseNamePinyin(req, new GenderChineseNamePinyinSecurity("accusantium") {{
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

## genderChineseNamePinyinBatch

Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenderChineseNamePinyinBatchResponse;
import org.openapis.openapi.models.operations.GenderChineseNamePinyinBatchSecurity;
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
                        id = "086a1840-394c-4260-b1f9-3f5f0642dac7";
                        name = "Mrs. Aubrey Hills";
                    }}),
                    add(new FactIn() {{
                        id = "c413aa63-aae8-4d67-864d-bb675fd5e60b";
                        name = "Arlene Heidenreich";
                    }}),
                    add(new FactIn() {{
                        id = "4f6fbee4-1f33-4317-be35-b60eb1ea4265";
                        name = "Cathy Rohan";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.FirstLastNameIn[]{{
                    add(new FirstLastNameIn() {{
                        firstName = "Celestino";
                        id = "8744ed53-b88f-43a8-98f5-c0b2f2fb7b19";
                        lastName = "Greenholt";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Margarett";
                        id = "276b2691-6fe1-4f08-b429-4e3698f447f6";
                        lastName = "Balistreri";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Delmer";
                        id = "e8b445e8-0ca5-45ef-920e-457e1858b6a8";
                        lastName = "Mueller";
                    }}),
                    add(new FirstLastNameIn() {{
                        firstName = "Tyrel";
                        id = "be3a5aa8-e482-44d0-ab40-75088e518620";
                        lastName = "Kautzer";
                    }}),
                }};
            }};            

            GenderChineseNamePinyinBatchResponse res = sdk.chinese.genderChineseNamePinyinBatch(req, new GenderChineseNamePinyinBatchSecurity("nostrum") {{
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

## parseChineseName

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseChineseNameRequest;
import org.openapis.openapi.models.operations.ParseChineseNameResponse;
import org.openapis.openapi.models.operations.ParseChineseNameSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ParseChineseNameRequest req = new ParseChineseNameRequest("saepe");            

            ParseChineseNameResponse res = sdk.chinese.parseChineseName(req, new ParseChineseNameSecurity("error") {{
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

## parseChineseNameBatch

Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ParseChineseNameBatchResponse;
import org.openapis.openapi.models.operations.ParseChineseNameBatchSecurity;
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
                        id = "4f3b1194-b8ab-4f60-ba79-f9dfe0ab7da8";
                        name = "Floyd Barrows";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "87f86bc1-73d6-489e-ae95-26f8d986e881";
                        name = "Wilbur Simonis";
                    }}),
                }};
            }};            

            ParseChineseNameBatchResponse res = sdk.chinese.parseChineseNameBatch(req, new ParseChineseNameBatchSecurity("doloremque") {{
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

## pinyinChineseName

Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PinyinChineseNameRequest;
import org.openapis.openapi.models.operations.PinyinChineseNameResponse;
import org.openapis.openapi.models.operations.PinyinChineseNameSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PinyinChineseNameRequest req = new PinyinChineseNameRequest("repudiandae");            

            PinyinChineseNameResponse res = sdk.chinese.pinyinChineseName(req, new PinyinChineseNameSecurity("dicta") {{
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

## pinyinChineseNameBatch

Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PinyinChineseNameBatchResponse;
import org.openapis.openapi.models.operations.PinyinChineseNameBatchSecurity;
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
                        id = "12563f94-e29e-4973-a922-a57a15be3e06";
                        name = "Lena Beier";
                    }}),
                }};
                personalNames = new org.openapis.openapi.models.shared.PersonalNameIn[]{{
                    add(new PersonalNameIn() {{
                        id = "b6e3ab88-45f0-4597-a60f-f2a54a31e947";
                        name = "April Nader";
                    }}),
                }};
            }};            

            PinyinChineseNameBatchResponse res = sdk.chinese.pinyinChineseNameBatch(req, new PinyinChineseNameBatchSecurity("laudantium") {{
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
