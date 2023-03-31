# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierPathParams;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierRequest;
import org.openapis.openapi.models.operations.CreateAdditionalTaxIdentifierResponse;
import org.openapis.openapi.models.shared.AdditionalTaxIdentifierCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    bearer = new SchemeBearer() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAdditionalTaxIdentifierRequest req = new CreateAdditionalTaxIdentifierRequest() {{
                pathParams = new CreateAdditionalTaxIdentifierPathParams() {{
                    legalEntityId = 548814;
                }};
                request = new AdditionalTaxIdentifierCreate() {{
                    country = "Montenegro";
                    county = "distinctio";
                    identifier = "quibusdam";
                    scheme = "unde";
                    superscheme = "nulla";
                    thirdPartyPassword = "corrupti";
                    thirdPartyUsername = "illum";
                }};
            }};            

            CreateAdditionalTaxIdentifierResponse res = sdk.additionalTaxIdentifiers.createAdditionalTaxIdentifier(req);

            if (res.additionalTaxIdentifier.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### additionalTaxIdentifiers

* `createAdditionalTaxIdentifier` - Create a new AdditionalTaxIdentifier
* `deleteAdditionalTaxIdentifier` - Delete AdditionalTaxIdentifier
* `getAdditionalTaxIdentifier` - Get AdditionalTaxIdentifier
* `updateAdditionalTaxIdentifier` - Update AdditionalTaxIdentifier

### administrations

* `createAdministration` - Create a new Administration
* `deleteAdministration` - Delete Administration
* `getAdministration` - Get Administration
* `updateAdministration` - Update Administration

### discovery

* `discoveryExists` - Discover Network Participant Existence
* `discoveryIdentifiers` - Discover Country Identifiers ** EXPERIMENTAL
* `discoveryReceives` - Disover Network Participant

### documentSubmissions

* `createDocumentSubmission` - Submit a new document.
* `showDocumentSubmissionEvidence` - Get DocumentSubmission Evidence

### invoiceSubmissions

* `createInvoiceSubmission` - Submit a new invoice
* `preflightInvoiceRecipient` - DEPRECATED. Preflight an invoice recipient
* `showInvoiceSubmissionEvidence` - DEPRECATED. Get InvoiceSubmission Evidence

### legalEntities

* `createLegalEntity` - Create a new LegalEntity
* `deleteLegalEntity` - Delete LegalEntity
* `getLegalEntity` - Get LegalEntity
* `updateLegalEntity` - Update LegalEntity

### peppolIdentifiers

* `createPeppolIdentifier` - Create a new PeppolIdentifier
* `deletePeppolIdentifier` - Delete PeppolIdentifier

### purchaseInvoices

* `getInvoiceJson` - Get Purchase invoice data as JSON
* `getInvoiceUbl` - Get Purchase invoice data in a selectable format
* `getInvoiceUblVersioned` - Get Purchase invoice data as JSON with a Base64-encoded UBL string in the specified version

### receivedDocuments

* `createReceivedDocument` - Create a new received document
* `getReceivedDocument` - Get a new ReceivedDocument
* `receiveDocumenht` - Receive a new Document

### webhookInstances

* `deleteWebhookInstance` - DELETE a WebhookInstance
* `getWebhookInstances` - GET a WebhookInstance
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
