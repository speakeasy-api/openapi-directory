# user

### Available Operations

* [approveVendorApplication](#approvevendorapplication)
* [createUser](#createuser) - Create a new user
* [deleteAccount](#deleteaccount) - Delete your account
* [deleteUserAccount](#deleteuseraccount) - Delete requester account
* [downgradeProofreader](#downgradeproofreader)
* [downgradeUserProofreader](#downgradeuserproofreader)
* [freezeAccount](#freezeaccount) - Freeze account
* [freezeUserAccount](#freezeuseraccount) - Freeze requester account for project notifications
* [getAllVendorTags](#getallvendortags) - Returns all vendor tags for vendors filter
* [getEarnings](#getearnings) - View your vendor earnings
* [getFilteredVendors](#getfilteredvendors) - Filter vendors based on provided parameters
* [getMe](#getme) - View your account info
* [getPaymentInfo](#getpaymentinfo) - View your payment and billing info
* [getPermissions](#getpermissions) - View your permissions
* [getResponsivity](#getresponsivity) - View your vendor responsiveness
* [getStats](#getstats) - View your account statistics
* [getThisUserGroups](#getthisusergroups) - Returns a list of user groups that this user belongs to.
* [getUser](#getuser) - Get user information, including client or vendor specific info.
* [getUserEarnings](#getuserearnings) - Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
* [getUserGroups](#getusergroups) - View your user groups
* [getUserPaymentInfo](#getuserpaymentinfo) - View user's payment and billing info
* [getUserPermissions](#getuserpermissions) - Returns a list of permissions that this user is authorized for.
* [getUserPopularPairs](#getuserpopularpairs) - Returns the language pairs that the user has ordered most.
* [getUserProjectStats](#getuserprojectstats) - Returns a user's project statistics.
* [getUserResponsivity](#getuserresponsivity) - Returns a user's vendor responsivity stats
* [getUserStats](#getuserstats) - Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
* [getUsers](#getusers) - Get a list of platform users
* [logLocation](#loglocation) - Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
* [makeProofreader](#makeproofreader)
* [makeUserProofreader](#makeuserproofreader)
* [rejectVendorApplication](#rejectvendorapplication)
* [sendEmailConfirmation](#sendemailconfirmation) - Sends email confirmation email for current user
* [sendPasswordReminder](#sendpasswordreminder) - Sends password reset email to the user's registered email address
* [sendUserEmailConfirmation](#senduseremailconfirmation) - Sends email confirmation email for a user
* [subscribeNotification](#subscribenotification) - Subscribe to push notifications
* [subscribeUserNotification](#subscribeusernotification)
* [suspendUser](#suspenduser)
* [unfreezeAccount](#unfreezeaccount) - Defreeze your account
* [unfreezeUserAccount](#unfreezeuseraccount) - Unfreeze requester account for project notifications
* [unsubscribeNotification](#unsubscribenotification)
* [unsubscribeUserNotification](#unsubscribeusernotification)
* [updateMe](#updateme) - Update your account info
* [updatePassword](#updatepassword) - Update your account password
* [updatePaymentInfo](#updatepaymentinfo) - Update payment info
* [updateUser](#updateuser)
* [updateUserGroup](#updateusergroup)
* [updateUserPaymentInfo](#updateuserpaymentinfo) - Update user payment info
* [uploadProfilePictureJson](#uploadprofilepicturejson) - Upload profile picture
* [uploadProfilePictureMultipart](#uploadprofilepicturemultipart) - Upload profile picture
* [uploadUserProfilePictureJson](#uploaduserprofilepicturejson)
* [uploadUserProfilePictureMultipart](#uploaduserprofilepicturemultipart)

## approveVendorApplication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApproveVendorApplicationRequest;
import org.openapis.openapi.models.operations.ApproveVendorApplicationResponse;
import org.openapis.openapi.models.operations.ApproveVendorApplicationSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApproveVendorApplicationRequest req = new ApproveVendorApplicationRequest(693957L);            

            ApproveVendorApplicationResponse res = sdk.user.approveVendorApplication(req, new ApproveVendorApplicationSecurity("maxime") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUser

Create a new platform user

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.BillingAddress;
import org.openapis.openapi.models.shared.Href;
import org.openapis.openapi.models.shared.LanguagePair;
import org.openapis.openapi.models.shared.ProfileSurvey;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SocialMedia;
import org.openapis.openapi.models.shared.User;
import org.openapis.openapi.models.shared.UserClient;
import org.openapis.openapi.models.shared.UserClientCorporate;
import org.openapis.openapi.models.shared.UserGroup;
import org.openapis.openapi.models.shared.UserLinks;
import org.openapis.openapi.models.shared.UserVendor;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest() {{
                user = new User() {{
                    billing = new BillingAddress() {{
                        city = "Danniehaven";
                        country = "Iran";
                        name = "Evan Torphy";
                        phone = "(414) 958-6539 x5519";
                        state = "dolorum";
                        street = "290 Buckridge Burgs";
                        zip = "beatae";
                    }};;
                    birthday = LocalDate.parse("2022-09-07");
                    canWorkManualFiles = false;
                    city = "East Vanessa";
                    client = new UserClient() {{
                        corporate = new UserClientCorporate() {{
                            email = "Elinore58@yahoo.com";
                            id = 886305L;
                            logo = "perspiciatis";
                            name = "Sylvia Upton";
                            phoneNumber = "fugit";
                        }};;
                        nps = 6611.18;
                        subjects = new java.util.HashMap<String, Long>() {{
                            put("reprehenderit", 625528L);
                            put("illo", 361306L);
                        }};
                    }};;
                    corporateId = 696463L;
                    country = "Turkey";
                    createdAt = 247399L;
                    doNotContact = false;
                    email = "Aliya51@hotmail.com";
                    firstName = "Angelica";
                    hasPwd = false;
                    id = 474668L;
                    isClient = false;
                    isDeveloper = false;
                    isProofreader = false;
                    isProspect = false;
                    isSalesPerson = false;
                    isVendor = false;
                    languagePairs = new org.openapis.openapi.models.shared.LanguagePair[]{{
                        add(new LanguagePair() {{
                            sourceLanguage = "qui";
                            targetLanguage = "cum";
                        }}),
                        add(new LanguagePair() {{
                            sourceLanguage = "iure";
                            targetLanguage = "necessitatibus";
                        }}),
                        add(new LanguagePair() {{
                            sourceLanguage = "ratione";
                            targetLanguage = "laborum";
                        }}),
                        add(new LanguagePair() {{
                            sourceLanguage = "distinctio";
                            targetLanguage = "voluptatum";
                        }}),
                    }};
                    lastName = "Ledner";
                    lastSeenOnlineAt = 304446L;
                    links = new UserLinks() {{
                        loginAs = new Href() {{
                            href = "ad";
                        }};;
                        projects = new Href() {{
                            href = "repellat";
                        }};;
                        responsivity = new Href() {{
                            href = "alias";
                        }};;
                        self = new Href() {{
                            href = "corporis";
                        }};;
                        stats = new Href() {{
                            href = "perspiciatis";
                        }};;
                    }};;
                    locale = "nihil";
                    mailing = new Address() {{
                        city = "Hodkiewicztown";
                        country = "Wallis and Futuna";
                        phone = "363.462.0963 x44262";
                        state = "debitis";
                        street = "4394 Hauck Keys";
                        zip = "reiciendis";
                    }};;
                    name = "Miss Bruce Hermann";
                    nativeLanguage = "mollitia";
                    nps = 5910.27;
                    phoneNumber = "possimus";
                    profilePicturePath = "animi";
                    socialMedia = new SocialMedia() {{
                        facebookUrl = "ex";
                        linkedInUrl = "aliquid";
                        twitterUrl = "accusantium";
                    }};;
                    state = "repellat";
                    status = "doloribus";
                    street = "4796 Schulist Fords";
                    timezone = "voluptatibus";
                    tmsUserName = "molestias";
                    userGroups = new org.openapis.openapi.models.shared.UserGroup[]{{
                        add(new UserGroup() {{
                            corporateId = 956933L;
                            id = 764562L;
                            name = "Luz Goldner Sr.";
                            permissions = new String[]{{
                                add("quae"),
                                add("perferendis"),
                                add("velit"),
                                add("aspernatur"),
                            }};
                        }}),
                        add(new UserGroup() {{
                            corporateId = 432281L;
                            id = 260628L;
                            name = "Wilfred Rutherford";
                            permissions = new String[]{{
                                add("dicta"),
                                add("minima"),
                            }};
                        }}),
                        add(new UserGroup() {{
                            corporateId = 107004L;
                            id = 583404L;
                            name = "Darin Rodriguez";
                            permissions = new String[]{{
                                add("earum"),
                            }};
                        }}),
                        add(new UserGroup() {{
                            corporateId = 596211L;
                            id = 983427L;
                            name = "Gene Sauer";
                            permissions = new String[]{{
                                add("cumque"),
                            }};
                        }}),
                    }};
                    vendor = new UserVendor() {{
                        canWorkManualFiles = false;
                        emailOpenRate = 6849.35;
                        isFrozen = false;
                        isProofreader = false;
                        languagePairs = new org.openapis.openapi.models.shared.LanguagePair[]{{
                            add(new LanguagePair() {{
                                sourceLanguage = "animi";
                                targetLanguage = "necessitatibus";
                            }}),
                        }};
                        nativeLanguage = "nulla";
                        pamTqs = 89.31;
                        paypalEmail = "quasi";
                        profileSurvey = new ProfileSurvey() {{
                            currentServices = "et";
                            dailyProofreadingCapacity = "ducimus";
                            dailyTranslationCapacity = "natus";
                            dtpSoftware = "occaecati";
                            experience = "suscipit";
                            isCertifiedTranslator = "adipisci";
                            isSwornTranslator = "quasi";
                            memoq = "magni";
                            memsource = "doloribus";
                            omegat = "nulla";
                            proofreaderExperience = "necessitatibus";
                            providesCreativeWritingService = "ipsa";
                            providesPosteditService = "tempora";
                            reference = "nihil";
                            sdlTrados = "molestiae";
                            skypeId = "dicta";
                            smartcat = "iusto";
                            smartling = "esse";
                            software = "praesentium";
                            specialization = "maiores";
                            subtitleEdit = "reiciendis";
                            subtitleWorkshop = "vel";
                            translatorAssociation = "architecto";
                            transsuite2000 = "fugiat";
                            vendorProfileLsp = "doloremque";
                            wordbee = "dicta";
                            wordfast = "odio";
                            workType = "tempora";
                            workWith = "esse";
                            workingAs = "ex";
                            workingTimezone = "consectetur";
                            xbench = "aliquid";
                            xtm = "ipsa";
                        }};;
                        require1099 = false;
                        tags = new String[]{{
                            add("sunt"),
                            add("nostrum"),
                            add("fugiat"),
                        }};
                        tmsUserName = "expedita";
                        vendorType = "aliquid";
                    }};;
                    zipCode = "33043-6606";
                }};;
                notify = false;
            }};            

            CreateUserResponse res = sdk.user.createUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccount

Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteAccountResponse res = sdk.user.deleteAccount();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUserAccount

Delete requester account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserAccountRequest;
import org.openapis.openapi.models.operations.DeleteUserAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteUserAccountRequest req = new DeleteUserAccountRequest(653421L);            

            DeleteUserAccountResponse res = sdk.user.deleteUserAccount(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downgradeProofreader

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DowngradeProofreaderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DowngradeProofreaderResponse res = sdk.user.downgradeProofreader();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## downgradeUserProofreader

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DowngradeUserProofreaderRequest;
import org.openapis.openapi.models.operations.DowngradeUserProofreaderResponse;
import org.openapis.openapi.models.operations.DowngradeUserProofreaderSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DowngradeUserProofreaderRequest req = new DowngradeUserProofreaderRequest(726343L);            

            DowngradeUserProofreaderResponse res = sdk.user.downgradeUserProofreader(req, new DowngradeUserProofreaderSecurity("ad") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## freezeAccount

Freeze your account temporarily, especially to stop receiving project notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FreezeAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            FreezeAccountResponse res = sdk.user.freezeAccount();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## freezeUserAccount

Freeze requester account for project notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FreezeUserAccountRequest;
import org.openapis.openapi.models.operations.FreezeUserAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            FreezeUserAccountRequest req = new FreezeUserAccountRequest(110477L);            

            FreezeUserAccountResponse res = sdk.user.freezeUserAccount(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllVendorTags

Returns all vendor tags for vendors filter

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllVendorTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetAllVendorTagsResponse res = sdk.user.getAllVendorTags();

            if (res.vendorTags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEarnings

View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEarningsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetEarningsResponse res = sdk.user.getEarnings();

            if (res.earnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFilteredVendors

Get a list of vendors available for the criteria given

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFilteredVendorsRequest;
import org.openapis.openapi.models.operations.GetFilteredVendorsResponse;
import org.openapis.openapi.models.shared.FilterVendorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetFilteredVendorsRequest req = new GetFilteredVendorsRequest() {{
                filterVendorRequest = new FilterVendorRequest() {{
                    clients = new Long[]{{
                        add(281153L),
                        add(321043L),
                    }};
                    communicationChannel = new String[]{{
                        add("voluptatem"),
                        add("molestias"),
                        add("cum"),
                    }};
                    corporateIdsForAuth = new Long[]{{
                        add(109784L),
                        add(530860L),
                    }};
                    corporates = new Long[]{{
                        add(85233L),
                        add(703218L),
                        add(665678L),
                    }};
                    country = new String[]{{
                        add("voluptatem"),
                        add("sapiente"),
                        add("officiis"),
                    }};
                    createdAt = "architecto";
                    currentServices = new String[]{{
                        add("pariatur"),
                        add("debitis"),
                        add("voluptatem"),
                    }};
                    dailyProofreadingCapacity = 1207L;
                    dailyTranslationCapacity = 534917L;
                    destinationLanguages = new Long[]{{
                        add(404244L),
                        add(958308L),
                        add(524184L),
                        add(796320L),
                    }};
                    dtpSoftware = new String[]{{
                        add("asperiores"),
                        add("ratione"),
                    }};
                    emailAddress = "ullam";
                    experience = new String[]{{
                        add("illum"),
                    }};
                    firstName = "Joshua";
                    id = new Long[]{{
                        add(842777L),
                        add(720528L),
                        add(373216L),
                        add(633415L),
                    }};
                    isCertifiedTranslator = false;
                    isSwornTranslator = false;
                    languagePairs = new Long[][]{{
                        add(new Long[]{{
                            add(80532L),
                            add(537279L),
                        }}),
                    }};
                    lastName = "Bogan";
                    lastOnline = "tempora";
                    lastWorked = "dolor";
                    memoq = 8689L;
                    memsource = 100014L;
                    minTqs = 249.44;
                    omegat = 265039L;
                    projectCount = 144286L;
                    proofreaderExperience = 66149L;
                    providesCreativeWritingService = false;
                    providesPosteditService = false;
                    quoteFileSubjects = new String[]{{
                        add("quae"),
                        add("dolor"),
                        add("fugiat"),
                    }};
                    reference = "ipsam";
                    sdlTrados = 162120L;
                    search = "ipsa";
                    skypeId = "quas";
                    smartcat = 911198L;
                    smartling = 773456L;
                    sourceLanguages = new Long[]{{
                        add(456410L),
                        add(897277L),
                        add(153369L),
                        add(332191L),
                    }};
                    specialization = new String[]{{
                        add("expedita"),
                    }};
                    status = new String[]{{
                        add("vel"),
                        add("voluptatum"),
                    }};
                    subtitleEdit = 301692L;
                    subtitleWorkshop = 349440L;
                    translatorAssociation = "ab";
                    transsuite2000 = 781480L;
                    userWorkingTimezone = new String[]{{
                        add("nobis"),
                        add("laboriosam"),
                    }};
                    vendorProfileLsp = "recusandae";
                    vendorTags = new String[]{{
                        add("voluptatem"),
                    }};
                    vendorType = new String[]{{
                        add("necessitatibus"),
                        add("quasi"),
                    }};
                    vendorWorkingTimezone = new String[]{{
                        add("at"),
                        add("vero"),
                    }};
                    wordCount = 667593L;
                    wordbee = 690785L;
                    wordfast = 192718L;
                    workType = "doloribus";
                    workWith = "repudiandae";
                    workingAs = new String[]{{
                        add("occaecati"),
                        add("nemo"),
                        add("voluptate"),
                        add("blanditiis"),
                    }};
                    xbench = 642352L;
                    xtm = 376389L;
                }};;
                order = "numquam";
                orderBy = "nemo";
                page = 551079L;
                perPage = 260904L;
            }};            

            GetFilteredVendorsResponse res = sdk.user.getFilteredVendors(req);

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMe

Get your user information, including client, corporate account and vendor account information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetMeResponse res = sdk.user.getMe();

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPaymentInfoResponse res = sdk.user.getPaymentInfo();

            if (res.paymentInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPermissions

View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetPermissionsResponse res = sdk.user.getPermissions();

            if (res.permissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResponsivity

View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResponsivityPeriodEnum;
import org.openapis.openapi.models.operations.GetResponsivityRequest;
import org.openapis.openapi.models.operations.GetResponsivityResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetResponsivityRequest req = new GetResponsivityRequest() {{
                period = GetResponsivityPeriodEnum.WEEKLY;
            }};            

            GetResponsivityResponse res = sdk.user.getResponsivity(req);

            if (res.responsivityList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStats

View your client and vendor statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetStatsResponse res = sdk.user.getStats();

            if (res.stats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThisUserGroups

Returns a list of user groups that this user belongs to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThisUserGroupsRequest;
import org.openapis.openapi.models.operations.GetThisUserGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetThisUserGroupsRequest req = new GetThisUserGroupsRequest(524380L);            

            GetThisUserGroupsResponse res = sdk.user.getThisUserGroups(req);

            if (res.userGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Get user information, including client or vendor specific info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequest req = new GetUserRequest(851854L);            

            GetUserResponse res = sdk.user.getUser(req, new GetUserSecurity("dicta") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserEarnings

Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserEarningsRequest;
import org.openapis.openapi.models.operations.GetUserEarningsResponse;
import org.openapis.openapi.models.operations.GetUserEarningsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserEarningsRequest req = new GetUserEarningsRequest(395544L);            

            GetUserEarningsResponse res = sdk.user.getUserEarnings(req, new GetUserEarningsSecurity("consequuntur") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.earnings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserGroups

View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserGroupsResponse res = sdk.user.getUserGroups();

            if (res.userGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPaymentInfo

Returns billing and saved credit card information for user, and their corporate account if present & allowed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPaymentInfoRequest;
import org.openapis.openapi.models.operations.GetUserPaymentInfoResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aperiam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserPaymentInfoRequest req = new GetUserPaymentInfoRequest(585432L);            

            GetUserPaymentInfoResponse res = sdk.user.getUserPaymentInfo(req);

            if (res.paymentInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPermissions

Returns a list of permissions that this user is authorized for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPermissionsRequest;
import org.openapis.openapi.models.operations.GetUserPermissionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUserPermissionsRequest req = new GetUserPermissionsRequest(746837L);            

            GetUserPermissionsResponse res = sdk.user.getUserPermissions(req);

            if (res.permissionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPopularPairs

Returns the language pairs that the user has ordered most.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPopularPairsRequest;
import org.openapis.openapi.models.operations.GetUserPopularPairsResponse;
import org.openapis.openapi.models.operations.GetUserPopularPairsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserPopularPairsRequest req = new GetUserPopularPairsRequest(3860L);            

            GetUserPopularPairsResponse res = sdk.user.getUserPopularPairs(req, new GetUserPopularPairsSecurity("omnis") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.popularLanguagePairs != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserProjectStats

Returns a user's project statistics.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserProjectStatsRequest;
import org.openapis.openapi.models.operations.GetUserProjectStatsResponse;
import org.openapis.openapi.models.operations.GetUserProjectStatsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserProjectStatsRequest req = new GetUserProjectStatsRequest(178580L);            

            GetUserProjectStatsResponse res = sdk.user.getUserProjectStats(req, new GetUserProjectStatsSecurity("occaecati") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.clientProjectStats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserResponsivity

Returns a user's vendor responsivity stats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserResponsivityPeriodEnum;
import org.openapis.openapi.models.operations.GetUserResponsivityRequest;
import org.openapis.openapi.models.operations.GetUserResponsivityResponse;
import org.openapis.openapi.models.operations.GetUserResponsivitySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserResponsivityRequest req = new GetUserResponsivityRequest(612867L) {{
                period = GetUserResponsivityPeriodEnum.MONTHLY;
            }};            

            GetUserResponsivityResponse res = sdk.user.getUserResponsivity(req, new GetUserResponsivitySecurity("inventore") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.responsivityList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserStats

Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserStatsRequest;
import org.openapis.openapi.models.operations.GetUserStatsResponse;
import org.openapis.openapi.models.operations.GetUserStatsSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserStatsRequest req = new GetUserStatsRequest(686362L);            

            GetUserStatsResponse res = sdk.user.getUserStats(req, new GetUserStatsSecurity("accusamus") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.stats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUsers

Get a list of platform users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsersRequest;
import org.openapis.openapi.models.operations.GetUsersResponse;
import org.openapis.openapi.models.operations.GetUsersUserTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetUsersRequest req = new GetUsersRequest() {{
                email = "Leola50@hotmail.com";
                page = 802692L;
                perPage = 300403L;
                search = "temporibus";
                userType = GetUsersUserTypeEnum.ALL;
            }};            

            GetUsersResponse res = sdk.user.getUsers(req);

            if (res.userList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## logLocation

Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogLocationResponse;
import org.openapis.openapi.models.shared.LocationUpdateContent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LocationUpdateContent req = new LocationUpdateContent(9308.19, 4156.08) {{
                timestamp = 520761L;
            }};            

            LogLocationResponse res = sdk.user.logLocation(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## makeProofreader

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MakeProofreaderResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            MakeProofreaderResponse res = sdk.user.makeProofreader();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## makeUserProofreader

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MakeUserProofreaderRequest;
import org.openapis.openapi.models.operations.MakeUserProofreaderResponse;
import org.openapis.openapi.models.operations.MakeUserProofreaderSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MakeUserProofreaderRequest req = new MakeUserProofreaderRequest(267207L);            

            MakeUserProofreaderResponse res = sdk.user.makeUserProofreader(req, new MakeUserProofreaderSecurity("nam") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## rejectVendorApplication

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RejectVendorApplicationRequest;
import org.openapis.openapi.models.operations.RejectVendorApplicationResponse;
import org.openapis.openapi.models.operations.RejectVendorApplicationSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RejectVendorApplicationRequest req = new RejectVendorApplicationRequest(877399L);            

            RejectVendorApplicationResponse res = sdk.user.rejectVendorApplication(req, new RejectVendorApplicationSecurity("voluptatem") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEmailConfirmation

Sends email confirmation email for current user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendEmailConfirmationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            SendEmailConfirmationResponse res = sdk.user.sendEmailConfirmation();

            if (res.sendEmailConfirmation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendPasswordReminder

Sends password reset email to the user's registered email address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendPasswordReminderResponse;
import org.openapis.openapi.models.shared.Email;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Email req = new Email() {{
                email = "Aurelia.Franey57@gmail.com";
            }};            

            SendPasswordReminderResponse res = sdk.user.sendPasswordReminder(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendUserEmailConfirmation

Sends email confirmation email for a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendUserEmailConfirmationRequest;
import org.openapis.openapi.models.operations.SendUserEmailConfirmationResponse;
import org.openapis.openapi.models.operations.SendUserEmailConfirmationSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendUserEmailConfirmationRequest req = new SendUserEmailConfirmationRequest(858778L);            

            SendUserEmailConfirmationResponse res = sdk.user.sendUserEmailConfirmation(req, new SendUserEmailConfirmationSecurity("deserunt") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.sendUserEmailConfirmation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeNotification

Subscribe to push notifications to receive project and platform notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeNotificationResponse;
import org.openapis.openapi.models.shared.NotificationSubscription;
import org.openapis.openapi.models.shared.NotificationSubscriptionDeviceEnum;
import org.openapis.openapi.models.shared.NotificationSubscriptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NotificationSubscription req = new NotificationSubscription() {{
                device = NotificationSubscriptionDeviceEnum.FIREFOX;
                endpoint = "reprehenderit";
                type = NotificationSubscriptionTypeEnum.ONE_SIGNAL;
            }};            

            SubscribeNotificationResponse res = sdk.user.subscribeNotification(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeUserNotification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeUserNotificationRequest;
import org.openapis.openapi.models.operations.SubscribeUserNotificationResponse;
import org.openapis.openapi.models.operations.SubscribeUserNotificationSecurity;
import org.openapis.openapi.models.shared.NotificationSubscription;
import org.openapis.openapi.models.shared.NotificationSubscriptionDeviceEnum;
import org.openapis.openapi.models.shared.NotificationSubscriptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscribeUserNotificationRequest req = new SubscribeUserNotificationRequest(667715L) {{
                notificationSubscription = new NotificationSubscription() {{
                    device = NotificationSubscriptionDeviceEnum.FIREFOX;
                    endpoint = "sint";
                    type = NotificationSubscriptionTypeEnum.ONE_SIGNAL;
                }};;
            }};            

            SubscribeUserNotificationResponse res = sdk.user.subscribeUserNotification(req, new SubscribeUserNotificationSecurity("accusamus") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suspendUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuspendUserRequest;
import org.openapis.openapi.models.operations.SuspendUserResponse;
import org.openapis.openapi.models.operations.SuspendUserSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SuspendUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SuspendUserRequest req = new SuspendUserRequest(774684L) {{
                suspendUserRequest = new SuspendUserRequest() {{
                    reason = "hic";
                }};;
            }};            

            SuspendUserResponse res = sdk.user.suspendUser(req, new SuspendUserSecurity("necessitatibus") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unfreezeAccount

Reactive your account to start receiving notifications.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnfreezeAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnfreezeAccountResponse res = sdk.user.unfreezeAccount();

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unfreezeUserAccount

Unfreeze requester account for project notifications

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnfreezeUserAccountRequest;
import org.openapis.openapi.models.operations.UnfreezeUserAccountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnfreezeUserAccountRequest req = new UnfreezeUserAccountRequest(376741L);            

            UnfreezeUserAccountResponse res = sdk.user.unfreezeUserAccount(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeNotification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeNotificationResponse;
import org.openapis.openapi.models.shared.NotificationSubscription;
import org.openapis.openapi.models.shared.NotificationSubscriptionDeviceEnum;
import org.openapis.openapi.models.shared.NotificationSubscriptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.NotificationSubscription req = new NotificationSubscription() {{
                device = NotificationSubscriptionDeviceEnum.MAC_OS;
                endpoint = "quae";
                type = NotificationSubscriptionTypeEnum.ONE_SIGNAL;
            }};            

            UnsubscribeNotificationResponse res = sdk.user.unsubscribeNotification(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeUserNotification

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeUserNotificationRequest;
import org.openapis.openapi.models.operations.UnsubscribeUserNotificationResponse;
import org.openapis.openapi.models.operations.UnsubscribeUserNotificationSecurity;
import org.openapis.openapi.models.shared.NotificationSubscription;
import org.openapis.openapi.models.shared.NotificationSubscriptionDeviceEnum;
import org.openapis.openapi.models.shared.NotificationSubscriptionTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnsubscribeUserNotificationRequest req = new UnsubscribeUserNotificationRequest(791880L) {{
                notificationSubscription = new NotificationSubscription() {{
                    device = NotificationSubscriptionDeviceEnum.AMAZON;
                    endpoint = "laborum";
                    type = NotificationSubscriptionTypeEnum.ONE_SIGNAL;
                }};;
            }};            

            UnsubscribeUserNotificationResponse res = sdk.user.unsubscribeUserNotification(req, new UnsubscribeUserNotificationSecurity("consectetur") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateMe

Update your account info

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateMeResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserUpdateContent;
import org.openapis.openapi.models.shared.UserUpdateContentNotifications;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserUpdateContent req = new UserUpdateContent() {{
                birthday = LocalDate.parse("2022-07-26");
                city = "Cummeratafort";
                country = "Tuvalu";
                email = "Eldred.Kub@hotmail.com";
                firstName = "Jermain";
                id = 205566L;
                lastName = "Satterfield";
                notifications = new UserUpdateContentNotifications() {{
                    phoneNumber = "deleniti";
                    smsEnabled = false;
                }};;
                notify = false;
                paypalEmail = "quibusdam";
                phone = "394.480.8719 x173";
                require1099 = false;
                state = "velit";
                street = "04418 Kemmer Fields";
                userGroups = new Long[]{{
                    add(596433L),
                    add(935302L),
                }};
                zip = "dicta";
            }};            

            UpdateMeResponse res = sdk.user.updateMe(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePassword

Password should contain at least one uppercase, lowercase character and one number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePasswordResponse;
import org.openapis.openapi.models.shared.PasswordUpdateContent;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.PasswordUpdateContent req = new PasswordUpdateContent() {{
                password = "voluptatibus";
            }};            

            UpdatePasswordResponse res = sdk.user.updatePassword(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePaymentInfo

Update your billing and saved credit card information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePaymentInfoResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdatePaymentInfo;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UpdatePaymentInfo req = new UpdatePaymentInfo() {{
                bin = "itaque";
                city = "South Toneyburgh";
                country = "Pakistan";
                phone = "340-206-9463 x785";
                saveAsCorporatePrimary = false;
                shareWithCorporateUsers = false;
                state = "expedita";
                street = "9436 O'Keefe Shoal";
                stripeToken = "ipsam";
                zip = "corporis";
            }};            

            UpdatePaymentInfoResponse res = sdk.user.updatePaymentInfo(req);

            if (res.paymentInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUser

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserUpdateContent;
import org.openapis.openapi.models.shared.UserUpdateContentNotifications;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateUserRequest req = new UpdateUserRequest(621666L) {{
                userUpdateContent = new UserUpdateContent() {{
                    birthday = LocalDate.parse("2022-09-17");
                    city = "Port Daronland";
                    country = "Belarus";
                    email = "Emory.Deckow@gmail.com";
                    firstName = "Fredrick";
                    id = 745233L;
                    lastName = "Reinger";
                    notifications = new UserUpdateContentNotifications() {{
                        phoneNumber = "rem";
                        smsEnabled = false;
                    }};;
                    notify = false;
                    paypalEmail = "dolorum";
                    phone = "301.500.2239 x026";
                    require1099 = false;
                    state = "nulla";
                    street = "811 Lempi Ridge";
                    userGroups = new Long[]{{
                        add(663318L),
                    }};
                    zip = "libero";
                }};;
            }};            

            UpdateUserResponse res = sdk.user.updateUser(req);

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserGroup

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserGroupRequest;
import org.openapis.openapi.models.operations.UpdateUserGroupResponse;
import org.openapis.openapi.models.operations.UpdateUserGroupSecurity;
import org.openapis.openapi.models.shared.ActiveWidget;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateUserGroupRequest req = new UpdateUserGroupRequest(854460L) {{
                activeWidget = new ActiveWidget() {{
                    adminMode = false;
                    allowHashInUrl = false;
                    allowQueryInUrl = false;
                    autoDetectSourceLanguage = false;
                    createdAt = OffsetDateTime.parse("2021-11-22T03:20:54.795Z");
                    debugMode = false;
                    elements = "placeat";
                    followUser = false;
                    forceCacheRefreshInterval = false;
                    hitBackendForExisting = false;
                    id = 25756L;
                    languageMappings = "iusto";
                    live = false;
                    modifyLinks = false;
                    name = "Ms. Tasha Block";
                    optimizePerPage = false;
                    pages = "eligendi";
                    pathRegex = "distinctio";
                    position = "voluptatem";
                    queryName = "autem";
                    rebootOnUrlChange = false;
                    restrictedDomains = "esse";
                    sections = "dolores";
                    testMode = false;
                    theme = "assumenda";
                    token = "beatae";
                    urlChangeMode = "est";
                    urlMode = "facere";
                    useCache = false;
                    useDummyTranslations = false;
                    variables = "corrupti";
                }};;
            }};            

            UpdateUserGroupResponse res = sdk.user.updateUserGroup(req, new UpdateUserGroupSecurity("molestiae") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userGroupList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateUserPaymentInfo

Update user's billing and saved credit card information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserPaymentInfoRequest;
import org.openapis.openapi.models.operations.UpdateUserPaymentInfoResponse;
import org.openapis.openapi.models.shared.BillingAddress;
import org.openapis.openapi.models.shared.CreditCard;
import org.openapis.openapi.models.shared.PaymentInfo;
import org.openapis.openapi.models.shared.PaymentInfoCorporate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateUserPaymentInfoRequest req = new UpdateUserPaymentInfoRequest(882284L) {{
                paymentInfo = new PaymentInfo() {{
                    billing = new BillingAddress() {{
                        city = "Redlands";
                        country = "Micronesia";
                        name = "Stacey Hintz";
                        phone = "(997) 801-6690 x781";
                        state = "quibusdam";
                        street = "5113 Wehner Ferry";
                        zip = "recusandae";
                    }};;
                    card = new CreditCard() {{
                        bin = "similique";
                        id = 282837L;
                        isDefault = false;
                        paymentCode = "quidem";
                    }};;
                    cards = new org.openapis.openapi.models.shared.CreditCard[]{{
                        add(new CreditCard() {{
                            bin = "beatae";
                            id = 600213L;
                            isDefault = false;
                            paymentCode = "molestiae";
                        }}),
                        add(new CreditCard() {{
                            bin = "delectus";
                            id = 585593L;
                            isDefault = false;
                            paymentCode = "fugit";
                        }}),
                    }};
                    corporate = new PaymentInfoCorporate() {{
                        allowApiInvoicing = false;
                        allowPaymentCode = false;
                        autoCharge = false;
                        billing = new BillingAddress() {{
                            city = "West Colin";
                            country = "Tajikistan";
                            name = "Cody Rowe";
                            phone = "1-755-483-2474";
                            state = "modi";
                            street = "2997 Monique Drive";
                            zip = "labore";
                        }};;
                        card = new CreditCard() {{
                            bin = "totam";
                            id = 577709L;
                            isDefault = false;
                            paymentCode = "voluptas";
                        }};;
                        contactEmailAddress = "quo";
                        paymentCode = "velit";
                    }};;
                    sharedCard = new CreditCard() {{
                        bin = "minus";
                        id = 684553L;
                        isDefault = false;
                        paymentCode = "nostrum";
                    }};;
                }};;
            }};            

            UpdateUserPaymentInfoResponse res = sdk.user.updateUserPaymentInfo(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadProfilePictureJson

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadProfilePictureJsonResponse;
import org.openapis.openapi.models.shared.ProfilePictureUpload;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProfilePictureUpload req = new ProfilePictureUpload("impedit".getBytes());            

            UploadProfilePictureJsonResponse res = sdk.user.uploadProfilePictureJson(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadProfilePictureMultipart

Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadProfilePictureMultipartResponse;
import org.openapis.openapi.models.shared.ProfilePictureUpload1;
import org.openapis.openapi.models.shared.ProfilePictureUploadProfilePicture;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ProfilePictureUpload1 req = new ProfilePictureUpload1(                new ProfilePictureUploadProfilePicture("tempore".getBytes(), "vero"););            

            UploadProfilePictureMultipartResponse res = sdk.user.uploadProfilePictureMultipart(req);

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadUserProfilePictureJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadUserProfilePictureJsonRequest;
import org.openapis.openapi.models.operations.UploadUserProfilePictureJsonResponse;
import org.openapis.openapi.models.operations.UploadUserProfilePictureJsonSecurity;
import org.openapis.openapi.models.shared.ProfilePictureUpload;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadUserProfilePictureJsonRequest req = new UploadUserProfilePictureJsonRequest(141506L) {{
                profilePictureUpload = new ProfilePictureUpload("repellat".getBytes());;
            }};            

            UploadUserProfilePictureJsonResponse res = sdk.user.uploadUserProfilePictureJson(req, new UploadUserProfilePictureJsonSecurity("pariatur") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadUserProfilePictureMultipart

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadUserProfilePictureMultipartRequest;
import org.openapis.openapi.models.operations.UploadUserProfilePictureMultipartResponse;
import org.openapis.openapi.models.operations.UploadUserProfilePictureMultipartSecurity;
import org.openapis.openapi.models.shared.ProfilePictureUpload1;
import org.openapis.openapi.models.shared.ProfilePictureUploadProfilePicture;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UploadUserProfilePictureMultipartRequest req = new UploadUserProfilePictureMultipartRequest(362888L) {{
                profilePictureUpload1 = new ProfilePictureUpload1(                new ProfilePictureUploadProfilePicture("reprehenderit".getBytes(), "aperiam"););;
            }};            

            UploadUserProfilePictureMultipartResponse res = sdk.user.uploadUserProfilePictureMultipart(req, new UploadUserProfilePictureMultipartSecurity("odio") {{
                mwoAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
