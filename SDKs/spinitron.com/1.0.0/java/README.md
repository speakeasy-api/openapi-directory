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
import org.openapis.openapi.models.operations.GetPersonasRequest;
import org.openapis.openapi.models.operations.GetPersonasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPersonasRequest req = new GetPersonasRequest() {{
                count = 548814;
                expand = new String[]{{
                    add("distinctio"),
                    add("quibusdam"),
                    add("unde"),
                }};
                fields = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                name = "deserunt";
                page = 384382;
            }}            

            GetPersonasResponse res = sdk.persona.getPersonas(req);

            if (res.getPersonas200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### persona

* `getPersonas` - Get Personas
* `getPersonasId` - Get Persona by id

### playlist

* `getPlaylists` - Returns playlists optionally filtered by {start} and/or {end} datetimes
* `getPlaylistsId` - Get a Playlist by id

### show

* `getShows` - Returns scheduled shows optionally filtered by {start} and/or {end} datetimes
* `getShowsId` - Get a Show by id

### spin

* `getSpins` - Returns spins optionally filtered by {start} and/or {end} datetimes
* `getSpinsId` - Get a Spin by id
* `postSpins` - Log a Spin
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
