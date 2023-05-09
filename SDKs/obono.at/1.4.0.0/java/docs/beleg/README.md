# beleg

## Overview

resources concerning a "Beleg"

### Available Operations

* [addBeleg](#addbeleg) - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
* [createAbschluss](#createabschluss) - Generates an `Abschlussbeleg`.
* [getBeleg](#getbeleg) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
* [getBelege](#getbelege) - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
* [getBelegeBelegUuid](#getbelegebeleguuid) - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

## addBeleg

Signs a receipt and stores it in the "Datenerfassungsprotokoll".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddBelegRequest;
import org.openapis.openapi.models.operations.AddBelegResponse;
import org.openapis.openapi.models.shared.Belegdaten;
import org.openapis.openapi.models.shared.BelegdatenUnternehmenIDTypEnum;
import org.openapis.openapi.models.shared.Posten;
import org.openapis.openapi.models.shared.PostenSatzEnum;
import org.openapis.openapi.models.shared.Rabatt;
import org.openapis.openapi.models.shared.RabattSatzEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Zahlung;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddBelegRequest req = new AddBelegRequest(                new Belegdaten() {{
                                externerBelegBelegkreis = "nulla";
                                externerBelegBezeichnung = "corrupti";
                                externerBelegReferenz = "illum";
                                kunde = "vel";
                                notizen = new String[]{{
                                    add("deserunt"),
                                    add("suscipit"),
                                    add("iure"),
                                }};
                                posten = new org.openapis.openapi.models.shared.Posten[]{{
                                    add(new Posten("voluptatum", 479977L, 568045L, 392785L, PostenSatzEnum.NULL_) {{
                                        bezeichnung = "debitis";
                                        bruttoBetrag = 56713L;
                                        externerBelegBelegkreis = "delectus";
                                        externerBelegBezeichnung = "tempora";
                                        externerBelegReferenz = "suscipit";
                                        menge = 477665L;
                                        nettoBetrag = 791725L;
                                        satz = PostenSatzEnum.NULL_;
                                    }}),
                                    add(new Posten("sapiente", 778157L, 140350L, 870013L, PostenSatzEnum.NULL_) {{
                                        bezeichnung = "temporibus";
                                        bruttoBetrag = 71036L;
                                        externerBelegBelegkreis = "quis";
                                        externerBelegBezeichnung = "veritatis";
                                        externerBelegReferenz = "deserunt";
                                        menge = 20218L;
                                        nettoBetrag = 368241L;
                                        satz = PostenSatzEnum.NULL_;
                                    }}),
                                }};
                                rabatte = new org.openapis.openapi.models.shared.Rabatt[]{{
                                    add(new Rabatt(520478L, 780529L, "dolorum") {{
                                        betragBrutto = 473608L;
                                        betragNetto = 799159L;
                                        bezeichnung = "quod";
                                        satz = RabattSatzEnum.ERMAESSIGT2;
                                    }}),
                                    add(new Rabatt(143353L, 537373L, "hic") {{
                                        betragBrutto = 118274L;
                                        betragNetto = 720633L;
                                        bezeichnung = "officia";
                                        satz = RabattSatzEnum.ERMAESSIGT2;
                                    }}),
                                    add(new Rabatt(473600L, 264555L, "qui") {{
                                        betragBrutto = 758616L;
                                        betragNetto = 521848L;
                                        bezeichnung = "beatae";
                                        satz = RabattSatzEnum.ERMAESSIGT2;
                                    }}),
                                    add(new Rabatt(568434L, 135218L, "perferendis") {{
                                        betragBrutto = 774234L;
                                        betragNetto = 736918L;
                                        bezeichnung = "esse";
                                        satz = RabattSatzEnum.ERMAESSIGT1;
                                    }}),
                                }};
                                storno = false;
                                stornoBelegUUID = "5929396f-ea75-496e-b10f-aaa2352c5955";
                                stornoText = "excepturi";
                                training = false;
                                unternehmenAdresse1 = "accusantium";
                                unternehmenAdresse2 = "iure";
                                unternehmenFusszeile = "culpa";
                                unternehmenID = "doloribus";
                                unternehmenIDTyp = BelegdatenUnternehmenIDTypEnum.GLN;
                                unternehmenKopfzeile = "architecto";
                                unternehmenName = "mollitia";
                                unternehmenOrt = "dolorem";
                                unternehmenPLZ = "culpa";
                                zahlungen = new org.openapis.openapi.models.shared.Zahlung[]{{
                                    add(new Zahlung(253291L, "commodi") {{
                                        betrag = 995300L;
                                        bezeichnung = "mollitia";
                                        referenz = "occaecati";
                                    }}),
                                }};
                            }};, "quam", "molestiae");            

            AddBelegResponse res = sdk.beleg.addBeleg(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAbschluss

Generates an `Abschlussbeleg`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAbschlussRequest;
import org.openapis.openapi.models.operations.CreateAbschlussResponse;
import org.openapis.openapi.models.shared.Abschlussbelegdaten;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAbschlussRequest req = new CreateAbschlussRequest(                new Abschlussbelegdaten("error", "quia");, "quis");            

            CreateAbschlussResponse res = sdk.beleg.createAbschluss(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBeleg

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBelegRequest;
import org.openapis.openapi.models.operations.GetBelegResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBelegRequest req = new GetBelegRequest("laborum", "animi");            

            GetBelegResponse res = sdk.beleg.getBeleg(req);

            if (res.beleg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBelege

Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBelegeFormatEnum;
import org.openapis.openapi.models.operations.GetBelegeOrderEnum;
import org.openapis.openapi.models.operations.GetBelegeRequest;
import org.openapis.openapi.models.operations.GetBelegeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBelegeRequest req = new GetBelegeRequest(GetBelegeFormatEnum.EXPORT, "quo") {{
                after = "sequi";
                before = "tenetur";
                gte = 368725L;
                limit = 662527L;
                lte = 820994L;
                offset = 13571L;
                order = GetBelegeOrderEnum.ASC;
            }};            

            GetBelegeResponse res = sdk.beleg.getBelege(req);

            if (res.belege != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBelegeBelegUuid

Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBelegeBelegUuidRequest;
import org.openapis.openapi.models.operations.GetBelegeBelegUuidResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    jwt = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBelegeBelegUuidRequest req = new GetBelegeBelegUuidRequest("temporibus");            

            GetBelegeBelegUuidResponse res = sdk.beleg.getBelegeBelegUuid(req);

            if (res.beleg != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
