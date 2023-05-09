# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/tl-api.azurewebsites.net/2020-08-10_6-22/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Bearer: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Article.ArticleAddMeasureUnit(ctx, []shared.MeasureUnitDTO{
        shared.MeasureUnitDTO{
            ID: sdk.Int(592845),
            Name: sdk.String("Ellis Mitchell"),
            Type: sdk.String("illum"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(423655),
            Name: sdk.String("Doug Hoppe"),
            Type: sdk.String("debitis"),
        },
        shared.MeasureUnitDTO{
            ID: sdk.Int(56713),
            Name: sdk.String("Ricky Hoppe"),
            Type: sdk.String("placeat"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DefaultResponseDTOOfStatusDTO != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Article](docs/article/README.md)

* [ArticleAddMeasureUnit](docs/article/README.md#articleaddmeasureunit) - Add measure unit
* [ArticleDelete](docs/article/README.md#articledelete) - Delete article from the system
            
* [ArticleGetAddons](docs/article/README.md#articlegetaddons)
* [ArticleGetMeasureUnits](docs/article/README.md#articlegetmeasureunits) - Get mesure units
* [ArticleGetRevenueAccounts](docs/article/README.md#articlegetrevenueaccounts) - Get Revenue Accounts 
* [ArticleGymArticleDetails](docs/article/README.md#articlegymarticledetails) - Get Gym specific properties for article
            
* [ArticlePost](docs/article/README.md#articlepost) - Add new article
            
* [ArticlePut](docs/article/README.md#articleput) - update existing article
            
* [ArticleSearch](docs/article/README.md#articlesearch) - Search articles
It will only return basic information of article
            
* [ArticleUpdateArticleGymDetails](docs/article/README.md#articleupdatearticlegymdetails) - Add article details that associate with a Gym
            
* [ArticleUpdateStatus](docs/article/README.md#articleupdatestatus) - Deactivate existing article 
* [ArticleGet](docs/article/README.md#articleget) - Get article details
This will return all properties related to article entity
            

### [Auth](docs/auth/README.md)

* [AuthLogin](docs/auth/README.md#authlogin) - Authenticate and provide token for autherizations.
            

### [Gym](docs/gym/README.md)

* [GymGet](docs/gym/README.md#gymget) - Get gym details
This will return all properties related to gym entity
            

### [Membership](docs/membership/README.md)

* [MembershipGet](docs/membership/README.md#membershipget) - Get all of the members details
This will return all properties related to member entity
            
* [MembershipPost](docs/membership/README.md#membershippost) - Add new Member
            

### [Package](docs/package/README.md)

* [PackageDelete](docs/package/README.md#packagedelete) - Delete existing package
            
* [PackageGet](docs/package/README.md#packageget) - Get package details by packageId
            
* [PackagePost](docs/package/README.md#packagepost) - Insert new package into the system
            
* [PackagePut](docs/package/README.md#packageput) - Update existing package by its ID
            
* [PackageSearch](docs/package/README.md#packagesearch) - Search packages
            
* [PackageUpdateStatus](docs/package/README.md#packageupdatestatus) - Status update of existing package 

### [Status](docs/status/README.md)

* [StatusGet](docs/status/README.md#statusget) - Get the current status of message

### [Test](docs/test/README.md)

* [TestGet](docs/test/README.md#testget) - Get the all Test objects.
            

### [User](docs/user/README.md)

* [UserGet](docs/user/README.md#userget) - Get all Users detail
This will return all properties related to User entity
            
* [UserRegisterUser](docs/user/README.md#userregisteruser) - Register a new User
            
* [UserUpdateUser](docs/user/README.md#userupdateuser) - Update an exsisting User
            
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
