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

            ComputeImagesDeleteRequest req = new ComputeImagesDeleteRequest("eaque", "porro") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "omnis";
                alt = AltEnum.PROTO;
                callback = "adipisci";
                fields = "quam";
                key = "fugit";
                oauthToken = "facere";
                prettyPrint = false;
                quotaUser = "libero";
                requestId = "vitae";
                uploadType = "non";
                uploadProtocol = "labore";
                userIp = "incidunt";
            }};            

            ComputeImagesDeleteResponse res = sdk.images.computeImagesDelete(req, new ComputeImagesDeleteSecurity() {{
                option1 = new ComputeImagesDeleteSecurityOption1("tempore", "deserunt") {{
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

            ComputeImagesDeprecateRequest req = new ComputeImagesDeprecateRequest("error", "doloribus") {{
                dollarXgafv = XgafvEnum.ONE;
                deprecationStatus = new DeprecationStatus() {{
                    deleted = "rem";
                    deprecated = "est";
                    obsolete = "quis";
                    replacement = "impedit";
                    state = DeprecationStatusStateEnum.ACTIVE;
                    stateOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "necessitatibus";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("reprehenderit", "laborum");
                            put("officia", "soluta");
                            put("suscipit", "explicabo");
                            put("recusandae", "unde");
                        }};
                    }};;
                }};;
                accessToken = "iusto";
                alt = AltEnum.JSON;
                callback = "ea";
                fields = "architecto";
                key = "earum";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "alias";
                requestId = "quod";
                uploadType = "veniam";
                uploadProtocol = "corrupti";
                userIp = "temporibus";
            }};            

            ComputeImagesDeprecateResponse res = sdk.images.computeImagesDeprecate(req, new ComputeImagesDeprecateSecurity() {{
                option1 = new ComputeImagesDeprecateSecurityOption1("odit", "voluptate") {{
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

            ComputeImagesGetRequest req = new ComputeImagesGetRequest("nobis", "exercitationem") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "ex";
                fields = "tempore";
                key = "minima";
                oauthToken = "expedita";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "expedita";
                uploadProtocol = "quaerat";
                userIp = "accusantium";
            }};            

            ComputeImagesGetResponse res = sdk.images.computeImagesGet(req, new ComputeImagesGetSecurity() {{
                option1 = new ComputeImagesGetSecurityOption1("recusandae", "saepe") {{
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

            ComputeImagesGetFromFamilyRequest req = new ComputeImagesGetFromFamilyRequest("sapiente", "iusto") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "ducimus";
                fields = "animi";
                key = "ducimus";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "voluptatem";
                uploadProtocol = "adipisci";
                userIp = "tempora";
            }};            

            ComputeImagesGetFromFamilyResponse res = sdk.images.computeImagesGetFromFamily(req, new ComputeImagesGetFromFamilySecurity() {{
                option1 = new ComputeImagesGetFromFamilySecurityOption1("modi", "soluta") {{
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

            ComputeImagesGetIamPolicyRequest req = new ComputeImagesGetIamPolicyRequest("inventore", "ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "sit";
                alt = AltEnum.MEDIA;
                callback = "rem";
                fields = "deleniti";
                key = "illum";
                oauthToken = "necessitatibus";
                optionsRequestedPolicyVersion = 878421L;
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "necessitatibus";
                uploadProtocol = "asperiores";
                userIp = "rem";
            }};            

            ComputeImagesGetIamPolicyResponse res = sdk.images.computeImagesGetIamPolicy(req, new ComputeImagesGetIamPolicySecurity() {{
                option1 = new ComputeImagesGetIamPolicySecurityOption1("perspiciatis", "quam") {{
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

            ComputeImagesInsertRequest req = new ComputeImagesInsertRequest("earum") {{
                dollarXgafv = XgafvEnum.ONE;
                image = new Image() {{
                    architecture = ImageArchitectureEnum.X8664;
                    archiveSizeBytes = "pariatur";
                    creationTimestamp = "voluptatem";
                    deprecated = new DeprecationStatus() {{
                        deleted = "quod";
                        deprecated = "minus";
                        obsolete = "pariatur";
                        replacement = "dolor";
                        state = DeprecationStatusStateEnum.ACTIVE;
                        stateOverride = new RolloutPolicy() {{
                            defaultRolloutTime = "tenetur";
                            locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                                put("dicta", "rerum");
                            }};
                        }};;
                    }};;
                    description = "neque";
                    diskSizeGb = "voluptates";
                    family = "aliquam";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_LIVE_MIGRATABLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.BARE_METAL_LINUX_COMPATIBLE;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                    }};
                    id = "officia";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "vitae";
                        kmsKeyServiceAccount = "ipsa";
                        rawKey = "incidunt";
                        rsaEncryptedKey = "architecto";
                        sha256 = "deleniti";
                    }};;
                    kind = "eum";
                    labelFingerprint = "accusamus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("odio", "ullam");
                        put("provident", "officiis");
                        put("ipsa", "eos");
                        put("delectus", "dolor");
                    }};
                    licenseCodes = new String[]{{
                        add("doloremque"),
                        add("consequuntur"),
                    }};
                    licenses = new String[]{{
                        add("quis"),
                        add("cumque"),
                        add("laudantium"),
                        add("recusandae"),
                    }};
                    locked = false;
                    name = "Dr. Janis Donnelly";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "at";
                        source = "dolorem";
                    }};;
                    rolloutOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "sunt";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("incidunt", "maiores");
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "culpa";
                    selfLinkWithId = "dolore";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "iure";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "molestiae";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "sequi";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "minima";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "ut";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "sed";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "laudantium";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "et";
                            fileType = FileContentBufferFileTypeEnum.X509;
                        }};;
                    }};;
                    sourceDisk = "nulla";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "libero";
                        kmsKeyServiceAccount = "sed";
                        rawKey = "hic";
                        rsaEncryptedKey = "eum";
                        sha256 = "sint";
                    }};;
                    sourceDiskId = "eveniet";
                    sourceImage = "veniam";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "unde";
                        kmsKeyServiceAccount = "consequuntur";
                        rawKey = "laboriosam";
                        rsaEncryptedKey = "iusto";
                        sha256 = "quisquam";
                    }};;
                    sourceImageId = "dignissimos";
                    sourceSnapshot = "ab";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "quo";
                        kmsKeyServiceAccount = "optio";
                        rawKey = "voluptatum";
                        rsaEncryptedKey = "pariatur";
                        sha256 = "sequi";
                    }};;
                    sourceSnapshotId = "quo";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.READY;
                    storageLocations = new String[]{{
                        add("fugit"),
                        add("quis"),
                    }};
                    userLicenses = new String[]{{
                        add("temporibus"),
                        add("doloremque"),
                        add("amet"),
                    }};
                }};;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "laborum";
                fields = "quas";
                forceCreate = false;
                key = "odit";
                oauthToken = "placeat";
                prettyPrint = false;
                quotaUser = "rem";
                requestId = "aut";
                uploadType = "atque";
                uploadProtocol = "repellat";
                userIp = "eveniet";
            }};            

            ComputeImagesInsertResponse res = sdk.images.computeImagesInsert(req, new ComputeImagesInsertSecurity() {{
                option1 = new ComputeImagesInsertSecurityOption1("odit", "quam") {{
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

            ComputeImagesListRequest req = new ComputeImagesListRequest("ullam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "laborum";
                alt = AltEnum.JSON;
                callback = "perferendis";
                fields = "incidunt";
                filter = "ducimus";
                key = "quod";
                maxResults = 13223L;
                oauthToken = "numquam";
                orderBy = "numquam";
                pageToken = "omnis";
                prettyPrint = false;
                quotaUser = "repudiandae";
                returnPartialSuccess = false;
                uploadType = "inventore";
                uploadProtocol = "quaerat";
                userIp = "nesciunt";
                zone = "hic";
            }};            

            ComputeImagesListResponse res = sdk.images.computeImagesList(req, new ComputeImagesListSecurity() {{
                option1 = new ComputeImagesListSecurityOption1("natus", "laboriosam") {{
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

            ComputeImagesPatchRequest req = new ComputeImagesPatchRequest("quasi", "excepturi") {{
                dollarXgafv = XgafvEnum.TWO;
                image1 = new Image() {{
                    architecture = ImageArchitectureEnum.X8664;
                    archiveSizeBytes = "in";
                    creationTimestamp = "repellendus";
                    deprecated = new DeprecationStatus() {{
                        deleted = "incidunt";
                        deprecated = "aperiam";
                        obsolete = "vero";
                        replacement = "corporis";
                        state = DeprecationStatusStateEnum.DEPRECATED;
                        stateOverride = new RolloutPolicy() {{
                            defaultRolloutTime = "quae";
                            locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                                put("voluptatibus", "est");
                            }};
                        }};;
                    }};;
                    description = "modi";
                    diskSizeGb = "nesciunt";
                    family = "autem";
                    guestOsFeatures = new org.openapis.openapi.models.shared.GuestOsFeature[]{{
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.FEATURE_TYPE_UNSPECIFIED;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SECURE_BOOT;
                        }}),
                        add(new GuestOsFeature() {{
                            type = GuestOsFeatureTypeEnum.SEV_SNP_CAPABLE;
                        }}),
                    }};
                    id = "explicabo";
                    imageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "velit";
                        kmsKeyServiceAccount = "adipisci";
                        rawKey = "hic";
                        rsaEncryptedKey = "natus";
                        sha256 = "minima";
                    }};;
                    kind = "minus";
                    labelFingerprint = "provident";
                    labels = new java.util.HashMap<String, String>() {{
                        put("explicabo", "adipisci");
                        put("iusto", "ratione");
                        put("omnis", "quam");
                        put("impedit", "iusto");
                    }};
                    licenseCodes = new String[]{{
                        add("nemo"),
                        add("facilis"),
                        add("exercitationem"),
                    }};
                    licenses = new String[]{{
                        add("tempore"),
                        add("magnam"),
                        add("maiores"),
                        add("quis"),
                    }};
                    locked = false;
                    name = "Helen Brown";
                    rawDisk = new ImageRawDisk() {{
                        containerType = ImageRawDiskContainerTypeEnum.TAR;
                        sha1Checksum = "reiciendis";
                        source = "accusamus";
                    }};;
                    rolloutOverride = new RolloutPolicy() {{
                        defaultRolloutTime = "tempore";
                        locationRolloutPolicies = new java.util.HashMap<String, String>() {{
                            put("asperiores", "ea");
                            put("voluptate", "aliquid");
                            put("nobis", "reprehenderit");
                            put("consequuntur", "accusantium");
                        }};
                    }};;
                    satisfiesPzs = false;
                    selfLink = "autem";
                    selfLinkWithId = "pariatur";
                    shieldedInstanceInitialState = new InitialStateConfig() {{
                        dbs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "facilis";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "ad";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "sit";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        dbxs = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "dolorum";
                                fileType = FileContentBufferFileTypeEnum.BIN;
                            }}),
                        }};
                        keks = new org.openapis.openapi.models.shared.FileContentBuffer[]{{
                            add(new FileContentBuffer() {{
                                content = "dolore";
                                fileType = FileContentBufferFileTypeEnum.UNDEFINED;
                            }}),
                            add(new FileContentBuffer() {{
                                content = "officiis";
                                fileType = FileContentBufferFileTypeEnum.X509;
                            }}),
                        }};
                        pk = new FileContentBuffer() {{
                            content = "minus";
                            fileType = FileContentBufferFileTypeEnum.BIN;
                        }};;
                    }};;
                    sourceDisk = "sequi";
                    sourceDiskEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "natus";
                        kmsKeyServiceAccount = "saepe";
                        rawKey = "quibusdam";
                        rsaEncryptedKey = "corrupti";
                        sha256 = "maxime";
                    }};;
                    sourceDiskId = "aliquam";
                    sourceImage = "adipisci";
                    sourceImageEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "explicabo";
                        kmsKeyServiceAccount = "eaque";
                        rawKey = "hic";
                        rsaEncryptedKey = "incidunt";
                        sha256 = "quae";
                    }};;
                    sourceImageId = "eos";
                    sourceSnapshot = "eius";
                    sourceSnapshotEncryptionKey = new CustomerEncryptionKey() {{
                        kmsKeyName = "voluptatem";
                        kmsKeyServiceAccount = "temporibus";
                        rawKey = "aliquam";
                        rsaEncryptedKey = "incidunt";
                        sha256 = "totam";
                    }};;
                    sourceSnapshotId = "iusto";
                    sourceType = ImageSourceTypeEnum.RAW;
                    status = ImageStatusEnum.PENDING;
                    storageLocations = new String[]{{
                        add("voluptas"),
                        add("provident"),
                        add("neque"),
                        add("expedita"),
                    }};
                    userLicenses = new String[]{{
                        add("quaerat"),
                        add("nobis"),
                        add("nesciunt"),
                    }};
                }};;
                accessToken = "quidem";
                alt = AltEnum.MEDIA;
                callback = "fugiat";
                fields = "magni";
                key = "modi";
                oauthToken = "atque";
                prettyPrint = false;
                quotaUser = "blanditiis";
                requestId = "quibusdam";
                uploadType = "odio";
                uploadProtocol = "unde";
                userIp = "ad";
            }};            

            ComputeImagesPatchResponse res = sdk.images.computeImagesPatch(req, new ComputeImagesPatchSecurity() {{
                option1 = new ComputeImagesPatchSecurityOption1("officia", "fuga") {{
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

            ComputeImagesSetIamPolicyRequest req = new ComputeImagesSetIamPolicyRequest("incidunt", "aspernatur") {{
                dollarXgafv = XgafvEnum.TWO;
                globalSetPolicyRequest = new GlobalSetPolicyRequest() {{
                    bindings = new org.openapis.openapi.models.shared.Binding[]{{
                        add(new Binding() {{
                            bindingId = "dolore";
                            condition = new Expr() {{
                                description = "accusantium";
                                expression = "corporis";
                                location = "laboriosam";
                                title = "Mrs.";
                            }};
                            members = new String[]{{
                                add("tenetur"),
                                add("vel"),
                                add("iste"),
                            }};
                            role = "animi";
                        }}),
                        add(new Binding() {{
                            bindingId = "quae";
                            condition = new Expr() {{
                                description = "doloremque";
                                expression = "voluptas";
                                location = "pariatur";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("odit"),
                            }};
                            role = "labore";
                        }}),
                        add(new Binding() {{
                            bindingId = "perspiciatis";
                            condition = new Expr() {{
                                description = "dolore";
                                expression = "ullam";
                                location = "aut";
                                title = "Ms.";
                            }};
                            members = new String[]{{
                                add("natus"),
                            }};
                            role = "fugiat";
                        }}),
                        add(new Binding() {{
                            bindingId = "odio";
                            condition = new Expr() {{
                                description = "quo";
                                expression = "ipsum";
                                location = "cum";
                                title = "Mr.";
                            }};
                            members = new String[]{{
                                add("magnam"),
                                add("illo"),
                                add("atque"),
                            }};
                            role = "magnam";
                        }}),
                    }};
                    etag = "incidunt";
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("saepe"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("nesciunt"),
                                        }};
                                        ignoreChildExemptions = false;
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                exemptedMembers = new String[]{{
                                    add("possimus"),
                                }};
                                service = "perferendis";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                bindingId = "velit";
                                condition = new Expr() {{
                                    description = "repellendus";
                                    expression = "quod";
                                    location = "error";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("doloribus"),
                                }};
                                role = "veniam";
                            }}),
                        }};
                        etag = "animi";
                        rules = new org.openapis.openapi.models.shared.Rule[]{{
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.JUSTIFICATION_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "quo";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("praesentium"),
                                            add("numquam"),
                                        }};
                                    }}),
                                }};
                                description = "iure";
                                ins = new String[]{{
                                    add("itaque"),
                                    add("molestias"),
                                    add("assumenda"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.DATA_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Della Lubowitz";
                                                    value = "consequuntur";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jon Lueilwitz";
                                                    value = "rerum";
                                                }}),
                                            }};
                                            field = "a";
                                            metric = "ad";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Tammy Stehr";
                                                    value = "nesciunt";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Edith Swaniawski IV";
                                                    value = "dignissimos";
                                                }}),
                                            }};
                                            field = "atque";
                                            metric = "animi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
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
                                                    name = "Carrie Klocko";
                                                    value = "enim";
                                                }}),
                                            }};
                                            field = "eveniet";
                                            metric = "commodi";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("iste"),
                                }};
                                permissions = new String[]{{
                                    add("occaecati"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.NO_ACTION;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.DISCHARGED;
                                        svc = "dolore";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("ullam"),
                                            add("quibusdam"),
                                            add("recusandae"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "mollitia";
                                        sys = ConditionSysEnum.SERVICE;
                                        values = new String[]{{
                                            add("ducimus"),
                                            add("eaque"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.CREDENTIALS_TYPE;
                                        op = ConditionOpEnum.IN;
                                        svc = "odio";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("delectus"),
                                            add("et"),
                                            add("optio"),
                                            add("a"),
                                        }};
                                    }}),
                                }};
                                description = "quis";
                                ins = new String[]{{
                                    add("consectetur"),
                                    add("qui"),
                                    add("aliquid"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elvira Jacobson";
                                                    value = "cum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rachel Howe";
                                                    value = "dignissimos";
                                                }}),
                                            }};
                                            field = "facere";
                                            metric = "provident";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("qui"),
                                    add("nulla"),
                                    add("velit"),
                                }};
                                permissions = new String[]{{
                                    add("ipsam"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.DENY;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.APPROVER;
                                        op = ConditionOpEnum.NO_OP;
                                        svc = "error";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("aliquid"),
                                            add("impedit"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.AUTHORITY;
                                        op = ConditionOpEnum.NOT_EQUALS;
                                        svc = "delectus";
                                        sys = ConditionSysEnum.NAME;
                                        values = new String[]{{
                                            add("voluptatum"),
                                            add("dolorum"),
                                        }};
                                    }}),
                                }};
                                description = "officia";
                                ins = new String[]{{
                                    add("est"),
                                    add("quisquam"),
                                    add("officia"),
                                    add("officiis"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_READ;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amanda Reynolds";
                                                    value = "rerum";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jack Schmidt";
                                                    value = "quam";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Amanda Jacobson";
                                                    value = "accusantium";
                                                }}),
                                            }};
                                            field = "sed";
                                            metric = "minus";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("voluptates"),
                                    add("alias"),
                                    add("placeat"),
                                }};
                                permissions = new String[]{{
                                    add("possimus"),
                                    add("iste"),
                                }};
                            }}),
                            add(new Rule() {{
                                action = RuleActionEnum.LOG;
                                conditions = new org.openapis.openapi.models.shared.Condition[]{{
                                    add(new Condition() {{
                                        iam = ConditionIamEnum.ATTRIBUTION;
                                        op = ConditionOpEnum.EQUALS;
                                        svc = "repellat";
                                        sys = ConditionSysEnum.IP;
                                        values = new String[]{{
                                            add("est"),
                                            add("autem"),
                                            add("sequi"),
                                        }};
                                    }}),
                                }};
                                description = "officiis";
                                ins = new String[]{{
                                    add("occaecati"),
                                    add("optio"),
                                    add("asperiores"),
                                    add("et"),
                                }};
                                logConfigs = new org.openapis.openapi.models.shared.LogConfig[]{{
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
                                                    name = "Cedric Renner";
                                                    value = "inventore";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Elijah Connelly";
                                                    value = "numquam";
                                                }}),
                                            }};
                                            field = "culpa";
                                            metric = "aliquam";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.UNSPECIFIED_LOG_NAME;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Harold Blick";
                                                    value = "fugiat";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Jorge Grady";
                                                    value = "officia";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Vivian Huels";
                                                    value = "iusto";
                                                }}),
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Rachael Kunde";
                                                    value = "natus";
                                                }}),
                                            }};
                                            field = "accusamus";
                                            metric = "repellat";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.PERMISSION_TYPE_UNSPECIFIED;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Myron Jones";
                                                    value = "ea";
                                                }}),
                                            }};
                                            field = "aspernatur";
                                            metric = "consequatur";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_MODE_UNSPECIFIED;
                                        }};
                                    }}),
                                    add(new LogConfig() {{
                                        cloudAudit = new LogConfigCloudAuditOptions() {{
                                            authorizationLoggingOptions = new AuthorizationLoggingOptions() {{
                                                permissionType = AuthorizationLoggingOptionsPermissionTypeEnum.ADMIN_WRITE;
                                            }};
                                            logName = LogConfigCloudAuditOptionsLogNameEnum.ADMIN_ACTIVITY;
                                        }};
                                        counter = new LogConfigCounterOptions() {{
                                            customFields = new org.openapis.openapi.models.shared.LogConfigCounterOptionsCustomField[]{{
                                                add(new LogConfigCounterOptionsCustomField() {{
                                                    name = "Dr. Santos Douglas";
                                                    value = "sequi";
                                                }}),
                                            }};
                                            field = "temporibus";
                                            metric = "cum";
                                        }};
                                        dataAccess = new LogConfigDataAccessOptions() {{
                                            logMode = LogConfigDataAccessOptionsLogModeEnum.LOG_FAIL_CLOSED;
                                        }};
                                    }}),
                                }};
                                notIns = new String[]{{
                                    add("aspernatur"),
                                }};
                                permissions = new String[]{{
                                    add("similique"),
                                    add("id"),
                                    add("exercitationem"),
                                    add("commodi"),
                                }};
                            }}),
                        }};
                        version = 341359;
                    }};;
                }};;
                accessToken = "delectus";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "repellat";
                key = "suscipit";
                oauthToken = "veniam";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repudiandae";
                uploadProtocol = "nam";
                userIp = "libero";
            }};            

            ComputeImagesSetIamPolicyResponse res = sdk.images.computeImagesSetIamPolicy(req, new ComputeImagesSetIamPolicySecurity() {{
                option1 = new ComputeImagesSetIamPolicySecurityOption1("perspiciatis", "illum") {{
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

            ComputeImagesSetLabelsRequest req = new ComputeImagesSetLabelsRequest("dolor", "praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                globalSetLabelsRequest = new GlobalSetLabelsRequest() {{
                    labelFingerprint = "deleniti";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corrupti", "ducimus");
                    }};
                }};;
                accessToken = "molestias";
                alt = AltEnum.JSON;
                callback = "fugit";
                fields = "labore";
                key = "neque";
                oauthToken = "cum";
                prettyPrint = false;
                quotaUser = "sed";
                uploadType = "error";
                uploadProtocol = "ratione";
                userIp = "facere";
            }};            

            ComputeImagesSetLabelsResponse res = sdk.images.computeImagesSetLabels(req, new ComputeImagesSetLabelsSecurity() {{
                option1 = new ComputeImagesSetLabelsSecurityOption1("est", "soluta") {{
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

            ComputeImagesTestIamPermissionsRequest req = new ComputeImagesTestIamPermissionsRequest("neque", "perferendis") {{
                dollarXgafv = XgafvEnum.TWO;
                testPermissionsRequest = new TestPermissionsRequest() {{
                    permissions = new String[]{{
                        add("dicta"),
                        add("iure"),
                        add("doloribus"),
                    }};
                }};;
                accessToken = "corporis";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "quibusdam";
                key = "animi";
                oauthToken = "alias";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "porro";
                uploadProtocol = "voluptatum";
                userIp = "libero";
            }};            

            ComputeImagesTestIamPermissionsResponse res = sdk.images.computeImagesTestIamPermissions(req, new ComputeImagesTestIamPermissionsSecurity() {{
                option1 = new ComputeImagesTestIamPermissionsSecurityOption1("quasi", "quidem") {{
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
