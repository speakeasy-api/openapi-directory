# quoteImages

## Overview

Create beatiful quote images or get one of the premade images. You need an API key to access this service.

Find out more about image
<https://theysaidso.com/api/quote#image>
### Available Operations

* [deleteQuoteImage](#deletequoteimage) - Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.

* [deleteQuoteImageBackground](#deletequoteimagebackground) - Delete a background image file. The user needs to be the owner of the background image to be able to delete it.

* [deleteQuoteImageFont](#deletequoteimagefont) - Delete a font file. The user needs to be the owner of the font to be able to delete it.

* [getQuoteImage](#getquoteimage) - Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`

* [getQuoteImageBackgroundList](#getquoteimagebackgroundlist) - Lists background images in your private collection. 

* [getQuoteImageBackgroundSearch](#getquoteimagebackgroundsearch) - Searches for a background image with a given tag. 

* [getQuoteImageFontList](#getquoteimagefontlist) - Lists background images in your private collection. 

* [getQuoteImageFontSearch](#getquoteimagefontsearch) - Searches for a font with a given tag. 

* [getQuoteImageSearch](#getquoteimagesearch) - Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 

* [postQuoteImageBackground](#postquoteimagebackground) - Add an image for use later as a quote background image.
* [postQuoteImageBackgroundTagsAdd](#postquoteimagebackgroundtagsadd) - Add a tag to a given Image.
* [postQuoteImageBackgroundTagsRemove](#postquoteimagebackgroundtagsremove) - Remove a tag from a given Image.
* [postQuoteImageFont](#postquoteimagefont) - Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.
* [postQuoteImageFontTagsAdd](#postquoteimagefonttagsadd) - Add a tag to a given font.
* [postQuoteImageFontTagsRemove](#postquoteimagefonttagsremove) - Remove a tag from a given Font.
* [putQuoteImage](#putquoteimage) - Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


## deleteQuoteImage

Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQuoteImageRequest();
    $request->id = 'in';

    $requestSecurity = new DeleteQuoteImageSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->deleteQuoteImage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQuoteImageBackground

Delete a background image file. The user needs to be the owner of the background image to be able to delete it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageBackgroundRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageBackgroundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQuoteImageBackgroundRequest();
    $request->id = 'corporis';

    $requestSecurity = new DeleteQuoteImageBackgroundSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->deleteQuoteImageBackground($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQuoteImageFont

Delete a font file. The user needs to be the owner of the font to be able to delete it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageFontRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQuoteImageFontSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQuoteImageFontRequest();
    $request->id = 'iste';

    $requestSecurity = new DeleteQuoteImageFontSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->deleteQuoteImageFont($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImage

Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageRequest();
    $request->binary = false;
    $request->id = 'iure';

    $requestSecurity = new GetQuoteImageSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImageBackgroundList

Lists background images in your private collection. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageBackgroundListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageBackgroundListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageBackgroundListRequest();
    $request->start = 902349;

    $requestSecurity = new GetQuoteImageBackgroundListSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImageBackgroundList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImageBackgroundSearch

Searches for a background image with a given tag. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageBackgroundSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageBackgroundSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageBackgroundSearchRequest();
    $request->query = 'quidem';

    $requestSecurity = new GetQuoteImageBackgroundSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImageBackgroundSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImageFontList

Lists background images in your private collection. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageFontListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageFontListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageFontListRequest();
    $request->start = 99280;

    $requestSecurity = new GetQuoteImageFontListSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImageFontList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImageFontSearch

Searches for a font with a given tag. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageFontSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageFontSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageFontSearchRequest();
    $request->query = 'ipsa';

    $requestSecurity = new GetQuoteImageFontSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImageFontSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getQuoteImageSearch

Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetQuoteImageSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetQuoteImageSearchRequest();
    $request->author = 'reiciendis';
    $request->category = 'est';
    $request->private = false;

    $requestSecurity = new GetQuoteImageSearchSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->getQuoteImageSearch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageBackground

Add an image for use later as a quote background image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundRequestBodyImage;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageBackgroundRequestBody();
    $request->image = new PostQuoteImageBackgroundRequestBodyImage();
    $request->image->content = 'mollitia';
    $request->image->image = 'laborum';
    $request->tags = 'dolores';

    $requestSecurity = new PostQuoteImageBackgroundSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageBackground($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageBackgroundTagsAdd

Add a tag to a given Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundTagsAddRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundTagsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageBackgroundTagsAddRequest();
    $request->id = 'dolorem';
    $request->tags = 'corporis';

    $requestSecurity = new PostQuoteImageBackgroundTagsAddSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageBackgroundTagsAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageBackgroundTagsRemove

Remove a tag from a given Image.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundTagsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageBackgroundTagsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageBackgroundTagsRemoveRequest();
    $request->id = 'explicabo';
    $request->tags = 'nobis';

    $requestSecurity = new PostQuoteImageBackgroundTagsRemoveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageBackgroundTagsRemove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageFont

Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontRequestBodyFont;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageFontRequestBody();
    $request->font = new PostQuoteImageFontRequestBodyFont();
    $request->font->content = 'enim';
    $request->font->font = 'omnis';
    $request->tags = 'nemo';

    $requestSecurity = new PostQuoteImageFontSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageFont($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageFontTagsAdd

Add a tag to a given font.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontTagsAddRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontTagsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageFontTagsAddRequest();
    $request->id = 'minima';
    $request->tags = 'excepturi';

    $requestSecurity = new PostQuoteImageFontTagsAddSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageFontTagsAdd($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postQuoteImageFontTagsRemove

Remove a tag from a given Font.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontTagsRemoveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostQuoteImageFontTagsRemoveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostQuoteImageFontTagsRemoveRequest();
    $request->id = 'accusantium';
    $request->tags = 'iure';

    $requestSecurity = new PostQuoteImageFontTagsRemoveSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->postQuoteImageFontTagsRemove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putQuoteImage

Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteImageRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutQuoteImageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutQuoteImageRequest();
    $request->bgColor = 'culpa';
    $request->bgimageId = 'doloribus';
    $request->branding = false;
    $request->fontId = 'sapiente';
    $request->halign = 'architecto';
    $request->height = 652790;
    $request->includeTransparentLayer = false;
    $request->quoteId = 'dolorem';
    $request->textColor = 'culpa';
    $request->textSize = 'consequuntur';
    $request->valign = 'repellat';
    $request->width = 653108;

    $requestSecurity = new PutQuoteImageSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->quoteImages->putQuoteImage($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
