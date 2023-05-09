# sandbox

### Available Operations

* [deleteSandboxSandboxId](#deletesandboxsandboxid) - Delete Sandbox
* [getSandboxSandboxId](#getsandboxsandboxid) - Export Sandbox
* [postSandbox](#postsandbox) - Create Sandbox
* [putSandbox](#putsandbox) - Import Sandbox

## deleteSandboxSandboxId

Delete Sandbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSandboxSandboxIdRequest;
import org.openapis.openapi.models.operations.DeleteSandboxSandboxIdResponse;
import org.openapis.openapi.models.operations.DeleteSandboxSandboxIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteSandboxSandboxIdRequest req = new DeleteSandboxSandboxIdRequest("culpa");            

            DeleteSandboxSandboxIdResponse res = sdk.sandbox.deleteSandboxSandboxId(req, new DeleteSandboxSandboxIdSecurity("doloribus", "sapiente") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
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

## getSandboxSandboxId

Export Sandbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSandboxSandboxIdRequest;
import org.openapis.openapi.models.operations.GetSandboxSandboxIdResponse;
import org.openapis.openapi.models.operations.GetSandboxSandboxIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSandboxSandboxIdRequest req = new GetSandboxSandboxIdRequest("architecto");            

            GetSandboxSandboxIdResponse res = sdk.sandbox.getSandboxSandboxId(req, new GetSandboxSandboxIdSecurity("mollitia", "dolorem") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.sandbox != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSandbox

Create Sandbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSandboxResponse;
import org.openapis.openapi.models.operations.PostSandboxSecurity;
import org.openapis.openapi.models.shared.SandboxRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SandboxRequest req = new SandboxRequest("culpa");            

            PostSandboxResponse res = sdk.sandbox.postSandbox(req, new PostSandboxSecurity("consequuntur", "repellat") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.sandbox != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSandbox

Import Sandbox

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSandboxResponse;
import org.openapis.openapi.models.operations.PutSandboxSecurity;
import org.openapis.openapi.models.shared.Sandbox;
import org.openapis.openapi.models.shared.SandboxBankAccount;
import org.openapis.openapi.models.shared.SandboxBankAccountInfo;
import org.openapis.openapi.models.shared.SandboxBeneficiary;
import org.openapis.openapi.models.shared.SandboxCard;
import org.openapis.openapi.models.shared.SandboxCardInfo;
import org.openapis.openapi.models.shared.SandboxParty;
import org.openapis.openapi.models.shared.SandboxRetryCacheEntry;
import org.openapis.openapi.models.shared.SandboxScheduledPayment;
import org.openapis.openapi.models.shared.SandboxStandingOrder;
import org.openapis.openapi.models.shared.SandboxStatement;
import org.openapis.openapi.models.shared.SandboxTransaction;
import org.openapis.openapi.models.shared.SandboxUser;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Sandbox req = new Sandbox("mollitia") {{
                users = new org.openapis.openapi.models.shared.SandboxUser[]{{
                    add(new SandboxUser() {{
                        accounts = new org.openapis.openapi.models.shared.SandboxBankAccount[]{{
                            add(new SandboxBankAccount() {{
                                beneficiaries = new org.openapis.openapi.models.shared.SandboxBeneficiary[]{{
                                    add(new SandboxBeneficiary() {{
                                        name = "Nellie Frami";
                                    }}),
                                    add(new SandboxBeneficiary() {{
                                        name = "Gloria Padberg";
                                    }}),
                                }};
                                info = new SandboxBankAccountInfo("laborum", "quasi", "reiciendis", "voluptatibus") {{
                                    accountSubType = "odit";
                                    accountType = "quo";
                                    alias = "sequi";
                                    availableBalance = 9495.72;
                                    currency = "ipsam";
                                    description = "id";
                                    iban = "possimus";
                                    ledgerBalance = 135.71;
                                    openingDate = OffsetDateTime.parse("2022-05-18T15:52:05.226Z");
                                    overdraftLimit = 8379.45;
                                }};
                                party = new SandboxParty() {{
                                    id = "e78f097b-0074-4f15-871b-5e6e13b99d48";
                                    name = "Grady Botsford";
                                }};
                                scheduledPayments = new org.openapis.openapi.models.shared.SandboxScheduledPayment[]{{
                                    add(new SandboxScheduledPayment() {{
                                        amount = 9292.97;
                                        description = "incidunt";
                                        executionDate = OffsetDateTime.parse("2022-12-28T14:02:06.064Z");
                                        senderReference = "est";
                                    }}),
                                }};
                                standingOrders = new org.openapis.openapi.models.shared.SandboxStandingOrder[]{{
                                    add(new SandboxStandingOrder("assumenda") {{
                                        amount = 1317.97;
                                        description = "deserunt";
                                        finalPaymentDate = OffsetDateTime.parse("2021-04-26T18:54:54.344Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-09-26T08:57:48.803Z");
                                        frequency = "qui";
                                        lastPaymentDate = OffsetDateTime.parse("2022-05-31T22:08:47.731Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-12-17T07:42:55.593Z");
                                        status = "magni";
                                    }}),
                                    add(new SandboxStandingOrder("eligendi") {{
                                        amount = 3698.08;
                                        description = "alias";
                                        finalPaymentDate = OffsetDateTime.parse("2022-04-28T14:19:37.294Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-06-17T21:27:36.672Z");
                                        frequency = "facilis";
                                        lastPaymentDate = OffsetDateTime.parse("2022-06-04T09:53:33.742Z");
                                        nextPaymentDate = OffsetDateTime.parse("2021-09-13T13:11:22.288Z");
                                        status = "non";
                                    }}),
                                    add(new SandboxStandingOrder("illum") {{
                                        amount = 5761.57;
                                        description = "aliquid";
                                        finalPaymentDate = OffsetDateTime.parse("2021-03-17T21:24:26.606Z");
                                        firstPaymentDate = OffsetDateTime.parse("2021-09-21T14:06:09.271Z");
                                        frequency = "dolor";
                                        lastPaymentDate = OffsetDateTime.parse("2020-02-22T17:45:21.686Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-02-08T14:21:47.573Z");
                                        status = "in";
                                    }}),
                                    add(new SandboxStandingOrder("enim") {{
                                        amount = 9785.71;
                                        description = "rerum";
                                        finalPaymentDate = OffsetDateTime.parse("2022-09-14T10:27:07.590Z");
                                        firstPaymentDate = OffsetDateTime.parse("2020-07-23T21:23:35.691Z");
                                        frequency = "ea";
                                        lastPaymentDate = OffsetDateTime.parse("2022-04-29T11:09:12.937Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-04-02T11:21:13.260Z");
                                        status = "occaecati";
                                    }}),
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 965417;
                                        number = "quidem";
                                        year = 588465;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 725255;
                                        number = "id";
                                        year = 501324;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 533206;
                                        number = "sapiente";
                                        year = 230533;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 643990;
                                        number = "nisi";
                                        year = 423855;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6063.93;
                                        amount = 4748.67;
                                        bookingDateTime = OffsetDateTime.parse("2022-07-13T09:38:30.777Z");
                                        creditDebit = "magnam";
                                        currency = "distinctio";
                                        description = "id";
                                        reference = "labore";
                                        relatedAccount = "labore";
                                        relatedName = "suscipit";
                                        transactionCode = "natus";
                                        valueDateTime = OffsetDateTime.parse("2022-02-21T23:58:20.071Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 8784.53;
                                        amount = 1354.74;
                                        bookingDateTime = OffsetDateTime.parse("2022-09-14T03:02:47.808Z");
                                        creditDebit = "et";
                                        currency = "excepturi";
                                        description = "ullam";
                                        reference = "provident";
                                        relatedAccount = "quos";
                                        relatedName = "sint";
                                        transactionCode = "accusantium";
                                        valueDateTime = OffsetDateTime.parse("2021-01-23T15:47:23.464Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6521.03;
                                        amount = 3209.97;
                                        bookingDateTime = OffsetDateTime.parse("2022-10-12T05:44:19.260Z");
                                        creditDebit = "necessitatibus";
                                        currency = "odit";
                                        description = "nemo";
                                        reference = "quasi";
                                        relatedAccount = "iure";
                                        relatedName = "doloribus";
                                        transactionCode = "debitis";
                                        valueDateTime = OffsetDateTime.parse("2022-03-12T17:44:26.081Z");
                                    }}),
                                }};
                            }}),
                            add(new SandboxBankAccount() {{
                                beneficiaries = new org.openapis.openapi.models.shared.SandboxBeneficiary[]{{
                                    add(new SandboxBeneficiary() {{
                                        name = "Dr. Arnold Bradtke";
                                    }}),
                                    add(new SandboxBeneficiary() {{
                                        name = "Jessie Zulauf";
                                    }}),
                                    add(new SandboxBeneficiary() {{
                                        name = "Al Bashirian";
                                    }}),
                                }};
                                info = new SandboxBankAccountInfo("accusantium", "ab", "maiores", "quidem") {{
                                    accountSubType = "natus";
                                    accountType = "magni";
                                    alias = "sunt";
                                    availableBalance = 7790.51;
                                    currency = "illum";
                                    description = "pariatur";
                                    iban = "maxime";
                                    ledgerBalance = 4113.97;
                                    openingDate = OffsetDateTime.parse("2022-09-20T19:40:48.375Z");
                                    overdraftLimit = 4071.83;
                                }};
                                party = new SandboxParty() {{
                                    id = "576b0d5f-0d30-4c5f-bb25-87053202c73d";
                                    name = "Mindy Walter";
                                }};
                                scheduledPayments = new org.openapis.openapi.models.shared.SandboxScheduledPayment[]{{
                                    add(new SandboxScheduledPayment() {{
                                        amount = 318.38;
                                        description = "porro";
                                        executionDate = OffsetDateTime.parse("2022-07-02T11:46:10.299Z");
                                        senderReference = "error";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 503.7;
                                        description = "occaecati";
                                        executionDate = OffsetDateTime.parse("2022-07-11T08:07:03.616Z");
                                        senderReference = "asperiores";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 9342.14;
                                        description = "modi";
                                        executionDate = OffsetDateTime.parse("2021-08-23T06:19:56.211Z");
                                        senderReference = "deleniti";
                                    }}),
                                }};
                                standingOrders = new org.openapis.openapi.models.shared.SandboxStandingOrder[]{{
                                    add(new SandboxStandingOrder("hic") {{
                                        amount = 5899.1;
                                        description = "nobis";
                                        finalPaymentDate = OffsetDateTime.parse("2021-01-26T22:08:21.462Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-06-12T16:50:10.090Z");
                                        frequency = "aliquid";
                                        lastPaymentDate = OffsetDateTime.parse("2022-10-16T09:46:06.582Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-10-25T00:56:56.568Z");
                                        status = "ipsum";
                                    }}),
                                    add(new SandboxStandingOrder("odio") {{
                                        amount = 5695.74;
                                        description = "cum";
                                        finalPaymentDate = OffsetDateTime.parse("2022-07-05T23:34:50.715Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-04-26T23:32:35.989Z");
                                        frequency = "dolorum";
                                        lastPaymentDate = OffsetDateTime.parse("2022-11-30T20:48:38.083Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-12-11T09:46:30.457Z");
                                        status = "iure";
                                    }}),
                                    add(new SandboxStandingOrder("dolorum") {{
                                        amount = 3117.96;
                                        description = "accusamus";
                                        finalPaymentDate = OffsetDateTime.parse("2021-01-18T05:23:42.271Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-05-20T13:18:59.478Z");
                                        frequency = "eos";
                                        lastPaymentDate = OffsetDateTime.parse("2022-12-13T23:37:42.244Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-10-19T08:40:45.996Z");
                                        status = "soluta";
                                    }}),
                                    add(new SandboxStandingOrder("saepe") {{
                                        amount = 4785.96;
                                        description = "voluptate";
                                        finalPaymentDate = OffsetDateTime.parse("2021-12-05T07:07:55.687Z");
                                        firstPaymentDate = OffsetDateTime.parse("2021-03-17T10:19:08.276Z");
                                        frequency = "distinctio";
                                        lastPaymentDate = OffsetDateTime.parse("2021-08-04T21:36:49.552Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-07-18T13:18:42.293Z");
                                        status = "id";
                                    }}),
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 137220;
                                        number = "perferendis";
                                        year = 229219;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 758379;
                                        number = "accusamus";
                                        year = 320017;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 3834.64;
                                        amount = 6457.85;
                                        bookingDateTime = OffsetDateTime.parse("2022-05-08T23:33:14.875Z");
                                        creditDebit = "repellendus";
                                        currency = "totam";
                                        description = "similique";
                                        reference = "alias";
                                        relatedAccount = "at";
                                        relatedName = "quaerat";
                                        transactionCode = "tempora";
                                        valueDateTime = OffsetDateTime.parse("2022-03-15T17:06:34.956Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 8853.38;
                                        amount = 1856.36;
                                        bookingDateTime = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
                                        creditDebit = "esse";
                                        currency = "harum";
                                        description = "iusto";
                                        reference = "ipsum";
                                        relatedAccount = "quisquam";
                                        relatedName = "tenetur";
                                        transactionCode = "amet";
                                        valueDateTime = OffsetDateTime.parse("2021-03-29T09:11:09.370Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 2539.41;
                                        amount = 3136.92;
                                        bookingDateTime = OffsetDateTime.parse("2022-01-16T12:43:49.763Z");
                                        creditDebit = "totam";
                                        currency = "nihil";
                                        description = "sit";
                                        reference = "expedita";
                                        relatedAccount = "neque";
                                        relatedName = "sed";
                                        transactionCode = "vel";
                                        valueDateTime = OffsetDateTime.parse("2022-04-02T20:32:30.487Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6462.65;
                                        amount = 4635.75;
                                        bookingDateTime = OffsetDateTime.parse("2022-09-21T15:58:20.330Z");
                                        creditDebit = "qui";
                                        currency = "cupiditate";
                                        description = "maxime";
                                        reference = "pariatur";
                                        relatedAccount = "soluta";
                                        relatedName = "dicta";
                                        transactionCode = "laborum";
                                        valueDateTime = OffsetDateTime.parse("2022-06-12T20:49:16.541Z");
                                    }}),
                                }};
                            }}),
                        }};
                        cards = new org.openapis.openapi.models.shared.SandboxCard[]{{
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("fugit", "magni", "odio") {{
                                    availableBalance = 1749.09;
                                    creditLimit = 7168.6;
                                    description = "facilis";
                                    expiration = "aliquid";
                                    holderName = "quam";
                                    ledgerBalance = 5654.21;
                                    number = "temporibus";
                                    subType = "qui";
                                    type = "neque";
                                }};
                                party = new SandboxParty() {{
                                    id = "15bf0cbb-1e31-4b8b-90f3-443a1108e0ad";
                                    name = "Domingo Grady";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 63955;
                                        number = "laudantium";
                                        year = 485628;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 9774.96;
                                        amount = 7875.42;
                                        bookingDateTime = OffsetDateTime.parse("2021-03-07T21:49:29.078Z");
                                        creditDebit = "quis";
                                        currency = "ipsum";
                                        description = "delectus";
                                        reference = "voluptate";
                                        relatedAccount = "consectetur";
                                        relatedName = "vero";
                                        transactionCode = "tenetur";
                                        valueDateTime = OffsetDateTime.parse("2022-01-22T09:31:52.637Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 7155.61;
                                        amount = 7992.03;
                                        bookingDateTime = OffsetDateTime.parse("2022-05-15T21:16:33.535Z");
                                        creditDebit = "facilis";
                                        currency = "vero";
                                        description = "ducimus";
                                        reference = "dolore";
                                        relatedAccount = "quibusdam";
                                        relatedName = "illum";
                                        transactionCode = "sequi";
                                        valueDateTime = OffsetDateTime.parse("2021-06-15T11:19:41.363Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 132.36;
                                        amount = 9742.59;
                                        bookingDateTime = OffsetDateTime.parse("2022-02-20T06:09:58.619Z");
                                        creditDebit = "fugit";
                                        currency = "porro";
                                        description = "maiores";
                                        reference = "doloribus";
                                        relatedAccount = "iusto";
                                        relatedName = "eligendi";
                                        transactionCode = "ducimus";
                                        valueDateTime = OffsetDateTime.parse("2022-05-12T14:13:14.359Z");
                                    }}),
                                }};
                            }}),
                        }};
                        retryCacheEntries = new org.openapis.openapi.models.shared.SandboxRetryCacheEntry[]{{
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "ipsam";
                                count = 410492;
                                expirationTimestamp = OffsetDateTime.parse("2022-07-28T16:45:32.822Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "possimus";
                                count = 297842;
                                expirationTimestamp = OffsetDateTime.parse("2022-08-07T14:04:49.880Z");
                            }}),
                        }};
                        userId = "laudantium";
                    }}),
                    add(new SandboxUser() {{
                        accounts = new org.openapis.openapi.models.shared.SandboxBankAccount[]{{
                            add(new SandboxBankAccount() {{
                                beneficiaries = new org.openapis.openapi.models.shared.SandboxBeneficiary[]{{
                                    add(new SandboxBeneficiary() {{
                                        name = "Ryan Jaskolski";
                                    }}),
                                }};
                                info = new SandboxBankAccountInfo("magnam", "ea", "quo", "consectetur") {{
                                    accountSubType = "voluptatibus";
                                    accountType = "nostrum";
                                    alias = "sapiente";
                                    availableBalance = 7888.73;
                                    currency = "saepe";
                                    description = "ea";
                                    iban = "impedit";
                                    ledgerBalance = 3592.71;
                                    openingDate = OffsetDateTime.parse("2022-08-08T04:23:21.555Z");
                                    overdraftLimit = 811.01;
                                }};
                                party = new SandboxParty() {{
                                    id = "e250fb00-8c42-4e14-9aac-366c8dd6b144";
                                    name = "Ramona Bednar";
                                }};
                                scheduledPayments = new org.openapis.openapi.models.shared.SandboxScheduledPayment[]{{
                                    add(new SandboxScheduledPayment() {{
                                        amount = 2621.18;
                                        description = "esse";
                                        executionDate = OffsetDateTime.parse("2022-06-23T12:34:06.790Z");
                                        senderReference = "fuga";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 4420.15;
                                        description = "quidem";
                                        executionDate = OffsetDateTime.parse("2022-02-24T13:07:28.067Z");
                                        senderReference = "eum";
                                    }}),
                                }};
                                standingOrders = new org.openapis.openapi.models.shared.SandboxStandingOrder[]{{
                                    add(new SandboxStandingOrder("fuga") {{
                                        amount = 8268.71;
                                        description = "eos";
                                        finalPaymentDate = OffsetDateTime.parse("2021-06-04T08:40:57.100Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-12-11T06:00:38.230Z");
                                        frequency = "id";
                                        lastPaymentDate = OffsetDateTime.parse("2022-08-03T04:27:44.236Z");
                                        nextPaymentDate = OffsetDateTime.parse("2020-06-17T05:36:16.683Z");
                                        status = "quo";
                                    }}),
                                    add(new SandboxStandingOrder("esse") {{
                                        amount = 2594.22;
                                        description = "eos";
                                        finalPaymentDate = OffsetDateTime.parse("2022-12-06T12:02:05.098Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-12-24T22:15:46.522Z");
                                        frequency = "tempora";
                                        lastPaymentDate = OffsetDateTime.parse("2021-11-20T21:59:17.660Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-10-21T01:48:15.498Z");
                                        status = "quo";
                                    }}),
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 44612;
                                        number = "distinctio";
                                        year = 799796;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 490819;
                                        number = "inventore";
                                        year = 469498;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 518835;
                                        number = "accusamus";
                                        year = 306810;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 488410;
                                        number = "occaecati";
                                        year = 414567;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 1741.12;
                                        amount = 6455.7;
                                        bookingDateTime = OffsetDateTime.parse("2022-12-19T02:13:29.248Z");
                                        creditDebit = "porro";
                                        currency = "eum";
                                        description = "quas";
                                        reference = "praesentium";
                                        relatedAccount = "consequuntur";
                                        relatedName = "deleniti";
                                        transactionCode = "fugit";
                                        valueDateTime = OffsetDateTime.parse("2021-09-13T21:24:27.316Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 2775.96;
                                        amount = 5392.24;
                                        bookingDateTime = OffsetDateTime.parse("2022-09-04T03:00:04.529Z");
                                        creditDebit = "nisi";
                                        currency = "fugit";
                                        description = "sapiente";
                                        reference = "consequuntur";
                                        relatedAccount = "ratione";
                                        relatedName = "explicabo";
                                        transactionCode = "saepe";
                                        valueDateTime = OffsetDateTime.parse("2021-11-30T00:31:10.440Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 922.6;
                                        amount = 4569.11;
                                        bookingDateTime = OffsetDateTime.parse("2020-05-10T03:57:05.694Z");
                                        creditDebit = "veritatis";
                                        currency = "esse";
                                        description = "quod";
                                        reference = "nam";
                                        relatedAccount = "vero";
                                        relatedName = "aliquid";
                                        transactionCode = "quasi";
                                        valueDateTime = OffsetDateTime.parse("2021-09-21T04:40:52.923Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6900.25;
                                        amount = 4732.21;
                                        bookingDateTime = OffsetDateTime.parse("2021-11-03T10:56:47.600Z");
                                        creditDebit = "minima";
                                        currency = "distinctio";
                                        description = "eligendi";
                                        reference = "sit";
                                        relatedAccount = "culpa";
                                        relatedName = "tempore";
                                        transactionCode = "adipisci";
                                        valueDateTime = OffsetDateTime.parse("2022-07-09T05:02:22.250Z");
                                    }}),
                                }};
                            }}),
                        }};
                        cards = new org.openapis.openapi.models.shared.SandboxCard[]{{
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("quas", "esse", "quasi") {{
                                    availableBalance = 7963.92;
                                    creditLimit = 3082.86;
                                    description = "sapiente";
                                    expiration = "consectetur";
                                    holderName = "esse";
                                    ledgerBalance = 5034.27;
                                    number = "provident";
                                    subType = "a";
                                    type = "nulla";
                                }};
                                party = new SandboxParty() {{
                                    id = "f99dd2ef-d121-4aa6-b1e6-74bdb04f1575";
                                    name = "Margaret Lemke";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 536275;
                                        number = "itaque";
                                        year = 680270;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 99615;
                                        number = "omnis";
                                        year = 945302;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 8694.89;
                                        amount = 920.27;
                                        bookingDateTime = OffsetDateTime.parse("2022-12-11T13:44:20.631Z");
                                        creditDebit = "minima";
                                        currency = "veritatis";
                                        description = "consectetur";
                                        reference = "adipisci";
                                        relatedAccount = "iste";
                                        relatedName = "temporibus";
                                        transactionCode = "accusantium";
                                        valueDateTime = OffsetDateTime.parse("2022-12-20T14:34:53.149Z");
                                    }}),
                                }};
                            }}),
                        }};
                        retryCacheEntries = new org.openapis.openapi.models.shared.SandboxRetryCacheEntry[]{{
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "eum";
                                count = 649832;
                                expirationTimestamp = OffsetDateTime.parse("2022-06-16T05:23:01.658Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "non";
                                count = 32465;
                                expirationTimestamp = OffsetDateTime.parse("2022-06-03T05:52:14.954Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "numquam";
                                count = 771089;
                                expirationTimestamp = OffsetDateTime.parse("2022-08-16T16:15:17.905Z");
                            }}),
                        }};
                        userId = "aut";
                    }}),
                    add(new SandboxUser() {{
                        accounts = new org.openapis.openapi.models.shared.SandboxBankAccount[]{{
                            add(new SandboxBankAccount() {{
                                beneficiaries = new org.openapis.openapi.models.shared.SandboxBeneficiary[]{{
                                    add(new SandboxBeneficiary() {{
                                        name = "Wendell Frami";
                                    }}),
                                }};
                                info = new SandboxBankAccountInfo("nemo", "quae", "quaerat", "porro") {{
                                    accountSubType = "asperiores";
                                    accountType = "aperiam";
                                    alias = "ea";
                                    availableBalance = 3100.67;
                                    currency = "consequuntur";
                                    description = "repellendus";
                                    iban = "officia";
                                    ledgerBalance = 8070.23;
                                    openingDate = OffsetDateTime.parse("2022-05-12T09:23:17.883Z");
                                    overdraftLimit = 9894.1;
                                }};
                                party = new SandboxParty() {{
                                    id = "c413aa63-aae8-4d67-864d-bb675fd5e60b";
                                    name = "Arlene Heidenreich";
                                }};
                                scheduledPayments = new org.openapis.openapi.models.shared.SandboxScheduledPayment[]{{
                                    add(new SandboxScheduledPayment() {{
                                        amount = 9854.92;
                                        description = "suscipit";
                                        executionDate = OffsetDateTime.parse("2020-11-28T15:07:06.228Z");
                                        senderReference = "saepe";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 8970.71;
                                        description = "dolore";
                                        executionDate = OffsetDateTime.parse("2022-01-03T21:58:53.395Z");
                                        senderReference = "adipisci";
                                    }}),
                                }};
                                standingOrders = new org.openapis.openapi.models.shared.SandboxStandingOrder[]{{
                                    add(new SandboxStandingOrder("vitae") {{
                                        amount = 2282.63;
                                        description = "beatae";
                                        finalPaymentDate = OffsetDateTime.parse("2022-01-18T21:39:18.493Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-04-20T09:42:55.692Z");
                                        frequency = "corporis";
                                        lastPaymentDate = OffsetDateTime.parse("2022-03-25T18:38:24.627Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-01-31T09:28:16.792Z");
                                        status = "libero";
                                    }}),
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 631126;
                                        number = "tempora";
                                        year = 132815;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 379057;
                                        number = "voluptas";
                                        year = 374296;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 324405;
                                        number = "nobis";
                                        year = 680116;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 237807;
                                        number = "minus";
                                        year = 171853;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 4492.92;
                                        amount = 2962.42;
                                        bookingDateTime = OffsetDateTime.parse("2022-02-11T14:58:13.879Z");
                                        creditDebit = "temporibus";
                                        currency = "ullam";
                                        description = "adipisci";
                                        reference = "cum";
                                        relatedAccount = "blanditiis";
                                        relatedName = "quas";
                                        transactionCode = "hic";
                                        valueDateTime = OffsetDateTime.parse("2022-05-14T14:10:48.315Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 5485.19;
                                        amount = 8672.9;
                                        bookingDateTime = OffsetDateTime.parse("2021-02-13T15:31:34.151Z");
                                        creditDebit = "exercitationem";
                                        currency = "nobis";
                                        description = "sit";
                                        reference = "rerum";
                                        relatedAccount = "sed";
                                        relatedName = "reiciendis";
                                        transactionCode = "explicabo";
                                        valueDateTime = OffsetDateTime.parse("2020-11-16T19:55:44.497Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 4518.22;
                                        amount = 7090.72;
                                        bookingDateTime = OffsetDateTime.parse("2022-05-22T17:05:01.514Z");
                                        creditDebit = "dolore";
                                        currency = "laborum";
                                        description = "sed";
                                        reference = "in";
                                        relatedAccount = "commodi";
                                        relatedName = "quidem";
                                        transactionCode = "explicabo";
                                        valueDateTime = OffsetDateTime.parse("2022-05-25T11:55:40.494Z");
                                    }}),
                                }};
                            }}),
                            add(new SandboxBankAccount() {{
                                beneficiaries = new org.openapis.openapi.models.shared.SandboxBeneficiary[]{{
                                    add(new SandboxBeneficiary() {{
                                        name = "Dr. Dixie Tremblay V";
                                    }}),
                                }};
                                info = new SandboxBankAccountInfo("tempora", "tempora", "voluptate", "reiciendis") {{
                                    accountSubType = "maiores";
                                    accountType = "incidunt";
                                    alias = "sed";
                                    availableBalance = 5922.31;
                                    currency = "eius";
                                    description = "necessitatibus";
                                    iban = "ipsum";
                                    ledgerBalance = 4067.33;
                                    openingDate = OffsetDateTime.parse("2021-11-23T23:35:18.899Z");
                                    overdraftLimit = 9757.52;
                                }};
                                party = new SandboxParty() {{
                                    id = "603e8b44-5e80-4ca5-9efd-20e457e1858b";
                                    name = "Lee Lehner";
                                }};
                                scheduledPayments = new org.openapis.openapi.models.shared.SandboxScheduledPayment[]{{
                                    add(new SandboxScheduledPayment() {{
                                        amount = 8928.63;
                                        description = "neque";
                                        executionDate = OffsetDateTime.parse("2022-04-26T13:26:55.921Z");
                                        senderReference = "officia";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 6762.43;
                                        description = "corrupti";
                                        executionDate = OffsetDateTime.parse("2022-03-08T09:53:15.131Z");
                                        senderReference = "atque";
                                    }}),
                                    add(new SandboxScheduledPayment() {{
                                        amount = 1482.68;
                                        description = "ut";
                                        executionDate = OffsetDateTime.parse("2022-11-28T21:25:01.550Z");
                                        senderReference = "culpa";
                                    }}),
                                }};
                                standingOrders = new org.openapis.openapi.models.shared.SandboxStandingOrder[]{{
                                    add(new SandboxStandingOrder("sed") {{
                                        amount = 2996.43;
                                        description = "consequatur";
                                        finalPaymentDate = OffsetDateTime.parse("2022-08-17T23:19:52.079Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-06-21T08:29:37.931Z");
                                        frequency = "quas";
                                        lastPaymentDate = OffsetDateTime.parse("2021-12-01T12:56:16.650Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-07-01T12:15:51.307Z");
                                        status = "ex";
                                    }}),
                                    add(new SandboxStandingOrder("occaecati") {{
                                        amount = 243.13;
                                        description = "vel";
                                        finalPaymentDate = OffsetDateTime.parse("2022-02-04T05:56:04.733Z");
                                        firstPaymentDate = OffsetDateTime.parse("2022-12-25T18:52:36.117Z");
                                        frequency = "incidunt";
                                        lastPaymentDate = OffsetDateTime.parse("2022-05-16T07:46:15.799Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-10-08T12:52:44.610Z");
                                        status = "architecto";
                                    }}),
                                    add(new SandboxStandingOrder("reiciendis") {{
                                        amount = 2897.76;
                                        description = "quidem";
                                        finalPaymentDate = OffsetDateTime.parse("2021-08-28T11:18:39.050Z");
                                        firstPaymentDate = OffsetDateTime.parse("2021-02-07T07:57:17.421Z");
                                        frequency = "laboriosam";
                                        lastPaymentDate = OffsetDateTime.parse("2022-10-10T02:44:39.117Z");
                                        nextPaymentDate = OffsetDateTime.parse("2022-02-02T22:51:17.351Z");
                                        status = "unde";
                                    }}),
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 833819;
                                        number = "delectus";
                                        year = 914791;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 16871;
                                        number = "est";
                                        year = 696483;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 440666;
                                        number = "facere";
                                        year = 685092;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6485.98;
                                        amount = 3339.65;
                                        bookingDateTime = OffsetDateTime.parse("2022-03-18T08:14:24.399Z");
                                        creditDebit = "repudiandae";
                                        currency = "quasi";
                                        description = "atque";
                                        reference = "reprehenderit";
                                        relatedAccount = "asperiores";
                                        relatedName = "totam";
                                        transactionCode = "suscipit";
                                        valueDateTime = OffsetDateTime.parse("2021-05-22T03:09:11.884Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 908.85;
                                        amount = 4610.07;
                                        bookingDateTime = OffsetDateTime.parse("2022-03-05T05:01:11.294Z");
                                        creditDebit = "ea";
                                        currency = "atque";
                                        description = "error";
                                        reference = "officiis";
                                        relatedAccount = "officiis";
                                        relatedName = "accusamus";
                                        transactionCode = "natus";
                                        valueDateTime = OffsetDateTime.parse("2022-11-13T06:52:38.237Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 4044.25;
                                        amount = 9805.81;
                                        bookingDateTime = OffsetDateTime.parse("2021-04-04T14:18:49.875Z");
                                        creditDebit = "error";
                                        currency = "blanditiis";
                                        description = "suscipit";
                                        reference = "repudiandae";
                                        relatedAccount = "atque";
                                        relatedName = "atque";
                                        transactionCode = "sunt";
                                        valueDateTime = OffsetDateTime.parse("2020-12-16T15:16:35.557Z");
                                    }}),
                                }};
                            }}),
                        }};
                        cards = new org.openapis.openapi.models.shared.SandboxCard[]{{
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("laboriosam", "velit", "a") {{
                                    availableBalance = 2871.19;
                                    creditLimit = 9682.87;
                                    description = "doloremque";
                                    expiration = "repudiandae";
                                    holderName = "dicta";
                                    ledgerBalance = 360.33;
                                    number = "beatae";
                                    subType = "dolores";
                                    type = "enim";
                                }};
                                party = new SandboxParty() {{
                                    id = "94e29e97-3e92-42a5-ba15-be3e060807e2";
                                    name = "Elmer Treutel";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 528940;
                                        number = "rem";
                                        year = 304446;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 320565;
                                        number = "repellat";
                                        year = 3099;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 362189;
                                        number = "perspiciatis";
                                        year = 470649;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 3782.45;
                                        amount = 51.89;
                                        bookingDateTime = OffsetDateTime.parse("2020-02-03T14:34:15.560Z");
                                        creditDebit = "dolores";
                                        currency = "id";
                                        description = "minima";
                                        reference = "dolore";
                                        relatedAccount = "dolorum";
                                        relatedName = "nesciunt";
                                        transactionCode = "quae";
                                        valueDateTime = OffsetDateTime.parse("2021-03-07T01:29:10.520Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 3092.51;
                                        amount = 4776.46;
                                        bookingDateTime = OffsetDateTime.parse("2022-09-19T08:09:35.938Z");
                                        creditDebit = "culpa";
                                        currency = "adipisci";
                                        description = "debitis";
                                        reference = "laudantium";
                                        relatedAccount = "eum";
                                        relatedName = "nemo";
                                        transactionCode = "recusandae";
                                        valueDateTime = OffsetDateTime.parse("2022-05-29T21:22:23.687Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 3374.77;
                                        amount = 4317.85;
                                        bookingDateTime = OffsetDateTime.parse("2021-03-22T21:44:03.640Z");
                                        creditDebit = "aspernatur";
                                        currency = "ullam";
                                        description = "quasi";
                                        reference = "animi";
                                        relatedAccount = "nostrum";
                                        relatedName = "mollitia";
                                        transactionCode = "provident";
                                        valueDateTime = OffsetDateTime.parse("2021-01-09T04:50:31.655Z");
                                    }}),
                                }};
                            }}),
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("officia", "laborum", "placeat") {{
                                    availableBalance = 4027.67;
                                    creditLimit = 3972.57;
                                    description = "accusantium";
                                    expiration = "repellat";
                                    holderName = "doloribus";
                                    ledgerBalance = 3518.93;
                                    number = "in";
                                    subType = "nam";
                                    type = "earum";
                                }};
                                party = new SandboxParty() {{
                                    id = "4f9efc1b-4512-4c10-b264-8dc2f615199e";
                                    name = "Dr. Terrell Stanton";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 891801;
                                        number = "aliquid";
                                        year = 780931;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 380335;
                                        number = "dolorem";
                                        year = 147808;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 764995;
                                        number = "fuga";
                                        year = 189062;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 656762;
                                        number = "necessitatibus";
                                        year = 862063;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 972.58;
                                        amount = 902.33;
                                        bookingDateTime = OffsetDateTime.parse("2022-05-19T23:57:30.950Z");
                                        creditDebit = "occaecati";
                                        currency = "suscipit";
                                        description = "adipisci";
                                        reference = "quasi";
                                        relatedAccount = "magni";
                                        relatedName = "doloribus";
                                        transactionCode = "nulla";
                                        valueDateTime = OffsetDateTime.parse("2022-10-28T21:42:07.129Z");
                                    }}),
                                }};
                            }}),
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("vel", "architecto", "fugiat") {{
                                    availableBalance = 2711.13;
                                    creditLimit = 4706.21;
                                    description = "molestiae";
                                    expiration = "dicta";
                                    holderName = "iusto";
                                    ledgerBalance = 4570.59;
                                    number = "praesentium";
                                    subType = "maiores";
                                    type = "reiciendis";
                                }};
                                party = new SandboxParty() {{
                                    id = "01747636-0a15-4db6-a660-659a1adeaab5";
                                    name = "Bill Brown";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 405373;
                                        number = "ut";
                                        year = 321043;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 713927;
                                        number = "voluptatem";
                                        year = 561577;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 737254;
                                        number = "aliquid";
                                        year = 109784;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 530860;
                                        number = "omnis";
                                        year = 85233;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 6656.78;
                                        amount = 6347.86;
                                        bookingDateTime = OffsetDateTime.parse("2022-01-15T21:54:49.962Z");
                                        creditDebit = "officiis";
                                        currency = "architecto";
                                        description = "fuga";
                                        reference = "pariatur";
                                        relatedAccount = "debitis";
                                        relatedName = "voluptatem";
                                        transactionCode = "alias";
                                        valueDateTime = OffsetDateTime.parse("2021-02-15T19:55:34.024Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 4042.44;
                                        amount = 9583.08;
                                        bookingDateTime = OffsetDateTime.parse("2021-05-29T16:29:01.765Z");
                                        creditDebit = "nemo";
                                        currency = "asperiores";
                                        description = "ratione";
                                        reference = "ullam";
                                        relatedAccount = "perferendis";
                                        relatedName = "illum";
                                        transactionCode = "totam";
                                        valueDateTime = OffsetDateTime.parse("2020-06-22T03:49:26.507Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 7205.28;
                                        amount = 3732.16;
                                        bookingDateTime = OffsetDateTime.parse("2022-07-22T07:25:32.550Z");
                                        creditDebit = "aliquam";
                                        currency = "inventore";
                                        description = "deleniti";
                                        reference = "veritatis";
                                        relatedAccount = "tempora";
                                        relatedName = "dolor";
                                        transactionCode = "consequatur";
                                        valueDateTime = OffsetDateTime.parse("2022-12-22T21:29:02.039Z");
                                    }}),
                                }};
                            }}),
                            add(new SandboxCard() {{
                                info = new SandboxCardInfo("ipsa", "quas", "eveniet") {{
                                    availableBalance = 2650.39;
                                    creditLimit = 1442.86;
                                    description = "ab";
                                    expiration = "laudantium";
                                    holderName = "quae";
                                    ledgerBalance = 2226.58;
                                    number = "fugiat";
                                    subType = "ipsam";
                                    type = "consequuntur";
                                }};
                                party = new SandboxParty() {{
                                    id = "ce7e253b-6684-451c-ac6e-205e16deab3f";
                                    name = "Earnest McClure";
                                }};
                                statements = new org.openapis.openapi.models.shared.SandboxStatement[]{{
                                    add(new SandboxStatement() {{
                                        month = 642352;
                                        number = "voluptas";
                                        year = 254025;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 364912;
                                        number = "quos";
                                        year = 260904;
                                    }}),
                                    add(new SandboxStatement() {{
                                        month = 131903;
                                        number = "ducimus";
                                        year = 200516;
                                    }}),
                                }};
                                transactions = new org.openapis.openapi.models.shared.SandboxTransaction[]{{
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 5140.54;
                                        amount = 2773.4;
                                        bookingDateTime = OffsetDateTime.parse("2022-06-23T14:25:57.973Z");
                                        creditDebit = "fugiat";
                                        currency = "dicta";
                                        description = "nisi";
                                        reference = "consequuntur";
                                        relatedAccount = "consectetur";
                                        relatedName = "aperiam";
                                        transactionCode = "cupiditate";
                                        valueDateTime = OffsetDateTime.parse("2020-10-05T05:08:23.872Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 38.6;
                                        amount = 6089.89;
                                        bookingDateTime = OffsetDateTime.parse("2022-06-03T15:51:42.244Z");
                                        creditDebit = "iste";
                                        currency = "magni";
                                        description = "inventore";
                                        reference = "fuga";
                                        relatedAccount = "accusamus";
                                        relatedName = "voluptatibus";
                                        transactionCode = "distinctio";
                                        valueDateTime = OffsetDateTime.parse("2021-01-25T12:50:51.842Z");
                                    }}),
                                    add(new SandboxTransaction() {{
                                        accountingBalance = 3283.79;
                                        amount = 5076.36;
                                        bookingDateTime = OffsetDateTime.parse("2022-02-06T01:23:27.992Z");
                                        creditDebit = "temporibus";
                                        currency = "quos";
                                        description = "commodi";
                                        reference = "itaque";
                                        relatedAccount = "commodi";
                                        relatedName = "totam";
                                        transactionCode = "earum";
                                        valueDateTime = OffsetDateTime.parse("2022-04-12T09:40:04.501Z");
                                    }}),
                                }};
                            }}),
                        }};
                        retryCacheEntries = new org.openapis.openapi.models.shared.SandboxRetryCacheEntry[]{{
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "voluptatem";
                                count = 371919;
                                expirationTimestamp = OffsetDateTime.parse("2022-12-31T11:52:53.522Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "quasi";
                                count = 247685;
                                expirationTimestamp = OffsetDateTime.parse("2022-01-17T12:49:23.579Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "sint";
                                count = 858778;
                                expirationTimestamp = OffsetDateTime.parse("2022-01-31T07:01:27.539Z");
                            }}),
                            add(new SandboxRetryCacheEntry() {{
                                cacheKey = "nemo";
                                count = 444587;
                                expirationTimestamp = OffsetDateTime.parse("2022-04-30T15:29:17.062Z");
                            }}),
                        }};
                        userId = "sint";
                    }}),
                }};
            }};            

            PutSandboxResponse res = sdk.sandbox.putSandbox(req, new PutSandboxSecurity("accusamus", "impedit") {{
                authorizationCodeToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
                clientId = "YOUR_API_KEY_HERE";
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
