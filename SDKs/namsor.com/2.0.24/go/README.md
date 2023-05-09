# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/namsor.com/2.0.24/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Admin.Anonymize(ctx, operations.AnonymizeRequest{
        Anonymized: false,
        Source: "corrupti",
        Token: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKeyOut != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Admin](docs/admin/README.md)

* [Anonymize](docs/admin/README.md#anonymize) - Activate/deactivate anonymization for a source.
* [APIKeyInfo](docs/admin/README.md#apikeyinfo) - Read API Key info.
* [APIStatus](docs/admin/README.md#apistatus) - Prints the current status of the classifiers. A classifier name in apiStatus corresponds to a service name in apiServices.
* [APIUsage](docs/admin/README.md#apiusage) - Print current API usage.
* [APIUsageHistory](docs/admin/README.md#apiusagehistory) - Print historical API usage.
* [APIUsageHistoryAggregate](docs/admin/README.md#apiusagehistoryaggregate) - Print historical API usage (in an aggregated view, by service, by day/hour/min).
* [AvailableServices](docs/admin/README.md#availableservices) - List of classification services and usage cost in Units per classification (default is 1=ONE Unit). Some API endpoints (ex. Corridor) combine multiple classifiers.
* [Learnable](docs/admin/README.md#learnable) - Activate/deactivate learning from a source.
* [Regions](docs/admin/README.md#regions) - Print basic source statistics.
* [SoftwareVersion](docs/admin/README.md#softwareversion) - Get the current software version
* [TaxonomyClasses](docs/admin/README.md#taxonomyclasses) - Print the taxonomy classes valid for the given classifier.

### [Chinese](docs/chinese/README.md)

* [ChineseNameCandidates](docs/chinese/README.md#chinesenamecandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming
* [ChineseNameCandidatesBatch](docs/chinese/README.md#chinesenamecandidatesbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [ChineseNameCandidatesGenderBatch](docs/chinese/README.md#chinesenamecandidatesgenderbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.
* [ChineseNameGenderCandidates](docs/chinese/README.md#chinesenamegendercandidates) - Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')
* [ChineseNameMatch](docs/chinese/README.md#chinesenamematch) - Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming
* [ChineseNameMatchBatch](docs/chinese/README.md#chinesenamematchbatch) - Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming
* [GenderChineseName](docs/chinese/README.md#genderchinesename) - Infer the likely gender of a Chinese full name ex. 王晓明
* [GenderChineseNameBatch](docs/chinese/README.md#genderchinesenamebatch) - Infer the likely gender of up to 100 full names ex. 王晓明
* [GenderChineseNamePinyin](docs/chinese/README.md#genderchinesenamepinyin) - Infer the likely gender of a Chinese name in LATIN (Pinyin).
* [GenderChineseNamePinyinBatch](docs/chinese/README.md#genderchinesenamepinyinbatch) - Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).
* [ParseChineseName](docs/chinese/README.md#parsechinesename) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)
* [ParseChineseNameBatch](docs/chinese/README.md#parsechinesenamebatch) - Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).
* [PinyinChineseName](docs/chinese/README.md#pinyinchinesename) - Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)
* [PinyinChineseNameBatch](docs/chinese/README.md#pinyinchinesenamebatch) - Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).

### [General](docs/general/README.md)

* [NameType](docs/general/README.md#nametype) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [NameTypeBatch](docs/general/README.md#nametypebatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)
* [NameTypeGeo](docs/general/README.md#nametypegeo) - Infer the likely type of a proper noun (personal name, brand name, place name etc.)
* [NameTypeGeoBatch](docs/general/README.md#nametypegeobatch) - Infer the likely common type of up to 100 proper nouns (personal name, brand name, place name etc.)

### [Indian](docs/indian/README.md)

* [CastegroupIndianFull](docs/indian/README.md#castegroupindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of a personal full name.
* [CastegroupIndianFullBatch](docs/indian/README.md#castegroupindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian name castegroup of up to 100 personal full names. 
* [Religion](docs/indian/README.md#religion) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal Indian full name, provided the Indian state or Union territory (NB/ this can be inferred using the subclassification endpoint).
* [ReligionIndianFullBatch](docs/indian/README.md#religionindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full Indian names, provided the subclassification at State or Union territory level (NB/ can be inferred using the subclassification endpoint).
* [SubclassificationIndian](docs/indian/README.md#subclassificationindian) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [SubclassificationIndianBatch](docs/indian/README.md#subclassificationindianbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.
* [SubclassificationIndianFull](docs/indian/README.md#subclassificationindianfull) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on the name.
* [SubclassificationIndianFullBatch](docs/indian/README.md#subclassificationindianfullbatch) - [USES 10 UNITS PER NAME] Infer the likely Indian state of Union territory according to ISO 3166-2:IN based on a list of up to 100 names.

### [Japanese](docs/japanese/README.md)

* [GenderJapaneseNameFull](docs/japanese/README.md#genderjapanesenamefull) - Infer the likely gender of a Japanese full name ex. 王晓明
* [GenderJapaneseNameFullBatch](docs/japanese/README.md#genderjapanesenamefullbatch) - Infer the likely gender of up to 100 full names
* [GenderJapaneseNamePinyin](docs/japanese/README.md#genderjapanesenamepinyin) - Infer the likely gender of a Japanese name in LATIN (Pinyin).
* [GenderJapaneseNamePinyinBatch](docs/japanese/README.md#genderjapanesenamepinyinbatch) - Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).
* [JapaneseNameGenderKanjiCandidatesBatch](docs/japanese/README.md#japanesenamegenderkanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname) with KNOWN gender, ex. Yamamoto Sanae
* [JapaneseNameKanjiCandidates](docs/japanese/README.md#japanesenamekanjicandidates) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae - and a known gender.
* [JapaneseNameKanjiCandidatesBatch](docs/japanese/README.md#japanesenamekanjicandidatesbatch) - Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae
* [JapaneseNameKanjiCandidates1](docs/japanese/README.md#japanesenamekanjicandidates1) - Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae
* [JapaneseNameLatinCandidates](docs/japanese/README.md#japanesenamelatincandidates) - Romanize japanese name, based on the name in Kanji.
* [JapaneseNameLatinCandidatesBatch](docs/japanese/README.md#japanesenamelatincandidatesbatch) - Romanize japanese names, based on the name in KANJI
* [JapaneseNameMatch](docs/japanese/README.md#japanesenamematch) - Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [JapaneseNameMatchBatch](docs/japanese/README.md#japanesenamematchbatch) - Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae
* [JapaneseNameMatchFeedbackLoop](docs/japanese/README.md#japanesenamematchfeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae
* [ParseJapaneseName](docs/japanese/README.md#parsejapanesename) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae
* [ParseJapaneseNameBatch](docs/japanese/README.md#parsejapanesenamebatch) - Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 

### [Personal](docs/personal/README.md)

* [Corridor](docs/personal/README.md#corridor) - [USES 20 UNITS PER NAME COUPLE] Infer several classifications for a cross border interaction between names (ex. remit, travel, intl com)
* [CorridorBatch](docs/personal/README.md#corridorbatch) - [USES 20 UNITS PER NAME PAIR] Infer several classifications for up to 100 cross border interaction between names (ex. remit, travel, intl com)
* [Country](docs/personal/README.md#country) - [USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.
* [CountryBatch](docs/personal/README.md#countrybatch) - [USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.
* [Diaspora](docs/personal/README.md#diaspora) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [DiasporaBatch](docs/personal/README.md#diasporabatch) - [USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)
* [Gender](docs/personal/README.md#gender) - Infer the likely gender of a name.
* [GenderBatch](docs/personal/README.md#genderbatch) - Infer the likely gender of up to 100 names, detecting automatically the cultural context.
* [GenderFull](docs/personal/README.md#genderfull) - Infer the likely gender of a full name, ex. John H. Smith
* [GenderFullBatch](docs/personal/README.md#genderfullbatch) - Infer the likely gender of up to 100 full names, detecting automatically the cultural context.
* [GenderFullGeo](docs/personal/README.md#genderfullgeo) - Infer the likely gender of a full name, given a local context (ISO2 country code).
* [GenderFullGeoBatch](docs/personal/README.md#genderfullgeobatch) - Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).
* [GenderGeo](docs/personal/README.md#gendergeo) - Infer the likely gender of a name, given a local context (ISO2 country code).
* [GenderGeoBatch](docs/personal/README.md#gendergeobatch) - Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).
* [Gender1](docs/personal/README.md#gender1) - Infer the likely gender of a just a fiven name, assuming default 'US' local context. Please use preferably full names and local geographic context for better accuracy.
* [Origin](docs/personal/README.md#origin) - [USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.
* [OriginBatch](docs/personal/README.md#originbatch) - [USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.
* [ParseName](docs/personal/README.md#parsename) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 
* [ParseNameBatch](docs/personal/README.md#parsenamebatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.
* [ParseNameGeo](docs/personal/README.md#parsenamegeo) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.
* [ParseNameGeoBatch](docs/personal/README.md#parsenamegeobatch) - Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 
* [ReligionFull](docs/personal/README.md#religionfull) - [USES 10 UNITS PER NAME] Infer the likely religion of a personal full name. NB: only for INDIA (as of current version).
* [ReligionFullBatch](docs/personal/README.md#religionfullbatch) - [USES 10 UNITS PER NAME] Infer the likely religion of up to 100 personal full names. NB: only for India as of currently.
* [Subclassification](docs/personal/README.md#subclassification) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationBatch](docs/personal/README.md#subclassificationbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationFull](docs/personal/README.md#subclassificationfull) - [USES 10 UNITS PER NAME] Infer the likely origin of a name at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [SubclassificationFullBatch](docs/personal/README.md#subclassificationfullbatch) - [USES 10 UNITS PER NAME] Infer the likely origin of a list of up to 100 names at a country subclassification level (state or regeion). Initially, this is only supported for India (ISO2 code 'IN').
* [UsRaceEthnicity](docs/personal/README.md#usraceethnicity) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsRaceEthnicityBatch](docs/personal/README.md#usraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsRaceEthnicityZip5](docs/personal/README.md#usraceethnicityzip5) - [USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).
* [UsZipRaceEthnicityBatch](docs/personal/README.md#uszipraceethnicitybatch) - [USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino). Optionally add header X-OPTION-USRACEETHNICITY-TAXONOMY: USRACEETHNICITY-6CLASSES for two additional classes, AI_AN (American Indian or Alaskan Native) and PI (Pacific Islander).

### [Social](docs/social/README.md)

* [PhoneCode](docs/social/README.md#phonecode) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.
* [PhoneCodeBatch](docs/social/README.md#phonecodebatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.
* [PhoneCodeGeo](docs/social/README.md#phonecodegeo) - [USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
* [PhoneCodeGeoBatch](docs/social/README.md#phonecodegeobatch) - [USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).
* [PhoneCodeGeoFeedbackLoop](docs/social/README.md#phonecodegeofeedbackloop) - [CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
