# people

### Available Operations

* [peoplePeopleBatchCreateContacts](#peoplepeoplebatchcreatecontacts) - Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchDeleteContacts](#peoplepeoplebatchdeletecontacts) - Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleBatchUpdateContacts](#peoplepeoplebatchupdatecontacts) - Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleConnectionsList](#peoplepeopleconnectionslist) - Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
* [peoplePeopleCreateContact](#peoplepeoplecreatecontact) - Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContact](#peoplepeopledeletecontact) - Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleDeleteContactPhoto](#peoplepeopledeletecontactphoto) - Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
* [peoplePeopleGet](#peoplepeopleget) - Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleGetBatchGet](#peoplepeoplegetbatchget) - Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [peoplePeopleListDirectoryPeople](#peoplepeoplelistdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
* [peoplePeopleSearchContacts](#peoplepeoplesearchcontacts) - Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
* [peoplePeopleSearchDirectoryPeople](#peoplepeoplesearchdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
* [peoplePeopleUpdateContact](#peoplepeopleupdatecontact) - Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [peoplePeopleUpdateContactPhoto](#peoplepeopleupdatecontactphoto) - Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## peoplePeopleBatchCreateContacts

Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleBatchCreateContactsRequest;
import org.openapis.openapi.models.operations.PeoplePeopleBatchCreateContactsResponse;
import org.openapis.openapi.models.operations.PeoplePeopleBatchCreateContactsSecurity;
import org.openapis.openapi.models.shared.AddressInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchCreateContactsRequestInput;
import org.openapis.openapi.models.shared.BatchCreateContactsRequestSourcesEnum;
import org.openapis.openapi.models.shared.BiographyContentTypeEnum;
import org.openapis.openapi.models.shared.BiographyInput;
import org.openapis.openapi.models.shared.BirthdayInput;
import org.openapis.openapi.models.shared.BraggingRightsInput;
import org.openapis.openapi.models.shared.CalendarUrlInput;
import org.openapis.openapi.models.shared.ClientDataInput;
import org.openapis.openapi.models.shared.ContactGroupMembershipInput;
import org.openapis.openapi.models.shared.ContactToCreateInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DomainMembership;
import org.openapis.openapi.models.shared.EmailAddressInput;
import org.openapis.openapi.models.shared.EventInput;
import org.openapis.openapi.models.shared.ExternalIdInput;
import org.openapis.openapi.models.shared.FieldMetadataInput;
import org.openapis.openapi.models.shared.FileAsInput;
import org.openapis.openapi.models.shared.GenderInput;
import org.openapis.openapi.models.shared.ImClientInput;
import org.openapis.openapi.models.shared.InterestInput;
import org.openapis.openapi.models.shared.LocaleInput;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MiscKeywordInput;
import org.openapis.openapi.models.shared.MiscKeywordTypeEnum;
import org.openapis.openapi.models.shared.NameInput;
import org.openapis.openapi.models.shared.NicknameInput;
import org.openapis.openapi.models.shared.NicknameTypeEnum;
import org.openapis.openapi.models.shared.OccupationInput;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.PersonInput;
import org.openapis.openapi.models.shared.PersonMetadataInput;
import org.openapis.openapi.models.shared.PhoneNumberInput;
import org.openapis.openapi.models.shared.RelationInput;
import org.openapis.openapi.models.shared.ResidenceInput;
import org.openapis.openapi.models.shared.SipAddressInput;
import org.openapis.openapi.models.shared.SkillInput;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.UrlInput;
import org.openapis.openapi.models.shared.UserDefinedInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleBatchCreateContactsRequest req = new PeoplePeopleBatchCreateContactsRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                batchCreateContactsRequestInput = new BatchCreateContactsRequestInput() {{
                    contacts = new org.openapis.openapi.models.shared.ContactToCreateInput[]{{
                        add(new ContactToCreateInput() {{
                            contactPerson = new PersonInput() {{
                                addresses = new org.openapis.openapi.models.shared.AddressInput[]{{
                                    add(new AddressInput() {{
                                        city = "Lake Kevinboro";
                                        country = "Philippines";
                                        countryCode = "PT";
                                        extendedAddress = "labore";
                                        formattedValue = "delectus";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "eum";
                                                id = "3c969e9a-3efa-477d-bb14-cd66ae395efb";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        poBox = "nam";
                                        postalCode = "55926-3466";
                                        region = "molestiae";
                                        streetAddress = "perferendis";
                                        type = "nihil";
                                    }}),
                                }};
                                biographies = new org.openapis.openapi.models.shared.BiographyInput[]{{
                                    add(new BiographyInput() {{
                                        contentType = BiographyContentTypeEnum.TEXT_HTML;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "id";
                                                id = "4469b6e2-1419-4598-90af-a563e2516fe4";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "deleniti";
                                    }}),
                                    add(new BiographyInput() {{
                                        contentType = BiographyContentTypeEnum.TEXT_HTML;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "in";
                                                id = "11e5b7fd-2ed0-4289-a1cd-dc692601fb57";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "nam";
                                    }}),
                                }};
                                birthdays = new org.openapis.openapi.models.shared.BirthdayInput[]{{
                                    add(new BirthdayInput() {{
                                        date = new Date() {{
                                            day = 866383;
                                            month = 365496;
                                            year = 975522;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "perferendis";
                                                id = "d30c5fbb-2587-4053-a02c-73d5fe9b90c2";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        text = "error";
                                    }}),
                                }};
                                braggingRights = new org.openapis.openapi.models.shared.BraggingRightsInput[]{{
                                    add(new BraggingRightsInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "occaecati";
                                                id = "b3fe49a8-d9cb-4f48-a333-23f9b77f3a41";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "ipsa";
                                    }}),
                                }};
                                calendarUrls = new org.openapis.openapi.models.shared.CalendarUrlInput[]{{
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "odio";
                                                id = "4ebf6928-0d1b-4a77-a89e-bf737ae4203c";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "ad";
                                        url = "saepe";
                                    }}),
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "suscipit";
                                                id = "a95d8a0d-446c-4e2a-b7a7-3cf3be453f87";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "expedita";
                                        url = "neque";
                                    }}),
                                }};
                                clientData = new org.openapis.openapi.models.shared.ClientDataInput[]{{
                                    add(new ClientDataInput() {{
                                        key = "vel";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "libero";
                                                id = "5a73429c-db1a-4842-abb6-79d2322715bf";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "cumque";
                                    }}),
                                }};
                                emailAddresses = new org.openapis.openapi.models.shared.EmailAddressInput[]{{
                                    add(new EmailAddressInput() {{
                                        displayName = "nobis";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "et";
                                                id = "e31b8b90-f344-43a1-908e-0adcf4b92187";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptatibus";
                                        value = "quisquam";
                                    }}),
                                    add(new EmailAddressInput() {{
                                        displayName = "vero";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "omnis";
                                                id = "53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "ducimus";
                                        value = "alias";
                                    }}),
                                    add(new EmailAddressInput() {{
                                        displayName = "officia";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "tempora";
                                                id = "5626d436-813f-416d-9f5f-ce6c556146c3";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "aspernatur";
                                        value = "minima";
                                    }}),
                                }};
                                etag = "eaque";
                                events = new org.openapis.openapi.models.shared.EventInput[]{{
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 725595;
                                            month = 13948;
                                            year = 11427;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "deleniti";
                                                id = "c42e141a-ac36-46c8-9d6b-144290747477";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "fuga";
                                    }}),
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 442015;
                                            month = 695626;
                                            year = 852635;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ut";
                                                id = "66d28c10-ab3c-4dca-8251-904e523c7e0b";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "dignissimos";
                                    }}),
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 76956;
                                            month = 469498;
                                            year = 518835;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "accusamus";
                                                id = "4796f2a7-0c68-4828-aaa4-82562f222e98";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "esse";
                                    }}),
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 910545;
                                            month = 882042;
                                            year = 82971;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "esse";
                                                id = "cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "quasi";
                                    }}),
                                }};
                                externalIds = new org.openapis.openapi.models.shared.ExternalIdInput[]{{
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "error";
                                                id = "9dd2efd1-21aa-46f1-a674-bdb04f157560";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "qui";
                                        value = "quibusdam";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ex";
                                                id = "8ea19f1d-1705-4133-9d08-086a1840394c";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptas";
                                        value = "aut";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "dignissimos";
                                                id = "1f93f5f0-642d-4ac7-af51-5cc413aa63aa";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "totam";
                                        value = "fugiat";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "vel";
                                                id = "7864dbb6-75fd-45e6-8b37-5ed4f6fbee41";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "adipisci";
                                        value = "non";
                                    }}),
                                }};
                                fileAses = new org.openapis.openapi.models.shared.FileAsInput[]{{
                                    add(new FileAsInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "beatae";
                                                id = "7fe35b60-eb1e-4a42-a555-ba3c28744ed5";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "cum";
                                    }}),
                                }};
                                genders = new org.openapis.openapi.models.shared.GenderInput[]{{
                                    add(new GenderInput() {{
                                        addressMeAs = "quas";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "hic";
                                                id = "3a8d8f5c-0b2f-42fb-bb19-4a276b26916f";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "illo";
                                    }}),
                                    add(new GenderInput() {{
                                        addressMeAs = "reiciendis";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "perferendis";
                                                id = "8f4294e3-698f-4447-b603-e8b445e80ca5";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "recusandae";
                                    }}),
                                    add(new GenderInput() {{
                                        addressMeAs = "reiciendis";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "nulla";
                                                id = "20e457e1-858b-46a8-9fbe-3a5aa8e4824d";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "culpa";
                                    }}),
                                }};
                                imClients = new org.openapis.openapi.models.shared.ImClientInput[]{{
                                    add(new ImClientInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "magnam";
                                                id = "075088e5-1862-4065-a904-f3b1194b8abf";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        protocol = "alias";
                                        type = "amet";
                                        username = "Luther_Klocko";
                                    }}),
                                    add(new ImClientInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "provident";
                                                id = "dfe0ab7d-a8a5-40ce-987f-86bc173d689e";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        protocol = "accusamus";
                                        type = "natus";
                                        username = "Erling_Collier";
                                    }}),
                                    add(new ImClientInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "corrupti";
                                                id = "d986e881-ead4-4f0e-9012-563f94e29e97";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        protocol = "eveniet";
                                        type = "occaecati";
                                        username = "Carolanne.Considine";
                                    }}),
                                }};
                                interests = new org.openapis.openapi.models.shared.InterestInput[]{{
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "error";
                                                id = "15be3e06-0807-4e2b-ae3a-b8845f0597a6";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "maiores";
                                    }}),
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "reiciendis";
                                                id = "2a54a31e-9476-44a3-a865-e7956f9251a5";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "provident";
                                    }}),
                                }};
                                locales = new org.openapis.openapi.models.shared.LocaleInput[]{{
                                    add(new LocaleInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "animi";
                                                id = "660ff57b-faad-44f9-afc1-b4512c103264";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "at";
                                    }}),
                                    add(new LocaleInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "impedit";
                                                id = "2f615199-ebfd-40e9-be6c-632ca3aed011";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "natus";
                                    }}),
                                    add(new LocaleInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "occaecati";
                                                id = "6312fde0-4771-4778-bf61-d017476360a1";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "fugiat";
                                    }}),
                                    add(new LocaleInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "expedita";
                                                id = "6a660659-a1ad-4eaa-b585-1d6c645b08b6";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "voluptatum";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.LocationInput[]{{
                                    add(new LocationInput() {{
                                        buildingId = "veritatis";
                                        current = false;
                                        deskCode = "rerum";
                                        floor = "est";
                                        floorSection = "culpa";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "voluptatem";
                                                id = "fe1ade00-8e6f-48c5-b350-d8cdb5a34181";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "dolor";
                                        value = "consequatur";
                                    }}),
                                    add(new LocationInput() {{
                                        buildingId = "architecto";
                                        current = false;
                                        deskCode = "sit";
                                        floor = "modi";
                                        floorSection = "fugit";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ab";
                                                id = "813d5208-ece7-4e25-bb66-8451c6c6e205";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "quasi";
                                        value = "nisi";
                                    }}),
                                    add(new LocationInput() {{
                                        buildingId = "at";
                                        current = false;
                                        deskCode = "vero";
                                        floor = "est";
                                        floorSection = "harum";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "sequi";
                                                id = "fec9578a-6458-4427-ba84-18d162309fb0";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "eos";
                                        value = "occaecati";
                                    }}),
                                }};
                                memberships = new org.openapis.openapi.models.shared.MembershipInput[]{{
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "magni";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "inventore";
                                                id = "aefb9f58-c4d8-46e6-8e4b-e056013f59da";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "nemo";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "reprehenderit";
                                                id = "a59ecfef-66ef-41ca-a338-3c2beb477373";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "deleniti";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quibusdam";
                                                id = "72f64d1d-b1f2-4c43-9066-1e96349e1cf9";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                }};
                                metadata = new PersonMetadataInput() {{
                                    sources = new org.openapis.openapi.models.shared.SourceInput[]{{
                                        add(new SourceInput() {{
                                            etag = "nisi";
                                            id = "e3a43700-0ae6-4b6b-89b8-f759eac55a97";
                                            type = SourceTypeEnum.PROFILE;
                                        }}),
                                    }};
                                }};
                                miscKeywords = new org.openapis.openapi.models.shared.MiscKeywordInput[]{{
                                    add(new MiscKeywordInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "vero";
                                                id = "31135296-5bb8-4a72-8261-1435e139dbc2";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = MiscKeywordTypeEnum.OUTLOOK_MILEAGE;
                                        value = "omnis";
                                    }}),
                                }};
                                names = new org.openapis.openapi.models.shared.NameInput[]{{
                                    add(new NameInput() {{
                                        familyName = "dicta";
                                        givenName = "id";
                                        honorificPrefix = "libero";
                                        honorificSuffix = "fugiat";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "officia";
                                                id = "8c070e10-84cb-4067-ad1a-d879eeb9665b";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "corporis";
                                        phoneticFamilyName = "officiis";
                                        phoneticFullName = "voluptatibus";
                                        phoneticGivenName = "cum";
                                        phoneticHonorificPrefix = "at";
                                        phoneticHonorificSuffix = "alias";
                                        phoneticMiddleName = "quia";
                                        unstructuredName = "quidem";
                                    }}),
                                    add(new NameInput() {{
                                        familyName = "fuga";
                                        givenName = "repudiandae";
                                        honorificPrefix = "accusantium";
                                        honorificSuffix = "expedita";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "officiis";
                                                id = "2d782259-e3ea-44b5-997f-92443da7ce52";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "voluptatum";
                                        phoneticFamilyName = "cupiditate";
                                        phoneticFullName = "minima";
                                        phoneticGivenName = "placeat";
                                        phoneticHonorificPrefix = "enim";
                                        phoneticHonorificSuffix = "neque";
                                        phoneticMiddleName = "in";
                                        unstructuredName = "minus";
                                    }}),
                                    add(new NameInput() {{
                                        familyName = "eum";
                                        givenName = "modi";
                                        honorificPrefix = "corporis";
                                        honorificSuffix = "magnam";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "voluptates";
                                                id = "fb0b3489-6c3c-4a5a-8fbe-2fd570757792";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "veritatis";
                                        phoneticFamilyName = "ducimus";
                                        phoneticFullName = "voluptate";
                                        phoneticGivenName = "pariatur";
                                        phoneticHonorificPrefix = "itaque";
                                        phoneticHonorificSuffix = "similique";
                                        phoneticMiddleName = "optio";
                                        unstructuredName = "ex";
                                    }}),
                                }};
                                nicknames = new org.openapis.openapi.models.shared.NicknameInput[]{{
                                    add(new NicknameInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "commodi";
                                                id = "ecb57340-9e3e-4b1e-9a2b-12eb07f116db";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = NicknameTypeEnum.OTHER_NAME;
                                        value = "nemo";
                                    }}),
                                    add(new NicknameInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "aliquam";
                                                id = "5fc95fa8-8970-4e18-9dbb-30fcb33ea055";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = NicknameTypeEnum.DEFAULT_;
                                        value = "cupiditate";
                                    }}),
                                }};
                                occupations = new org.openapis.openapi.models.shared.OccupationInput[]{{
                                    add(new OccupationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "eligendi";
                                                id = "d44e2f52-d82d-4351-bbb6-f48b656bcdb3";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "voluptatibus";
                                    }}),
                                    add(new OccupationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "voluptatibus";
                                                id = "2e4b2753-7a8c-4d9e-b319-c177d525f77b";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "ab";
                                    }}),
                                }};
                                organizations = new org.openapis.openapi.models.shared.OrganizationInput[]{{
                                    add(new OrganizationInput() {{
                                        costCenter = "accusamus";
                                        current = false;
                                        department = "saepe";
                                        domain = "tempore";
                                        endDate = new Date() {{
                                            day = 334018;
                                            month = 176499;
                                            year = 970079;
                                        }};
                                        fullTimeEquivalentMillipercent = 939161;
                                        jobDescription = "reprehenderit";
                                        location = "praesentium";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "nemo";
                                                id = "fc37814d-4c98-4e0c-abb8-9eb75dad636c";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        name = "Mrs. Donna Hand";
                                        phoneticName = "praesentium";
                                        startDate = new Date() {{
                                            day = 695526;
                                            month = 736853;
                                            year = 230411;
                                        }};
                                        symbol = "quasi";
                                        title = "Mr.";
                                        type = "laudantium";
                                    }}),
                                    add(new OrganizationInput() {{
                                        costCenter = "doloremque";
                                        current = false;
                                        department = "earum";
                                        domain = "iusto";
                                        endDate = new Date() {{
                                            day = 228646;
                                            month = 587967;
                                            year = 677141;
                                        }};
                                        fullTimeEquivalentMillipercent = 897956;
                                        jobDescription = "provident";
                                        location = "repudiandae";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "consequatur";
                                                id = "57eb809e-2810-4331-b398-1d4c700b607f";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        name = "Rene Feeney";
                                        phoneticName = "consectetur";
                                        startDate = new Date() {{
                                            day = 744101;
                                            month = 620500;
                                            year = 839807;
                                        }};
                                        symbol = "officia";
                                        title = "Mrs.";
                                        type = "tenetur";
                                    }}),
                                }};
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumberInput[]{{
                                    add(new PhoneNumberInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quo";
                                                id = "eda7e23f-2257-4411-baf4-b7544e472e80";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "deleniti";
                                        value = "enim";
                                    }}),
                                }};
                                relations = new org.openapis.openapi.models.shared.RelationInput[]{{
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "similique";
                                                id = "5b40463a-7d57-45f1-800e-764ad7334ec1";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "iusto";
                                        type = "quas";
                                    }}),
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "et";
                                                id = "b36a0808-8d10-40ef-ada2-00ef0422eb21";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "modi";
                                        type = "optio";
                                    }}),
                                }};
                                residences = new org.openapis.openapi.models.shared.ResidenceInput[]{{
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "molestias";
                                                id = "ab8366c7-23ff-4da9-a06b-ee4825c1fc0e";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "architecto";
                                    }}),
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "enim";
                                                id = "c80bff91-8544-4ec4-adef-cce8f1977773";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "vel";
                                    }}),
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "neque";
                                                id = "562a7b40-8f05-4e3d-88fd-af313a1f5fd9";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "explicabo";
                                    }}),
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ipsam";
                                                id = "9c0b36f2-5ea9-444f-bb75-6c11f6c37a51";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "aliquid";
                                    }}),
                                }};
                                resourceName = "magni";
                                sipAddresses = new org.openapis.openapi.models.shared.SipAddressInput[]{{
                                    add(new SipAddressInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "adipisci";
                                                id = "835bbc05-a23a-445c-afc5-fde10a0ce216";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "debitis";
                                        value = "ullam";
                                    }}),
                                    add(new SipAddressInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "architecto";
                                                id = "0019c6dc-5e34-4762-b99b-fbbe6949fb2b";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "incidunt";
                                        value = "recusandae";
                                    }}),
                                }};
                                skills = new org.openapis.openapi.models.shared.SkillInput[]{{
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "id";
                                                id = "e6c3d5db-3ade-4bd5-9aea-4c506a8aa94c";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "fugit";
                                    }}),
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "aliquid";
                                                id = "44cf5e9d-9a45-478a-9c1a-c600dec001ac";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "quae";
                                    }}),
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "magni";
                                                id = "e2ec09ff-8f0f-4816-bf34-77c13e902c14";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "odit";
                                    }}),
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "corporis";
                                                id = "b0960a66-8151-4a47-aaf9-23c5949f83f3";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "ipsa";
                                    }}),
                                }};
                                urls = new org.openapis.openapi.models.shared.UrlInput[]{{
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "tenetur";
                                                id = "876ffb90-1c6e-4cbb-8e24-3cf789ffafed";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "corporis";
                                        value = "velit";
                                    }}),
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "officiis";
                                                id = "5ae6e0ac-184c-42b9-8247-c88373a40e19";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "sunt";
                                        value = "maiores";
                                    }}),
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "neque";
                                                id = "2e550557-56f5-4d56-90bd-0af2dfe13db4";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "iure";
                                        value = "explicabo";
                                    }}),
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "minus";
                                                id = "ba3f8941-aebc-40b8-8a69-24d3b2ecfcc8";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptatum";
                                        value = "iste";
                                    }}),
                                }};
                                userDefined = new org.openapis.openapi.models.shared.UserDefinedInput[]{{
                                    add(new UserDefinedInput() {{
                                        key = "accusantium";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "illo";
                                                id = "0f5dd3d6-fa18-404e-94c8-2f168a363c88";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "adipisci";
                                    }}),
                                    add(new UserDefinedInput() {{
                                        key = "recusandae";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "tempora";
                                                id = "84380b1f-6b8c-4a27-9a60-a04c495cc699";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "nihil";
                                    }}),
                                }};
                            }};
                        }}),
                        add(new ContactToCreateInput() {{
                            contactPerson = new PersonInput() {{
                                addresses = new org.openapis.openapi.models.shared.AddressInput[]{{
                                    add(new AddressInput() {{
                                        city = "Hilpertland";
                                        country = "Saint Vincent and the Grenadines";
                                        countryCode = "BQ";
                                        extendedAddress = "harum";
                                        formattedValue = "facere";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "facilis";
                                                id = "1cf4b888-ebdf-4c4c-8ca9-9bc7fc0b2dce";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        poBox = "aut";
                                        postalCode = "42921-7004";
                                        region = "at";
                                        streetAddress = "eum";
                                        type = "reprehenderit";
                                    }}),
                                }};
                                biographies = new org.openapis.openapi.models.shared.BiographyInput[]{{
                                    add(new BiographyInput() {{
                                        contentType = BiographyContentTypeEnum.TEXT_PLAIN;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "nihil";
                                                id = "8ba8581a-5820-48c5-8fef-a9c95f2eac55";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "nemo";
                                    }}),
                                    add(new BiographyInput() {{
                                        contentType = BiographyContentTypeEnum.TEXT_HTML;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "nesciunt";
                                                id = "07cfee81-206e-4281-bfa4-a41c480d3f21";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "fugit";
                                    }}),
                                    add(new BiographyInput() {{
                                        contentType = BiographyContentTypeEnum.TEXT_HTML;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "hic";
                                                id = "03102d51-4f4c-4c6f-98bf-9621a6a4f77a";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "esse";
                                    }}),
                                }};
                                birthdays = new org.openapis.openapi.models.shared.BirthdayInput[]{{
                                    add(new BirthdayInput() {{
                                        date = new Date() {{
                                            day = 935161;
                                            month = 246402;
                                            year = 884765;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "eius";
                                                id = "be752c65-b344-418e-bbb9-1c8d975e0e84";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        text = "omnis";
                                    }}),
                                    add(new BirthdayInput() {{
                                        date = new Date() {{
                                            day = 848063;
                                            month = 526584;
                                            year = 949370;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "deleniti";
                                                id = "4f144f3e-07ed-4cc4-aa5f-3cabd905a972";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        text = "accusantium";
                                    }}),
                                    add(new BirthdayInput() {{
                                        date = new Date() {{
                                            day = 321473;
                                            month = 392752;
                                            year = 474185;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quia";
                                                id = "8227b2d3-0947-40bf-ba4f-a87cf535a6fa";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        text = "corporis";
                                    }}),
                                    add(new BirthdayInput() {{
                                        date = new Date() {{
                                            day = 252567;
                                            month = 900368;
                                            year = 719469;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "maiores";
                                                id = "60c321f0-23b7-45d2-b67f-e1a0cc8df79f";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        text = "similique";
                                    }}),
                                }};
                                braggingRights = new org.openapis.openapi.models.shared.BraggingRightsInput[]{{
                                    add(new BraggingRightsInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "provident";
                                                id = "6d90c364-b7c1-45df-bace-188b1c4ee2c8";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "vel";
                                    }}),
                                }};
                                calendarUrls = new org.openapis.openapi.models.shared.CalendarUrlInput[]{{
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "recusandae";
                                                id = "611feeb1-c7cb-4db6-aec7-4378ba253177";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "odio";
                                        url = "nulla";
                                    }}),
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "impedit";
                                                id = "915ad2ca-f5dd-4672-bdc0-f5ae2f3a6b70";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "laudantium";
                                        url = "iusto";
                                    }}),
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "corrupti";
                                                id = "756143f5-a6c9-48b5-9554-080d40bcacc6";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "soluta";
                                        url = "fugiat";
                                    }}),
                                    add(new CalendarUrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "laboriosam";
                                                id = "b5f3ec90-9304-4f92-abad-2553819b474b";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptates";
                                        url = "possimus";
                                    }}),
                                }};
                                clientData = new org.openapis.openapi.models.shared.ClientDataInput[]{{
                                    add(new ClientDataInput() {{
                                        key = "voluptatem";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "repudiandae";
                                                id = "56248fff-639a-4910-abdc-ab62676696e1";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "quisquam";
                                    }}),
                                }};
                                emailAddresses = new org.openapis.openapi.models.shared.EmailAddressInput[]{{
                                    add(new EmailAddressInput() {{
                                        displayName = "alias";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "qui";
                                                id = "21b335d8-9acb-43ec-bda8-d0c549ef0300";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "perspiciatis";
                                        value = "quam";
                                    }}),
                                }};
                                etag = "atque";
                                events = new org.openapis.openapi.models.shared.EventInput[]{{
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 406493;
                                            month = 101770;
                                            year = 953564;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "laborum";
                                                id = "1cf20688-f77c-41ff-871d-ca163f2a3c80";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "omnis";
                                    }}),
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 470321;
                                            month = 945190;
                                            year = 959696;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "velit";
                                                id = "34cddf85-7a9e-4618-b6c6-ab21d29dfc94";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptas";
                                    }}),
                                    add(new EventInput() {{
                                        date = new Date() {{
                                            day = 987384;
                                            month = 926027;
                                            year = 787452;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "facere";
                                                id = "79939006-6a6d-42d0-8035-5338cec086fa";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "veritatis";
                                    }}),
                                }};
                                externalIds = new org.openapis.openapi.models.shared.ExternalIdInput[]{{
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "iste";
                                                id = "152cb311-9167-4b8e-bc8d-b03408d6d364";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "tenetur";
                                        value = "assumenda";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "dolore";
                                                id = "55906d12-63d4-48e9-b5c2-c9e81f30be3e";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "adipisci";
                                        value = "magni";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "aperiam";
                                                id = "2d721657-6506-4641-870d-9d21f9ad030c";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "debitis";
                                        value = "cumque";
                                    }}),
                                    add(new ExternalIdInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "maxime";
                                                id = "11a08364-2906-48b8-902a-55e7f73bc845";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "sequi";
                                        value = "magni";
                                    }}),
                                }};
                                fileAses = new org.openapis.openapi.models.shared.FileAsInput[]{{
                                    add(new FileAsInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "est";
                                                id = "319f4bad-f947-4c9a-867b-c42426665816";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "fugiat";
                                    }}),
                                }};
                                genders = new org.openapis.openapi.models.shared.GenderInput[]{{
                                    add(new GenderInput() {{
                                        addressMeAs = "culpa";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "atque";
                                                id = "ef51fcb4-c593-4ec1-acda-ad0ec7afedbd";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "aut";
                                    }}),
                                    add(new GenderInput() {{
                                        addressMeAs = "temporibus";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "tenetur";
                                                id = "448a47f9-390c-4588-8098-3dabf9ef3ffd";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "omnis";
                                    }}),
                                    add(new GenderInput() {{
                                        addressMeAs = "delectus";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "odio";
                                                id = "f079af4d-3572-44cd-b0f4-d281187d5684";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "accusamus";
                                    }}),
                                    add(new GenderInput() {{
                                        addressMeAs = "nulla";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "repudiandae";
                                                id = "d85a9065-e628-4bdf-8203-2b6c879923b7";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "vitae";
                                    }}),
                                }};
                                imClients = new org.openapis.openapi.models.shared.ImClientInput[]{{
                                    add(new ImClientInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ad";
                                                id = "84f7ae12-c689-41f8-ace1-157172305377";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        protocol = "minus";
                                        type = "a";
                                        username = "Marques_Leannon";
                                    }}),
                                }};
                                interests = new org.openapis.openapi.models.shared.InterestInput[]{{
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "omnis";
                                                id = "75e35668-6092-4e9c-bddc-5f111dea1026";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "enim";
                                    }}),
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "numquam";
                                                id = "1a4d190f-eb21-4780-bccc-0dbbddb48470";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "reiciendis";
                                    }}),
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "facilis";
                                                id = "4e391e6b-c158-4c4c-8e54-599ea342260e";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "nobis";
                                    }}),
                                    add(new InterestInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "qui";
                                                id = "00ce78a1-bd8f-4b7a-8a11-6ce723d4097f";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "ratione";
                                    }}),
                                }};
                                locales = new org.openapis.openapi.models.shared.LocaleInput[]{{
                                    add(new LocaleInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "debitis";
                                                id = "9af725b2-9122-4030-983f-5aeb7799d22e";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "optio";
                                    }}),
                                }};
                                locations = new org.openapis.openapi.models.shared.LocationInput[]{{
                                    add(new LocationInput() {{
                                        buildingId = "repellat";
                                        current = false;
                                        deskCode = "atque";
                                        floor = "magnam";
                                        floorSection = "perspiciatis";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "amet";
                                                id = "825fdc42-c876-4c2c-adfb-4cfc1c76230f";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "numquam";
                                        value = "vitae";
                                    }}),
                                }};
                                memberships = new org.openapis.openapi.models.shared.MembershipInput[]{{
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "nam";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "architecto";
                                                id = "bd23fdb1-4db6-4be5-a685-998e22ae20da";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "commodi";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "a";
                                                id = "c2b271a2-89c5-47e8-94e9-0439d2224656";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "modi";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "nisi";
                                                id = "2407084f-7ab3-47ce-b022-25194db55410";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                    add(new MembershipInput() {{
                                        contactGroupMembership = new ContactGroupMembershipInput() {{
                                            contactGroupResourceName = "possimus";
                                        }};
                                        domainMembership = new DomainMembership() {{
                                            inViewerDomain = false;
                                        }};
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quo";
                                                id = "669af90a-26c7-4cdc-981f-068981d6bb33";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                    }}),
                                }};
                                metadata = new PersonMetadataInput() {{
                                    sources = new org.openapis.openapi.models.shared.SourceInput[]{{
                                        add(new SourceInput() {{
                                            etag = "similique";
                                            id = "a348c31b-f407-4ee4-bcf0-c42b78f15626";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }}),
                                        add(new SourceInput() {{
                                            etag = "excepturi";
                                            id = "8a0dc766-324c-4cb0-ac8c-a12d02529270";
                                            type = SourceTypeEnum.CONTACT;
                                        }}),
                                        add(new SourceInput() {{
                                            etag = "deleniti";
                                            id = "d5722dd8-95b8-4bcf-a4db-959693352f74";
                                            type = SourceTypeEnum.PROFILE;
                                        }}),
                                        add(new SourceInput() {{
                                            etag = "velit";
                                            id = "3994d78d-e3b6-4e93-89f5-abb7f662550a";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }}),
                                    }};
                                }};
                                miscKeywords = new org.openapis.openapi.models.shared.MiscKeywordInput[]{{
                                    add(new MiscKeywordInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "adipisci";
                                                id = "82ac483a-fd23-415b-ba65-0164e06f5bf6";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = MiscKeywordTypeEnum.OTHER;
                                        value = "nemo";
                                    }}),
                                    add(new MiscKeywordInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "molestias";
                                                id = "1bc8bdef-3612-4b63-8205-fda840774a68";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = MiscKeywordTypeEnum.OUTLOOK_SENSITIVITY;
                                        value = "laborum";
                                    }}),
                                    add(new MiscKeywordInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "dolor";
                                                id = "5d086b6f-66fe-4f02-8e9f-443b4257b992";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = MiscKeywordTypeEnum.OUTLOOK_SENSITIVITY;
                                        value = "repellendus";
                                    }}),
                                }};
                                names = new org.openapis.openapi.models.shared.NameInput[]{{
                                    add(new NameInput() {{
                                        familyName = "quibusdam";
                                        givenName = "est";
                                        honorificPrefix = "commodi";
                                        honorificSuffix = "similique";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "autem";
                                                id = "1efa2198-258f-4d0a-9eba-47f7d3ef0496";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "voluptatem";
                                        phoneticFamilyName = "illum";
                                        phoneticFullName = "laboriosam";
                                        phoneticGivenName = "culpa";
                                        phoneticHonorificPrefix = "dicta";
                                        phoneticHonorificSuffix = "atque";
                                        phoneticMiddleName = "ratione";
                                        unstructuredName = "vitae";
                                    }}),
                                    add(new NameInput() {{
                                        familyName = "quisquam";
                                        givenName = "atque";
                                        honorificPrefix = "nihil";
                                        honorificSuffix = "culpa";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "temporibus";
                                                id = "f596fdf1-ad83-47ae-80c1-c19c95ba9986";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "voluptatum";
                                        phoneticFamilyName = "sapiente";
                                        phoneticFullName = "deserunt";
                                        phoneticGivenName = "dolor";
                                        phoneticHonorificPrefix = "hic";
                                        phoneticHonorificSuffix = "iure";
                                        phoneticMiddleName = "sint";
                                        unstructuredName = "autem";
                                    }}),
                                    add(new NameInput() {{
                                        familyName = "iste";
                                        givenName = "cupiditate";
                                        honorificPrefix = "ab";
                                        honorificSuffix = "fuga";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "a";
                                                id = "388ce036-1444-48c7-977a-0ef2f536028e";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        middleName = "itaque";
                                        phoneticFamilyName = "eveniet";
                                        phoneticFullName = "repellat";
                                        phoneticGivenName = "cupiditate";
                                        phoneticHonorificPrefix = "adipisci";
                                        phoneticHonorificSuffix = "aliquam";
                                        phoneticMiddleName = "illo";
                                        unstructuredName = "veniam";
                                    }}),
                                }};
                                nicknames = new org.openapis.openapi.models.shared.NicknameInput[]{{
                                    add(new NicknameInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "necessitatibus";
                                                id = "d7e253f4-c157-4dea-a717-0f445accf667";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = NicknameTypeEnum.OTHER_NAME;
                                        value = "repellat";
                                    }}),
                                }};
                                occupations = new org.openapis.openapi.models.shared.OccupationInput[]{{
                                    add(new OccupationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "soluta";
                                                id = "bad185fe-431d-46bf-9c83-8fbb8c20cb67";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "minus";
                                    }}),
                                    add(new OccupationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ut";
                                                id = "b425e99e-6234-4c9f-bb79-dfeb77a5c38d";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "nam";
                                    }}),
                                    add(new OccupationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "officia";
                                                id = "f91e506e-f890-4a54-b475-f16f56d385a3";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "numquam";
                                    }}),
                                }};
                                organizations = new org.openapis.openapi.models.shared.OrganizationInput[]{{
                                    add(new OrganizationInput() {{
                                        costCenter = "eligendi";
                                        current = false;
                                        department = "autem";
                                        domain = "adipisci";
                                        endDate = new Date() {{
                                            day = 124796;
                                            month = 698844;
                                            year = 580248;
                                        }};
                                        fullTimeEquivalentMillipercent = 593366;
                                        jobDescription = "necessitatibus";
                                        location = "fugit";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "autem";
                                                id = "ced8f9fd-b941-40f6-bbbf-817837b01afd";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        name = "Nina Ledner";
                                        phoneticName = "labore";
                                        startDate = new Date() {{
                                            day = 121118;
                                            month = 501591;
                                            year = 613848;
                                        }};
                                        symbol = "accusamus";
                                        title = "Miss";
                                        type = "incidunt";
                                    }}),
                                    add(new OrganizationInput() {{
                                        costCenter = "labore";
                                        current = false;
                                        department = "blanditiis";
                                        domain = "ducimus";
                                        endDate = new Date() {{
                                            day = 234550;
                                            month = 958060;
                                            year = 337149;
                                        }};
                                        fullTimeEquivalentMillipercent = 33323;
                                        jobDescription = "ratione";
                                        location = "consectetur";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "asperiores";
                                                id = "19dbf125-ce41-452e-ab9c-d7e5224a6a0e";
                                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        name = "Grace Rippin";
                                        phoneticName = "non";
                                        startDate = new Date() {{
                                            day = 457330;
                                            month = 876682;
                                            year = 752919;
                                        }};
                                        symbol = "minima";
                                        title = "Miss";
                                        type = "recusandae";
                                    }}),
                                    add(new OrganizationInput() {{
                                        costCenter = "architecto";
                                        current = false;
                                        department = "voluptatibus";
                                        domain = "autem";
                                        endDate = new Date() {{
                                            day = 449861;
                                            month = 995671;
                                            year = 227129;
                                        }};
                                        fullTimeEquivalentMillipercent = 767555;
                                        jobDescription = "dolore";
                                        location = "optio";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quo";
                                                id = "e4b6d769-6ff3-4c57-8750-1357e44f51f8";
                                                type = SourceTypeEnum.OTHER_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        name = "Lena Goldner";
                                        phoneticName = "sunt";
                                        startDate = new Date() {{
                                            day = 605089;
                                            month = 464490;
                                            year = 887219;
                                        }};
                                        symbol = "dicta";
                                        title = "Ms.";
                                        type = "consectetur";
                                    }}),
                                }};
                                phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumberInput[]{{
                                    add(new PhoneNumberInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "odit";
                                                id = "45467f94-874c-42d5-8c49-72233e66bd8f";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "corporis";
                                        value = "repellendus";
                                    }}),
                                    add(new PhoneNumberInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "aut";
                                                id = "0b979ef2-0387-4320-990c-cc1096400313";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "ipsum";
                                        value = "debitis";
                                    }}),
                                    add(new PhoneNumberInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quis";
                                                id = "044f65fe-72dc-4407-bd0c-c3f408efc15c";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "cum";
                                        value = "dolore";
                                    }}),
                                }};
                                relations = new org.openapis.openapi.models.shared.RelationInput[]{{
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ea";
                                                id = "e1eae0f7-5aed-4f2a-8ab5-8b991c926ddb";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "corrupti";
                                        type = "sint";
                                    }}),
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "eius";
                                                id = "61e7421c-be6d-4950-af0e-a930b69f7ac2";
                                                type = SourceTypeEnum.DOMAIN_CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "esse";
                                        type = "explicabo";
                                    }}),
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "delectus";
                                                id = "88500904-9116-4082-8788-8ec66183bfe9";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "ullam";
                                        type = "unde";
                                    }}),
                                    add(new RelationInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "debitis";
                                                id = "b40ec16f-af75-4b0b-932a-4da37cbaaf44";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        person = "quia";
                                        type = "quod";
                                    }}),
                                }};
                                residences = new org.openapis.openapi.models.shared.ResidenceInput[]{{
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "voluptatum";
                                                id = "42c9b2ad-32da-4fe8-9a88-f4444573fecd";
                                                type = SourceTypeEnum.ACCOUNT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "quam";
                                    }}),
                                    add(new ResidenceInput() {{
                                        current = false;
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "consectetur";
                                                id = "53f63c82-0937-49aa-a9cd-5fbcf79da18a";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "totam";
                                    }}),
                                }};
                                resourceName = "magni";
                                sipAddresses = new org.openapis.openapi.models.shared.SipAddressInput[]{{
                                    add(new SipAddressInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "harum";
                                                id = "f95894e6-861a-4db5-9f9e-5d751c9fe8f7";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "aut";
                                        value = "magni";
                                    }}),
                                }};
                                skills = new org.openapis.openapi.models.shared.SkillInput[]{{
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "voluptatibus";
                                                id = "dc345084-1f17-4644-9637-9f3fb27e21f8";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "consequuntur";
                                    }}),
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "laboriosam";
                                                id = "57b36fc6-b9f5-487c-a525-c67641a8312e";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "quae";
                                    }}),
                                    add(new SkillInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "dolore";
                                                id = "7b4c21cc-b423-4abc-9c91-faabdd88e71f";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "minus";
                                    }}),
                                }};
                                urls = new org.openapis.openapi.models.shared.UrlInput[]{{
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "quas";
                                                id = "252d7771-e7fd-4074-809e-f8d29de1dd70";
                                                type = SourceTypeEnum.CONTACT;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "voluptate";
                                        value = "tempore";
                                    }}),
                                    add(new UrlInput() {{
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "ullam";
                                                id = "da08c57f-a6c7-48a2-96e1-9bafeca61914";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        type = "atque";
                                        value = "dicta";
                                    }}),
                                }};
                                userDefined = new org.openapis.openapi.models.shared.UserDefinedInput[]{{
                                    add(new UserDefinedInput() {{
                                        key = "doloremque";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "cum";
                                                id = "64ff8ae1-70ef-403b-9f37-e4aa86855596";
                                                type = SourceTypeEnum.PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "voluptate";
                                    }}),
                                    add(new UserDefinedInput() {{
                                        key = "nesciunt";
                                        metadata = new FieldMetadataInput() {{
                                            source = new SourceInput() {{
                                                etag = "magni";
                                                id = "aa5dcb66-82cb-470f-8cfd-5fb6e91b9a9f";
                                                type = SourceTypeEnum.DOMAIN_PROFILE;
                                            }};
                                            sourcePrimary = false;
                                        }};
                                        value = "labore";
                                    }}),
                                }};
                            }};
                        }}),
                    }};
                    readMask = "laudantium";
                    sources = new org.openapis.openapi.models.shared.BatchCreateContactsRequestSourcesEnum[]{{
                        add(BatchCreateContactsRequestSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                        add(BatchCreateContactsRequestSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    }};
                }};;
                accessToken = "aspernatur";
                alt = AltEnum.PROTO;
                callback = "dolorem";
                fields = "neque";
                key = "ipsa";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "repellendus";
                uploadType = "soluta";
                uploadProtocol = "aut";
            }};            

            PeoplePeopleBatchCreateContactsResponse res = sdk.people.peoplePeopleBatchCreateContacts(req, new PeoplePeopleBatchCreateContactsSecurity("ullam", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchCreateContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleBatchDeleteContacts

Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleBatchDeleteContactsRequest;
import org.openapis.openapi.models.operations.PeoplePeopleBatchDeleteContactsResponse;
import org.openapis.openapi.models.operations.PeoplePeopleBatchDeleteContactsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchDeleteContactsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleBatchDeleteContactsRequest req = new PeoplePeopleBatchDeleteContactsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                batchDeleteContactsRequest = new BatchDeleteContactsRequest() {{
                    resourceNames = new String[]{{
                        add("sint"),
                        add("voluptates"),
                        add("nihil"),
                        add("ad"),
                    }};
                }};;
                accessToken = "eligendi";
                alt = AltEnum.PROTO;
                callback = "consequatur";
                fields = "sit";
                key = "iure";
                oauthToken = "earum";
                prettyPrint = false;
                quotaUser = "quis";
                uploadType = "dolorem";
                uploadProtocol = "omnis";
            }};            

            PeoplePeopleBatchDeleteContactsResponse res = sdk.people.peoplePeopleBatchDeleteContacts(req, new PeoplePeopleBatchDeleteContactsSecurity("sed", "quo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleBatchUpdateContacts

Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleBatchUpdateContactsRequest;
import org.openapis.openapi.models.operations.PeoplePeopleBatchUpdateContactsResponse;
import org.openapis.openapi.models.operations.PeoplePeopleBatchUpdateContactsSecurity;
import org.openapis.openapi.models.shared.AddressInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BatchUpdateContactsRequestInput;
import org.openapis.openapi.models.shared.BatchUpdateContactsRequestSourcesEnum;
import org.openapis.openapi.models.shared.BiographyContentTypeEnum;
import org.openapis.openapi.models.shared.BiographyInput;
import org.openapis.openapi.models.shared.BirthdayInput;
import org.openapis.openapi.models.shared.BraggingRightsInput;
import org.openapis.openapi.models.shared.CalendarUrlInput;
import org.openapis.openapi.models.shared.ClientDataInput;
import org.openapis.openapi.models.shared.ContactGroupMembershipInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DomainMembership;
import org.openapis.openapi.models.shared.EmailAddressInput;
import org.openapis.openapi.models.shared.EventInput;
import org.openapis.openapi.models.shared.ExternalIdInput;
import org.openapis.openapi.models.shared.FieldMetadataInput;
import org.openapis.openapi.models.shared.FileAsInput;
import org.openapis.openapi.models.shared.GenderInput;
import org.openapis.openapi.models.shared.ImClientInput;
import org.openapis.openapi.models.shared.InterestInput;
import org.openapis.openapi.models.shared.LocaleInput;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MiscKeywordInput;
import org.openapis.openapi.models.shared.MiscKeywordTypeEnum;
import org.openapis.openapi.models.shared.NameInput;
import org.openapis.openapi.models.shared.NicknameInput;
import org.openapis.openapi.models.shared.NicknameTypeEnum;
import org.openapis.openapi.models.shared.OccupationInput;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.PersonInput;
import org.openapis.openapi.models.shared.PersonMetadataInput;
import org.openapis.openapi.models.shared.PhoneNumberInput;
import org.openapis.openapi.models.shared.RelationInput;
import org.openapis.openapi.models.shared.ResidenceInput;
import org.openapis.openapi.models.shared.SipAddressInput;
import org.openapis.openapi.models.shared.SkillInput;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.UrlInput;
import org.openapis.openapi.models.shared.UserDefinedInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleBatchUpdateContactsRequest req = new PeoplePeopleBatchUpdateContactsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                batchUpdateContactsRequestInput = new BatchUpdateContactsRequestInput() {{
                    contacts = new java.util.HashMap<String, org.openapis.openapi.models.shared.PersonInput>() {{
                        put("est", new PersonInput() {{
                            addresses = new org.openapis.openapi.models.shared.AddressInput[]{{
                                add(new AddressInput() {{
                                    city = "Lake Julie";
                                    country = "Rwanda";
                                    countryCode = "YE";
                                    extendedAddress = "provident";
                                    formattedValue = "sunt";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "maiores";
                                            id = "97428ad9-a9f8-4bf8-a211-25359d98387f";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    poBox = "culpa";
                                    postalCode = "58841";
                                    region = "optio";
                                    streetAddress = "nulla";
                                    type = "magni";
                                }}),
                            }};
                            biographies = new org.openapis.openapi.models.shared.BiographyInput[]{{
                                add(new BiographyInput() {{
                                    contentType = BiographyContentTypeEnum.TEXT_PLAIN;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "dolore";
                                            id = "da21729f-2ac4-41ef-9725-f1169ac1e41d";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "deserunt";
                                }}),
                                add(new BiographyInput() {{
                                    contentType = BiographyContentTypeEnum.CONTENT_TYPE_UNSPECIFIED;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "neque";
                                            id = "c23e34f2-dfa4-4a19-bf6d-e922151fe171";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "voluptatem";
                                }}),
                            }};
                            birthdays = new org.openapis.openapi.models.shared.BirthdayInput[]{{
                                add(new BirthdayInput() {{
                                    date = new Date() {{
                                        day = 622485;
                                        month = 537623;
                                        year = 315190;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "nesciunt";
                                            id = "e9f543d8-5443-49ee-a244-60443bc15418";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    text = "quisquam";
                                }}),
                                add(new BirthdayInput() {{
                                    date = new Date() {{
                                        day = 125488;
                                        month = 989206;
                                        year = 357519;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "vel";
                                            id = "e85da783-2eab-4d61-bc3b-0d51a44bf01b";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    text = "nulla";
                                }}),
                                add(new BirthdayInput() {{
                                    date = new Date() {{
                                        day = 546199;
                                        month = 453304;
                                        year = 3201;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "iure";
                                            id = "d46082bf-bdc4-41ff-9d4e-2ae4fb5cb35d";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    text = "dignissimos";
                                }}),
                            }};
                            braggingRights = new org.openapis.openapi.models.shared.BraggingRightsInput[]{{
                                add(new BraggingRightsInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "consectetur";
                                            id = "8f1edb78-359e-4cc5-8b86-0f8cd580ba73";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "sunt";
                                }}),
                                add(new BraggingRightsInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "aperiam";
                                            id = "e4fe4447-297c-4d3b-9dd3-bbce247b7684";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "reiciendis";
                                }}),
                            }};
                            calendarUrls = new org.openapis.openapi.models.shared.CalendarUrlInput[]{{
                                add(new CalendarUrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "exercitationem";
                                            id = "0126d71c-ffbd-40eb-b4b8-421953b44bd3";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "labore";
                                    url = "sequi";
                                }}),
                                add(new CalendarUrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "veritatis";
                                            id = "59d33e59-53c0-4011-b986-3aa41e6c31cc";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "reiciendis";
                                    url = "dicta";
                                }}),
                                add(new CalendarUrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "hic";
                                            id = "cb51c9a4-1ffb-4e9c-bd79-5ee65e076cc7";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "quidem";
                                    url = "delectus";
                                }}),
                                add(new CalendarUrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "eum";
                                            id = "16ea5c71-6419-434b-90f2-e09d19d2fc2f";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "earum";
                                    url = "fugit";
                                }}),
                            }};
                            clientData = new org.openapis.openapi.models.shared.ClientDataInput[]{{
                                add(new ClientDataInput() {{
                                    key = "vitae";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "consequatur";
                                            id = "5944b935-d237-4a72-b908-49d6aed4aecb";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "nemo";
                                }}),
                                add(new ClientDataInput() {{
                                    key = "neque";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "esse";
                                            id = "cd9222c9-ff57-4491-aabf-a2e761f0ca4d";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "quis";
                                }}),
                                add(new ClientDataInput() {{
                                    key = "aliquid";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "vero";
                                            id = "f1031e68-99f0-4c20-81e2-2cd55cc0584a";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "laudantium";
                                }}),
                                add(new ClientDataInput() {{
                                    key = "ut";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "possimus";
                                            id = "76d971fc-820c-465b-837b-b8e0cc885187";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "labore";
                                }}),
                            }};
                            emailAddresses = new org.openapis.openapi.models.shared.EmailAddressInput[]{{
                                add(new EmailAddressInput() {{
                                    displayName = "accusamus";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "consequatur";
                                            id = "4af28c5d-ddb4-46aa-9cfd-6d828da01319";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "vitae";
                                    value = "qui";
                                }}),
                                add(new EmailAddressInput() {{
                                    displayName = "unde";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "ex";
                                            id = "46645c1d-81f2-4904-af56-9b7aff0ea221";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "placeat";
                                    value = "libero";
                                }}),
                                add(new EmailAddressInput() {{
                                    displayName = "saepe";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "ipsa";
                                            id = "71bc163e-279a-43b0-84da-99257d04f408";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "iusto";
                                    value = "laborum";
                                }}),
                                add(new EmailAddressInput() {{
                                    displayName = "in";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "numquam";
                                            id = "2d84496c-bdee-4cf6-b99b-c63562ebfdf5";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "porro";
                                    value = "dolores";
                                }}),
                            }};
                            etag = "iste";
                            events = new org.openapis.openapi.models.shared.EventInput[]{{
                                add(new EventInput() {{
                                    date = new Date() {{
                                        day = 784083;
                                        month = 51562;
                                        year = 411337;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "consequatur";
                                            id = "b06a1287-764e-4ef6-90c6-d6ed9c73dd63";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "nostrum";
                                }}),
                                add(new EventInput() {{
                                    date = new Date() {{
                                        day = 492227;
                                        month = 76818;
                                        year = 361331;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "ipsa";
                                            id = "9a8e870d-3c5a-41f9-8242-c7b66a1f30c7";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "facere";
                                }}),
                            }};
                            externalIds = new org.openapis.openapi.models.shared.ExternalIdInput[]{{
                                add(new ExternalIdInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "exercitationem";
                                            id = "b6719890-f42a-44bb-838d-85b260591d74";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "voluptates";
                                    value = "sequi";
                                }}),
                                add(new ExternalIdInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "eligendi";
                                            id = "2059c9c3-f567-4e0e-a527-65b1d62fcdac";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "architecto";
                                    value = "reiciendis";
                                }}),
                                add(new ExternalIdInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "consequatur";
                                            id = "1216ce22-39e8-4f25-8d0d-19d959f439e3";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "eos";
                                    value = "nisi";
                                }}),
                                add(new ExternalIdInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "commodi";
                                            id = "cbd95f7a-a2b2-4411-b695-d1e6698fcc45";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "commodi";
                                    value = "dolores";
                                }}),
                            }};
                            fileAses = new org.openapis.openapi.models.shared.FileAsInput[]{{
                                add(new FileAsInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "molestiae";
                                            id = "c2977676-3342-4540-b8bf-b5971e981905";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "molestiae";
                                }}),
                            }};
                            genders = new org.openapis.openapi.models.shared.GenderInput[]{{
                                add(new GenderInput() {{
                                    addressMeAs = "totam";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "perspiciatis";
                                            id = "cedbac7f-da39-4594-966b-c2ae480632b9";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "enim";
                                }}),
                            }};
                            imClients = new org.openapis.openapi.models.shared.ImClientInput[]{{
                                add(new ImClientInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "libero";
                                            id = "6fa22063-6982-4855-bcb1-0006bef4921e";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    protocol = "magni";
                                    type = "sit";
                                    username = "Garnett.Dooley26";
                                }}),
                                add(new ImClientInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "perspiciatis";
                                            id = "366ac8ee-0f2b-4f19-988d-40d03f3deba2";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    protocol = "molestiae";
                                    type = "facilis";
                                    username = "Tressa_Emard0";
                                }}),
                            }};
                            interests = new org.openapis.openapi.models.shared.InterestInput[]{{
                                add(new InterestInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "nobis";
                                            id = "40df868f-d524-405c-b331-d492f4f127fb";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "saepe";
                                }}),
                                add(new InterestInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "voluptatem";
                                            id = "bf1f8217-978d-40ac-8a77-aeb7b7021a52";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "quaerat";
                                }}),
                                add(new InterestInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "suscipit";
                                            id = "b64e99fb-0e67-4e09-8fdf-ed5540ef53a3";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "est";
                                }}),
                            }};
                            locales = new org.openapis.openapi.models.shared.LocaleInput[]{{
                                add(new LocaleInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "rerum";
                                            id = "8fe99731-adc0-45d8-9ae2-dfb70fb38742";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "consequatur";
                                }}),
                            }};
                            locations = new org.openapis.openapi.models.shared.LocationInput[]{{
                                add(new LocationInput() {{
                                    buildingId = "adipisci";
                                    current = false;
                                    deskCode = "dolorem";
                                    floor = "ex";
                                    floorSection = "quis";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "eum";
                                            id = "1eca16ef-8945-41bd-b6ee-eb518c4da1fa";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "dolor";
                                    value = "nemo";
                                }}),
                                add(new LocationInput() {{
                                    buildingId = "quis";
                                    current = false;
                                    deskCode = "quasi";
                                    floor = "odit";
                                    floorSection = "delectus";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "doloremque";
                                            id = "6d4e5b72-f0f5-4485-a8a0-424e00a1d6eb";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "modi";
                                    value = "ratione";
                                }}),
                                add(new LocationInput() {{
                                    buildingId = "aliquam";
                                    current = false;
                                    deskCode = "ea";
                                    floor = "aliquam";
                                    floorSection = "corporis";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "at";
                                            id = "03084fbb-a5cc-4eff-9cb0-1fe51e528a45";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "minus";
                                    value = "quos";
                                }}),
                                add(new LocationInput() {{
                                    buildingId = "explicabo";
                                    current = false;
                                    deskCode = "distinctio";
                                    floor = "praesentium";
                                    floorSection = "ullam";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "maiores";
                                            id = "8bc2caba-8da4-4127-9d59-7ff4711aa1bc";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "numquam";
                                    value = "rerum";
                                }}),
                            }};
                            memberships = new org.openapis.openapi.models.shared.MembershipInput[]{{
                                add(new MembershipInput() {{
                                    contactGroupMembership = new ContactGroupMembershipInput() {{
                                        contactGroupResourceName = "aliquid";
                                    }};
                                    domainMembership = new DomainMembership() {{
                                        inViewerDomain = false;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "placeat";
                                            id = "ecc74f77-b484-48bd-aa6f-0441d2c3b808";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                }}),
                                add(new MembershipInput() {{
                                    contactGroupMembership = new ContactGroupMembershipInput() {{
                                        contactGroupResourceName = "perspiciatis";
                                    }};
                                    domainMembership = new DomainMembership() {{
                                        inViewerDomain = false;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quaerat";
                                            id = "373e0604-59be-4bba-902f-2586bcf15255";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                }}),
                                add(new MembershipInput() {{
                                    contactGroupMembership = new ContactGroupMembershipInput() {{
                                        contactGroupResourceName = "quibusdam";
                                    }};
                                    domainMembership = new DomainMembership() {{
                                        inViewerDomain = false;
                                    }};
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "fuga";
                                            id = "a95be6cd-0275-46c3-94aa-432b47e1763c";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                }}),
                            }};
                            metadata = new PersonMetadataInput() {{
                                sources = new org.openapis.openapi.models.shared.SourceInput[]{{
                                    add(new SourceInput() {{
                                        etag = "alias";
                                        id = "8c23e980-2d82-4f0d-85eb-4a8b674ee5cf";
                                        type = SourceTypeEnum.OTHER_CONTACT;
                                    }}),
                                }};
                            }};
                            miscKeywords = new org.openapis.openapi.models.shared.MiscKeywordInput[]{{
                                add(new MiscKeywordInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "rem";
                                            id = "edc7f787-e32e-404b-bd3e-d0c5670ef42b";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = MiscKeywordTypeEnum.OUTLOOK_DIRECTORY_SERVER;
                                    value = "porro";
                                }}),
                            }};
                            names = new org.openapis.openapi.models.shared.NameInput[]{{
                                add(new NameInput() {{
                                    familyName = "earum";
                                    givenName = "vitae";
                                    honorificPrefix = "impedit";
                                    honorificSuffix = "eligendi";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "veniam";
                                            id = "03f6c39b-cd0a-4629-8f95-7f385189ad7e";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    middleName = "voluptatum";
                                    phoneticFamilyName = "aperiam";
                                    phoneticFullName = "reprehenderit";
                                    phoneticGivenName = "animi";
                                    phoneticHonorificPrefix = "officia";
                                    phoneticHonorificSuffix = "eveniet";
                                    phoneticMiddleName = "quae";
                                    unstructuredName = "adipisci";
                                }}),
                                add(new NameInput() {{
                                    familyName = "hic";
                                    givenName = "dolorem";
                                    honorificPrefix = "adipisci";
                                    honorificSuffix = "optio";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "similique";
                                            id = "79fb9de4-032b-4a26-bd36-8ba9216bcb41";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    middleName = "molestias";
                                    phoneticFamilyName = "neque";
                                    phoneticFullName = "quis";
                                    phoneticGivenName = "optio";
                                    phoneticHonorificPrefix = "esse";
                                    phoneticHonorificSuffix = "adipisci";
                                    phoneticMiddleName = "autem";
                                    unstructuredName = "tempora";
                                }}),
                                add(new NameInput() {{
                                    familyName = "beatae";
                                    givenName = "dignissimos";
                                    honorificPrefix = "quia";
                                    honorificSuffix = "ratione";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "veritatis";
                                            id = "33edc046-bc51-463b-bca4-9227c42c22c5";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    middleName = "sequi";
                                    phoneticFamilyName = "quaerat";
                                    phoneticFullName = "accusantium";
                                    phoneticGivenName = "incidunt";
                                    phoneticHonorificPrefix = "cupiditate";
                                    phoneticHonorificSuffix = "minima";
                                    phoneticMiddleName = "quo";
                                    unstructuredName = "quis";
                                }}),
                            }};
                            nicknames = new org.openapis.openapi.models.shared.NicknameInput[]{{
                                add(new NicknameInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quidem";
                                            id = "b3c57c1e-4981-4e8a-a257-ddc1912ebde6";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = NicknameTypeEnum.ALTERNATE_NAME;
                                    value = "sapiente";
                                }}),
                                add(new NicknameInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "porro";
                                            id = "c5469d40-15df-4a79-a206-bef2b0a3e42c";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = NicknameTypeEnum.OTHER_NAME;
                                    value = "fuga";
                                }}),
                                add(new NicknameInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "perferendis";
                                            id = "10e9aac2-e913-4558-ad18-f9f97a4bfad2";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = NicknameTypeEnum.SHORT_NAME;
                                    value = "quam";
                                }}),
                                add(new NicknameInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "fugiat";
                                            id = "67ca84ad-99b4-41d6-9243-531870cf68b0";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = NicknameTypeEnum.OTHER_NAME;
                                    value = "assumenda";
                                }}),
                            }};
                            occupations = new org.openapis.openapi.models.shared.OccupationInput[]{{
                                add(new OccupationInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "dolores";
                                            id = "1bd43d1f-0cb0-4a00-83eb-22d9b3a70d94";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "fuga";
                                }}),
                                add(new OccupationInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "deserunt";
                                            id = "741c57d1-fedc-4205-8d38-dc3ce185472f";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "necessitatibus";
                                }}),
                            }};
                            organizations = new org.openapis.openapi.models.shared.OrganizationInput[]{{
                                add(new OrganizationInput() {{
                                    costCenter = "autem";
                                    current = false;
                                    department = "natus";
                                    domain = "quasi";
                                    endDate = new Date() {{
                                        day = 434306;
                                        month = 404542;
                                        year = 625009;
                                    }};
                                    fullTimeEquivalentMillipercent = 535903;
                                    jobDescription = "tempore";
                                    location = "saepe";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "adipisci";
                                            id = "444eac8b-3a28-475c-ac1f-e606d07d2a9c";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    name = "Blanche Waelchi DDS";
                                    phoneticName = "vitae";
                                    startDate = new Date() {{
                                        day = 428232;
                                        month = 376017;
                                        year = 388490;
                                    }};
                                    symbol = "veritatis";
                                    title = "Miss";
                                    type = "veritatis";
                                }}),
                                add(new OrganizationInput() {{
                                    costCenter = "temporibus";
                                    current = false;
                                    department = "excepturi";
                                    domain = "veritatis";
                                    endDate = new Date() {{
                                        day = 216122;
                                        month = 437446;
                                        year = 626535;
                                    }};
                                    fullTimeEquivalentMillipercent = 472980;
                                    jobDescription = "itaque";
                                    location = "voluptatum";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "possimus";
                                            id = "53213f3f-6587-452d-b764-c59f0a56cebc";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    name = "Neal Crooks";
                                    phoneticName = "officia";
                                    startDate = new Date() {{
                                        day = 480114;
                                        month = 620421;
                                        year = 68148;
                                    }};
                                    symbol = "deleniti";
                                    title = "Mr.";
                                    type = "eligendi";
                                }}),
                                add(new OrganizationInput() {{
                                    costCenter = "sint";
                                    current = false;
                                    department = "ipsam";
                                    domain = "laboriosam";
                                    endDate = new Date() {{
                                        day = 475238;
                                        month = 70822;
                                        year = 401449;
                                    }};
                                    fullTimeEquivalentMillipercent = 436367;
                                    jobDescription = "dolorem";
                                    location = "minus";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "ad";
                                            id = "30b56651-63a3-4638-912a-b2521b9f2e07";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    name = "Ella Kilback";
                                    phoneticName = "officia";
                                    startDate = new Date() {{
                                        day = 263988;
                                        month = 5205;
                                        year = 721691;
                                    }};
                                    symbol = "minus";
                                    title = "Mr.";
                                    type = "quis";
                                }}),
                                add(new OrganizationInput() {{
                                    costCenter = "hic";
                                    current = false;
                                    department = "dolorum";
                                    domain = "libero";
                                    endDate = new Date() {{
                                        day = 32673;
                                        month = 873059;
                                        year = 393788;
                                    }};
                                    fullTimeEquivalentMillipercent = 338542;
                                    jobDescription = "perferendis";
                                    location = "itaque";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "facere";
                                            id = "f22a94d2-0ec9-40ea-81d1-f465e85156ff";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    name = "Wendy Wolf";
                                    phoneticName = "nostrum";
                                    startDate = new Date() {{
                                        day = 272664;
                                        month = 979244;
                                        year = 814385;
                                    }};
                                    symbol = "illum";
                                    title = "Mrs.";
                                    type = "saepe";
                                }}),
                            }};
                            phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumberInput[]{{
                                add(new PhoneNumberInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "sint";
                                            id = "543398da-fb42-4a8d-a338-8e4d8039ea5f";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "harum";
                                    value = "sunt";
                                }}),
                                add(new PhoneNumberInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "atque";
                                            id = "a244fd61-9039-4dac-938e-d0dc671dc7f1";
                                            type = SourceTypeEnum.DOMAIN_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "amet";
                                    value = "culpa";
                                }}),
                                add(new PhoneNumberInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "asperiores";
                                            id = "15920c90-d1b4-4901-b2bd-89c8a32639da";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "facilis";
                                    value = "in";
                                }}),
                            }};
                            relations = new org.openapis.openapi.models.shared.RelationInput[]{{
                                add(new RelationInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "nisi";
                                            id = "902b881a-94f6-4436-a4a8-f0af8c691d73";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    person = "nulla";
                                    type = "occaecati";
                                }}),
                                add(new RelationInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "doloribus";
                                            id = "baf9476a-2ae8-4dcc-90c8-a3512c737848";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    person = "dolorem";
                                    type = "alias";
                                }}),
                                add(new RelationInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "dignissimos";
                                            id = "50a00e96-6ec7-436d-8319-4398c783c923";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    person = "praesentium";
                                    type = "accusamus";
                                }}),
                            }};
                            residences = new org.openapis.openapi.models.shared.ResidenceInput[]{{
                                add(new ResidenceInput() {{
                                    current = false;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "ipsum";
                                            id = "d3ab7ca3-c5ca-4864-9a70-cfd5d6989b72";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "voluptas";
                                }}),
                                add(new ResidenceInput() {{
                                    current = false;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "magnam";
                                            id = "51077d19-ea83-4d49-aed1-4b8a2c195454";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "officiis";
                                }}),
                                add(new ResidenceInput() {{
                                    current = false;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "unde";
                                            id = "55dcc185-ea49-401c-bc43-ad2daa784aba";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "illum";
                                }}),
                                add(new ResidenceInput() {{
                                    current = false;
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "sed";
                                            id = "30edf738-11a1-4153-82bd-7ed56507621c";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "deleniti";
                                }}),
                            }};
                            resourceName = "doloribus";
                            sipAddresses = new org.openapis.openapi.models.shared.SipAddressInput[]{{
                                add(new SipAddressInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "nulla";
                                            id = "7396564c-20a0-4711-a961-d24a7dbb8f53";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "assumenda";
                                    value = "atque";
                                }}),
                                add(new SipAddressInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "perspiciatis";
                                            id = "2cf7812c-b512-4c87-8240-bf548f88f8f1";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "a";
                                    value = "alias";
                                }}),
                            }};
                            skills = new org.openapis.openapi.models.shared.SkillInput[]{{
                                add(new SkillInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quod";
                                            id = "8e1f206d-5d83-41d0-8810-90f6706673f3";
                                            type = SourceTypeEnum.CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "ex";
                                }}),
                                add(new SkillInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quos";
                                            id = "1c5768dc-e742-4409-a215-e08601489a5f";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "sequi";
                                }}),
                                add(new SkillInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "debitis";
                                            id = "3af3dd9d-da33-4dcd-a348-3e4a7a98e4df";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "in";
                                }}),
                            }};
                            urls = new org.openapis.openapi.models.shared.UrlInput[]{{
                                add(new UrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quaerat";
                                            id = "5b8955d4-13e1-43a4-8231-0907bd354c09";
                                            type = SourceTypeEnum.ACCOUNT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "harum";
                                    value = "vero";
                                }}),
                                add(new UrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "nihil";
                                            id = "34f02449-d86f-44bb-a0fe-5d911cbfe749";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "dolorum";
                                    value = "voluptatibus";
                                }}),
                                add(new UrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "modi";
                                            id = "5a27f69e-2c9e-46d1-8e9d-b3ad4c6b0310";
                                            type = SourceTypeEnum.DOMAIN_PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "facere";
                                    value = "occaecati";
                                }}),
                                add(new UrlInput() {{
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "quisquam";
                                            id = "33747308-2b94-4f2a-b1fd-5671e9c32635";
                                            type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    type = "officia";
                                    value = "tempora";
                                }}),
                            }};
                            userDefined = new org.openapis.openapi.models.shared.UserDefinedInput[]{{
                                add(new UserDefinedInput() {{
                                    key = "molestiae";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "architecto";
                                            id = "43789ce0-e991-4594-993a-74c0252fe3b4";
                                            type = SourceTypeEnum.OTHER_CONTACT;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "dolore";
                                }}),
                                add(new UserDefinedInput() {{
                                    key = "quibusdam";
                                    metadata = new FieldMetadataInput() {{
                                        source = new SourceInput() {{
                                            etag = "rerum";
                                            id = "8b778ebb-6e1d-42cf-902b-afb2cbc4635d";
                                            type = SourceTypeEnum.PROFILE;
                                        }};
                                        sourcePrimary = false;
                                    }};
                                    value = "eveniet";
                                }}),
                            }};
                        }});
                    }};
                    readMask = "eum";
                    sources = new org.openapis.openapi.models.shared.BatchUpdateContactsRequestSourcesEnum[]{{
                        add(BatchUpdateContactsRequestSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                        add(BatchUpdateContactsRequestSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    }};
                    updateMask = "alias";
                }};;
                accessToken = "eos";
                alt = AltEnum.MEDIA;
                callback = "quisquam";
                fields = "dolor";
                key = "accusamus";
                oauthToken = "sint";
                prettyPrint = false;
                quotaUser = "enim";
                uploadType = "veritatis";
                uploadProtocol = "mollitia";
            }};            

            PeoplePeopleBatchUpdateContactsResponse res = sdk.people.peoplePeopleBatchUpdateContacts(req, new PeoplePeopleBatchUpdateContactsSecurity("veritatis", "vero") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.batchUpdateContactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleConnectionsList

Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListRequest;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListResponse;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSecurityOption1;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSecurityOption2;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSortOrderEnum;
import org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleConnectionsListRequest req = new PeoplePeopleConnectionsListRequest("ratione") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloribus";
                alt = AltEnum.PROTO;
                callback = "deserunt";
                fields = "sint";
                key = "eum";
                oauthToken = "commodi";
                pageSize = 301566L;
                pageToken = "rem";
                personFields = "occaecati";
                prettyPrint = false;
                quotaUser = "possimus";
                requestMaskIncludeField = "voluptate";
                requestSyncToken = false;
                sortOrder = PeoplePeopleConnectionsListSortOrderEnum.FIRST_NAME_ASCENDING;
                sources = new org.openapis.openapi.models.operations.PeoplePeopleConnectionsListSourcesEnum[]{{
                    add(PeoplePeopleConnectionsListSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleConnectionsListSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                }};
                syncToken = "odio";
                uploadType = "adipisci";
                uploadProtocol = "necessitatibus";
            }};            

            PeoplePeopleConnectionsListResponse res = sdk.people.peoplePeopleConnectionsList(req, new PeoplePeopleConnectionsListSecurity() {{
                option1 = new PeoplePeopleConnectionsListSecurityOption1("veritatis", "consectetur") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleCreateContact

Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleCreateContactRequest;
import org.openapis.openapi.models.operations.PeoplePeopleCreateContactResponse;
import org.openapis.openapi.models.operations.PeoplePeopleCreateContactSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleCreateContactSourcesEnum;
import org.openapis.openapi.models.shared.AddressInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiographyContentTypeEnum;
import org.openapis.openapi.models.shared.BiographyInput;
import org.openapis.openapi.models.shared.BirthdayInput;
import org.openapis.openapi.models.shared.BraggingRightsInput;
import org.openapis.openapi.models.shared.CalendarUrlInput;
import org.openapis.openapi.models.shared.ClientDataInput;
import org.openapis.openapi.models.shared.ContactGroupMembershipInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DomainMembership;
import org.openapis.openapi.models.shared.EmailAddressInput;
import org.openapis.openapi.models.shared.EventInput;
import org.openapis.openapi.models.shared.ExternalIdInput;
import org.openapis.openapi.models.shared.FieldMetadataInput;
import org.openapis.openapi.models.shared.FileAsInput;
import org.openapis.openapi.models.shared.GenderInput;
import org.openapis.openapi.models.shared.ImClientInput;
import org.openapis.openapi.models.shared.InterestInput;
import org.openapis.openapi.models.shared.LocaleInput;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MiscKeywordInput;
import org.openapis.openapi.models.shared.MiscKeywordTypeEnum;
import org.openapis.openapi.models.shared.NameInput;
import org.openapis.openapi.models.shared.NicknameInput;
import org.openapis.openapi.models.shared.NicknameTypeEnum;
import org.openapis.openapi.models.shared.OccupationInput;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.PersonInput;
import org.openapis.openapi.models.shared.PersonMetadataInput;
import org.openapis.openapi.models.shared.PhoneNumberInput;
import org.openapis.openapi.models.shared.RelationInput;
import org.openapis.openapi.models.shared.ResidenceInput;
import org.openapis.openapi.models.shared.SipAddressInput;
import org.openapis.openapi.models.shared.SkillInput;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.UrlInput;
import org.openapis.openapi.models.shared.UserDefinedInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleCreateContactRequest req = new PeoplePeopleCreateContactRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                personInput = new PersonInput() {{
                    addresses = new org.openapis.openapi.models.shared.AddressInput[]{{
                        add(new AddressInput() {{
                            city = "Lake Herminiacester";
                            country = "Mongolia";
                            countryCode = "MG";
                            extendedAddress = "fugit";
                            formattedValue = "eius";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "perspiciatis";
                                    id = "4594487f-5c84-4383-ab86-b3cdf6415b04";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            poBox = "molestias";
                            postalCode = "68911-9289";
                            region = "nulla";
                            streetAddress = "distinctio";
                            type = "recusandae";
                        }}),
                    }};
                    biographies = new org.openapis.openapi.models.shared.BiographyInput[]{{
                        add(new BiographyInput() {{
                            contentType = BiographyContentTypeEnum.TEXT_PLAIN;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tempore";
                                    id = "f6068258-94ea-4763-95c7-2795b785148d";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "quibusdam";
                        }}),
                        add(new BiographyInput() {{
                            contentType = BiographyContentTypeEnum.CONTENT_TYPE_UNSPECIFIED;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ut";
                                    id = "9e5635b3-3bc0-4f97-8c42-fc9f4844225e";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "minima";
                        }}),
                    }};
                    birthdays = new org.openapis.openapi.models.shared.BirthdayInput[]{{
                        add(new BirthdayInput() {{
                            date = new Date() {{
                                day = 497004;
                                month = 566649;
                                year = 433431;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "doloremque";
                                    id = "65c0efa6-f93b-490a-9b8c-95be1254b739";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            text = "dolore";
                        }}),
                        add(new BirthdayInput() {{
                            date = new Date() {{
                                day = 974452;
                                month = 907826;
                                year = 485506;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "voluptate";
                                    id = "210d1f65-58c9-49c7-a2d2-bc0f94087d9c";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            text = "deserunt";
                        }}),
                        add(new BirthdayInput() {{
                            date = new Date() {{
                                day = 926879;
                                month = 42929;
                                year = 297057;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quia";
                                    id = "dd7caac9-b4ca-4a1c-be9e-15df903907f3";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            text = "deleniti";
                        }}),
                    }};
                    braggingRights = new org.openapis.openapi.models.shared.BraggingRightsInput[]{{
                        add(new BraggingRightsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ab";
                                    id = "983d42e5-4a85-4466-997c-50233c1471d5";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "dolorum";
                        }}),
                    }};
                    calendarUrls = new org.openapis.openapi.models.shared.CalendarUrlInput[]{{
                        add(new CalendarUrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "mollitia";
                                    id = "6ddf5abd-6487-4c5f-82b8-62a00bef69e1";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "quae";
                            url = "veritatis";
                        }}),
                        add(new CalendarUrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "enim";
                                    id = "7630bda7-afde-4d84-a35a-41238e1a735a";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "qui";
                            url = "suscipit";
                        }}),
                        add(new CalendarUrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "officia";
                                    id = "e33bef97-1a8f-446b-8a11-06fe965b711d";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "blanditiis";
                            url = "eligendi";
                        }}),
                    }};
                    clientData = new org.openapis.openapi.models.shared.ClientDataInput[]{{
                        add(new ClientDataInput() {{
                            key = "deleniti";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "deleniti";
                                    id = "ec9f7b99-a550-4a65-aed3-33bb0ce8aa65";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "consectetur";
                        }}),
                        add(new ClientDataInput() {{
                            key = "qui";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "officia";
                                    id = "986eb7e1-4ca5-4640-8915-0097019a48f8";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "earum";
                        }}),
                        add(new ClientDataInput() {{
                            key = "impedit";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "accusamus";
                                    id = "7bf904e0-1105-4d38-9081-62c6beb68a0f";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "enim";
                        }}),
                        add(new ClientDataInput() {{
                            key = "ducimus";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quidem";
                                    id = "7d03a148-0f8d-4e30-b069-d810618d97e1";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "quia";
                        }}),
                    }};
                    emailAddresses = new org.openapis.openapi.models.shared.EmailAddressInput[]{{
                        add(new EmailAddressInput() {{
                            displayName = "iste";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "molestiae";
                                    id = "510da803-1229-42cc-a1c2-a702bb97ee10";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "fugiat";
                            value = "id";
                        }}),
                    }};
                    etag = "sed";
                    events = new org.openapis.openapi.models.shared.EventInput[]{{
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 925635;
                                month = 208432;
                                year = 326041;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tenetur";
                                    id = "8e01bf33-eaab-4454-82ac-1704bf1cc9fc";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "dicta";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 646023;
                                month = 672164;
                                year = 929941;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ad";
                                    id = "eb5f0c49-2b57-444d-88a2-267aaee79e3c";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "illo";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 667620;
                                month = 812857;
                                year = 195317;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "et";
                                    id = "becb83d2-378a-4e3b-bc23-d9450a986a49";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "cum";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 678630;
                                month = 798883;
                                year = 471535;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quae";
                                    id = "7f06b28e-cc86-4492-b86f-62c969c4cc6b";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "praesentium";
                        }}),
                    }};
                    externalIds = new org.openapis.openapi.models.shared.ExternalIdInput[]{{
                        add(new ExternalIdInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "error";
                                    id = "0a3fd3c8-1da1-40f8-823d-f931da3edb51";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "est";
                            value = "facere";
                        }}),
                        add(new ExternalIdInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "iste";
                                    id = "4acc9435-1377-426d-9532-1b832a56d691";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "alias";
                            value = "hic";
                        }}),
                        add(new ExternalIdInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tenetur";
                                    id = "60eb9a66-58e6-49a4-b843-d382dbec75c6";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "minus";
                            value = "autem";
                        }}),
                    }};
                    fileAses = new org.openapis.openapi.models.shared.FileAsInput[]{{
                        add(new FileAsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nisi";
                                    id = "59468ce3-04d8-4849-bf82-14c337f96bb0";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "vel";
                        }}),
                    }};
                    genders = new org.openapis.openapi.models.shared.GenderInput[]{{
                        add(new GenderInput() {{
                            addressMeAs = "recusandae";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "adipisci";
                                    id = "72db1344-ba9f-478a-9c0e-d7aab62e9726";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "earum";
                        }}),
                        add(new GenderInput() {{
                            addressMeAs = "cum";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "alias";
                                    id = "c58d27b5-1996-4b5b-8b50-eef712b7a7ab";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "adipisci";
                        }}),
                        add(new GenderInput() {{
                            addressMeAs = "tempora";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "modi";
                                    id = "b1710688-deeb-4ef8-97f3-dd0ccd33f11b";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "voluptates";
                        }}),
                    }};
                    imClients = new org.openapis.openapi.models.shared.ImClientInput[]{{
                        add(new ImClientInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "voluptates";
                                    id = "080aa104-186e-4c75-9e02-f3702c5c8e2d";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            protocol = "consequatur";
                            type = "voluptates";
                            username = "Lorenzo12";
                        }}),
                        add(new ImClientInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ipsa";
                                    id = "4fa44707-bf37-45b4-8282-821fdb2f69e5";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            protocol = "consequuntur";
                            type = "laboriosam";
                            username = "Jayne.Schiller";
                        }}),
                    }};
                    interests = new org.openapis.openapi.models.shared.InterestInput[]{{
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "optio";
                                    id = "8d3cd425-8d03-458a-82c8-08fe2751a204";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "quod";
                        }}),
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "aut";
                                    id = "449e143f-9619-4bb7-940d-5a11fa436e62";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "natus";
                        }}),
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "explicabo";
                                    id = "33f95c9d-2373-497c-b85b-5db4f500183f";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "tempore";
                        }}),
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "vero";
                                    id = "f676b720-6dab-4750-852a-5647edc439ed";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "maxime";
                        }}),
                    }};
                    locales = new org.openapis.openapi.models.shared.LocaleInput[]{{
                        add(new LocaleInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "adipisci";
                                    id = "20f41240-d448-47ac-a93b-94c3b9d2488d";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "unde";
                        }}),
                        add(new LocaleInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ad";
                                    id = "aa42fc40-5669-4f69-a006-d21249450819";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "odio";
                        }}),
                    }};
                    locations = new org.openapis.openapi.models.shared.LocationInput[]{{
                        add(new LocationInput() {{
                            buildingId = "ipsum";
                            current = false;
                            deskCode = "cum";
                            floor = "et";
                            floorSection = "harum";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "magnam";
                                    id = "1844060e-0031-40d0-a3dc-901f5afd2a6c";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "magnam";
                            value = "praesentium";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "numquam";
                            current = false;
                            deskCode = "iure";
                            floor = "id";
                            floorSection = "itaque";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "molestias";
                                    id = "d89253c8-962f-4489-abf5-1e4652d3c343";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "suscipit";
                            value = "quae";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "quam";
                            current = false;
                            deskCode = "dignissimos";
                            floor = "atque";
                            floorSection = "animi";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "earum";
                                    id = "49124772-5e62-4190-9e91-044a5de59ac7";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "eaque";
                            value = "aliquid";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "ea";
                            current = false;
                            deskCode = "odio";
                            floor = "voluptatem";
                            floorSection = "quisquam";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "delectus";
                                    id = "1cf59326-0525-41e6-abb4-26897d99a2d3";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "ipsam";
                            value = "suscipit";
                        }}),
                    }};
                    memberships = new org.openapis.openapi.models.shared.MembershipInput[]{{
                        add(new MembershipInput() {{
                            contactGroupMembership = new ContactGroupMembershipInput() {{
                                contactGroupResourceName = "ipsa";
                            }};
                            domainMembership = new DomainMembership() {{
                                inViewerDomain = false;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "accusamus";
                                    id = "93ee6cf5-9f35-48aa-aaca-e323a31bf7ba";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                        }}),
                        add(new MembershipInput() {{
                            contactGroupMembership = new ContactGroupMembershipInput() {{
                                contactGroupResourceName = "quod";
                            }};
                            domainMembership = new DomainMembership() {{
                                inViewerDomain = false;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "minus";
                                    id = "97716c80-2cc9-4e0c-bd9d-323f1aa63ed9";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                        }}),
                    }};
                    metadata = new PersonMetadataInput() {{
                        sources = new org.openapis.openapi.models.shared.SourceInput[]{{
                            add(new SourceInput() {{
                                etag = "et";
                                id = "c856bcba-51ef-4245-8a47-facf116cdd54";
                                type = SourceTypeEnum.PROFILE;
                            }}),
                            add(new SourceInput() {{
                                etag = "numquam";
                                id = "a7562873-c7dd-49ef-af43-dc623620f313";
                                type = SourceTypeEnum.DOMAIN_PROFILE;
                            }}),
                            add(new SourceInput() {{
                                etag = "doloribus";
                                id = "30df3db0-22fa-4a56-9fb8-f652ebb9d383";
                                type = SourceTypeEnum.DOMAIN_PROFILE;
                            }}),
                            add(new SourceInput() {{
                                etag = "dolor";
                                id = "8790243b-293d-4ab3-8e91-7f50fda04c8b";
                                type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                            }}),
                        }};
                    }};;
                    miscKeywords = new org.openapis.openapi.models.shared.MiscKeywordInput[]{{
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "soluta";
                                    id = "55a292b0-bc3b-4b74-8664-eb1d03388b0d";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.OUTLOOK_USER;
                            value = "rerum";
                        }}),
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "architecto";
                                    id = "7afee74b-6feb-4945-bc7e-daf39d16fbf7";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.OTHER;
                            value = "assumenda";
                        }}),
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ab";
                                    id = "62b303e3-023b-493e-b431-6cf55b431355";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.HOME;
                            value = "optio";
                        }}),
                    }};
                    names = new org.openapis.openapi.models.shared.NameInput[]{{
                        add(new NameInput() {{
                            familyName = "vitae";
                            givenName = "quisquam";
                            honorificPrefix = "fugit";
                            honorificSuffix = "consequatur";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "incidunt";
                                    id = "c4adcc99-04c5-4195-b864-8cefa78f1e2d";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "libero";
                            phoneticFamilyName = "error";
                            phoneticFullName = "perferendis";
                            phoneticGivenName = "beatae";
                            phoneticHonorificPrefix = "saepe";
                            phoneticHonorificSuffix = "voluptatem";
                            phoneticMiddleName = "sint";
                            unstructuredName = "corporis";
                        }}),
                        add(new NameInput() {{
                            familyName = "explicabo";
                            givenName = "distinctio";
                            honorificPrefix = "harum";
                            honorificSuffix = "quidem";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tempora";
                                    id = "cbb19f71-3d95-4a41-a9c1-387271e18ea9";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "non";
                            phoneticFamilyName = "veniam";
                            phoneticFullName = "illo";
                            phoneticGivenName = "illo";
                            phoneticHonorificPrefix = "deleniti";
                            phoneticHonorificSuffix = "quisquam";
                            phoneticMiddleName = "fugit";
                            unstructuredName = "optio";
                        }}),
                        add(new NameInput() {{
                            familyName = "quo";
                            givenName = "minima";
                            honorificPrefix = "ducimus";
                            honorificSuffix = "tenetur";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "libero";
                                    id = "d60b1a78-ed29-4a9d-8eea-85658c2d4f4c";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "quas";
                            phoneticFamilyName = "quidem";
                            phoneticFullName = "voluptates";
                            phoneticGivenName = "labore";
                            phoneticHonorificPrefix = "hic";
                            phoneticHonorificSuffix = "aspernatur";
                            phoneticMiddleName = "nihil";
                            unstructuredName = "quas";
                        }}),
                        add(new NameInput() {{
                            familyName = "tenetur";
                            givenName = "fugiat";
                            honorificPrefix = "unde";
                            honorificSuffix = "autem";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ea";
                                    id = "7e46c51d-2ffa-4a58-9cef-234c955b9bdf";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "vitae";
                            phoneticFamilyName = "error";
                            phoneticFullName = "alias";
                            phoneticGivenName = "id";
                            phoneticHonorificPrefix = "nobis";
                            phoneticHonorificSuffix = "vero";
                            phoneticMiddleName = "excepturi";
                            unstructuredName = "expedita";
                        }}),
                    }};
                    nicknames = new org.openapis.openapi.models.shared.NicknameInput[]{{
                        add(new NicknameInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quisquam";
                                    id = "c2725ec2-659c-4e02-8084-0c69ef68e45c";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = NicknameTypeEnum.OTHER_NAME;
                            value = "quibusdam";
                        }}),
                        add(new NicknameInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "possimus";
                                    id = "fac75450-0430-4c66-b2b4-391fdf01c3e9";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = NicknameTypeEnum.SHORT_NAME;
                            value = "quas";
                        }}),
                        add(new NicknameInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "maiores";
                                    id = "7bc69d46-0a77-4ece-b26d-10f1ef2631c7";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = NicknameTypeEnum.DEFAULT_;
                            value = "delectus";
                        }}),
                    }};
                    occupations = new org.openapis.openapi.models.shared.OccupationInput[]{{
                        add(new OccupationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "repellat";
                                    id = "873f9d5c-25fd-43e0-b4a4-a4253c302571";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "maiores";
                        }}),
                    }};
                    organizations = new org.openapis.openapi.models.shared.OrganizationInput[]{{
                        add(new OrganizationInput() {{
                            costCenter = "fugit";
                            current = false;
                            department = "maxime";
                            domain = "iusto";
                            endDate = new Date() {{
                                day = 924842;
                                month = 480043;
                                year = 865418;
                            }};
                            fullTimeEquivalentMillipercent = 781178;
                            jobDescription = "enim";
                            location = "tempora";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "voluptatum";
                                    id = "be09e41a-7a21-45ca-92a4-ba9d59988192";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            name = "Sammy Abernathy";
                            phoneticName = "iusto";
                            startDate = new Date() {{
                                day = 756343;
                                month = 355092;
                                year = 209963;
                            }};
                            symbol = "vero";
                            title = "Ms.";
                            type = "vero";
                        }}),
                        add(new OrganizationInput() {{
                            costCenter = "dignissimos";
                            current = false;
                            department = "facere";
                            domain = "eius";
                            endDate = new Date() {{
                                day = 884357;
                                month = 878752;
                                year = 395260;
                            }};
                            fullTimeEquivalentMillipercent = 925157;
                            jobDescription = "deleniti";
                            location = "nobis";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "excepturi";
                                    id = "0bac384e-2396-4703-bec3-1c50824d189a";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            name = "Molly Kertzmann DDS";
                            phoneticName = "dolores";
                            startDate = new Date() {{
                                day = 446583;
                                month = 918997;
                                year = 698306;
                            }};
                            symbol = "esse";
                            title = "Mr.";
                            type = "nihil";
                        }}),
                    }};
                    phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumberInput[]{{
                        add(new PhoneNumberInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "est";
                                    id = "60c8fe46-e617-47db-9db3-b70ffbb6970e";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "odio";
                            value = "nihil";
                        }}),
                        add(new PhoneNumberInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ipsa";
                                    id = "e36097ef-7c20-46e6-9b0d-308714c20a3d";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "corrupti";
                            value = "ea";
                        }}),
                        add(new PhoneNumberInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "sequi";
                                    id = "7ca85c3f-e655-474d-baf9-4a7c98f13af2";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "assumenda";
                            value = "libero";
                        }}),
                    }};
                    relations = new org.openapis.openapi.models.shared.RelationInput[]{{
                        add(new RelationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "porro";
                                    id = "f2bf4f3d-ed35-46d7-a14b-21cd98196d55";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            person = "delectus";
                            type = "autem";
                        }}),
                    }};
                    residences = new org.openapis.openapi.models.shared.ResidenceInput[]{{
                        add(new ResidenceInput() {{
                            current = false;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "mollitia";
                                    id = "1c4b79ae-3368-41c2-bc39-a7c0e17cb12c";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "nam";
                        }}),
                        add(new ResidenceInput() {{
                            current = false;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "culpa";
                                    id = "825fe22c-d5cb-4a6f-bfec-932af6813d65";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "delectus";
                        }}),
                        add(new ResidenceInput() {{
                            current = false;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "earum";
                                    id = "cec2dd69-16f7-4fc7-9da7-0ec60e607589";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "fugiat";
                        }}),
                    }};
                    resourceName = "autem";
                    sipAddresses = new org.openapis.openapi.models.shared.SipAddressInput[]{{
                        add(new SipAddressInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quisquam";
                                    id = "14cd9022-7e37-4c0d-977f-1a5491abe975";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "cum";
                            value = "vitae";
                        }}),
                    }};
                    skills = new org.openapis.openapi.models.shared.SkillInput[]{{
                        add(new SkillInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "commodi";
                                    id = "d23e03e6-9815-4aae-99fc-de9e729c9d4f";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "pariatur";
                        }}),
                    }};
                    urls = new org.openapis.openapi.models.shared.UrlInput[]{{
                        add(new UrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "fuga";
                                    id = "44640ca6-0db7-43a2-b93f-467dc0d8da56";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "explicabo";
                            value = "sed";
                        }}),
                        add(new UrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "aut";
                                    id = "26ab8f27-7485-4c19-b6af-980da7a089fc";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "ut";
                            value = "fugiat";
                        }}),
                        add(new UrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "facilis";
                                    id = "274530e5-cc7c-46d0-8bcf-dcd334b6f623";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "minus";
                            value = "repudiandae";
                        }}),
                    }};
                    userDefined = new org.openapis.openapi.models.shared.UserDefinedInput[]{{
                        add(new UserDefinedInput() {{
                            key = "mollitia";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "facilis";
                                    id = "50aee5e0-da8b-49af-aad0-5486e7b413cb";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "magni";
                        }}),
                        add(new UserDefinedInput() {{
                            key = "assumenda";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "et";
                                    id = "76dc1c43-d40f-461d-9711-57cbe5ee4f72";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "et";
                        }}),
                        add(new UserDefinedInput() {{
                            key = "quas";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "magnam";
                                    id = "0772f32e-3b49-4dbe-8f23-b7b6d9948d6e";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "necessitatibus";
                        }}),
                        add(new UserDefinedInput() {{
                            key = "fugiat";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "eius";
                                    id = "77680fc7-a17a-482e-9e82-fd28d1040a7e";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "beatae";
                        }}),
                    }};
                }};;
                accessToken = "ratione";
                alt = AltEnum.MEDIA;
                callback = "qui";
                fields = "dolorum";
                key = "distinctio";
                oauthToken = "incidunt";
                personFields = "quaerat";
                prettyPrint = false;
                quotaUser = "eligendi";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleCreateContactSourcesEnum[]{{
                    add(PeoplePeopleCreateContactSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    add(PeoplePeopleCreateContactSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleCreateContactSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                }};
                uploadType = "nemo";
                uploadProtocol = "alias";
            }};            

            PeoplePeopleCreateContactResponse res = sdk.people.peoplePeopleCreateContact(req, new PeoplePeopleCreateContactSecurity("aperiam", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.person != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleDeleteContact

Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactRequest;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactResponse;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleDeleteContactRequest req = new PeoplePeopleDeleteContactRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "suscipit";
                alt = AltEnum.JSON;
                callback = "quisquam";
                fields = "accusamus";
                key = "quis";
                oauthToken = "nesciunt";
                prettyPrint = false;
                quotaUser = "necessitatibus";
                uploadType = "excepturi";
                uploadProtocol = "illo";
            }};            

            PeoplePeopleDeleteContactResponse res = sdk.people.peoplePeopleDeleteContact(req, new PeoplePeopleDeleteContactSecurity("tempora", "ut") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleDeleteContactPhoto

Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactPhotoRequest;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactPhotoResponse;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactPhotoSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleDeleteContactPhotoSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleDeleteContactPhotoRequest req = new PeoplePeopleDeleteContactPhotoRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "animi";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "deserunt";
                key = "dolore";
                oauthToken = "nisi";
                personFields = "aperiam";
                prettyPrint = false;
                quotaUser = "similique";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleDeleteContactPhotoSourcesEnum[]{{
                    add(PeoplePeopleDeleteContactPhotoSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleDeleteContactPhotoSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleDeleteContactPhotoSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleDeleteContactPhotoSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                }};
                uploadType = "non";
                uploadProtocol = "veritatis";
            }};            

            PeoplePeopleDeleteContactPhotoResponse res = sdk.people.peoplePeopleDeleteContactPhoto(req, new PeoplePeopleDeleteContactPhotoSecurity("doloremque", "porro") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.deleteContactPhotoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleGet

Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleGetRequest;
import org.openapis.openapi.models.operations.PeoplePeopleGetResponse;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption10;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption11;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption1;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption2;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption3;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption4;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption5;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption6;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption7;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption8;
import org.openapis.openapi.models.operations.PeoplePeopleGetSecurityOption9;
import org.openapis.openapi.models.operations.PeoplePeopleGetSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleGetRequest req = new PeoplePeopleGetRequest("adipisci") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "possimus";
                alt = AltEnum.MEDIA;
                callback = "animi";
                fields = "iste";
                key = "sunt";
                oauthToken = "deleniti";
                personFields = "consequuntur";
                prettyPrint = false;
                quotaUser = "laborum";
                requestMaskIncludeField = "modi";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleGetSourcesEnum[]{{
                    add(PeoplePeopleGetSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleGetSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleGetSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                }};
                uploadType = "odit";
                uploadProtocol = "quis";
            }};            

            PeoplePeopleGetResponse res = sdk.people.peoplePeopleGet(req, new PeoplePeopleGetSecurity() {{
                option1 = new PeoplePeopleGetSecurityOption1("pariatur", "amet") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.person != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleGetBatchGet

Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetRequest;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetResponse;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption10;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption11;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption1;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption2;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption3;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption4;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption5;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption6;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption7;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption8;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSecurityOption9;
import org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleGetBatchGetRequest req = new PeoplePeopleGetBatchGetRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "laborum";
                alt = AltEnum.PROTO;
                callback = "reiciendis";
                fields = "minus";
                key = "inventore";
                oauthToken = "cupiditate";
                personFields = "blanditiis";
                prettyPrint = false;
                quotaUser = "voluptates";
                requestMaskIncludeField = "saepe";
                resourceNames = new String[]{{
                    add("modi"),
                    add("quaerat"),
                    add("quis"),
                }};
                sources = new org.openapis.openapi.models.operations.PeoplePeopleGetBatchGetSourcesEnum[]{{
                    add(PeoplePeopleGetBatchGetSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                }};
                uploadType = "unde";
                uploadProtocol = "odit";
            }};            

            PeoplePeopleGetBatchGetResponse res = sdk.people.peoplePeopleGetBatchGet(req, new PeoplePeopleGetBatchGetSecurity() {{
                option1 = new PeoplePeopleGetBatchGetSecurityOption1("tempore", "maxime") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.getPeopleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleListDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleMergeSourcesEnum;
import org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleRequest;
import org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleResponse;
import org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleListDirectoryPeopleRequest req = new PeoplePeopleListDirectoryPeopleRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "non";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "saepe";
                key = "id";
                mergeSources = new org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleMergeSourcesEnum[]{{
                    add(PeoplePeopleListDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleListDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleListDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_CONTACT),
                }};
                oauthToken = "placeat";
                pageSize = 782641L;
                pageToken = "itaque";
                prettyPrint = false;
                quotaUser = "accusantium";
                readMask = "labore";
                requestSyncToken = false;
                sources = new org.openapis.openapi.models.operations.PeoplePeopleListDirectoryPeopleSourcesEnum[]{{
                    add(PeoplePeopleListDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleListDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE),
                    add(PeoplePeopleListDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE),
                }};
                syncToken = "perferendis";
                uploadType = "repellendus";
                uploadProtocol = "ipsam";
            }};            

            PeoplePeopleListDirectoryPeopleResponse res = sdk.people.peoplePeopleListDirectoryPeople(req, new PeoplePeopleListDirectoryPeopleSecurity("aliquid", "repellendus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDirectoryPeopleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleSearchContacts

Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsRequest;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsResponse;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsSecurityOption1;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsSecurityOption2;
import org.openapis.openapi.models.operations.PeoplePeopleSearchContactsSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleSearchContactsRequest req = new PeoplePeopleSearchContactsRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "non";
                alt = AltEnum.PROTO;
                callback = "aut";
                fields = "quae";
                key = "quis";
                oauthToken = "nemo";
                pageSize = 34589L;
                prettyPrint = false;
                query = "neque";
                quotaUser = "voluptates";
                readMask = "totam";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleSearchContactsSourcesEnum[]{{
                    add(PeoplePeopleSearchContactsSourcesEnum.READ_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleSearchContactsSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                    add(PeoplePeopleSearchContactsSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    add(PeoplePeopleSearchContactsSourcesEnum.READ_SOURCE_TYPE_PROFILE),
                }};
                uploadType = "doloribus";
                uploadProtocol = "maiores";
            }};            

            PeoplePeopleSearchContactsResponse res = sdk.people.peoplePeopleSearchContacts(req, new PeoplePeopleSearchContactsSecurity() {{
                option1 = new PeoplePeopleSearchContactsSecurityOption1("nihil", "dignissimos") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.searchResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleSearchDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum;
import org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleRequest;
import org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleResponse;
import org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleSourcesEnum;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleSearchDirectoryPeopleRequest req = new PeoplePeopleSearchDirectoryPeopleRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "aliquid";
                fields = "odio";
                key = "enim";
                mergeSources = new org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum[]{{
                    add(PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED),
                    add(PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED),
                    add(PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum.DIRECTORY_MERGE_SOURCE_TYPE_UNSPECIFIED),
                }};
                oauthToken = "recusandae";
                pageSize = 231982L;
                pageToken = "vero";
                prettyPrint = false;
                query = "eius";
                quotaUser = "optio";
                readMask = "sapiente";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleSearchDirectoryPeopleSourcesEnum[]{{
                    add(PeoplePeopleSearchDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE),
                    add(PeoplePeopleSearchDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT),
                    add(PeoplePeopleSearchDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE),
                    add(PeoplePeopleSearchDirectoryPeopleSourcesEnum.DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT),
                }};
                uploadType = "ab";
                uploadProtocol = "necessitatibus";
            }};            

            PeoplePeopleSearchDirectoryPeopleResponse res = sdk.people.peoplePeopleSearchDirectoryPeople(req, new PeoplePeopleSearchDirectoryPeopleSecurity("maxime", "veniam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchDirectoryPeopleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleUpdateContact

Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactRequest;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactResponse;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactSecurity;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactSourcesEnum;
import org.openapis.openapi.models.shared.AddressInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BiographyContentTypeEnum;
import org.openapis.openapi.models.shared.BiographyInput;
import org.openapis.openapi.models.shared.BirthdayInput;
import org.openapis.openapi.models.shared.BraggingRightsInput;
import org.openapis.openapi.models.shared.CalendarUrlInput;
import org.openapis.openapi.models.shared.ClientDataInput;
import org.openapis.openapi.models.shared.ContactGroupMembershipInput;
import org.openapis.openapi.models.shared.Date;
import org.openapis.openapi.models.shared.DomainMembership;
import org.openapis.openapi.models.shared.EmailAddressInput;
import org.openapis.openapi.models.shared.EventInput;
import org.openapis.openapi.models.shared.ExternalIdInput;
import org.openapis.openapi.models.shared.FieldMetadataInput;
import org.openapis.openapi.models.shared.FileAsInput;
import org.openapis.openapi.models.shared.GenderInput;
import org.openapis.openapi.models.shared.ImClientInput;
import org.openapis.openapi.models.shared.InterestInput;
import org.openapis.openapi.models.shared.LocaleInput;
import org.openapis.openapi.models.shared.LocationInput;
import org.openapis.openapi.models.shared.MembershipInput;
import org.openapis.openapi.models.shared.MiscKeywordInput;
import org.openapis.openapi.models.shared.MiscKeywordTypeEnum;
import org.openapis.openapi.models.shared.NameInput;
import org.openapis.openapi.models.shared.NicknameInput;
import org.openapis.openapi.models.shared.NicknameTypeEnum;
import org.openapis.openapi.models.shared.OccupationInput;
import org.openapis.openapi.models.shared.OrganizationInput;
import org.openapis.openapi.models.shared.PersonInput;
import org.openapis.openapi.models.shared.PersonMetadataInput;
import org.openapis.openapi.models.shared.PhoneNumberInput;
import org.openapis.openapi.models.shared.RelationInput;
import org.openapis.openapi.models.shared.ResidenceInput;
import org.openapis.openapi.models.shared.SipAddressInput;
import org.openapis.openapi.models.shared.SkillInput;
import org.openapis.openapi.models.shared.SourceInput;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.UrlInput;
import org.openapis.openapi.models.shared.UserDefinedInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleUpdateContactRequest req = new PeoplePeopleUpdateContactRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                personInput = new PersonInput() {{
                    addresses = new org.openapis.openapi.models.shared.AddressInput[]{{
                        add(new AddressInput() {{
                            city = "Port Alvera";
                            country = "Albania";
                            countryCode = "AI";
                            extendedAddress = "quae";
                            formattedValue = "tempora";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "repudiandae";
                                    id = "f45cea11-ac53-4ebb-a587-f340414c5b9a";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            poBox = "voluptates";
                            postalCode = "20069-5961";
                            region = "minus";
                            streetAddress = "id";
                            type = "earum";
                        }}),
                    }};
                    biographies = new org.openapis.openapi.models.shared.BiographyInput[]{{
                        add(new BiographyInput() {{
                            contentType = BiographyContentTypeEnum.TEXT_HTML;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ipsa";
                                    id = "25f1d147-18c6-4fa2-bad0-c06c5d95472c";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "nulla";
                        }}),
                    }};
                    birthdays = new org.openapis.openapi.models.shared.BirthdayInput[]{{
                        add(new BirthdayInput() {{
                            date = new Date() {{
                                day = 276101;
                                month = 984344;
                                year = 784288;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "eius";
                                    id = "3b70bca8-8fa7-40c4-b351-c3dd1eb8f7f7";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            text = "sapiente";
                        }}),
                    }};
                    braggingRights = new org.openapis.openapi.models.shared.BraggingRightsInput[]{{
                        add(new BraggingRightsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "hic";
                                    id = "23f1c0a5-86c3-4ae7-97b6-7feef5e142d9";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "nam";
                        }}),
                        add(new BraggingRightsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "sunt";
                                    id = "dbeceff7-c4b1-456e-9278-275eea768174";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "praesentium";
                        }}),
                    }};
                    calendarUrls = new org.openapis.openapi.models.shared.CalendarUrlInput[]{{
                        add(new CalendarUrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nisi";
                                    id = "3f799b79-56c0-4b0f-a0bb-20a40e7c4ae6";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "eaque";
                            url = "nisi";
                        }}),
                    }};
                    clientData = new org.openapis.openapi.models.shared.ClientDataInput[]{{
                        add(new ClientDataInput() {{
                            key = "consequuntur";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "iusto";
                                    id = "2657b01a-07c0-48fd-b921-c257930d6f09";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "mollitia";
                        }}),
                        add(new ClientDataInput() {{
                            key = "sequi";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "officiis";
                                    id = "fa46d366-dfa1-4011-a091-b3ec8b53862d";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "illo";
                        }}),
                    }};
                    emailAddresses = new org.openapis.openapi.models.shared.EmailAddressInput[]{{
                        add(new EmailAddressInput() {{
                            displayName = "molestias";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "at";
                                    id = "14fe72e5-21f9-4030-bdfc-338397fffa6d";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "pariatur";
                            value = "sequi";
                        }}),
                        add(new EmailAddressInput() {{
                            displayName = "aspernatur";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "consequatur";
                                    id = "90fc157a-c9fe-4196-9ce9-be41c869dd7d";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "molestiae";
                            value = "illo";
                        }}),
                        add(new EmailAddressInput() {{
                            displayName = "unde";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "repellendus";
                                    id = "07b200a5-8ffd-4296-bdf8-fd882a8e60be";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "eos";
                            value = "perferendis";
                        }}),
                    }};
                    etag = "eligendi";
                    events = new org.openapis.openapi.models.shared.EventInput[]{{
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 565831;
                                month = 790286;
                                year = 332922;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "officia";
                                    id = "fdd04c37-5251-42be-ae1d-87ecc5fdcea8";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "molestiae";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 672368;
                                month = 532699;
                                year = 500248;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "adipisci";
                                    id = "11662cda-6d77-4c1d-8606-6237d4227866";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "quidem";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 561625;
                                month = 634481;
                                year = 474955;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "labore";
                                    id = "9e398451-1cc7-45e4-b0c0-04b5bb758cc9";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "exercitationem";
                        }}),
                        add(new EventInput() {{
                            date = new Date() {{
                                day = 376576;
                                month = 157397;
                                year = 965158;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "alias";
                                    id = "069685fc-d1a1-473d-84bb-e24f29834afb";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "odio";
                        }}),
                    }};
                    externalIds = new org.openapis.openapi.models.shared.ExternalIdInput[]{{
                        add(new ExternalIdInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "corporis";
                                    id = "cb6285d4-a29a-4aa1-a169-156f7d2ee209";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "voluptatem";
                            value = "corporis";
                        }}),
                    }};
                    fileAses = new org.openapis.openapi.models.shared.FileAsInput[]{{
                        add(new FileAsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "maiores";
                                    id = "03a93e94-480c-4a37-bb10-789032ac3331";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "odit";
                        }}),
                        add(new FileAsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "saepe";
                                    id = "2dd79ec7-4ba7-4e88-9db3-6fd1ccc341c8";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "enim";
                        }}),
                        add(new FileAsInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ducimus";
                                    id = "3474f0a7-40fb-44ab-841c-3a09e763995d";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "voluptatem";
                        }}),
                    }};
                    genders = new org.openapis.openapi.models.shared.GenderInput[]{{
                        add(new GenderInput() {{
                            addressMeAs = "tempore";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nam";
                                    id = "e794455e-bc55-40a1-8426-b59c8366fdcc";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "neque";
                        }}),
                        add(new GenderInput() {{
                            addressMeAs = "veniam";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nemo";
                                    id = "82c1b855-e889-4d9e-b932-e9000a13ad81";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "dolore";
                        }}),
                        add(new GenderInput() {{
                            addressMeAs = "fugit";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "alias";
                                    id = "8efd2341-1898-4e73-879e-fbe8baebabb7";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "ut";
                        }}),
                    }};
                    imClients = new org.openapis.openapi.models.shared.ImClientInput[]{{
                        add(new ImClientInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "neque";
                                    id = "6e90351b-b976-4317-a0b7-7a5a5365a79f";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            protocol = "ipsam";
                            type = "quia";
                            username = "Jackson.Bernier8";
                        }}),
                        add(new ImClientInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quo";
                                    id = "0d361fed-8dc5-4eff-b453-e9089e871fdb";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            protocol = "at";
                            type = "voluptas";
                            username = "Lavada_Krajcik87";
                        }}),
                    }};
                    interests = new org.openapis.openapi.models.shared.InterestInput[]{{
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quisquam";
                                    id = "985e4373-4a5d-472d-9edd-785be5e7afe5";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "dolores";
                        }}),
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "occaecati";
                                    id = "7ba6281f-44e3-4a23-b94a-68cc80d30ff7";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "illo";
                        }}),
                        add(new InterestInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "aliquid";
                                    id = "4d0a91fe-9d96-4553-b89e-0009c6692de7";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "ipsum";
                        }}),
                    }};
                    locales = new org.openapis.openapi.models.shared.LocaleInput[]{{
                        add(new LocaleInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "voluptas";
                                    id = "2201a6aa-b4ae-47b1-a5b9-08d4e30491aa";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "ullam";
                        }}),
                        add(new LocaleInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "temporibus";
                                    id = "4a839f03-bab7-47b9-98f0-313984507e0e";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "occaecati";
                        }}),
                    }};
                    locations = new org.openapis.openapi.models.shared.LocationInput[]{{
                        add(new LocationInput() {{
                            buildingId = "quam";
                            current = false;
                            deskCode = "saepe";
                            floor = "odit";
                            floorSection = "consectetur";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "itaque";
                                    id = "cb060465-2e23-4a3d-ac65-7e9de8f7f002";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "veritatis";
                            value = "occaecati";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "rem";
                            current = false;
                            deskCode = "ex";
                            floor = "dolorum";
                            floorSection = "officia";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "natus";
                                    id = "9d3a1d32-329e-4458-b7e8-f2ad6bb10e25";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "reiciendis";
                            value = "repellendus";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "cumque";
                            current = false;
                            deskCode = "aliquam";
                            floor = "corrupti";
                            floorSection = "ipsa";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "assumenda";
                                    id = "6e330867-5cbf-4186-856a-7e82cdf9d0fc";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "deleniti";
                            value = "magni";
                        }}),
                        add(new LocationInput() {{
                            buildingId = "quod";
                            current = false;
                            deskCode = "aliquid";
                            floor = "ea";
                            floorSection = "vel";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "est";
                                    id = "f3c3f558-9bea-45d2-a4e4-1e2ca84822e5";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "neque";
                            value = "asperiores";
                        }}),
                    }};
                    memberships = new org.openapis.openapi.models.shared.MembershipInput[]{{
                        add(new MembershipInput() {{
                            contactGroupMembership = new ContactGroupMembershipInput() {{
                                contactGroupResourceName = "nulla";
                            }};
                            domainMembership = new DomainMembership() {{
                                inViewerDomain = false;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "excepturi";
                                    id = "d2ad37c3-0990-477c-90b6-8792163e67d4";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                        }}),
                        add(new MembershipInput() {{
                            contactGroupMembership = new ContactGroupMembershipInput() {{
                                contactGroupResourceName = "voluptatum";
                            }};
                            domainMembership = new DomainMembership() {{
                                inViewerDomain = false;
                            }};
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "vel";
                                    id = "0543c0a3-049c-43cf-ac02-76e7b21bad90";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                        }}),
                    }};
                    metadata = new PersonMetadataInput() {{
                        sources = new org.openapis.openapi.models.shared.SourceInput[]{{
                            add(new SourceInput() {{
                                etag = "nihil";
                                id = "43fd6c2a-10e6-4c29-b8ec-256a5b09227f";
                                type = SourceTypeEnum.OTHER_CONTACT;
                            }}),
                        }};
                    }};;
                    miscKeywords = new org.openapis.openapi.models.shared.MiscKeywordInput[]{{
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "numquam";
                                    id = "7996c977-bbc5-47f3-8928-a8600c58d67d";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.OUTLOOK_DIRECTORY_SERVER;
                            value = "voluptates";
                        }}),
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tempora";
                                    id = "aa568464-579c-4fc6-80e5-03f56831f1d8";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.WORK;
                            value = "rem";
                        }}),
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "quam";
                                    id = "b28e8afa-bc98-46e2-81e4-3b2342417d13";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.OUTLOOK_DIRECTORY_SERVER;
                            value = "sapiente";
                        }}),
                        add(new MiscKeywordInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nisi";
                                    id = "2aa9ae4a-e8ab-44a9-8492-c5e8ba5d4aa4";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = MiscKeywordTypeEnum.OUTLOOK_KEYWORD;
                            value = "sit";
                        }}),
                    }};
                    names = new org.openapis.openapi.models.shared.NameInput[]{{
                        add(new NameInput() {{
                            familyName = "soluta";
                            givenName = "quibusdam";
                            honorificPrefix = "dolor";
                            honorificSuffix = "rem";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "eaque";
                                    id = "c29aa8dd-71bd-4daa-b0b7-b91449ae69c0";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "totam";
                            phoneticFamilyName = "fugiat";
                            phoneticFullName = "labore";
                            phoneticGivenName = "vitae";
                            phoneticHonorificPrefix = "deleniti";
                            phoneticHonorificSuffix = "tempore";
                            phoneticMiddleName = "libero";
                            unstructuredName = "quam";
                        }}),
                        add(new NameInput() {{
                            familyName = "dicta";
                            givenName = "totam";
                            honorificPrefix = "accusantium";
                            honorificSuffix = "ut";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "repellat";
                                    id = "423d5439-35f3-477a-85c9-b7e93b6a3c52";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "quasi";
                            phoneticFamilyName = "doloremque";
                            phoneticFullName = "quis";
                            phoneticGivenName = "recusandae";
                            phoneticHonorificPrefix = "iusto";
                            phoneticHonorificSuffix = "impedit";
                            phoneticMiddleName = "dolor";
                            unstructuredName = "quaerat";
                        }}),
                        add(new NameInput() {{
                            familyName = "impedit";
                            givenName = "deserunt";
                            honorificPrefix = "distinctio";
                            honorificSuffix = "alias";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "voluptates";
                                    id = "cb812a66-1489-444a-8e90-85075bc25382";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            middleName = "ratione";
                            phoneticFamilyName = "nesciunt";
                            phoneticFullName = "tempora";
                            phoneticGivenName = "nesciunt";
                            phoneticHonorificPrefix = "asperiores";
                            phoneticHonorificSuffix = "nobis";
                            phoneticMiddleName = "doloremque";
                            unstructuredName = "similique";
                        }}),
                    }};
                    nicknames = new org.openapis.openapi.models.shared.NicknameInput[]{{
                        add(new NicknameInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "itaque";
                                    id = "66ea4757-8d17-41e2-9418-18fc679b6b2f";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = NicknameTypeEnum.INITIALS;
                            value = "dolorem";
                        }}),
                        add(new NicknameInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "corporis";
                                    id = "9b855d01-5b62-4c8b-83a3-8a8a88c14420";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            type = NicknameTypeEnum.ALTERNATE_NAME;
                            value = "aspernatur";
                        }}),
                    }};
                    occupations = new org.openapis.openapi.models.shared.OccupationInput[]{{
                        add(new OccupationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "deserunt";
                                    id = "eb1ae1ec-f8c3-4494-abba-7a05a8b4a9ec";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "rerum";
                        }}),
                        add(new OccupationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "amet";
                                    id = "688cca36-3272-4760-a966-e97e05410334";
                                    type = SourceTypeEnum.DOMAIN_PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "pariatur";
                        }}),
                        add(new OccupationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "molestiae";
                                    id = "8ff24911-45fa-4b9e-99a4-af336664eaa6";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "sapiente";
                        }}),
                        add(new OccupationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "dolores";
                                    id = "ff14e8c1-b352-4acc-adac-c5227814eca0";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "vel";
                        }}),
                    }};
                    organizations = new org.openapis.openapi.models.shared.OrganizationInput[]{{
                        add(new OrganizationInput() {{
                            costCenter = "quo";
                            current = false;
                            department = "aliquam";
                            domain = "inventore";
                            endDate = new Date() {{
                                day = 920360;
                                month = 686979;
                                year = 63649;
                            }};
                            fullTimeEquivalentMillipercent = 231063;
                            jobDescription = "quaerat";
                            location = "explicabo";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "fugiat";
                                    id = "4104a25e-f71d-4e57-a11d-614a4317692e";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            name = "Lena Howell";
                            phoneticName = "vero";
                            startDate = new Date() {{
                                day = 343621;
                                month = 185302;
                                year = 125811;
                            }};
                            symbol = "rerum";
                            title = "Ms.";
                            type = "qui";
                        }}),
                        add(new OrganizationInput() {{
                            costCenter = "quas";
                            current = false;
                            department = "similique";
                            domain = "error";
                            endDate = new Date() {{
                                day = 39073;
                                month = 230352;
                                year = 34392;
                            }};
                            fullTimeEquivalentMillipercent = 432356;
                            jobDescription = "commodi";
                            location = "doloremque";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "asperiores";
                                    id = "024c79b4-cc64-4c2b-ba32-c488ade62f6a";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            name = "Annette MacGyver";
                            phoneticName = "corporis";
                            startDate = new Date() {{
                                day = 911982;
                                month = 178712;
                                year = 48347;
                            }};
                            symbol = "deleniti";
                            title = "Mrs.";
                            type = "aut";
                        }}),
                        add(new OrganizationInput() {{
                            costCenter = "quasi";
                            current = false;
                            department = "laboriosam";
                            domain = "maxime";
                            endDate = new Date() {{
                                day = 685365;
                                month = 191079;
                                year = 264392;
                            }};
                            fullTimeEquivalentMillipercent = 742848;
                            jobDescription = "libero";
                            location = "molestias";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "dignissimos";
                                    id = "d4f62127-a607-4d16-8629-4514c3db9ca9";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            name = "Brandy Powlowski";
                            phoneticName = "libero";
                            startDate = new Date() {{
                                day = 878283;
                                month = 554224;
                                year = 446326;
                            }};
                            symbol = "laudantium";
                            title = "Ms.";
                            type = "voluptatem";
                        }}),
                    }};
                    phoneNumbers = new org.openapis.openapi.models.shared.PhoneNumberInput[]{{
                        add(new PhoneNumberInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "magnam";
                                    id = "93f49aa8-465a-4328-b279-b719d1cea673";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "blanditiis";
                            value = "suscipit";
                        }}),
                    }};
                    relations = new org.openapis.openapi.models.shared.RelationInput[]{{
                        add(new RelationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nesciunt";
                                    id = "b35e49a3-1357-478c-a54c-acb0e3ea9750";
                                    type = SourceTypeEnum.PROFILE;
                                }};
                                sourcePrimary = false;
                            }};
                            person = "corporis";
                            type = "harum";
                        }}),
                        add(new RelationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "error";
                                    id = "cf63b215-186a-4b5e-ba02-2614315d1568";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            person = "sint";
                            type = "occaecati";
                        }}),
                        add(new RelationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "repudiandae";
                                    id = "61afc718-6ff2-40b7-a73d-f40ca0d7657c";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            person = "ex";
                            type = "eius";
                        }}),
                        add(new RelationInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "ab";
                                    id = "bbf05527-1b25-411d-9606-dd1b28272bc9";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            person = "ratione";
                            type = "magni";
                        }}),
                    }};
                    residences = new org.openapis.openapi.models.shared.ResidenceInput[]{{
                        add(new ResidenceInput() {{
                            current = false;
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "vitae";
                                    id = "697b1880-fcbb-42b9-bc15-f670bd178483";
                                    type = SourceTypeEnum.SOURCE_TYPE_UNSPECIFIED;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "vel";
                        }}),
                    }};
                    resourceName = "exercitationem";
                    sipAddresses = new org.openapis.openapi.models.shared.SipAddressInput[]{{
                        add(new SipAddressInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "debitis";
                                    id = "eb3b6e24-1c31-4099-8366-3c66dcbb7df6";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "soluta";
                            value = "aperiam";
                        }}),
                    }};
                    skills = new org.openapis.openapi.models.shared.SkillInput[]{{
                        add(new SkillInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "nobis";
                                    id = "8b408e07-1377-44de-8fee-101d9780a10c";
                                    type = SourceTypeEnum.ACCOUNT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "odio";
                        }}),
                        add(new SkillInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "rerum";
                                    id = "95040d6c-8b2a-45f0-8220-7e4048f90009";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "illum";
                        }}),
                        add(new SkillInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "consequuntur";
                                    id = "90278eb4-ae9d-4641-a1e9-1500323b2c09";
                                    type = SourceTypeEnum.OTHER_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "omnis";
                        }}),
                    }};
                    urls = new org.openapis.openapi.models.shared.UrlInput[]{{
                        add(new UrlInput() {{
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "tempora";
                                    id = "771f5669-e5b7-4ec7-a266-49d84eb9e4cf";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            type = "dolores";
                            value = "odit";
                        }}),
                    }};
                    userDefined = new org.openapis.openapi.models.shared.UserDefinedInput[]{{
                        add(new UserDefinedInput() {{
                            key = "ex";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "officiis";
                                    id = "0b88fb87-d6fa-45b6-a8db-f812f83b1ca6";
                                    type = SourceTypeEnum.CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "omnis";
                        }}),
                        add(new UserDefinedInput() {{
                            key = "voluptatibus";
                            metadata = new FieldMetadataInput() {{
                                source = new SourceInput() {{
                                    etag = "asperiores";
                                    id = "c561929c-ca95-460a-9395-918da1d48e78";
                                    type = SourceTypeEnum.DOMAIN_CONTACT;
                                }};
                                sourcePrimary = false;
                            }};
                            value = "ipsum";
                        }}),
                    }};
                }};;
                accessToken = "quisquam";
                alt = AltEnum.PROTO;
                callback = "praesentium";
                fields = "accusamus";
                key = "inventore";
                oauthToken = "ab";
                personFields = "dolore";
                prettyPrint = false;
                quotaUser = "amet";
                sources = new org.openapis.openapi.models.operations.PeoplePeopleUpdateContactSourcesEnum[]{{
                    add(PeoplePeopleUpdateContactSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleUpdateContactSourcesEnum.READ_SOURCE_TYPE_CONTACT),
                    add(PeoplePeopleUpdateContactSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    add(PeoplePeopleUpdateContactSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                }};
                updatePersonFields = "deleniti";
                uploadType = "nobis";
                uploadProtocol = "magni";
            }};            

            PeoplePeopleUpdateContactResponse res = sdk.people.peoplePeopleUpdateContact(req, new PeoplePeopleUpdateContactSecurity("nihil", "laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.person != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## peoplePeopleUpdateContactPhoto

Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactPhotoRequest;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactPhotoResponse;
import org.openapis.openapi.models.operations.PeoplePeopleUpdateContactPhotoSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.UpdateContactPhotoRequest;
import org.openapis.openapi.models.shared.UpdateContactPhotoRequestSourcesEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PeoplePeopleUpdateContactPhotoRequest req = new PeoplePeopleUpdateContactPhotoRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                updateContactPhotoRequest = new UpdateContactPhotoRequest() {{
                    personFields = "animi";
                    photoBytes = "reiciendis";
                    sources = new org.openapis.openapi.models.shared.UpdateContactPhotoRequestSourcesEnum[]{{
                        add(UpdateContactPhotoRequestSourcesEnum.READ_SOURCE_TYPE_UNSPECIFIED),
                    }};
                }};;
                accessToken = "et";
                alt = AltEnum.MEDIA;
                callback = "eius";
                fields = "quaerat";
                key = "amet";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "libero";
                uploadType = "nesciunt";
                uploadProtocol = "illum";
            }};            

            PeoplePeopleUpdateContactPhotoResponse res = sdk.people.peoplePeopleUpdateContactPhoto(req, new PeoplePeopleUpdateContactPhotoSecurity("recusandae", "deleniti") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateContactPhotoResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
