# import_

### Available Operations

* [getLatestImportStatus](#getlatestimportstatus) - Get status for latest import
* [getStatusByUuid](#getstatusbyuuid) - Get status for an import
* [importLibraryV2](#importlibraryv2) - Import library items

## getLatestImportStatus

Get status for latest import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestImportStatusRequest;
import org.openapis.openapi.models.operations.GetLatestImportStatusResponse;
import org.openapis.openapi.models.operations.GetLatestImportStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestImportStatusRequest req = new GetLatestImportStatusRequest("3a79f9df-e0ab-47da-8a50-ce187f86bc17");            

            GetLatestImportStatusResponse res = sdk.import_.getLatestImportStatus(req, new GetLatestImportStatusSecurity("amet") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStatusByUuid

Get status for an import

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatusByUuidRequest;
import org.openapis.openapi.models.operations.GetStatusByUuidResponse;
import org.openapis.openapi.models.operations.GetStatusByUuidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStatusByUuidRequest req = new GetStatusByUuidRequest("d689eee9-526f-48d9-86e8-81ead4f0e101", "2563f94e-29e9-473e-922a-57a15be3e060");            

            GetStatusByUuidResponse res = sdk.import_.getStatusByUuid(req, new GetStatusByUuidSecurity("totam") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importLibraryV2

Import library items

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportLibraryV2Request;
import org.openapis.openapi.models.operations.ImportLibraryV2Response;
import org.openapis.openapi.models.operations.ImportLibraryV2Security;
import org.openapis.openapi.models.shared.BulkImportRequest;
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

            ImportLibraryV2Request req = new ImportLibraryV2Request(                new BulkImportRequest(                new org.openapis.openapi.models.shared.FullProductUpdateRequest[]{{
                                                add(new FullProductUpdateRequest("libero", "da8c070e-1084-4cb0-a72d-1ad879eeb966") {{
                                                    categories = new String[]{{
                                                        add("eveniet"),
                                                        add("qui"),
                                                    }};
                                                    category = new CategoryDTO("laudantium", "65e7956f-9251-4a5a-9da6-60ff57bfaad4") {{
                                                        name = "Elmer Treutel";
                                                        uuid = "b8845f05-97a6-40ff-aa54-a31e94764a3e";
                                                    }};
                                                    description = "voluptatibus";
                                                    externalReference = "molestias";
                                                    imageLookupKeys = new String[]{{
                                                        add("sapiente"),
                                                        add("cumque"),
                                                        add("vitae"),
                                                        add("rerum"),
                                                    }};
                                                    metadata = new MetadataDTO(false) {{
                                                        inPos = false;
                                                        source = new SourceDTO() {{
                                                            external = false;
                                                            name = "Regina Bode";
                                                        }};
                                                    }};
                                                    name = "Lisa Flatley";
                                                    online = new OnlineProperties(OnlinePropertiesStatusEnum.HIDDEN) {{
                                                        description = "eius";
                                                        presentation = new Presentation() {{
                                                            additionalImageUrls = new String[]{{
                                                                add("at"),
                                                                add("impedit"),
                                                                add("eos"),
                                                            }};
                                                            displayImageUrl = "sapiente";
                                                            mediaUrls = new String[]{{
                                                                add("dicta"),
                                                                add("minima"),
                                                            }};
                                                        }};
                                                        seo = new SearchEngineOptimization() {{
                                                            metaDescription = "beatae";
                                                            slug = "cupiditate";
                                                            title = "Ms.";
                                                        }};
                                                        shipping = new Shipping() {{
                                                            shippingPricingModel = ShippingShippingPricingModelEnum.STANDARD;
                                                            weight = new Weight(WeightUnitEnum.LB, 525.08) {{
                                                                unit = WeightUnitEnum.OZ;
                                                                weight = 9407.82;
                                                            }};
                                                            weightInGrams = 935833L;
                                                        }};
                                                        status = OnlinePropertiesStatusEnum.HIDDEN;
                                                        title = "Dr.";
                                                    }};
                                                    presentation = new PresentationDTO() {{
                                                        backgroundColor = "aliquid";
                                                        imageUrl = "porro";
                                                        textColor = "suscipit";
                                                    }};
                                                    taxCode = "dolorem";
                                                    taxExempt = false;
                                                    taxRates = new String[]{{
                                                        add("ca3aed01-1799-4631-afde-04771778ff61"),
                                                    }};
                                                    unitName = "fugiat";
                                                    uuid = "01747636-0a15-4db6-a660-659a1adeaab5";
                                                    variantOptionDefinitions = new VariantOptionDefinitions(                new org.openapis.openapi.models.shared.VariantOptionDefinition[]{{
                                                                        add(new VariantOptionDefinition("expedita",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                                            add(new VariantOptionProperties("magnam") {{
                                                                                                imageUrl = "vel";
                                                                                                value = "voluptatum";
                                                                                            }}),
                                                                                            add(new VariantOptionProperties("porro") {{
                                                                                                imageUrl = "exercitationem";
                                                                                                value = "ab";
                                                                                            }}),
                                                                                        }}) {{
                                                                            name = "Ms. Pauline Considine I";
                                                                            properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                                add(new VariantOptionProperties("ipsa") {{
                                                                                    imageUrl = "ipsam";
                                                                                    value = "consequuntur";
                                                                                }}),
                                                                                add(new VariantOptionProperties("impedit") {{
                                                                                    imageUrl = "quas";
                                                                                    value = "eveniet";
                                                                                }}),
                                                                                add(new VariantOptionProperties("necessitatibus") {{
                                                                                    imageUrl = "officiis";
                                                                                    value = "esse";
                                                                                }}),
                                                                                add(new VariantOptionProperties("nesciunt") {{
                                                                                    imageUrl = "sed";
                                                                                    value = "veniam";
                                                                                }}),
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        definitions = new org.openapis.openapi.models.shared.VariantOptionDefinition[]{{
                                                            add(new VariantOptionDefinition("aliquid",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                                add(new VariantOptionProperties("veritatis") {{
                                                                                    imageUrl = "voluptatum";
                                                                                    value = "omnis";
                                                                                }}),
                                                                            }}) {{
                                                                name = "Gloria Skiles";
                                                                properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                    add(new VariantOptionProperties("expedita") {{
                                                                        imageUrl = "ut";
                                                                        value = "ad";
                                                                    }}),
                                                                    add(new VariantOptionProperties("cum") {{
                                                                        imageUrl = "voluptatem";
                                                                        value = "molestias";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new VariantOptionDefinition("voluptatem",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                                add(new VariantOptionProperties("ex") {{
                                                                                    imageUrl = "deleniti";
                                                                                    value = "earum";
                                                                                }}),
                                                                            }}) {{
                                                                name = "Dr. Rex Nicolas";
                                                                properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                    add(new VariantOptionProperties("debitis") {{
                                                                        imageUrl = "fuga";
                                                                        value = "pariatur";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new VariantOptionDefinition("totam",                 new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                                add(new VariantOptionProperties("ipsam") {{
                                                                                    imageUrl = "quibusdam";
                                                                                    value = "nam";
                                                                                }}),
                                                                                add(new VariantOptionProperties("aliquam") {{
                                                                                    imageUrl = "culpa";
                                                                                    value = "dolor";
                                                                                }}),
                                                                                add(new VariantOptionProperties("veritatis") {{
                                                                                    imageUrl = "inventore";
                                                                                    value = "deleniti";
                                                                                }}),
                                                                                add(new VariantOptionProperties("consequatur") {{
                                                                                    imageUrl = "tempora";
                                                                                    value = "dolor";
                                                                                }}),
                                                                            }}) {{
                                                                name = "Ian Schinner";
                                                                properties = new org.openapis.openapi.models.shared.VariantOptionProperties[]{{
                                                                    add(new VariantOptionProperties("illum") {{
                                                                        imageUrl = "ullam";
                                                                        value = "perferendis";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    variants = new org.openapis.openapi.models.shared.VariantDTO[]{{
                                                        add(new VariantDTO("3f59da75-7a59-4ecf-af66-ef1caa3383c2") {{
                                                            barcode = "nobis";
                                                            costPrice = new Price(160393L, PriceCurrencyIdEnum.ANG) {{
                                                                amount = 388319L;
                                                                currencyId = PriceCurrencyIdEnum.XAG;
                                                            }};
                                                            description = "exercitationem";
                                                            name = "Arthur Huel";
                                                            options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                                                add(new VariantOption("nemo", "voluptate") {{
                                                                    name = "Johnny Yundt";
                                                                    value = "occaecati";
                                                                }}),
                                                                add(new VariantOption("eius", "aspernatur") {{
                                                                    name = "Gerard Hodkiewicz";
                                                                    value = "quos";
                                                                }}),
                                                                add(new VariantOption("rem", "fugiat") {{
                                                                    name = "Peggy Parker";
                                                                    value = "quasi";
                                                                }}),
                                                            }};
                                                            presentation = new PresentationDTO() {{
                                                                backgroundColor = "dicta";
                                                                imageUrl = "nisi";
                                                                textColor = "consequuntur";
                                                            }};
                                                            price = new Price(585432L, PriceCurrencyIdEnum.YER) {{
                                                                amount = 233078L;
                                                                currencyId = PriceCurrencyIdEnum.AUD;
                                                            }};
                                                            sku = "soluta";
                                                            uuid = "0929921a-efb9-4f58-84d8-6e68e4be0560";
                                                            vatPercentage = 938.94;
                                                        }}),
                                                        add(new VariantDTO("2965bb8a-7202-4611-835e-139dbc2259b1") {{
                                                            barcode = "soluta";
                                                            costPrice = new Price(294076L, PriceCurrencyIdEnum.LRD) {{
                                                                amount = 922757L;
                                                                currencyId = PriceCurrencyIdEnum.SDG;
                                                            }};
                                                            description = "voluptate";
                                                            name = "Stella DuBuque";
                                                            options = new org.openapis.openapi.models.shared.VariantOption[]{{
                                                                add(new VariantOption("inventore", "facere") {{
                                                                    name = "Christina Wolf";
                                                                    value = "quibusdam";
                                                                }}),
                                                                add(new VariantOption("velit", "illo") {{
                                                                    name = "Juan Wolf";
                                                                    value = "aliquam";
                                                                }}),
                                                                add(new VariantOption("velit", "ut") {{
                                                                    name = "Dr. Gina Jaskolski";
                                                                    value = "eum";
                                                                }}),
                                                                add(new VariantOption("itaque", "alias") {{
                                                                    name = "Merle Carroll";
                                                                    value = "iste";
                                                                }}),
                                                            }};
                                                            presentation = new PresentationDTO() {{
                                                                backgroundColor = "nisi";
                                                                imageUrl = "itaque";
                                                                textColor = "velit";
                                                            }};
                                                            price = new Price(224467L, PriceCurrencyIdEnum.LRD) {{
                                                                amount = 673838L;
                                                                currencyId = PriceCurrencyIdEnum.ERN;
                                                            }};
                                                            sku = "sit";
                                                            uuid = "00ae6b6b-c9b8-4f75-9eac-55a9741d3113";
                                                            vatPercentage = 3220.17;
                                                        }}),
                                                    }};
                                                    vatPercentage = 6633.18;
                                                }}),
                                            }});, "5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5");            

            ImportLibraryV2Response res = sdk.import_.importLibraryV2(req, new ImportLibraryV2Security("beatae") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.importResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
