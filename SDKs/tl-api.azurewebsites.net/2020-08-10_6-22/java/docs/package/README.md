# package_

### Available Operations

* [packageDelete](#packagedelete) - Delete existing package
            
* [packageGet](#packageget) - Get package details by packageId
            
* [packagePost](#packagepost) - Insert new package into the system
            
* [packagePut](#packageput) - Update existing package by its ID
            
* [packageSearch](#packagesearch) - Search packages
            
* [packageUpdateStatus](#packageupdatestatus) - Status update of existing package 

## packageDelete

Delete existing package
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageDeleteRequest;
import org.openapis.openapi.models.operations.PackageDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageDeleteRequest req = new PackageDeleteRequest() {{
                packageId = 846409;
            }};            

            PackageDeleteResponse res = sdk.package_.packageDelete(req);

            if (res.defaultResponseDTOOfBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageGet

Get package details by packageId
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageGetRequest;
import org.openapis.openapi.models.operations.PackageGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageGetRequest req = new PackageGetRequest() {{
                packageId = 699479;
            }};            

            PackageGetResponse res = sdk.package_.packageGet(req);

            if (res.defaultResponseDTOOfPackageDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packagePost

Insert new package into the system
            

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackagePostResponse;
import org.openapis.openapi.models.shared.GymDTO;
import org.openapis.openapi.models.shared.PackageDTO;
import org.openapis.openapi.models.shared.PackageItemDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PackageDTO req = new PackageDTO("magnam", "cumque", 8137.98, 4118.2) {{
                addOns = new org.openapis.openapi.models.shared.PackageItemDTO[]{{
                    add(new PackageItemDTO(588465) {{
                        articleId = 675439;
                        articleName = "accusamus";
                        articleNumber = 249796;
                        articlePrice = 5812.73;
                        endOrder = 313218;
                        isIncludeServiceInCharge = false;
                        measureUnit = "accusamus";
                        numberOfItems = 9654.17;
                        startOrder = 692532;
                    }}),
                    add(new PackageItemDTO(423855) {{
                        articleId = 725255;
                        articleName = "id";
                        articleNumber = 501324;
                        articlePrice = 5332.06;
                        endOrder = 956084;
                        isIncludeServiceInCharge = false;
                        measureUnit = "amet";
                        numberOfItems = 6439.9;
                        startOrder = 394869;
                    }}),
                }};
                addonFee = 6188.09;
                applyForAllGyms = false;
                availableGyms = new org.openapis.openapi.models.shared.GymDTO[]{{
                    add(new GymDTO() {{
                        externalGymNumber = 474867;
                        gymId = 19193;
                        gymName = "nihil";
                        location = "magnam";
                    }}),
                    add(new GymDTO() {{
                        externalGymNumber = 716075;
                        gymId = 660174;
                        gymName = "labore";
                        location = "labore";
                    }}),
                    add(new GymDTO() {{
                        externalGymNumber = 383462;
                        gymId = 618016;
                        gymName = "nobis";
                        location = "eum";
                    }}),
                }};
                bindingPeriod = 878453;
                createdDate = OffsetDateTime.parse("2022-11-24T10:55:00.183Z");
                createdUser = "magnam";
                description = "et";
                endDate = OffsetDateTime.parse("2022-04-17T13:06:08.135Z");
                expireInMonths = 590873;
                features = "quos";
                freeMonths = 574325;
                instructionsToGymUsers = "accusantium";
                instructionsToWebUsers = "mollitia";
                isActive = false;
                isAtg = false;
                isAutoRenew = false;
                isFirstMonthFree = false;
                isRegistrationFee = false;
                isRestAmount = false;
                isShownInMobile = false;
                isSponsorPackage = false;
                maximumGiveAwayRestAmount = 9689.62;
                memberCanAddAddOns = false;
                memberCanLeaveWithinFreePeriod = false;
                memberCanRemoveAddOns = false;
                modifiedDate = OffsetDateTime.parse("2022-05-11T16:07:41.164Z");
                modifiedUser = "eum";
                monthlyFee = 2212.62;
                nextPackageNumber = 896547;
                numberOfInstallments = 141264;
                numberOfVisits = 367562;
                packageId = 97260;
                packageNumber = "iure";
                perVisitPrice = 9840.43;
                shownInWeb = false;
                startDate = OffsetDateTime.parse("2022-03-21T22:14:24.691Z");
                tags = "maxime";
                totalPrice = 5370.23;
            }};            

            PackagePostResponse res = sdk.package_.packagePost(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packagePut

Update existing package by its ID
            

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackagePutResponse;
import org.openapis.openapi.models.shared.GymDTO;
import org.openapis.openapi.models.shared.PackageDTO;
import org.openapis.openapi.models.shared.PackageItemDTO;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PackageDTO req = new PackageDTO("in", "architecto", 995.69, 9194.83) {{
                addOns = new org.openapis.openapi.models.shared.PackageItemDTO[]{{
                    add(new PackageItemDTO(162493) {{
                        articleId = 714242;
                        articleName = "nihil";
                        articleNumber = 998848;
                        articlePrice = 8411.4;
                        endOrder = 149448;
                        isIncludeServiceInCharge = false;
                        measureUnit = "saepe";
                        numberOfItems = 8681.26;
                        startOrder = 37559;
                    }}),
                    add(new PackageItemDTO(411397) {{
                        articleId = 508315;
                        articleName = "natus";
                        articleNumber = 166847;
                        articlePrice = 1238.2;
                        endOrder = 779051;
                        isIncludeServiceInCharge = false;
                        measureUnit = "illum";
                        numberOfItems = 8649.34;
                        startOrder = 807319;
                    }}),
                }};
                addonFee = 5691.01;
                applyForAllGyms = false;
                availableGyms = new org.openapis.openapi.models.shared.GymDTO[]{{
                    add(new GymDTO() {{
                        externalGymNumber = 407183;
                        gymId = 33222;
                        gymName = "ab";
                        location = "maiores";
                    }}),
                }};
                bindingPeriod = 697429;
                createdDate = OffsetDateTime.parse("2022-07-19T10:57:57.489Z");
                createdUser = "autem";
                description = "nam";
                endDate = OffsetDateTime.parse("2022-02-18T18:29:26.833Z");
                expireInMonths = 365496;
                features = "voluptatibus";
                freeMonths = 16627;
                instructionsToGymUsers = "fugiat";
                instructionsToWebUsers = "amet";
                isActive = false;
                isAtg = false;
                isAutoRenew = false;
                isFirstMonthFree = false;
                isRegistrationFee = false;
                isRestAmount = false;
                isShownInMobile = false;
                isSponsorPackage = false;
                maximumGiveAwayRestAmount = 117.14;
                memberCanAddAddOns = false;
                memberCanLeaveWithinFreePeriod = false;
                memberCanRemoveAddOns = false;
                modifiedDate = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
                modifiedUser = "hic";
                monthlyFee = 7299.91;
                nextPackageNumber = 749999;
                numberOfInstallments = 171629;
                numberOfVisits = 339404;
                packageId = 521037;
                packageNumber = "dignissimos";
                perVisitPrice = 543.38;
                shownInWeb = false;
                startDate = OffsetDateTime.parse("2022-10-20T00:01:48.775Z");
                tags = "eos";
                totalPrice = 185.21;
            }};            

            PackagePutResponse res = sdk.package_.packagePut(req);

            if (res.defaultResponseDTOOfStatusDTO != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageSearch

Search packages
            

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageSearchRequest;
import org.openapis.openapi.models.operations.PackageSearchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageSearchRequest req = new PackageSearchRequest() {{
                activeStatus = 793698;
                categoryId = 463451;
                endPrice = 2239.24;
                gymId = 874573;
                limit = 345352;
                offset = 944120;
                orderBy = "recusandae";
                requestSource = 608253;
                searchText = "facilis";
                startpPrice = 5966.56;
                type = "voluptatem";
            }};            

            PackageSearchResponse res = sdk.package_.packageSearch(req);

            if (res.defaultResponseDTOOfPackageSearchDTOS != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## packageUpdateStatus

Status update of existing package 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PackageUpdateStatusRequest;
import org.openapis.openapi.models.operations.PackageUpdateStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    bearer = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PackageUpdateStatusRequest req = new PackageUpdateStatusRequest() {{
                packageId = 164694;
                status = 500026;
                userName = "Lillie_Beatty";
            }};            

            PackageUpdateStatusResponse res = sdk.package_.packageUpdateStatus(req);

            if (res.defaultResponseDTOOfBoolean != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
