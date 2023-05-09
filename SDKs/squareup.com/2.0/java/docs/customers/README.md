# customers

### Available Operations

* [addGroupToCustomer](#addgrouptocustomer) - AddGroupToCustomer
* [createCustomer](#createcustomer) - CreateCustomer
* [createCustomerCard](#createcustomercard) - CreateCustomerCard
* [deleteCustomer](#deletecustomer) - DeleteCustomer
* [deleteCustomerCard](#deletecustomercard) - DeleteCustomerCard
* [listCustomers](#listcustomers) - ListCustomers
* [removeGroupFromCustomer](#removegroupfromcustomer) - RemoveGroupFromCustomer
* [retrieveCustomer](#retrievecustomer) - RetrieveCustomer
* [searchCustomers](#searchcustomers) - SearchCustomers
* [updateCustomer](#updatecustomer) - UpdateCustomer

## addGroupToCustomer

Adds a group membership to a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddGroupToCustomerRequest;
import org.openapis.openapi.models.operations.AddGroupToCustomerResponse;
import org.openapis.openapi.models.operations.AddGroupToCustomerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AddGroupToCustomerRequest req = new AddGroupToCustomerRequest("nesciunt", "facere");            

            AddGroupToCustomerResponse res = sdk.customers.addGroupToCustomer(req, new AddGroupToCustomerSecurity("beatae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.addGroupToCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomer

Creates a new customer for a business.

You must provide at least one of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerResponse;
import org.openapis.openapi.models.operations.CreateCustomerSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateCustomerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateCustomerRequest req = new CreateCustomerRequest() {{
                address = new Address() {{
                    addressLine1 = "delectus";
                    addressLine2 = "ipsa";
                    addressLine3 = "quo";
                    administrativeDistrictLevel1 = "libero";
                    administrativeDistrictLevel2 = "eaque";
                    administrativeDistrictLevel3 = "animi";
                    country = "Argentina";
                    firstName = "Addie";
                    lastName = "Aufderhar";
                    locality = "dolor";
                    organization = "earum";
                    postalCode = "11857-2640";
                    sublocality = "pariatur";
                    sublocality2 = "excepturi";
                    sublocality3 = "aliquam";
                }};;
                birthday = "voluptatibus";
                companyName = "fuga";
                emailAddress = "deserunt";
                familyName = "iure";
                givenName = "labore";
                idempotencyKey = "quasi";
                nickname = "cumque";
                note = "corporis";
                phoneNumber = "odio";
                referenceId = "quibusdam";
            }};            

            CreateCustomerResponse res = sdk.customers.createCustomer(req, new CreateCustomerSecurity("dicta") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomerCard

Adds a card on file to an existing customer.

As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
calls with the same card nonce return the same card record that was created
with the provided nonce during the _first_ call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomerCardRequest;
import org.openapis.openapi.models.operations.CreateCustomerCardResponse;
import org.openapis.openapi.models.operations.CreateCustomerCardSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateCustomerCardRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCustomerCardRequest req = new CreateCustomerCardRequest(                new CreateCustomerCardRequest("voluptatibus") {{
                                billingAddress = new Address() {{
                                    addressLine1 = "vero";
                                    addressLine2 = "quibusdam";
                                    addressLine3 = "maxime";
                                    administrativeDistrictLevel1 = "consequuntur";
                                    administrativeDistrictLevel2 = "sit";
                                    administrativeDistrictLevel3 = "nostrum";
                                    country = "Argentina";
                                    firstName = "Rickie";
                                    lastName = "Dickens";
                                    locality = "quos";
                                    organization = "pariatur";
                                    postalCode = "17905-3241";
                                    sublocality = "tenetur";
                                    sublocality2 = "occaecati";
                                    sublocality3 = "necessitatibus";
                                }};;
                                cardholderName = "necessitatibus";
                                verificationToken = "autem";
                            }};, "natus");            

            CreateCustomerCardResponse res = sdk.customers.createCustomerCard(req, new CreateCustomerCardSecurity("quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createCustomerCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomer

Deletes a customer profile from a business. This operation also unlinks any associated cards on file. 

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile. 

To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerRequest;
import org.openapis.openapi.models.operations.DeleteCustomerResponse;
import org.openapis.openapi.models.operations.DeleteCustomerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerRequest req = new DeleteCustomerRequest("iure") {{
                version = 404542L;
            }};            

            DeleteCustomerResponse res = sdk.customers.deleteCustomer(req, new DeleteCustomerSecurity("error") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomerCard

Removes a card on file from a customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomerCardRequest;
import org.openapis.openapi.models.operations.DeleteCustomerCardResponse;
import org.openapis.openapi.models.operations.DeleteCustomerCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCustomerCardRequest req = new DeleteCustomerCardRequest("deleniti", "tempore");            

            DeleteCustomerCardResponse res = sdk.customers.deleteCustomerCard(req, new DeleteCustomerCardSecurity("saepe") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteCustomerCardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomers

Lists customer profiles associated with a Square account.

Under normal operating conditions, newly created or updated customer profiles become available
for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomersRequest;
import org.openapis.openapi.models.operations.ListCustomersResponse;
import org.openapis.openapi.models.operations.ListCustomersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCustomersRequest req = new ListCustomersRequest() {{
                cursor = "adipisci";
                limit = 294879L;
                sortField = "tempora";
                sortOrder = "quaerat";
            }};            

            ListCustomersResponse res = sdk.customers.listCustomers(req, new ListCustomersSecurity("debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeGroupFromCustomer

Removes a group membership from a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveGroupFromCustomerRequest;
import org.openapis.openapi.models.operations.RemoveGroupFromCustomerResponse;
import org.openapis.openapi.models.operations.RemoveGroupFromCustomerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveGroupFromCustomerRequest req = new RemoveGroupFromCustomerRequest("similique", "porro");            

            RemoveGroupFromCustomerResponse res = sdk.customers.removeGroupFromCustomer(req, new RemoveGroupFromCustomerSecurity("blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.removeGroupFromCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCustomer

Returns details for a single customer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCustomerRequest;
import org.openapis.openapi.models.operations.RetrieveCustomerResponse;
import org.openapis.openapi.models.operations.RetrieveCustomerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCustomerRequest req = new RetrieveCustomerRequest("libero");            

            RetrieveCustomerResponse res = sdk.customers.retrieveCustomer(req, new RetrieveCustomerSecurity("sequi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchCustomers

Searches the customer profiles associated with a Square account using a supported query filter.

Calling `SearchCustomers` without any explicit query filter returns all
customer profiles ordered alphabetically based on `given_name` and
`family_name`.

Under normal operating conditions, newly created or updated customer profiles become available
for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCustomersResponse;
import org.openapis.openapi.models.operations.SearchCustomersSecurity;
import org.openapis.openapi.models.shared.CustomerCreationSourceFilter;
import org.openapis.openapi.models.shared.CustomerFilter;
import org.openapis.openapi.models.shared.CustomerQuery;
import org.openapis.openapi.models.shared.CustomerSort;
import org.openapis.openapi.models.shared.CustomerTextFilter;
import org.openapis.openapi.models.shared.FilterValue;
import org.openapis.openapi.models.shared.SearchCustomersRequest;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchCustomersRequest req = new SearchCustomersRequest() {{
                cursor = "laborum";
                limit = 144727L;
                query = new CustomerQuery() {{
                    filter = new CustomerFilter() {{
                        createdAt = new TimeRange() {{
                            endAt = "totam";
                            startAt = "dignissimos";
                        }};;
                        creationSource = new CustomerCreationSourceFilter() {{
                            rule = "corporis";
                            values = new String[]{{
                                add("nisi"),
                                add("quo"),
                                add("inventore"),
                                add("voluptatibus"),
                            }};
                        }};;
                        emailAddress = new CustomerTextFilter() {{
                            exact = "officiis";
                            fuzzy = "suscipit";
                        }};;
                        groupIds = new FilterValue() {{
                            all = new String[]{{
                                add("nisi"),
                            }};
                            any = new String[]{{
                                add("alias"),
                                add("voluptate"),
                                add("repellendus"),
                                add("qui"),
                            }};
                            none = new String[]{{
                                add("error"),
                                add("impedit"),
                                add("laudantium"),
                            }};
                        }};;
                        phoneNumber = new CustomerTextFilter() {{
                            exact = "nihil";
                            fuzzy = "officia";
                        }};;
                        referenceId = new CustomerTextFilter() {{
                            exact = "repudiandae";
                            fuzzy = "nemo";
                        }};;
                        updatedAt = new TimeRange() {{
                            endAt = "voluptatem";
                            startAt = "quod";
                        }};;
                    }};;
                    sort = new CustomerSort() {{
                        field = "vitae";
                        order = "vel";
                    }};;
                }};;
            }};            

            SearchCustomersResponse res = sdk.customers.searchCustomers(req, new SearchCustomersSecurity("voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchCustomersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomer

Updates a customer profile. To change an attribute, specify the new value. To remove an attribute, specify the value as an empty string or empty object.

As a best practice, you should include the `version` field in the request to enable [optimistic concurrency](https://developer.squareup.com/docs/working-with-apis/optimistic-concurrency) control. The value must be set to the current version of the customer profile.

To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

You cannot use this endpoint to change cards on file. To make changes, use the [Cards API](https://developer.squareup.com/reference/square_2021-08-18/cards-api) or [Gift Cards API](https://developer.squareup.com/reference/square_2021-08-18/gift-cards-api).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomerRequest;
import org.openapis.openapi.models.operations.UpdateCustomerResponse;
import org.openapis.openapi.models.operations.UpdateCustomerSecurity;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.UpdateCustomerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCustomerRequest req = new UpdateCustomerRequest(                new UpdateCustomerRequest() {{
                                address = new Address() {{
                                    addressLine1 = "laboriosam";
                                    addressLine2 = "veritatis";
                                    addressLine3 = "similique";
                                    administrativeDistrictLevel1 = "veritatis";
                                    administrativeDistrictLevel2 = "temporibus";
                                    administrativeDistrictLevel3 = "excepturi";
                                    country = "Belize";
                                    firstName = "Crystel";
                                    lastName = "Kertzmann";
                                    locality = "similique";
                                    organization = "molestiae";
                                    postalCode = "58321-0292";
                                    sublocality = "asperiores";
                                    sublocality2 = "commodi";
                                    sublocality3 = "voluptas";
                                }};;
                                birthday = "quos";
                                companyName = "esse";
                                emailAddress = "veniam";
                                familyName = "fugit";
                                givenName = "assumenda";
                                nickname = "expedita";
                                note = "molestiae";
                                phoneNumber = "autem";
                                referenceId = "aliquam";
                                version = 803015L;
                            }};, "nostrum");            

            UpdateCustomerResponse res = sdk.customers.updateCustomer(req, new UpdateCustomerSecurity("occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateCustomerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
