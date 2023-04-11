# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/isendpro.com/1.1.1/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/isendpro.com/1.1.1/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  shared.ShortlinkRequest,
  AddShortlinkResponse
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: shared.ShortlinkRequest = {
  keyid: "corrupti",
  shortlink: "provident",
};

sdk.addShortlink.addShortlink(req).then((res: AddShortlinkResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### addShortlink

* `addShortlink` - add a shortlink

### addSubaccount

* `subaccountAdd` - Ajoute un sous compte

### campagne

* `getCampagne` - Retourne les SMS envoyés sur une période donnée

### comptage

* `comptage` - Compter le nombre de caractère 

### credit

* `getCredit` - Interrogation credit

### delListeNoire

* `delListeNoire` - Ajoute un numero en liste noire

### editSubaccount

* `subaccountEdit` - Edit a subaccount

### getListeNoire

* `getListeNoire` - Retourne le liste noire

### hlr

* `getHlr` - Vérifier la validité d'un numéro

### repertoire

* `repertoire` - Gestion repertoire (modification)
* `repertoireCrea` - Gestion repertoire (creation)

### setListeNoire

* `setListeNoire` - Ajoute un numero en liste noire

### sms

* `sendSms` - Envoyer un sms
* `sendSmsMulti` - Envoyer des SMS
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

