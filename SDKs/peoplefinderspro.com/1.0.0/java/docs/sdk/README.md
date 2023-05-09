# SDK

## Overview

Self Service Developer API documentation and demo.

##Getting Started

You will need an API access profile user and password in order to access search endpoints.
Your access profile user and password is used for authenticating all requests to our search API. 
You MUST pass the user and password each time you perform a search request.

### Available Operations

* [search](#search) - Search
* [postAddressAutocomplete](#postaddressautocomplete) - Search
* [postContactEnrich](#postcontactenrich) - Search
* [postEmailEnrich](#postemailenrich) - Search
* [postPhoneEnrich](#postphoneenrich) - Search

## search

###### *Click on the grey search box above, to view sample request/response objects for the Identity Verification Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIIDVerification

2.  Add search criteria to your request. At least two are required: SSN, Name, Phone, Address or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street, Unit 102",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchRequestBody;
import org.openapis.openapi.models.operations.SearchRequestBodyAddress;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest() {{
                requestBody = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "tempora";
                        addressLine2 = "suscipit";
                    }};;
                    age = 4776.65;
                    dob = "minus";
                    email = "Junior.Kshlerin@hotmail.com";
                    firstName = "Tianna";
                    lastName = "Smith";
                    middleName = "ab";
                    phoneNumber = "quis";
                }};;
                galaxyApName = "veritatis";
                galaxyApPassword = "deserunt";
                galaxySearchType = "perferendis";
            }};            

            SearchResponse res = sdk.sdk.search(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddressAutocomplete

###### *Click on the grey search box above, to view sample request/response objects for Address Autocomplete Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIAddressAutoComplete

2.  Add search criteria to your request.
    ~~~html
            {
                "Input":"1821 Q"
            }
    ~~~

3.  Submit your search

The JSON request should have parts of the address.

+ <code>Input</code> = null (optional, string) ... address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAddressAutocompleteRequest;
import org.openapis.openapi.models.operations.PostAddressAutocompleteRequestBody;
import org.openapis.openapi.models.operations.PostAddressAutocompleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAddressAutocompleteRequest req = new PostAddressAutocompleteRequest() {{
                requestBody = new PostAddressAutocompleteRequestBody() {{
                    input = "ipsam";
                }};;
                galaxyApName = "repellendus";
                galaxyApPassword = "sapiente";
                galaxySearchType = "quo";
            }};            

            PostAddressAutocompleteResponse res = sdk.sdk.postAddressAutocomplete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContactEnrich

###### *Click on the grey search box above, to view sample request/response objects for Contact Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIContactEnrich

2.  Add search criteria to your request. At least two are required: Name, Phone, Address, or Email.
    ~~~html
            {
                "FirstName": "John",
                "MiddleName": "T",
                "LastName": "Lawrence",
                "Dob":"",
                "Age": 0,
                "Address": {
                    "addressLine1":"123 Q Street",
                    "addressLine2":"Sacramento, CA"
                },
                "PhoneNumber":"",
                "Email":""
            }
    ~~~

3.  Submit your search

A complete list of JSON request properties follows.

+ <code>FirstName</code>= null (optional, string) ... First name.

+ <code>MiddleName</code> = null (optional, string) ... Middle name or middle initial.

+ <code>LastName</code> = null (optional, string) ... Last name.

+ <code>Dob</code> = null (optional, string) ... Date of birth (format: MM/DD/YYYY).

+ <code>Age</code> = null (optional, int) ... Age.

+ <code>Addresses</code> = null (optional, Addresses[]) ... List of addresses.
    + <code>Members</code>
        + <code>AddressLine1</code> = null (optional, string) ... House number, street name and Unit number (i.e. 123 Q Street, Unit 102) or PO Box (i.e. 1821 Q Street).
        + <code>AddressLine2</code> = null (optional, string) ... State or City and State or Zip (i.e. Sacramento, CA).

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContactEnrichRequest;
import org.openapis.openapi.models.operations.PostContactEnrichRequestBody;
import org.openapis.openapi.models.operations.PostContactEnrichRequestBodyAddress;
import org.openapis.openapi.models.operations.PostContactEnrichResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContactEnrichRequest req = new PostContactEnrichRequest() {{
                requestBody = new PostContactEnrichRequestBody() {{
                    address = new PostContactEnrichRequestBodyAddress() {{
                        addressLine1 = "odit";
                        addressLine2 = "at";
                    }};;
                    age = 8700.88;
                    dob = "maiores";
                    email = "Pinkie_Schmidt@yahoo.com";
                    firstName = "Osborne";
                    lastName = "Parisian";
                    middleName = "dicta";
                    phoneNumber = "nam";
                }};;
                galaxyApName = "officia";
                galaxyApPassword = "occaecati";
                galaxySearchType = "fugit";
            }};            

            PostContactEnrichResponse res = sdk.sdk.postContactEnrich(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEmailEnrich

###### *Click on the grey search box above, to view sample request/response objects for Email Enrichment Search*

Perform a search:

1. Add your Access Profile username and password to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPIEmailID

2.  Add search criteria to your request.
    ~~~html
            {
                "Email":"johnsmith@somedomain"
            }
    ~~~

3.  Submit your search

The JSON request should have an email.

+ <code>Email</code> = null (optional, string) ... E-mail address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostEmailEnrichRequest;
import org.openapis.openapi.models.operations.PostEmailEnrichRequestBody;
import org.openapis.openapi.models.operations.PostEmailEnrichResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostEmailEnrichRequest req = new PostEmailEnrichRequest() {{
                requestBody = new PostEmailEnrichRequestBody() {{
                    email = "Tyrel.Rosenbaum@yahoo.com";
                }};;
                galaxyApName = "commodi";
                galaxyApPassword = "molestiae";
                galaxySearchType = "modi";
            }};            

            PostEmailEnrichResponse res = sdk.sdk.postEmailEnrich(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPhoneEnrich

###### *Click on the grey search box above, to view sample request/response objects for Phone Enrichment Search*

Perform a search:

1. Add your key and key secret to the request headers.
    + galaxy-ap-name: [Key]
    + galaxy-ap-password: [Secret]
    + galaxy-search-type: DevAPICallerID

2.  Add search criteria to your request.
    ~~~html
            {
                "Phone":"(123) 456-7890"
            }
    ~~~

3.  Submit your search

The JSON request should have a phone number.

+ <code>Phone</code> = null (optional, string) ... Phone number (formats: ###-###-####, (###) ###-####).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPhoneEnrichRequest;
import org.openapis.openapi.models.operations.PostPhoneEnrichRequestBody;
import org.openapis.openapi.models.operations.PostPhoneEnrichResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPhoneEnrichRequest req = new PostPhoneEnrichRequest() {{
                requestBody = new PostPhoneEnrichRequestBody() {{
                    phone = "1-874-351-0361";
                }};;
                galaxyApName = "iste";
                galaxyApPassword = "dolor";
                galaxySearchType = "natus";
            }};            

            PostPhoneEnrichResponse res = sdk.sdk.postPhoneEnrich(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
