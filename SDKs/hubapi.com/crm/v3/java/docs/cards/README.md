# cards

## Overview

Definitions and configuration for the CRM cards your app can display.

### Available Operations

* [deleteCrmV3ExtensionsCardsAppIdCardIdArchive](#deletecrmv3extensionscardsappidcardidarchive) - Delete a card
* [getCrmV3ExtensionsCardsAppIdCardIdGetById](#getcrmv3extensionscardsappidcardidgetbyid) - Get a card.
* [getCrmV3ExtensionsCardsAppIdGetAll](#getcrmv3extensionscardsappidgetall) - Get all cards
* [patchCrmV3ExtensionsCardsAppIdCardIdUpdate](#patchcrmv3extensionscardsappidcardidupdate) - Update a card
* [postCrmV3ExtensionsCardsAppIdCreate](#postcrmv3extensionscardsappidcreate) - Create a new card

## deleteCrmV3ExtensionsCardsAppIdCardIdArchive

Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse;
import org.openapis.openapi.models.operations.DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest req = new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveRequest(844266, "unde");            

            DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveResponse res = sdk.cards.deleteCrmV3ExtensionsCardsAppIdCardIdArchive(req, new DeleteCrmV3ExtensionsCardsAppIdCardIdArchiveSecurity("nulla") {{
                developerHapikey = "YOUR_API_KEY_HERE";
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

## getCrmV3ExtensionsCardsAppIdCardIdGetById

Returns the definition for a card with the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest req = new GetCrmV3ExtensionsCardsAppIdCardIdGetByIdRequest(544883, "illum");            

            GetCrmV3ExtensionsCardsAppIdCardIdGetByIdResponse res = sdk.cards.getCrmV3ExtensionsCardsAppIdCardIdGetById(req, new GetCrmV3ExtensionsCardsAppIdCardIdGetByIdSecurity("vel") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.cardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCrmV3ExtensionsCardsAppIdGetAll

Returns a list of cards for a given app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdGetAllRequest;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdGetAllResponse;
import org.openapis.openapi.models.operations.GetCrmV3ExtensionsCardsAppIdGetAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCrmV3ExtensionsCardsAppIdGetAllRequest req = new GetCrmV3ExtensionsCardsAppIdGetAllRequest(623564);            

            GetCrmV3ExtensionsCardsAppIdGetAllResponse res = sdk.cards.getCrmV3ExtensionsCardsAppIdGetAll(req, new GetCrmV3ExtensionsCardsAppIdGetAllSecurity("deserunt") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.cardListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCrmV3ExtensionsCardsAppIdCardIdUpdate

Update a card definition with new details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest;
import org.openapis.openapi.models.operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse;
import org.openapis.openapi.models.operations.PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity;
import org.openapis.openapi.models.shared.CardActions;
import org.openapis.openapi.models.shared.CardDisplayBody;
import org.openapis.openapi.models.shared.CardDisplayProperty;
import org.openapis.openapi.models.shared.CardDisplayPropertyDataTypeEnum;
import org.openapis.openapi.models.shared.CardFetchBodyPatch;
import org.openapis.openapi.models.shared.CardObjectTypeBody;
import org.openapis.openapi.models.shared.CardObjectTypeBodyNameEnum;
import org.openapis.openapi.models.shared.CardPatchRequest;
import org.openapis.openapi.models.shared.DisplayOption;
import org.openapis.openapi.models.shared.DisplayOptionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest req = new PatchCrmV3ExtensionsCardsAppIdCardIdUpdateRequest(                new CardPatchRequest() {{
                                actions = new CardActions(                new String[]{{
                                                    add("iure"),
                                                    add("magnam"),
                                                }});;
                                display = new CardDisplayBody(                new org.openapis.openapi.models.shared.CardDisplayProperty[]{{
                                                    add(new CardDisplayProperty(CardDisplayPropertyDataTypeEnum.NUMERIC, "totam", "beatae",                 new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                        add(new DisplayOption("excepturi", "aspernatur", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                            label = "molestiae";
                                                                            name = "Norma Ryan";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                        add(new DisplayOption("hic", "saepe", DisplayOptionTypeEnum.DANGER) {{
                                                                            label = "ad";
                                                                            name = "Louis Moore";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                    }}) {{
                                                        dataType = CardDisplayPropertyDataTypeEnum.BOOLEAN_;
                                                        label = "delectus";
                                                        name = "Laurie Kreiger";
                                                        options = new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                            add(new DisplayOption("deserunt", "perferendis", DisplayOptionTypeEnum.SUCCESS) {{
                                                                label = "iusto";
                                                                name = "Charlie Walsh II";
                                                                type = DisplayOptionTypeEnum.DEFAULT_;
                                                            }}),
                                                            add(new DisplayOption("molestiae", "quod", DisplayOptionTypeEnum.INFO) {{
                                                                label = "repellendus";
                                                                name = "Cedric Connelly";
                                                                type = DisplayOptionTypeEnum.INFO;
                                                            }}),
                                                            add(new DisplayOption("fugit", "deleniti", DisplayOptionTypeEnum.INFO) {{
                                                                label = "esse";
                                                                name = "Miss Lowell Parisian";
                                                                type = DisplayOptionTypeEnum.WARNING;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CardDisplayProperty(CardDisplayPropertyDataTypeEnum.STATUS, "ipsam", "id",                 new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                        add(new DisplayOption("vero", "nihil", DisplayOptionTypeEnum.WARNING) {{
                                                                            label = "aut";
                                                                            name = "Sabrina Smitham DVM";
                                                                            type = DisplayOptionTypeEnum.INFO;
                                                                        }}),
                                                                        add(new DisplayOption("ut", "maiores", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                            label = "voluptatibus";
                                                                            name = "Geneva Klein Jr.";
                                                                            type = DisplayOptionTypeEnum.WARNING;
                                                                        }}),
                                                                        add(new DisplayOption("commodi", "repudiandae", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                            label = "corporis";
                                                                            name = "Heidi Carter";
                                                                            type = DisplayOptionTypeEnum.INFO;
                                                                        }}),
                                                                        add(new DisplayOption("rem", "voluptates", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                            label = "ipsum";
                                                                            name = "Virgil Mante";
                                                                            type = DisplayOptionTypeEnum.WARNING;
                                                                        }}),
                                                                    }}) {{
                                                        dataType = CardDisplayPropertyDataTypeEnum.EMAIL;
                                                        label = "corporis";
                                                        name = "Brad Turcotte Jr.";
                                                        options = new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                            add(new DisplayOption("nobis", "enim", DisplayOptionTypeEnum.DANGER) {{
                                                                label = "est";
                                                                name = "Cameron Dach";
                                                                type = DisplayOptionTypeEnum.DEFAULT_;
                                                            }}),
                                                            add(new DisplayOption("sapiente", "architecto", DisplayOptionTypeEnum.DANGER) {{
                                                                label = "nemo";
                                                                name = "Velma Batz";
                                                                type = DisplayOptionTypeEnum.INFO;
                                                            }}),
                                                            add(new DisplayOption("commodi", "quam", DisplayOptionTypeEnum.WARNING) {{
                                                                label = "dolorem";
                                                                name = "Carlos Ziemann";
                                                                type = DisplayOptionTypeEnum.SUCCESS;
                                                            }}),
                                                            add(new DisplayOption("odit", "quo", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                label = "velit";
                                                                name = "Miss Eugene Hauck";
                                                                type = DisplayOptionTypeEnum.SUCCESS;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CardDisplayProperty(CardDisplayPropertyDataTypeEnum.CURRENCY, "magnam", "cumque",                 new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                        add(new DisplayOption("accusamus", "delectus", DisplayOptionTypeEnum.DANGER) {{
                                                                            label = "ea";
                                                                            name = "Kayla Thompson";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                        add(new DisplayOption("deserunt", "nisi", DisplayOptionTypeEnum.WARNING) {{
                                                                            label = "provident";
                                                                            name = "Lynn Kuvalis";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                        add(new DisplayOption("id", "labore", DisplayOptionTypeEnum.SUCCESS) {{
                                                                            label = "natus";
                                                                            name = "Fernando Aufderhar";
                                                                            type = DisplayOptionTypeEnum.DANGER;
                                                                        }}),
                                                                        add(new DisplayOption("magnam", "et", DisplayOptionTypeEnum.WARNING) {{
                                                                            label = "suscipit";
                                                                            name = "Robin Keebler";
                                                                            type = DisplayOptionTypeEnum.DEFAULT_;
                                                                        }}),
                                                                    }}) {{
                                                        dataType = CardDisplayPropertyDataTypeEnum.STATUS;
                                                        label = "sint";
                                                        name = "Patti Gottlieb MD";
                                                        options = new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                            add(new DisplayOption("aliquid", "cupiditate", DisplayOptionTypeEnum.WARNING) {{
                                                                label = "explicabo";
                                                                name = "Rudy Spencer";
                                                                type = DisplayOptionTypeEnum.DEFAULT_;
                                                            }}),
                                                            add(new DisplayOption("tempora", "facilis", DisplayOptionTypeEnum.DANGER) {{
                                                                label = "perferendis";
                                                                name = "Mr. Nadine Hills";
                                                                type = DisplayOptionTypeEnum.WARNING;
                                                            }}),
                                                            add(new DisplayOption("provident", "necessitatibus", DisplayOptionTypeEnum.WARNING) {{
                                                                label = "labore";
                                                                name = "Andre Franey";
                                                                type = DisplayOptionTypeEnum.SUCCESS;
                                                            }}),
                                                            add(new DisplayOption("illum", "maiores", DisplayOptionTypeEnum.DANGER) {{
                                                                label = "officia";
                                                                name = "Raquel Wilderman";
                                                                type = DisplayOptionTypeEnum.WARNING;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new CardDisplayProperty(CardDisplayPropertyDataTypeEnum.STRING, "illum", "pariatur",                 new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                        add(new DisplayOption("ipsam", "voluptate", DisplayOptionTypeEnum.WARNING) {{
                                                                            label = "ea";
                                                                            name = "Mr. Harry Jaskolski";
                                                                            type = DisplayOptionTypeEnum.DANGER;
                                                                        }}),
                                                                        add(new DisplayOption("aut", "cumque", DisplayOptionTypeEnum.SUCCESS) {{
                                                                            label = "nam";
                                                                            name = "Meredith Hickle PhD";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                        add(new DisplayOption("eaque", "quis", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                            label = "hic";
                                                                            name = "Robin D'Amore";
                                                                            type = DisplayOptionTypeEnum.WARNING;
                                                                        }}),
                                                                        add(new DisplayOption("nostrum", "hic", DisplayOptionTypeEnum.INFO) {{
                                                                            label = "eos";
                                                                            name = "Jacqueline Schimmel";
                                                                            type = DisplayOptionTypeEnum.INFO;
                                                                        }}),
                                                                    }}) {{
                                                        dataType = CardDisplayPropertyDataTypeEnum.DATETIME;
                                                        label = "provident";
                                                        name = "Kirk Bartoletti";
                                                        options = new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                            add(new DisplayOption("iure", "doloribus", DisplayOptionTypeEnum.INFO) {{
                                                                label = "ad";
                                                                name = "Carmen Treutel";
                                                                type = DisplayOptionTypeEnum.DEFAULT_;
                                                            }}),
                                                            add(new DisplayOption("ullam", "expedita", DisplayOptionTypeEnum.WARNING) {{
                                                                label = "eius";
                                                                name = "Alfredo Prosacco Sr.";
                                                                type = DisplayOptionTypeEnum.INFO;
                                                            }}),
                                                            add(new DisplayOption("natus", "magni", DisplayOptionTypeEnum.DEFAULT_) {{
                                                                label = "repellat";
                                                                name = "Louis Turner Sr.";
                                                                type = DisplayOptionTypeEnum.WARNING;
                                                            }}),
                                                        }};
                                                    }}),
                                                }});;
                                fetch = new CardFetchBodyPatch(                new org.openapis.openapi.models.shared.CardObjectTypeBody[]{{
                                                    add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.COMPANIES,                 new String[]{{
                                                                        add("eaque"),
                                                                        add("occaecati"),
                                                                        add("rerum"),
                                                                    }}) {{
                                                        name = CardObjectTypeBodyNameEnum.COMPANIES;
                                                        propertiesToSend = new String[]{{
                                                            add("voluptatem"),
                                                            add("porro"),
                                                            add("consequuntur"),
                                                        }};
                                                    }}),
                                                    add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.COMPANIES,                 new String[]{{
                                                                        add("provident"),
                                                                        add("nobis"),
                                                                        add("libero"),
                                                                        add("delectus"),
                                                                    }}) {{
                                                        name = CardObjectTypeBodyNameEnum.CONTACTS;
                                                        propertiesToSend = new String[]{{
                                                            add("earum"),
                                                            add("modi"),
                                                            add("iste"),
                                                            add("dolorum"),
                                                        }};
                                                    }}),
                                                    add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.CONTACTS,                 new String[]{{
                                                                        add("ipsum"),
                                                                    }}) {{
                                                        name = CardObjectTypeBodyNameEnum.DEALS;
                                                        propertiesToSend = new String[]{{
                                                            add("aliquid"),
                                                            add("dolorem"),
                                                            add("dolorem"),
                                                        }};
                                                    }}),
                                                }}) {{
                                    targetUrl = "hic";
                                }};;
                                title = "Ms.";
                            }};, 739551, "voluptate");            

            PatchCrmV3ExtensionsCardsAppIdCardIdUpdateResponse res = sdk.cards.patchCrmV3ExtensionsCardsAppIdCardIdUpdate(req, new PatchCrmV3ExtensionsCardsAppIdCardIdUpdateSecurity("dignissimos") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.cardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCrmV3ExtensionsCardsAppIdCreate

Defines a new card that will become active on an account when this app is installed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCrmV3ExtensionsCardsAppIdCreateRequest;
import org.openapis.openapi.models.operations.PostCrmV3ExtensionsCardsAppIdCreateResponse;
import org.openapis.openapi.models.operations.PostCrmV3ExtensionsCardsAppIdCreateSecurity;
import org.openapis.openapi.models.shared.CardActions;
import org.openapis.openapi.models.shared.CardCreateRequest;
import org.openapis.openapi.models.shared.CardDisplayBody;
import org.openapis.openapi.models.shared.CardDisplayProperty;
import org.openapis.openapi.models.shared.CardDisplayPropertyDataTypeEnum;
import org.openapis.openapi.models.shared.CardFetchBody;
import org.openapis.openapi.models.shared.CardObjectTypeBody;
import org.openapis.openapi.models.shared.CardObjectTypeBodyNameEnum;
import org.openapis.openapi.models.shared.DisplayOption;
import org.openapis.openapi.models.shared.DisplayOptionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCrmV3ExtensionsCardsAppIdCreateRequest req = new PostCrmV3ExtensionsCardsAppIdCreateRequest(                new CardCreateRequest(                new CardActions(                new String[]{{
                                                                add("amet"),
                                                                add("dolorum"),
                                                                add("numquam"),
                                                                add("veritatis"),
                                                            }});,                 new CardDisplayBody(                new org.openapis.openapi.models.shared.CardDisplayProperty[]{{
                                                                add(new CardDisplayProperty(CardDisplayPropertyDataTypeEnum.DATE, "aspernatur", "perferendis",                 new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                                    add(new DisplayOption("minima", "repellendus", DisplayOptionTypeEnum.WARNING) {{
                                                                                        label = "optio";
                                                                                        name = "Tommy Turner";
                                                                                        type = DisplayOptionTypeEnum.WARNING;
                                                                                    }}),
                                                                                }}) {{
                                                                    dataType = CardDisplayPropertyDataTypeEnum.BOOLEAN_;
                                                                    label = "iure";
                                                                    name = "Bertha Thompson";
                                                                    options = new org.openapis.openapi.models.shared.DisplayOption[]{{
                                                                        add(new DisplayOption("iusto", "voluptate", DisplayOptionTypeEnum.DANGER) {{
                                                                            label = "natus";
                                                                            name = "Kay Bailey DDS";
                                                                            type = DisplayOptionTypeEnum.DANGER;
                                                                        }}),
                                                                        add(new DisplayOption("voluptate", "id", DisplayOptionTypeEnum.INFO) {{
                                                                            label = "deleniti";
                                                                            name = "Terence Rau";
                                                                            type = DisplayOptionTypeEnum.SUCCESS;
                                                                        }}),
                                                                    }};
                                                                }}),
                                                            }});,                 new CardFetchBody(                new org.openapis.openapi.models.shared.CardObjectTypeBody[]{{
                                                                add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.TICKETS,                 new String[]{{
                                                                                    add("dolorum"),
                                                                                }}) {{
                                                                    name = CardObjectTypeBodyNameEnum.CONTACTS;
                                                                    propertiesToSend = new String[]{{
                                                                        add("quaerat"),
                                                                        add("tempora"),
                                                                        add("vel"),
                                                                        add("quod"),
                                                                    }};
                                                                }}),
                                                                add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.CONTACTS,                 new String[]{{
                                                                                    add("tenetur"),
                                                                                    add("amet"),
                                                                                    add("tempore"),
                                                                                    add("accusamus"),
                                                                                }}) {{
                                                                    name = CardObjectTypeBodyNameEnum.TICKETS;
                                                                    propertiesToSend = new String[]{{
                                                                        add("harum"),
                                                                        add("iusto"),
                                                                    }};
                                                                }}),
                                                                add(new CardObjectTypeBody(CardObjectTypeBodyNameEnum.COMPANIES,                 new String[]{{
                                                                                    add("sit"),
                                                                                    add("expedita"),
                                                                                }}) {{
                                                                    name = CardObjectTypeBodyNameEnum.DEALS;
                                                                    propertiesToSend = new String[]{{
                                                                        add("dolorem"),
                                                                        add("sapiente"),
                                                                    }};
                                                                }}),
                                                            }}, "neque");, "sed");, 424685);            

            PostCrmV3ExtensionsCardsAppIdCreateResponse res = sdk.cards.postCrmV3ExtensionsCardsAppIdCreate(req, new PostCrmV3ExtensionsCardsAppIdCreateSecurity("libero") {{
                developerHapikey = "YOUR_API_KEY_HERE";
            }});

            if (res.cardResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
