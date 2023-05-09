# projects

### Available Operations

* [domainsProjectsLocationsList](#domainsprojectslocationslist) - Lists information about the supported locations for this service.
* [domainsProjectsLocationsOperationsList](#domainsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [domainsProjectsLocationsRegistrationsConfigureContactSettings](#domainsprojectslocationsregistrationsconfigurecontactsettings) - Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
* [domainsProjectsLocationsRegistrationsConfigureDnsSettings](#domainsprojectslocationsregistrationsconfigurednssettings) - Updates a `Registration`'s DNS settings.
* [domainsProjectsLocationsRegistrationsConfigureManagementSettings](#domainsprojectslocationsregistrationsconfiguremanagementsettings) - Updates a `Registration`'s management settings.
* [domainsProjectsLocationsRegistrationsDelete](#domainsprojectslocationsregistrationsdelete) - Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [domainsProjectsLocationsRegistrationsExport](#domainsprojectslocationsregistrationsexport) - Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [domainsProjectsLocationsRegistrationsGet](#domainsprojectslocationsregistrationsget) - Gets the details of a `Registration` resource.
* [domainsProjectsLocationsRegistrationsGetIamPolicy](#domainsprojectslocationsregistrationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [domainsProjectsLocationsRegistrationsImport](#domainsprojectslocationsregistrationsimport) - Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
* [domainsProjectsLocationsRegistrationsList](#domainsprojectslocationsregistrationslist) - Lists the `Registration` resources in a project.
* [domainsProjectsLocationsRegistrationsPatch](#domainsprojectslocationsregistrationspatch) - Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
* [domainsProjectsLocationsRegistrationsRegister](#domainsprojectslocationsregistrationsregister) - Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
* [domainsProjectsLocationsRegistrationsResetAuthorizationCode](#domainsprojectslocationsregistrationsresetauthorizationcode) - Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
* [domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode](#domainsprojectslocationsregistrationsretrieveauthorizationcode) - Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
* [domainsProjectsLocationsRegistrationsRetrieveImportableDomains](#domainsprojectslocationsregistrationsretrieveimportabledomains) - Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
* [domainsProjectsLocationsRegistrationsRetrieveRegisterParameters](#domainsprojectslocationsregistrationsretrieveregisterparameters) - Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
* [domainsProjectsLocationsRegistrationsRetrieveTransferParameters](#domainsprojectslocationsregistrationsretrievetransferparameters) - Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
* [domainsProjectsLocationsRegistrationsSearchDomains](#domainsprojectslocationsregistrationssearchdomains) - Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
* [domainsProjectsLocationsRegistrationsSetIamPolicy](#domainsprojectslocationsregistrationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [domainsProjectsLocationsRegistrationsTestIamPermissions](#domainsprojectslocationsregistrationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [domainsProjectsLocationsRegistrationsTransfer](#domainsprojectslocationsregistrationstransfer) - Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

## domainsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsListRequest req = new DomainsProjectsLocationsListRequest("delectus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.MEDIA;
                callback = "minus";
                fields = "placeat";
                filter = "voluptatum";
                key = "iusto";
                oauthToken = "excepturi";
                pageSize = 392785L;
                pageToken = "recusandae";
                prettyPrint = false;
                quotaUser = "temporibus";
                uploadType = "ab";
                uploadProtocol = "quis";
            }};            

            DomainsProjectsLocationsListResponse res = sdk.projects.domainsProjectsLocationsList(req, new DomainsProjectsLocationsListSecurity("veritatis", "deserunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsOperationsListRequest req = new DomainsProjectsLocationsOperationsListRequest("perferendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "repellendus";
                alt = AltEnum.PROTO;
                callback = "quo";
                fields = "odit";
                filter = "at";
                key = "at";
                oauthToken = "maiores";
                pageSize = 473608L;
                pageToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            DomainsProjectsLocationsOperationsListResponse res = sdk.projects.domainsProjectsLocationsOperationsList(req, new DomainsProjectsLocationsOperationsListSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsConfigureContactSettings

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigureContactSettingsRequest;
import org.openapis.openapi.models.shared.ConfigureContactSettingsRequestContactNoticesEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactSettings;
import org.openapis.openapi.models.shared.ContactSettingsPrivacyEnum;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest req = new DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest("dicta") {{
                dollarXgafv = XgafvEnum.TWO;
                configureContactSettingsRequest = new ConfigureContactSettingsRequest() {{
                    contactNotices = new org.openapis.openapi.models.shared.ConfigureContactSettingsRequestContactNoticesEnum[]{{
                        add(ConfigureContactSettingsRequestContactNoticesEnum.PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT),
                        add(ConfigureContactSettingsRequestContactNoticesEnum.CONTACT_NOTICE_UNSPECIFIED),
                        add(ConfigureContactSettingsRequestContactNoticesEnum.PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT),
                    }};
                    contactSettings = new ContactSettings() {{
                        adminContact = new Contact() {{
                            email = "Nina41@hotmail.com";
                            faxNumber = "molestiae";
                            phoneNumber = "modi";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("impedit"),
                                }};
                                administrativeArea = "cum";
                                languageCode = "esse";
                                locality = "ipsum";
                                organization = "excepturi";
                                postalCode = "03616";
                                recipients = new String[]{{
                                    add("natus"),
                                }};
                                regionCode = "laboriosam";
                                revision = 943749;
                                sortingCode = "saepe";
                                sublocality = "fuga";
                            }};;
                        }};;
                        privacy = ContactSettingsPrivacyEnum.PUBLIC_CONTACT_DATA;
                        registrantContact = new Contact() {{
                            email = "Leslie_Kertzmann9@yahoo.com";
                            faxNumber = "ipsa";
                            phoneNumber = "reiciendis";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                administrativeArea = "dolorem";
                                languageCode = "corporis";
                                locality = "explicabo";
                                organization = "nobis";
                                postalCode = "63350";
                                recipients = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                                regionCode = "sapiente";
                                revision = 102044;
                                sortingCode = "mollitia";
                                sublocality = "dolorem";
                            }};;
                        }};;
                        technicalContact = new Contact() {{
                            email = "Caroline_Ziemann@yahoo.com";
                            faxNumber = "numquam";
                            phoneNumber = "commodi";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("molestiae"),
                                    add("velit"),
                                }};
                                administrativeArea = "error";
                                languageCode = "quia";
                                locality = "quis";
                                organization = "vitae";
                                postalCode = "63171-9368";
                                recipients = new String[]{{
                                    add("quasi"),
                                }};
                                regionCode = "error";
                                revision = 837945;
                                sortingCode = "laborum";
                                sublocality = "quasi";
                            }};;
                        }};;
                    }};;
                    updateMask = "reiciendis";
                    validateOnly = false;
                }};;
                accessToken = "voluptatibus";
                alt = AltEnum.PROTO;
                callback = "nihil";
                fields = "praesentium";
                key = "voluptatibus";
                oauthToken = "ipsa";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "voluptate";
                uploadProtocol = "cum";
            }};            

            DomainsProjectsLocationsRegistrationsConfigureContactSettingsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsConfigureContactSettings(req, new DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity("perferendis", "doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsConfigureDnsSettings

Updates a `Registration`'s DNS settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureDnsSettingsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigureDnsSettingsRequestInput;
import org.openapis.openapi.models.shared.CustomDns;
import org.openapis.openapi.models.shared.DnsSettingsInput;
import org.openapis.openapi.models.shared.DsRecord;
import org.openapis.openapi.models.shared.DsRecordAlgorithmEnum;
import org.openapis.openapi.models.shared.DsRecordDigestTypeEnum;
import org.openapis.openapi.models.shared.GlueRecord;
import org.openapis.openapi.models.shared.GoogleDomainsDnsDsStateEnum;
import org.openapis.openapi.models.shared.GoogleDomainsDnsInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest req = new DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest("reprehenderit") {{
                dollarXgafv = XgafvEnum.ONE;
                configureDnsSettingsRequestInput = new ConfigureDnsSettingsRequestInput() {{
                    dnsSettings = new DnsSettingsInput() {{
                        customDns = new CustomDns() {{
                            dsRecords = new org.openapis.openapi.models.shared.DsRecord[]{{
                                add(new DsRecord() {{
                                    algorithm = DsRecordAlgorithmEnum.DH;
                                    digest = "corporis";
                                    digestType = DsRecordDigestTypeEnum.SHA1;
                                    keyTag = 480894;
                                }}),
                                add(new DsRecord() {{
                                    algorithm = DsRecordAlgorithmEnum.DH;
                                    digest = "harum";
                                    digestType = DsRecordDigestTypeEnum.SHA1;
                                    keyTag = 880476;
                                }}),
                                add(new DsRecord() {{
                                    algorithm = DsRecordAlgorithmEnum.RSASHA1_NSEC3_SHA1;
                                    digest = "repudiandae";
                                    digestType = DsRecordDigestTypeEnum.DIGEST_TYPE_UNSPECIFIED;
                                    keyTag = 216822;
                                }}),
                                add(new DsRecord() {{
                                    algorithm = DsRecordAlgorithmEnum.ECDSAP384_SHA384;
                                    digest = "molestias";
                                    digestType = DsRecordDigestTypeEnum.SHA256;
                                    keyTag = 865103;
                                }}),
                            }};
                            nameServers = new String[]{{
                                add("praesentium"),
                                add("rem"),
                            }};
                        }};;
                        glueRecords = new org.openapis.openapi.models.shared.GlueRecord[]{{
                            add(new GlueRecord() {{
                                hostName = "bronze-trafficker.name";
                                ipv4Addresses = new String[]{{
                                    add("itaque"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("enim"),
                                    add("consequatur"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "quarrelsome-square.com";
                                ipv4Addresses = new String[]{{
                                    add("distinctio"),
                                    add("quibusdam"),
                                    add("labore"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("qui"),
                                    add("aliquid"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "offensive-melody.com";
                                ipv4Addresses = new String[]{{
                                    add("assumenda"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("alias"),
                                    add("fugit"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "rapid-moat.biz";
                                ipv4Addresses = new String[]{{
                                    add("tempore"),
                                    add("labore"),
                                    add("delectus"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("non"),
                                    add("eligendi"),
                                }};
                            }}),
                        }};
                        googleDomainsDns = new GoogleDomainsDnsInput() {{
                            dsState = GoogleDomainsDnsDsStateEnum.DS_RECORDS_UNPUBLISHED;
                        }};;
                    }};;
                    updateMask = "aliquid";
                    validateOnly = false;
                }};;
                accessToken = "provident";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "officia";
                key = "dolor";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "a";
                uploadType = "dolorum";
                uploadProtocol = "in";
            }};            

            DomainsProjectsLocationsRegistrationsConfigureDnsSettingsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsConfigureDnsSettings(req, new DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity("in", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsConfigureManagementSettings

Updates a `Registration`'s management settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ConfigureManagementSettingsRequestInput;
import org.openapis.openapi.models.shared.ManagementSettingsInput;
import org.openapis.openapi.models.shared.ManagementSettingsTransferLockStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest req = new DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                configureManagementSettingsRequestInput = new ConfigureManagementSettingsRequestInput() {{
                    managementSettings = new ManagementSettingsInput() {{
                        transferLockState = ManagementSettingsTransferLockStateEnum.TRANSFER_LOCK_STATE_UNSPECIFIED;
                    }};;
                    updateMask = "magnam";
                }};;
                accessToken = "cumque";
                alt = AltEnum.PROTO;
                callback = "ea";
                fields = "aliquid";
                key = "laborum";
                oauthToken = "accusamus";
                prettyPrint = false;
                quotaUser = "non";
                uploadType = "occaecati";
                uploadProtocol = "enim";
            }};            

            DomainsProjectsLocationsRegistrationsConfigureManagementSettingsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsConfigureManagementSettings(req, new DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity("accusamus", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsDelete

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsDeleteRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsDeleteResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsDeleteRequest req = new DomainsProjectsLocationsRegistrationsDeleteRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "deleniti";
                key = "sapiente";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            DomainsProjectsLocationsRegistrationsDeleteResponse res = sdk.projects.domainsProjectsLocationsRegistrationsDelete(req, new DomainsProjectsLocationsRegistrationsDeleteSecurity("natus", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsExport

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsExportRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsExportResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsExportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsExportRequest req = new DomainsProjectsLocationsRegistrationsExportRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("magnam", "distinctio");
                    put("id", "labore");
                }};
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "architecto";
                uploadProtocol = "magnam";
            }};            

            DomainsProjectsLocationsRegistrationsExportResponse res = sdk.projects.domainsProjectsLocationsRegistrationsExport(req, new DomainsProjectsLocationsRegistrationsExportSecurity("et", "excepturi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsGet

Gets the details of a `Registration` resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsGetRequest req = new DomainsProjectsLocationsRegistrationsGetRequest("ullam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.MEDIA;
                callback = "accusantium";
                fields = "mollitia";
                key = "reiciendis";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "ad";
                uploadType = "eum";
                uploadProtocol = "dolor";
            }};            

            DomainsProjectsLocationsRegistrationsGetResponse res = sdk.projects.domainsProjectsLocationsRegistrationsGet(req, new DomainsProjectsLocationsRegistrationsGetSecurity("necessitatibus", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.registration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsGetIamPolicyRequest req = new DomainsProjectsLocationsRegistrationsGetIamPolicyRequest("nemo") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "iure";
                alt = AltEnum.PROTO;
                callback = "debitis";
                fields = "eius";
                key = "maxime";
                oauthToken = "deleniti";
                optionsRequestedPolicyVersion = 703889L;
                prettyPrint = false;
                quotaUser = "in";
                uploadType = "architecto";
                uploadProtocol = "architecto";
            }};            

            DomainsProjectsLocationsRegistrationsGetIamPolicyResponse res = sdk.projects.domainsProjectsLocationsRegistrationsGetIamPolicy(req, new DomainsProjectsLocationsRegistrationsGetIamPolicySecurity("repudiandae", "ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsImport

Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsImportRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsImportResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsImportSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ImportDomainRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsImportRequest req = new DomainsProjectsLocationsRegistrationsImportRequest("expedita") {{
                dollarXgafv = XgafvEnum.ONE;
                importDomainRequest = new ImportDomainRequest() {{
                    domainName = "repellat";
                    labels = new java.util.HashMap<String, String>() {{
                        put("sed", "saepe");
                        put("pariatur", "accusantium");
                        put("consequuntur", "praesentium");
                        put("natus", "magni");
                    }};
                }};;
                accessToken = "sunt";
                alt = AltEnum.PROTO;
                callback = "illum";
                fields = "pariatur";
                key = "maxime";
                oauthToken = "ea";
                prettyPrint = false;
                quotaUser = "excepturi";
                uploadType = "odit";
                uploadProtocol = "ea";
            }};            

            DomainsProjectsLocationsRegistrationsImportResponse res = sdk.projects.domainsProjectsLocationsRegistrationsImport(req, new DomainsProjectsLocationsRegistrationsImportSecurity("accusantium", "ab") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsList

Lists the `Registration` resources in a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsListRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsListResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsListRequest req = new DomainsProjectsLocationsRegistrationsListRequest("maiores") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nam";
                filter = "eaque";
                key = "pariatur";
                oauthToken = "nemo";
                pageSize = 975522L;
                pageToken = "perferendis";
                prettyPrint = false;
                quotaUser = "fugiat";
                uploadType = "amet";
                uploadProtocol = "aut";
            }};            

            DomainsProjectsLocationsRegistrationsListResponse res = sdk.projects.domainsProjectsLocationsRegistrationsList(req, new DomainsProjectsLocationsRegistrationsListSecurity("cumque", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRegistrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsPatch

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsPatchRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsPatchResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactSettings;
import org.openapis.openapi.models.shared.ContactSettingsPrivacyEnum;
import org.openapis.openapi.models.shared.CustomDns;
import org.openapis.openapi.models.shared.DnsSettingsInput;
import org.openapis.openapi.models.shared.DsRecord;
import org.openapis.openapi.models.shared.DsRecordAlgorithmEnum;
import org.openapis.openapi.models.shared.DsRecordDigestTypeEnum;
import org.openapis.openapi.models.shared.GlueRecord;
import org.openapis.openapi.models.shared.GoogleDomainsDnsDsStateEnum;
import org.openapis.openapi.models.shared.GoogleDomainsDnsInput;
import org.openapis.openapi.models.shared.ManagementSettingsInput;
import org.openapis.openapi.models.shared.ManagementSettingsTransferLockStateEnum;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.RegistrationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsPatchRequest req = new DomainsProjectsLocationsRegistrationsPatchRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                registrationInput = new RegistrationInput() {{
                    contactSettings = new ContactSettings() {{
                        adminContact = new Contact() {{
                            email = "Celestine.Hayes@hotmail.com";
                            faxNumber = "eaque";
                            phoneNumber = "quis";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("eos"),
                                }};
                                administrativeArea = "perferendis";
                                languageCode = "dolores";
                                locality = "minus";
                                organization = "quam";
                                postalCode = "83996";
                                recipients = new String[]{{
                                    add("perspiciatis"),
                                    add("voluptatem"),
                                    add("porro"),
                                }};
                                regionCode = "consequuntur";
                                revision = 500026;
                                sortingCode = "error";
                                sublocality = "eaque";
                            }};;
                        }};;
                        privacy = ContactSettingsPrivacyEnum.PRIVATE_CONTACT_DATA;
                        registrantContact = new Contact() {{
                            email = "David.Zemlak61@hotmail.com";
                            faxNumber = "dolorum";
                            phoneNumber = "deleniti";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                                administrativeArea = "quaerat";
                                languageCode = "quos";
                                locality = "aliquid";
                                organization = "dolorem";
                                postalCode = "21295";
                                recipients = new String[]{{
                                    add("voluptate"),
                                    add("dignissimos"),
                                    add("reiciendis"),
                                }};
                                regionCode = "amet";
                                revision = 680545;
                                sortingCode = "numquam";
                                sublocality = "veritatis";
                            }};;
                        }};;
                        technicalContact = new Contact() {{
                            email = "Anabelle.Kerluke@gmail.com";
                            faxNumber = "accusamus";
                            phoneNumber = "quidem";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("voluptas"),
                                    add("natus"),
                                    add("eos"),
                                    add("atque"),
                                }};
                                administrativeArea = "sit";
                                languageCode = "fugiat";
                                locality = "ab";
                                organization = "soluta";
                                postalCode = "44656-8794";
                                recipients = new String[]{{
                                    add("voluptate"),
                                }};
                                regionCode = "id";
                                revision = 906418;
                                sortingCode = "eius";
                                sublocality = "aspernatur";
                            }};;
                        }};;
                    }};;
                    dnsSettings = new DnsSettingsInput() {{
                        customDns = new CustomDns() {{
                            dsRecords = new org.openapis.openapi.models.shared.DsRecord[]{{
                                add(new DsRecord() {{
                                    algorithm = DsRecordAlgorithmEnum.ECC;
                                    digest = "optio";
                                    digestType = DsRecordDigestTypeEnum.SHA384;
                                    keyTag = 320017;
                                }}),
                            }};
                            nameServers = new String[]{{
                                add("suscipit"),
                                add("deserunt"),
                                add("provident"),
                                add("minima"),
                            }};
                        }};;
                        glueRecords = new org.openapis.openapi.models.shared.GlueRecord[]{{
                            add(new GlueRecord() {{
                                hostName = "mature-pansy.com";
                                ipv4Addresses = new String[]{{
                                    add("quaerat"),
                                    add("tempora"),
                                    add("vel"),
                                    add("quod"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("qui"),
                                    add("dolorum"),
                                    add("a"),
                                    add("esse"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "regal-jumbo.biz";
                                ipv4Addresses = new String[]{{
                                    add("tenetur"),
                                    add("amet"),
                                    add("tempore"),
                                    add("accusamus"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("enim"),
                                    add("dolorem"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "well-lit-literature.info";
                                ipv4Addresses = new String[]{{
                                    add("expedita"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("sed"),
                                }};
                            }}),
                            add(new GlueRecord() {{
                                hostName = "improbable-redhead.info";
                                ipv4Addresses = new String[]{{
                                    add("quam"),
                                    add("ipsum"),
                                    add("incidunt"),
                                }};
                                ipv6Addresses = new String[]{{
                                    add("cupiditate"),
                                }};
                            }}),
                        }};
                        googleDomainsDns = new GoogleDomainsDnsInput() {{
                            dsState = GoogleDomainsDnsDsStateEnum.DS_RECORDS_PUBLISHED;
                        }};;
                    }};;
                    domainName = "pariatur";
                    labels = new java.util.HashMap<String, String>() {{
                        put("dicta", "laborum");
                        put("totam", "incidunt");
                        put("aspernatur", "dolores");
                    }};
                    managementSettings = new ManagementSettingsInput() {{
                        transferLockState = ManagementSettingsTransferLockStateEnum.LOCKED;
                    }};;
                    pendingContactSettings = new ContactSettings() {{
                        adminContact = new Contact() {{
                            email = "Grace_Kohler@hotmail.com";
                            faxNumber = "qui";
                            phoneNumber = "neque";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("magni"),
                                }};
                                administrativeArea = "odio";
                                languageCode = "sunt";
                                locality = "ullam";
                                organization = "nam";
                                postalCode = "07770-9207";
                                recipients = new String[]{{
                                    add("tempore"),
                                    add("cupiditate"),
                                    add("aperiam"),
                                }};
                                regionCode = "delectus";
                                revision = 209157;
                                sortingCode = "dolore";
                                sublocality = "labore";
                            }};;
                        }};;
                        privacy = ContactSettingsPrivacyEnum.CONTACT_PRIVACY_UNSPECIFIED;
                        registrantContact = new Contact() {{
                            email = "Barbara55@hotmail.com";
                            faxNumber = "itaque";
                            phoneNumber = "consequatur";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("repellendus"),
                                    add("porro"),
                                    add("doloribus"),
                                }};
                                administrativeArea = "ut";
                                languageCode = "facilis";
                                locality = "cupiditate";
                                organization = "qui";
                                postalCode = "54597";
                                recipients = new String[]{{
                                    add("omnis"),
                                    add("quis"),
                                    add("ipsum"),
                                    add("delectus"),
                                }};
                                regionCode = "voluptate";
                                revision = 231701;
                                sortingCode = "vero";
                                sublocality = "tenetur";
                            }};;
                        }};;
                        technicalContact = new Contact() {{
                            email = "Troy.Rau63@yahoo.com";
                            faxNumber = "facilis";
                            phoneNumber = "vero";
                            postalAddress = new PostalAddress() {{
                                addressLines = new String[]{{
                                    add("dolore"),
                                    add("quibusdam"),
                                }};
                                administrativeArea = "illum";
                                languageCode = "sequi";
                                locality = "natus";
                                organization = "impedit";
                                postalCode = "93817";
                                recipients = new String[]{{
                                    add("doloribus"),
                                    add("iusto"),
                                    add("eligendi"),
                                    add("ducimus"),
                                }};
                                regionCode = "alias";
                                revision = 639473;
                                sortingCode = "tempora";
                                sublocality = "ipsam";
                            }};;
                        }};;
                    }};;
                }};;
                accessToken = "ea";
                alt = AltEnum.JSON;
                callback = "vel";
                fields = "possimus";
                key = "magnam";
                oauthToken = "ratione";
                prettyPrint = false;
                quotaUser = "ex";
                updateMask = "laudantium";
                uploadType = "dicta";
                uploadProtocol = "dolor";
            }};            

            DomainsProjectsLocationsRegistrationsPatchResponse res = sdk.projects.domainsProjectsLocationsRegistrationsPatch(req, new DomainsProjectsLocationsRegistrationsPatchSecurity("maiores", "quasi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsRegister

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRegisterRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRegisterResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRegisterSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactSettings;
import org.openapis.openapi.models.shared.ContactSettingsPrivacyEnum;
import org.openapis.openapi.models.shared.CustomDns;
import org.openapis.openapi.models.shared.DnsSettingsInput;
import org.openapis.openapi.models.shared.DsRecord;
import org.openapis.openapi.models.shared.DsRecordAlgorithmEnum;
import org.openapis.openapi.models.shared.DsRecordDigestTypeEnum;
import org.openapis.openapi.models.shared.GlueRecord;
import org.openapis.openapi.models.shared.GoogleDomainsDnsDsStateEnum;
import org.openapis.openapi.models.shared.GoogleDomainsDnsInput;
import org.openapis.openapi.models.shared.ManagementSettingsInput;
import org.openapis.openapi.models.shared.ManagementSettingsTransferLockStateEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.RegisterDomainRequestContactNoticesEnum;
import org.openapis.openapi.models.shared.RegisterDomainRequestDomainNoticesEnum;
import org.openapis.openapi.models.shared.RegisterDomainRequestInput;
import org.openapis.openapi.models.shared.RegistrationInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsRegisterRequest req = new DomainsProjectsLocationsRegistrationsRegisterRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                registerDomainRequestInput = new RegisterDomainRequestInput() {{
                    contactNotices = new org.openapis.openapi.models.shared.RegisterDomainRequestContactNoticesEnum[]{{
                        add(RegisterDomainRequestContactNoticesEnum.PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT),
                        add(RegisterDomainRequestContactNoticesEnum.CONTACT_NOTICE_UNSPECIFIED),
                        add(RegisterDomainRequestContactNoticesEnum.PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT),
                    }};
                    domainNotices = new org.openapis.openapi.models.shared.RegisterDomainRequestDomainNoticesEnum[]{{
                        add(RegisterDomainRequestDomainNoticesEnum.HSTS_PRELOADED),
                        add(RegisterDomainRequestDomainNoticesEnum.DOMAIN_NOTICE_UNSPECIFIED),
                        add(RegisterDomainRequestDomainNoticesEnum.HSTS_PRELOADED),
                        add(RegisterDomainRequestDomainNoticesEnum.DOMAIN_NOTICE_UNSPECIFIED),
                    }};
                    registration = new RegistrationInput() {{
                        contactSettings = new ContactSettings() {{
                            adminContact = new Contact() {{
                                email = "Greg40@gmail.com";
                                faxNumber = "quo";
                                phoneNumber = "consectetur";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("aspernatur"),
                                        add("minima"),
                                        add("eaque"),
                                        add("a"),
                                    }};
                                    administrativeArea = "libero";
                                    languageCode = "aut";
                                    locality = "aut";
                                    organization = "deleniti";
                                    postalCode = "31802-0668";
                                    recipients = new String[]{{
                                        add("eum"),
                                    }};
                                    regionCode = "autem";
                                    revision = 752135;
                                    sortingCode = "quas";
                                    sublocality = "assumenda";
                                }};;
                            }};;
                            privacy = ContactSettingsPrivacyEnum.REDACTED_CONTACT_DATA;
                            registrantContact = new Contact() {{
                                email = "Mona25@yahoo.com";
                                faxNumber = "explicabo";
                                phoneNumber = "provident";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("molestiae"),
                                    }};
                                    administrativeArea = "magnam";
                                    languageCode = "odio";
                                    locality = "eius";
                                    organization = "esse";
                                    postalCode = "56468";
                                    recipients = new String[]{{
                                        add("eum"),
                                        add("suscipit"),
                                    }};
                                    regionCode = "assumenda";
                                    revision = 181151;
                                    sortingCode = "praesentium";
                                    sublocality = "quisquam";
                                }};;
                            }};;
                            technicalContact = new Contact() {{
                                email = "Anahi.Olson77@gmail.com";
                                faxNumber = "illum";
                                phoneNumber = "quo";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("eius"),
                                        add("eos"),
                                        add("voluptas"),
                                    }};
                                    administrativeArea = "ab";
                                    languageCode = "cupiditate";
                                    locality = "consequatur";
                                    organization = "tempora";
                                    postalCode = "31174-9077";
                                    recipients = new String[]{{
                                        add("inventore"),
                                        add("nihil"),
                                    }};
                                    regionCode = "totam";
                                    revision = 882710;
                                    sortingCode = "aliquam";
                                    sublocality = "odio";
                                }};;
                            }};;
                        }};;
                        dnsSettings = new DnsSettingsInput() {{
                            customDns = new CustomDns() {{
                                dsRecords = new org.openapis.openapi.models.shared.DsRecord[]{{
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.RSASHA1_NSEC3_SHA1;
                                        digest = "sapiente";
                                        digestType = DsRecordDigestTypeEnum.DIGEST_TYPE_UNSPECIFIED;
                                        keyTag = 645570;
                                    }}),
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.RSASHA256;
                                        digest = "accusantium";
                                        digestType = DsRecordDigestTypeEnum.GOST3411;
                                        keyTag = 430402;
                                    }}),
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.ECCGOST;
                                        digest = "praesentium";
                                        digestType = DsRecordDigestTypeEnum.DIGEST_TYPE_UNSPECIFIED;
                                        keyTag = 536178;
                                    }}),
                                }};
                                nameServers = new String[]{{
                                    add("fuga"),
                                }};
                            }};;
                            glueRecords = new org.openapis.openapi.models.shared.GlueRecord[]{{
                                add(new GlueRecord() {{
                                    hostName = "feline-manor.com";
                                    ipv4Addresses = new String[]{{
                                        add("nisi"),
                                        add("fugit"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("consequuntur"),
                                        add("ratione"),
                                        add("explicabo"),
                                        add("saepe"),
                                    }};
                                }}),
                                add(new GlueRecord() {{
                                    hostName = "nutty-markup.com";
                                    ipv4Addresses = new String[]{{
                                        add("eveniet"),
                                        add("accusamus"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("esse"),
                                    }};
                                }}),
                                add(new GlueRecord() {{
                                    hostName = "stark-reactant.org";
                                    ipv4Addresses = new String[]{{
                                        add("quasi"),
                                        add("saepe"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("harum"),
                                        add("molestiae"),
                                    }};
                                }}),
                            }};
                            googleDomainsDns = new GoogleDomainsDnsInput() {{
                                dsState = GoogleDomainsDnsDsStateEnum.DS_RECORDS_PUBLISHED;
                            }};;
                        }};;
                        domainName = "occaecati";
                        labels = new java.util.HashMap<String, String>() {{
                            put("distinctio", "eligendi");
                            put("sit", "culpa");
                        }};
                        managementSettings = new ManagementSettingsInput() {{
                            transferLockState = ManagementSettingsTransferLockStateEnum.LOCKED;
                        }};;
                        pendingContactSettings = new ContactSettings() {{
                            adminContact = new Contact() {{
                                email = "Obie79@gmail.com";
                                faxNumber = "quaerat";
                                phoneNumber = "sapiente";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("esse"),
                                    }};
                                    administrativeArea = "blanditiis";
                                    languageCode = "provident";
                                    locality = "a";
                                    organization = "nulla";
                                    postalCode = "40965-8819";
                                    recipients = new String[]{{
                                        add("facere"),
                                        add("veritatis"),
                                        add("consequuntur"),
                                        add("quasi"),
                                    }};
                                    regionCode = "similique";
                                    revision = 633608;
                                    sortingCode = "aliquid";
                                    sublocality = "tenetur";
                                }};;
                            }};;
                            privacy = ContactSettingsPrivacyEnum.CONTACT_PRIVACY_UNSPECIFIED;
                            registrantContact = new Contact() {{
                                email = "Herbert72@hotmail.com";
                                faxNumber = "illum";
                                phoneNumber = "soluta";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("aliquam"),
                                    }};
                                    administrativeArea = "sapiente";
                                    languageCode = "dicta";
                                    locality = "ullam";
                                    organization = "reprehenderit";
                                    postalCode = "30518";
                                    recipients = new String[]{{
                                        add("deleniti"),
                                        add("itaque"),
                                    }};
                                    regionCode = "dolorum";
                                    revision = 99615;
                                    sortingCode = "omnis";
                                    sublocality = "tenetur";
                                }};;
                            }};;
                            technicalContact = new Contact() {{
                                email = "Santino.Bosco@gmail.com";
                                faxNumber = "minima";
                                phoneNumber = "veritatis";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("adipisci"),
                                    }};
                                    administrativeArea = "iste";
                                    languageCode = "temporibus";
                                    locality = "accusantium";
                                    organization = "rem";
                                    postalCode = "54605";
                                    recipients = new String[]{{
                                        add("voluptatem"),
                                        add("dolor"),
                                    }};
                                    regionCode = "occaecati";
                                    revision = 253191;
                                    sortingCode = "impedit";
                                    sublocality = "explicabo";
                                }};;
                            }};;
                        }};;
                    }};;
                    validateOnly = false;
                    yearlyPrice = new Money() {{
                        currencyCode = "voluptas";
                        nanos = 12036;
                        units = "dignissimos";
                    }};;
                }};;
                accessToken = "dicta";
                alt = AltEnum.PROTO;
                callback = "natus";
                fields = "velit";
                key = "voluptatibus";
                oauthToken = "voluptas";
                prettyPrint = false;
                quotaUser = "asperiores";
                uploadType = "aperiam";
                uploadProtocol = "ea";
            }};            

            DomainsProjectsLocationsRegistrationsRegisterResponse res = sdk.projects.domainsProjectsLocationsRegistrationsRegister(req, new DomainsProjectsLocationsRegistrationsRegisterSecurity("quaerat", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsResetAuthorizationCode

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest req = new DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest("repellendus") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dignissimos", "officia");
                    put("asperiores", "nemo");
                    put("quae", "quaerat");
                    put("porro", "quod");
                }};
                accessToken = "labore";
                alt = AltEnum.JSON;
                callback = "adipisci";
                fields = "fuga";
                key = "id";
                oauthToken = "suscipit";
                prettyPrint = false;
                quotaUser = "velit";
                uploadType = "culpa";
                uploadProtocol = "est";
            }};            

            DomainsProjectsLocationsRegistrationsResetAuthorizationCodeResponse res = sdk.projects.domainsProjectsLocationsRegistrationsResetAuthorizationCode(req, new DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity("recusandae", "totam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizationCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest req = new DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ducimus";
                alt = AltEnum.MEDIA;
                callback = "vel";
                fields = "labore";
                key = "possimus";
                oauthToken = "facilis";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "commodi";
                uploadProtocol = "in";
            }};            

            DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeResponse res = sdk.projects.domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode(req, new DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity("corporis", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.authorizationCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsRetrieveImportableDomains

Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest req = new DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest("assumenda") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "recusandae";
                alt = AltEnum.MEDIA;
                callback = "aperiam";
                fields = "cum";
                key = "consectetur";
                oauthToken = "in";
                pageSize = 348519L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "numquam";
                uploadProtocol = "doloribus";
            }};            

            DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsRetrieveImportableDomains(req, new DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity("suscipit", "reiciendis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveImportableDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsRetrieveRegisterParameters

Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest req = new DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest("quidem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "sunt";
                domainName = "asperiores";
                fields = "adipisci";
                key = "non";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "beatae";
                uploadType = "dignissimos";
                uploadProtocol = "a";
            }};            

            DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse res = sdk.projects.domainsProjectsLocationsRegistrationsRetrieveRegisterParameters(req, new DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity("debitis", "consectetur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveRegisterParametersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsRetrieveTransferParameters

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest req = new DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laboriosam";
                alt = AltEnum.JSON;
                callback = "voluptates";
                domainName = "libero";
                fields = "vitae";
                key = "accusamus";
                oauthToken = "similique";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "aspernatur";
                uploadProtocol = "voluptas";
            }};            

            DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse res = sdk.projects.domainsProjectsLocationsRegistrationsRetrieveTransferParameters(req, new DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity("voluptas", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveTransferParametersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsSearchDomains

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSearchDomainsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSearchDomainsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSearchDomainsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsSearchDomainsRequest req = new DomainsProjectsLocationsRegistrationsSearchDomainsRequest("minima") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolorum";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "dolores";
                key = "blanditiis";
                oauthToken = "in";
                prettyPrint = false;
                query = "dolore";
                quotaUser = "aliquam";
                uploadType = "officiis";
                uploadProtocol = "temporibus";
            }};            

            DomainsProjectsLocationsRegistrationsSearchDomainsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsSearchDomains(req, new DomainsProjectsLocationsRegistrationsSearchDomainsSecurity("ullam", "adipisci") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsSetIamPolicyRequest req = new DomainsProjectsLocationsRegistrationsSetIamPolicyRequest("cum") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("culpa"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("totam"),
                                            add("hic"),
                                            add("exercitationem"),
                                            add("nobis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sed"),
                                            add("reiciendis"),
                                            add("explicabo"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("voluptate"),
                                            add("expedita"),
                                            add("ab"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "dolore";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("in"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("explicabo"),
                                            add("voluptas"),
                                            add("unde"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("sapiente"),
                                            add("debitis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "reiciendis";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("maiores"),
                                            add("incidunt"),
                                            add("sed"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                }};
                                service = "eius";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "ipsum";
                                    expression = "ea";
                                    location = "occaecati";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("tempora"),
                                    add("tempora"),
                                    add("voluptate"),
                                    add("reiciendis"),
                                }};
                                role = "ex";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "sit";
                                    expression = "non";
                                    location = "officiis";
                                    title = "Ms.";
                                }};
                                members = new String[]{{
                                    add("quaerat"),
                                    add("incidunt"),
                                    add("ipsam"),
                                }};
                                role = "debitis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "rem";
                                    expression = "sit";
                                    location = "nobis";
                                    title = "Miss";
                                }};
                                members = new String[]{{
                                    add("minima"),
                                    add("recusandae"),
                                }};
                                role = "reiciendis";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "nulla";
                                    expression = "magni";
                                    location = "aperiam";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("veniam"),
                                    add("in"),
                                }};
                                role = "officiis";
                            }}),
                        }};
                        etag = "beatae";
                        version = 512452;
                    }};;
                    updateMask = "exercitationem";
                }};;
                accessToken = "praesentium";
                alt = AltEnum.PROTO;
                callback = "laboriosam";
                fields = "dolorum";
                key = "voluptatum";
                oauthToken = "error";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "expedita";
                uploadProtocol = "debitis";
            }};            

            DomainsProjectsLocationsRegistrationsSetIamPolicyResponse res = sdk.projects.domainsProjectsLocationsRegistrationsSetIamPolicy(req, new DomainsProjectsLocationsRegistrationsSetIamPolicySecurity("neque", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## domainsProjectsLocationsRegistrationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest req = new DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest("nostrum") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("corrupti"),
                        add("accusamus"),
                        add("tempora"),
                    }};
                }};;
                accessToken = "atque";
                alt = AltEnum.JSON;
                callback = "ut";
                fields = "fugiat";
                key = "voluptatem";
                oauthToken = "culpa";
                prettyPrint = false;
                quotaUser = "expedita";
                uploadType = "magnam";
                uploadProtocol = "consequatur";
            }};            

            DomainsProjectsLocationsRegistrationsTestIamPermissionsResponse res = sdk.projects.domainsProjectsLocationsRegistrationsTestIamPermissions(req, new DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity("esse", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## domainsProjectsLocationsRegistrationsTransfer

Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTransferRequest;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTransferResponse;
import org.openapis.openapi.models.operations.DomainsProjectsLocationsRegistrationsTransferSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuthorizationCode;
import org.openapis.openapi.models.shared.Contact;
import org.openapis.openapi.models.shared.ContactSettings;
import org.openapis.openapi.models.shared.ContactSettingsPrivacyEnum;
import org.openapis.openapi.models.shared.CustomDns;
import org.openapis.openapi.models.shared.DnsSettingsInput;
import org.openapis.openapi.models.shared.DsRecord;
import org.openapis.openapi.models.shared.DsRecordAlgorithmEnum;
import org.openapis.openapi.models.shared.DsRecordDigestTypeEnum;
import org.openapis.openapi.models.shared.GlueRecord;
import org.openapis.openapi.models.shared.GoogleDomainsDnsDsStateEnum;
import org.openapis.openapi.models.shared.GoogleDomainsDnsInput;
import org.openapis.openapi.models.shared.ManagementSettingsInput;
import org.openapis.openapi.models.shared.ManagementSettingsTransferLockStateEnum;
import org.openapis.openapi.models.shared.Money;
import org.openapis.openapi.models.shared.PostalAddress;
import org.openapis.openapi.models.shared.RegistrationInput;
import org.openapis.openapi.models.shared.TransferDomainRequestContactNoticesEnum;
import org.openapis.openapi.models.shared.TransferDomainRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DomainsProjectsLocationsRegistrationsTransferRequest req = new DomainsProjectsLocationsRegistrationsTransferRequest("sit") {{
                dollarXgafv = XgafvEnum.TWO;
                transferDomainRequestInput = new TransferDomainRequestInput() {{
                    authorizationCode = new AuthorizationCode() {{
                        code = "quas";
                    }};;
                    contactNotices = new org.openapis.openapi.models.shared.TransferDomainRequestContactNoticesEnum[]{{
                        add(TransferDomainRequestContactNoticesEnum.CONTACT_NOTICE_UNSPECIFIED),
                        add(TransferDomainRequestContactNoticesEnum.CONTACT_NOTICE_UNSPECIFIED),
                        add(TransferDomainRequestContactNoticesEnum.PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT),
                        add(TransferDomainRequestContactNoticesEnum.CONTACT_NOTICE_UNSPECIFIED),
                    }};
                    registration = new RegistrationInput() {{
                        contactSettings = new ContactSettings() {{
                            adminContact = new Contact() {{
                                email = "Alberto_Kautzer@gmail.com";
                                faxNumber = "error";
                                phoneNumber = "consequatur";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("reiciendis"),
                                        add("dolorem"),
                                    }};
                                    administrativeArea = "harum";
                                    languageCode = "dicta";
                                    locality = "architecto";
                                    organization = "occaecati";
                                    postalCode = "65679";
                                    recipients = new String[]{{
                                        add("alias"),
                                        add("amet"),
                                    }};
                                    regionCode = "deserunt";
                                    revision = 454860;
                                    sortingCode = "unde";
                                    sublocality = "reiciendis";
                                }};;
                            }};;
                            privacy = ContactSettingsPrivacyEnum.PRIVATE_CONTACT_DATA;
                            registrantContact = new Contact() {{
                                email = "Vincent66@hotmail.com";
                                faxNumber = "quidem";
                                phoneNumber = "reprehenderit";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("fuga"),
                                        add("praesentium"),
                                        add("mollitia"),
                                        add("veniam"),
                                    }};
                                    administrativeArea = "voluptatem";
                                    languageCode = "quisquam";
                                    locality = "repudiandae";
                                    organization = "quasi";
                                    postalCode = "49536-8042";
                                    recipients = new String[]{{
                                        add("ea"),
                                        add("atque"),
                                        add("error"),
                                        add("officiis"),
                                    }};
                                    regionCode = "officiis";
                                    revision = 880107;
                                    sortingCode = "natus";
                                    sublocality = "minima";
                                }};;
                            }};;
                            technicalContact = new Contact() {{
                                email = "Gunnar_Wuckert@gmail.com";
                                faxNumber = "error";
                                phoneNumber = "blanditiis";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("repudiandae"),
                                        add("atque"),
                                    }};
                                    administrativeArea = "atque";
                                    languageCode = "sunt";
                                    locality = "recusandae";
                                    organization = "dolorum";
                                    postalCode = "29091-0113";
                                    recipients = new String[]{{
                                        add("velit"),
                                        add("a"),
                                    }};
                                    regionCode = "molestias";
                                    revision = 300029;
                                    sortingCode = "saepe";
                                    sublocality = "consequuntur";
                                }};;
                            }};;
                        }};;
                        dnsSettings = new DnsSettingsInput() {{
                            customDns = new CustomDns() {{
                                dsRecords = new org.openapis.openapi.models.shared.DsRecord[]{{
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.INDIRECT;
                                        digest = "perspiciatis";
                                        digestType = DsRecordDigestTypeEnum.SHA256;
                                        keyTag = 238043;
                                    }}),
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.PRIVATEDNS;
                                        digest = "occaecati";
                                        digestType = DsRecordDigestTypeEnum.DIGEST_TYPE_UNSPECIFIED;
                                        keyTag = 145870;
                                    }}),
                                    add(new DsRecord() {{
                                        algorithm = DsRecordAlgorithmEnum.ECDSAP256_SHA256;
                                        digest = "quis";
                                        digestType = DsRecordDigestTypeEnum.SHA256;
                                        keyTag = 625528;
                                    }}),
                                }};
                                nameServers = new String[]{{
                                    add("corporis"),
                                }};
                            }};;
                            glueRecords = new org.openapis.openapi.models.shared.GlueRecord[]{{
                                add(new GlueRecord() {{
                                    hostName = "unwitting-degree.org";
                                    ipv4Addresses = new String[]{{
                                        add("iure"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("totam"),
                                    }};
                                }}),
                                add(new GlueRecord() {{
                                    hostName = "baggy-iron.org";
                                    ipv4Addresses = new String[]{{
                                        add("cum"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("necessitatibus"),
                                        add("ratione"),
                                    }};
                                }}),
                                add(new GlueRecord() {{
                                    hostName = "quiet-rabbit.name";
                                    ipv4Addresses = new String[]{{
                                        add("aliquam"),
                                        add("ad"),
                                        add("repellat"),
                                    }};
                                    ipv6Addresses = new String[]{{
                                        add("corporis"),
                                    }};
                                }}),
                            }};
                            googleDomainsDns = new GoogleDomainsDnsInput() {{
                                dsState = GoogleDomainsDnsDsStateEnum.DS_RECORDS_UNPUBLISHED;
                            }};;
                        }};;
                        domainName = "nihil";
                        labels = new java.util.HashMap<String, String>() {{
                            put("voluptas", "alias");
                            put("maiores", "reiciendis");
                            put("dolores", "id");
                        }};
                        managementSettings = new ManagementSettingsInput() {{
                            transferLockState = ManagementSettingsTransferLockStateEnum.TRANSFER_LOCK_STATE_UNSPECIFIED;
                        }};;
                        pendingContactSettings = new ContactSettings() {{
                            adminContact = new Contact() {{
                                email = "Marilyne92@gmail.com";
                                faxNumber = "omnis";
                                phoneNumber = "quaerat";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("ex"),
                                        add("ut"),
                                    }};
                                    administrativeArea = "culpa";
                                    languageCode = "adipisci";
                                    locality = "debitis";
                                    organization = "laudantium";
                                    postalCode = "39453";
                                    recipients = new String[]{{
                                        add("reiciendis"),
                                        add("provident"),
                                    }};
                                    regionCode = "aspernatur";
                                    revision = 354506;
                                    sortingCode = "quasi";
                                    sublocality = "animi";
                                }};;
                            }};;
                            privacy = ContactSettingsPrivacyEnum.PUBLIC_CONTACT_DATA;
                            registrantContact = new Contact() {{
                                email = "Lane.Schuster@yahoo.com";
                                faxNumber = "aliquid";
                                phoneNumber = "accusantium";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("doloribus"),
                                        add("ullam"),
                                        add("in"),
                                        add("nam"),
                                    }};
                                    administrativeArea = "earum";
                                    languageCode = "officia";
                                    locality = "laborum";
                                    organization = "placeat";
                                    postalCode = "95897";
                                    recipients = new String[]{{
                                        add("rerum"),
                                    }};
                                    regionCode = "tempora";
                                    revision = 335498;
                                    sortingCode = "inventore";
                                    sublocality = "fugit";
                                }};;
                            }};;
                            technicalContact = new Contact() {{
                                email = "Angie13@hotmail.com";
                                faxNumber = "eum";
                                phoneNumber = "eius";
                                postalAddress = new PostalAddress() {{
                                    addressLines = new String[]{{
                                        add("at"),
                                        add("impedit"),
                                        add("eos"),
                                    }};
                                    administrativeArea = "sapiente";
                                    languageCode = "eum";
                                    locality = "dicta";
                                    organization = "minima";
                                    postalCode = "55979";
                                    recipients = new String[]{{
                                        add("eaque"),
                                        add("earum"),
                                        add("perspiciatis"),
                                        add("maiores"),
                                    }};
                                    regionCode = "debitis";
                                    revision = 399802;
                                    sortingCode = "porro";
                                    sublocality = "suscipit";
                                }};;
                            }};;
                        }};;
                    }};;
                    validateOnly = false;
                    yearlyPrice = new Money() {{
                        currencyCode = "dolorem";
                        nanos = 147808;
                        units = "cumque";
                    }};;
                }};;
                accessToken = "fuga";
                alt = AltEnum.JSON;
                callback = "animi";
                fields = "necessitatibus";
                key = "nulla";
                oauthToken = "consequatur";
                prettyPrint = false;
                quotaUser = "quasi";
                uploadType = "et";
                uploadProtocol = "ducimus";
            }};            

            DomainsProjectsLocationsRegistrationsTransferResponse res = sdk.projects.domainsProjectsLocationsRegistrationsTransfer(req, new DomainsProjectsLocationsRegistrationsTransferSecurity("natus", "occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
