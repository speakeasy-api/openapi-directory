# imaging

### Available Operations

* [htmlRender](#htmlrender) - HTML Render
* [imageResize](#imageresize) - Image Resize
* [imageWatermark](#imagewatermark) - Image Watermark
* [qrCode](#qrcode) - QR Code

## htmlRender

Render HTML content to PDF, JPG or PNG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HTMLRenderRequestBody;
import org.openapis.openapi.models.operations.HTMLRenderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "quidem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            HTMLRenderRequestBody req = new HTMLRenderRequestBody("architecto") {{
                css = "ipsa";
                delay = 969810;
                footer = "est";
                format = "mollitia";
                grayscale = false;
                header = "laborum";
                ignoreCertificateErrors = false;
                imageHeight = 170909;
                imageWidth = 210382;
                landscape = false;
                margin = 3581.52;
                marginBottom = 1289.26;
                marginLeft = 7506.86;
                marginRight = 3154.28;
                marginTop = 6078.31;
                pageHeight = 3637.11;
                pageSize = "minima";
                pageWidth = 5701.97;
                timeout = 38425;
                title = "Ms.";
                zoom = 6342.74;
            }};            

            HTMLRenderResponse res = sdk.imaging.htmlRender(req);

            if (res.htmlRender200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageResize

Resize an image and output as either JPEG or PNG

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageResizeRequestBody;
import org.openapis.openapi.models.operations.ImageResizeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus", "sapiente") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImageResizeRequestBody req = new ImageResizeRequestBody("architecto", 652790) {{
                bgColor = "dolorem";
                format = "culpa";
                height = 161309;
                resizeMode = "repellat";
            }};            

            ImageResizeResponse res = sdk.imaging.imageResize(req);

            if (res.imageResize200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageWatermark

Watermark one image with another image

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageWatermarkRequestBody;
import org.openapis.openapi.models.operations.ImageWatermarkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "occaecati") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImageWatermarkRequestBody req = new ImageWatermarkRequestBody("numquam", "commodi") {{
                bgColor = "quam";
                format = "molestiae";
                height = 244425;
                opacity = 623510;
                position = "quia";
                resizeMode = "quis";
                width = 110375;
            }};            

            ImageWatermarkResponse res = sdk.imaging.imageWatermark(req);

            if (res.imageWatermark200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## qrCode

Generate a QR code as a PNG image

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QRCodeRequestBody;
import org.openapis.openapi.models.operations.QRCodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "animi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    userId = "YOUR_API_KEY_HERE";
                }})
                .build();

            QRCodeRequestBody req = new QRCodeRequestBody("enim") {{
                bgColor = "odit";
                fgColor = "quo";
                height = 196582;
                width = 949572;
            }};            

            QRCodeResponse res = sdk.imaging.qrCode(req);

            if (res.qrCode200ApplicationJSONBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
