# validationAuthorities

## Overview

Everything about Otoroshi validation authorities

### Available Operations

* [createClientValidator](#createclientvalidator) - Create one validation authorities
* [deleteClientValidator](#deleteclientvalidator) - Delete one validation authorities by id
* [findAllClientValidators](#findallclientvalidators) - Get all validation authoritiess
* [findClientValidatorById](#findclientvalidatorbyid) - Get one validation authorities by id
* [patchClientValidator](#patchclientvalidator) - Update one validation authorities by id
* [updateClientValidator](#updateclientvalidator) - Update one validation authorities by id

## createClientValidator

Create one validation authorities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClientValidatorResponse;
import org.openapis.openapi.models.operations.CreateClientValidatorSecurity;
import org.openapis.openapi.models.shared.ValidationAuthority;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ValidationAuthority req = new ValidationAuthority(true, 123L, "a string value", 123L,                 new java.util.HashMap<String, String>() {{
                                put("cumque", "natus");
                                put("quaerat", "doloribus");
                                put("quia", "officiis");
                            }}, "a string value", "a string value", "a string value", "a string value", true, "a string value", 123L, "a string value");            

            CreateClientValidatorResponse res = sdk.validationAuthorities.createClientValidator(req, new CreateClientValidatorSecurity("mollitia", "cumque") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.validationAuthority != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClientValidator

Delete one validation authorities by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientValidatorRequest;
import org.openapis.openapi.models.operations.DeleteClientValidatorResponse;
import org.openapis.openapi.models.operations.DeleteClientValidatorSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientValidatorRequest req = new DeleteClientValidatorRequest("quis");            

            DeleteClientValidatorResponse res = sdk.validationAuthorities.deleteClientValidator(req, new DeleteClientValidatorSecurity("enim", "eum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.deleted != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findAllClientValidators

Get all validation authoritiess

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllClientValidatorsResponse;
import org.openapis.openapi.models.operations.FindAllClientValidatorsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllClientValidatorsResponse res = sdk.validationAuthorities.findAllClientValidators(new FindAllClientValidatorsSecurity("nemo", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.validationAuthorities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findClientValidatorById

Get one validation authorities by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindClientValidatorByIdRequest;
import org.openapis.openapi.models.operations.FindClientValidatorByIdResponse;
import org.openapis.openapi.models.operations.FindClientValidatorByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindClientValidatorByIdRequest req = new FindClientValidatorByIdRequest("nesciunt");            

            FindClientValidatorByIdResponse res = sdk.validationAuthorities.findClientValidatorById(req, new FindClientValidatorByIdSecurity("sit", "odio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.validationAuthority != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchClientValidator

Update one validation authorities by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchClientValidatorRequest;
import org.openapis.openapi.models.operations.PatchClientValidatorResponse;
import org.openapis.openapi.models.operations.PatchClientValidatorSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchClientValidatorRequest req = new PatchClientValidatorRequest("minus") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.REMOVE, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "voluptates";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.ADD;
                        path = "a string value";
                        value = "fugit";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.REPLACE;
                        path = "a string value";
                        value = "necessitatibus";
                    }}),
                    add(new Patch(PatchOpEnum.REPLACE, "a string value") {{
                        op = PatchOpEnum.REMOVE;
                        path = "a string value";
                        value = "sunt";
                    }}),
                }};
            }};            

            PatchClientValidatorResponse res = sdk.validationAuthorities.patchClientValidator(req, new PatchClientValidatorSecurity("delectus", "laborum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.validationAuthority != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClientValidator

Update one validation authorities by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientValidatorRequest;
import org.openapis.openapi.models.operations.UpdateClientValidatorResponse;
import org.openapis.openapi.models.operations.UpdateClientValidatorSecurity;
import org.openapis.openapi.models.shared.ValidationAuthority;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateClientValidatorRequest req = new UpdateClientValidatorRequest("aliquam") {{
                validationAuthority = new ValidationAuthority(true, 123L, "a string value", 123L,                 new java.util.HashMap<String, String>() {{
                                    put("modi", "sunt");
                                    put("impedit", "eius");
                                    put("voluptatum", "ipsa");
                                }}, "a string value", "a string value", "a string value", "a string value", true, "a string value", 123L, "a string value");;
            }};            

            UpdateClientValidatorResponse res = sdk.validationAuthorities.updateClientValidator(req, new UpdateClientValidatorSecurity("at", "dolorem") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.validationAuthority != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
