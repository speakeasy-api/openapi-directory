# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/twilio.com/twilio_proxy_v1/1.43.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CreateMessageInteraction(ctx, operations.CreateMessageInteractionRequest{
        ParticipantSid: "corrupti",
        RequestBody: &operations.CreateMessageInteractionCreateMessageInteractionRequest{
            Body: sdk.String("provident"),
            MediaURL: []string{
                "https://outstanding-strait.name",
                "https://impressive-ox.name",
                "http://innocent-effect.org",
            },
        },
        ServiceSid: "ipsa",
        SessionSid: "delectus",
    }, operations.CreateMessageInteractionSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProxyV1ServiceSessionParticipantMessageInteraction != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateMessageInteraction](docs/sdk/README.md#createmessageinteraction) - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* [CreateParticipant](docs/sdk/README.md#createparticipant) - Add a new Participant to the Session
* [CreatePhoneNumber](docs/sdk/README.md#createphonenumber) - Add a Phone Number to a Service's Proxy Number Pool.
* [CreateService](docs/sdk/README.md#createservice) - Create a new Service for Twilio Proxy
* [CreateSession](docs/sdk/README.md#createsession) - Create a new Session
* [CreateShortCode](docs/sdk/README.md#createshortcode) - Add a Short Code to the Proxy Number Pool for the Service.
* [DeleteInteraction](docs/sdk/README.md#deleteinteraction) - Delete a specific Interaction.
* [DeleteParticipant](docs/sdk/README.md#deleteparticipant) - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* [DeletePhoneNumber](docs/sdk/README.md#deletephonenumber) - Delete a specific Phone Number from a Service.
* [DeleteService](docs/sdk/README.md#deleteservice) - Delete a specific Service.
* [DeleteSession](docs/sdk/README.md#deletesession) - Delete a specific Session.
* [DeleteShortCode](docs/sdk/README.md#deleteshortcode) - Delete a specific Short Code from a Service.
* [FetchInteraction](docs/sdk/README.md#fetchinteraction) - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* [FetchMessageInteraction](docs/sdk/README.md#fetchmessageinteraction)
* [FetchParticipant](docs/sdk/README.md#fetchparticipant) - Fetch a specific Participant.
* [FetchPhoneNumber](docs/sdk/README.md#fetchphonenumber) - Fetch a specific Phone Number.
* [FetchService](docs/sdk/README.md#fetchservice) - Fetch a specific Service.
* [FetchSession](docs/sdk/README.md#fetchsession) - Fetch a specific Session.
* [FetchShortCode](docs/sdk/README.md#fetchshortcode) - Fetch a specific Short Code.
* [ListInteraction](docs/sdk/README.md#listinteraction) - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* [ListMessageInteraction](docs/sdk/README.md#listmessageinteraction)
* [ListParticipant](docs/sdk/README.md#listparticipant) - Retrieve a list of all Participants in a Session.
* [ListPhoneNumber](docs/sdk/README.md#listphonenumber) - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* [ListService](docs/sdk/README.md#listservice) - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* [ListSession](docs/sdk/README.md#listsession) - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* [ListShortCode](docs/sdk/README.md#listshortcode) - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* [UpdatePhoneNumber](docs/sdk/README.md#updatephonenumber) - Update a specific Proxy Number.
* [UpdateService](docs/sdk/README.md#updateservice) - Update a specific Service.
* [UpdateSession](docs/sdk/README.md#updatesession) - Update a specific Session.
* [UpdateShortCode](docs/sdk/README.md#updateshortcode) - Update a specific Short Code.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
