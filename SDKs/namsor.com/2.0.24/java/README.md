# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnonymizeRequest;
import org.openapis.openapi.models.operations.AnonymizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnonymizeRequest req = new AnonymizeRequest(false, "provident", "distinctio");            

            AnonymizeResponse res = sdk.admin.anonymize(req);

            if (res.apiKeyOut != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [admin](docs/admin/README.md)

* [anonymize](docs/admin/README.md#anonymize) - Activate/deactivate anonymization for a source.
* [apiKeyInfo](docs/admin/README.md#apikeyinfo) - Read API Key info.
* [apiStatus](docs/admin/README.md#apistatus) - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* [apiUsage](docs/admin/README.md#apiusage) - Print current API usage.
* [apiUsageHistory](docs/admin/README.md#apiusagehistory) - Print historical API usage.
* [apiUsageHistoryAggregate](docs/admin/README.md#apiusagehistoryaggregate) - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* [availableServices](docs/admin/README.md#availableservices) - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* [learnable](docs/admin/README.md#learnable) - Activate/deactivate learning from a source.
* [regions](docs/admin/README.md#regions) - Print basic source statistics.
* [softwareVersion](docs/admin/README.md#softwareversion) - Get the current software version
* [taxonomyClasses](docs/admin/README.md#taxonomyclasses) - Print the taxonomy classes valid for the given classifier.

### [chinese](docs/chinese/README.md)

* [chineseNameCandidates](docs/chinese/README.md#chinesenamecandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* [chineseNameCandidatesBatch](docs/chinese/README.md#chinesenamecandidatesbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [chineseNameCandidatesGenderBatch](docs/chinese/README.md#chinesenamecandidatesgenderbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* [chineseNameGenderCandidates](docs/chinese/README.md#chinesenamegendercandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* [chineseNameMatch](docs/chinese/README.md#chinesenamematch) - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* [chineseNameMatchBatch](docs/chinese/README.md#chinesenamematchbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [genderChineseName](docs/chinese/README.md#genderchinesename) - Infer the likely gender of a Chinese full name ex. 王晓明
* [genderChineseNameBatch](docs/chinese/README.md#genderchinesenamebatch) - Infer the likely gender of up to 100 full names ex. 王晓明
* [genderChineseNamePinyin](docs/chinese/README.md#genderchinesenamepinyin) - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* [genderChineseNamePinyinBatch](docs/chinese/README.md#genderchinesenamepinyinbatch) - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* [parseChineseName](docs/chinese/README.md#parsechinesename) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* [parseChineseNameBatch](docs/chinese/README.md#parsechinesenamebatch) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* [pinyinChineseName](docs/chinese/README.md#pinyinchinesename) - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* [pinyinChineseNameBatch](docs/chinese/README.md#pinyinchinesenamebatch) - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

### [general](docs/general/README.md)

* [nameType](docs/general/README.md#nametype) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeBatch](docs/general/README.md#nametypebatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* [nameTypeGeo](docs/general/README.md#nametypegeo) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [nameTypeGeoBatch](docs/general/README.md#nametypegeobatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### [indian](docs/indian/README.md)

* [castegroupIndianFull](docs/indian/README.md#castegroupindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
* [castegroupIndianFullBatch](docs/indian/README.md#castegroupindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
* [religion](docs/indian/README.md#religion) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
* [religionIndianFullBatch](docs/indian/README.md#religionindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
* [subclassificationIndian](docs/indian/README.md#subclassificationindian) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianBatch](docs/indian/README.md#subclassificationindianbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
* [subclassificationIndianFull](docs/indian/README.md#subclassificationindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [subclassificationIndianFullBatch](docs/indian/README.md#subclassificationindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### [japanese](docs/japanese/README.md)

* [genderJapaneseNameFull](docs/japanese/README.md#genderjapanesenamefull) - Infer the likely gender of a Japanese full name ex. 王晓明
* [genderJapaneseNameFullBatch](docs/japanese/README.md#genderjapanesenamefullbatch) - Infer the likely gender of up to 100 full names
* [genderJapaneseNamePinyin](docs/japanese/README.md#genderjapanesenamepinyin) - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* [genderJapaneseNamePinyinBatch](docs/japanese/README.md#genderjapanesenamepinyinbatch) - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* [japaneseNameGenderKanjiCandidatesBatch](docs/japanese/README.md#japanesenamegenderkanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates](docs/japanese/README.md#japanesenamekanjicandidates) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* [japaneseNameKanjiCandidatesBatch](docs/japanese/README.md#japanesenamekanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* [japaneseNameKanjiCandidates1](docs/japanese/README.md#japanesenamekanjicandidates1) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* [japaneseNameLatinCandidates](docs/japanese/README.md#japanesenamelatincandidates) - Romanize japanese name, based on the name in Kanji.
* [japaneseNameLatinCandidatesBatch](docs/japanese/README.md#japanesenamelatincandidatesbatch) - Romanize japanese names, based on the name in KANJI
* [japaneseNameMatch](docs/japanese/README.md#japanesenamematch) - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [japaneseNameMatchBatch](docs/japanese/README.md#japanesenamematchbatch) - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* [japaneseNameMatchFeedbackLoop](docs/japanese/README.md#japanesenamematchfeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [parseJapaneseName](docs/japanese/README.md#parsejapanesename) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* [parseJapaneseNameBatch](docs/japanese/README.md#parsejapanesenamebatch) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

### [personal](docs/personal/README.md)

* [corridor](docs/personal/README.md#corridor) - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* [corridorBatch](docs/personal/README.md#corridorbatch) - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* [country](docs/personal/README.md#country) - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* [countryBatch](docs/personal/README.md#countrybatch) - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* [diaspora](docs/personal/README.md#diaspora) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [diasporaBatch](docs/personal/README.md#diasporabatch) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [gender](docs/personal/README.md#gender) - Infer the likely gender of a name.
* [genderBatch](docs/personal/README.md#genderbatch) - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* [genderFull](docs/personal/README.md#genderfull) - Infer the likely gender of a full name, ex. John H. Smith
* [genderFullBatch](docs/personal/README.md#genderfullbatch) - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* [genderFullGeo](docs/personal/README.md#genderfullgeo) - Infer the likely gender of a full name, given a local context (ISO2 country code).
* [genderFullGeoBatch](docs/personal/README.md#genderfullgeobatch) - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* [genderGeo](docs/personal/README.md#gendergeo) - Infer the likely gender of a name, given a local context (ISO2 country code).
* [genderGeoBatch](docs/personal/README.md#gendergeobatch) - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* [gender1](docs/personal/README.md#gender1) - Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
* [origin](docs/personal/README.md#origin) - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* [originBatch](docs/personal/README.md#originbatch) - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* [parseName](docs/personal/README.md#parsename) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* [parseNameBatch](docs/personal/README.md#parsenamebatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* [parseNameGeo](docs/personal/README.md#parsenamegeo) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* [parseNameGeoBatch](docs/personal/README.md#parsenamegeobatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* [religionFull](docs/personal/README.md#religionfull) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
* [religionFullBatch](docs/personal/README.md#religionfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
* [subclassification](docs/personal/README.md#subclassification) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationBatch](docs/personal/README.md#subclassificationbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFull](docs/personal/README.md#subclassificationfull) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [subclassificationFullBatch](docs/personal/README.md#subclassificationfullbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [usRaceEthnicity](docs/personal/README.md#usraceethnicity) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityBatch](docs/personal/README.md#usraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usRaceEthnicityZip5](docs/personal/README.md#usraceethnicityzip5) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [usZipRaceEthnicityBatch](docs/personal/README.md#uszipraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### [social](docs/social/README.md)

* [phoneCode](docs/social/README.md#phonecode) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* [phoneCodeBatch](docs/social/README.md#phonecodebatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* [phoneCodeGeo](docs/social/README.md#phonecodegeo) - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* [phoneCodeGeoBatch](docs/social/README.md#phonecodegeobatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* [phoneCodeGeoFeedbackLoop](docs/social/README.md#phonecodegeofeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
