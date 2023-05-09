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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQuoteImageRequest;
import org.openapis.openapi.models.operations.DeleteQuoteImageResponse;
import org.openapis.openapi.models.operations.DeleteQuoteImageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteImageRequest req = new DeleteQuoteImageRequest("architecto");            

            DeleteQuoteImageResponse res = sdk.quoteImages.deleteQuoteImage(req, new DeleteQuoteImageSecurity("mollitia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQuoteImageBackground

Delete a background image file. The user needs to be the owner of the background image to be able to delete it.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQuoteImageBackgroundRequest;
import org.openapis.openapi.models.operations.DeleteQuoteImageBackgroundResponse;
import org.openapis.openapi.models.operations.DeleteQuoteImageBackgroundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteImageBackgroundRequest req = new DeleteQuoteImageBackgroundRequest("dolorem");            

            DeleteQuoteImageBackgroundResponse res = sdk.quoteImages.deleteQuoteImageBackground(req, new DeleteQuoteImageBackgroundSecurity("culpa") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteQuoteImageFont

Delete a font file. The user needs to be the owner of the font to be able to delete it.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteQuoteImageFontRequest;
import org.openapis.openapi.models.operations.DeleteQuoteImageFontResponse;
import org.openapis.openapi.models.operations.DeleteQuoteImageFontSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteQuoteImageFontRequest req = new DeleteQuoteImageFontRequest("consequuntur");            

            DeleteQuoteImageFontResponse res = sdk.quoteImages.deleteQuoteImageFont(req, new DeleteQuoteImageFontSecurity("repellat") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImage

Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageRequest;
import org.openapis.openapi.models.operations.GetQuoteImageResponse;
import org.openapis.openapi.models.operations.GetQuoteImageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageRequest req = new GetQuoteImageRequest("mollitia") {{
                binary = false;
            }};            

            GetQuoteImageResponse res = sdk.quoteImages.getQuoteImage(req, new GetQuoteImageSecurity("occaecati") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImageBackgroundList

Lists background images in your private collection. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundListRequest;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundListResponse;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageBackgroundListRequest req = new GetQuoteImageBackgroundListRequest() {{
                start = 253291L;
            }};            

            GetQuoteImageBackgroundListResponse res = sdk.quoteImages.getQuoteImageBackgroundList(req, new GetQuoteImageBackgroundListSecurity("commodi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImageBackgroundSearch

Searches for a background image with a given tag. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteImageBackgroundSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageBackgroundSearchRequest req = new GetQuoteImageBackgroundSearchRequest() {{
                query = "quam";
            }};            

            GetQuoteImageBackgroundSearchResponse res = sdk.quoteImages.getQuoteImageBackgroundSearch(req, new GetQuoteImageBackgroundSearchSecurity("molestiae") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImageFontList

Lists background images in your private collection. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageFontListRequest;
import org.openapis.openapi.models.operations.GetQuoteImageFontListResponse;
import org.openapis.openapi.models.operations.GetQuoteImageFontListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageFontListRequest req = new GetQuoteImageFontListRequest() {{
                start = 244425L;
            }};            

            GetQuoteImageFontListResponse res = sdk.quoteImages.getQuoteImageFontList(req, new GetQuoteImageFontListSecurity("error") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImageFontSearch

Searches for a font with a given tag. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageFontSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteImageFontSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteImageFontSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageFontSearchRequest req = new GetQuoteImageFontSearchRequest() {{
                query = "quia";
            }};            

            GetQuoteImageFontSearchResponse res = sdk.quoteImages.getQuoteImageFontSearch(req, new GetQuoteImageFontSearchSecurity("quis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getQuoteImageSearch

Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author. 


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetQuoteImageSearchRequest;
import org.openapis.openapi.models.operations.GetQuoteImageSearchResponse;
import org.openapis.openapi.models.operations.GetQuoteImageSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetQuoteImageSearchRequest req = new GetQuoteImageSearchRequest() {{
                author = "vitae";
                category = "laborum";
                private_ = false;
            }};            

            GetQuoteImageSearchResponse res = sdk.quoteImages.getQuoteImageSearch(req, new GetQuoteImageSearchSecurity("animi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageBackground

Add an image for use later as a quote background image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundRequestBody;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundRequestBodyImage;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundResponse;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageBackgroundRequestBody req = new PostQuoteImageBackgroundRequestBody(                new PostQuoteImageBackgroundRequestBodyImage("enim".getBytes(), "odit");) {{
                tags = "quo";
            }};            

            PostQuoteImageBackgroundResponse res = sdk.quoteImages.postQuoteImageBackground(req, new PostQuoteImageBackgroundSecurity("sequi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageBackgroundTagsAdd

Add a tag to a given Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsAddRequest;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsAddResponse;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsAddSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageBackgroundTagsAddRequest req = new PostQuoteImageBackgroundTagsAddRequest("tenetur", "ipsam");            

            PostQuoteImageBackgroundTagsAddResponse res = sdk.quoteImages.postQuoteImageBackgroundTagsAdd(req, new PostQuoteImageBackgroundTagsAddSecurity("id") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageBackgroundTagsRemove

Remove a tag from a given Image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsRemoveRequest;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsRemoveResponse;
import org.openapis.openapi.models.operations.PostQuoteImageBackgroundTagsRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageBackgroundTagsRemoveRequest req = new PostQuoteImageBackgroundTagsRemoveRequest("possimus", "aut");            

            PostQuoteImageBackgroundTagsRemoveResponse res = sdk.quoteImages.postQuoteImageBackgroundTagsRemove(req, new PostQuoteImageBackgroundTagsRemoveSecurity("quasi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageFont

Add a font file for use later in creating a quote image. This is essentially a `PUT` but not many clients handle PUT with binary stream i.e. a file, gracefully.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageFontRequestBody;
import org.openapis.openapi.models.operations.PostQuoteImageFontRequestBodyFont;
import org.openapis.openapi.models.operations.PostQuoteImageFontResponse;
import org.openapis.openapi.models.operations.PostQuoteImageFontSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageFontRequestBody req = new PostQuoteImageFontRequestBody(                new PostQuoteImageFontRequestBodyFont("error".getBytes(), "temporibus");) {{
                tags = "laborum";
            }};            

            PostQuoteImageFontResponse res = sdk.quoteImages.postQuoteImageFont(req, new PostQuoteImageFontSecurity("quasi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageFontTagsAdd

Add a tag to a given font.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsAddRequest;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsAddResponse;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsAddSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageFontTagsAddRequest req = new PostQuoteImageFontTagsAddRequest("reiciendis", "voluptatibus");            

            PostQuoteImageFontTagsAddResponse res = sdk.quoteImages.postQuoteImageFontTagsAdd(req, new PostQuoteImageFontTagsAddSecurity("vero") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postQuoteImageFontTagsRemove

Remove a tag from a given Font.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsRemoveRequest;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsRemoveResponse;
import org.openapis.openapi.models.operations.PostQuoteImageFontTagsRemoveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostQuoteImageFontTagsRemoveRequest req = new PostQuoteImageFontTagsRemoveRequest("nihil", "praesentium");            

            PostQuoteImageFontTagsRemoveResponse res = sdk.quoteImages.postQuoteImageFontTagsRemove(req, new PostQuoteImageFontTagsRemoveSecurity("voluptatibus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putQuoteImage

Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutQuoteImageRequest;
import org.openapis.openapi.models.operations.PutQuoteImageResponse;
import org.openapis.openapi.models.operations.PutQuoteImageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutQuoteImageRequest req = new PutQuoteImageRequest("ipsa") {{
                bgColor = "omnis";
                bgimageId = "voluptate";
                branding = false;
                fontId = "cum";
                halign = "perferendis";
                height = 39187L;
                includeTransparentLayer = false;
                textColor = "reprehenderit";
                textSize = "ut";
                valign = "maiores";
                width = 120196L;
            }};            

            PutQuoteImageResponse res = sdk.quoteImages.putQuoteImage(req, new PutQuoteImageSecurity("corporis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
