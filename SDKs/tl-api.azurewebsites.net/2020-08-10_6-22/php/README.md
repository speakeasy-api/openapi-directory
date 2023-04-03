# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### article

* `articleAddMeasureUnit` - Add measure unit
* `articleDelete` - Delete article from the system
            
* `articleGetAddons`
* `articleGetMeasureUnits` - Get mesure units
* `articleGetRevenueAccounts` - Get Revenue Accounts 
* `articleGymArticleDetails` - Get Gym specific properties for article
            
* `articlePost` - Add new article
            
* `articlePut` - update existing article
            
* `articleSearch` - Search articles
It will only return basic information of article
            
* `articleUpdateArticleGymDetails` - Add article details that associate with a Gym
            
* `articleUpdateStatus` - Deactivate existing article 
* `articleGet` - Get article details
This will return all properties related to article entity
            

### auth

* `authLogin` - Authenticate and provide token for autherizations.
            

### gym

* `gymGet` - Get gym details
This will return all properties related to gym entity
            

### membership

* `membershipGet` - Get all of the members details
This will return all properties related to member entity
            
* `membershipPost` - Add new Member
            

### package

* `packageDelete` - Delete existing package
            
* `packageGet` - Get package details by packageId
            
* `packagePost` - Insert new package into the system
            
* `packagePut` - Update existing package by its ID
            
* `packageSearch` - Search packages
            
* `packageUpdateStatus` - Status update of existing package 

### status

* `statusGet` - Get the current status of message

### test

* `testGet` - Get the all Test objects.
            

### user

* `userGet` - Get all Users detail
This will return all properties related to User entity
            
* `userRegisterUser` - Register a new User
            
* `userUpdateUser` - Update an exsisting User
            
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
