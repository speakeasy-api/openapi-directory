# accountInformationServiceAIS

## Overview

The Account Information Service (AIS) offers the following services:
  * Transaction reports for a given account or card account including balances if applicable
  * Balances of a given account or card account
  * A list of available accounts or card account
  * Account details of a given account or card account or of the list of all accessible accounts or card account  relative to a granted consent


### Available Operations

* [createConsent](#createconsent) - Create consent
* [deleteConsent](#deleteconsent) - Delete Consent
* [getAccountList](#getaccountlist) - Read account list
* [getBalances](#getbalances) - Read balance
* [getConsentAuthorisation](#getconsentauthorisation) - Get consent authorisation sub-resources request
* [getConsentInformation](#getconsentinformation) - Get consent request
* [getConsentScaStatus](#getconsentscastatus) - Read the SCA status of the consent authorisation
* [getConsentStatus](#getconsentstatus) - Consent status request
* [getTransactionDetails](#gettransactiondetails) - Read transaction details
* [getTransactionList](#gettransactionlist) - Read transaction list of an account
* [readAccountDetails](#readaccountdetails) - Read account details
* [startConsentAuthorisation](#startconsentauthorisation) - Start the authorisation process for a consent
* [updateConsentsPsuData](#updateconsentspsudata) - Update PSU Data for consents

## createConsent

This method create a consent resource, defining access rights to dedicated accounts of 
a given PSU-ID. These accounts are addressed explicitly in the method as 
parameters as a core function.

**Side Effects**
When this consent request is a request where the "recurringIndicator" equals "true",
and if it exists already a former consent for recurring access on account information 
for the addressed PSU, then the former consent automatically expires as soon as the new 
consent request is authorised by the PSU.

Optional Extension:
As an option, an ASPSP might optionally accept a specific access right on the access on all PSD2 related services for all available accounts.

As another option an ASPSP might optionally also accept a command, where only access rights are inserted without mentioning the addressed account. 
The relation to accounts is then handled afterwards between PSU and ASPSP. 
This option is not supported for the Embedded SCA Approach. 
As a last option, an ASPSP might in addition accept a command with access rights
  * to see the list of available payment accounts or
  * to see the list of available payment accounts with balances.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConsentRequest;
import org.openapis.openapi.models.operations.CreateConsentResponse;
import org.openapis.openapi.models.operations.CreateConsentSecurity;
import org.openapis.openapi.models.shared.AccountAccess;
import org.openapis.openapi.models.shared.AccountAccessAllPsd2Enum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsEnum;
import org.openapis.openapi.models.shared.AccountAccessAvailableAccountsWithBalanceEnum;
import org.openapis.openapi.models.shared.AccountReference16CH;
import org.openapis.openapi.models.shared.AdditionalInformationAccess;
import org.openapis.openapi.models.shared.Consents;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateConsentRequest req = new CreateConsentRequest("67.47.198.188", "esse") {{
                digest = "ipsum";
                psuAccept = "excepturi";
                psuAcceptCharset = "aspernatur";
                psuAcceptEncoding = "perferendis";
                psuAcceptLanguage = "ad";
                psuCorporateID = "natus";
                psuCorporateIDType = "sed";
                psuDeviceID = "iste";
                psuGeoLocation = "dolor";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "laboriosam";
                psuIDType = "hic";
                psuIPPort = "saepe";
                psuUserAgent = "fuga";
                signature = "in";
                tppBrandLoggingInformation = "corporis";
                tppExplicitAuthorisationPreferred = false;
                tppNokRedirectURI = "https://innocent-thinking.net";
                tppNotificationContentPreferred = "architecto";
                tppNotificationURI = "ipsa";
                tppRedirectPreferred = false;
                tppRedirectURI = "https://qualified-pew.net";
                tppSignatureCertificate = "dolores";
                consents = new Consents(                new AccountAccess() {{
                                    accounts = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "corporis";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                    additionalInformation = new AdditionalInformationAccess() {{
                                        ownerName = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "nobis";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                        }};
                                        trustedBeneficiaries = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "omnis";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                            add(new AccountReference16CH() {{
                                                cashAccountType = "nemo";
                                                currency = "EUR";
                                                iban = "FR7612345987650123456789014";
                                                otherAccountIdentification = "90-100100-0";
                                            }}),
                                        }};
                                    }};;
                                    allPsd2 = AccountAccessAllPsd2Enum.ALL_ACCOUNTS;
                                    availableAccounts = AccountAccessAvailableAccountsEnum.ALL_ACCOUNTS_WITH_OWNER_NAME;
                                    availableAccountsWithBalance = AccountAccessAvailableAccountsWithBalanceEnum.ALL_ACCOUNTS;
                                    balances = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "culpa";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "doloribus";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                    restrictedTo = new String[]{{
                                        add("architecto"),
                                        add("mollitia"),
                                        add("dolorem"),
                                        add("culpa"),
                                    }};
                                    transactions = new org.openapis.openapi.models.shared.AccountReference16CH[]{{
                                        add(new AccountReference16CH() {{
                                            cashAccountType = "repellat";
                                            currency = "EUR";
                                            iban = "FR7612345987650123456789014";
                                            otherAccountIdentification = "90-100100-0";
                                        }}),
                                    }};
                                }};, false, 4L, false, LocalDate.parse("2020-12-31"));;
            }};            

            CreateConsentResponse res = sdk.accountInformationServiceAIS.createConsent(req, new CreateConsentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentsResponse201 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConsent

The TPP can delete an account information consent object if needed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConsentRequest;
import org.openapis.openapi.models.operations.DeleteConsentResponse;
import org.openapis.openapi.models.operations.DeleteConsentSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteConsentRequest req = new DeleteConsentRequest("mollitia", "occaecati") {{
                digest = "numquam";
                psuAccept = "commodi";
                psuAcceptCharset = "quam";
                psuAcceptEncoding = "molestiae";
                psuAcceptLanguage = "velit";
                psuDeviceID = "error";
                psuGeoLocation = "quia";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "28.172.168.81";
                psuIPPort = "odit";
                psuUserAgent = "quo";
                signature = "sequi";
                tppSignatureCertificate = "tenetur";
            }};            

            DeleteConsentResponse res = sdk.accountInformationServiceAIS.deleteConsent(req, new DeleteConsentSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountList

Read the identifiers of the available payment account together with 
booking balance information, depending on the consent granted.

It is assumed that a consent of the PSU to this access is already given and stored on the ASPSP system.
The addressed list of accounts depends then on the PSU ID and the stored consent addressed by consentId,
respectively the OAuth2 access token.

Returns all identifiers of the accounts, to which an account access has been granted to through
the /consents endpoint by the PSU.
In addition, relevant information about the accounts and hyperlinks to corresponding account
information resources are provided if a related consent has been already granted.

Remark: Note that the /consents endpoint optionally offers to grant an access on all available
payment accounts of a PSU.
In this case, this endpoint will deliver the information about all available payment accounts
of the PSU at this ASPSP.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountListRequest;
import org.openapis.openapi.models.operations.GetAccountListResponse;
import org.openapis.openapi.models.operations.GetAccountListSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountListRequest req = new GetAccountListRequest("ipsam", "id") {{
                digest = "possimus";
                psuAccept = "aut";
                psuAcceptCharset = "quasi";
                psuAcceptEncoding = "error";
                psuAcceptLanguage = "temporibus";
                psuDeviceID = "laborum";
                psuGeoLocation = "quasi";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "249.224.119.130";
                psuIPPort = "voluptatibus";
                psuUserAgent = "ipsa";
                signature = "omnis";
                tppSignatureCertificate = "voluptate";
                withBalance = false;
            }};            

            GetAccountListResponse res = sdk.accountInformationServiceAIS.getAccountList(req, new GetAccountListSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.accountList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBalances

Reads account data from a given account addressed by "account-id". 

**Remark:** This account-id can be a tokenised identification due to data protection reason since the path 
information might be logged on intermediary servers within the ASPSP sphere. 
This account-id then can be retrieved by the "Get account list" call.

The account-id is constant at least throughout the lifecycle of a given consent.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalancesRequest;
import org.openapis.openapi.models.operations.GetBalancesResponse;
import org.openapis.openapi.models.operations.GetBalancesSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalancesRequest req = new GetBalancesRequest("cum", "perferendis", "qwer3456tzui7890") {{
                digest = "doloremque";
                psuAccept = "reprehenderit";
                psuAcceptCharset = "ut";
                psuAcceptEncoding = "maiores";
                psuAcceptLanguage = "dicta";
                psuDeviceID = "corporis";
                psuGeoLocation = "dolore";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "30.176.81.225";
                psuIPPort = "commodi";
                psuUserAgent = "repudiandae";
                signature = "quae";
                tppSignatureCertificate = "ipsum";
            }};            

            GetBalancesResponse res = sdk.accountInformationServiceAIS.getBalances(req, new GetBalancesSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.readAccountBalanceResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsentAuthorisation

Return a list of all authorisation subresources IDs which have been created.

This function returns an array of hyperlinks to all generated authorisation sub-resources.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsentAuthorisationRequest;
import org.openapis.openapi.models.operations.GetConsentAuthorisationResponse;
import org.openapis.openapi.models.operations.GetConsentAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConsentAuthorisationRequest req = new GetConsentAuthorisationRequest("quidem", "molestias") {{
                digest = "excepturi";
                psuAccept = "pariatur";
                psuAcceptCharset = "modi";
                psuAcceptEncoding = "praesentium";
                psuAcceptLanguage = "rem";
                psuDeviceID = "voluptates";
                psuGeoLocation = "quasi";
                psuHttpMethod = PSUHttpMethodEnum.DELETE;
                psuIPAddress = "147.21.237.71";
                psuIPPort = "enim";
                psuUserAgent = "consequatur";
                signature = "est";
                tppSignatureCertificate = "quibusdam";
            }};            

            GetConsentAuthorisationResponse res = sdk.accountInformationServiceAIS.getConsentAuthorisation(req, new GetConsentAuthorisationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.authorisations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsentInformation

Returns the content of an account information consent object. 
This is returning the data for the TPP especially in cases, 
where the consent was directly managed between ASPSP and PSU e.g. in a redirect SCA Approach.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsentInformationRequest;
import org.openapis.openapi.models.operations.GetConsentInformationResponse;
import org.openapis.openapi.models.operations.GetConsentInformationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConsentInformationRequest req = new GetConsentInformationRequest("explicabo", "deserunt") {{
                digest = "distinctio";
                psuAccept = "quibusdam";
                psuAcceptCharset = "labore";
                psuAcceptEncoding = "modi";
                psuAcceptLanguage = "qui";
                psuDeviceID = "aliquid";
                psuGeoLocation = "cupiditate";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "5.42.212.94";
                psuIPPort = "alias";
                psuUserAgent = "fugit";
                signature = "dolorum";
                tppSignatureCertificate = "excepturi";
            }};            

            GetConsentInformationResponse res = sdk.accountInformationServiceAIS.getConsentInformation(req, new GetConsentInformationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentInformationResponse200Json != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsentScaStatus

This method returns the SCA status of a consent initiation's authorisation sub-resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsentScaStatusRequest;
import org.openapis.openapi.models.operations.GetConsentScaStatusResponse;
import org.openapis.openapi.models.operations.GetConsentScaStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConsentScaStatusRequest req = new GetConsentScaStatusRequest("tempora", "123auth456", "facilis") {{
                digest = "tempore";
                psuAccept = "labore";
                psuAcceptCharset = "delectus";
                psuAcceptEncoding = "eum";
                psuAcceptLanguage = "non";
                psuDeviceID = "eligendi";
                psuGeoLocation = "sint";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "151.229.146.163";
                psuIPPort = "dolor";
                psuUserAgent = "debitis";
                signature = "a";
                tppSignatureCertificate = "dolorum";
            }};            

            GetConsentScaStatusResponse res = sdk.accountInformationServiceAIS.getConsentScaStatus(req, new GetConsentScaStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.scaStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsentStatus

Read the status of an account information consent resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsentStatusRequest;
import org.openapis.openapi.models.operations.GetConsentStatusResponse;
import org.openapis.openapi.models.operations.GetConsentStatusSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConsentStatusRequest req = new GetConsentStatusRequest("in", "in") {{
                digest = "illum";
                psuAccept = "maiores";
                psuAcceptCharset = "rerum";
                psuAcceptEncoding = "dicta";
                psuAcceptLanguage = "magnam";
                psuDeviceID = "cumque";
                psuGeoLocation = "facere";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "101.172.225.63";
                psuIPPort = "occaecati";
                psuUserAgent = "enim";
                signature = "accusamus";
                tppSignatureCertificate = "delectus";
            }};            

            GetConsentStatusResponse res = sdk.accountInformationServiceAIS.getConsentStatus(req, new GetConsentStatusSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.consentStatusResponse200 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionDetails

Reads transaction details from a given transaction addressed by "transactionId" on a given account addressed by "account-id".
This call is only available on transactions as reported in a JSON format.

**Remark:** Please note that the PATH might be already given in detail by the corresponding entry of the response of the
"Read Transaction List" call within the _links subfield.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionDetailsRequest;
import org.openapis.openapi.models.operations.GetTransactionDetailsResponse;
import org.openapis.openapi.models.operations.GetTransactionDetailsSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionDetailsRequest req = new GetTransactionDetailsRequest("quidem", "provident", "qwer3456tzui7890", "3dc3d5b3-7023-4848-9853-f5400a64e80f") {{
                digest = "nam";
                psuAccept = "id";
                psuAcceptCharset = "blanditiis";
                psuAcceptEncoding = "deleniti";
                psuAcceptLanguage = "sapiente";
                psuDeviceID = "amet";
                psuGeoLocation = "deserunt";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "108.158.155.121";
                psuIPPort = "perferendis";
                psuUserAgent = "nihil";
                signature = "magnam";
                tppSignatureCertificate = "distinctio";
            }};            

            GetTransactionDetailsResponse res = sdk.accountInformationServiceAIS.getTransactionDetails(req, new GetTransactionDetailsSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.getTransactionDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionList

Read transaction reports or transaction lists of a given account ddressed by "account-id", depending on the steering parameter
"bookingStatus" together with balances.

For a given account, additional parameters are e.g. the attributes "dateFrom" and "dateTo".
The ASPSP might add balance information, if transaction lists without balances are not supported.


### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionListRequest;
import org.openapis.openapi.models.operations.GetTransactionListResponse;
import org.openapis.openapi.models.operations.GetTransactionListSecurity;
import org.openapis.openapi.models.shared.BookingStatusEnum;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionListRequest req = new GetTransactionListRequest("id", "labore", "qwer3456tzui7890", BookingStatusEnum.BOOKED) {{
                digest = "suscipit";
                psuAccept = "natus";
                psuAcceptCharset = "nobis";
                psuAcceptEncoding = "eum";
                psuAcceptLanguage = "vero";
                psuDeviceID = "aspernatur";
                psuGeoLocation = "architecto";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuIPAddress = "23.145.90.151";
                psuIPPort = "quos";
                psuUserAgent = "sint";
                signature = "accusantium";
                tppSignatureCertificate = "mollitia";
                dateFrom = LocalDate.parse("2021-01-16");
                dateTo = LocalDate.parse("2022-07-27");
                deltaList = false;
                entryReferenceFrom = "dolor";
                withBalance = false;
            }};            

            GetTransactionListResponse res = sdk.accountInformationServiceAIS.getTransactionList(req, new GetTransactionListSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.transactionsResponse200Json != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## readAccountDetails

Reads details about an account, with balances where required. 
It is assumed that a consent of the PSU to 
this access is already given and stored on the ASPSP system. 
The addressed details of this account depends then on the stored consent addressed by consentId, 
respectively the OAuth2 access token.

**NOTE:** The account-id can represent a multicurrency account.
In this case the currency code is set to "XXX".

Give detailed information about the addressed account.

Give detailed information about the addressed account together with balance information


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReadAccountDetailsRequest;
import org.openapis.openapi.models.operations.ReadAccountDetailsResponse;
import org.openapis.openapi.models.operations.ReadAccountDetailsSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReadAccountDetailsRequest req = new ReadAccountDetailsRequest("necessitatibus", "odit", "qwer3456tzui7890") {{
                digest = "nemo";
                psuAccept = "quasi";
                psuAcceptCharset = "iure";
                psuAcceptEncoding = "doloribus";
                psuAcceptLanguage = "debitis";
                psuDeviceID = "eius";
                psuGeoLocation = "maxime";
                psuHttpMethod = PSUHttpMethodEnum.PUT;
                psuIPAddress = "180.114.25.25";
                psuIPPort = "repudiandae";
                psuUserAgent = "ullam";
                signature = "expedita";
                tppSignatureCertificate = "nihil";
                withBalance = false;
            }};            

            ReadAccountDetailsResponse res = sdk.accountInformationServiceAIS.readAccountDetails(req, new ReadAccountDetailsSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.readAccountDetails200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startConsentAuthorisation

Create an authorisation sub-resource and start the authorisation process of a consent.
The message might in addition transmit authentication and authorisation related data.

his method is iterated n times for a n times SCA authorisation in a
corporate context, each creating an own authorisation sub-endpoint for
the corresponding PSU authorising the consent.

The ASPSP might make the usage of this access method unnecessary,
since the related authorisation resource will be automatically created by
the ASPSP after the submission of the consent data with the first POST consents call.

The start authorisation process is a process which is needed for creating a new authorisation
or cancellation sub-resource.

This applies in the following scenarios:

  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
    initiation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
    uploaded by using the extended forms:
    * 'startAuthorisationWithPsuIdentfication', 
    * 'startAuthorisationWithPsuAuthentication' 
    * 'startAuthorisationWithEncryptedPsuAuthentication'
    * 'startAuthorisationWithAuthentciationMethodSelection'
  * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
  * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
    payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
    The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
    by using the extended forms as indicated above.
  * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
    executing the cancellation.
  * The signing basket needs to be authorised yet.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartConsentAuthorisationRequest;
import org.openapis.openapi.models.operations.StartConsentAuthorisationResponse;
import org.openapis.openapi.models.operations.StartConsentAuthorisationSecurity;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            StartConsentAuthorisationRequest req = new StartConsentAuthorisationRequest("repellat", "quibusdam") {{
                digest = "sed";
                psuAccept = "saepe";
                psuAcceptCharset = "pariatur";
                psuAcceptEncoding = "accusantium";
                psuAcceptLanguage = "consequuntur";
                psuCorporateID = "praesentium";
                psuCorporateIDType = "natus";
                psuDeviceID = "magni";
                psuGeoLocation = "sunt";
                psuHttpMethod = PSUHttpMethodEnum.PATCH;
                psuId = "illum";
                psuIDType = "pariatur";
                psuIPAddress = "206.105.145.35";
                psuIPPort = "ea";
                psuUserAgent = "accusantium";
                requestBody = "maiores";
                signature = "quidem";
                tppNokRedirectURI = "http://jealous-hearing.net";
                tppNotificationContentPreferred = "eaque";
                tppNotificationURI = "pariatur";
                tppRedirectPreferred = false;
                tppRedirectURI = "http://wise-airbag.org";
                tppSignatureCertificate = "amet";
            }};            

            StartConsentAuthorisationResponse res = sdk.accountInformationServiceAIS.startConsentAuthorisation(req, new StartConsentAuthorisationSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.startScaprocessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConsentsPsuData

This method update PSU data on the consents  resource if needed.
It may authorise a consent within the Embedded SCA Approach where needed.

Independently from the SCA Approach it supports e.g. the selection of
the authentication method and a non-SCA PSU authentication.

There are several possible update PSU data requests in the context of a consent request if needed, 
which depends on the SCA approach:

* Redirect SCA Approach:
  A specific Update PSU data request is applicable for 
    * the selection of authentication methods, before choosing the actual SCA approach.
* Decoupled SCA Approach:
  A specific update PSU data request is only applicable for
  * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
  * the selection of authentication methods.
* Embedded SCA Approach: 
  The Update PSU data request might be used 
  * to add credentials as a first factor authentication data of the PSU and
  * to select the authentication method and
  * transaction authorisation.

The SCA Approach might depend on the chosen SCA method. 
For that reason, the following possible update PSU data request can apply to all SCA approaches:

* Select an SCA method in case of several SCA methods are available for the customer.

There are the following request types on this access path:
  * Update PSU identification
  * Update PSU authentication
  * Select PSU autorization method 
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.
  * Transaction Authorisation
    WARNING: This method needs a reduced header, 
    therefore many optional elements are not present. 
    Maybe in a later version the access path will change.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataRequest;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataResponse;
import org.openapis.openapi.models.operations.UpdateConsentsPsuDataSecurity;
import org.openapis.openapi.models.shared.AuthorisationConfirmation;
import org.openapis.openapi.models.shared.PSUHttpMethodEnum;
import org.openapis.openapi.models.shared.PsuData;
import org.openapis.openapi.models.shared.SelectPsuAuthenticationMethod;
import org.openapis.openapi.models.shared.TransactionAuthorisation;
import org.openapis.openapi.models.shared.UpdatePsuAuthentication;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateConsentsPsuDataRequest req = new UpdateConsentsPsuDataRequest("aut", "123auth456", "cumque") {{
                digest = "corporis";
                psuAccept = "hic";
                psuAcceptCharset = "libero";
                psuAcceptEncoding = "nobis";
                psuAcceptLanguage = "dolores";
                psuCorporateID = "quis";
                psuCorporateIDType = "totam";
                psuDeviceID = "dignissimos";
                psuGeoLocation = "eaque";
                psuHttpMethod = PSUHttpMethodEnum.POST;
                psuId = "nesciunt";
                psuIDType = "eos";
                psuIPAddress = "4.43.203.118";
                psuIPPort = "dolor";
                psuUserAgent = "vero";
                requestBody = new UpdatePsuAuthentication(                new PsuData() {{
                                    additionalEncryptedPassword = "hic";
                                    additionalPassword = "recusandae";
                                    encryptedPassword = "omnis";
                                    password = "facilis";
                                }};);;
                signature = "perspiciatis";
                tppSignatureCertificate = "voluptatem";
            }};            

            UpdateConsentsPsuDataResponse res = sdk.accountInformationServiceAIS.updateConsentsPsuData(req, new UpdateConsentsPsuDataSecurity() {{
                bearerAuthOAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.updateConsentsPsuData200ApplicationJSONOneOf != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
