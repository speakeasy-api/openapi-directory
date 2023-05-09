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

            ComputeImagesDeleteRequest req = new ComputeImagesDeleteRequest("veritatis", "adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quis";
                alt = AltEnum.MEDIA;
                callback = "ea";
                fields = "fugiat";
                key = "dicta";
                oauthToken = "quas";
                prettyPrint = false;
                quotaUser = "delectus";
                requestId = "sint";
                uploadType = "voluptatibus";
                uploadProtocol = "sint";
                userIp = "reprehenderit";
            }};            

            ComputeImagesDeleteResponse res = sdk.images.computeImagesDelete(req, new ComputeImagesDeleteSecurity() {{
                option1 = new ComputeImagesDeleteSecurityOption1("est", "numquam") {{
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
import org.openapis.openapi.models.shared.RolloutPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesDeprecateRequest req = new ComputeImagesDeprecateRequest("nam", "sapiente") {{
                dollarXgafv = XgafvEnum.TWO;
                deprecationStatus = new DeprecationStatus() {{
                    deleted = "facere";
                    deprecated = "odit";
                    obsolete = "nam";
                    replacement = "asperiores";
                    state = DeprecationStatusStateEnum.DELETED;
                    stateOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "fugiat";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("molestiae", "quo");
                            put("deserunt", "totam");
                        }};
                    }};;
                }};;
                accessToken = "modi";
                alt = AltEnum.MEDIA;
                callback = "repellendus";
                fields = "excepturi";
                key = "unde";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "eius";
                requestId = "quasi";
                uploadType = "quibusdam";
                uploadProtocol = "voluptas";
                userIp = "quasi";
            }};            

            ComputeImagesDeprecateResponse res = sdk.images.computeImagesDeprecate(req, new ComputeImagesDeprecateSecurity() {{
                option1 = new ComputeImagesDeprecateSecurityOption1("magni", "numquam") {{
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

            ComputeImagesGetRequest req = new ComputeImagesGetRequest("velit", "quis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "quam";
                fields = "perferendis";
                key = "cumque";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "ea";
                uploadType = "totam";
                uploadProtocol = "quidem";
                userIp = "eaque";
            }};            

            ComputeImagesGetResponse res = sdk.images.computeImagesGet(req, new ComputeImagesGetSecurity() {{
                option1 = new ComputeImagesGetSecurityOption1("sequi", "fuga") {{
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

            ComputeImagesGetFromFamilyRequest req = new ComputeImagesGetFromFamilyRequest("assumenda", "modi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "beatae";
                alt = AltEnum.PROTO;
                callback = "repellendus";
                fields = "ut";
                key = "nesciunt";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "delectus";
                uploadProtocol = "ipsa";
                userIp = "quo";
            }};            

            ComputeImagesGetFromFamilyResponse res = sdk.images.computeImagesGetFromFamily(req, new ComputeImagesGetFromFamilySecurity() {{
                option1 = new ComputeImagesGetFromFamilySecurityOption1("libero", "eaque") {{
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

            ComputeImagesGetIamPolicyRequest req = new ComputeImagesGetIamPolicyRequest("animi", "doloremque") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "earum";
                fields = "facilis";
                key = "eos";
                oauthToken = "sed";
                optionsRequestedPolicyVersion = 854343L;
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "tempore";
                uploadProtocol = "dolorem";
                userIp = "dolorum";
            }};            

            ComputeImagesGetIamPolicyResponse res = sdk.images.computeImagesGetIamPolicy(req, new ComputeImagesGetIamPolicySecurity() {{
                option1 = new ComputeImagesGetIamPolicySecurityOption1("in", "aperiam") {{
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
import org.openapis.openapi.models.shared.RolloutPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesInsertRequest req = new ComputeImagesInsertRequest("pariatur") {{
                dollarXgafv = XgafvEnum.TWO;
                image = new Image() {{
                    architecture = ImageArchitectureEnum.ARCHITECTURE_UNSPECIFIED;
                    archiveSizeBytes = "voluptatibus";
                    creationTimestamp = "fuga";
                    deprecated = new DeprecationStatus() {{
                        deleted = "deserunt";
                        deprecated = "iure";
                        obsolete = "labore";
                        replacement = "quasi";
                        state = DeprecationStatusStateEnum.OBSOLETE;
                        stateOverride = new RolloutPolicy() {{
                            defaultRolloutTime = "corporis";
                            locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                                put("quibusdam", "dicta");
                                put("voluptatibus", "vero");
                            }};
                        }};;
                    }};;
                    description = "quibusdam";
                    diskSizeGb = "maxime";
                    family = "consequuntur";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                    }};
                    id = "doloremque";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "repellendus";
                        kmsKeyServiceAccount = "ratione";
                        rawKey = "quos";
                        rsaEncryptedKey = "pariatur";
                        sha256 = "quo";
                    }};;
                    kind = "sequi";
                    labelFingerprint = "quo";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ab", "praesentium");
                        put("nostrum", "labore");
                        put("iusto", "sunt");
                        put("tenetur", "occaecati");
                    }};
                    licenseCodes = new String[]{{
                        add("necessitatibus"),
                        add("autem"),
                        add("natus"),
                        add("quasi"),
                    }};
                    licenses = new String[]{{
                        add("ex"),
                        add("error"),
                    }};
                    locked = false;
                    name = "Geoffrey Turner";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "tempora";
                        source = "quaerat";
                    }};;
                    rolloutOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "debitis";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("porro", "blanditiis");
                            put("libero", "sequi");
                            put("laborum", "fugit");
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "totam";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "corporis";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "nisi";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "voluptatibus";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "perferendis";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "quibusdam";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "voluptate";
                            fileType = FileContentBufferFileTypeEnum.X509;
                        }};;
                    }};;
                    sourceDisk = "qui";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "deserunt";
                        kmsKeyServiceAccount = "error";
                        rawKey = "impedit";
                        rsaEncryptedKey = "laudantium";
                        sha256 = "nihil";
                    }};;
                    sourceDiskId = "officia";
                    sourceImage = "repudiandae";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "nemo";
                        kmsKeyServiceAccount = "voluptatem";
                        rawKey = "quod";
                        rsaEncryptedKey = "vitae";
                        sha256 = "vel";
                    }};;
                    sourceImageId = "voluptas";
                    sourceSnapshot = "laboriosam";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "veritatis";
                        kmsKeyServiceAccount = "similique";
                        rawKey = "veritatis";
                        rsaEncryptedKey = "temporibus";
                        sha256 = "excepturi";
                    }};;
                    sourceSnapshotId = "veritatis";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.DELETING;
                    storageLocations = new String[]{{
                        add("similique"),
                        add("molestiae"),
                    }};
                    userLicenses = new String[]{{
                        add("voluptatum"),
                        add("possimus"),
                        add("minima"),
                        add("non"),
                    }};
                }};;
                accessToken = "qui";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "tenetur";
                forceCreate = false;
                key = "velit";
                oauthToken = "asperiores";
                prettyPrint = false;
                quotaUser = "commodi";
                requestId = "voluptas";
                uploadType = "quos";
                uploadProtocol = "esse";
                userIp = "veniam";
            }};            

            ComputeImagesInsertResponse res = sdk.images.computeImagesInsert(req, new ComputeImagesInsertSecurity() {{
                option1 = new ComputeImagesInsertSecurityOption1("fugit", "assumenda") {{
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

            ComputeImagesListRequest req = new ComputeImagesListRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "autem";
                alt = AltEnum.JSON;
                callback = "maxime";
                fields = "nostrum";
                filter = "occaecati";
                key = "asperiores";
                maxResults = 42783L;
                oauthToken = "id";
                orderBy = "veniam";
                pageToken = "ea";
                prettyPrint = false;
                quotaUser = "placeat";
                returnPartialSuccess = false;
                uploadType = "necessitatibus";
                uploadProtocol = "harum";
                userIp = "cumque";
            }};            

            ComputeImagesListResponse res = sdk.images.computeImagesList(req, new ComputeImagesListSecurity() {{
                option1 = new ComputeImagesListSecurityOption1("culpa", "pariatur") {{
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
import org.openapis.openapi.models.shared.RolloutPolicy;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ComputeImagesPatchRequest req = new ComputeImagesPatchRequest("laborum", "consequuntur") {{
                dollarXgafv = XgafvEnum.TWO;
                image1 = new Image() {{
                    architecture = ImageArchitectureEnum.X8664;
                    archiveSizeBytes = "officia";
                    creationTimestamp = "iusto";
                    deprecated = new DeprecationStatus() {{
                        deleted = "natus";
                        deprecated = "ab";
                        obsolete = "deleniti";
                        replacement = "et";
                        state = DeprecationStatusStateEnum.OBSOLETE;
                        stateOverride = new RolloutPolicy() {{
                            defaultRolloutTime = "sint";
                            locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                                put("laboriosam", "molestiae");
                                put("ab", "ex");
                            }};
                        }};;
                    }};;
                    description = "iure";
                    diskSizeGb = "dolorem";
                    family = "minus";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.MULTI_IP_SUBNET;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                    }};
                    id = "nam";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "minima";
                        kmsKeyServiceAccount = "vel";
                        rawKey = "nisi";
                        rsaEncryptedKey = "minima";
                        sha256 = "et";
                    }};;
                    kind = "autem";
                    labelFingerprint = "dolor";
                    labels = new java.util.HashMap<String, String>() {{
                        put("non", "suscipit");
                        put("amet", "deleniti");
                        put("exercitationem", "illo");
                    }};
                    licenseCodes = new String[]{{
                        add("id"),
                    }};
                    licenses = new String[]{{
                        add("fugit"),
                        add("nostrum"),
                        add("magni"),
                    }};
                    locked = false;
                    name = "Melody Medhurst";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "saepe";
                        source = "ipsa";
                    }};;
                    rolloutOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "esse";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("aliquam", "autem");
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "reprehenderit";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "quas";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "modi";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "nam";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "quis";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "libero";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "at";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "quis";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "itaque";
                            fileType = FileContentBufferFileTypeEnum.X509;
                        }};;
                    }};;
                    sourceDisk = "asperiores";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "ratione";
                        kmsKeyServiceAccount = "eos";
                        rawKey = "laborum";
                        rsaEncryptedKey = "sint";
                        sha256 = "incidunt";
                    }};;
                    sourceDiskId = "pariatur";
                    sourceImage = "aspernatur";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aperiam";
                        kmsKeyServiceAccount = "itaque";
                        rawKey = "quo";
                        rsaEncryptedKey = "perspiciatis";
                        sha256 = "accusantium";
                    }};;
                    sourceImageId = "debitis";
                    sourceSnapshot = "animi";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "aliquam";
                        kmsKeyServiceAccount = "quasi";
                        rawKey = "repellendus";
                        rsaEncryptedKey = "architecto";
                        sha256 = "hic";
                    }};;
                    sourceSnapshotId = "labore";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.FAILED;
                    storageLocations = new String[]{{
                        add("saepe"),
                        add("praesentium"),
                    }};
                    userLicenses = new String[]{{
                        add("ab"),
                        add("minima"),
                    }};
                }};;
                accessToken = "nisi";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "a";
                key = "molestiae";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "voluptatibus";
                requestId = "temporibus";
                uploadType = "tenetur";
                uploadProtocol = "nostrum";
                userIp = "tempora";
            }};            

            ComputeImagesPatchResponse res = sdk.images.computeImagesPatch(req, new ComputeImagesPatchSecurity() {{
                option1 = new ComputeImagesPatchSecurityOption1("maiores", "facere") {{
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

            ComputeImagesSetIamPolicyRequest req = new ComputeImagesSetIamPolicyRequest("illum", "exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "sint";
                            condition = new Expr() {{
                                description = "minima";
                                expression = "dolore";
                                location = "sequi";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("voluptatum"),
                                add("illum"),
                                add("laborum"),
                            }};
                            role = "sapiente";
                        }}),
                        add(new Binding() {{
                            bindingId = "soluta";
                            condition = new Expr() {{
                                description = "eius";
                                expression = "dolores";
                                location = "dolorum";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("iure"),
                                add("dolorem"),
                                add("neque"),
                                add("laudantium"),
                            }};
                            role = "quos";
                        }}),
                        add(new Binding() {{
                            bindingId = "saepe";
                            condition = new Expr() {{
                                description = "incidunt";
                                expression = "pariatur";
                                location = "deleniti";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("error"),
                            }};
                            role = "necessitatibus";
                        }}),
                    }};
                    etag = "culpa";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("harum"),
                                            add("sunt"),
                                            add("atque"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("tempora"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("possimus"),
                                            add("nisi"),
                                            add("ab"),
                                            add("omnis"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("iste"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("maxime"),
                                    add("assumenda"),
                                    add("velit"),
                                }};
                                service = "voluptatum";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("doloremque"),
                                            add("assumenda"),
                                            add("nobis"),
                                            add("laboriosam"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("delectus"),
                                            add("quae"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("culpa"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("veniam"),
                                }};
                                service = "provident";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "aut";
                                condition = new Expr() {{
                                    description = "maxime";
                                    expression = "provident";
                                    location = "aperiam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("cum"),
                                }};
                                role = "magnam";
                            }}),
                        }};
                        etag = "natus";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.ALLOW;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.NOT_IN;
                                        svc = "quibusdam";
                                        sys = ConditionSysEnum.NO_ATTR;
                                        values = new String[]{{
                                            add("maxime"),
                                            add("totam"),
                                            add("id"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "vel";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("pariatur"),
                                            add("similique"),
                                            add("quis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "nobis";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("eaque"),
                                            add("quia"),
                                            add("facilis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDS_ASSERTION;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "illo";
                                        sys = ConditionSysEnum.REGION;
                                        values = new String[]{{
                                            add("incidunt"),
                                            add("maiores"),
                                            add("ea"),
                                        }};
                                    }}),
                                }};
                                description = "modi";
                                ins = new String[]{{
                                    add("nisi"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Anthony Ondricka";
                                                    value = "quod";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Faye Braun";
                                                    value = "dolor";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Betsy McCullough";
                                                    value = "culpa";
                                                }}),
                                            }};
                                            field = "tenetur";
                                            metric = "molestias";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.DATA_ACCESS;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Lynda Thiel";
                                                    value = "optio";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Derrick Beer";
                                                    value = "culpa";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Audrey Carter";
                                                    value = "iusto";
                                                }}),
                                            }};
                                            field = "dolorem";
                                            metric = "voluptate";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("rem"),
                                    add("provident"),
                                }};
                                permissions = new String[]{{
                                    add("alias"),
                                }};
                            }}),
                        }};
                        version = 492261;
                    }};;
                }};;
                accessToken = "minima";
                alt = AltEnum.JSON;
                callback = "mollitia";
                fields = "alias";
                key = "sit";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "sint";
                uploadType = "commodi";
                uploadProtocol = "voluptas";
                userIp = "eveniet";
            }};            

            ComputeImagesSetIamPolicyResponse res = sdk.images.computeImagesSetIamPolicy(req, new ComputeImagesSetIamPolicySecurity() {{
                option1 = new ComputeImagesSetIamPolicySecurityOption1("eligendi", "ducimus") {{
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

            ComputeImagesSetLabelsRequest req = new ComputeImagesSetLabelsRequest("dolorem", "eum") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "dolore";
                    labels = new java.util.HashMap<String, String>() {{
                        put("inventore", "omnis");
                    }};
                }};;
                accessToken = "quaerat";
                alt = AltEnum.JSON;
                callback = "omnis";
                fields = "corrupti";
                key = "optio";
                oauthToken = "molestiae";
                prettyPrint = false;
                quotaUser = "atque";
                uploadType = "dolor";
                uploadProtocol = "optio";
                userIp = "cupiditate";
            }};            

            ComputeImagesSetLabelsResponse res = sdk.images.computeImagesSetLabels(req, new ComputeImagesSetLabelsSecurity() {{
                option1 = new ComputeImagesSetLabelsSecurityOption1("quia", "dolor") {{
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

            ComputeImagesTestIamPermissionsRequest req = new ComputeImagesTestIamPermissionsRequest("cupiditate", "praesentium") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("ipsum"),
                        add("pariatur"),
                        add("amet"),
                        add("deserunt"),
                    }};
                }};;
                accessToken = "nobis";
                alt = AltEnum.MEDIA;
                callback = "placeat";
                fields = "est";
                key = "non";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "veniam";
                uploadType = "minus";
                uploadProtocol = "similique";
                userIp = "corrupti";
            }};            

            ComputeImagesTestIamPermissionsResponse res = sdk.images.computeImagesTestIamPermissions(req, new ComputeImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeImagesTestIamPermissionsSecurityOption1("aliquid", "aliquam") {{
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
