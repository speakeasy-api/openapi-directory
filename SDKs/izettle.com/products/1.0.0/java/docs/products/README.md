# products

### Available Operations

* [countAllProducts](#countallproducts) - Retrieve the count of existing products
* [createProduct](#createproduct) - Create a new product
* [deleteProduct](#deleteproduct) - Delete a single product
* [deleteProducts](#deleteproducts) - Delete a list of products
* [getAllOptions](#getalloptions) - Retrieve an aggregate of active Options in the library
* [getAllProductsInPos](#getallproductsinpos) - Retrieve all products visible in POS
* [getAllProductsV2](#getallproductsv2) - Retrieve all products visible in POS – v2
* [getProduct](#getproduct) - Retrieve a single product
* [updateProduct](#updateproduct) - Update a single product

## countAllProducts

Retrieve the count of existing products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountAllProductsRequest;
import org.openapis.openapi.models.operations.CountAllProductsResponse;
import org.openapis.openapi.models.operations.CountAllProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountAllProductsRequest req = new CountAllProductsRequest("eac646ec-b573-4409-a3eb-1e5a2b12eb07");            

            CountAllProductsResponse res = sdk.products.countAllProducts(req, new CountAllProductsSecurity("maiores") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productCountResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProduct

Create a new product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProductRequest;
import org.openapis.openapi.models.operations.CreateProductResponse;
import org.openapis.openapi.models.operations.CreateProductSecurity;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.MetadataDTO;
import org.openapis.openapi.models.shared.OnlineProperties;
import org.openapis.openapi.models.shared.OnlinePropertiesStatusEnum;
import org.openapis.openapi.models.shared.Presentation;
import org.openapis.openapi.models.shared.PresentationDTO;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceCurrencyIdEnum;
import org.openapis.openapi.models.shared.ProductCreateRequest;
import org.openapis.openapi.models.shared.SearchEngineOptimization;
import org.openapis.openapi.models.shared.Shipping;
import org.openapis.openapi.models.shared.ShippingShippingPricingModelEnum;
import org.openapis.openapi.models.shared.SourceDTO;
import org.openapis.openapi.models.shared.VariantDTO;
import org.openapis.openapi.models.shared.VariantOption;
import org.openapis.openapi.models.shared.VariantOptionDefinition;
import org.openapis.openapi.models.shared.VariantOptionDefinitions;
import org.openapis.openapi.models.shared.VariantOptionProperties;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateProductRequest req = new CreateProductRequest(                new ProductCreateRequest("veritatis", "16db9954-5fc9-45fa-8897-0e189dbb30fc") {{
                                categories = new String[]{{
                                    add("ipsum"),
                                    add("adipisci"),
                                    add("saepe"),
                                }};
                                category = new CategoryDTO("deserunt", "055b197c-d44e-42f5-ad82-d3513bb6f48b");;
                                createWithDefaultTax = false;
                                description = "nisi";
                                externalReference = "quis";
                                imageLookupKeys = new String[]{{
                                    add("libero"),
                                    add("minus"),
                                }};
                                metadata = new MetadataDTO(false) {{
                                    source = new SourceDTO() {{
                                        external = false;
                                        name = "Johnathan Emmerich";
                                    }};;
                                }};;
                                online = new OnlineProperties(OnlinePropertiesStatusEnum.HIDDEN) {{
                                    description = "consequuntur";
                                    presentation = new Presentation() {{
                                        additionalImageUrls = new String[]{{
                                            add("labore"),
                                            add("rerum"),
                                            add("eos"),
                                            add("reprehenderit"),
                                        }};
                                        displayImageUrl = "nostrum";
                                        mediaUrls = new String[]{{
                                            add("iusto"),
                                        }};
                                    }};;
                                    seo = new SearchEngineOptimization() {{
                                        metaDescription = "est";
                                        slug = "rem";
                                        title = "Miss";
                                    }};;
                                    shipping = new Shipping() {{
                                        shippingPricingModel = ShippingShippingPricingModelEnum.STANDARD;
                                        weight = new Weight(WeightUnitEnum.OZ, 8894.48);;
                                        weightInGrams = 495617L;
                                    }};;
                                    title = "Mrs.";
                                }};;
                                presentation = new PresentationDTO() {{
                                    backgroundColor = "dicta";
                                    imageUrl = "error";
                                    textColor = "porro";
                                }};;
                                taxCode = "vitae";
                                taxExempt = false;
                                taxRates = new String[]{{
                                    add("7d525f77-b114-4eeb-92ff-785fc37814d4"),
                                    add("c98e0c2b-b89e-4b75-9ad6-36c600503d8b"),
                                }};
                                unitName = "cum";
                                variantOptionDefinitions = new VariantOptionDefinitions(                new org.openapis.openapi.models.shared.VariantOptionDefinition[]{{
                                                    add(new VariantOptionDefinition("provident",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                        add(new VariantOptionProperties("molestiae") {{
                                                                            imageUrl = "consequatur";
                                                                            value = "nemo";
                                                                        }}),
                                                                        add(new VariantOptionProperties("corrupti") {{
                                                                            imageUrl = "itaque";
                                                                            value = "facilis";
                                                                        }}),
                                                                        add(new VariantOptionProperties("accusamus") {{
                                                                            imageUrl = "aperiam";
                                                                            value = "sint";
                                                                        }}),
                                                                        add(new VariantOptionProperties("dicta") {{
                                                                            imageUrl = "eos";
                                                                            value = "totam";
                                                                        }}),
                                                                    }}) {{
                                                        name = "Dr. Mildred Larkin";
                                                        properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                            add(new VariantOptionProperties("necessitatibus") {{
                                                                imageUrl = "provident";
                                                                value = "dolorum";
                                                            }}),
                                                        }};
                                                    }}),
                                                }});;
                                variants = new org.openapis.openapi.models.shared.VariantDTO[]{{
                                    add(new VariantDTO("a5b40463-a7d5-475f-9400-e764ad7334ec") {{
                                        barcode = "velit";
                                        costPrice = new Price(953676L, PriceCurrencyIdEnum.DKK) {{
                                            amount = 224413L;
                                            currencyId = PriceCurrencyIdEnum.BSD;
                                        }};
                                        description = "occaecati";
                                        name = "Albert Stroman";
                                        options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                            add(new VariantOption("velit", "porro") {{
                                                name = "Lisa Price IV";
                                                value = "repellat";
                                            }}),
                                            add(new VariantOption("natus", "temporibus") {{
                                                name = "Vincent Romaguera";
                                                value = "soluta";
                                            }}),
                                        }};
                                        presentation = new PresentationDTO() {{
                                            backgroundColor = "officia";
                                            imageUrl = "amet";
                                            textColor = "tenetur";
                                        }};
                                        price = new Price(931077L, PriceCurrencyIdEnum.TTD) {{
                                            amount = 133949L;
                                            currencyId = PriceCurrencyIdEnum.SSP;
                                        }};
                                        sku = "laborum";
                                        uuid = "7e23f225-7411-4faf-8b75-44e472e80285";
                                        vatPercentage = 4527.3;
                                    }}),
                                }};
                                vatPercentage = 1226.62;
                            }};, "b781b36a-0808-48d1-80ef-ada200ef0422") {{
                returnEntity = false;
            }};            

            CreateProductResponse res = sdk.products.createProduct(req, new CreateProductSecurity("necessitatibus") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProduct

Delete a single product

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductRequest;
import org.openapis.openapi.models.operations.DeleteProductResponse;
import org.openapis.openapi.models.operations.DeleteProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductRequest req = new DeleteProductRequest("b2164cf9-ab83-466c-b23f-fda9e06bee48", "25c1fc0e-115c-480b-bf91-8544ec42defc");            

            DeleteProductResponse res = sdk.products.deleteProduct(req, new DeleteProductSecurity("porro") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## deleteProducts

Delete a list of products

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProductsRequest;
import org.openapis.openapi.models.operations.DeleteProductsResponse;
import org.openapis.openapi.models.operations.DeleteProductsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProductsRequest req = new DeleteProductsRequest("e8f19777-73e6-4356-aa7b-408f05e3d48f",                 new String[]{{
                                add("af313a1f-5fd9-4425-9c0b-36f25ea944f3"),
                                add("b756c11f-6c37-4a51-a624-3835bbc05a23"),
                                add("a45cefc5-fde1-40a0-8e21-69e510019c6d"),
                                add("c5e34762-799b-4fbb-a694-9fb2bb4ecae6"),
                            }});            

            DeleteProductsResponse res = sdk.products.deleteProducts(req, new DeleteProductsSecurity("quo") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## getAllOptions

Retrieve an aggregate of active Options in the library

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllOptionsRequest;
import org.openapis.openapi.models.operations.GetAllOptionsResponse;
import org.openapis.openapi.models.operations.GetAllOptionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllOptionsRequest req = new GetAllOptionsRequest("3d5db3ad-ebd5-4dae-a4c5-06a8aa94c026");            

            GetAllOptionsResponse res = sdk.products.getAllOptions(req, new GetAllOptionsSecurity("magnam") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.variantOptionsResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllProductsInPos

Retrieve all products visible in POS

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllProductsInPosRequest;
import org.openapis.openapi.models.operations.GetAllProductsInPosResponse;
import org.openapis.openapi.models.operations.GetAllProductsInPosSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllProductsInPosRequest req = new GetAllProductsInPosRequest("4cf5e9d9-a457-48ad-81ac-600dec001ac8");            

            GetAllProductsInPosResponse res = sdk.products.getAllProductsInPos(req, new GetAllProductsInPosSecurity("quae") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllProductsV2

Retrieve all products visible in POS – v2

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllProductsV2Request;
import org.openapis.openapi.models.operations.GetAllProductsV2Response;
import org.openapis.openapi.models.operations.GetAllProductsV2Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllProductsV2Request req = new GetAllProductsV2Request("2e2ec09f-f8f0-4f81-aff3-477c13e902c1") {{
                sort = false;
            }};            

            GetAllProductsV2Response res = sdk.products.getAllProductsV2(req, new GetAllProductsV2Security("incidunt") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProduct

Get the full product with the provided UUID. The method supports conditional GET through providing a HttpHeaders.IF_NONE_MATCH header. If the conditional prerequisite is fullfilled, the full product is returned, otherwise a 304 not modified will be returned with an empty body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProductRequest;
import org.openapis.openapi.models.operations.GetProductResponse;
import org.openapis.openapi.models.operations.GetProductSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProductRequest req = new GetProductRequest("125b0960-a668-4151-a472-af923c5949f8", "3f350cf8-76ff-4b90-9c6e-cbb4e243cf78") {{
                ifNoneMatch = "sint";
            }};            

            GetProductResponse res = sdk.products.getProduct(req, new GetProductSecurity("repellat") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.productResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProduct

Updates a product entity using JSON merge patch (https://tools.ietf.org/html/rfc7386). This means that only included fields will be changed: null values removes the field on the target entity, and other values updates the field. Conditional updates are supported through the HttpHeaders.IF_MATCH header. If the conditional prerequisite is fullfilled, the product is updated: otherwise a 412 (precondition failed) will be returned with an empty body.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProductRequest;
import org.openapis.openapi.models.operations.UpdateProductResponse;
import org.openapis.openapi.models.operations.UpdateProductSecurity;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.FullProductUpdateRequest;
import org.openapis.openapi.models.shared.MetadataDTO;
import org.openapis.openapi.models.shared.OnlineProperties;
import org.openapis.openapi.models.shared.OnlinePropertiesStatusEnum;
import org.openapis.openapi.models.shared.Presentation;
import org.openapis.openapi.models.shared.PresentationDTO;
import org.openapis.openapi.models.shared.Price;
import org.openapis.openapi.models.shared.PriceCurrencyIdEnum;
import org.openapis.openapi.models.shared.SearchEngineOptimization;
import org.openapis.openapi.models.shared.Shipping;
import org.openapis.openapi.models.shared.ShippingShippingPricingModelEnum;
import org.openapis.openapi.models.shared.SourceDTO;
import org.openapis.openapi.models.shared.VariantDTO;
import org.openapis.openapi.models.shared.VariantOption;
import org.openapis.openapi.models.shared.VariantOptionDefinition;
import org.openapis.openapi.models.shared.VariantOptionDefinitions;
import org.openapis.openapi.models.shared.VariantOptionProperties;
import org.openapis.openapi.models.shared.Weight;
import org.openapis.openapi.models.shared.WeightUnitEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateProductRequest req = new UpdateProductRequest(                new FullProductUpdateRequest("a", "afeda53e-5ae6-4e0a-8184-c2b9c247c883") {{
                                categories = new String[]{{
                                    add("amet"),
                                    add("laborum"),
                                }};
                                category = new CategoryDTO("modi", "0e1942f3-2e55-4055-b56f-5d56d0bd0af2");;
                                description = "possimus";
                                externalReference = "repellat";
                                imageLookupKeys = new String[]{{
                                    add("architecto"),
                                    add("adipisci"),
                                    add("pariatur"),
                                    add("harum"),
                                }};
                                metadata = new MetadataDTO(false) {{
                                    source = new SourceDTO() {{
                                        external = false;
                                        name = "Miss Tami Kerluke";
                                    }};;
                                }};;
                                online = new OnlineProperties(OnlinePropertiesStatusEnum.HIDDEN) {{
                                    description = "velit";
                                    presentation = new Presentation() {{
                                        additionalImageUrls = new String[]{{
                                            add("praesentium"),
                                            add("error"),
                                            add("non"),
                                            add("quasi"),
                                        }};
                                        displayImageUrl = "mollitia";
                                        mediaUrls = new String[]{{
                                            add("harum"),
                                            add("cumque"),
                                            add("doloremque"),
                                            add("expedita"),
                                        }};
                                    }};;
                                    seo = new SearchEngineOptimization() {{
                                        metaDescription = "corrupti";
                                        slug = "eaque";
                                        title = "Miss";
                                    }};;
                                    shipping = new Shipping() {{
                                        shippingPricingModel = ShippingShippingPricingModelEnum.FREE;
                                        weight = new Weight(WeightUnitEnum.OZ, 1674.35);;
                                        weightInGrams = 273677L;
                                    }};;
                                    title = "Dr.";
                                }};;
                                presentation = new PresentationDTO() {{
                                    backgroundColor = "dolor";
                                    imageUrl = "rerum";
                                    textColor = "sed";
                                }};;
                                taxCode = "accusamus";
                                taxExempt = false;
                                taxRates = new String[]{{
                                    add("fcc8f895-010f-45dd-bd6f-a1804e54c82f"),
                                    add("168a363c-8873-4e48-8380-b1f6b8ca275a"),
                                    add("60a04c49-5cc6-4991-b1b5-1c1bdb1cf4b8"),
                                    add("88ebdfc4-ccca-499b-87fc-0b2dce10873e"),
                                }};
                                unitName = "tempora";
                                variantOptionDefinitions = new VariantOptionDefinitions(                new org.openapis.openapi.models.shared.VariantOptionDefinition[]{{
                                                    add(new VariantOptionDefinition("deserunt",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                        add(new VariantOptionProperties("architecto") {{
                                                                            imageUrl = "nostrum";
                                                                            value = "atque";
                                                                        }}),
                                                                        add(new VariantOptionProperties("rem") {{
                                                                            imageUrl = "est";
                                                                            value = "enim";
                                                                        }}),
                                                                        add(new VariantOptionProperties("quas") {{
                                                                            imageUrl = "magni";
                                                                            value = "quae";
                                                                        }}),
                                                                    }}) {{
                                                        name = "Brian Bartell";
                                                        properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                            add(new VariantOptionProperties("blanditiis") {{
                                                                imageUrl = "reprehenderit";
                                                                value = "voluptatum";
                                                            }}),
                                                            add(new VariantOptionProperties("rerum") {{
                                                                imageUrl = "nihil";
                                                                value = "atque";
                                                            }}),
                                                        }};
                                                    }}),
                                                }});;
                                variants = new org.openapis.openapi.models.shared.VariantDTO[]{{
                                    add(new VariantDTO("2d514f4c-c6f1-48bf-9621-a6a4f77a87ee") {{
                                        barcode = "enim";
                                        costPrice = new Price(901651L, PriceCurrencyIdEnum.XPT) {{
                                            amount = 286453L;
                                            currencyId = PriceCurrencyIdEnum.XPF;
                                        }};
                                        description = "officia";
                                        name = "Benny Mosciski";
                                        options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                            add(new VariantOption("nemo", "illum") {{
                                                name = "Angelo Runolfsdottir";
                                                value = "eum";
                                            }}),
                                        }};
                                        presentation = new PresentationDTO() {{
                                            backgroundColor = "nesciunt";
                                            imageUrl = "sit";
                                            textColor = "odio";
                                        }};
                                        price = new Price(924293L, PriceCurrencyIdEnum.VUV) {{
                                            amount = 794306L;
                                            currencyId = PriceCurrencyIdEnum.ZWD;
                                        }};
                                        sku = "praesentium";
                                        uuid = "1206e281-3fa4-4a41-8480-d3f2132af031";
                                        vatPercentage = 449.29;
                                    }}),
                                    add(new VariantDTO("8227b2d3-0947-40bf-ba4f-a87cf535a6fa") {{
                                        barcode = "velit";
                                        costPrice = new Price(701978L, PriceCurrencyIdEnum.XAU) {{
                                            amount = 884765L;
                                            currencyId = PriceCurrencyIdEnum.EUR;
                                        }};
                                        description = "dignissimos";
                                        name = "Janice Russel";
                                        options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                            add(new VariantOption("expedita", "libero") {{
                                                name = "Ms. Leslie Hagenes";
                                                value = "dolor";
                                            }}),
                                            add(new VariantOption("iusto", "enim") {{
                                                name = "Joshua Schiller";
                                                value = "sint";
                                            }}),
                                            add(new VariantOption("omnis", "illum") {{
                                                name = "Kevin Von";
                                                value = "quae";
                                            }}),
                                        }};
                                        presentation = new PresentationDTO() {{
                                            backgroundColor = "rem";
                                            imageUrl = "tenetur";
                                            textColor = "deleniti";
                                        }};
                                        price = new Price(101374L, PriceCurrencyIdEnum.GIP) {{
                                            amount = 264958L;
                                            currencyId = PriceCurrencyIdEnum.XCD;
                                        }};
                                        sku = "labore";
                                        uuid = "f3e07edc-c4aa-45f3-8abd-905a972e0567";
                                        vatPercentage = 1541.3;
                                    }}),
                                    add(new VariantDTO("7cbdb6ee-c743-478b-a253-17747dc915ad") {{
                                        barcode = "recusandae";
                                        costPrice = new Price(900368L, PriceCurrencyIdEnum.SDG) {{
                                            amount = 359453L;
                                            currencyId = PriceCurrencyIdEnum.ERN;
                                        }};
                                        description = "maiores";
                                        name = "Sandra Rowe Sr.";
                                        options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                            add(new VariantOption("temporibus", "ratione") {{
                                                name = "Tammy Farrell";
                                                value = "nostrum";
                                            }}),
                                            add(new VariantOption("est", "accusantium") {{
                                                name = "Alma Kunde";
                                                value = "vitae";
                                            }}),
                                            add(new VariantOption("provident", "sapiente") {{
                                                name = "Israel Lubowitz";
                                                value = "odio";
                                            }}),
                                            add(new VariantOption("unde", "alias") {{
                                                name = "Marguerite Donnelly";
                                                value = "repellendus";
                                            }}),
                                        }};
                                        presentation = new PresentationDTO() {{
                                            backgroundColor = "impedit";
                                            imageUrl = "sequi";
                                            textColor = "commodi";
                                        }};
                                        price = new Price(446737L, PriceCurrencyIdEnum.SYP) {{
                                            amount = 287141L;
                                            currencyId = PriceCurrencyIdEnum.SCR;
                                        }};
                                        sku = "sunt";
                                        uuid = "5dfbace1-88b1-4c4e-a2c8-c6ce611feeb1";
                                        vatPercentage = 7782.42;
                                    }}),
                                    add(new VariantDTO("3819b474-b0ed-420e-9624-8fff639a910a") {{
                                        barcode = "fugit";
                                        costPrice = new Price(998355L, PriceCurrencyIdEnum.HRK) {{
                                            amount = 804879L;
                                            currencyId = PriceCurrencyIdEnum.RSD;
                                        }};
                                        description = "illum";
                                        name = "Mrs. Leslie Klocko";
                                        options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                            add(new VariantOption("sapiente", "neque") {{
                                                name = "Shawna Heller";
                                                value = "aspernatur";
                                            }}),
                                            add(new VariantOption("iusto", "corrupti") {{
                                                name = "Shane Pfeffer Jr.";
                                                value = "laudantium";
                                            }}),
                                            add(new VariantOption("corporis", "est") {{
                                                name = "Mrs. Dolores Kertzmann";
                                                value = "sapiente";
                                            }}),
                                            add(new VariantOption("enim", "ipsam") {{
                                                name = "Adrienne McLaughlin";
                                                value = "nemo";
                                            }}),
                                        }};
                                        presentation = new PresentationDTO() {{
                                            backgroundColor = "minima";
                                            imageUrl = "tempora";
                                            textColor = "perferendis";
                                        }};
                                        price = new Price(854137L, PriceCurrencyIdEnum.ETB) {{
                                            amount = 546963L;
                                            currencyId = PriceCurrencyIdEnum.ARS;
                                        }};
                                        sku = "doloremque";
                                        uuid = "bcacc6cb-d6b5-4f3e-8909-304f926bad25";
                                        vatPercentage = 3434.54;
                                    }}),
                                }};
                                vatPercentage = 7211.38;
                            }};, "dcab6267-6696-4e1e-8002-21b335d89acb", "3ecfda8d-0c54-49ef-8300-4978a61fa1cf") {{
                ifMatch = "qui";
            }};            

            UpdateProductResponse res = sdk.products.updateProduct(req, new UpdateProductSecurity("accusantium") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
