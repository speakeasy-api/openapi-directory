# repertoire

### Available Operations

* [repertoire](#repertoire) - Gestion repertoire (modification)
* [repertoireCrea](#repertoirecrea) - Gestion repertoire (creation)

## repertoire

Ajoute ou supprime une liste de numéros à un répertoire existant.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepertoireResponse;
import org.openapis.openapi.models.shared.REPERTOIREmodifrequest;
import org.openapis.openapi.models.shared.REPERTOIREmodifrequestRepertoireEditEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.REPERTOIREmodifrequest req = new REPERTOIREmodifrequest("quo",                 new String[]{{
                                add("at"),
                            }}, REPERTOIREmodifrequestRepertoireEditEnum.DEL, "maiores") {{
                champ1 = new String[]{{
                    add("quod"),
                    add("quod"),
                }};
                champ10 = new String[]{{
                    add("totam"),
                    add("porro"),
                }};
                champ11 = new String[]{{
                    add("dicta"),
                    add("nam"),
                    add("officia"),
                }};
                champ12 = new String[]{{
                    add("fugit"),
                    add("deleniti"),
                    add("hic"),
                }};
                champ13 = new String[]{{
                    add("totam"),
                    add("beatae"),
                    add("commodi"),
                    add("molestiae"),
                }};
                champ14 = new String[]{{
                    add("qui"),
                    add("impedit"),
                }};
                champ15 = new String[]{{
                    add("esse"),
                    add("ipsum"),
                    add("excepturi"),
                }};
                champ16 = new String[]{{
                    add("perferendis"),
                }};
                champ17 = new String[]{{
                    add("natus"),
                    add("sed"),
                }};
                champ18 = new String[]{{
                    add("dolor"),
                    add("natus"),
                    add("laboriosam"),
                }};
                champ19 = new String[]{{
                    add("saepe"),
                    add("fuga"),
                    add("in"),
                    add("corporis"),
                }};
                champ2 = new String[]{{
                    add("iure"),
                    add("saepe"),
                    add("quidem"),
                }};
                champ20 = new String[]{{
                    add("ipsa"),
                }};
                champ21 = new String[]{{
                    add("est"),
                    add("mollitia"),
                    add("laborum"),
                    add("dolores"),
                }};
                champ22 = new String[]{{
                    add("corporis"),
                }};
                champ23 = new String[]{{
                    add("nobis"),
                }};
                champ24 = new String[]{{
                    add("omnis"),
                    add("nemo"),
                }};
                champ25 = new String[]{{
                    add("excepturi"),
                    add("accusantium"),
                }};
                champ26 = new String[]{{
                    add("culpa"),
                    add("doloribus"),
                }};
                champ27 = new String[]{{
                    add("architecto"),
                    add("mollitia"),
                    add("dolorem"),
                    add("culpa"),
                }};
                champ3 = new String[]{{
                    add("repellat"),
                }};
                champ4 = new String[]{{
                    add("occaecati"),
                    add("numquam"),
                    add("commodi"),
                }};
                champ5 = new String[]{{
                    add("molestiae"),
                    add("velit"),
                }};
                champ6 = new String[]{{
                    add("quia"),
                    add("quis"),
                    add("vitae"),
                }};
                champ7 = new String[]{{
                    add("animi"),
                    add("enim"),
                    add("odit"),
                }};
                champ8 = new String[]{{
                    add("sequi"),
                    add("tenetur"),
                    add("ipsam"),
                    add("id"),
                }};
                champ9 = new String[]{{
                    add("aut"),
                    add("quasi"),
                    add("error"),
                    add("temporibus"),
                }};
            }};            

            RepertoireResponse res = sdk.repertoire.repertoire(req);

            if (res.repertoirEmodifreponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## repertoireCrea

Cree un nouveau répertoire et retourne son identifiant. Cet identifiant pourra être utilisé pour ajouter ou supprimer des numéros via l'API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RepertoireCreaResponse;
import org.openapis.openapi.models.shared.REPERTOIREcreaterequest;
import org.openapis.openapi.models.shared.REPERTOIREcreaterequestRepertoireEditEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.REPERTOIREcreaterequest req = new REPERTOIREcreaterequest("laborum", REPERTOIREcreaterequestRepertoireEditEnum.CREATE, "quasi");            

            RepertoireCreaResponse res = sdk.repertoire.repertoireCrea(req);

            if (res.repertoirEcreatereponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
