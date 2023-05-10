# behavior

## Overview

Allows to anonymously report a person behavior. This information is fed to our machine learning platform to determine the reputational score of a person and produces a dataset; thus helping identify easily whether a candidate is reliable or not, based on all of their reputation against feedback reporters, visible via check API or user interface.

### Available Operations

* [reportBehavior](#reportbehavior) - Report Behavior

## reportBehavior

Creates a behavior item to report employee conducts that do not or might not be included in their background check. This report includes both possitive and negative behaviors and sorts them by severity.

### Reasons to report a person

<table>
  <tr>
    <td style="width: 100px"><center><b>Very High</b><br>(Score: 1)</td>
    <td>Rape, Drug Dealing, Sexual Harassment</td>
  </tr>
  <tr>
    <td><center><b>High</b><br>(Score: 0.8)</td>
    <td>Theft, Fights, Aggressive Behaviour, Identity Fraud, Drunk, Drug Possession</td>
  </tr>
  <tr>
    <td><center><b>Medium</b><br>(Score: 0.6)</td>
    <td>Absences</td>
  </tr>
  <tr>
    <td><center><b>Low</b><br>(Score: 0.4)</td>
    <td>Tardiness, Confidentiality Breach</td>
  </tr>
  <tr>
    <td><center><b>None</b><br>(Score: 0)</td>
    <td>Good Reputation</td>
  </tr>
  <tr>
    <td><center><b>Unknown</b></td>
    <td>No information</td>
  </tr>
</table>

**NOTE:** If the reason of your report is not here, please contact Truora support team.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInput;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputCountryEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputDocumentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateBehaviorInputReasonEnum;
use \OpenAPI\OpenAPI\Models\Operations\ReportBehaviorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBehaviorInput();
    $request->birthDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-08T10:35:32.561Z');
    $request->country = CreateBehaviorInputCountryEnum::PE;
    $request->documentId = 'molestiae';
    $request->documentType = CreateBehaviorInputDocumentTypeEnum::INDIVIDUAL_REGISTRATION;
    $request->email = 'Junior.Kshlerin@hotmail.com';
    $request->feedbackDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-06-29T11:50:59.674Z');
    $request->firstName = 'Antonetta';
    $request->lastName = 'Hauck';
    $request->phoneNumber = 'veritatis';
    $request->reason = CreateBehaviorInputReasonEnum::DRUG_POSSESSION;

    $requestSecurity = new ReportBehaviorSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->behavior->reportBehavior($request, $requestSecurity);

    if ($response->behaviourOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
