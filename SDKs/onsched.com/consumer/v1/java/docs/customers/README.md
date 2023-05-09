# customers

### Available Operations

* [deleteConsumerV1CustomersId](#deleteconsumerv1customersid) - Delete Customer
* [getConsumerV1Customers](#getconsumerv1customers) - List Customers
* [getConsumerV1CustomersBookingfields](#getconsumerv1customersbookingfields) - Get Customer Booking Fields
* [getConsumerV1CustomersCountries](#getconsumerv1customerscountries) - List Country Codes
* [getConsumerV1CustomersCustomfields](#getconsumerv1customerscustomfields) - Get Customer Custom Fields
* [getConsumerV1CustomersStates](#getconsumerv1customersstates) - List Country States
* [getConsumerV1CustomersId](#getconsumerv1customersid) - Get Customer
* [postConsumerV1Customers](#postconsumerv1customers) - Create Customer
* [putConsumerV1CustomersId](#putconsumerv1customersid) - Update Customer

## deleteConsumerV1CustomersId

<p>Use this endpoint to permanently <b>Delete</b> a Customer object. A valid <b>customer id</b> is required.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConsumerV1CustomersIdRequest;
import org.openapis.openapi.models.operations.DeleteConsumerV1CustomersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteConsumerV1CustomersIdRequest req = new DeleteConsumerV1CustomersIdRequest("hic");            

            DeleteConsumerV1CustomersIdResponse res = sdk.customers.deleteConsumerV1CustomersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersRequest;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersRequest req = new GetConsumerV1CustomersRequest() {{
                deleted = false;
                email = "Celestine.Hayes@hotmail.com";
                groupId = "eaque";
                lastname = "Hayes";
                limit = 199996;
                locationId = "eos";
                offset = 18521;
            }};            

            GetConsumerV1CustomersResponse res = sdk.customers.getConsumerV1Customers(req);

            if (res.customerListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1CustomersBookingfields

<p>Use this endpoint to return <b>Customer Booking Fields</b>. Customer booking fields are stored with each customer object. They are used when the information collected during the booking is for a particular customer. Customer Booking Fields include any custom customer fields you define and want to capture with the Booking.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersBookingfieldsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersBookingfieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersBookingfieldsRequest req = new GetConsumerV1CustomersBookingfieldsRequest() {{
                locationId = "minus";
            }};            

            GetConsumerV1CustomersBookingfieldsResponse res = sdk.customers.getConsumerV1CustomersBookingfields(req);

            if (res.bookingFieldListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1CustomersCountries

<p>Use this endpoint to return a <b>List of Countries with their associated Country Code</b>. Country codes are based on the 2-character ANSI standard. If your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersCountriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersCountriesResponse res = sdk.customers.getConsumerV1CustomersCountries();

            if (res.countryViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1CustomersCustomfields

<p>Use this endpoint to return <b>Customer Custom Fields</b>. Customer custom fields are stored with the customer object. They are used when the information collected during the booking is specific to a particular customer.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersCustomfieldsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersCustomfieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersCustomfieldsRequest req = new GetConsumerV1CustomersCustomfieldsRequest() {{
                leadQuestions = false;
                locationId = "vero";
            }};            

            GetConsumerV1CustomersCustomfieldsResponse res = sdk.customers.getConsumerV1CustomersCustomfields(req);

            if (res.customFieldDefinitionListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1CustomersStates

<p>Use this endpoint to return a <b>List of Countries with their associated State Codes</b>. Supply a country code to filter results further. If states for your countries of operation are not currently listed, contact us at <i><b>support@onsched.com</b></i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersStatesRequest;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersStatesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersStatesRequest req = new GetConsumerV1CustomersStatesRequest() {{
                country = "United States of America";
            }};            

            GetConsumerV1CustomersStatesResponse res = sdk.customers.getConsumerV1CustomersStates(req);

            if (res.stateViewModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1CustomersId

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /consumer/v1/customers</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1CustomersIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1CustomersIdRequest req = new GetConsumerV1CustomersIdRequest("omnis");            

            GetConsumerV1CustomersIdResponse res = sdk.customers.getConsumerV1CustomersId(req);

            if (res.customerViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConsumerV1Customers

<p>Use this endpoint to <b>Create</b> a new Customer. A customer object is automatically created with the first appointment booking if it doesn't already exist. If not specified, the business location id defaults to the primary business location.</p>
<p>Required Fields: <b>Email</b> and <b>Name</b> or <b>First and Lastname</b> depending on customer type. Type 0 = Person, Type 1 = Business. For type 0, the firstname and lastname fields are used. For type 1, the Name field is used, and the name field is also used to populate the lastname.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConsumerV1CustomersResponse;
import org.openapis.openapi.models.shared.AddressInputModel;
import org.openapis.openapi.models.shared.ContactInputModel;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.CustomerInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CustomerInputModel req = new CustomerInputModel() {{
                address = new AddressInputModel() {{
                    addressLine1 = "perspiciatis";
                    addressLine2 = "voluptatem";
                    city = "Cruickshankmouth";
                    country = "Nepal";
                    postalCode = "56299";
                    state = "modi";
                }};;
                contact = new ContactInputModel() {{
                    businessPhone = "iste";
                    businessPhoneExt = "dolorum";
                    conferenceInfo = "deleniti";
                    homePhone = "pariatur";
                    mobilePhone = "provident";
                    preferredPhoneType = "nobis";
                    skypeUsername = "libero";
                }};;
                customFields = new CustomFieldInputModel() {{
                    field1 = "delectus";
                    field10 = "quaerat";
                    field2 = "quos";
                    field3 = "aliquid";
                    field4 = "dolorem";
                    field5 = "dolorem";
                    field6 = "dolor";
                    field7 = "qui";
                    field8 = "ipsum";
                    field9 = "hic";
                }};;
                email = "Myrtle_Klein@yahoo.com";
                firstname = "Danika";
                lastname = "Parisian";
                locationId = "numquam";
                name = "Melissa Bednar";
                notificationType = "quaerat";
                sendLeadNotification = false;
                stripeCustomerId = "accusamus";
                type = 696344;
            }};            

            PostConsumerV1CustomersResponse res = sdk.customers.postConsumerV1Customers(req);

            if (res.customerViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1CustomersId

<p>Use this endpoint to <b>Update</b> a Customer object. A valid <b>customer id</b> is required. Note: Blank fields are not changed.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1CustomersIdRequest;
import org.openapis.openapi.models.operations.PutConsumerV1CustomersIdResponse;
import org.openapis.openapi.models.shared.AddressUpdateModel;
import org.openapis.openapi.models.shared.ContactUpdateModel;
import org.openapis.openapi.models.shared.CustomFieldUpdateModel;
import org.openapis.openapi.models.shared.CustomerUpdateModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1CustomersIdRequest req = new PutConsumerV1CustomersIdRequest("voluptas") {{
                customerUpdateModel = new CustomerUpdateModel() {{
                    address = new AddressUpdateModel() {{
                        addressLine1 = "natus";
                        addressLine2 = "eos";
                        city = "Albinhaven";
                        country = "Bahrain";
                        postalCode = "64465-6879";
                        state = "nihil";
                    }};;
                    contact = new ContactUpdateModel() {{
                        businessPhone = "ipsum";
                        businessPhoneExt = "voluptate";
                        conferenceInfo = "id";
                        homePhone = "saepe";
                        mobilePhone = "eius";
                        preferredPhoneType = "aspernatur";
                        skypeUsername = "perferendis";
                    }};;
                    customFields = new CustomFieldUpdateModel() {{
                        field1 = "amet";
                        field10 = "optio";
                        field2 = "accusamus";
                        field3 = "ad";
                        field4 = "saepe";
                        field5 = "suscipit";
                        field6 = "deserunt";
                        field7 = "provident";
                        field8 = "minima";
                        field9 = "repellendus";
                    }};;
                    email = "Lois.Abbott27@yahoo.com";
                    firstname = "Herminia";
                    lastname = "Schmeler";
                    locationId = "officiis";
                    name = "Jan Wilderman";
                    notificationType = "iusto";
                    stripeCustomerId = "ipsum";
                    type = 788740;
                }};;
            }};            

            PutConsumerV1CustomersIdResponse res = sdk.customers.putConsumerV1CustomersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
