# accounts

### Available Operations

* [deleteAccountsId](#deleteaccountsid) - Delete account
* [getAccountsId](#getaccountsid) - Get account
* [getInstitutionsIdAccounts](#getinstitutionsidaccounts) - List accounts in institution
* [getUsersIdAccounts](#getusersidaccounts) - List accounts in user
* [postUsersIdAccounts](#postusersidaccounts) - Create an account in user
* [putAccountsId](#putaccountsid) - Update account
* [putUsersIdAccounts](#putusersidaccounts) - Update the display order of accounts in user

## deleteAccountsId

Deletes an account and all its data by ID, optionally merge scenarios into another account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountsIdRequest;
import org.openapis.openapi.models.operations.DeleteAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccountsIdRequest req = new DeleteAccountsIdRequest(844266L);            

            DeleteAccountsIdResponse res = sdk.accounts.deleteAccountsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountsId

Gets an account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsIdRequest;
import org.openapis.openapi.models.operations.GetAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAccountsIdRequest req = new GetAccountsIdRequest(857946L);            

            GetAccountsIdResponse res = sdk.accounts.getAccountsId(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstitutionsIdAccounts

Lists accounts belonging to an institution by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstitutionsIdAccountsRequest;
import org.openapis.openapi.models.operations.GetInstitutionsIdAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetInstitutionsIdAccountsRequest req = new GetInstitutionsIdAccountsRequest(847252L);            

            GetInstitutionsIdAccountsResponse res = sdk.accounts.getInstitutionsIdAccounts(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsersIdAccounts

Lists all accounts belonging to the user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersIdAccountsRequest;
import org.openapis.openapi.models.operations.GetUsersIdAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUsersIdAccountsRequest req = new GetUsersIdAccountsRequest(623564L);            

            GetUsersIdAccountsResponse res = sdk.accounts.getUsersIdAccounts(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postUsersIdAccounts

Creates and returns an account belonging to the user by their ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUsersIdAccountsRequest;
import org.openapis.openapi.models.operations.PostUsersIdAccountsRequestBody;
import org.openapis.openapi.models.operations.PostUsersIdAccountsRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PostUsersIdAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostUsersIdAccountsRequest req = new PostUsersIdAccountsRequest(384382L) {{
                requestBody = new PostUsersIdAccountsRequestBody("NZD", 42L, "Foo", PostUsersIdAccountsRequestBodyTypeEnum.BANK);;
            }};            

            PostUsersIdAccountsResponse res = sdk.accounts.postUsersIdAccounts(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putAccountsId

Updates and returns an account by its ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutAccountsIdRequest;
import org.openapis.openapi.models.operations.PutAccountsIdRequestBody;
import org.openapis.openapi.models.operations.PutAccountsIdRequestBodyTypeEnum;
import org.openapis.openapi.models.operations.PutAccountsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutAccountsIdRequest req = new PutAccountsIdRequest(297534L) {{
                requestBody = new PutAccountsIdRequestBody() {{
                    currencyCode = "NZD";
                    isNetWorth = false;
                    title = "Savings";
                    type = PutAccountsIdRequestBodyTypeEnum.BANK;
                }};;
            }};            

            PutAccountsIdResponse res = sdk.accounts.putAccountsId(req);

            if (res.account != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putUsersIdAccounts

Updates the display order of accounts belonging to the user, by accepting an array of accounts in their new display order.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutUsersIdAccountsRequest;
import org.openapis.openapi.models.operations.PutUsersIdAccountsRequestBody;
import org.openapis.openapi.models.operations.PutUsersIdAccountsResponse;
import org.openapis.openapi.models.shared.Account;
import org.openapis.openapi.models.shared.AccountTypeEnum;
import org.openapis.openapi.models.shared.Institution;
import org.openapis.openapi.models.shared.Scenario;
import org.openapis.openapi.models.shared.ScenarioTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TransactionAccount;
import org.openapis.openapi.models.shared.TransactionAccountTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    developerKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutUsersIdAccountsRequest req = new PutUsersIdAccountsRequest(56713L) {{
                requestBody = new PutUsersIdAccountsRequestBody(                new org.openapis.openapi.models.shared.Account[]{{
                                    add(new Account() {{
                                        createdAt = "2018-02-27";
                                        currencyCode = "NZD";
                                        currentBalance = 2694.39;
                                        currentBalanceDate = "2018-02-27";
                                        currentBalanceExchangeRate = 1.5;
                                        currentBalanceInBaseCurrency = 4041.59;
                                        id = 42L;
                                        isNetWorth = false;
                                        primaryScenario = new Scenario() {{
                                            achieveDate = "tempora";
                                            closingBalance = 5431.2;
                                            closingBalanceDate = "2018-02-27";
                                            createdAt = "2015-04-21T22:42:22Z";
                                            currentBalance = 5431.2;
                                            currentBalanceDate = "2018-02-27";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 8146.8;
                                            description = "suscipit";
                                            id = 42L;
                                            interestRate = 2.4;
                                            interestRateRepeatId = 4L;
                                            maximumValue = 42;
                                            minimumValue = 4000;
                                            safeBalance = 5431.2;
                                            safeBalanceInBaseCurrency = 8146.8;
                                            startingBalance = 2450;
                                            startingBalanceDate = "2018-02-27";
                                            title = "Wedding";
                                            type = ScenarioTypeEnum.NO_INTEREST;
                                            updatedAt = "2015-04-21T22:42:22Z";
                                        }};
                                        primaryTransactionAccount = new TransactionAccount() {{
                                            createdAt = "2015-03-17T02:42:10Z";
                                            currencyCode = "NZD";
                                            currentBalance = 2694.39;
                                            currentBalanceDate = "2015-07-03";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 4041.59;
                                            id = 96027L;
                                            institution = new Institution() {{
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currencyCode = "NZD";
                                                id = 57L;
                                                title = "Bank of Foo";
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }};
                                            name = "Sample Credit";
                                            number = "ASBCRD44554";
                                            safeBalance = 2694.39;
                                            safeBalanceInBaseCurrency = 4041.59;
                                            startingBalance = 3547.45;
                                            startingBalanceDate = "2015-03-15";
                                            type = TransactionAccountTypeEnum.BANK;
                                            updatedAt = "2015-07-02T22:14:49Z";
                                        }};
                                        safeBalance = 2694.39;
                                        safeBalanceInBaseCurrency = 4041.59;
                                        scenarios = new org.openapis.openapi.models.shared.Scenario[]{{
                                            add(new Scenario() {{
                                                achieveDate = "minus";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "placeat";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "voluptatum";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "iusto";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                        }};
                                        title = "Bank of Foo";
                                        transactionAccounts = new org.openapis.openapi.models.shared.TransactionAccount[]{{
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                        }};
                                        type = AccountTypeEnum.BANK;
                                        updatedAt = "2018-02-27";
                                    }}),
                                    add(new Account() {{
                                        createdAt = "2018-02-27";
                                        currencyCode = "NZD";
                                        currentBalance = 2694.39;
                                        currentBalanceDate = "2018-02-27";
                                        currentBalanceExchangeRate = 1.5;
                                        currentBalanceInBaseCurrency = 4041.59;
                                        id = 42L;
                                        isNetWorth = false;
                                        primaryScenario = new Scenario() {{
                                            achieveDate = "nisi";
                                            closingBalance = 5431.2;
                                            closingBalanceDate = "2018-02-27";
                                            createdAt = "2015-04-21T22:42:22Z";
                                            currentBalance = 5431.2;
                                            currentBalanceDate = "2018-02-27";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 8146.8;
                                            description = "recusandae";
                                            id = 42L;
                                            interestRate = 2.4;
                                            interestRateRepeatId = 4L;
                                            maximumValue = 42;
                                            minimumValue = 4000;
                                            safeBalance = 5431.2;
                                            safeBalanceInBaseCurrency = 8146.8;
                                            startingBalance = 2450;
                                            startingBalanceDate = "2018-02-27";
                                            title = "Wedding";
                                            type = ScenarioTypeEnum.NO_INTEREST;
                                            updatedAt = "2015-04-21T22:42:22Z";
                                        }};
                                        primaryTransactionAccount = new TransactionAccount() {{
                                            createdAt = "2015-03-17T02:42:10Z";
                                            currencyCode = "NZD";
                                            currentBalance = 2694.39;
                                            currentBalanceDate = "2015-07-03";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 4041.59;
                                            id = 96027L;
                                            institution = new Institution() {{
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currencyCode = "NZD";
                                                id = 57L;
                                                title = "Bank of Foo";
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }};
                                            name = "Sample Credit";
                                            number = "ASBCRD44554";
                                            safeBalance = 2694.39;
                                            safeBalanceInBaseCurrency = 4041.59;
                                            startingBalance = 3547.45;
                                            startingBalanceDate = "2015-03-15";
                                            type = TransactionAccountTypeEnum.BANK;
                                            updatedAt = "2015-07-02T22:14:49Z";
                                        }};
                                        safeBalance = 2694.39;
                                        safeBalanceInBaseCurrency = 4041.59;
                                        scenarios = new org.openapis.openapi.models.shared.Scenario[]{{
                                            add(new Scenario() {{
                                                achieveDate = "ab";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "quis";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "veritatis";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "deserunt";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "perferendis";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "ipsam";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "repellendus";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "sapiente";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                        }};
                                        title = "Bank of Foo";
                                        transactionAccounts = new org.openapis.openapi.models.shared.TransactionAccount[]{{
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                        }};
                                        type = AccountTypeEnum.BANK;
                                        updatedAt = "2018-02-27";
                                    }}),
                                    add(new Account() {{
                                        createdAt = "2018-02-27";
                                        currencyCode = "NZD";
                                        currentBalance = 2694.39;
                                        currentBalanceDate = "2018-02-27";
                                        currentBalanceExchangeRate = 1.5;
                                        currentBalanceInBaseCurrency = 4041.59;
                                        id = 42L;
                                        isNetWorth = false;
                                        primaryScenario = new Scenario() {{
                                            achieveDate = "odit";
                                            closingBalance = 5431.2;
                                            closingBalanceDate = "2018-02-27";
                                            createdAt = "2015-04-21T22:42:22Z";
                                            currentBalance = 5431.2;
                                            currentBalanceDate = "2018-02-27";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 8146.8;
                                            description = "at";
                                            id = 42L;
                                            interestRate = 2.4;
                                            interestRateRepeatId = 4L;
                                            maximumValue = 42;
                                            minimumValue = 4000;
                                            safeBalance = 5431.2;
                                            safeBalanceInBaseCurrency = 8146.8;
                                            startingBalance = 2450;
                                            startingBalanceDate = "2018-02-27";
                                            title = "Wedding";
                                            type = ScenarioTypeEnum.NO_INTEREST;
                                            updatedAt = "2015-04-21T22:42:22Z";
                                        }};
                                        primaryTransactionAccount = new TransactionAccount() {{
                                            createdAt = "2015-03-17T02:42:10Z";
                                            currencyCode = "NZD";
                                            currentBalance = 2694.39;
                                            currentBalanceDate = "2015-07-03";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 4041.59;
                                            id = 96027L;
                                            institution = new Institution() {{
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currencyCode = "NZD";
                                                id = 57L;
                                                title = "Bank of Foo";
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }};
                                            name = "Sample Credit";
                                            number = "ASBCRD44554";
                                            safeBalance = 2694.39;
                                            safeBalanceInBaseCurrency = 4041.59;
                                            startingBalance = 3547.45;
                                            startingBalanceDate = "2015-03-15";
                                            type = TransactionAccountTypeEnum.BANK;
                                            updatedAt = "2015-07-02T22:14:49Z";
                                        }};
                                        safeBalance = 2694.39;
                                        safeBalanceInBaseCurrency = 4041.59;
                                        scenarios = new org.openapis.openapi.models.shared.Scenario[]{{
                                            add(new Scenario() {{
                                                achieveDate = "maiores";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "molestiae";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "quod";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "quod";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "esse";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "totam";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "porro";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "dolorum";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                        }};
                                        title = "Bank of Foo";
                                        transactionAccounts = new org.openapis.openapi.models.shared.TransactionAccount[]{{
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                        }};
                                        type = AccountTypeEnum.BANK;
                                        updatedAt = "2018-02-27";
                                    }}),
                                    add(new Account() {{
                                        createdAt = "2018-02-27";
                                        currencyCode = "NZD";
                                        currentBalance = 2694.39;
                                        currentBalanceDate = "2018-02-27";
                                        currentBalanceExchangeRate = 1.5;
                                        currentBalanceInBaseCurrency = 4041.59;
                                        id = 42L;
                                        isNetWorth = false;
                                        primaryScenario = new Scenario() {{
                                            achieveDate = "nam";
                                            closingBalance = 5431.2;
                                            closingBalanceDate = "2018-02-27";
                                            createdAt = "2015-04-21T22:42:22Z";
                                            currentBalance = 5431.2;
                                            currentBalanceDate = "2018-02-27";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 8146.8;
                                            description = "officia";
                                            id = 42L;
                                            interestRate = 2.4;
                                            interestRateRepeatId = 4L;
                                            maximumValue = 42;
                                            minimumValue = 4000;
                                            safeBalance = 5431.2;
                                            safeBalanceInBaseCurrency = 8146.8;
                                            startingBalance = 2450;
                                            startingBalanceDate = "2018-02-27";
                                            title = "Wedding";
                                            type = ScenarioTypeEnum.NO_INTEREST;
                                            updatedAt = "2015-04-21T22:42:22Z";
                                        }};
                                        primaryTransactionAccount = new TransactionAccount() {{
                                            createdAt = "2015-03-17T02:42:10Z";
                                            currencyCode = "NZD";
                                            currentBalance = 2694.39;
                                            currentBalanceDate = "2015-07-03";
                                            currentBalanceExchangeRate = 1.5;
                                            currentBalanceInBaseCurrency = 4041.59;
                                            id = 96027L;
                                            institution = new Institution() {{
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currencyCode = "NZD";
                                                id = 57L;
                                                title = "Bank of Foo";
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }};
                                            name = "Sample Credit";
                                            number = "ASBCRD44554";
                                            safeBalance = 2694.39;
                                            safeBalanceInBaseCurrency = 4041.59;
                                            startingBalance = 3547.45;
                                            startingBalanceDate = "2015-03-15";
                                            type = TransactionAccountTypeEnum.BANK;
                                            updatedAt = "2015-07-02T22:14:49Z";
                                        }};
                                        safeBalance = 2694.39;
                                        safeBalanceInBaseCurrency = 4041.59;
                                        scenarios = new org.openapis.openapi.models.shared.Scenario[]{{
                                            add(new Scenario() {{
                                                achieveDate = "fugit";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "deleniti";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "hic";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "optio";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                            add(new Scenario() {{
                                                achieveDate = "totam";
                                                closingBalance = 5431.2;
                                                closingBalanceDate = "2018-02-27";
                                                createdAt = "2015-04-21T22:42:22Z";
                                                currentBalance = 5431.2;
                                                currentBalanceDate = "2018-02-27";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 8146.8;
                                                description = "beatae";
                                                id = 42L;
                                                interestRate = 2.4;
                                                interestRateRepeatId = 4L;
                                                maximumValue = 42;
                                                minimumValue = 4000;
                                                safeBalance = 5431.2;
                                                safeBalanceInBaseCurrency = 8146.8;
                                                startingBalance = 2450;
                                                startingBalanceDate = "2018-02-27";
                                                title = "Wedding";
                                                type = ScenarioTypeEnum.NO_INTEREST;
                                                updatedAt = "2015-04-21T22:42:22Z";
                                            }}),
                                        }};
                                        title = "Bank of Foo";
                                        transactionAccounts = new org.openapis.openapi.models.shared.TransactionAccount[]{{
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                            add(new TransactionAccount() {{
                                                createdAt = "2015-03-17T02:42:10Z";
                                                currencyCode = "NZD";
                                                currentBalance = 2694.39;
                                                currentBalanceDate = "2015-07-03";
                                                currentBalanceExchangeRate = 1.5;
                                                currentBalanceInBaseCurrency = 4041.59;
                                                id = 96027L;
                                                institution = new Institution() {{
                                                    createdAt = "2015-04-21T22:42:22Z";
                                                    currencyCode = "NZD";
                                                    id = 57L;
                                                    title = "Bank of Foo";
                                                    updatedAt = "2015-04-21T22:42:22Z";
                                                }};
                                                name = "Sample Credit";
                                                number = "ASBCRD44554";
                                                safeBalance = 2694.39;
                                                safeBalanceInBaseCurrency = 4041.59;
                                                startingBalance = 3547.45;
                                                startingBalanceDate = "2015-03-15";
                                                type = TransactionAccountTypeEnum.BANK;
                                                updatedAt = "2015-07-02T22:14:49Z";
                                            }}),
                                        }};
                                        type = AccountTypeEnum.BANK;
                                        updatedAt = "2018-02-27";
                                    }}),
                                }});;
            }};            

            PutUsersIdAccountsResponse res = sdk.accounts.putUsersIdAccounts(req);

            if (res.accounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
