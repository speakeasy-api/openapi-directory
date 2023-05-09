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
import org.openapis.openapi.models.operations.ArticleAddMeasureUnitResponse;
import org.openapis.openapi.models.shared.MeasureUnitDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new org.openapis.openapi.models.shared.MeasureUnitDTO[]{{
                add(new MeasureUnitDTO() {{
                    id = 715190;
                    name = "Stuart Stiedemann";
                    type = "vel";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 623564;
                    name = "Rick Kertzmann";
                    type = "ipsa";
                }}),
                add(new MeasureUnitDTO() {{
                    id = 963663;
                    name = "Laurie Kreiger";
                    type = "voluptatum";
                }}),
            }}            

            ArticleAddMeasureUnitResponse res = sdk.article.articleAddMeasureUnit(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [article](docs/article/README.md)

* [articleAddMeasureUnit](docs/article/README.md#articleaddmeasureunit) - Add measure unit
* [articleDelete](docs/article/README.md#articledelete) - Delete article from the system
            
* [articleGetAddons](docs/article/README.md#articlegetaddons)
* [articleGetMeasureUnits](docs/article/README.md#articlegetmeasureunits) - Get mesure units
* [articleGetRevenueAccounts](docs/article/README.md#articlegetrevenueaccounts) - Get Revenue Accounts 
* [articleGymArticleDetails](docs/article/README.md#articlegymarticledetails) - Get Gym specific properties for article
            
* [articlePost](docs/article/README.md#articlepost) - Add new article
            
* [articlePut](docs/article/README.md#articleput) - update existing article
            
* [articleSearch](docs/article/README.md#articlesearch) - Search articles
It will only return basic information of article
            
* [articleUpdateArticleGymDetails](docs/article/README.md#articleupdatearticlegymdetails) - Add article details that associate with a Gym
            
* [articleUpdateStatus](docs/article/README.md#articleupdatestatus) - Deactivate existing article 
* [articleGet](docs/article/README.md#articleget) - Get article details
This will return all properties related to article entity
            

### [auth](docs/auth/README.md)

* [authLogin](docs/auth/README.md#authlogin) - Authenticate and provide token for autherizations.
            

### [gym](docs/gym/README.md)

* [gymGet](docs/gym/README.md#gymget) - Get gym details
This will return all properties related to gym entity
            

### [membership](docs/membership/README.md)

* [membershipGet](docs/membership/README.md#membershipget) - Get all of the members details
This will return all properties related to member entity
            
* [membershipPost](docs/membership/README.md#membershippost) - Add new Member
            

### [package_](docs/package/README.md)

* [packageDelete](docs/package/README.md#packagedelete) - Delete existing package
            
* [packageGet](docs/package/README.md#packageget) - Get package details by packageId
            
* [packagePost](docs/package/README.md#packagepost) - Insert new package into the system
            
* [packagePut](docs/package/README.md#packageput) - Update existing package by its ID
            
* [packageSearch](docs/package/README.md#packagesearch) - Search packages
            
* [packageUpdateStatus](docs/package/README.md#packageupdatestatus) - Status update of existing package 

### [status](docs/status/README.md)

* [statusGet](docs/status/README.md#statusget) - Get the current status of message

### [test](docs/test/README.md)

* [testGet](docs/test/README.md#testget) - Get the all Test objects.
            

### [user](docs/user/README.md)

* [userGet](docs/user/README.md#userget) - Get all Users detail
This will return all properties related to User entity
            
* [userRegisterUser](docs/user/README.md#userregisteruser) - Register a new User
            
* [userUpdateUser](docs/user/README.md#userupdateuser) - Update an exsisting User
            
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
