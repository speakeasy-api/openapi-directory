# languageModelDirectAccess

## Overview

Methods to retrieve and inspect entries from the language models

### Available Operations

* [getFamilyDetails](#getfamilydetails) - Get family details
* [listFeatureValues](#listfeaturevalues) - List feature values
* [listHypernyms](#listhypernyms) - List hypernyms
* [listHyponyms](#listhyponyms) - List hyponyms
* [listInflectedForms](#listinflectedforms) - List inflected forms
* [listWordSenses](#listwordsenses) - List word senses

## getFamilyDetails

Fetches and outputs metadata for a family from the Tisane language models.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFamilyDetailsRequest;
import org.openapis.openapi.models.operations.GetFamilyDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFamilyDetailsRequest req = new GetFamilyDetailsRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                id = "{family_id}";
            }};            

            GetFamilyDetailsResponse res = sdk.languageModelDirectAccess.getFamilyDetails(req);

            if (res.getFamilyDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFeatureValues

Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.

Returns the values as a JSON array of strings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFeatureValuesRequest;
import org.openapis.openapi.models.operations.ListFeatureValuesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListFeatureValuesRequest req = new ListFeatureValuesRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                description = "{feature_list_name}";
                language = "{language_code}";
                type = "{Grammar/Style/Semantics}";
            }};            

            ListFeatureValuesResponse res = sdk.languageModelDirectAccess.listFeatureValues(req);

            if (res.listFeatureValues200ApplicationJSONStrings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHypernyms

Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHypernymsRequest;
import org.openapis.openapi.models.operations.ListHypernymsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHypernymsRequest req = new ListHypernymsRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                family = "{family_id}";
                maxLevel = "{max_number_of_levels}";
            }};            

            ListHypernymsResponse res = sdk.languageModelDirectAccess.listHypernyms(req);

            if (res.listHypernyms200ApplicationJSONArrays != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHyponyms

Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHyponymsRequest;
import org.openapis.openapi.models.operations.ListHyponymsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListHyponymsRequest req = new ListHyponymsRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                family = "{family_id}";
                maxLevel = "{max_number_of_levels}";
            }};            

            ListHyponymsResponse res = sdk.languageModelDirectAccess.listHyponyms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listInflectedForms

List inflected forms

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListInflectedFormsRequest;
import org.openapis.openapi.models.operations.ListInflectedFormsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListInflectedFormsRequest req = new ListInflectedFormsRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                family = "{family_id}";
                language = "{language_code}";
                lexeme = "{lexeme_id}";
            }};            

            ListInflectedFormsResponse res = sdk.languageModelDirectAccess.listInflectedForms(req);

            if (res.listInflectedForms200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWordSenses

Fetches and outputs all senses related to a word.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWordSensesRequest;
import org.openapis.openapi.models.operations.ListWordSensesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListWordSensesRequest req = new ListWordSensesRequest() {{
                ocpApimSubscriptionKey = "{{apiKey}}";
                language = "{language_code}";
                word = "{word}";
            }};            

            ListWordSensesResponse res = sdk.languageModelDirectAccess.listWordSenses(req);

            if (res.listWordSenses200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
