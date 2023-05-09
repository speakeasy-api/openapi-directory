# spec

### Available Operations

* [getProductTypeListOfWorkgroup](#getproducttypelistofworkgroup) - Get product type of workgroup level
* [getSpec](#getspec) - List a specific spec of project Level
* [getSpecList](#getspeclist) - List specs of project Level
* [getSpecProductTypeListOfWorkgroup](#getspecproducttypelistofworkgroup) - Get product type of spec level by workgroupId
* [getSpecTypeFields](#getspectypefields) - Get Spec Type Fields
* [getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId](#getv1workgroupsworkgroupidprojectsprojectidspecsspecid) - List a specific spec of project Level
* [getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields](#getv1workgroupsworkgroupidspectypesspectypeidspectypefields) - Get Spec Type Fields
* [postSpecProductTypeListOfWorkgroupJson](#postspecproducttypelistofworkgroupjson) - Register product types for spec types
* [postSpecProductTypeListOfWorkgroupRaw](#postspecproducttypelistofworkgroupraw) - Register product types for spec types
* [postSpecJson](#postspecjson) - Create a Spec
* [postSpecRaw](#postspecraw) - Create a Spec
* [putSpecJson](#putspecjson) - Update a specific Spec
* [putSpecRaw](#putspecraw) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidjson) - Update a specific Spec
* [putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw](#putv1workgroupsworkgroupidprojectsprojectidspecsspecidraw) - Update a specific Spec

## getProductTypeListOfWorkgroup

Get product type of workgroup level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductTypeListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetProductTypeListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductTypeListOfWorkgroupRequest req = new GetProductTypeListOfWorkgroupRequest("eos");            

            GetProductTypeListOfWorkgroupResponse res = sdk.spec.getProductTypeListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpec

List a specific spec of project Level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecRequest;
import org.openapis.openapi.models.operations.GetSpecResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecRequest req = new GetSpecRequest("atque", "sit", "fugiat");            

            GetSpecResponse res = sdk.spec.getSpec(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecList

List specs of project Level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecListRequest;
import org.openapis.openapi.models.operations.GetSpecListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecListRequest req = new GetSpecListRequest("ab", "soluta");            

            GetSpecListResponse res = sdk.spec.getSpecList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecProductTypeListOfWorkgroup

Get product type of spec level by workgroupId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecProductTypeListOfWorkgroupRequest;
import org.openapis.openapi.models.operations.GetSpecProductTypeListOfWorkgroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecProductTypeListOfWorkgroupRequest req = new GetSpecProductTypeListOfWorkgroupRequest("dolorum");            

            GetSpecProductTypeListOfWorkgroupResponse res = sdk.spec.getSpecProductTypeListOfWorkgroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSpecTypeFields

Get Spec Type Fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSpecTypeFieldsRequest;
import org.openapis.openapi.models.operations.GetSpecTypeFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSpecTypeFieldsRequest req = new GetSpecTypeFieldsRequest("iusto", "voluptate");            

            GetSpecTypeFieldsResponse res = sdk.spec.getSpecTypeFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId

List a specific spec of project Level

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest req = new GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRequest("dolorum", "deleniti", "omnis");            

            GetV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdResponse res = sdk.spec.getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields

Get Spec Type Fields

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest;
import org.openapis.openapi.models.operations.GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest req = new GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRequest("necessitatibus", "distinctio");            

            GetV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsResponse res = sdk.spec.getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFields(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpecProductTypeListOfWorkgroupJson

Register product types for spec types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpecProductTypeListOfWorkgroupJsonRequest;
import org.openapis.openapi.models.operations.PostSpecProductTypeListOfWorkgroupJsonResponse;
import org.openapis.openapi.models.shared.SpecTypePersistVO;
import org.openapis.openapi.models.shared.WgSpecPrdTypeRegPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSpecProductTypeListOfWorkgroupJsonRequest req = new PostSpecProductTypeListOfWorkgroupJsonRequest("asperiores") {{
                wgSpecPrdTypeRegPersistVO = new WgSpecPrdTypeRegPersistVO() {{
                    enableDifferentiatePrdTypePreference = true;
                    specPrdTypeList = new org.openapis.openapi.models.shared.SpecTypePersistVO[]{{
                        add(new SpecTypePersistVO() {{
                            prdTypeLabels = new String[]{{
                                add("sample prdType_labels"),
                            }};
                            specTypeId = 1L;
                        }}),
                        add(new SpecTypePersistVO() {{
                            prdTypeLabels = new String[]{{
                                add("sample prdType_labels"),
                                add("sample prdType_labels"),
                            }};
                            specTypeId = 1L;
                        }}),
                    }};
                }};;
            }};            

            PostSpecProductTypeListOfWorkgroupJsonResponse res = sdk.spec.postSpecProductTypeListOfWorkgroupJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpecProductTypeListOfWorkgroupRaw

Register product types for spec types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpecProductTypeListOfWorkgroupRawRequest;
import org.openapis.openapi.models.operations.PostSpecProductTypeListOfWorkgroupRawResponse;
import org.openapis.openapi.models.shared.SpecTypePersistVO;
import org.openapis.openapi.models.shared.WgSpecPrdTypeRegPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSpecProductTypeListOfWorkgroupRawRequest req = new PostSpecProductTypeListOfWorkgroupRawRequest("id") {{
                requestBody = "saepe".getBytes();
            }};            

            PostSpecProductTypeListOfWorkgroupRawResponse res = sdk.spec.postSpecProductTypeListOfWorkgroupRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpecJson

Create a Spec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpecJsonRequest;
import org.openapis.openapi.models.operations.PostSpecJsonResponse;
import org.openapis.openapi.models.shared.SpecPersistVO;
import org.openapis.openapi.models.shared.SpecVersionPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSpecJsonRequest req = new PostSpecJsonRequest("eius", "aspernatur") {{
                specPersistVO = new SpecPersistVO() {{
                    jsonBody = true;
                    productTypeId = 1L;
                    quantity1 = 1L;
                    quantity2 = 1L;
                    quantity3 = 1L;
                    quantity4 = 1L;
                    quantity5 = 1L;
                    sku = "sample sku";
                    specName = "sample spec_name";
                    specTemplateId = 1L;
                    specTypeId = 1L;
                    versions = new org.openapis.openapi.models.shared.SpecVersionPersistVO[]{{
                        add(new SpecVersionPersistVO() {{
                            description = "sample description";
                            qty = 1L;
                        }}),
                    }};
                }};;
            }};            

            PostSpecJsonResponse res = sdk.spec.postSpecJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSpecRaw

Create a Spec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSpecRawRequest;
import org.openapis.openapi.models.operations.PostSpecRawResponse;
import org.openapis.openapi.models.shared.SpecPersistVO;
import org.openapis.openapi.models.shared.SpecVersionPersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSpecRawRequest req = new PostSpecRawRequest("amet", "optio") {{
                requestBody = "accusamus".getBytes();
            }};            

            PostSpecRawResponse res = sdk.spec.postSpecRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSpecJson

Update a specific Spec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSpecJsonRequest;
import org.openapis.openapi.models.operations.PutSpecJsonResponse;
import org.openapis.openapi.models.shared.SpecVersionPersistVO;
import org.openapis.openapi.models.shared.V1X1SpecUpdatingPO;
import org.openapis.openapi.models.shared.V1x1ProperyPO;
import org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSpecJsonRequest req = new PutSpecJsonRequest("ad", "saepe", "suscipit") {{
                v1X1SpecUpdatingPO = new V1X1SpecUpdatingPO() {{
                    firstLevelCustomFields = new V1x1ProperyPO() {{
                        propertyAttributes = new org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO[]{{
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "provident";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "minima";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "repellendus";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                        }};
                        propertyId = 1L;
                        propertyName = "sample property_name";
                    }};;
                    headerCustomFields = new V1x1ProperyPO() {{
                        propertyAttributes = new org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO[]{{
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "similique";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "alias";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                            add(new V1x1SpecPamAndAttPO() {{
                                attributeId = 1L;
                                attributeValue = "at";
                                label = "sample label";
                                paramId = 1L;
                                paramName = "sample param_name";
                            }}),
                        }};
                        propertyId = 1L;
                        propertyName = "sample property_name";
                    }};;
                    productTypeId = 1L;
                    quantity1 = 1L;
                    quantity2 = 1L;
                    quantity3 = 1L;
                    quantity4 = 1L;
                    quantity5 = 1L;
                    secondLevelCustomFields = new org.openapis.openapi.models.shared.V1x1ProperyPO[]{{
                        add(new V1x1ProperyPO() {{
                            propertyAttributes = new org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO[]{{
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "vel";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "quod";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                            }};
                            propertyId = 1L;
                            propertyName = "sample property_name";
                        }}),
                        add(new V1x1ProperyPO() {{
                            propertyAttributes = new org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO[]{{
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "qui";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "dolorum";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "a";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                                add(new V1x1SpecPamAndAttPO() {{
                                    attributeId = 1L;
                                    attributeValue = "esse";
                                    label = "sample label";
                                    paramId = 1L;
                                    paramName = "sample param_name";
                                }}),
                            }};
                            propertyId = 1L;
                            propertyName = "sample property_name";
                        }}),
                    }};
                    sku = "sample sku";
                    specName = "sample spec_name";
                    specTypeId = 1L;
                    versions = new org.openapis.openapi.models.shared.SpecVersionPersistVO[]{{
                        add(new SpecVersionPersistVO() {{
                            description = "sample description";
                            qty = 1L;
                        }}),
                        add(new SpecVersionPersistVO() {{
                            description = "sample description";
                            qty = 1L;
                        }}),
                        add(new SpecVersionPersistVO() {{
                            description = "sample description";
                            qty = 1L;
                        }}),
                    }};
                }};;
            }};            

            PutSpecJsonResponse res = sdk.spec.putSpecJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSpecRaw

Update a specific Spec

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSpecRawRequest;
import org.openapis.openapi.models.operations.PutSpecRawResponse;
import org.openapis.openapi.models.shared.SpecVersionPersistVO;
import org.openapis.openapi.models.shared.V1X1SpecUpdatingPO;
import org.openapis.openapi.models.shared.V1x1ProperyPO;
import org.openapis.openapi.models.shared.V1x1SpecPamAndAttPO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutSpecRawRequest req = new PutSpecRawRequest("iusto", "ipsum", "quisquam") {{
                requestBody = "tenetur".getBytes();
            }};            

            PutSpecRawResponse res = sdk.spec.putSpecRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson

Update a specific Spec

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest;
import org.openapis.openapi.models.operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.PropertyPersistVO;
import org.openapis.openapi.models.shared.SpecUpdatePersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest req = new PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonRequest("amet", "tempore", "accusamus") {{
                specUpdatePersistVO = new SpecUpdatePersistVO() {{
                    inksAndPaper = new org.openapis.openapi.models.shared.PropertyPersistVO[]{{
                        add(new PropertyPersistVO() {{
                            customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-01-16");
                                    numberValue = "totam";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-12-22");
                                    numberValue = "expedita";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                            }};
                            paperId = 1L;
                        }}),
                        add(new PropertyPersistVO() {{
                            customFields = new org.openapis.openapi.models.shared.CustomFieldPersistVO[]{{
                                add(new CustomFieldPersistVO() {{
                                    dateValue = LocalDate.parse("2022-07-29");
                                    numberValue = "libero";
                                    paramName = "sample param_name";
                                    stringValue = "sample string_value";
                                }}),
                            }};
                            paperId = 1L;
                        }}),
                    }};
                    productTypeId = 1L;
                    quantity1 = 1L;
                    quantity2 = 1L;
                    quantity3 = 1L;
                    quantity4 = 1L;
                    quantity5 = 1L;
                    sku = "sample sku";
                    specName = "sample spec_name";
                }};;
            }};            

            PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJsonResponse res = sdk.spec.putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw

Update a specific Spec

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest;
import org.openapis.openapi.models.operations.PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawResponse;
import org.openapis.openapi.models.shared.CustomFieldPersistVO;
import org.openapis.openapi.models.shared.PropertyPersistVO;
import org.openapis.openapi.models.shared.SpecUpdatePersistVO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest req = new PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawRequest("voluptas", "deserunt", "quam") {{
                requestBody = "ipsum".getBytes();
            }};            

            PutV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRawResponse res = sdk.spec.putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRaw(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
