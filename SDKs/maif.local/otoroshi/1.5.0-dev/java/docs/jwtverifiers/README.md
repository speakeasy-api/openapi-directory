# jwtVerifiers

## Overview

Everything about Otoroshi global JWT token verifiers

### Available Operations

* [createGlobalJwtVerifier](#createglobaljwtverifier) - Create one global JWT verifiers
* [deleteGlobalJwtVerifier](#deleteglobaljwtverifier) - Delete one global JWT verifiers
* [findAllGlobalJwtVerifiers](#findallglobaljwtverifiers) - Get all global JWT verifiers
* [findGlobalJwtVerifiersById](#findglobaljwtverifiersbyid) - Get one global JWT verifiers
* [patchGlobalJwtVerifier](#patchglobaljwtverifier) - Update one global JWT verifiers
* [updateGlobalJwtVerifier](#updateglobaljwtverifier) - Update one global JWT verifiers

## createGlobalJwtVerifier

Create one global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGlobalJwtVerifierResponse;
import org.openapis.openapi.models.operations.CreateGlobalJwtVerifierSecurity;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.GlobalJwtVerifier;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GlobalJwtVerifier req = new GlobalJwtVerifier(                new JWKSAlgoSettings("a string value") {{
                                headers = new java.util.HashMap<String, String>() {{
                                    put("officia", "libero");
                                    put("totam", "sequi");
                                    put("aliquid", "ea");
                                }};
                                kty = "a string value";
                                timeout = 123L;
                                ttl = 123L;
                                type = "a string value";
                                url = "a string value";
                            }}, "a string value", true, "a string value", "a string value",                 new InCookie("a string value", "a string value") {{
                                name = "a string value";
                                type = "a string value";
                            }},                 new Sign(                new JWKSAlgoSettings("a string value") {{
                                                headers = new java.util.HashMap<String, String>() {{
                                                    put("consequuntur", "assumenda");
                                                    put("vero", "doloribus");
                                                }};
                                                kty = "a string value";
                                                timeout = 123L;
                                                ttl = 123L;
                                                type = "a string value";
                                                url = "a string value";
                                            }}, "a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                put("porro", "accusamus");
                                                                put("totam", "reiciendis");
                                                                put("ab", "sint");
                                                                put("nihil", "esse");
                                                            }}) {{
                                                mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                    put("odio", "nesciunt");
                                                                    put("debitis", "vel");
                                                                }},                 new String[]{{
                                                                    add("a string value"),
                                                                }},                 new java.util.HashMap<String, String>() {{
                                                                    put("voluptas", "consequuntur");
                                                                    put("officia", "reprehenderit");
                                                                }});;
                                            }};) {{
                                algoSettings = new HSAlgoSettings("a string value", 123123, "a string value") {{
                                    secret = "a string value";
                                    size = 123123;
                                    type = "a string value";
                                }};
                                type = "a string value";
                                verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                    put("a", "iste");
                                                    put("dicta", "quos");
                                                    put("ullam", "dolore");
                                                    put("modi", "itaque");
                                                }}) {{
                                    fields = new java.util.HashMap<String, String>() {{
                                        put("reiciendis", "repellat");
                                    }};
                                    mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                        put("officiis", "architecto");
                                                    }},                 new String[]{{
                                                        add("a string value"),
                                                    }},                 new java.util.HashMap<String, String>() {{
                                                        put("optio", "rem");
                                                        put("perferendis", "facilis");
                                                    }}) {{
                                        map = new java.util.HashMap<String, String>() {{
                                            put("laborum", "natus");
                                            put("accusamus", "doloremque");
                                            put("nisi", "rerum");
                                            put("recusandae", "voluptates");
                                        }};
                                        remove = new String[]{{
                                            add("a string value"),
                                            add("a string value"),
                                        }};
                                        values = new java.util.HashMap<String, String>() {{
                                            put("quia", "ullam");
                                            put("quisquam", "dicta");
                                            put("voluptatibus", "eligendi");
                                        }};
                                    }};
                                }};
                            }}, true);            

            CreateGlobalJwtVerifierResponse res = sdk.jwtVerifiers.createGlobalJwtVerifier(req, new CreateGlobalJwtVerifierSecurity("distinctio", "eius") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalJwtVerifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGlobalJwtVerifier

Delete one global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGlobalJwtVerifierRequest;
import org.openapis.openapi.models.operations.DeleteGlobalJwtVerifierResponse;
import org.openapis.openapi.models.operations.DeleteGlobalJwtVerifierSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGlobalJwtVerifierRequest req = new DeleteGlobalJwtVerifierRequest("ipsa");            

            DeleteGlobalJwtVerifierResponse res = sdk.jwtVerifiers.deleteGlobalJwtVerifier(req, new DeleteGlobalJwtVerifierSecurity("rem", "maiores") {{
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

## findAllGlobalJwtVerifiers

Get all global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindAllGlobalJwtVerifiersResponse;
import org.openapis.openapi.models.operations.FindAllGlobalJwtVerifiersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindAllGlobalJwtVerifiersResponse res = sdk.jwtVerifiers.findAllGlobalJwtVerifiers(new FindAllGlobalJwtVerifiersSecurity("accusantium", "veniam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalJwtVerifiers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## findGlobalJwtVerifiersById

Get one global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FindGlobalJwtVerifiersByIdRequest;
import org.openapis.openapi.models.operations.FindGlobalJwtVerifiersByIdResponse;
import org.openapis.openapi.models.operations.FindGlobalJwtVerifiersByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FindGlobalJwtVerifiersByIdRequest req = new FindGlobalJwtVerifiersByIdRequest("saepe");            

            FindGlobalJwtVerifiersByIdResponse res = sdk.jwtVerifiers.findGlobalJwtVerifiersById(req, new FindGlobalJwtVerifiersByIdSecurity("neque", "facere") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalJwtVerifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchGlobalJwtVerifier

Update one global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchGlobalJwtVerifierRequest;
import org.openapis.openapi.models.operations.PatchGlobalJwtVerifierResponse;
import org.openapis.openapi.models.operations.PatchGlobalJwtVerifierSecurity;
import org.openapis.openapi.models.shared.Patch;
import org.openapis.openapi.models.shared.PatchOpEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchGlobalJwtVerifierRequest req = new PatchGlobalJwtVerifierRequest("aliquam") {{
                requestBody = new org.openapis.openapi.models.shared.Patch[]{{
                    add(new Patch(PatchOpEnum.COPY, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "fugiat";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.TEST;
                        path = "a string value";
                        value = "velit";
                    }}),
                    add(new Patch(PatchOpEnum.ADD, "a string value") {{
                        op = PatchOpEnum.REPLACE;
                        path = "a string value";
                        value = "similique";
                    }}),
                }};
            }};            

            PatchGlobalJwtVerifierResponse res = sdk.jwtVerifiers.patchGlobalJwtVerifier(req, new PatchGlobalJwtVerifierSecurity("repellat", "nemo") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalJwtVerifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateGlobalJwtVerifier

Update one global JWT verifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateGlobalJwtVerifierRequest;
import org.openapis.openapi.models.operations.UpdateGlobalJwtVerifierResponse;
import org.openapis.openapi.models.operations.UpdateGlobalJwtVerifierSecurity;
import org.openapis.openapi.models.shared.ESAlgoSettings;
import org.openapis.openapi.models.shared.GlobalJwtVerifier;
import org.openapis.openapi.models.shared.HSAlgoSettings;
import org.openapis.openapi.models.shared.InCookie;
import org.openapis.openapi.models.shared.InHeader;
import org.openapis.openapi.models.shared.InQueryParam;
import org.openapis.openapi.models.shared.JWKSAlgoSettings;
import org.openapis.openapi.models.shared.MappingSettings;
import org.openapis.openapi.models.shared.PassThrough;
import org.openapis.openapi.models.shared.RSAlgoSettings;
import org.openapis.openapi.models.shared.Sign;
import org.openapis.openapi.models.shared.Transform;
import org.openapis.openapi.models.shared.TransformSettings;
import org.openapis.openapi.models.shared.VerificationSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateGlobalJwtVerifierRequest req = new UpdateGlobalJwtVerifierRequest("doloribus") {{
                globalJwtVerifier = new GlobalJwtVerifier(                new JWKSAlgoSettings("a string value") {{
                                    headers = new java.util.HashMap<String, String>() {{
                                        put("incidunt", "explicabo");
                                        put("ipsam", "cupiditate");
                                        put("optio", "alias");
                                    }};
                                    kty = "a string value";
                                    timeout = 123L;
                                    ttl = 123L;
                                    type = "a string value";
                                    url = "a string value";
                                }}, "a string value", true, "a string value", "a string value",                 new InCookie("a string value", "a string value") {{
                                    name = "a string value";
                                    type = "a string value";
                                }},                 new PassThrough("a string value",                 new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                                    put("culpa", "consequuntur");
                                                                    put("amet", "deserunt");
                                                                }}) {{
                                                    mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                                        put("veniam", "quod");
                                                                        put("itaque", "a");
                                                                    }},                 new String[]{{
                                                                        add("a string value"),
                                                                        add("a string value"),
                                                                        add("a string value"),
                                                                        add("a string value"),
                                                                    }},                 new java.util.HashMap<String, String>() {{
                                                                        put("doloribus", "assumenda");
                                                                        put("officiis", "architecto");
                                                                    }});;
                                                }};) {{
                                    type = "a string value";
                                    verificationSettings = new VerificationSettings(                new java.util.HashMap<String, String>() {{
                                                        put("dolor", "exercitationem");
                                                        put("expedita", "facilis");
                                                        put("impedit", "sit");
                                                    }}) {{
                                        fields = new java.util.HashMap<String, String>() {{
                                            put("sapiente", "consequuntur");
                                            put("veniam", "debitis");
                                        }};
                                        mappingSettings = new MappingSettings(                new java.util.HashMap<String, String>() {{
                                                            put("nisi", "quisquam");
                                                            put("dolor", "ducimus");
                                                            put("fuga", "minima");
                                                            put("architecto", "qui");
                                                        }},                 new String[]{{
                                                            add("a string value"),
                                                            add("a string value"),
                                                        }},                 new java.util.HashMap<String, String>() {{
                                                            put("incidunt", "adipisci");
                                                        }}) {{
                                            map = new java.util.HashMap<String, String>() {{
                                                put("sint", "ut");
                                                put("numquam", "tenetur");
                                                put("adipisci", "libero");
                                            }};
                                            remove = new String[]{{
                                                add("a string value"),
                                                add("a string value"),
                                            }};
                                            values = new java.util.HashMap<String, String>() {{
                                                put("ex", "minus");
                                                put("ab", "beatae");
                                            }};
                                        }};
                                    }};
                                }}, true);;
            }};            

            UpdateGlobalJwtVerifierResponse res = sdk.jwtVerifiers.updateGlobalJwtVerifier(req, new UpdateGlobalJwtVerifierSecurity("alias", "culpa") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.globalJwtVerifier != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
