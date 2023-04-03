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


### projects

* `recaptchaenterpriseProjectsAssessmentsAnnotate` - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
* `recaptchaenterpriseProjectsAssessmentsCreate` - Creates an Assessment of the likelihood an event is legitimate.
* `recaptchaenterpriseProjectsFirewallpoliciesCreate` - Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
* `recaptchaenterpriseProjectsFirewallpoliciesList` - Returns the list of all firewall policies that belong to a project.
* `recaptchaenterpriseProjectsKeysCreate` - Creates a new reCAPTCHA Enterprise key.
* `recaptchaenterpriseProjectsKeysDelete` - Deletes the specified key.
* `recaptchaenterpriseProjectsKeysGetMetrics` - Get some aggregated metrics for a Key. This data can be used to build dashboards.
* `recaptchaenterpriseProjectsKeysList` - Returns the list of all keys that belong to a project.
* `recaptchaenterpriseProjectsKeysMigrate` - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
* `recaptchaenterpriseProjectsKeysPatch` - Updates the specified key.
* `recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey` - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
* `recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch` - Search group memberships related to a given account.
* `recaptchaenterpriseProjectsRelatedaccountgroupsList` - List groups of related accounts.
* `recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList` - Get memberships in a group of related accounts.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
