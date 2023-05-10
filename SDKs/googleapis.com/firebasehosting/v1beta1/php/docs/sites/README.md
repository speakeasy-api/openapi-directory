# sites

### Available Operations

* [firebasehostingSitesChannelsCreate](#firebasehostingsiteschannelscreate) - Creates a new channel in the specified site.
* [firebasehostingSitesChannelsList](#firebasehostingsiteschannelslist) - Lists the channels for the specified site. All sites have a default `live` channel.
* [firebasehostingSitesDomainsCreate](#firebasehostingsitesdomainscreate) - Creates a domain mapping on the specified site.
* [firebasehostingSitesDomainsList](#firebasehostingsitesdomainslist) - Lists the domains for the specified site.
* [firebasehostingSitesDomainsUpdate](#firebasehostingsitesdomainsupdate) - Updates the specified domain mapping, creating the mapping as if it does not exist.
* [firebasehostingSitesReleasesCreate](#firebasehostingsitesreleasescreate) - Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
* [firebasehostingSitesReleasesList](#firebasehostingsitesreleaseslist) - Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsClone](#firebasehostingsitesversionsclone) - Creates a new version on the specified target site using the content of the specified version.
* [firebasehostingSitesVersionsCreate](#firebasehostingsitesversionscreate) - Creates a new version for the specified site.
* [firebasehostingSitesVersionsDelete](#firebasehostingsitesversionsdelete) - Deletes the specified version.
* [firebasehostingSitesVersionsFilesList](#firebasehostingsitesversionsfileslist) - Lists the remaining files to be uploaded for the specified version.
* [firebasehostingSitesVersionsGet](#firebasehostingsitesversionsget) - Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
* [firebasehostingSitesVersionsList](#firebasehostingsitesversionslist) - Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
* [firebasehostingSitesVersionsPatch](#firebasehostingsitesversionspatch) -  Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
* [firebasehostingSitesVersionsPopulateFiles](#firebasehostingsitesversionspopulatefiles) -  Adds content files to the specified version. Each file must be under 2 GB.

## firebasehostingSitesChannelsCreate

Creates a new channel in the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ChannelInput;
use \OpenAPI\OpenAPI\Models\Shared\Release;
use \OpenAPI\OpenAPI\Models\Shared\ActingUser;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigAppAssociationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\I18nConfig;
use \OpenAPI\OpenAPI\Models\Shared\Redirect;
use \OpenAPI\OpenAPI\Models\Shared\Rewrite;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRewrite;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigTrailingSlashBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->channelInput = new ChannelInput();
    $request->channelInput->expireTime = 'hic';
    $request->channelInput->labels = [
        'totam' => 'beatae',
        'commodi' => 'molestiae',
        'modi' => 'qui',
        'impedit' => 'cum',
    ];
    $request->channelInput->name = 'Edna Mante II';
    $request->channelInput->release = new Release();
    $request->channelInput->release->message = 'natus';
    $request->channelInput->release->name = 'Sheryl Fadel';
    $request->channelInput->release->releaseTime = 'hic';
    $request->channelInput->release->releaseUser = new ActingUser();
    $request->channelInput->release->releaseUser->email = 'Marisa_Kirlin@hotmail.com';
    $request->channelInput->release->releaseUser->imageUrl = 'iure';
    $request->channelInput->release->type = ReleaseTypeEnum::SITE_DISABLE;
    $request->channelInput->release->version = new Version();
    $request->channelInput->release->version->config = new ServingConfig();
    $request->channelInput->release->version->config->appAssociation = ServingConfigAppAssociationEnum::NONE;
    $request->channelInput->release->version->config->cleanUrls = false;
    $request->channelInput->release->version->config->headers = [
        new Header(),
    ];
    $request->channelInput->release->version->config->i18n = new I18nConfig();
    $request->channelInput->release->version->config->i18n->root = 'ipsa';
    $request->channelInput->release->version->config->redirects = [
        new Redirect(),
        new Redirect(),
        new Redirect(),
        new Redirect(),
    ];
    $request->channelInput->release->version->config->rewrites = [
        new Rewrite(),
        new Rewrite(),
        new Rewrite(),
    ];
    $request->channelInput->release->version->config->trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum::ADD;
    $request->channelInput->release->version->createTime = 'laborum';
    $request->channelInput->release->version->createUser = new ActingUser();
    $request->channelInput->release->version->createUser->email = 'Corrine75@gmail.com';
    $request->channelInput->release->version->createUser->imageUrl = 'enim';
    $request->channelInput->release->version->deleteTime = 'omnis';
    $request->channelInput->release->version->deleteUser = new ActingUser();
    $request->channelInput->release->version->deleteUser->email = 'Era43@yahoo.com';
    $request->channelInput->release->version->deleteUser->imageUrl = 'culpa';
    $request->channelInput->release->version->fileCount = 'doloribus';
    $request->channelInput->release->version->finalizeTime = 'sapiente';
    $request->channelInput->release->version->finalizeUser = new ActingUser();
    $request->channelInput->release->version->finalizeUser->email = 'Macy.Durgan@gmail.com';
    $request->channelInput->release->version->finalizeUser->imageUrl = 'repellat';
    $request->channelInput->release->version->labels = [
        'occaecati' => 'numquam',
        'commodi' => 'quam',
        'molestiae' => 'velit',
    ];
    $request->channelInput->release->version->name = 'Miss Eugene Hauck';
    $request->channelInput->release->version->status = VersionStatusEnum::FINALIZED;
    $request->channelInput->release->version->versionBytes = 'odit';
    $request->channelInput->retainedReleaseCount = 778346;
    $request->channelInput->ttl = 'sequi';
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'id';
    $request->channelId = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->oauthToken = 'error';
    $request->parent = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'laborum';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new FirebasehostingSitesChannelsCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesChannelsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesChannelsCreate($request, $requestSecurity);

    if ($response->channel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesChannelsList

Lists the channels for the specified site. All sites have a default `live` channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesChannelsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vero';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'voluptatibus';
    $request->key = 'ipsa';
    $request->oauthToken = 'omnis';
    $request->pageSize = 451159;
    $request->pageToken = 'cum';
    $request->parent = 'perferendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'reprehenderit';
    $request->uploadProtocol = 'ut';

    $requestSecurity = new FirebasehostingSitesChannelsListSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesChannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesChannelsList($request, $requestSecurity);

    if ($response->listChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesDomainsCreate

Creates a domain mapping on the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Domain;
use \OpenAPI\OpenAPI\Models\Shared\DomainRedirect;
use \OpenAPI\OpenAPI\Models\Shared\DomainRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioning;
use \OpenAPI\OpenAPI\Models\Shared\CertDnsChallenge;
use \OpenAPI\OpenAPI\Models\Shared\CertHttpChallenge;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioningCertStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioningDnsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesDomainsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domain = new Domain();
    $request->domain->domainName = 'dicta';
    $request->domain->domainRedirect = new DomainRedirect();
    $request->domain->domainRedirect->domainName = 'corporis';
    $request->domain->domainRedirect->type = DomainRedirectTypeEnum::REDIRECT_TYPE_UNSPECIFIED;
    $request->domain->provisioning = new DomainProvisioning();
    $request->domain->provisioning->certChallengeDiscoveredTxt = [
        'dicta',
        'harum',
    ];
    $request->domain->provisioning->certChallengeDns = new CertDnsChallenge();
    $request->domain->provisioning->certChallengeDns->domainName = 'enim';
    $request->domain->provisioning->certChallengeDns->token = 'accusamus';
    $request->domain->provisioning->certChallengeHttp = new CertHttpChallenge();
    $request->domain->provisioning->certChallengeHttp->path = 'commodi';
    $request->domain->provisioning->certChallengeHttp->token = 'repudiandae';
    $request->domain->provisioning->certStatus = DomainProvisioningCertStatusEnum::CERT_STATUS_UNSPECIFIED;
    $request->domain->provisioning->discoveredIps = [
        'quidem',
    ];
    $request->domain->provisioning->dnsFetchTime = 'molestias';
    $request->domain->provisioning->dnsStatus = DomainProvisioningDnsStatusEnum::DNS_PARTIAL_MATCH;
    $request->domain->provisioning->expectedIps = [
        'modi',
        'praesentium',
        'rem',
        'voluptates',
    ];
    $request->domain->site = 'quasi';
    $request->domain->status = DomainStatusEnum::DOMAIN_VERIFICATION_LOST;
    $request->domain->updateTime = 'sint';
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'enim';
    $request->key = 'consequatur';
    $request->oauthToken = 'est';
    $request->parent = 'quibusdam';
    $request->prettyPrint = false;
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';

    $requestSecurity = new FirebasehostingSitesDomainsCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesDomainsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesDomainsCreate($request, $requestSecurity);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesDomainsList

Lists the domains for the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesDomainsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'qui';
    $request->fields = 'aliquid';
    $request->key = 'cupiditate';
    $request->oauthToken = 'quos';
    $request->pageSize = 20107;
    $request->pageToken = 'magni';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new FirebasehostingSitesDomainsListSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesDomainsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesDomainsList($request, $requestSecurity);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesDomainsUpdate

Updates the specified domain mapping, creating the mapping as if it does not exist.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Domain;
use \OpenAPI\OpenAPI\Models\Shared\DomainRedirect;
use \OpenAPI\OpenAPI\Models\Shared\DomainRedirectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioning;
use \OpenAPI\OpenAPI\Models\Shared\CertDnsChallenge;
use \OpenAPI\OpenAPI\Models\Shared\CertHttpChallenge;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioningCertStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainProvisioningDnsStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DomainStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesDomainsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesDomainsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->domain = new Domain();
    $request->domain->domainName = 'excepturi';
    $request->domain->domainRedirect = new DomainRedirect();
    $request->domain->domainRedirect->domainName = 'tempora';
    $request->domain->domainRedirect->type = DomainRedirectTypeEnum::MOVED_PERMANENTLY;
    $request->domain->provisioning = new DomainProvisioning();
    $request->domain->provisioning->certChallengeDiscoveredTxt = [
        'labore',
        'delectus',
        'eum',
    ];
    $request->domain->provisioning->certChallengeDns = new CertDnsChallenge();
    $request->domain->provisioning->certChallengeDns->domainName = 'non';
    $request->domain->provisioning->certChallengeDns->token = 'eligendi';
    $request->domain->provisioning->certChallengeHttp = new CertHttpChallenge();
    $request->domain->provisioning->certChallengeHttp->path = 'sint';
    $request->domain->provisioning->certChallengeHttp->token = 'aliquid';
    $request->domain->provisioning->certStatus = DomainProvisioningCertStatusEnum::CERT_PROPAGATING;
    $request->domain->provisioning->discoveredIps = [
        'sint',
        'officia',
        'dolor',
        'debitis',
    ];
    $request->domain->provisioning->dnsFetchTime = 'a';
    $request->domain->provisioning->dnsStatus = DomainProvisioningDnsStatusEnum::DNS_MATCH;
    $request->domain->provisioning->expectedIps = [
        'in',
        'illum',
    ];
    $request->domain->site = 'maiores';
    $request->domain->status = DomainStatusEnum::DOMAIN_VERIFICATION_REQUIRED;
    $request->domain->updateTime = 'dicta';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'ea';
    $request->key = 'aliquid';
    $request->name = 'Tomas Friesen';
    $request->oauthToken = 'accusamus';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new FirebasehostingSitesDomainsUpdateSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesDomainsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesDomainsUpdate($request, $requestSecurity);

    if ($response->domain !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesReleasesCreate

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Release;
use \OpenAPI\OpenAPI\Models\Shared\ActingUser;
use \OpenAPI\OpenAPI\Models\Shared\ReleaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigAppAssociationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\I18nConfig;
use \OpenAPI\OpenAPI\Models\Shared\Redirect;
use \OpenAPI\OpenAPI\Models\Shared\Rewrite;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRewrite;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigTrailingSlashBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\VersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesReleasesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->release = new Release();
    $request->release->message = 'id';
    $request->release->name = 'Jaime Will';
    $request->release->releaseTime = 'nisi';
    $request->release->releaseUser = new ActingUser();
    $request->release->releaseUser->email = 'Libby.Moen@yahoo.com';
    $request->release->releaseUser->imageUrl = 'nihil';
    $request->release->type = ReleaseTypeEnum::DEPLOY;
    $request->release->version = new Version();
    $request->release->version->config = new ServingConfig();
    $request->release->version->config->appAssociation = ServingConfigAppAssociationEnum::NONE;
    $request->release->version->config->cleanUrls = false;
    $request->release->version->config->headers = [
        new Header(),
        new Header(),
        new Header(),
    ];
    $request->release->version->config->i18n = new I18nConfig();
    $request->release->version->config->i18n->root = 'labore';
    $request->release->version->config->redirects = [
        new Redirect(),
        new Redirect(),
    ];
    $request->release->version->config->rewrites = [
        new Rewrite(),
        new Rewrite(),
    ];
    $request->release->version->config->trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum::ADD;
    $request->release->version->createTime = 'nobis';
    $request->release->version->createUser = new ActingUser();
    $request->release->version->createUser->email = 'Shaina29@yahoo.com';
    $request->release->version->createUser->imageUrl = 'et';
    $request->release->version->deleteTime = 'excepturi';
    $request->release->version->deleteUser = new ActingUser();
    $request->release->version->deleteUser->email = 'Landen.Lueilwitz@yahoo.com';
    $request->release->version->deleteUser->imageUrl = 'mollitia';
    $request->release->version->fileCount = 'reiciendis';
    $request->release->version->finalizeTime = 'mollitia';
    $request->release->version->finalizeUser = new ActingUser();
    $request->release->version->finalizeUser->email = 'Holden.Ernser36@gmail.com';
    $request->release->version->finalizeUser->imageUrl = 'quasi';
    $request->release->version->labels = [
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->release->version->name = 'Mr. Andres King';
    $request->release->version->status = VersionStatusEnum::FINALIZED;
    $request->release->version->versionBytes = 'expedita';
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'sed';
    $request->key = 'saepe';
    $request->oauthToken = 'pariatur';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequuntur';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'natus';
    $request->versionName = 'magni';

    $requestSecurity = new FirebasehostingSitesReleasesCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesReleasesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesReleasesCreate($request, $requestSecurity);

    if ($response->release !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesReleasesList

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesReleasesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesReleasesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'pariatur';
    $request->fields = 'maxime';
    $request->key = 'ea';
    $request->oauthToken = 'excepturi';
    $request->pageSize = 139972;
    $request->pageToken = 'ea';
    $request->parent = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'ab';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new FirebasehostingSitesReleasesListSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesReleasesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesReleasesList($request, $requestSecurity);

    if ($response->listReleasesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsClone

Creates a new version on the specified target site using the content of the specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCloneRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CloneVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\PathFilter;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCloneSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCloneSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCloneSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsCloneRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->cloneVersionRequest = new CloneVersionRequest();
    $request->cloneVersionRequest->exclude = new PathFilter();
    $request->cloneVersionRequest->exclude->regexes = [
        'autem',
        'nam',
    ];
    $request->cloneVersionRequest->finalize = false;
    $request->cloneVersionRequest->include = new PathFilter();
    $request->cloneVersionRequest->include->regexes = [
        'pariatur',
    ];
    $request->cloneVersionRequest->sourceVersion = 'nemo';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->oauthToken = 'cumque';
    $request->parent = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new FirebasehostingSitesVersionsCloneSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsCloneSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsClone($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsCreate

Creates a new version for the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigAppAssociationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\I18nConfig;
use \OpenAPI\OpenAPI\Models\Shared\Redirect;
use \OpenAPI\OpenAPI\Models\Shared\Rewrite;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRewrite;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigTrailingSlashBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActingUser;
use \OpenAPI\OpenAPI\Models\Shared\VersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->version = new Version();
    $request->version->config = new ServingConfig();
    $request->version->config->appAssociation = ServingConfigAppAssociationEnum::AUTO;
    $request->version->config->cleanUrls = false;
    $request->version->config->headers = [
        new Header(),
        new Header(),
        new Header(),
    ];
    $request->version->config->i18n = new I18nConfig();
    $request->version->config->i18n->root = 'dignissimos';
    $request->version->config->redirects = [
        new Redirect(),
    ];
    $request->version->config->rewrites = [
        new Rewrite(),
        new Rewrite(),
    ];
    $request->version->config->trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum::TRAILING_SLASH_BEHAVIOR_UNSPECIFIED;
    $request->version->createTime = 'eos';
    $request->version->createUser = new ActingUser();
    $request->version->createUser->email = 'Cecilia.Schimmel@gmail.com';
    $request->version->createUser->imageUrl = 'vero';
    $request->version->deleteTime = 'nostrum';
    $request->version->deleteUser = new ActingUser();
    $request->version->deleteUser->email = 'Timothy_Mohr3@hotmail.com';
    $request->version->deleteUser->imageUrl = 'porro';
    $request->version->fileCount = 'consequuntur';
    $request->version->finalizeTime = 'blanditiis';
    $request->version->finalizeUser = new ActingUser();
    $request->version->finalizeUser->email = 'Amber.Mayert99@yahoo.com';
    $request->version->finalizeUser->imageUrl = 'earum';
    $request->version->labels = [
        'iste' => 'dolorum',
        'deleniti' => 'pariatur',
    ];
    $request->version->name = 'Loren Renner';
    $request->version->status = VersionStatusEnum::DELETED;
    $request->version->versionBytes = 'aliquid';
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'qui';
    $request->key = 'ipsum';
    $request->oauthToken = 'hic';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->sizeBytes = 'voluptate';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'reiciendis';
    $request->versionId = 'amet';

    $requestSecurity = new FirebasehostingSitesVersionsCreateSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsCreate($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsDelete

Deletes the specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'ipsa';
    $request->key = 'iure';
    $request->name = 'Bertha Thompson';
    $request->oauthToken = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'atque';

    $requestSecurity = new FirebasehostingSitesVersionsDeleteSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsFilesList

Lists the remaining files to be uploaded for the specified version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsFilesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsFilesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'fugiat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'soluta';
    $request->fields = 'dolorum';
    $request->key = 'iusto';
    $request->oauthToken = 'voluptate';
    $request->pageSize = 677082;
    $request->pageToken = 'deleniti';
    $request->parent = 'omnis';
    $request->prettyPrint = false;
    $request->quotaUser = 'necessitatibus';
    $request->status = FirebasehostingSitesVersionsFilesListStatusEnum::ACTIVE;
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new FirebasehostingSitesVersionsFilesListSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsFilesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsFilesList($request, $requestSecurity);

    if ($response->listVersionFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsGet

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'eius';
    $request->key = 'aspernatur';
    $request->name = 'Wendy Rosenbaum';
    $request->oauthToken = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'suscipit';
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new FirebasehostingSitesVersionsGetSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsGet($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsList

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'similique';
    $request->fields = 'alias';
    $request->filter = 'at';
    $request->key = 'quaerat';
    $request->oauthToken = 'tempora';
    $request->pageSize = 425451;
    $request->pageToken = 'quod';
    $request->parent = 'officiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'a';

    $requestSecurity = new FirebasehostingSitesVersionsListSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsList($request, $requestSecurity);

    if ($response->listVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsPatch

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Version;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfig;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigAppAssociationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\I18nConfig;
use \OpenAPI\OpenAPI\Models\Shared\Redirect;
use \OpenAPI\OpenAPI\Models\Shared\Rewrite;
use \OpenAPI\OpenAPI\Models\Shared\CloudRunRewrite;
use \OpenAPI\OpenAPI\Models\Shared\ServingConfigTrailingSlashBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActingUser;
use \OpenAPI\OpenAPI\Models\Shared\VersionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->version = new Version();
    $request->version->config = new ServingConfig();
    $request->version->config->appAssociation = ServingConfigAppAssociationEnum::NONE;
    $request->version->config->cleanUrls = false;
    $request->version->config->headers = [
        new Header(),
        new Header(),
    ];
    $request->version->config->i18n = new I18nConfig();
    $request->version->config->i18n->root = 'ipsum';
    $request->version->config->redirects = [
        new Redirect(),
        new Redirect(),
        new Redirect(),
        new Redirect(),
    ];
    $request->version->config->rewrites = [
        new Rewrite(),
        new Rewrite(),
        new Rewrite(),
        new Rewrite(),
    ];
    $request->version->config->trailingSlashBehavior = ServingConfigTrailingSlashBehaviorEnum::TRAILING_SLASH_BEHAVIOR_UNSPECIFIED;
    $request->version->createTime = 'tempore';
    $request->version->createUser = new ActingUser();
    $request->version->createUser->email = 'Deontae95@hotmail.com';
    $request->version->createUser->imageUrl = 'totam';
    $request->version->deleteTime = 'nihil';
    $request->version->deleteUser = new ActingUser();
    $request->version->deleteUser->email = 'Merlin42@gmail.com';
    $request->version->deleteUser->imageUrl = 'libero';
    $request->version->fileCount = 'voluptas';
    $request->version->finalizeTime = 'deserunt';
    $request->version->finalizeUser = new ActingUser();
    $request->version->finalizeUser->email = 'Cristobal58@yahoo.com';
    $request->version->finalizeUser->imageUrl = 'maxime';
    $request->version->labels = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
    $request->version->name = 'Gilbert Kohler';
    $request->version->status = VersionStatusEnum::CREATED;
    $request->version->versionBytes = 'neque';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'sunt';
    $request->key = 'ullam';
    $request->name = 'Terrell Bartell';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->updateMask = 'saepe';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new FirebasehostingSitesVersionsPatchSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsPatch($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## firebasehostingSitesVersionsPopulateFiles

 Adds content files to the specified version. Each file must be under 2 GB.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPopulateFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PopulateVersionFilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPopulateFilesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPopulateFilesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\FirebasehostingSitesVersionsPopulateFilesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FirebasehostingSitesVersionsPopulateFilesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->populateVersionFilesRequest = new PopulateVersionFilesRequest();
    $request->populateVersionFilesRequest->files = [
        'tempore' => 'cupiditate',
        'aperiam' => 'delectus',
        'dolorem' => 'dolore',
    ];
    $request->accessToken = 'labore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'architecto';
    $request->key = 'quae';
    $request->oauthToken = 'aut';
    $request->parent = 'quas';
    $request->prettyPrint = false;
    $request->quotaUser = 'itaque';
    $request->uploadType = 'consequatur';
    $request->uploadProtocol = 'est';

    $requestSecurity = new FirebasehostingSitesVersionsPopulateFilesSecurity();
    $requestSecurity->option1 = new FirebasehostingSitesVersionsPopulateFilesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->firebasehostingSitesVersionsPopulateFiles($request, $requestSecurity);

    if ($response->populateVersionFilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
