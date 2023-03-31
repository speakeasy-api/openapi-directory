# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/tl-api.azurewebsites.net/2020-08-10_6-22/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        bearer="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
)


req = [
    shared.MeasureUnitDTO(
        id=592845,
        name="distinctio",
        type="quibusdam",
    ),
    shared.MeasureUnitDTO(
        id=602763,
        name="nulla",
        type="corrupti",
    ),
    shared.MeasureUnitDTO(
        id=847252,
        name="vel",
        type="error",
    ),
]
    
res = s.article.article_add_measure_unit(req)

if res.default_response_dto_of_status_dto is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### article

* `article_add_measure_unit` - Add measure unit
* `article_delete` - Delete article from the system
            
* `article_get_addons`
* `article_get_measure_units` - Get mesure units
* `article_get_revenue_accounts` - Get Revenue Accounts 
* `article_gym_article_details` - Get Gym specific properties for article
            
* `article_post` - Add new article
            
* `article_put` - update existing article
            
* `article_search` - Search articles
It will only return basic information of article
            
* `article_update_article_gym_details` - Add article details that associate with a Gym
            
* `article_update_status` - Deactivate existing article 
* `article_get` - Get article details
This will return all properties related to article entity
            

### auth

* `auth_login` - Authenticate and provide token for autherizations.
            

### gym

* `gym_get` - Get gym details
This will return all properties related to gym entity
            

### membership

* `membership_get` - Get all of the members details
This will return all properties related to member entity
            
* `membership_post` - Add new Member
            

### package

* `package_delete` - Delete existing package
            
* `package_get` - Get package details by packageId
            
* `package_post` - Insert new package into the system
            
* `package_put` - Update existing package by its ID
            
* `package_search` - Search packages
            
* `package_update_status` - Status update of existing package 

### status

* `status_get` - Get the current status of message

### test

* `test_get` - Get the all Test objects.
            

### user

* `user_get` - Get all Users detail
This will return all properties related to User entity
            
* `user_register_user` - Register a new User
            
* `user_update_user` - Update an exsisting User
            
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
