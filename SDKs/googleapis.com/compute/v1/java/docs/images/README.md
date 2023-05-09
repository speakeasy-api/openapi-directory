# images

### Available Operations

* [computeImagesDelete](#computeimagesdelete) - Deletes the specified image.
* [computeImagesDeprecate](#computeimagesdeprecate) - Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.
* [computeImagesGet](#computeimagesget) - Returns the specified image.
* [computeImagesGetFromFamily](#computeimagesgetfromfamily) - Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.
* [computeImagesGetIamPolicy](#computeimagesgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeImagesInsert](#computeimagesinsert) - Creates an image in the specified project using the data included in the request.
* [computeImagesList](#computeimageslist) - Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
* [computeImagesPatch](#computeimagespatch) - Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.
* [computeImagesSetIamPolicy](#computeimagessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeImagesSetLabels](#computeimagessetlabels) - Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
* [computeImagesTestIamPermissions](#computeimagestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeImagesDelete

Deletes the specified image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesDeleteRequest;
import org.openapis.openapi.models.operations.ComputeImagesDeleteResponse;
import org.openapis.openapi.models.operations.ComputeImagesDeleteSecurity;
import org.openapis.openapi.models.operations.ComputeImagesDeleteSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesDeleteRequest req = new ComputeImagesDeleteRequest("delectus", "enim") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "porro";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "labore";
                key = "porro";
                oauthToken = "eaque";
                prettyPrint = false;
                quotaUser = "ea";
                requestId = "consequatur";
                uploadType = "nobis";
                uploadProtocol = "accusantium";
                userIp = "ea";
            }};            

            ComputeImagesDeleteResponse res = sdk.images.computeImagesDelete(req, new ComputeImagesDeleteSecurity() {{
                option1 = new ComputeImagesDeleteSecurityOption1("laborum", "et") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesDeprecate

Sets the deprecation status of an image. If an empty request body is given, clears the deprecation status instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesDeprecateRequest;
import org.openapis.openapi.models.operations.ComputeImagesDeprecateResponse;
import org.openapis.openapi.models.operations.ComputeImagesDeprecateSecurity;
import org.openapis.openapi.models.operations.ComputeImagesDeprecateSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesDeprecateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeprecationStatus;
import org.openapis.openapi.models.shared.DeprecationStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesDeprecateRequest req = new ComputeImagesDeprecateRequest("fugit", "quos") {{
                dollarXgafv = XgafvEnum.ONE;
                deprecationStatus = new DeprecationStatus() {{
                    deleted = "voluptate";
                    deprecated = "autem";
                    obsolete = "numquam";
                    replacement = "voluptates";
                    state = DeprecationStatusStateEnum.OBSOLETE;
                }};;
                accessToken = "earum";
                alt = AltEnum.MEDIA;
                callback = "assumenda";
                fields = "doloremque";
                key = "porro";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "temporibus";
                requestId = "vel";
                uploadType = "itaque";
                uploadProtocol = "nulla";
                userIp = "excepturi";
            }};            

            ComputeImagesDeprecateResponse res = sdk.images.computeImagesDeprecate(req, new ComputeImagesDeprecateSecurity() {{
                option1 = new ComputeImagesDeprecateSecurityOption1("quod", "in") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesGet

Returns the specified image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesGetRequest;
import org.openapis.openapi.models.operations.ComputeImagesGetResponse;
import org.openapis.openapi.models.operations.ComputeImagesGetSecurity;
import org.openapis.openapi.models.operations.ComputeImagesGetSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesGetSecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesGetSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesGetRequest req = new ComputeImagesGetRequest("nesciunt", "temporibus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eum";
                alt = AltEnum.JSON;
                callback = "ut";
                fields = "nostrum";
                key = "dignissimos";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "ipsa";
                uploadProtocol = "occaecati";
                userIp = "dolorum";
            }};            

            ComputeImagesGetResponse res = sdk.images.computeImagesGet(req, new ComputeImagesGetSecurity() {{
                option1 = new ComputeImagesGetSecurityOption1("blanditiis", "recusandae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.image != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesGetFromFamily

Returns the latest image that is part of an image family and is not deprecated. For more information on image families, see Public image families documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilyRequest;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilyResponse;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilySecurity;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilySecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilySecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesGetFromFamilySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesGetFromFamilyRequest req = new ComputeImagesGetFromFamilyRequest("deleniti", "dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quibusdam";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "veniam";
                key = "id";
                oauthToken = "architecto";
                prettyPrint = false;
                quotaUser = "maiores";
                uploadType = "perspiciatis";
                uploadProtocol = "quod";
                userIp = "magni";
            }};            

            ComputeImagesGetFromFamilyResponse res = sdk.images.computeImagesGetFromFamily(req, new ComputeImagesGetFromFamilySecurity() {{
                option1 = new ComputeImagesGetFromFamilySecurityOption1("incidunt", "fugit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.image != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicySecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesGetIamPolicySecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesGetIamPolicyRequest req = new ComputeImagesGetIamPolicyRequest("quisquam", "odio") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "culpa";
                fields = "illo";
                key = "reiciendis";
                oauthToken = "ipsum";
                optionsRequestedPolicyVersion = 40490L;
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "dignissimos";
                uploadProtocol = "non";
                userIp = "facere";
            }};            

            ComputeImagesGetIamPolicyResponse res = sdk.images.computeImagesGetIamPolicy(req, new ComputeImagesGetIamPolicySecurity() {{
                option1 = new ComputeImagesGetIamPolicySecurityOption1("repellat", "exercitationem") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesInsert

Creates an image in the specified project using the data included in the request.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesInsertRequest;
import org.openapis.openapi.models.operations.ComputeImagesInsertResponse;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurity;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurityOption3;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurityOption4;
import org.openapis.openapi.models.operations.ComputeImagesInsertSecurityOption5;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.DeprecationStatus;
import org.openapis.openapi.models.shared.DeprecationStatusStateEnum;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageArchitectureEnum;
import org.openapis.openapi.models.shared.ImageRawDisk;
import org.openapis.openapi.models.shared.ImageRawDiskContainerTypeEnum;
import org.openapis.openapi.models.shared.ImageSourceTypeEnum;
import org.openapis.openapi.models.shared.ImageStatusEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesInsertRequest req = new ComputeImagesInsertRequest("quidem") {{
                dollarXgafv = XgafvEnum.ONE;
                image = new Image() {{
                    architecture = ImageArchitectureEnum.ARM64;
                    archiveSizeBytes = "vitae";
                    creationTimestamp = "excepturi";
                    deprecated = new DeprecationStatus() {{
                        deleted = "voluptatum";
                        deprecated = "iste";
                        obsolete = "eaque";
                        replacement = "reiciendis";
                        state = DeprecationStatusStateEnum.DELETED;
                    }};;
                    description = "consequuntur";
                    diskSizeGb = "est";
                    family = "tempora";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                    }};
                    id = "atque";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "at";
                        kmsKeyServiceAccount = "rem";
                        rawKey = "exercitationem";
                        rsaEncryptedKey = "tempore";
                        sha256 = "eos";
                    }};;
                    kind = "laboriosam";
                    labelFingerprint = "aperiam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("perspiciatis", "dicta");
                        put("assumenda", "reprehenderit");
                    }};
                    licenseCodes = new String[]{{
                        add("ad"),
                        add("voluptates"),
                    }};
                    licenses = new String[]{{
                        add("eligendi"),
                    }};
                    name = "Brenda Harris";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "excepturi";
                        source = "porro";
                    }};;
                    satisfiesPzs = false;
                    selfLink = "nesciunt";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "veniam";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "esse";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "aperiam";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "sed";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "odio";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "nobis";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "repellendus";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "consequuntur";
                            fileType = FileContentBufferFileTypeEnum.X509;
                        }};;
                    }};;
                    sourceDisk = "nobis";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "possimus";
                        kmsKeyServiceAccount = "laborum";
                        rawKey = "optio";
                        rsaEncryptedKey = "debitis";
                        sha256 = "architecto";
                    }};;
                    sourceDiskId = "reiciendis";
                    sourceImage = "consequatur";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "sunt";
                        kmsKeyServiceAccount = "odit";
                        rawKey = "inventore";
                        rsaEncryptedKey = "laboriosam";
                        sha256 = "quod";
                    }};;
                    sourceImageId = "repudiandae";
                    sourceSnapshot = "consequuntur";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aspernatur";
                        kmsKeyServiceAccount = "sequi";
                        rawKey = "sint";
                        rsaEncryptedKey = "accusamus";
                        sha256 = "deleniti";
                    }};;
                    sourceSnapshotId = "earum";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.DELETING;
                    storageLocations = new String[]{{
                        add("minus"),
                        add("quibusdam"),
                    }};
                }};;
                accessToken = "accusantium";
                alt = AltEnum.PROTO;
                callback = "inventore";
                fields = "omnis";
                forceCreate = false;
                key = "quibusdam";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "nostrum";
                requestId = "sint";
                uploadType = "doloribus";
                uploadProtocol = "magnam";
                userIp = "adipisci";
            }};            

            ComputeImagesInsertResponse res = sdk.images.computeImagesInsert(req, new ComputeImagesInsertSecurity() {{
                option1 = new ComputeImagesInsertSecurityOption1("natus", "necessitatibus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesList

Retrieves the list of custom images available to the specified project. Custom images are images you create that belong to your project. This method does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesListRequest;
import org.openapis.openapi.models.operations.ComputeImagesListResponse;
import org.openapis.openapi.models.operations.ComputeImagesListSecurity;
import org.openapis.openapi.models.operations.ComputeImagesListSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesListSecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesListSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesListRequest req = new ComputeImagesListRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "commodi";
                fields = "impedit";
                filter = "facilis";
                key = "temporibus";
                maxResults = 621428L;
                oauthToken = "quaerat";
                orderBy = "delectus";
                pageToken = "molestiae";
                prettyPrint = false;
                quotaUser = "deserunt";
                returnPartialSuccess = false;
                uploadType = "laborum";
                uploadProtocol = "odit";
                userIp = "rerum";
            }};            

            ComputeImagesListResponse res = sdk.images.computeImagesList(req, new ComputeImagesListSecurity() {{
                option1 = new ComputeImagesListSecurityOption1("consequuntur", "magnam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.imageList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesPatch

Patches the specified image with the data included in the request. Only the following fields can be modified: family, description, deprecation status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesPatchRequest;
import org.openapis.openapi.models.operations.ComputeImagesPatchResponse;
import org.openapis.openapi.models.operations.ComputeImagesPatchSecurity;
import org.openapis.openapi.models.operations.ComputeImagesPatchSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesPatchSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.CustomerEncryptionKey;
import org.openapis.openapi.models.shared.DeprecationStatus;
import org.openapis.openapi.models.shared.DeprecationStatusStateEnum;
import org.openapis.openapi.models.shared.FileContentBuffer;
import org.openapis.openapi.models.shared.FileContentBufferFileTypeEnum;
import org.openapis.openapi.models.shared.GuestOsFeature;
import org.openapis.openapi.models.shared.GuestOsFeatureTypeEnum;
import org.openapis.openapi.models.shared.Image;
import org.openapis.openapi.models.shared.ImageArchitectureEnum;
import org.openapis.openapi.models.shared.ImageRawDisk;
import org.openapis.openapi.models.shared.ImageRawDiskContainerTypeEnum;
import org.openapis.openapi.models.shared.ImageSourceTypeEnum;
import org.openapis.openapi.models.shared.ImageStatusEnum;
import org.openapis.openapi.models.shared.InitialStateConfig;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesPatchRequest req = new ComputeImagesPatchRequest("et", "et") {{
                dollarXgafv = XgafvEnum.ONE;
                image1 = new Image() {{
                    architecture = ImageArchitectureEnum.ARM64;
                    archiveSizeBytes = "perspiciatis";
                    creationTimestamp = "nostrum";
                    deprecated = new DeprecationStatus() {{
                        deleted = "temporibus";
                        deprecated = "et";
                        obsolete = "debitis";
                        replacement = "nisi";
                        state = DeprecationStatusStateEnum.DELETED;
                    }};;
                    description = "excepturi";
                    diskSizeGb = "quas";
                    family = "repellat";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.UEFI_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                    }};
                    id = "commodi";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "dolores";
                        kmsKeyServiceAccount = "dicta";
                        rawKey = "molestiae";
                        rsaEncryptedKey = "maxime";
                        sha256 = "dolores";
                    }};;
                    kind = "molestias";
                    labelFingerprint = "quam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("aliquid", "voluptate");
                        put("eum", "consectetur");
                    }};
                    licenseCodes = new String[]{{
                        add("tempora"),
                    }};
                    licenses = new String[]{{
                        add("ad"),
                    }};
                    name = "Mary Fisher";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "asperiores";
                        source = "distinctio";
                    }};;
                    satisfiesPzs = false;
                    selfLink = "minima";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "molestiae";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "accusamus";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "deleniti";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "perferendis";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "ullam";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "adipisci";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "optio";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "at";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "id";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "in";
                            fileType = FileContentBufferFileTypeEnum.X509;
                        }};;
                    }};;
                    sourceDisk = "quibusdam";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "culpa";
                        kmsKeyServiceAccount = "dolor";
                        rawKey = "occaecati";
                        rsaEncryptedKey = "exercitationem";
                        sha256 = "unde";
                    }};;
                    sourceDiskId = "labore";
                    sourceImage = "pariatur";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "vel";
                        kmsKeyServiceAccount = "laboriosam";
                        rawKey = "soluta";
                        rsaEncryptedKey = "minus";
                        sha256 = "magni";
                    }};;
                    sourceImageId = "mollitia";
                    sourceSnapshot = "officiis";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aliquam";
                        kmsKeyServiceAccount = "quas";
                        rawKey = "aut";
                        rsaEncryptedKey = "autem";
                        sha256 = "dolorem";
                    }};;
                    sourceSnapshotId = "explicabo";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.PENDING;
                    storageLocations = new String[]{{
                        add("occaecati"),
                        add("enim"),
                        add("tempora"),
                    }};
                }};;
                accessToken = "libero";
                alt = AltEnum.MEDIA;
                callback = "voluptatibus";
                fields = "id";
                key = "qui";
                oauthToken = "explicabo";
                prettyPrint = false;
                quotaUser = "accusantium";
                requestId = "eum";
                uploadType = "nesciunt";
                uploadProtocol = "commodi";
                userIp = "molestias";
            }};            

            ComputeImagesPatchResponse res = sdk.images.computeImagesPatch(req, new ComputeImagesPatchSecurity() {{
                option1 = new ComputeImagesPatchSecurityOption1("atque", "explicabo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ComputeImagesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ComputeImagesSetIamPolicySecurity;
import org.openapis.openapi.models.operations.ComputeImagesSetIamPolicySecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesSetIamPolicySecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptions;
import org.openapis.openapi.models.shared.AuthorizationLoggingOptionsPermissionTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Condition;
import org.openapis.openapi.models.shared.ConditionIamEnum;
import org.openapis.openapi.models.shared.ConditionOpEnum;
import org.openapis.openapi.models.shared.ConditionSysEnum;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.GlobalSetPolicyRequest;
import org.openapis.openapi.models.shared.LogConfig;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptions;
import org.openapis.openapi.models.shared.LogConfigCloudAuditOptionsLogNameEnum;
import org.openapis.openapi.models.shared.LogConfigCounterOptions;
import org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptions;
import org.openapis.openapi.models.shared.LogConfigDataAccessOptionsLogModeEnum;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleActionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesSetIamPolicyRequest req = new ComputeImagesSetIamPolicyRequest("totam", "ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "optio";
                            condition = new Expr() {{
                                description = "libero";
                                expression = "ab";
                                location = "alias";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("autem"),
                            }};
                            role = "tempore";
                        }}),
                    }};
                    etag = "necessitatibus";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("dolores"),
                                            add("illo"),
                                            add("recusandae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sit"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("libero"),
                                }};
                                service = "molestiae";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("amet"),
                                            add("ex"),
                                            add("aliquid"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("rem"),
                                            add("eveniet"),
                                            add("eveniet"),
                                            add("voluptatem"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("libero"),
                                }};
                                service = "sapiente";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("veniam"),
                                            add("quos"),
                                            add("totam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("doloremque"),
                                    add("vero"),
                                }};
                                service = "aut";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                            add("assumenda"),
                                            add("saepe"),
                                            add("nobis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("natus"),
                                }};
                                service = "molestiae";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "earum";
                                condition = new Expr() {{
                                    description = "ipsum";
                                    expression = "itaque";
                                    location = "cupiditate";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("nobis"),
                                    add("numquam"),
                                    add("consequatur"),
                                }};
                                role = "temporibus";
                            }}),
                            add(new Binding() {{
                                bindingId = "doloribus";
                                condition = new Expr() {{
                                    description = "quos";
                                    expression = "commodi";
                                    location = "blanditiis";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("nemo"),
                                    add("ratione"),
                                    add("dolore"),
                                    add("perferendis"),
                                }};
                                role = "enim";
                            }}),
                            add(new Binding() {{
                                bindingId = "impedit";
                                condition = new Expr() {{
                                    description = "libero";
                                    expression = "dolor";
                                    location = "nesciunt";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("numquam"),
                                    add("provident"),
                                    add("quia"),
                                    add("reiciendis"),
                                }};
                                role = "modi";
                            }}),
                        }};
                        etag = "doloribus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW_WITH_LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "aperiam";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("soluta"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.SECURITY_REALM;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "delectus";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("inventore"),
                                        }};
                                    }}),
                                }};
                                description = "reprehenderit";
                                ins = new String[]{{
                                    add("dignissimos"),
                                    add("voluptatum"),
                                    add("nulla"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Darren Kling";
                                                    value = "tempore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Mr. Bridget Koepp MD";
                                                    value = "nemo";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Brenda Hagenes";
                                                    value = "laboriosam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Casey Mitchell";
                                                    value = "facilis";
                                                }}),
                                            }};
                                            field = "doloremque";
                                            metric = "officiis";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("necessitatibus"),
                                    add("alias"),
                                }};
                                permissions = new String[]{{
                                    add("ut"),
                                    add("hic"),
                                    add("facere"),
                                }};
                            }}),
                        }};
                        version = 950465;
                    }};;
                }};;
                accessToken = "saepe";
                alt = AltEnum.PROTO;
                callback = "exercitationem";
                fields = "exercitationem";
                key = "dolore";
                oauthToken = "sit";
                prettyPrint = false;
                quotaUser = "recusandae";
                uploadType = "a";
                uploadProtocol = "exercitationem";
                userIp = "neque";
            }};            

            ComputeImagesSetIamPolicyResponse res = sdk.images.computeImagesSetIamPolicy(req, new ComputeImagesSetIamPolicySecurity() {{
                option1 = new ComputeImagesSetIamPolicySecurityOption1("mollitia", "velit") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesSetLabels

Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesSetLabelsRequest;
import org.openapis.openapi.models.operations.ComputeImagesSetLabelsResponse;
import org.openapis.openapi.models.operations.ComputeImagesSetLabelsSecurity;
import org.openapis.openapi.models.operations.ComputeImagesSetLabelsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesSetLabelsSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GlobalSetLabelsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesSetLabelsRequest req = new ComputeImagesSetLabelsRequest("ut", "est") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "rerum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sapiente", "recusandae");
                        put("perspiciatis", "natus");
                        put("reprehenderit", "dolorem");
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "cumque";
                key = "aperiam";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "quas";
                uploadProtocol = "quis";
                userIp = "fuga";
            }};            

            ComputeImagesSetLabelsResponse res = sdk.images.computeImagesSetLabels(req, new ComputeImagesSetLabelsSecurity() {{
                option1 = new ComputeImagesSetLabelsSecurityOption1("eveniet", "consequuntur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## computeImagesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsSecurity;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsSecurityOption1;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsSecurityOption2;
import org.openapis.openapi.models.operations.ComputeImagesTestIamPermissionsSecurityOption3;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesTestIamPermissionsRequest req = new ComputeImagesTestIamPermissionsRequest("illum", "delectus") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("perferendis"),
                        add("maiores"),
                    }};
                }};;
                accessToken = "harum";
                alt = AltEnum.JSON;
                callback = "molestias";
                fields = "odio";
                key = "non";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "consequatur";
                uploadProtocol = "illum";
                userIp = "adipisci";
            }};            

            ComputeImagesTestIamPermissionsResponse res = sdk.images.computeImagesTestIamPermissions(req, new ComputeImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeImagesTestIamPermissionsSecurityOption1("dolorem", "ex") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.testPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
