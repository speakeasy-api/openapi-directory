# People

### Available Operations

* [PeoplePeopleBatchCreateContacts](#peoplepeoplebatchcreatecontacts) - Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleBatchDeleteContacts](#peoplepeoplebatchdeletecontacts) - Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleBatchUpdateContacts](#peoplepeoplebatchupdatecontacts) - Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleConnectionsList](#peoplepeopleconnectionslist) - Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).
* [PeoplePeopleCreateContact](#peoplepeoplecreatecontact) - Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleDeleteContact](#peoplepeopledeletecontact) - Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleDeleteContactPhoto](#peoplepeopledeletecontactphoto) - Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.
* [PeoplePeopleGet](#peoplepeopleget) - Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [PeoplePeopleGetBatchGet](#peoplepeoplegetbatchget) - Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.
* [PeoplePeopleListDirectoryPeople](#peoplepeoplelistdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).
* [PeoplePeopleSearchContacts](#peoplepeoplesearchcontacts) - Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts
* [PeoplePeopleSearchDirectoryPeople](#peoplepeoplesearchdirectorypeople) - Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
* [PeoplePeopleUpdateContact](#peoplepeopleupdatecontact) - Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
* [PeoplePeopleUpdateContactPhoto](#peoplepeopleupdatecontactphoto) - Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

## PeoplePeopleBatchCreateContacts

Create a batch of new contacts and return the PersonResponses for the newly Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleBatchCreateContacts(ctx, operations.PeoplePeopleBatchCreateContactsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchCreateContactsRequestInput: &shared.BatchCreateContactsRequestInput{
            Contacts: []shared.ContactToCreateInput{
                shared.ContactToCreateInput{
                    ContactPerson: &shared.PersonInput{
                        Addresses: []shared.AddressInput{
                            shared.AddressInput{
                                City: sdk.String("Lake Michellehaven"),
                                Country: sdk.String("Finland"),
                                CountryCode: sdk.String("EH"),
                                ExtendedAddress: sdk.String("qui"),
                                FormattedValue: sdk.String("aliquid"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cupiditate"),
                                        ID: sdk.String("802d502a-94bb-44f6-bc96-9e9a3efa77df"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("dicta"),
                                PostalCode: sdk.String("78436"),
                                Region: sdk.String("accusamus"),
                                StreetAddress: sdk.String("non"),
                                Type: sdk.String("occaecati"),
                            },
                            shared.AddressInput{
                                City: sdk.String("Fort Virgil"),
                                Country: sdk.String("Papua New Guinea"),
                                CountryCode: sdk.String("MN"),
                                ExtendedAddress: sdk.String("nam"),
                                FormattedValue: sdk.String("id"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("blanditiis"),
                                        ID: sdk.String("8f3a6699-7074-4ba4-869b-6e2141959890"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("reiciendis"),
                                PostalCode: sdk.String("34281-3049"),
                                Region: sdk.String("debitis"),
                                StreetAddress: sdk.String("eius"),
                                Type: sdk.String("maxime"),
                            },
                            shared.AddressInput{
                                City: sdk.String("Mckennaport"),
                                Country: sdk.String("Bhutan"),
                                CountryCode: sdk.String("BJ"),
                                ExtendedAddress: sdk.String("repudiandae"),
                                FormattedValue: sdk.String("ullam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("expedita"),
                                        ID: sdk.String("7fd2ed02-8921-4cdd-8692-601fb576b0d5"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("perferendis"),
                                PostalCode: sdk.String("20739-7713"),
                                Region: sdk.String("totam"),
                                StreetAddress: sdk.String("dignissimos"),
                                Type: sdk.String("eaque"),
                            },
                            shared.AddressInput{
                                City: sdk.String("East Chelsea"),
                                Country: sdk.String("Andorra"),
                                CountryCode: sdk.String("CH"),
                                ExtendedAddress: sdk.String("minus"),
                                FormattedValue: sdk.String("quam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dolor"),
                                        ID: sdk.String("d5fe9b90-c289-409b-bfe4-9a8d9cbf4863"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("dolor"),
                                PostalCode: sdk.String("29574"),
                                Region: sdk.String("dignissimos"),
                                StreetAddress: sdk.String("reiciendis"),
                                Type: sdk.String("amet"),
                            },
                        },
                        Biographies: []shared.BiographyInput{
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumContentTypeUnspecified.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("veritatis"),
                                        ID: sdk.String("00674ebf-6928-40d1-ba77-a89ebf737ae4"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("perferendis"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumContentTypeUnspecified.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("optio"),
                                        ID: sdk.String("e5e6a95d-8a0d-4446-8e2a-f7a73cf3be45"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("sapiente"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nihil"),
                                        ID: sdk.String("0b326b5a-7342-49cd-b1a8-422bb679d232"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("odio"),
                            },
                        },
                        Birthdays: []shared.BirthdayInput{
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(355613),
                                    Month: sdk.Int(722081),
                                    Year: sdk.Int(940432),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptatem"),
                                        ID: sdk.String("cbb1e31b-8b90-4f34-83a1-108e0adcf4b9"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("quae"),
                            },
                        },
                        BraggingRights: []shared.BraggingRightsInput{
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("odio"),
                                        ID: sdk.String("9fce953f-73ef-47fb-87ab-d74dd39c0f5d"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("porro"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("maiores"),
                                        ID: sdk.String("f7c70a45-626d-4436-813f-16d9f5fce6c5"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("aliquid"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("inventore"),
                                        ID: sdk.String("46c3e250-fb00-48c4-ae14-1aac366c8dd6"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("quasi"),
                            },
                        },
                        CalendarUrls: []shared.CalendarURLInput{
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("numquam"),
                                        ID: sdk.String("29074747-78a7-4bd4-a6d2-8c10ab3cdca4"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("voluptas"),
                                URL: sdk.String("ab"),
                            },
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cupiditate"),
                                        ID: sdk.String("04e523c7-e0bc-4717-8e47-96f2a70c6882"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("fugit"),
                                URL: sdk.String("fuga"),
                            },
                        },
                        ClientData: []shared.ClientDataInput{
                            shared.ClientDataInput{
                                Key: sdk.String("incidunt"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("atque"),
                                        ID: sdk.String("2562f222-e981-47ee-97cb-e61e6b7b95bc"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("culpa"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("tempore"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("adipisci"),
                                        ID: sdk.String("c20c4f37-89fd-4871-b99d-d2efd121aa6f"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("earum"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("vel"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("in"),
                                        ID: sdk.String("4bdb04f1-5756-4082-968e-a19f1d170513"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("iste"),
                            },
                        },
                        EmailAddresses: []shared.EmailAddressInput{
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("accusantium"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("rem"),
                                        ID: sdk.String("086a1840-394c-4260-b1f9-3f5f0642dac7"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("asperiores"),
                                Value: sdk.String("nemo"),
                            },
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("quae"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quaerat"),
                                        ID: sdk.String("cc413aa6-3aae-48d6-b864-dbb675fd5e60"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("consectetur"),
                                Value: sdk.String("in"),
                            },
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("exercitationem"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("earum"),
                                        ID: sdk.String("d4f6fbee-41f3-4331-bfe3-5b60eb1ea426"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("voluptas"),
                                Value: sdk.String("minima"),
                            },
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("nobis"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dolorum"),
                                        ID: sdk.String("3c28744e-d53b-488f-ba8d-8f5c0b2f2fb7"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("ab"),
                                Value: sdk.String("iste"),
                            },
                        },
                        Etag: sdk.String("dolore"),
                        Events: []shared.EventInput{
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(152354),
                                    Month: sdk.Int(447516),
                                    Year: sdk.Int(417486),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quidem"),
                                        ID: sdk.String("26916fe1-f08f-4429-8e36-98f447f603e8"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quaerat"),
                            },
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(277773),
                                    Month: sdk.Int(373035),
                                    Year: sdk.Int(894864),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("rem"),
                                        ID: sdk.String("0ca55efd-20e4-457e-9858-b6a89fbe3a5a"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("corrupti"),
                            },
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(879235),
                                    Month: sdk.Int(272683),
                                    Year: sdk.Int(543678),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fugit"),
                                        ID: sdk.String("4d0ab407-5088-4e51-8620-65e904f3b119"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quidem"),
                            },
                        },
                        ExternalIds: []shared.ExternalIDInput{
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laborum"),
                                        ID: sdk.String("bf603a79-f9df-4e0a-b7da-8a50ce187f86"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("maxime"),
                                Value: sdk.String("et"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("esse"),
                                        ID: sdk.String("3d689eee-9526-4f8d-986e-881ead4f0e10"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("dolores"),
                                Value: sdk.String("enim"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laboriosam"),
                                        ID: sdk.String("3f94e29e-973e-4922-a57a-15be3e060807"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("qui"),
                                Value: sdk.String("cum"),
                            },
                        },
                        FileAses: []shared.FileAsInput{
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("necessitatibus"),
                                        ID: sdk.String("3ab8845f-0597-4a60-bf2a-54a31e94764a"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("debitis"),
                            },
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laudantium"),
                                        ID: sdk.String("65e7956f-9251-4a5a-9da6-60ff57bfaad4"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("molestias"),
                            },
                        },
                        Genders: []shared.GenderInput{
                            shared.GenderInput{
                                AddressMeAs: sdk.String("sapiente"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cumque"),
                                        ID: sdk.String("1b4512c1-0326-448d-82f6-15199ebfd0e9"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("debitis"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("aliquid"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("porro"),
                                        ID: sdk.String("632ca3ae-d011-4799-a312-fde04771778f"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("vel"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("architecto"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fugiat"),
                                        ID: sdk.String("01747636-0a15-4db6-a660-659a1adeaab5"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("enim"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("vitae"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("repellendus"),
                                        ID: sdk.String("6c645b08-b618-491b-aa0f-e1ade008e6f8"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("nemo"),
                            },
                        },
                        ImClients: []shared.ImClientInput{
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ratione"),
                                        ID: sdk.String("50d8cdb5-a341-4814-b010-421813d5208e"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("officiis"),
                                Type: sdk.String("esse"),
                                Username: sdk.String("Stacey19"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("expedita"),
                                        ID: sdk.String("668451c6-c6e2-405e-96de-ab3fec9578a6"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("nemo"),
                                Type: sdk.String("quos"),
                                Username: sdk.String("Devin.Cole"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fuga"),
                                        ID: sdk.String("8418d162-309f-4b09-a992-1aefb9f58c4d"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("commodi"),
                                Type: sdk.String("itaque"),
                                Username: sdk.String("Hassie.Lebsack72"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("vero"),
                                        ID: sdk.String("056013f5-9da7-457a-99ec-fef66ef1caa3"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("atque"),
                                Type: sdk.String("ipsum"),
                                Username: sdk.String("Ollie_Cummerata72"),
                            },
                        },
                        Interests: []shared.InterestInput{
                            shared.InterestInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iusto"),
                                        ID: sdk.String("7373c8d7-2f64-4d1d-b1f2-c4310661e963"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("perspiciatis"),
                            },
                            shared.InterestInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("earum"),
                                        ID: sdk.String("1cf9e06e-3a43-4700-8ae6-b6bc9b8f759e"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("impedit"),
                            },
                        },
                        Locales: []shared.LocaleInput{
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("corporis"),
                                        ID: sdk.String("a9741d31-1352-4965-bb8a-7202611435e1"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("unde"),
                            },
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nulla"),
                                        ID: sdk.String("bc2259b1-abda-48c0-b0e1-084cb0672d1a"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("corrupti"),
                            },
                        },
                        Locations: []shared.LocationInput{
                            shared.LocationInput{
                                BuildingID: sdk.String("provident"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("accusamus"),
                                Floor: sdk.String("necessitatibus"),
                                FloorSection: sdk.String("tempore"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sint"),
                                        ID: sdk.String("665b85ef-bd02-4bae-8be2-d782259e3ea4"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quis"),
                                Value: sdk.String("beatae"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("unde"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("molestiae"),
                                Floor: sdk.String("delectus"),
                                FloorSection: sdk.String("cupiditate"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fugit"),
                                        ID: sdk.String("443da7ce-52b8-495c-937c-6454efb0b348"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("voluptas"),
                                Value: sdk.String("quo"),
                            },
                        },
                        Memberships: []shared.MembershipInput{
                            shared.MembershipInput{
                                ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                    ContactGroupResourceName: sdk.String("minus"),
                                },
                                DomainMembership: &shared.DomainMembership{
                                    InViewerDomain: sdk.Bool(false),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fuga"),
                                        ID: sdk.String("5acfbe2f-d570-4757-b929-177deac646ec"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                            },
                        },
                        Metadata: &shared.PersonMetadataInput{
                            Sources: []shared.SourceInput{
                                shared.SourceInput{
                                    Etag: sdk.String("quam"),
                                    ID: sdk.String("3409e3eb-1e5a-42b1-aeb0-7f116db99545"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                shared.SourceInput{
                                    Etag: sdk.String("eligendi"),
                                    ID: sdk.String("95fa8897-0e18-49db-b30f-cb33ea055b19"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                            },
                        },
                        MiscKeywords: []shared.MiscKeywordInput{
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("possimus"),
                                        ID: sdk.String("44e2f52d-82d3-4513-bb6f-48b656bcdb35"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOther.ToPointer(),
                                Value: sdk.String("consequuntur"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("debitis"),
                                        ID: sdk.String("4b27537a-8cd9-4e73-99c1-77d525f77b11"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumWork.ToPointer(),
                                Value: sdk.String("saepe"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("tempore"),
                                        ID: sdk.String("52ff785f-c378-414d-8c98-e0c2bb89eb75"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookSubject.ToPointer(),
                                Value: sdk.String("repellendus"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iure"),
                                        ID: sdk.String("36c60050-3d8b-4b31-980f-739ae9e057eb"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumTypeUnspecified.ToPointer(),
                                Value: sdk.String("sint"),
                            },
                        },
                        Names: []shared.NameInput{
                            shared.NameInput{
                                FamilyName: sdk.String("eos"),
                                GivenName: sdk.String("totam"),
                                HonorificPrefix: sdk.String("dicta"),
                                HonorificSuffix: sdk.String("voluptatem"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("velit"),
                                        ID: sdk.String("31f3981d-4c70-40b6-87f3-c93c73b9da3f"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("quo"),
                                PhoneticFamilyName: sdk.String("itaque"),
                                PhoneticFullName: sdk.String("illum"),
                                PhoneticGivenName: sdk.String("laborum"),
                                PhoneticHonorificPrefix: sdk.String("dignissimos"),
                                PhoneticHonorificSuffix: sdk.String("vero"),
                                PhoneticMiddleName: sdk.String("qui"),
                                UnstructuredName: sdk.String("consectetur"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("repellat"),
                                GivenName: sdk.String("explicabo"),
                                HonorificPrefix: sdk.String("explicabo"),
                                HonorificSuffix: sdk.String("exercitationem"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nihil"),
                                        ID: sdk.String("411faf4b-7544-4e47-ae80-2857a5b40463"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("dignissimos"),
                                PhoneticFamilyName: sdk.String("fugiat"),
                                PhoneticFullName: sdk.String("nostrum"),
                                PhoneticGivenName: sdk.String("molestiae"),
                                PhoneticHonorificPrefix: sdk.String("veniam"),
                                PhoneticHonorificSuffix: sdk.String("reiciendis"),
                                PhoneticMiddleName: sdk.String("ab"),
                                UnstructuredName: sdk.String("modi"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("aut"),
                                GivenName: sdk.String("aut"),
                                HonorificPrefix: sdk.String("eveniet"),
                                HonorificSuffix: sdk.String("odio"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("commodi"),
                                        ID: sdk.String("4ad7334e-c1b7-481b-b6a0-8088d100efad"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("sed"),
                                PhoneticFamilyName: sdk.String("voluptatem"),
                                PhoneticFullName: sdk.String("alias"),
                                PhoneticGivenName: sdk.String("eveniet"),
                                PhoneticHonorificPrefix: sdk.String("hic"),
                                PhoneticHonorificSuffix: sdk.String("voluptatem"),
                                PhoneticMiddleName: sdk.String("incidunt"),
                                UnstructuredName: sdk.String("qui"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("qui"),
                                GivenName: sdk.String("necessitatibus"),
                                HonorificPrefix: sdk.String("harum"),
                                HonorificSuffix: sdk.String("explicabo"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("beatae"),
                                        ID: sdk.String("64cf9ab8-366c-4723-bfda-9e06bee4825c"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("voluptatibus"),
                                PhoneticFamilyName: sdk.String("eligendi"),
                                PhoneticFullName: sdk.String("quae"),
                                PhoneticGivenName: sdk.String("officiis"),
                                PhoneticHonorificPrefix: sdk.String("architecto"),
                                PhoneticHonorificSuffix: sdk.String("architecto"),
                                PhoneticMiddleName: sdk.String("enim"),
                                UnstructuredName: sdk.String("optio"),
                            },
                        },
                        Nicknames: []shared.NicknameInput{
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("perferendis"),
                                        ID: sdk.String("bff91854-4ec4-42de-bcce-8f1977773e63"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumInitials.ToPointer(),
                                Value: sdk.String("consequuntur"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("officia"),
                                        ID: sdk.String("7b408f05-e3d4-48fd-af31-3a1f5fd94259"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumDefault.ToPointer(),
                                Value: sdk.String("quidem"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nesciunt"),
                                        ID: sdk.String("6f25ea94-4f3b-4756-811f-6c37a5126243"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumMaidenName.ToPointer(),
                                Value: sdk.String("exercitationem"),
                            },
                        },
                        Occupations: []shared.OccupationInput{
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("facilis"),
                                        ID: sdk.String("c05a23a4-5cef-4c5f-9e10-a0ce2169e510"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("veritatis"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("provident"),
                                        ID: sdk.String("c6dc5e34-7627-499b-bbbe-6949fb2bb4ec"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("saepe"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("autem"),
                                        ID: sdk.String("c3d5db3a-debd-45da-aa4c-506a8aa94c02"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("magnam"),
                            },
                        },
                        Organizations: []shared.OrganizationInput{
                            shared.OrganizationInput{
                                CostCenter: sdk.String("eligendi"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("hic"),
                                Domain: sdk.String("nostrum"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(888265),
                                    Month: sdk.Int(603650),
                                    Year: sdk.Int(860311),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(621393),
                                JobDescription: sdk.String("mollitia"),
                                Location: sdk.String("magnam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nostrum"),
                                        ID: sdk.String("78adc1ac-600d-4ec0-81ac-802e2ec09ff8"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Mrs. Ollie Ledner"),
                                PhoneticName: sdk.String("doloribus"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(244569),
                                    Month: sdk.Int(260588),
                                    Year: sdk.Int(458212),
                                },
                                Symbol: sdk.String("in"),
                                Title: sdk.String("Miss"),
                                Type: sdk.String("quasi"),
                            },
                            shared.OrganizationInput{
                                CostCenter: sdk.String("neque"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("vero"),
                                Domain: sdk.String("excepturi"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(37534),
                                    Month: sdk.Int(185816),
                                    Year: sdk.Int(771241),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(104736),
                                JobDescription: sdk.String("incidunt"),
                                Location: sdk.String("dicta"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("odit"),
                                        ID: sdk.String("5b0960a6-6815-41a4-b2af-923c5949f83f"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Angela Schaefer"),
                                PhoneticName: sdk.String("molestiae"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(395634),
                                    Month: sdk.Int(989033),
                                    Year: sdk.Int(955466),
                                },
                                Symbol: sdk.String("nobis"),
                                Title: sdk.String("Ms."),
                                Type: sdk.String("accusantium"),
                            },
                        },
                        PhoneNumbers: []shared.PhoneNumberInput{
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("minus"),
                                        ID: sdk.String("6ecbb4e2-43cf-4789-bfaf-eda53e5ae6e0"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("impedit"),
                                Value: sdk.String("quasi"),
                            },
                        },
                        Relations: []shared.RelationInput{
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eius"),
                                        ID: sdk.String("c2b9c247-c883-473a-80e1-942f32e55055"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("ad"),
                                Type: sdk.String("nisi"),
                            },
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("tenetur"),
                                        ID: sdk.String("5d56d0bd-0af2-4dfe-93db-4f62cba3f894"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("mollitia"),
                                Type: sdk.String("accusamus"),
                            },
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("harum"),
                                        ID: sdk.String("c0b80a69-24d3-4b2e-8fcc-8f895010f5dd"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("pariatur"),
                                Type: sdk.String("vel"),
                            },
                        },
                        Residences: []shared.ResidenceInput{
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("mollitia"),
                                        ID: sdk.String("1804e54c-82f1-468a-b63c-8873e484380b"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("tenetur"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("autem"),
                                        ID: sdk.String("b8ca275a-60a0-44c4-95cc-699171b51c1b"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("facilis"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("beatae"),
                                        ID: sdk.String("cf4b888e-bdfc-44cc-8a99-bc7fc0b2dce1"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("laudantium"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iusto"),
                                        ID: sdk.String("3e42b006-d678-4878-ba85-81a58208c54f"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("delectus"),
                            },
                        },
                        ResourceName: sdk.String("officia"),
                        SipAddresses: []shared.SipAddressInput{
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cumque"),
                                        ID: sdk.String("95f2eac5-565d-4307-8fee-81206e2813fa"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("deserunt"),
                                Value: sdk.String("modi"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sunt"),
                                        ID: sdk.String("c480d3f2-132a-4f03-902d-514f4cc6f18b"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("excepturi"),
                                Value: sdk.String("aliquid"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sed"),
                                        ID: sdk.String("1a6a4f77-a87e-4e3e-8be7-52c65b34418e"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("expedita"),
                                Value: sdk.String("libero"),
                            },
                        },
                        Skills: []shared.SkillInput{
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("illo"),
                                        ID: sdk.String("c8d975e0-e841-49d8-b84f-144f3e07edcc"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("dolorum"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("deserunt"),
                                        ID: sdk.String("5f3cabd9-05a9-472e-8567-28227b2d3094"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("accusantium"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("distinctio"),
                                        ID: sdk.String("f7a4fa87-cf53-45a6-bae5-4ebf60c321f0"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("amet"),
                            },
                        },
                        Urls: []shared.URLInput{
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("in"),
                                        ID: sdk.String("5d2367fe-1a0c-4c8d-b79f-0a396d90c364"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("in"),
                                Value: sdk.String("quisquam"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sunt"),
                                        ID: sdk.String("5dfbace1-88b1-4c4e-a2c8-c6ce611feeb1"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("dignissimos"),
                                Value: sdk.String("minus"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("distinctio"),
                                        ID: sdk.String("db6eec74-378b-4a25-b177-47dc915ad2ca"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("nostrum"),
                                Value: sdk.String("illum"),
                            },
                        },
                        UserDefined: []shared.UserDefinedInput{
                            shared.UserDefinedInput{
                                Key: sdk.String("commodi"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("esse"),
                                        ID: sdk.String("23dc0f5a-e2f3-4a6b-b008-78756143f5a6"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("provident"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("laudantium"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nam"),
                                        ID: sdk.String("55554080-d40b-4cac-86cb-d6b5f3ec9093"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("magnam"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("repellat"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("omnis"),
                                        ID: sdk.String("26bad255-3819-4b47-8b0e-d20e56248fff"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("nesciunt"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("cupiditate"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("animi"),
                                        ID: sdk.String("910abdca-b626-4766-96e1-ec00221b335d"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("unde"),
                            },
                        },
                    },
                },
                shared.ContactToCreateInput{
                    ContactPerson: &shared.PersonInput{
                        Addresses: []shared.AddressInput{
                            shared.AddressInput{
                                City: sdk.String("Reynoldsburgh"),
                                Country: sdk.String("Togo"),
                                CountryCode: sdk.String("RE"),
                                ExtendedAddress: sdk.String("asperiores"),
                                FormattedValue: sdk.String("temporibus"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("id"),
                                        ID: sdk.String("8d0c549e-f030-4049-b8a6-1fa1cf20688f"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("quam"),
                                PostalCode: sdk.String("19974-0886"),
                                Region: sdk.String("ab"),
                                StreetAddress: sdk.String("ex"),
                                Type: sdk.String("consectetur"),
                            },
                            shared.AddressInput{
                                City: sdk.String("Cathedral City"),
                                Country: sdk.String("Norfolk Island"),
                                CountryCode: sdk.String("CR"),
                                ExtendedAddress: sdk.String("eligendi"),
                                FormattedValue: sdk.String("voluptatum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("perferendis"),
                                        ID: sdk.String("a97ff334-cddf-4857-a9e6-1876c6ab21d2"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("illum"),
                                PostalCode: sdk.String("76283-9978"),
                                Region: sdk.String("dignissimos"),
                                StreetAddress: sdk.String("iste"),
                                Type: sdk.String("provident"),
                            },
                            shared.AddressInput{
                                City: sdk.String("New Alva"),
                                Country: sdk.String("Australia"),
                                CountryCode: sdk.String("IR"),
                                ExtendedAddress: sdk.String("laboriosam"),
                                FormattedValue: sdk.String("laborum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("autem"),
                                        ID: sdk.String("d2d00035-5338-4cec-886f-a21e9152cb31"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("molestias"),
                                PostalCode: sdk.String("44759"),
                                Region: sdk.String("ipsum"),
                                StreetAddress: sdk.String("impedit"),
                                Type: sdk.String("quos"),
                            },
                        },
                        Biographies: []shared.BiographyInput{
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextHTML.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptatem"),
                                        ID: sdk.String("3408d6d3-64ff-4d45-9906-d1263d48e935"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("dolores"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextHTML.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("excepturi"),
                                        ID: sdk.String("e81f30be-3e43-4202-9721-657650664187"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("assumenda"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("facere"),
                                        ID: sdk.String("21f9ad03-0c4e-4cc1-9a08-36429068b850"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("officia"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumContentTypeUnspecified.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("corporis"),
                                        ID: sdk.String("e7f73bc8-45e3-420a-b19f-4badf947c9a8"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("nihil"),
                            },
                        },
                        Birthdays: []shared.BirthdayInput{
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(759451),
                                    Month: sdk.Int(279673),
                                    Year: sdk.Int(178201),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("magnam"),
                                        ID: sdk.String("26665816-ddca-48ef-91fc-b4c593ec12cd"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("id"),
                            },
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(840992),
                                    Month: sdk.Int(59023),
                                    Year: sdk.Int(879208),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("placeat"),
                                        ID: sdk.String("7afedbd8-0df4-448a-87f9-390c58880983"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("fuga"),
                            },
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(704732),
                                    Month: sdk.Int(983060),
                                    Year: sdk.Int(622968),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("recusandae"),
                                        ID: sdk.String("f3ffdd9f-7f07-49af-8d35-724cdb0f4d28"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("architecto"),
                            },
                        },
                        BraggingRights: []shared.BraggingRightsInput{
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iusto"),
                                        ID: sdk.String("d56844ed-ed85-4a90-a5e6-28bdfc2032b6"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("laudantium"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dignissimos"),
                                        ID: sdk.String("9923b7e1-3584-4f7a-a12c-6891f82ce115"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("inventore"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptate"),
                                        ID: sdk.String("2305377d-cfa8-49df-975e-356686092e9c"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("repellendus"),
                            },
                        },
                        CalendarUrls: []shared.CalendarURLInput{
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("minus"),
                                        ID: sdk.String("5f111dea-1026-4d54-9a4d-190feb21780b"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quod"),
                                URL: sdk.String("eligendi"),
                            },
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sit"),
                                        ID: sdk.String("dbbddb48-4708-4fb4-a391-e6bc158c4c4e"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("numquam"),
                                URL: sdk.String("enim"),
                            },
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cupiditate"),
                                        ID: sdk.String("9ea34226-0e9b-4200-8e78-a1bd8fb7a0a1"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("suscipit"),
                                URL: sdk.String("eligendi"),
                            },
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("officiis"),
                                        ID: sdk.String("723d4097-fa30-4e9a-b725-b29122030d83"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("ullam"),
                                URL: sdk.String("deserunt"),
                            },
                        },
                        ClientData: []shared.ClientDataInput{
                            shared.ClientDataInput{
                                Key: sdk.String("distinctio"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iusto"),
                                        ID: sdk.String("799d22e8-c1f8-4493-825f-dc42c876c2c2"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("delectus"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("harum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("aliquam"),
                                        ID: sdk.String("cfc1c762-30f8-441f-b1bd-23fdb14db6be"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("officia"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("voluptas"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laudantium"),
                                        ID: sdk.String("5998e22a-e20d-4a16-bc2b-271a289c57e8"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("non"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("recusandae"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("omnis"),
                                        ID: sdk.String("0439d222-4656-4946-a407-084f7ab37cef"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("sed"),
                            },
                        },
                        EmailAddresses: []shared.EmailAddressInput{
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("consequuntur"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quis"),
                                        ID: sdk.String("194db554-10ad-4c66-9af9-0a26c7cdc981"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("voluptatem"),
                                Value: sdk.String("aliquid"),
                            },
                        },
                        Etag: sdk.String("laudantium"),
                        Events: []shared.EventInput{
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(544660),
                                    Month: sdk.Int(63369),
                                    Year: sdk.Int(816168),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ea"),
                                        ID: sdk.String("bb33cfaa-348c-431b-b407-ee4fcf0c42b7"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("reiciendis"),
                            },
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(114952),
                                    Month: sdk.Int(353009),
                                    Year: sdk.Int(393630),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("consequuntur"),
                                        ID: sdk.String("6398a0dc-7663-424c-8b06-c8ca12d02529"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("odio"),
                            },
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(2758),
                                    Month: sdk.Int(692555),
                                    Year: sdk.Int(533457),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("possimus"),
                                        ID: sdk.String("5722dd89-5b8b-4cf2-8db9-59693352f745"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("adipisci"),
                            },
                        },
                        ExternalIds: []shared.ExternalIDInput{
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("occaecati"),
                                        ID: sdk.String("4d78de3b-6e93-489f-9abb-7f662550a283"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("qui"),
                                Value: sdk.String("deserunt"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eligendi"),
                                        ID: sdk.String("483afd23-15bb-4a65-8164-e06f5bf6ae59"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("expedita"),
                                Value: sdk.String("quisquam"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("praesentium"),
                                        ID: sdk.String("bdef3612-b63c-4205-bda8-40774a68a9a3"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("illum"),
                                Value: sdk.String("sit"),
                            },
                        },
                        FileAses: []shared.FileAsInput{
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptas"),
                                        ID: sdk.String("b6f66fef-020e-49f4-83b4-257b992c8dbd"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("commodi"),
                            },
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("similique"),
                                        ID: sdk.String("61efa219-8258-4fd0-a9eb-a47f7d3ef049"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("dolore"),
                            },
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptatem"),
                                        ID: sdk.String("d6a1831c-87ad-4f59-afdf-1ad837ae80c1"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("architecto"),
                            },
                        },
                        Genders: []shared.GenderInput{
                            shared.GenderInput{
                                AddressMeAs: sdk.String("eligendi"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("occaecati"),
                                        ID: sdk.String("5ba99867-8fa3-4f69-a991-af388ce03614"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("modi"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("quos"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("minus"),
                                        ID: sdk.String("7977a0ef-2f53-4602-8efe-ef934152ed7e"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("ullam"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("non"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("delectus"),
                                        ID: sdk.String("4c157dea-a717-40f4-85ac-cf667aaf9bba"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("inventore"),
                            },
                        },
                        ImClients: []shared.ImClientInput{
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ad"),
                                        ID: sdk.String("fe431d6b-f5c8-438f-bb8c-20cb67fc4b42"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("repudiandae"),
                                Type: sdk.String("sint"),
                                Username: sdk.String("Koby.Tremblay"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("amet"),
                                        ID: sdk.String("4c9f7b79-dfeb-477a-9c38-d4baf91e506e"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("deleniti"),
                                Type: sdk.String("provident"),
                                Username: sdk.String("Afton.Parisian"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nam"),
                                        ID: sdk.String("475f16f5-6d38-45a3-84ac-631b99e26ced"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("a"),
                                Type: sdk.String("natus"),
                                Username: sdk.String("Veronica_Skiles29"),
                            },
                        },
                        Interests: []shared.InterestInput{
                            shared.InterestInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("accusantium"),
                                        ID: sdk.String("f63bbf81-7837-4b01-afdd-788624189eb4"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("blanditiis"),
                            },
                        },
                        Locales: []shared.LocaleInput{
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("consectetur"),
                                        ID: sdk.String("f5033f19-dbf1-425c-a415-2eab9cd7e522"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("error"),
                            },
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("vel"),
                                        ID: sdk.String("a0e123b7-847e-4c59-a1f6-7f3c4cce4b6d"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("aliquid"),
                            },
                        },
                        Locations: []shared.LocationInput{
                            shared.LocationInput{
                                BuildingID: sdk.String("aliquid"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("repellat"),
                                Floor: sdk.String("sapiente"),
                                FloorSection: sdk.String("consectetur"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eligendi"),
                                        ID: sdk.String("57475013-57e4-44f5-9f8b-084c3197e193"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("odit"),
                                Value: sdk.String("incidunt"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("corporis"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("quaerat"),
                                Floor: sdk.String("suscipit"),
                                FloorSection: sdk.String("ducimus"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("tenetur"),
                                        ID: sdk.String("94874c2d-5cc4-4972-a33e-66bd8fe5d00b"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("odio"),
                                Value: sdk.String("omnis"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("officiis"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("delectus"),
                                Floor: sdk.String("magni"),
                                FloorSection: sdk.String("sit"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("velit"),
                                        ID: sdk.String("87320590-ccc1-4096-8003-13b3e5044f65"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("debitis"),
                                Value: sdk.String("reprehenderit"),
                            },
                        },
                        Memberships: []shared.MembershipInput{
                            shared.MembershipInput{
                                ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                    ContactGroupResourceName: sdk.String("assumenda"),
                                },
                                DomainMembership: &shared.DomainMembership{
                                    InViewerDomain: sdk.Bool(false),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cumque"),
                                        ID: sdk.String("4077d0cc-3f40-48ef-815c-eb4d6e1eae0f"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                            },
                        },
                        Metadata: &shared.PersonMetadataInput{
                            Sources: []shared.SourceInput{
                                shared.SourceInput{
                                    Etag: sdk.String("fuga"),
                                    ID: sdk.String("edf2acab-58b9-491c-926d-db589461e742"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                shared.SourceInput{
                                    Etag: sdk.String("optio"),
                                    ID: sdk.String("be6d9502-f0ea-4930-b69f-7ac2f72f8850"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                            },
                        },
                        MiscKeywords: []shared.MiscKeywordInput{
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptatem"),
                                        ID: sdk.String("49116082-0788-48ec-a618-3bfe9659eb40"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumHome.ToPointer(),
                                Value: sdk.String("sunt"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptas"),
                                        ID: sdk.String("faf75b0b-532a-44da-b7cb-aaf4452c4842"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookSubject.ToPointer(),
                                Value: sdk.String("tempore"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("odit"),
                                        ID: sdk.String("ad32dafe-81a8-48f4-8445-73fecd47353f"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookDirectoryServer.ToPointer(),
                                Value: sdk.String("placeat"),
                            },
                        },
                        Names: []shared.NameInput{
                            shared.NameInput{
                                FamilyName: sdk.String("sed"),
                                GivenName: sdk.String("eaque"),
                                HonorificPrefix: sdk.String("natus"),
                                HonorificSuffix: sdk.String("ratione"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nihil"),
                                        ID: sdk.String("9aa69cd5-fbcf-479d-a18a-7822bf95894e"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("praesentium"),
                                PhoneticFamilyName: sdk.String("eum"),
                                PhoneticFullName: sdk.String("vitae"),
                                PhoneticGivenName: sdk.String("animi"),
                                PhoneticHonorificPrefix: sdk.String("possimus"),
                                PhoneticHonorificSuffix: sdk.String("libero"),
                                PhoneticMiddleName: sdk.String("ullam"),
                                UnstructuredName: sdk.String("quaerat"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("maiores"),
                                GivenName: sdk.String("iste"),
                                HonorificPrefix: sdk.String("accusamus"),
                                HonorificSuffix: sdk.String("ipsam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fugiat"),
                                        ID: sdk.String("751c9fe8-f750-42bf-9c34-50841f176445"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("amet"),
                                PhoneticFamilyName: sdk.String("voluptate"),
                                PhoneticFullName: sdk.String("molestias"),
                                PhoneticGivenName: sdk.String("voluptatibus"),
                                PhoneticHonorificPrefix: sdk.String("ipsum"),
                                PhoneticHonorificSuffix: sdk.String("hic"),
                                PhoneticMiddleName: sdk.String("quidem"),
                                UnstructuredName: sdk.String("odit"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("molestiae"),
                                GivenName: sdk.String("accusamus"),
                                HonorificPrefix: sdk.String("quia"),
                                HonorificSuffix: sdk.String("inventore"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("doloribus"),
                                        ID: sdk.String("862657b3-6fc6-4b9f-987c-e525c67641a8"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("quasi"),
                                PhoneticFamilyName: sdk.String("sed"),
                                PhoneticFullName: sdk.String("officiis"),
                                PhoneticGivenName: sdk.String("veniam"),
                                PhoneticHonorificPrefix: sdk.String("quae"),
                                PhoneticHonorificSuffix: sdk.String("dolore"),
                                PhoneticMiddleName: sdk.String("in"),
                                UnstructuredName: sdk.String("libero"),
                            },
                        },
                        Nicknames: []shared.NicknameInput{
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cumque"),
                                        ID: sdk.String("21ccb423-abcd-4c91-baab-dd88e71f6c48"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumInitials.ToPointer(),
                                Value: sdk.String("sed"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quibusdam"),
                                        ID: sdk.String("7771e7fd-0740-409e-b8d2-9de1dd7097b5"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumOtherName.ToPointer(),
                                Value: sdk.String("ipsa"),
                            },
                        },
                        Occupations: []shared.OccupationInput{
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quo"),
                                        ID: sdk.String("57fa6c78-a216-4e19-bafe-ca6191498140"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("suscipit"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eius"),
                                        ID: sdk.String("ff8ae170-ef03-4b5f-b7e4-aa8685559667"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("magni"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("animi"),
                                        ID: sdk.String("a5dcb668-2cb7-40f8-8fd5-fb6e91b9a9f7"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("laudantium"),
                            },
                        },
                        Organizations: []shared.OrganizationInput{
                            shared.OrganizationInput{
                                CostCenter: sdk.String("aliquid"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("repudiandae"),
                                Domain: sdk.String("aspernatur"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(799306),
                                    Month: sdk.Int(210121),
                                    Year: sdk.Int(203356),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(56371),
                                JobDescription: sdk.String("excepturi"),
                                Location: sdk.String("repellendus"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("soluta"),
                                        ID: sdk.String("0536d9e7-5ca0-406f-9392-c11a25a8bf92"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Allan Greenfelder"),
                                PhoneticName: sdk.String("fuga"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(869718),
                                    Month: sdk.Int(602076),
                                    Year: sdk.Int(673400),
                                },
                                Symbol: sdk.String("provident"),
                                Title: sdk.String("Dr."),
                                Type: sdk.String("corrupti"),
                            },
                            shared.OrganizationInput{
                                CostCenter: sdk.String("soluta"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("earum"),
                                Domain: sdk.String("praesentium"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(129156),
                                    Month: sdk.Int(138727),
                                    Year: sdk.Int(73197),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(103760),
                                JobDescription: sdk.String("quia"),
                                Location: sdk.String("ad"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("velit"),
                                        ID: sdk.String("59d98387-f7a7-49cd-b2cd-2484da21729f"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Dr. Guillermo Funk"),
                                PhoneticName: sdk.String("exercitationem"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(468221),
                                    Month: sdk.Int(154723),
                                    Year: sdk.Int(336123),
                                },
                                Symbol: sdk.String("maiores"),
                                Title: sdk.String("Mr."),
                                Type: sdk.String("dicta"),
                            },
                        },
                        PhoneNumbers: []shared.PhoneNumberInput{
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sint"),
                                        ID: sdk.String("ac1e41d8-a23c-423e-b4f2-dfa4a197f6de"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("aspernatur"),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("et"),
                                        ID: sdk.String("51fe1712-0998-453e-9f54-3d854439ee22"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("non"),
                                Value: sdk.String("laboriosam"),
                            },
                        },
                        Relations: []shared.RelationInput{
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("tempora"),
                                        ID: sdk.String("43bc1541-88c2-4f56-a85d-a7832eabd617"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("nesciunt"),
                                Type: sdk.String("harum"),
                            },
                        },
                        Residences: []shared.ResidenceInput{
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("pariatur"),
                                        ID: sdk.String("51a44bf0-1bad-4870-ad46-082bfbdc41ff"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("at"),
                            },
                        },
                        ResourceName: sdk.String("magnam"),
                        SipAddresses: []shared.SipAddressInput{
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sed"),
                                        ID: sdk.String("ae4fb5cb-35d1-4763-8f1e-db78359ecc5c"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("praesentium"),
                                Value: sdk.String("vel"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("doloremque"),
                                        ID: sdk.String("f8cd580b-a738-410e-8fe4-447297cd3b1d"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("amet"),
                                Value: sdk.String("expedita"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("libero"),
                                        ID: sdk.String("ce247b76-84ef-4f50-926d-71cffbd0eb74"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("blanditiis"),
                                Value: sdk.String("quaerat"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("odit"),
                                        ID: sdk.String("1953b44b-d3c4-4315-9d33-e5953c001139"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("aliquid"),
                                Value: sdk.String("sequi"),
                            },
                        },
                        Skills: []shared.SkillInput{
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("fuga"),
                                        ID: sdk.String("41e6c31c-c2f1-4fcb-91c9-a41ffbe9cbd7"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("ipsam"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("repudiandae"),
                                        ID: sdk.String("e65e076c-c7ab-4f61-aea5-c71641934b90"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("aspernatur"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("officiis"),
                                        ID: sdk.String("09d19d2f-c2f9-4e2e-9059-44b935d237a7"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("asperiores"),
                            },
                        },
                        Urls: []shared.URLInput{
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("doloremque"),
                                        ID: sdk.String("849d6aed-4aec-4b75-b7cd-9222c9ff5749"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("error"),
                                Value: sdk.String("id"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("harum"),
                                        ID: sdk.String("fa2e761f-0ca4-4d45-aef1-031e6899f0c2"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("ipsa"),
                                Value: sdk.String("quasi"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("saepe"),
                                        ID: sdk.String("22cd55cc-0584-4a18-8d76-d971fc820c65"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("aut"),
                                Value: sdk.String("consectetur"),
                            },
                        },
                        UserDefined: []shared.UserDefinedInput{
                            shared.UserDefinedInput{
                                Key: sdk.String("rerum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("distinctio"),
                                        ID: sdk.String("8e0cc885-187e-44de-84af-28c5dddb46aa"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("quo"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("voluptatibus"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("illum"),
                                        ID: sdk.String("6d828da0-1319-4112-9646-645c1d81f290"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("aspernatur"),
                            },
                        },
                    },
                },
                shared.ContactToCreateInput{
                    ContactPerson: &shared.PersonInput{
                        Addresses: []shared.AddressInput{
                            shared.AddressInput{
                                City: sdk.String("South Leonel"),
                                Country: sdk.String("Peru"),
                                CountryCode: sdk.String("KN"),
                                ExtendedAddress: sdk.String("culpa"),
                                FormattedValue: sdk.String("reiciendis"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("a"),
                                        ID: sdk.String("0ea2216c-be07-41bc-963e-279a3b084da9"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("consequuntur"),
                                PostalCode: sdk.String("48029"),
                                Region: sdk.String("eius"),
                                StreetAddress: sdk.String("ipsa"),
                                Type: sdk.String("quas"),
                            },
                            shared.AddressInput{
                                City: sdk.String("South Margot"),
                                Country: sdk.String("Jersey"),
                                CountryCode: sdk.String("EE"),
                                ExtendedAddress: sdk.String("quia"),
                                FormattedValue: sdk.String("repellendus"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("blanditiis"),
                                        ID: sdk.String("4496cbde-ecf6-4b99-bc63-562ebfdf55c2"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("labore"),
                                PostalCode: sdk.String("04070-4601"),
                                Region: sdk.String("quos"),
                                StreetAddress: sdk.String("molestiae"),
                                Type: sdk.String("voluptate"),
                            },
                            shared.AddressInput{
                                City: sdk.String("Denisshire"),
                                Country: sdk.String("Togo"),
                                CountryCode: sdk.String("UY"),
                                ExtendedAddress: sdk.String("suscipit"),
                                FormattedValue: sdk.String("assumenda"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("doloremque"),
                                        ID: sdk.String("c6d6ed9c-73dd-4634-9715-09a8e870d3c5"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("architecto"),
                                PostalCode: sdk.String("58121-7464"),
                                Region: sdk.String("aliquid"),
                                StreetAddress: sdk.String("culpa"),
                                Type: sdk.String("illo"),
                            },
                            shared.AddressInput{
                                City: sdk.String("Country Club"),
                                Country: sdk.String("Argentina"),
                                CountryCode: sdk.String("SH"),
                                ExtendedAddress: sdk.String("dignissimos"),
                                FormattedValue: sdk.String("non"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("facere"),
                                        ID: sdk.String("f5b67198-90f4-42a4-bb43-8d85b260591d"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                PoBox: sdk.String("tempora"),
                                PostalCode: sdk.String("91710"),
                                Region: sdk.String("veniam"),
                                StreetAddress: sdk.String("sint"),
                                Type: sdk.String("minus"),
                            },
                        },
                        Biographies: []shared.BiographyInput{
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextHTML.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nesciunt"),
                                        ID: sdk.String("f567e0e2-5276-45b1-962f-cdace1f01216"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("repudiandae"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumContentTypeUnspecified.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("aspernatur"),
                                        ID: sdk.String("39e8f25c-d0d1-49d9-99f4-39e39266cbd9"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("delectus"),
                            },
                            shared.BiographyInput{
                                ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("deserunt"),
                                        ID: sdk.String("a2b24113-695d-41e6-a98f-cc4596217c29"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("molestiae"),
                            },
                        },
                        Birthdays: []shared.BirthdayInput{
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(454705),
                                    Month: sdk.Int(433265),
                                    Year: sdk.Int(232557),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("velit"),
                                        ID: sdk.String("4254038b-fb59-471e-9819-0557389cedba"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("in"),
                            },
                            shared.BirthdayInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(950894),
                                    Month: sdk.Int(844799),
                                    Year: sdk.Int(634091),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dolor"),
                                        ID: sdk.String("9594d66b-c2ae-4480-a32b-9954b6fa2206"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Text: sdk.String("commodi"),
                            },
                        },
                        BraggingRights: []shared.BraggingRightsInput{
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("atque"),
                                        ID: sdk.String("28553cb1-0006-4bef-8921-ec2053b74936"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("officia"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quisquam"),
                                        ID: sdk.String("8ee0f2bf-1958-48d4-8d03-f3deba297be3"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("cupiditate"),
                            },
                            shared.BraggingRightsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("consequatur"),
                                        ID: sdk.String("bc40df86-8fd5-4240-9cb3-31d492f4f127"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("quidem"),
                            },
                        },
                        CalendarUrls: []shared.CalendarURLInput{
                            shared.CalendarURLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("saepe"),
                                        ID: sdk.String("0bf1f821-7978-4d0a-8ca7-7aeb7b7021a5"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quae"),
                                URL: sdk.String("quaerat"),
                            },
                        },
                        ClientData: []shared.ClientDataInput{
                            shared.ClientDataInput{
                                Key: sdk.String("rerum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laboriosam"),
                                        ID: sdk.String("4e99fb0e-67e0-494f-9fed-5540ef53a34a"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("rerum"),
                            },
                            shared.ClientDataInput{
                                Key: sdk.String("blanditiis"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sapiente"),
                                        ID: sdk.String("e99731ad-c05d-485a-a2df-b70fb3874290"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("adipisci"),
                            },
                        },
                        EmailAddresses: []shared.EmailAddressInput{
                            shared.EmailAddressInput{
                                DisplayName: sdk.String("ex"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quis"),
                                        ID: sdk.String("61eca16e-f894-451b-976e-eeb518c4da1f"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("repellendus"),
                                Value: sdk.String("dolor"),
                            },
                        },
                        Etag: sdk.String("nemo"),
                        Events: []shared.EventInput{
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(95380),
                                    Month: sdk.Int(140406),
                                    Year: sdk.Int(966682),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("doloremque"),
                                        ID: sdk.String("6d4e5b72-f0f5-4485-a8a0-424e00a1d6eb"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("modi"),
                            },
                            shared.EventInput{
                                Date: &shared.Date{
                                    Day: sdk.Int(191653),
                                    Month: sdk.Int(305965),
                                    Year: sdk.Int(410321),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("aliquam"),
                                        ID: sdk.String("5d03084f-bba5-4cce-bf5c-b01fe51e528a"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("ad"),
                            },
                        },
                        ExternalIds: []shared.ExternalIDInput{
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("minus"),
                                        ID: sdk.String("82b85f8b-c2ca-4ba8-9a41-27dd597ff471"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("similique"),
                                Value: sdk.String("id"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("et"),
                                        ID: sdk.String("bc74b86c-ecc7-44f7-bb48-48bd6a6f0441"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("qui"),
                                Value: sdk.String("maxime"),
                            },
                            shared.ExternalIDInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ratione"),
                                        ID: sdk.String("b8080943-73e0-4604-99be-bbad02f2586b"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("a"),
                                Value: sdk.String("et"),
                            },
                        },
                        FileAses: []shared.FileAsInput{
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eos"),
                                        ID: sdk.String("558daa95-be6c-4d02-b56c-354aa432b47e"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("esse"),
                            },
                            shared.FileAsInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ex"),
                                        ID: sdk.String("3c5208c2-3e98-402d-82f0-d45eb4a8b674"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("recusandae"),
                            },
                        },
                        Genders: []shared.GenderInput{
                            shared.GenderInput{
                                AddressMeAs: sdk.String("quisquam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("delectus"),
                                        ID: sdk.String("c18edc7f-787e-432e-84b3-d3ed0c5670ef"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("aspernatur"),
                            },
                            shared.GenderInput{
                                AddressMeAs: sdk.String("harum"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("illum"),
                                        ID: sdk.String("3c9f1cc5-03f6-4c39-bcd0-a6290f957f38"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("ab"),
                            },
                        },
                        ImClients: []shared.ImClientInput{
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("natus"),
                                        ID: sdk.String("ad7ef807-aae0-43f3-bca7-9fb9de4032ba"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("commodi"),
                                Type: sdk.String("a"),
                                Username: sdk.String("Rocky_Donnelly"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("expedita"),
                                        ID: sdk.String("a9216bcb-4158-435c-b364-1723133edc04"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("rerum"),
                                Type: sdk.String("quod"),
                                Username: sdk.String("Frankie.Bradtke"),
                            },
                            shared.ImClientInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("facilis"),
                                        ID: sdk.String("bca49227-c42c-422c-9535-0495c5dbb3c5"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Protocol: sdk.String("quo"),
                                Type: sdk.String("vitae"),
                                Username: sdk.String("Tate_Goldner"),
                            },
                        },
                        Interests: []shared.InterestInput{
                            shared.InterestInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("itaque"),
                                        ID: sdk.String("8aa257dd-c191-42eb-9e64-bfcc5469d401"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("possimus"),
                            },
                        },
                        Locales: []shared.LocaleInput{
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("est"),
                                        ID: sdk.String("796206be-f2b0-4a3e-82c1-aa010e9aac2e"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("veritatis"),
                            },
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("adipisci"),
                                        ID: sdk.String("5586d18f-9f97-4a4b-bad2-bf7d67ca84ad"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("unde"),
                            },
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("expedita"),
                                        ID: sdk.String("41d61243-5318-470c-b68b-03ad421bd43d"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("delectus"),
                            },
                            shared.LocaleInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ipsa"),
                                        ID: sdk.String("cb0a0003-eb22-4d9b-ba70-d94faa741c57"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("dicta"),
                            },
                        },
                        Locations: []shared.LocationInput{
                            shared.LocationInput{
                                BuildingID: sdk.String("vero"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("quibusdam"),
                                Floor: sdk.String("maxime"),
                                FloorSection: sdk.String("consequuntur"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sit"),
                                        ID: sdk.String("50d38dc3-ce18-4547-af9e-e69166a8be34"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quaerat"),
                                Value: sdk.String("debitis"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("similique"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("porro"),
                                Floor: sdk.String("blanditiis"),
                                FloorSection: sdk.String("libero"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sequi"),
                                        ID: sdk.String("a2875c6c-1fe6-406d-87d2-a9c87ae50c16"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("laboriosam"),
                                Value: sdk.String("veritatis"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("similique"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("veritatis"),
                                Floor: sdk.String("temporibus"),
                                FloorSection: sdk.String("excepturi"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("veritatis"),
                                        ID: sdk.String("36a7e8d5-3213-4f3f-a587-52db764c59f0"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("veniam"),
                                Value: sdk.String("ea"),
                            },
                            shared.LocationInput{
                                BuildingID: sdk.String("placeat"),
                                Current: sdk.Bool(false),
                                DeskCode: sdk.String("necessitatibus"),
                                Floor: sdk.String("harum"),
                                FloorSection: sdk.String("cumque"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("culpa"),
                                        ID: sdk.String("da29ca79-181c-4956-b166-3c530b566516"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("culpa"),
                                Value: sdk.String("non"),
                            },
                        },
                        Memberships: []shared.MembershipInput{
                            shared.MembershipInput{
                                ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                    ContactGroupResourceName: sdk.String("amet"),
                                },
                                DomainMembership: &shared.DomainMembership{
                                    InViewerDomain: sdk.Bool(false),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("deleniti"),
                                        ID: sdk.String("512ab252-1b9f-42e0-b246-7b8a40bc05fa"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                            },
                            shared.MembershipInput{
                                ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                    ContactGroupResourceName: sdk.String("voluptatem"),
                                },
                                DomainMembership: &shared.DomainMembership{
                                    InViewerDomain: sdk.Bool(false),
                                },
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("at"),
                                        ID: sdk.String("650edf22-a94d-420e-890e-a41d1f465e85"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                            },
                        },
                        Metadata: &shared.PersonMetadataInput{
                            Sources: []shared.SourceInput{
                                shared.SourceInput{
                                    Etag: sdk.String("nisi"),
                                    ID: sdk.String("fff73fdf-54fd-4d5e-a954-3398dafb42a8"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                shared.SourceInput{
                                    Etag: sdk.String("iure"),
                                    ID: sdk.String("3388e4d8-039e-4a5f-9b18-a244fd619039"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                            },
                        },
                        MiscKeywords: []shared.MiscKeywordInput{
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("maxime"),
                                        ID: sdk.String("d38ed0dc-671d-4c7f-9e3a-f15920c90d1b"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookSubject.ToPointer(),
                                Value: sdk.String("aperiam"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dicta"),
                                        ID: sdk.String("f2bd89c8-a326-439d-a5b7-b6902b881a94"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookMileage.ToPointer(),
                                Value: sdk.String("modi"),
                            },
                            shared.MiscKeywordInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sequi"),
                                        ID: sdk.String("664a8f0a-f8c6-491d-b32d-9fbaf9476a2a"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.MiscKeywordTypeEnumOutlookSensitivity.ToPointer(),
                                Value: sdk.String("possimus"),
                            },
                        },
                        Names: []shared.NameInput{
                            shared.NameInput{
                                FamilyName: sdk.String("quo"),
                                GivenName: sdk.String("ullam"),
                                HonorificPrefix: sdk.String("ipsa"),
                                HonorificSuffix: sdk.String("placeat"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quas"),
                                        ID: sdk.String("a3512c73-7848-4930-b50a-00e966ec736d"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("neque"),
                                PhoneticFamilyName: sdk.String("inventore"),
                                PhoneticFullName: sdk.String("omnis"),
                                PhoneticGivenName: sdk.String("quaerat"),
                                PhoneticHonorificPrefix: sdk.String("nesciunt"),
                                PhoneticHonorificSuffix: sdk.String("omnis"),
                                PhoneticMiddleName: sdk.String("corrupti"),
                                UnstructuredName: sdk.String("optio"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("molestiae"),
                                GivenName: sdk.String("atque"),
                                HonorificPrefix: sdk.String("dolor"),
                                HonorificSuffix: sdk.String("optio"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cupiditate"),
                                        ID: sdk.String("2398ed3d-3ab7-4ca3-85ca-8649a70cfd5d"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("iste"),
                                PhoneticFamilyName: sdk.String("corrupti"),
                                PhoneticFullName: sdk.String("iste"),
                                PhoneticGivenName: sdk.String("distinctio"),
                                PhoneticHonorificPrefix: sdk.String("in"),
                                PhoneticHonorificSuffix: sdk.String("consequuntur"),
                                PhoneticMiddleName: sdk.String("voluptatem"),
                                UnstructuredName: sdk.String("voluptas"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("magnam"),
                                GivenName: sdk.String("ad"),
                                HonorificPrefix: sdk.String("quae"),
                                HonorificSuffix: sdk.String("ipsa"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("iure"),
                                        ID: sdk.String("7d19ea83-d492-4ed1-8b8a-2c1954545e95"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("facere"),
                                PhoneticFamilyName: sdk.String("cumque"),
                                PhoneticFullName: sdk.String("cumque"),
                                PhoneticGivenName: sdk.String("et"),
                                PhoneticHonorificPrefix: sdk.String("praesentium"),
                                PhoneticHonorificSuffix: sdk.String("minima"),
                                PhoneticMiddleName: sdk.String("eveniet"),
                                UnstructuredName: sdk.String("est"),
                            },
                            shared.NameInput{
                                FamilyName: sdk.String("magnam"),
                                GivenName: sdk.String("unde"),
                                HonorificPrefix: sdk.String("consequatur"),
                                HonorificSuffix: sdk.String("dicta"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eligendi"),
                                        ID: sdk.String("7c43ad2d-aa78-44ab-a3d2-30edf73811a1"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                MiddleName: sdk.String("veniam"),
                                PhoneticFamilyName: sdk.String("non"),
                                PhoneticFullName: sdk.String("laudantium"),
                                PhoneticGivenName: sdk.String("consequuntur"),
                                PhoneticHonorificPrefix: sdk.String("rerum"),
                                PhoneticHonorificSuffix: sdk.String("nulla"),
                                PhoneticMiddleName: sdk.String("ducimus"),
                                UnstructuredName: sdk.String("eveniet"),
                            },
                        },
                        Nicknames: []shared.NicknameInput{
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("enim"),
                                        ID: sdk.String("6507621c-58f4-4d73-9656-4c20a0711a96"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumAlternateName.ToPointer(),
                                Value: sdk.String("aspernatur"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ut"),
                                        ID: sdk.String("a7dbb8f5-32d8-492c-b781-2cb512c87824"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumAlternateName.ToPointer(),
                                Value: sdk.String("asperiores"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("corporis"),
                                        ID: sdk.String("48f88f8f-1bf0-4bc8-a1f2-06d5d831d008"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumDefault.ToPointer(),
                                Value: sdk.String("provident"),
                            },
                            shared.NicknameInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("ipsa"),
                                        ID: sdk.String("f6706673-f3a6-481c-9768-dce742409a21"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: shared.NicknameTypeEnumShortName.ToPointer(),
                                Value: sdk.String("eaque"),
                            },
                        },
                        Occupations: []shared.OccupationInput{
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptas"),
                                        ID: sdk.String("01489a5f-63e3-4af3-9d9d-da33dcd63483"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("non"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dolorum"),
                                        ID: sdk.String("7a98e4df-37e4-45b8-955d-413e13a48231"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("occaecati"),
                            },
                            shared.OccupationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("perferendis"),
                                        ID: sdk.String("7bd354c0-92bd-4734-b024-49d86f4bb20f"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("nostrum"),
                            },
                        },
                        Organizations: []shared.OrganizationInput{
                            shared.OrganizationInput{
                                CostCenter: sdk.String("provident"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("veritatis"),
                                Domain: sdk.String("sunt"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(798619),
                                    Month: sdk.Int(710148),
                                    Year: sdk.Int(961171),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(930319),
                                JobDescription: sdk.String("dignissimos"),
                                Location: sdk.String("magnam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("excepturi"),
                                        ID: sdk.String("caf45a27-f69e-42c9-a6d1-0e9db3ad4c6b"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Ann Bashirian"),
                                PhoneticName: sdk.String("occaecati"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(787042),
                                    Month: sdk.Int(201229),
                                    Year: sdk.Int(194556),
                                },
                                Symbol: sdk.String("in"),
                                Title: sdk.String("Mrs."),
                                Type: sdk.String("nihil"),
                            },
                            shared.OrganizationInput{
                                CostCenter: sdk.String("velit"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("aut"),
                                Domain: sdk.String("rem"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(142520),
                                    Month: sdk.Int(727641),
                                    Year: sdk.Int(624300),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(278751),
                                JobDescription: sdk.String("asperiores"),
                                Location: sdk.String("eos"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("mollitia"),
                                        ID: sdk.String("b1fd5671-e9c3-4263-90a4-67143789ce0e"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Gerald Hilll"),
                                PhoneticName: sdk.String("temporibus"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(606943),
                                    Month: sdk.Int(228483),
                                    Year: sdk.Int(647235),
                                },
                                Symbol: sdk.String("ducimus"),
                                Title: sdk.String("Mrs."),
                                Type: sdk.String("impedit"),
                            },
                            shared.OrganizationInput{
                                CostCenter: sdk.String("ipsa"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("dolores"),
                                Domain: sdk.String("ullam"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(152561),
                                    Month: sdk.Int(954542),
                                    Year: sdk.Int(905046),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(224548),
                                JobDescription: sdk.String("quidem"),
                                Location: sdk.String("quaerat"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cum"),
                                        ID: sdk.String("4db8b778-ebb6-4e1d-acf5-02bafb2cbc46"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Hope Halvorson"),
                                PhoneticName: sdk.String("exercitationem"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(871888),
                                    Month: sdk.Int(632648),
                                    Year: sdk.Int(1914),
                                },
                                Symbol: sdk.String("eos"),
                                Title: sdk.String("Ms."),
                                Type: sdk.String("quisquam"),
                            },
                            shared.OrganizationInput{
                                CostCenter: sdk.String("dolor"),
                                Current: sdk.Bool(false),
                                Department: sdk.String("accusamus"),
                                Domain: sdk.String("sint"),
                                EndDate: &shared.Date{
                                    Day: sdk.Int(318672),
                                    Month: sdk.Int(86220),
                                    Year: sdk.Int(652967),
                                },
                                FullTimeEquivalentMillipercent: sdk.Int(84708),
                                JobDescription: sdk.String("vero"),
                                Location: sdk.String("ratione"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("aut"),
                                        ID: sdk.String("fda96648-9d7b-4786-b3e1-3a12a6b99249"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Name: sdk.String("Faye Funk"),
                                PhoneticName: sdk.String("ducimus"),
                                StartDate: &shared.Date{
                                    Day: sdk.Int(989060),
                                    Month: sdk.Int(332074),
                                    Year: sdk.Int(768587),
                                },
                                Symbol: sdk.String("praesentium"),
                                Title: sdk.String("Mrs."),
                                Type: sdk.String("amet"),
                            },
                        },
                        PhoneNumbers: []shared.PhoneNumberInput{
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nesciunt"),
                                        ID: sdk.String("6b86b3cd-f641-45b0-849f-9df13f4eedbe"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("deleniti"),
                                Value: sdk.String("tempore"),
                            },
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("reiciendis"),
                                        ID: sdk.String("60682589-4ea7-463d-9c72-795b785148d6"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("minima"),
                                Value: sdk.String("ut"),
                            },
                            shared.PhoneNumberInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("cupiditate"),
                                        ID: sdk.String("e5635b33-bc0f-4970-842f-c9f4844225e7"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("expedita"),
                                Value: sdk.String("ducimus"),
                            },
                        },
                        Relations: []shared.RelationInput{
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eum"),
                                        ID: sdk.String("065c0efa-6f93-4b90-a1b8-c95be1254b73"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("reiciendis"),
                                Type: sdk.String("dolore"),
                            },
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("voluptatibus"),
                                        ID: sdk.String("e77210d1-f655-48c9-9c72-2d2bc0f94087"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("unde"),
                                Type: sdk.String("maxime"),
                            },
                            shared.RelationInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("culpa"),
                                        ID: sdk.String("ae042dd7-caac-49b4-8aa1-cfe9e15df903"),
                                        Type: shared.SourceTypeEnumContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Person: sdk.String("aperiam"),
                                Type: sdk.String("ducimus"),
                            },
                        },
                        Residences: []shared.ResidenceInput{
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("amet"),
                                        ID: sdk.String("7831983d-42e5-44a8-9466-597c50233c14"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("vitae"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("quibusdam"),
                                        ID: sdk.String("51aaa6dd-f5ab-4d64-87c5-fc2b862a00be"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("autem"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("perspiciatis"),
                                        ID: sdk.String("e1001576-30bd-4a7a-bded-84a35a41238e"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("officia"),
                            },
                            shared.ResidenceInput{
                                Current: sdk.Bool(false),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("in"),
                                        ID: sdk.String("35ac26ae-33be-4f97-9a8f-46bca1106fe9"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("ipsam"),
                            },
                        },
                        ResourceName: sdk.String("soluta"),
                        SipAddresses: []shared.SipAddressInput{
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("vitae"),
                                        ID: sdk.String("1d08cf88-ec9f-47b9-9a55-0a656ed333bb"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("quo"),
                                Value: sdk.String("officiis"),
                            },
                            shared.SipAddressInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("laudantium"),
                                        ID: sdk.String("aa65432a-986e-4b7e-94ca-564089150097"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("et"),
                                Value: sdk.String("unde"),
                            },
                        },
                        Skills: []shared.SkillInput{
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("eius"),
                                        ID: sdk.String("8f88ece7-bf90-44e0-9105-d38908162c6b"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("harum"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("nisi"),
                                        ID: sdk.String("8a0f657b-7d03-4a14-80f8-de30f069d810"),
                                        Type: shared.SourceTypeEnumProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("architecto"),
                            },
                            shared.SkillInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("atque"),
                                        ID: sdk.String("d97e1522-9751-40da-8031-2292cc61c2a7"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("odit"),
                            },
                        },
                        Urls: []shared.URLInput{
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("soluta"),
                                        ID: sdk.String("97ee102d-a2de-435f-8e01-bf33eaab4540"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("dolorum"),
                                Value: sdk.String("quod"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sunt"),
                                        ID: sdk.String("704bf1cc-9fc6-41aa-a5eb-5f0c492b5744"),
                                        Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("doloremque"),
                                Value: sdk.String("rem"),
                            },
                            shared.URLInput{
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("dolorum"),
                                        ID: sdk.String("2267aaee-79e3-4c71-ad31-becb83d2378a"),
                                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Type: sdk.String("neque"),
                                Value: sdk.String("facilis"),
                            },
                        },
                        UserDefined: []shared.UserDefinedInput{
                            shared.UserDefinedInput{
                                Key: sdk.String("maxime"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("sed"),
                                        ID: sdk.String("3d9450a9-86a4-495b-ac70-7f06b28ecc86"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("unde"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("sunt"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("amet"),
                                        ID: sdk.String("86f62c96-9c4c-4c6b-b889-0a3fd3c81da1"),
                                        Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("asperiores"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("deleniti"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("optio"),
                                        ID: sdk.String("23df931d-a3ed-4b51-bad9-4acc94351377"),
                                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("ea"),
                            },
                            shared.UserDefinedInput{
                                Key: sdk.String("quibusdam"),
                                Metadata: &shared.FieldMetadataInput{
                                    Source: &shared.SourceInput{
                                        Etag: sdk.String("veritatis"),
                                        ID: sdk.String("5321b832-a56d-4691-80ff-60eb9a6658e6"),
                                        Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                    },
                                    SourcePrimary: sdk.Bool(false),
                                },
                                Value: sdk.String("fuga"),
                            },
                        },
                    },
                },
            },
            ReadMask: sdk.String("non"),
            Sources: []shared.BatchCreateContactsRequestSourcesEnum{
                shared.BatchCreateContactsRequestSourcesEnumReadSourceTypeContact,
                shared.BatchCreateContactsRequestSourcesEnumReadSourceTypeProfile,
                shared.BatchCreateContactsRequestSourcesEnumReadSourceTypeUnspecified,
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("totam"),
        Fields: sdk.String("explicabo"),
        Key: sdk.String("quibusdam"),
        OauthToken: sdk.String("harum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        UploadType: sdk.String("porro"),
        UploadProtocol: sdk.String("ducimus"),
    }, operations.PeoplePeopleBatchCreateContactsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchCreateContactsResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleBatchDeleteContacts

Delete a batch of contacts. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleBatchDeleteContacts(ctx, operations.PeoplePeopleBatchDeleteContactsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchDeleteContactsRequest: &shared.BatchDeleteContactsRequest{
            ResourceNames: []string{
                "ea",
                "corrupti",
                "minus",
                "autem",
            },
        },
        AccessToken: sdk.String("aut"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("veniam"),
        Fields: sdk.String("cupiditate"),
        Key: sdk.String("aliquam"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("atque"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("debitis"),
    }, operations.PeoplePeopleBatchDeleteContactsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PeoplePeopleBatchUpdateContacts

Update a batch of contacts and return a map of resource names to PersonResponses for the updated contacts. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleBatchUpdateContacts(ctx, operations.PeoplePeopleBatchUpdateContactsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        BatchUpdateContactsRequestInput: &shared.BatchUpdateContactsRequestInput{
            Contacts: map[string]shared.PersonInput{
                "tempora": shared.PersonInput{
                    Addresses: []shared.AddressInput{
                        shared.AddressInput{
                            City: sdk.String("Keaganboro"),
                            Country: sdk.String("Mongolia"),
                            CountryCode: sdk.String("PH"),
                            ExtendedAddress: sdk.String("sapiente"),
                            FormattedValue: sdk.String("deleniti"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("explicabo"),
                                    ID: sdk.String("14c337f9-6bb0-4c69-a372-db1344ba9f78"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            PoBox: sdk.String("quis"),
                            PostalCode: sdk.String("08846-6731"),
                            Region: sdk.String("recusandae"),
                            StreetAddress: sdk.String("unde"),
                            Type: sdk.String("iusto"),
                        },
                        shared.AddressInput{
                            City: sdk.String("South Bartonshire"),
                            Country: sdk.String("Rwanda"),
                            CountryCode: sdk.String("AD"),
                            ExtendedAddress: sdk.String("quod"),
                            FormattedValue: sdk.String("veniam"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("corrupti"),
                                    ID: sdk.String("d27b5199-6b5b-44b5-8eef-712b7a7ab034"),
                                    Type: shared.SourceTypeEnumAccount.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            PoBox: sdk.String("soluta"),
                            PostalCode: sdk.String("41045"),
                            Region: sdk.String("deleniti"),
                            StreetAddress: sdk.String("illum"),
                            Type: sdk.String("necessitatibus"),
                        },
                        shared.AddressInput{
                            City: sdk.String("Pompano Beach"),
                            Country: sdk.String("Tonga"),
                            CountryCode: sdk.String("ZA"),
                            ExtendedAddress: sdk.String("rem"),
                            FormattedValue: sdk.String("perspiciatis"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("quam"),
                                    ID: sdk.String("f3dd0ccd-33f1-41b3-a4e0-80aa104186ec"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            PoBox: sdk.String("ullam"),
                            PostalCode: sdk.String("80192-4018"),
                            Region: sdk.String("quis"),
                            StreetAddress: sdk.String("cumque"),
                            Type: sdk.String("laudantium"),
                        },
                        shared.AddressInput{
                            City: sdk.String("Carmel"),
                            Country: sdk.String("Sweden"),
                            CountryCode: sdk.String("CO"),
                            ExtendedAddress: sdk.String("consequatur"),
                            FormattedValue: sdk.String("voluptates"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("culpa"),
                                    ID: sdk.String("d3104fa4-4707-4bf3-b5b4-4282821fdb2f"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            PoBox: sdk.String("sint"),
                            PostalCode: sdk.String("36134-7407"),
                            Region: sdk.String("optio"),
                            StreetAddress: sdk.String("voluptatum"),
                            Type: sdk.String("pariatur"),
                        },
                    },
                    Biographies: []shared.BiographyInput{
                        shared.BiographyInput{
                            ContentType: shared.BiographyContentTypeEnumTextHTML.ToPointer(),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("facere"),
                                    ID: sdk.String("4258d035-8a82-4c80-8fe2-751a2047c044"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("repudiandae"),
                        },
                    },
                    Birthdays: []shared.BirthdayInput{
                        shared.BirthdayInput{
                            Date: &shared.Date{
                                Day: sdk.Int(308595),
                                Month: sdk.Int(202145),
                                Year: sdk.Int(942501),
                            },
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("natus"),
                                    ID: sdk.String("619bb7d4-0d5a-411f-a436-e6259233f95c"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Text: sdk.String("quibusdam"),
                        },
                    },
                    BraggingRights: []shared.BraggingRightsInput{
                        shared.BraggingRightsInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("adipisci"),
                                    ID: sdk.String("7397c785-b5db-44f5-8018-3febdf676b72"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("autem"),
                        },
                    },
                    CalendarUrls: []shared.CalendarURLInput{
                        shared.CalendarURLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("deserunt"),
                                    ID: sdk.String("b750052a-5647-4edc-839e-d8c4320f4124"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("temporibus"),
                            URL: sdk.String("aliquam"),
                        },
                        shared.CalendarURLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("incidunt"),
                                    ID: sdk.String("87ac693b-94c3-4b9d-a488-d795aa42fc40"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("laboriosam"),
                            URL: sdk.String("laboriosam"),
                        },
                        shared.CalendarURLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("omnis"),
                                    ID: sdk.String("f69a006d-2124-4945-8819-d7c3b1b41844"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("nisi"),
                            URL: sdk.String("quae"),
                        },
                        shared.CalendarURLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("saepe"),
                                    ID: sdk.String("00310d02-3dc9-401f-9afd-2a6c44846ae9"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("praesentium"),
                            URL: sdk.String("occaecati"),
                        },
                    },
                    ClientData: []shared.ClientDataInput{
                        shared.ClientDataInput{
                            Key: sdk.String("veniam"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("amet"),
                                    ID: sdk.String("c8962f48-96bf-451e-8652-d3c343d61778"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("earum"),
                        },
                    },
                    EmailAddresses: []shared.EmailAddressInput{
                        shared.EmailAddressInput{
                            DisplayName: sdk.String("excepturi"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("ab"),
                                    ID: sdk.String("247725e6-2190-49e9-9044-a5de59ac7706"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("odio"),
                            Value: sdk.String("voluptatem"),
                        },
                        shared.EmailAddressInput{
                            DisplayName: sdk.String("quisquam"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("delectus"),
                                    ID: sdk.String("1cf59326-0525-41e6-abb4-26897d99a2d3"),
                                    Type: shared.SourceTypeEnumAccount.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("ipsam"),
                            Value: sdk.String("suscipit"),
                        },
                    },
                    Etag: sdk.String("odio"),
                    Events: []shared.EventInput{
                        shared.EventInput{
                            Date: &shared.Date{
                                Day: sdk.Int(884206),
                                Month: sdk.Int(624181),
                                Year: sdk.Int(246664),
                            },
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("earum"),
                                    ID: sdk.String("e6cf59f3-58aa-4eac-ae32-3a31bf7ba1cc"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("quam"),
                        },
                    },
                    ExternalIds: []shared.ExternalIDInput{
                        shared.ExternalIDInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("inventore"),
                                    ID: sdk.String("6c802cc9-e0c7-4d9d-b23f-1aa63ed9cf1c"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("nemo"),
                            Value: sdk.String("commodi"),
                        },
                        shared.ExternalIDInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("soluta"),
                                    ID: sdk.String("cba51ef2-454a-447f-acf1-16cdd5444a75"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("consequuntur"),
                            Value: sdk.String("praesentium"),
                        },
                    },
                    FileAses: []shared.FileAsInput{
                        shared.FileAsInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("dolorem"),
                                    ID: sdk.String("c7dd9efa-f43d-4c62-b620-f3138f30df3d"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("sit"),
                        },
                        shared.FileAsInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("magni"),
                                    ID: sdk.String("2faa565f-b8f6-452e-bb9d-383838790243"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("sed"),
                        },
                    },
                    Genders: []shared.GenderInput{
                        shared.GenderInput{
                            AddressMeAs: sdk.String("ratione"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("facere"),
                                    ID: sdk.String("ab30e917-f50f-4da0-8c8b-1bb55a292b0b"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("non"),
                        },
                        shared.GenderInput{
                            AddressMeAs: sdk.String("libero"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("expedita"),
                                    ID: sdk.String("744664eb-1d03-4388-b0d1-bb17afee74b6"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("repudiandae"),
                        },
                        shared.GenderInput{
                            AddressMeAs: sdk.String("quidem"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("occaecati"),
                                    ID: sdk.String("457c7eda-f39d-416f-bf76-fd162b303e30"),
                                    Type: shared.SourceTypeEnumAccount.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("dolor"),
                        },
                    },
                    ImClients: []shared.ImClientInput{
                        shared.ImClientInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("excepturi"),
                                    ID: sdk.String("3e34316c-f55b-4431-b553-ccf1c204c4ad"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Protocol: sdk.String("minus"),
                            Type: sdk.String("sint"),
                            Username: sdk.String("Kolby80"),
                        },
                        shared.ImClientInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("ad"),
                                    ID: sdk.String("195b8648-cefa-478f-9e2d-3b901e0952bb"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Protocol: sdk.String("tempora"),
                            Type: sdk.String("minus"),
                            Username: sdk.String("Mathew61"),
                        },
                        shared.ImClientInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("voluptatibus"),
                                    ID: sdk.String("713d95a4-169c-4138-b271-e18ea9e45118"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Protocol: sdk.String("fugit"),
                            Type: sdk.String("optio"),
                            Username: sdk.String("Orlo_Hane"),
                        },
                    },
                    Interests: []shared.InterestInput{
                        shared.InterestInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("repellendus"),
                                    ID: sdk.String("60b1a78e-d29a-49d4-aea8-5658c2d4f4c8"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("quidem"),
                        },
                        shared.InterestInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("voluptates"),
                                    ID: sdk.String("4f278fd9-667e-446c-91d2-ffaa58dcef23"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("minus"),
                        },
                        shared.InterestInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("natus"),
                                    ID: sdk.String("55b9bdf2-190a-4bd9-bbcc-2725ec2659ce"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("quia"),
                        },
                    },
                    Locales: []shared.LocaleInput{
                        shared.LocaleInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("consequatur"),
                                    ID: sdk.String("840c69ef-68e4-45c8-addf-ac754500430c"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("commodi"),
                        },
                        shared.LocaleInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("amet"),
                                    ID: sdk.String("2b4391fd-f01c-43e9-9e8f-7bc69d460a77"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("quo"),
                        },
                        shared.LocaleInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("saepe"),
                                    ID: sdk.String("b26d10f1-ef26-431c-bc0f-0f873f9d5c25"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("illum"),
                        },
                    },
                    Locations: []shared.LocationInput{
                        shared.LocationInput{
                            BuildingID: sdk.String("repudiandae"),
                            Current: sdk.Bool(false),
                            DeskCode: sdk.String("quae"),
                            Floor: sdk.String("tempore"),
                            FloorSection: sdk.String("incidunt"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("deserunt"),
                                    ID: sdk.String("4a4253c3-0257-411f-82c7-e7dc548be09e"),
                                    Type: shared.SourceTypeEnumAccount.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("architecto"),
                            Value: sdk.String("fuga"),
                        },
                    },
                    Memberships: []shared.MembershipInput{
                        shared.MembershipInput{
                            ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                ContactGroupResourceName: sdk.String("culpa"),
                            },
                            DomainMembership: &shared.DomainMembership{
                                InViewerDomain: sdk.Bool(false),
                            },
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("dolores"),
                                    ID: sdk.String("15ca12a4-ba9d-4599-8819-2cfd0c77c53e"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                        },
                        shared.MembershipInput{
                            ContactGroupMembership: &shared.ContactGroupMembershipInput{
                                ContactGroupResourceName: sdk.String("vero"),
                            },
                            DomainMembership: &shared.DomainMembership{
                                InViewerDomain: sdk.Bool(false),
                            },
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("dignissimos"),
                                    ID: sdk.String("d4ee6e8b-90ba-4c38-8e23-96703fec31c5"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                        },
                    },
                    Metadata: &shared.PersonMetadataInput{
                        Sources: []shared.SourceInput{
                            shared.SourceInput{
                                Etag: sdk.String("qui"),
                                ID: sdk.String("4d189a36-a6b2-4d27-ab70-7aa60c8fe46e"),
                                Type: shared.SourceTypeEnumProfile.ToPointer(),
                            },
                            shared.SourceInput{
                                Etag: sdk.String("beatae"),
                                ID: sdk.String("77db9db3-b70f-4fbb-a970-ee770e36097e"),
                                Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                            },
                            shared.SourceInput{
                                Etag: sdk.String("esse"),
                                ID: sdk.String("c206e61b-0d30-4871-8c20-a3d98637ca85"),
                                Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                            },
                        },
                    },
                    MiscKeywords: []shared.MiscKeywordInput{
                        shared.MiscKeywordInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("delectus"),
                                    ID: sdk.String("e65574db-af94-4a7c-98f1-3af28db2cf2b"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: shared.MiscKeywordTypeEnumOutlookKeyword.ToPointer(),
                            Value: sdk.String("voluptatibus"),
                        },
                    },
                    Names: []shared.NameInput{
                        shared.NameInput{
                            FamilyName: sdk.String("pariatur"),
                            GivenName: sdk.String("vero"),
                            HonorificPrefix: sdk.String("quibusdam"),
                            HonorificSuffix: sdk.String("amet"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("minima"),
                                    ID: sdk.String("6d7e14b2-1cd9-4819-ad55-af69a1c4b79a"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            MiddleName: sdk.String("nesciunt"),
                            PhoneticFamilyName: sdk.String("non"),
                            PhoneticFullName: sdk.String("vel"),
                            PhoneticGivenName: sdk.String("praesentium"),
                            PhoneticHonorificPrefix: sdk.String("beatae"),
                            PhoneticHonorificSuffix: sdk.String("eligendi"),
                            PhoneticMiddleName: sdk.String("eos"),
                            UnstructuredName: sdk.String("dolor"),
                        },
                    },
                    Nicknames: []shared.NicknameInput{
                        shared.NicknameInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("dolorem"),
                                    ID: sdk.String("9a7c0e17-cb12-4c5b-a825-fe22cd5cba6f"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: shared.NicknameTypeEnumShortName.ToPointer(),
                            Value: sdk.String("necessitatibus"),
                        },
                        shared.NicknameInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("quisquam"),
                                    ID: sdk.String("932af681-3d65-4bfe-8ec2-dd6916f7fc7d"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: shared.NicknameTypeEnumOtherName.ToPointer(),
                            Value: sdk.String("molestiae"),
                        },
                        shared.NicknameInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("ipsa"),
                                    ID: sdk.String("ec60e607-5894-4d61-814c-d90227e37c0d"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: shared.NicknameTypeEnumGplus.ToPointer(),
                            Value: sdk.String("voluptate"),
                        },
                        shared.NicknameInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("reiciendis"),
                                    ID: sdk.String("1a5491ab-e975-41b1-86d2-3e03e69815aa"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: shared.NicknameTypeEnumOtherName.ToPointer(),
                            Value: sdk.String("cupiditate"),
                        },
                    },
                    Occupations: []shared.OccupationInput{
                        shared.OccupationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("nobis"),
                                    ID: sdk.String("de9e729c-9d4f-42d8-a446-40ca60db73a2"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("unde"),
                        },
                        shared.OccupationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("dolorem"),
                                    ID: sdk.String("f467dc0d-8da5-4612-a026-ab8f277485c1"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("in"),
                        },
                        shared.OccupationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("voluptas"),
                                    ID: sdk.String("af980da7-a089-4fc4-8db2-74530e5cc7c6"),
                                    Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("aut"),
                        },
                        shared.OccupationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("quod"),
                                    ID: sdk.String("bcfdcd33-4b6f-4623-bcec-ab50aee5e0da"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("cum"),
                        },
                    },
                    Organizations: []shared.OrganizationInput{
                        shared.OrganizationInput{
                            CostCenter: sdk.String("laborum"),
                            Current: sdk.Bool(false),
                            Department: sdk.String("sapiente"),
                            Domain: sdk.String("nisi"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(662335),
                                Month: sdk.Int(861166),
                                Year: sdk.Int(20223),
                            },
                            FullTimeEquivalentMillipercent: sdk.Int(356508),
                            JobDescription: sdk.String("incidunt"),
                            Location: sdk.String("deleniti"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("nisi"),
                                    ID: sdk.String("e7b413cb-e2d1-476d-81c4-3d40f61d1711"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Name: sdk.String("Jacquelyn Reynolds"),
                            PhoneticName: sdk.String("itaque"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(906531),
                                Month: sdk.Int(252407),
                                Year: sdk.Int(940797),
                            },
                            Symbol: sdk.String("esse"),
                            Title: sdk.String("Mr."),
                            Type: sdk.String("quasi"),
                        },
                        shared.OrganizationInput{
                            CostCenter: sdk.String("et"),
                            Current: sdk.Bool(false),
                            Department: sdk.String("quas"),
                            Domain: sdk.String("magnam"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(6540),
                                Month: sdk.Int(469043),
                                Year: sdk.Int(459634),
                            },
                            FullTimeEquivalentMillipercent: sdk.Int(157014),
                            JobDescription: sdk.String("maiores"),
                            Location: sdk.String("adipisci"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("odit"),
                                    ID: sdk.String("e3b49dbe-0f23-4b7b-ad99-48d6eded4776"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Name: sdk.String("Lela Schiller"),
                            PhoneticName: sdk.String("ab"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(439202),
                                Month: sdk.Int(643400),
                                Year: sdk.Int(504685),
                            },
                            Symbol: sdk.String("dolores"),
                            Title: sdk.String("Dr."),
                            Type: sdk.String("nemo"),
                        },
                        shared.OrganizationInput{
                            CostCenter: sdk.String("vero"),
                            Current: sdk.Bool(false),
                            Department: sdk.String("totam"),
                            Domain: sdk.String("eos"),
                            EndDate: &shared.Date{
                                Day: sdk.Int(962776),
                                Month: sdk.Int(849010),
                                Year: sdk.Int(159657),
                            },
                            FullTimeEquivalentMillipercent: sdk.Int(509739),
                            JobDescription: sdk.String("fugiat"),
                            Location: sdk.String("beatae"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("perferendis"),
                                    ID: sdk.String("40a7e913-92ab-444c-b183-5008f461ce53"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Name: sdk.String("Gregory Goldner"),
                            PhoneticName: sdk.String("rem"),
                            StartDate: &shared.Date{
                                Day: sdk.Int(654297),
                                Month: sdk.Int(612979),
                                Year: sdk.Int(725592),
                            },
                            Symbol: sdk.String("deserunt"),
                            Title: sdk.String("Mrs."),
                            Type: sdk.String("nisi"),
                        },
                    },
                    PhoneNumbers: []shared.PhoneNumberInput{
                        shared.PhoneNumberInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("similique"),
                                    ID: sdk.String("ddfde410-c37d-4aa9-982a-49d9625d3caf"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("minus"),
                            Value: sdk.String("inventore"),
                        },
                    },
                    Relations: []shared.RelationInput{
                        shared.RelationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("blanditiis"),
                                    ID: sdk.String("eea44527-92bc-4d44-8ea9-8becce0486de"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Person: sdk.String("repellendus"),
                            Type: sdk.String("ipsam"),
                        },
                        shared.RelationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("aliquid"),
                                    ID: sdk.String("d73b0055-03e8-4dc6-a6ff-77c65675f5b7"),
                                    Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Person: sdk.String("recusandae"),
                            Type: sdk.String("consectetur"),
                        },
                        shared.RelationInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("vero"),
                                    ID: sdk.String("4cfcc6a9-1ec5-4262-8d00-014ef45cea11"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Person: sdk.String("minus"),
                            Type: sdk.String("minima"),
                        },
                    },
                    Residences: []shared.ResidenceInput{
                        shared.ResidenceInput{
                            Current: sdk.Bool(false),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("debitis"),
                                    ID: sdk.String("bb6587f3-4041-44c5-b9ac-ee400ae9f92c"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("earum"),
                        },
                    },
                    ResourceName: sdk.String("architecto"),
                    SipAddresses: []shared.SipAddressInput{
                        shared.SipAddressInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("ipsa"),
                                    ID: sdk.String("25f1d147-18c6-4fa2-bad0-c06c5d95472c"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("nulla"),
                            Value: sdk.String("dicta"),
                        },
                        shared.SipAddressInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("incidunt"),
                                    ID: sdk.String("fc43b70b-ca88-4fa7-8c43-351c3dd1eb8f"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("tenetur"),
                            Value: sdk.String("quam"),
                        },
                        shared.SipAddressInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("nemo"),
                                    ID: sdk.String("f4f23f1c-0a58-46c3-ae7d-7b67feef5e14"),
                                    Type: shared.SourceTypeEnumAccount.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("pariatur"),
                            Value: sdk.String("perspiciatis"),
                        },
                    },
                    Skills: []shared.SkillInput{
                        shared.SkillInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("nam"),
                                    ID: sdk.String("1dbeceff-7c4b-4156-a927-8275eea76817"),
                                    Type: shared.SourceTypeEnumProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("laboriosam"),
                        },
                        shared.SkillInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("praesentium"),
                                    ID: sdk.String("063f799b-7956-4c0b-8fa0-bb20a40e7c4a"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("aliquid"),
                        },
                    },
                    Urls: []shared.URLInput{
                        shared.URLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("eaque"),
                                    ID: sdk.String("64272657-b01a-407c-88fd-3921c257930d"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("maiores"),
                            Value: sdk.String("sit"),
                        },
                        shared.URLInput{
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("natus"),
                                    ID: sdk.String("3a3efa46-d366-4dfa-9011-a091b3ec8b53"),
                                    Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Type: sdk.String("nisi"),
                            Value: sdk.String("dolores"),
                        },
                    },
                    UserDefined: []shared.UserDefinedInput{
                        shared.UserDefinedInput{
                            Key: sdk.String("necessitatibus"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("illo"),
                                    ID: sdk.String("a9d14fe7-2e52-41f9-8303-dfc338397fff"),
                                    Type: shared.SourceTypeEnumContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("ea"),
                        },
                        shared.UserDefinedInput{
                            Key: sdk.String("repellendus"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("vitae"),
                                    ID: sdk.String("d32090fc-157a-4c9f-a196-1ce9be41c869"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("facere"),
                        },
                        shared.UserDefinedInput{
                            Key: sdk.String("ducimus"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("quibusdam"),
                                    ID: sdk.String("9719d07b-200a-458f-bd29-67df8fd882a8"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("voluptas"),
                        },
                        shared.UserDefinedInput{
                            Key: sdk.String("eaque"),
                            Metadata: &shared.FieldMetadataInput{
                                Source: &shared.SourceInput{
                                    Etag: sdk.String("tempore"),
                                    ID: sdk.String("e620cd9c-5afd-4d04-8375-2512beae1d87"),
                                    Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                                },
                                SourcePrimary: sdk.Bool(false),
                            },
                            Value: sdk.String("quisquam"),
                        },
                    },
                },
            },
            ReadMask: sdk.String("minus"),
            Sources: []shared.BatchUpdateContactsRequestSourcesEnum{
                shared.BatchUpdateContactsRequestSourcesEnumReadSourceTypeDomainContact,
                shared.BatchUpdateContactsRequestSourcesEnumReadSourceTypeDomainContact,
            },
            UpdateMask: sdk.String("quod"),
        },
        AccessToken: sdk.String("saepe"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("deleniti"),
        Fields: sdk.String("eveniet"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("laborum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatum"),
        UploadType: sdk.String("blanditiis"),
        UploadProtocol: sdk.String("adipisci"),
    }, operations.PeoplePeopleBatchUpdateContactsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateContactsResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleConnectionsList

Provides a list of the authenticated user's contacts. Sync tokens expire 7 days after the full sync. A request with an expired sync token will get an error with an [google.rpc.ErrorInfo](https://cloud.google.com/apis/design/errors#error_info) with reason "EXPIRED_SYNC_TOKEN". In the case of such an error clients should make a full sync request without a `sync_token`. The first page of a full sync request has an additional quota. If the quota is exceeded, a 429 error will be returned. This quota is fixed and can not be increased. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the user's contacts that have changed](/people/v1/contacts#list_the_users_contacts_that_have_changed).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleConnectionsList(ctx, operations.PeoplePeopleConnectionsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("et"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("laboriosam"),
        Fields: sdk.String("ratione"),
        Key: sdk.String("porro"),
        OauthToken: sdk.String("at"),
        PageSize: sdk.Int64(681752),
        PageToken: sdk.String("vel"),
        PersonFields: sdk.String("quibusdam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        RequestMaskIncludeField: sdk.String("voluptate"),
        RequestSyncToken: sdk.Bool(false),
        ResourceName: "cumque",
        SortOrder: operations.PeoplePeopleConnectionsListSortOrderEnumLastModifiedAscending.ToPointer(),
        Sources: []PeoplePeopleConnectionsListSourcesEnum{
            operations.PeoplePeopleConnectionsListSourcesEnumReadSourceTypeContact,
            operations.PeoplePeopleConnectionsListSourcesEnumReadSourceTypeProfile,
            operations.PeoplePeopleConnectionsListSourcesEnumReadSourceTypeUnspecified,
            operations.PeoplePeopleConnectionsListSourcesEnumReadSourceTypeProfile,
        },
        SyncToken: sdk.String("eum"),
        UploadType: sdk.String("odit"),
        UploadProtocol: sdk.String("nesciunt"),
    }, operations.PeoplePeopleConnectionsListSecurity{
        Option1: &operations.PeoplePeopleConnectionsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectionsResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleCreateContact

Create a new contact and return the person resource for that contact. The request returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleCreateContact(ctx, operations.PeoplePeopleCreateContactRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PersonInput: &shared.PersonInput{
            Addresses: []shared.AddressInput{
                shared.AddressInput{
                    City: sdk.String("East Cassandre"),
                    Country: sdk.String("Kuwait"),
                    CountryCode: sdk.String("KZ"),
                    ExtendedAddress: sdk.String("laboriosam"),
                    FormattedValue: sdk.String("aliquid"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("b8a749e3-9845-411c-875e-4f0c004b5bb7"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("quos"),
                    PostalCode: sdk.String("75233-1900"),
                    Region: sdk.String("suscipit"),
                    StreetAddress: sdk.String("occaecati"),
                    Type: sdk.String("ea"),
                },
                shared.AddressInput{
                    City: sdk.String("Frankshire"),
                    Country: sdk.String("Sierra Leone"),
                    CountryCode: sdk.String("SN"),
                    ExtendedAddress: sdk.String("quasi"),
                    FormattedValue: sdk.String("est"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("vitae"),
                            ID: sdk.String("73d84bbe-24f2-4983-8afb-0735cb6285d4"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("odit"),
                    PostalCode: sdk.String("66608-0360"),
                    Region: sdk.String("nemo"),
                    StreetAddress: sdk.String("nisi"),
                    Type: sdk.String("repellat"),
                },
                shared.AddressInput{
                    City: sdk.String("Reginaldville"),
                    Country: sdk.String("Uganda"),
                    CountryCode: sdk.String("UA"),
                    ExtendedAddress: sdk.String("eos"),
                    FormattedValue: sdk.String("perferendis"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("error"),
                            ID: sdk.String("505bf03a-93e9-4448-8ca3-7fb10789032a"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("amet"),
                    PostalCode: sdk.String("10419"),
                    Region: sdk.String("odit"),
                    StreetAddress: sdk.String("assumenda"),
                    Type: sdk.String("quibusdam"),
                },
                shared.AddressInput{
                    City: sdk.String("Lambertshire"),
                    Country: sdk.String("Serbia"),
                    CountryCode: sdk.String("JM"),
                    ExtendedAddress: sdk.String("numquam"),
                    FormattedValue: sdk.String("distinctio"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("error"),
                            ID: sdk.String("7e88ddb3-6fd1-4ccc-b41c-86573474f0a7"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("eaque"),
                    PostalCode: sdk.String("72673-2072"),
                    Region: sdk.String("deserunt"),
                    StreetAddress: sdk.String("doloremque"),
                    Type: sdk.String("sint"),
                },
            },
            Biographies: []shared.BiographyInput{
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("commodi"),
                            ID: sdk.String("3995d808-bbe7-4944-95eb-c550a1c426b5"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("maxime"),
                },
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("66fdcc13-5582-4c1b-855e-889d9ef932e9"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("perferendis"),
                },
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumContentTypeUnspecified.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("culpa"),
                            ID: sdk.String("13ad8124-208e-4fd2-b411-898e73879efb"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("voluptatum"),
                },
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumTextHTML.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("officia"),
                            ID: sdk.String("ebabb794-536e-4903-91bb-97631720b77a"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("mollitia"),
                },
            },
            Birthdays: []shared.BirthdayInput{
                shared.BirthdayInput{
                    Date: &shared.Date{
                        Day: sdk.Int(211009),
                        Month: sdk.Int(428686),
                        Year: sdk.Int(370166),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("fuga"),
                            ID: sdk.String("79f15271-f01c-40d3-a1fe-d8dc5effb453"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Text: sdk.String("perspiciatis"),
                },
                shared.BirthdayInput{
                    Date: &shared.Date{
                        Day: sdk.Int(4112),
                        Month: sdk.Int(558174),
                        Year: sdk.Int(571591),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("necessitatibus"),
                            ID: sdk.String("871fdb4d-697b-4dd9-8985-e43734a5d72d"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Text: sdk.String("itaque"),
                },
            },
            BraggingRights: []shared.BraggingRightsInput{
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("repellendus"),
                            ID: sdk.String("785be5e7-afe5-4529-bba6-281f44e3a233"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("eius"),
                },
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("id"),
                            ID: sdk.String("68cc80d3-0ff7-4216-8d0a-91fe9d96553b"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("excepturi"),
                },
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("necessitatibus"),
                            ID: sdk.String("0009c669-2de7-4b35-a220-1a6aab4ae7b1"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ipsam"),
                },
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("harum"),
                            ID: sdk.String("908d4e30-491a-4a35-94a8-39f03bab77b9"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("blanditiis"),
                },
            },
            CalendarUrls: []shared.CalendarURLInput{
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("aut"),
                            ID: sdk.String("31398450-7e0e-439c-be23-ecb0604652e2"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("similique"),
                    URL: sdk.String("dolor"),
                },
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("nulla"),
                            ID: sdk.String("6c657e9d-e8f7-4f00-ad19-86aa99d3a1d3"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("amet"),
                    URL: sdk.String("dolores"),
                },
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("provident"),
                            ID: sdk.String("e45837e8-f2ad-46bb-90e2-55fdc480d6e3"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("ipsa"),
                    URL: sdk.String("totam"),
                },
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("aliquid"),
                            ID: sdk.String("75cbf186-856a-47e8-acdf-9d0fc282c666"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("sapiente"),
                    URL: sdk.String("nesciunt"),
                },
            },
            ClientData: []shared.ClientDataInput{
                shared.ClientDataInput{
                    Key: sdk.String("ratione"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("a"),
                            ID: sdk.String("5589bea5-d264-4e41-a2ca-84822e513f6d"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("at"),
                },
                shared.ClientDataInput{
                    Key: sdk.String("magni"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("similique"),
                            ID: sdk.String("d37c3099-077c-410b-a879-2163e67d4886"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quis"),
                },
                shared.ClientDataInput{
                    Key: sdk.String("dolore"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("consectetur"),
                            ID: sdk.String("c0a3049c-3cf6-4c02-b6e7-b21bad90d274"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("doloribus"),
                },
                shared.ClientDataInput{
                    Key: sdk.String("nulla"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ex"),
                            ID: sdk.String("c2a10e6c-2978-4ec2-96a5-b09227fcc479"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("nisi"),
                },
            },
            EmailAddresses: []shared.EmailAddressInput{
                shared.EmailAddressInput{
                    DisplayName: sdk.String("sint"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("esse"),
                            ID: sdk.String("7bbc57f3-8928-4a86-80c5-8d67d63e4aa5"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("quos"),
                    Value: sdk.String("aliquam"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("vel"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("numquam"),
                            ID: sdk.String("579cfc6c-0e50-43f5-a831-f1d8ed87b28e"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("deserunt"),
                    Value: sdk.String("a"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("culpa"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("cum"),
                            ID: sdk.String("c986e241-e43b-4234-a417-d13e3f62aa9a"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("labore"),
                    Value: sdk.String("fuga"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("necessitatibus"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("molestias"),
                            ID: sdk.String("ab4a9c49-2c5e-48ba-9d4a-a4a508bd380c"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("excepturi"),
                    Value: sdk.String("animi"),
                },
            },
            Etag: sdk.String("deserunt"),
            Events: []shared.EventInput{
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(856364),
                        Month: sdk.Int(846938),
                        Year: sdk.Int(439014),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("beatae"),
                            ID: sdk.String("bddaa30b-7b91-4449-ae69-c088d418bb71"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("accusantium"),
                },
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(284045),
                        Month: sdk.Int(996522),
                        Year: sdk.Int(269063),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolores"),
                            ID: sdk.String("3d543935-f377-4ac5-89b7-e93b6a3c5231"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("quis"),
                },
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(928386),
                        Month: sdk.Int(481828),
                        Year: sdk.Int(773755),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("4cab0ecb-812a-4661-8894-4a8e9085075b"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("qui"),
                },
            },
            ExternalIds: []shared.ExternalIDInput{
                shared.ExternalIDInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolorem"),
                            ID: sdk.String("8253343f-b0a4-4e66-aa47-578d171e2941"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("ab"),
                    Value: sdk.String("deleniti"),
                },
                shared.ExternalIDInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("maiores"),
                            ID: sdk.String("c679b6b2-f253-459b-855d-015b62c8b83a"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("molestias"),
                    Value: sdk.String("similique"),
                },
            },
            FileAses: []shared.FileAsInput{
                shared.FileAsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("mollitia"),
                            ID: sdk.String("88c14420-0c2c-4aeb-9ae1-ecf8c34946bb"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ducimus"),
                },
                shared.FileAsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("id"),
                            ID: sdk.String("05a8b4a9-ec5b-4368-8cca-363272760e96"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("earum"),
                },
                shared.FileAsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sint"),
                            ID: sdk.String("7e054103-347d-478f-b249-1145fab9e59a"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("fuga"),
                },
            },
            Genders: []shared.GenderInput{
                shared.GenderInput{
                    AddressMeAs: sdk.String("ipsum"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("amet"),
                            ID: sdk.String("6664eaa6-bf2f-4f14-a8c1-b352accedacc"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("consequuntur"),
                },
                shared.GenderInput{
                    AddressMeAs: sdk.String("qui"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("reprehenderit"),
                            ID: sdk.String("814eca01-6bc4-41ea-9342-d4104a25ef71"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("debitis"),
                },
                shared.GenderInput{
                    AddressMeAs: sdk.String("minima"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ducimus"),
                            ID: sdk.String("a11d614a-4317-4692-aa48-673d522b828a"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("doloremque"),
                },
                shared.GenderInput{
                    AddressMeAs: sdk.String("amet"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("accusantium"),
                            ID: sdk.String("660f024c-79b4-4cc6-8c2b-3a32c488ade6"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("reiciendis"),
                },
            },
            ImClients: []shared.ImClientInput{
                shared.ImClientInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("est"),
                            ID: sdk.String("a558a65e-2083-4016-8a34-bb87d4f62127"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Protocol: sdk.String("ea"),
                    Type: sdk.String("accusantium"),
                    Username: sdk.String("Jairo37"),
                },
                shared.ImClientInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("voluptatem"),
                            ID: sdk.String("6294514c-3db9-4ca9-b38b-d2be87870349"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Protocol: sdk.String("doloribus"),
                    Type: sdk.String("dolore"),
                    Username: sdk.String("Laisha_Orn"),
                },
            },
            Interests: []shared.InterestInput{
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ex"),
                            ID: sdk.String("5a328327-9b71-49d1-8ea6-73d86e3b35e4"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("id"),
                },
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("adipisci"),
                            ID: sdk.String("135778ce-54ca-4cb0-a3ea-975045bacf63"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("sed"),
                },
            },
            Locales: []shared.LocaleInput{
                shared.LocaleInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("nemo"),
                            ID: sdk.String("186ab5e3-a022-4614-b15d-1568299e61af"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("in"),
                },
            },
            Locations: []shared.LocationInput{
                shared.LocationInput{
                    BuildingID: sdk.String("totam"),
                    Current: sdk.Bool(false),
                    DeskCode: sdk.String("suscipit"),
                    Floor: sdk.String("asperiores"),
                    FloorSection: sdk.String("voluptatibus"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolores"),
                            ID: sdk.String("0b7a73df-40ca-40d7-a57c-1641bbf05527"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("cum"),
                    Value: sdk.String("eos"),
                },
            },
            Memberships: []shared.MembershipInput{
                shared.MembershipInput{
                    ContactGroupMembership: &shared.ContactGroupMembershipInput{
                        ContactGroupResourceName: sdk.String("vitae"),
                    },
                    DomainMembership: &shared.DomainMembership{
                        InViewerDomain: sdk.Bool(false),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("architecto"),
                            ID: sdk.String("dd606dd1-b282-472b-89c3-221697b1880f"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                },
                shared.MembershipInput{
                    ContactGroupMembership: &shared.ContactGroupMembershipInput{
                        ContactGroupResourceName: sdk.String("rerum"),
                    },
                    DomainMembership: &shared.DomainMembership{
                        InViewerDomain: sdk.Bool(false),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("expedita"),
                            ID: sdk.String("2b93c15f-670b-4d17-8483-1653eeb3b6e2"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                },
            },
            Metadata: &shared.PersonMetadataInput{
                Sources: []shared.SourceInput{
                    shared.SourceInput{
                        Etag: sdk.String("quisquam"),
                        ID: sdk.String("31099836-63c6-46dc-bb7d-f6cb09c8b408"),
                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                    },
                },
            },
            MiscKeywords: []shared.MiscKeywordInput{
                shared.MiscKeywordInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("nihil"),
                            ID: sdk.String("13774de4-fee1-401d-9780-a10c47b95040"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: shared.MiscKeywordTypeEnumOutlookPriority.ToPointer(),
                    Value: sdk.String("minus"),
                },
            },
            Names: []shared.NameInput{
                shared.NameInput{
                    FamilyName: sdk.String("soluta"),
                    GivenName: sdk.String("quia"),
                    HonorificPrefix: sdk.String("similique"),
                    HonorificSuffix: sdk.String("ipsam"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("a"),
                            ID: sdk.String("002207e4-048f-4900-89ed-290278eb4ae9"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("suscipit"),
                    PhoneticFamilyName: sdk.String("ut"),
                    PhoneticFullName: sdk.String("sunt"),
                    PhoneticGivenName: sdk.String("iure"),
                    PhoneticHonorificPrefix: sdk.String("ab"),
                    PhoneticHonorificSuffix: sdk.String("recusandae"),
                    PhoneticMiddleName: sdk.String("iste"),
                    UnstructuredName: sdk.String("sunt"),
                },
                shared.NameInput{
                    FamilyName: sdk.String("corporis"),
                    GivenName: sdk.String("quae"),
                    HonorificPrefix: sdk.String("alias"),
                    HonorificSuffix: sdk.String("ratione"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sed"),
                            ID: sdk.String("3b2c09b9-2477-41f5-a69e-5b7ec7626649"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("atque"),
                    PhoneticFamilyName: sdk.String("aliquam"),
                    PhoneticFullName: sdk.String("necessitatibus"),
                    PhoneticGivenName: sdk.String("tempore"),
                    PhoneticHonorificPrefix: sdk.String("provident"),
                    PhoneticHonorificSuffix: sdk.String("recusandae"),
                    PhoneticMiddleName: sdk.String("numquam"),
                    UnstructuredName: sdk.String("cumque"),
                },
                shared.NameInput{
                    FamilyName: sdk.String("a"),
                    GivenName: sdk.String("at"),
                    HonorificPrefix: sdk.String("dolores"),
                    HonorificSuffix: sdk.String("odit"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("molestiae"),
                            ID: sdk.String("6e0b88fb-87d6-4fa5-b6e8-dbf812f83b1c"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("autem"),
                    PhoneticFamilyName: sdk.String("laborum"),
                    PhoneticFullName: sdk.String("omnis"),
                    PhoneticGivenName: sdk.String("voluptatibus"),
                    PhoneticHonorificPrefix: sdk.String("asperiores"),
                    PhoneticHonorificSuffix: sdk.String("impedit"),
                    PhoneticMiddleName: sdk.String("quis"),
                    UnstructuredName: sdk.String("nisi"),
                },
            },
            Nicknames: []shared.NicknameInput{
                shared.NicknameInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("unde"),
                            ID: sdk.String("29cca956-0a13-4959-98da-1d48e78e3cf8"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: shared.NicknameTypeEnumDefault.ToPointer(),
                    Value: sdk.String("ab"),
                },
            },
            Occupations: []shared.OccupationInput{
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("amet"),
                            ID: sdk.String("da9308b2-7a08-4af2-a184-439b3de8756c"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("optio"),
                },
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("eveniet"),
                            ID: sdk.String("470cd214-7b6e-4615-acf0-1d0d8c3a4b9a"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quidem"),
                },
            },
            Organizations: []shared.OrganizationInput{
                shared.OrganizationInput{
                    CostCenter: sdk.String("molestias"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("amet"),
                    Domain: sdk.String("veniam"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(865276),
                        Month: sdk.Int(974294),
                        Year: sdk.Int(875223),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(588995),
                    JobDescription: sdk.String("iure"),
                    Location: sdk.String("incidunt"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("repellat"),
                            ID: sdk.String("a4b1e9c0-97ed-4a62-b442-e1a9237e9984"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Michael Quigley"),
                    PhoneticName: sdk.String("sint"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(905154),
                        Month: sdk.Int(538900),
                        Year: sdk.Int(570783),
                    },
                    Symbol: sdk.String("architecto"),
                    Title: sdk.String("Ms."),
                    Type: sdk.String("dolores"),
                },
                shared.OrganizationInput{
                    CostCenter: sdk.String("dolorem"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("eligendi"),
                    Domain: sdk.String("veritatis"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(534786),
                        Month: sdk.Int(767112),
                        Year: sdk.Int(639968),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(526314),
                    JobDescription: sdk.String("facere"),
                    Location: sdk.String("vel"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("cupiditate"),
                            ID: sdk.String("c5689214-fa20-4207-a4fa-e038cd7f1bc2"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Alton Parisian"),
                    PhoneticName: sdk.String("asperiores"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(763215),
                        Month: sdk.Int(179420),
                        Year: sdk.Int(773338),
                    },
                    Symbol: sdk.String("minus"),
                    Title: sdk.String("Miss"),
                    Type: sdk.String("id"),
                },
                shared.OrganizationInput{
                    CostCenter: sdk.String("numquam"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("libero"),
                    Domain: sdk.String("recusandae"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(990901),
                        Month: sdk.Int(46114),
                        Year: sdk.Int(836620),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(971036),
                    JobDescription: sdk.String("nisi"),
                    Location: sdk.String("voluptatum"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("earum"),
                            ID: sdk.String("aedb2ee7-0be0-469f-b36a-dd704080e0a3"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Arnold Ernser"),
                    PhoneticName: sdk.String("similique"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(46574),
                        Month: sdk.Int(239123),
                        Year: sdk.Int(306163),
                    },
                    Symbol: sdk.String("soluta"),
                    Title: sdk.String("Mr."),
                    Type: sdk.String("ab"),
                },
                shared.OrganizationInput{
                    CostCenter: sdk.String("ut"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("sint"),
                    Domain: sdk.String("sint"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(178015),
                        Month: sdk.Int(262777),
                        Year: sdk.Int(188343),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(625392),
                    JobDescription: sdk.String("maiores"),
                    Location: sdk.String("mollitia"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("suscipit"),
                            ID: sdk.String("987a472b-709a-4153-a223-01068539ce09"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Miss Kari Brown"),
                    PhoneticName: sdk.String("possimus"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(111765),
                        Month: sdk.Int(322138),
                        Year: sdk.Int(842759),
                    },
                    Symbol: sdk.String("praesentium"),
                    Title: sdk.String("Miss"),
                    Type: sdk.String("quisquam"),
                },
            },
            PhoneNumbers: []shared.PhoneNumberInput{
                shared.PhoneNumberInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("perferendis"),
                            ID: sdk.String("6b786b3d-37bd-4204-a1f3-40bb36f677a4"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("corporis"),
                    Value: sdk.String("inventore"),
                },
            },
            Relations: []shared.RelationInput{
                shared.RelationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quod"),
                            ID: sdk.String("33749028-4882-46bb-83c7-fd225e47871a"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Person: sdk.String("atque"),
                    Type: sdk.String("necessitatibus"),
                },
                shared.RelationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("possimus"),
                            ID: sdk.String("72a2d4af-4158-4ac2-90f0-f58c3b87b470"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Person: sdk.String("aut"),
                    Type: sdk.String("possimus"),
                },
                shared.RelationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("aut"),
                            ID: sdk.String("d98e9d82-c5e3-406f-9576-f5cdeb0286d0"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Person: sdk.String("maxime"),
                    Type: sdk.String("aliquam"),
                },
            },
            Residences: []shared.ResidenceInput{
                shared.ResidenceInput{
                    Current: sdk.Bool(false),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("harum"),
                            ID: sdk.String("18ab378f-2fcf-4f81-9df7-e088f74ef54c"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("aspernatur"),
                },
            },
            ResourceName: sdk.String("ab"),
            SipAddresses: []shared.SipAddressInput{
                shared.SipAddressInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("vero"),
                            ID: sdk.String("8926313b-b6fc-42c8-9270-1096b66ad6e3"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("quasi"),
                    Value: sdk.String("pariatur"),
                },
                shared.SipAddressInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("excepturi"),
                            ID: sdk.String("d3b66033-4a11-4aa1-95d2-247de9b3d461"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("eaque"),
                    Value: sdk.String("debitis"),
                },
            },
            Skills: []shared.SkillInput{
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("eum"),
                            ID: sdk.String("8a96bb39-8788-4398-aba1-bbf7143356f6"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ut"),
                },
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("molestias"),
                            ID: sdk.String("a164249b-211c-4e46-b951-652b158ca914"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("reiciendis"),
                },
            },
            Urls: []shared.URLInput{
                shared.URLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("veniam"),
                            ID: sdk.String("2632b31c-ad69-42ff-8874-5005e9d3d934"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("aperiam"),
                    Value: sdk.String("non"),
                },
            },
            UserDefined: []shared.UserDefinedInput{
                shared.UserDefinedInput{
                    Key: sdk.String("sapiente"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ullam"),
                            ID: sdk.String("c388664f-6985-4530-a2e2-aed6aaf863c2"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("illum"),
                },
                shared.UserDefinedInput{
                    Key: sdk.String("eaque"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("incidunt"),
                            ID: sdk.String("0c69a3d9-06f6-4ebd-9ad7-ec7394f25f63"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("rerum"),
                },
            },
        },
        AccessToken: sdk.String("ratione"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("dolorem"),
        Fields: sdk.String("accusantium"),
        Key: sdk.String("ducimus"),
        OauthToken: sdk.String("inventore"),
        PersonFields: sdk.String("numquam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("itaque"),
        Sources: []PeoplePeopleCreateContactSourcesEnum{
            operations.PeoplePeopleCreateContactSourcesEnumReadSourceTypeContact,
            operations.PeoplePeopleCreateContactSourcesEnumReadSourceTypeDomainContact,
        },
        UploadType: sdk.String("corrupti"),
        UploadProtocol: sdk.String("minus"),
    }, operations.PeoplePeopleCreateContactSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Person != nil {
        // handle response
    }
}
```

## PeoplePeopleDeleteContact

Delete a contact person. Any non-contact data will not be deleted. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleDeleteContact(ctx, operations.PeoplePeopleDeleteContactRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("debitis"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("perspiciatis"),
        Fields: sdk.String("impedit"),
        Key: sdk.String("vel"),
        OauthToken: sdk.String("quaerat"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quibusdam"),
        ResourceName: "dolorem",
        UploadType: sdk.String("aliquam"),
        UploadProtocol: sdk.String("dolores"),
    }, operations.PeoplePeopleDeleteContactSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PeoplePeopleDeleteContactPhoto

Delete a contact's photo. Mutate requests for the same user should be done sequentially to avoid // lock contention.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleDeleteContactPhoto(ctx, operations.PeoplePeopleDeleteContactPhotoRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("placeat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("natus"),
        Fields: sdk.String("provident"),
        Key: sdk.String("officia"),
        OauthToken: sdk.String("aliquid"),
        PersonFields: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptas"),
        ResourceName: "debitis",
        Sources: []PeoplePeopleDeleteContactPhotoSourcesEnum{
            operations.PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeContact,
            operations.PeoplePeopleDeleteContactPhotoSourcesEnumReadSourceTypeDomainContact,
        },
        UploadType: sdk.String("sapiente"),
        UploadProtocol: sdk.String("inventore"),
    }, operations.PeoplePeopleDeleteContactPhotoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteContactPhotoResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleGet

Provides information about a person by specifying a resource name. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleGet(ctx, operations.PeoplePeopleGetRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quaerat"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("qui"),
        Fields: sdk.String("repudiandae"),
        Key: sdk.String("natus"),
        OauthToken: sdk.String("modi"),
        PersonFields: sdk.String("ullam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("voluptatibus"),
        RequestMaskIncludeField: sdk.String("nemo"),
        ResourceName: "dolor",
        Sources: []PeoplePeopleGetSourcesEnum{
            operations.PeoplePeopleGetSourcesEnumReadSourceTypeProfile,
            operations.PeoplePeopleGetSourcesEnumReadSourceTypeUnspecified,
        },
        UploadType: sdk.String("eveniet"),
        UploadProtocol: sdk.String("hic"),
    }, operations.PeoplePeopleGetSecurity{
        Option1: &operations.PeoplePeopleGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Person != nil {
        // handle response
    }
}
```

## PeoplePeopleGetBatchGet

Provides information about a list of specific people by specifying a list of requested resource names. Use `people/me` to indicate the authenticated user. The request returns a 400 error if 'personFields' is not specified.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleGetBatchGet(ctx, operations.PeoplePeopleGetBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quae"),
        Fields: sdk.String("sint"),
        Key: sdk.String("praesentium"),
        OauthToken: sdk.String("quia"),
        PersonFields: sdk.String("dolores"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("illo"),
        RequestMaskIncludeField: sdk.String("repellat"),
        ResourceNames: []string{
            "libero",
            "inventore",
            "tenetur",
        },
        Sources: []PeoplePeopleGetBatchGetSourcesEnum{
            operations.PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeDomainContact,
            operations.PeoplePeopleGetBatchGetSourcesEnumReadSourceTypeContact,
        },
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("earum"),
    }, operations.PeoplePeopleGetBatchGetSecurity{
        Option1: &operations.PeoplePeopleGetBatchGetSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPeopleResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleListDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory. When the `sync_token` is specified, resources deleted since the last sync will be returned as a person with `PersonMetadata.deleted` set to true. When the `page_token` or `sync_token` is specified, all other request parameters must match the first call. Writes may have a propagation delay of several minutes for sync requests. Incremental syncs are not intended for read-after-write use cases. See example usage at [List the directory people that have changed](/people/v1/directory#list_the_directory_people_that_have_changed).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleListDirectoryPeople(ctx, operations.PeoplePeopleListDirectoryPeopleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("repudiandae"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("omnis"),
        Fields: sdk.String("aliquid"),
        Key: sdk.String("blanditiis"),
        MergeSources: []PeoplePeopleListDirectoryPeopleMergeSourcesEnum{
            operations.PeoplePeopleListDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeContact,
        },
        OauthToken: sdk.String("minus"),
        PageSize: sdk.Int64(924966),
        PageToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("asperiores"),
        ReadMask: sdk.String("cum"),
        RequestSyncToken: sdk.Bool(false),
        Sources: []PeoplePeopleListDirectoryPeopleSourcesEnum{
            operations.PeoplePeopleListDirectoryPeopleSourcesEnumDirectorySourceTypeUnspecified,
        },
        SyncToken: sdk.String("reiciendis"),
        UploadType: sdk.String("voluptatum"),
        UploadProtocol: sdk.String("maxime"),
    }, operations.PeoplePeopleListDirectoryPeopleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDirectoryPeopleResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleSearchContacts

Provides a list of contacts in the authenticated user's grouped contacts that matches the search query. The query matches on a contact's `names`, `nickNames`, `emailAddresses`, `phoneNumbers`, and `organizations` fields that are from the CONTACT source. **IMPORTANT**: Before searching, clients should send a warmup request with an empty query to update the cache. See https://developers.google.com/people/v1/contacts#search_the_users_contacts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleSearchContacts(ctx, operations.PeoplePeopleSearchContactsRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("illo"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quod"),
        Fields: sdk.String("animi"),
        Key: sdk.String("id"),
        OauthToken: sdk.String("nam"),
        PageSize: sdk.Int64(905738),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("mollitia"),
        QuotaUser: sdk.String("esse"),
        ReadMask: sdk.String("voluptatem"),
        Sources: []PeoplePeopleSearchContactsSourcesEnum{
            operations.PeoplePeopleSearchContactsSourcesEnumReadSourceTypeDomainContact,
            operations.PeoplePeopleSearchContactsSourcesEnumReadSourceTypeDomainContact,
            operations.PeoplePeopleSearchContactsSourcesEnumReadSourceTypeProfile,
        },
        UploadType: sdk.String("odio"),
        UploadProtocol: sdk.String("iste"),
    }, operations.PeoplePeopleSearchContactsSecurity{
        Option1: &operations.PeoplePeopleSearchContactsSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleSearchDirectoryPeople

Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleSearchDirectoryPeople(ctx, operations.PeoplePeopleSearchDirectoryPeopleRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("facere"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quas"),
        Fields: sdk.String("veniam"),
        Key: sdk.String("illum"),
        MergeSources: []PeoplePeopleSearchDirectoryPeopleMergeSourcesEnum{
            operations.PeoplePeopleSearchDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeUnspecified,
            operations.PeoplePeopleSearchDirectoryPeopleMergeSourcesEnumDirectoryMergeSourceTypeUnspecified,
        },
        OauthToken: sdk.String("ullam"),
        PageSize: sdk.Int64(583034),
        PageToken: sdk.String("omnis"),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("quibusdam"),
        QuotaUser: sdk.String("nostrum"),
        ReadMask: sdk.String("impedit"),
        Sources: []PeoplePeopleSearchDirectoryPeopleSourcesEnum{
            operations.PeoplePeopleSearchDirectoryPeopleSourcesEnumDirectorySourceTypeUnspecified,
        },
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("cupiditate"),
    }, operations.PeoplePeopleSearchDirectoryPeopleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchDirectoryPeopleResponse != nil {
        // handle response
    }
}
```

## PeoplePeopleUpdateContact

Update contact data for an existing contact person. Any non-contact data will not be modified. Any non-contact data in the person to update will be ignored. All fields specified in the `update_mask` will be replaced. The server returns a 400 error if `person.metadata.sources` is not specified for the contact to be updated or if there is no contact source. The server returns a 400 error with reason `"failedPrecondition"` if `person.metadata.sources.etag` is different than the contact's etag, which indicates the contact has changed since its data was read. Clients should get the latest person and merge their updates into the latest person. The server returns a 400 error if `memberships` are being updated and there are no contact group memberships specified on the person. The server returns a 400 error if more than one field is specified on a field that is a singleton for contact sources: * biographies * birthdays * genders * names Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleUpdateContact(ctx, operations.PeoplePeopleUpdateContactRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        PersonInput: &shared.PersonInput{
            Addresses: []shared.AddressInput{
                shared.AddressInput{
                    City: sdk.String("Raymundoborough"),
                    Country: sdk.String("Guatemala"),
                    CountryCode: sdk.String("CI"),
                    ExtendedAddress: sdk.String("accusantium"),
                    FormattedValue: sdk.String("error"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("officiis"),
                            ID: sdk.String("9a2253b6-d765-4886-aeae-5fd4b39f8a14"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("perferendis"),
                    PostalCode: sdk.String("45912"),
                    Region: sdk.String("quisquam"),
                    StreetAddress: sdk.String("commodi"),
                    Type: sdk.String("laudantium"),
                },
                shared.AddressInput{
                    City: sdk.String("Port Katrina"),
                    Country: sdk.String("Costa Rica"),
                    CountryCode: sdk.String("MS"),
                    ExtendedAddress: sdk.String("earum"),
                    FormattedValue: sdk.String("eligendi"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("occaecati"),
                            ID: sdk.String("e175ffa9-06ae-4559-b72e-b6746030fe18"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    PoBox: sdk.String("reprehenderit"),
                    PostalCode: sdk.String("71798"),
                    Region: sdk.String("eveniet"),
                    StreetAddress: sdk.String("vero"),
                    Type: sdk.String("iure"),
                },
            },
            Biographies: []shared.BiographyInput{
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("perspiciatis"),
                            ID: sdk.String("0ed0c16a-7ba4-4784-8448-9f6770ef0480"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("illo"),
                },
                shared.BiographyInput{
                    ContentType: shared.BiographyContentTypeEnumTextPlain.ToPointer(),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolores"),
                            ID: sdk.String("ba25ee6c-75af-48a6-8a7a-e346e0979e5a"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("debitis"),
                },
            },
            Birthdays: []shared.BirthdayInput{
                shared.BirthdayInput{
                    Date: &shared.Date{
                        Day: sdk.Int(7270),
                        Month: sdk.Int(634386),
                        Year: sdk.Int(774090),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("culpa"),
                            ID: sdk.String("ca645de9-8675-451a-9cce-61ec2c79a39a"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Text: sdk.String("ipsam"),
                },
                shared.BirthdayInput{
                    Date: &shared.Date{
                        Day: sdk.Int(684034),
                        Month: sdk.Int(297627),
                        Year: sdk.Int(825033),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("nemo"),
                            ID: sdk.String("a65b4d55-62d9-4b7d-9e2d-6fcf557629db"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Text: sdk.String("quam"),
                },
            },
            BraggingRights: []shared.BraggingRightsInput{
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quisquam"),
                            ID: sdk.String("3a890282-a51f-441c-b679-6ed3d724c18f"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("rem"),
                },
                shared.BraggingRightsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("beatae"),
                            ID: sdk.String("e98cce3f-7166-400d-a0e3-aa61c6fe09d8"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("explicabo"),
                },
            },
            CalendarUrls: []shared.CalendarURLInput{
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ad"),
                            ID: sdk.String("3b32c8c7-c3c7-410e-9673-d905cb4bedef"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("quod"),
                    URL: sdk.String("inventore"),
                },
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("odit"),
                            ID: sdk.String("7c390995-5282-450d-8bbc-d3b121b88c1e"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("minima"),
                    URL: sdk.String("saepe"),
                },
                shared.CalendarURLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("voluptate"),
                            ID: sdk.String("a061391c-c8fa-40b7-9176-4926b0cf5e6c"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("aliquid"),
                    URL: sdk.String("necessitatibus"),
                },
            },
            ClientData: []shared.ClientDataInput{
                shared.ClientDataInput{
                    Key: sdk.String("similique"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("expedita"),
                            ID: sdk.String("e5e0b99f-3b13-458d-aa87-bb7aecbe569d"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("alias"),
                },
                shared.ClientDataInput{
                    Key: sdk.String("minus"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("expedita"),
                            ID: sdk.String("069907f9-8944-4145-aa9f-01f3442c61be"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ipsum"),
                },
                shared.ClientDataInput{
                    Key: sdk.String("nesciunt"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("distinctio"),
                            ID: sdk.String("acde532b-6526-4f86-a853-fe2859ce3222"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("illo"),
                },
            },
            EmailAddresses: []shared.EmailAddressInput{
                shared.EmailAddressInput{
                    DisplayName: sdk.String("earum"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("commodi"),
                            ID: sdk.String("664c41d2-fba5-4cba-869b-8d291beb810a"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("dolorum"),
                    Value: sdk.String("laborum"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("atque"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("molestiae"),
                            ID: sdk.String("49479edd-4fcf-47b5-8cf8-7f08f3927107"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("culpa"),
                    Value: sdk.String("qui"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("dolore"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("distinctio"),
                            ID: sdk.String("40c8f08b-ff10-481e-88f8-6996c8e22be0"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("ipsum"),
                    Value: sdk.String("maxime"),
                },
                shared.EmailAddressInput{
                    DisplayName: sdk.String("tenetur"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolore"),
                            ID: sdk.String("7893bd23-f866-400c-a1c7-834273caa911"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("tempore"),
                    Value: sdk.String("nesciunt"),
                },
            },
            Etag: sdk.String("atque"),
            Events: []shared.EventInput{
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(87714),
                        Month: sdk.Int(738626),
                        Year: sdk.Int(410547),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("inventore"),
                            ID: sdk.String("a331a54d-c102-494f-92fe-d939ba8f71e2"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("iste"),
                },
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(137209),
                        Month: sdk.Int(810331),
                        Year: sdk.Int(164967),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("doloremque"),
                            ID: sdk.String("ee1228ac-3adc-4647-9240-bc11ea482824"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("eligendi"),
                },
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(782715),
                        Month: sdk.Int(400613),
                        Year: sdk.Int(672865),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sed"),
                            ID: sdk.String("f0f5b9d3-cb11-4a76-87d3-100e8e2b9b0d"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("quaerat"),
                },
                shared.EventInput{
                    Date: &shared.Date{
                        Day: sdk.Int(390740),
                        Month: sdk.Int(820083),
                        Year: sdk.Int(156247),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolorum"),
                            ID: sdk.String("7c7d1ea0-e79f-4a9b-be5f-179f650b1e70"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("repudiandae"),
                },
            },
            ExternalIds: []shared.ExternalIDInput{
                shared.ExternalIDInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("officiis"),
                            ID: sdk.String("4396713b-acce-4072-abd6-1918d279c10c"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("blanditiis"),
                    Value: sdk.String("ipsam"),
                },
                shared.ExternalIDInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ab"),
                            ID: sdk.String("6fd78be2-6212-4726-a8fa-503962867e72"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("neque"),
                    Value: sdk.String("laborum"),
                },
            },
            FileAses: []shared.FileAsInput{
                shared.FileAsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("minima"),
                            ID: sdk.String("024b157f-9bb6-4ef7-aa50-871d99b661a7"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("repudiandae"),
                },
                shared.FileAsInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sapiente"),
                            ID: sdk.String("168b6ccb-2822-4b4a-9850-ed2f4a1e9c4a"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("exercitationem"),
                },
            },
            Genders: []shared.GenderInput{
                shared.GenderInput{
                    AddressMeAs: sdk.String("inventore"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("eius"),
                            ID: sdk.String("0e75726e-003c-42f0-a941-92518cee41c9"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("natus"),
                },
                shared.GenderInput{
                    AddressMeAs: sdk.String("hic"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ut"),
                            ID: sdk.String("69f6f1cf-1a3f-4023-8669-e6a626012eba"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quis"),
                },
            },
            ImClients: []shared.ImClientInput{
                shared.ImClientInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("unde"),
                            ID: sdk.String("88c6720c-3103-4f1a-80c0-f3ec8688fd8e"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Protocol: sdk.String("vel"),
                    Type: sdk.String("tenetur"),
                    Username: sdk.String("Noelia7"),
                },
                shared.ImClientInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolores"),
                            ID: sdk.String("8f0aaaee-e004-4eba-bbf8-732be509c508"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Protocol: sdk.String("sunt"),
                    Type: sdk.String("neque"),
                    Username: sdk.String("Anika39"),
                },
            },
            Interests: []shared.InterestInput{
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("voluptatem"),
                            ID: sdk.String("bce55a86-8714-43c9-b905-ff797a5da664"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("in"),
                },
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("vero"),
                            ID: sdk.String("778a74ba-aa28-432b-b658-62d2a31f9b14"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("deserunt"),
                },
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("nisi"),
                            ID: sdk.String("bdec7f44-4232-4e9a-9dee-1acd72a89981"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quis"),
                },
                shared.InterestInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("corrupti"),
                            ID: sdk.String("fe682e1c-2dbe-423d-98e8-247d122c9f67"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("nihil"),
                },
            },
            Locales: []shared.LocaleInput{
                shared.LocaleInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("maiores"),
                            ID: sdk.String("a2795836-7363-4da0-b909-6faeb8648073"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("illum"),
                },
                shared.LocaleInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("laudantium"),
                            ID: sdk.String("f8b89d9c-a607-4565-afc0-ebe67155e2d0"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("fuga"),
                },
                shared.LocaleInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ipsum"),
                            ID: sdk.String("070d6e29-7f58-41fa-baaa-7d801088076f"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("corporis"),
                },
            },
            Locations: []shared.LocationInput{
                shared.LocationInput{
                    BuildingID: sdk.String("laboriosam"),
                    Current: sdk.Bool(false),
                    DeskCode: sdk.String("recusandae"),
                    Floor: sdk.String("temporibus"),
                    FloorSection: sdk.String("quia"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("error"),
                            ID: sdk.String("81408826-9b6a-470b-8dd8-2f94fffbd1e1"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("dolores"),
                    Value: sdk.String("illo"),
                },
                shared.LocationInput{
                    BuildingID: sdk.String("nulla"),
                    Current: sdk.Bool(false),
                    DeskCode: sdk.String("nulla"),
                    Floor: sdk.String("quisquam"),
                    FloorSection: sdk.String("commodi"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sint"),
                            ID: sdk.String("038b1d18-7b51-4eb5-bd30-bfe03490cf20"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("exercitationem"),
                    Value: sdk.String("aliquam"),
                },
                shared.LocationInput{
                    BuildingID: sdk.String("id"),
                    Current: sdk.Bool(false),
                    DeskCode: sdk.String("omnis"),
                    Floor: sdk.String("ad"),
                    FloorSection: sdk.String("unde"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("consequatur"),
                            ID: sdk.String("43cb462d-6bc9-4917-b98e-4792b979a413"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("laboriosam"),
                    Value: sdk.String("dolorum"),
                },
                shared.LocationInput{
                    BuildingID: sdk.String("rem"),
                    Current: sdk.Bool(false),
                    DeskCode: sdk.String("impedit"),
                    Floor: sdk.String("perspiciatis"),
                    FloorSection: sdk.String("vitae"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("suscipit"),
                            ID: sdk.String("83bd861d-0d98-4ccf-89d3-861186ed76c0"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("magni"),
                    Value: sdk.String("tenetur"),
                },
            },
            Memberships: []shared.MembershipInput{
                shared.MembershipInput{
                    ContactGroupMembership: &shared.ContactGroupMembershipInput{
                        ContactGroupResourceName: sdk.String("cumque"),
                    },
                    DomainMembership: &shared.DomainMembership{
                        InViewerDomain: sdk.Bool(false),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("harum"),
                            ID: sdk.String("13ac24c8-143b-4866-8575-a1e2668730be"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                },
                shared.MembershipInput{
                    ContactGroupMembership: &shared.ContactGroupMembershipInput{
                        ContactGroupResourceName: sdk.String("ducimus"),
                    },
                    DomainMembership: &shared.DomainMembership{
                        InViewerDomain: sdk.Bool(false),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("harum"),
                            ID: sdk.String("0e8fbc48-ddc7-4e69-b535-10505014dca1"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                },
                shared.MembershipInput{
                    ContactGroupMembership: &shared.ContactGroupMembershipInput{
                        ContactGroupResourceName: sdk.String("nemo"),
                    },
                    DomainMembership: &shared.DomainMembership{
                        InViewerDomain: sdk.Bool(false),
                    },
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("atque"),
                            ID: sdk.String("82484c36-e948-4892-b82d-34e0b8fc0d59"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                },
            },
            Metadata: &shared.PersonMetadataInput{
                Sources: []shared.SourceInput{
                    shared.SourceInput{
                        Etag: sdk.String("iure"),
                        ID: sdk.String("b9f9820b-e078-408c-b6c9-e2f70344e00f"),
                        Type: shared.SourceTypeEnumAccount.ToPointer(),
                    },
                    shared.SourceInput{
                        Etag: sdk.String("reprehenderit"),
                        ID: sdk.String("8eb53948-3f74-48ee-bccb-69d541b4b393"),
                        Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                    },
                },
            },
            MiscKeywords: []shared.MiscKeywordInput{
                shared.MiscKeywordInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ad"),
                            ID: sdk.String("66625bea-3220-41de-8379-c598ea1d48c5"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: shared.MiscKeywordTypeEnumOutlookDirectoryServer.ToPointer(),
                    Value: sdk.String("tenetur"),
                },
            },
            Names: []shared.NameInput{
                shared.NameInput{
                    FamilyName: sdk.String("itaque"),
                    GivenName: sdk.String("aspernatur"),
                    HonorificPrefix: sdk.String("et"),
                    HonorificSuffix: sdk.String("fugiat"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("provident"),
                            ID: sdk.String("0fd53776-bfc7-4677-b0f5-04a6e4828fb6"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("officia"),
                    PhoneticFamilyName: sdk.String("repudiandae"),
                    PhoneticFullName: sdk.String("recusandae"),
                    PhoneticGivenName: sdk.String("architecto"),
                    PhoneticHonorificPrefix: sdk.String("sint"),
                    PhoneticHonorificSuffix: sdk.String("cumque"),
                    PhoneticMiddleName: sdk.String("explicabo"),
                    UnstructuredName: sdk.String("nisi"),
                },
                shared.NameInput{
                    FamilyName: sdk.String("quisquam"),
                    GivenName: sdk.String("quae"),
                    HonorificPrefix: sdk.String("impedit"),
                    HonorificSuffix: sdk.String("facilis"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("ex"),
                            ID: sdk.String("18c6331c-abda-4b76-ba44-4dd0da0abe58"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("expedita"),
                    PhoneticFamilyName: sdk.String("velit"),
                    PhoneticFullName: sdk.String("nulla"),
                    PhoneticGivenName: sdk.String("quis"),
                    PhoneticHonorificPrefix: sdk.String("labore"),
                    PhoneticHonorificSuffix: sdk.String("nobis"),
                    PhoneticMiddleName: sdk.String("animi"),
                    UnstructuredName: sdk.String("illo"),
                },
                shared.NameInput{
                    FamilyName: sdk.String("eligendi"),
                    GivenName: sdk.String("facilis"),
                    HonorificPrefix: sdk.String("nesciunt"),
                    HonorificSuffix: sdk.String("laborum"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quibusdam"),
                            ID: sdk.String("49b8e5c1-8b25-4e87-b648-23255be95c0c"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    MiddleName: sdk.String("eligendi"),
                    PhoneticFamilyName: sdk.String("tempore"),
                    PhoneticFullName: sdk.String("fugit"),
                    PhoneticGivenName: sdk.String("quod"),
                    PhoneticHonorificPrefix: sdk.String("mollitia"),
                    PhoneticHonorificSuffix: sdk.String("laudantium"),
                    PhoneticMiddleName: sdk.String("iusto"),
                    UnstructuredName: sdk.String("sint"),
                },
            },
            Nicknames: []shared.NicknameInput{
                shared.NicknameInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quos"),
                            ID: sdk.String("d73809a0-2f06-4e92-a8b5-6065a5074bef"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: shared.NicknameTypeEnumGplus.ToPointer(),
                    Value: sdk.String("laborum"),
                },
            },
            Occupations: []shared.OccupationInput{
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("eum"),
                            ID: sdk.String("849d2b99-4043-463a-8964-c053876e39de"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("perspiciatis"),
                },
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("quisquam"),
                            ID: sdk.String("765dfd73-54e5-4cb9-8977-017a26204bb2"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quod"),
                },
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("laborum"),
                            ID: sdk.String("4e999828-79de-4fc0-b239-606cf90ad989"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("architecto"),
                },
                shared.OccupationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("officia"),
                            ID: sdk.String("34715acd-a044-4faa-ad6e-13a620e2e918"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("iure"),
                },
            },
            Organizations: []shared.OrganizationInput{
                shared.OrganizationInput{
                    CostCenter: sdk.String("distinctio"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("alias"),
                    Domain: sdk.String("modi"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(525392),
                        Month: sdk.Int(414447),
                        Year: sdk.Int(791940),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(938217),
                    JobDescription: sdk.String("amet"),
                    Location: sdk.String("excepturi"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("laudantium"),
                            ID: sdk.String("a0b37461-7dd9-45ce-b044-be4eb3b31cb5"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Mrs. Roxanne Farrell PhD"),
                    PhoneticName: sdk.String("deleniti"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(456378),
                        Month: sdk.Int(480529),
                        Year: sdk.Int(127088),
                    },
                    Symbol: sdk.String("cumque"),
                    Title: sdk.String("Mrs."),
                    Type: sdk.String("consectetur"),
                },
                shared.OrganizationInput{
                    CostCenter: sdk.String("ad"),
                    Current: sdk.Bool(false),
                    Department: sdk.String("itaque"),
                    Domain: sdk.String("illo"),
                    EndDate: &shared.Date{
                        Day: sdk.Int(819717),
                        Month: sdk.Int(823292),
                        Year: sdk.Int(407467),
                    },
                    FullTimeEquivalentMillipercent: sdk.Int(731351),
                    JobDescription: sdk.String("sapiente"),
                    Location: sdk.String("iure"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("modi"),
                            ID: sdk.String("b454e983-1e79-45f0-a57f-54ebf2d2b460"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Name: sdk.String("Sonja Wisozk"),
                    PhoneticName: sdk.String("dolore"),
                    StartDate: &shared.Date{
                        Day: sdk.Int(669828),
                        Month: sdk.Int(532022),
                        Year: sdk.Int(844281),
                    },
                    Symbol: sdk.String("reiciendis"),
                    Title: sdk.String("Dr."),
                    Type: sdk.String("incidunt"),
                },
            },
            PhoneNumbers: []shared.PhoneNumberInput{
                shared.PhoneNumberInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("cumque"),
                            ID: sdk.String("dd1850bf-5a0c-4bc8-b786-0afea6c63513"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("repellendus"),
                    Value: sdk.String("ipsam"),
                },
            },
            Relations: []shared.RelationInput{
                shared.RelationInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("sit"),
                            ID: sdk.String("86c10a85-6a19-4d46-a5ba-97259875dc0c"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Person: sdk.String("eligendi"),
                    Type: sdk.String("facilis"),
                },
            },
            Residences: []shared.ResidenceInput{
                shared.ResidenceInput{
                    Current: sdk.Bool(false),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("in"),
                            ID: sdk.String("8bd248ec-6e8b-4240-b1c0-6c9c0649d2bd"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("error"),
                },
                shared.ResidenceInput{
                    Current: sdk.Bool(false),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("necessitatibus"),
                            ID: sdk.String("58ddb166-5c31-42c7-b550-d4721c176292"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("facere"),
                },
                shared.ResidenceInput{
                    Current: sdk.Bool(false),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("voluptate"),
                            ID: sdk.String("878e71bf-8c14-4184-9fe1-f87ea103a980"),
                            Type: shared.SourceTypeEnumProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("recusandae"),
                },
                shared.ResidenceInput{
                    Current: sdk.Bool(false),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("laborum"),
                            ID: sdk.String("1606399e-f17b-4817-98d4-ab5bc80dea77"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("quibusdam"),
                },
            },
            ResourceName: sdk.String("omnis"),
            SipAddresses: []shared.SipAddressInput{
                shared.SipAddressInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("1ec9d106-cff2-4c26-ab84-0a28ea0672d6"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("molestiae"),
                    Value: sdk.String("neque"),
                },
                shared.SipAddressInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolorum"),
                            ID: sdk.String("34ca434c-db31-449a-99f2-52078a18a4b0"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("fuga"),
                    Value: sdk.String("officiis"),
                },
                shared.SipAddressInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("repellendus"),
                            ID: sdk.String("4b5cf061-6ee9-4227-975b-d60daa0e149c"),
                            Type: shared.SourceTypeEnumDomainContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("dicta"),
                    Value: sdk.String("quod"),
                },
            },
            Skills: []shared.SkillInput{
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("assumenda"),
                            ID: sdk.String("d362bbf9-2390-4015-b268-99cf4ffeb9be"),
                            Type: shared.SourceTypeEnumOtherContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ullam"),
                },
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("aperiam"),
                            ID: sdk.String("318a81eb-01d2-497f-bb45-6a855e5088c8"),
                            Type: shared.SourceTypeEnumContact.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("ratione"),
                },
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("magni"),
                            ID: sdk.String("6341accc-ca66-43d4-a859-5c1b32bb213e"),
                            Type: shared.SourceTypeEnumAccount.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("harum"),
                },
                shared.SkillInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("dolor"),
                            ID: sdk.String("1cd6a5be-7490-46b9-ac63-6e74d28a4814"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("similique"),
                },
            },
            Urls: []shared.URLInput{
                shared.URLInput{
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("distinctio"),
                            ID: sdk.String("84119864-0587-46b3-8871-13de4061082d"),
                            Type: shared.SourceTypeEnumSourceTypeUnspecified.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Type: sdk.String("provident"),
                    Value: sdk.String("corporis"),
                },
            },
            UserDefined: []shared.UserDefinedInput{
                shared.UserDefinedInput{
                    Key: sdk.String("placeat"),
                    Metadata: &shared.FieldMetadataInput{
                        Source: &shared.SourceInput{
                            Etag: sdk.String("molestias"),
                            ID: sdk.String("9cd927a5-ba55-411b-b837-0d9784fb1464"),
                            Type: shared.SourceTypeEnumDomainProfile.ToPointer(),
                        },
                        SourcePrimary: sdk.Bool(false),
                    },
                    Value: sdk.String("neque"),
                },
            },
        },
        AccessToken: sdk.String("sequi"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("expedita"),
        Fields: sdk.String("quod"),
        Key: sdk.String("minima"),
        OauthToken: sdk.String("rerum"),
        PersonFields: sdk.String("voluptates"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("suscipit"),
        ResourceName: "veritatis",
        Sources: []PeoplePeopleUpdateContactSourcesEnum{
            operations.PeoplePeopleUpdateContactSourcesEnumReadSourceTypeUnspecified,
            operations.PeoplePeopleUpdateContactSourcesEnumReadSourceTypeDomainContact,
            operations.PeoplePeopleUpdateContactSourcesEnumReadSourceTypeUnspecified,
        },
        UpdatePersonFields: sdk.String("quam"),
        UploadType: sdk.String("beatae"),
        UploadProtocol: sdk.String("odio"),
    }, operations.PeoplePeopleUpdateContactSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Person != nil {
        // handle response
    }
}
```

## PeoplePeopleUpdateContactPhoto

Update a contact's photo. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.People.PeoplePeopleUpdateContactPhoto(ctx, operations.PeoplePeopleUpdateContactPhotoRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        UpdateContactPhotoRequest: &shared.UpdateContactPhotoRequest{
            PersonFields: sdk.String("voluptatum"),
            PhotoBytes: sdk.String("reprehenderit"),
            Sources: []shared.UpdateContactPhotoRequestSourcesEnum{
                shared.UpdateContactPhotoRequestSourcesEnumReadSourceTypeDomainContact,
                shared.UpdateContactPhotoRequestSourcesEnumReadSourceTypeUnspecified,
            },
        },
        AccessToken: sdk.String("in"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("possimus"),
        OauthToken: sdk.String("labore"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("consectetur"),
        ResourceName: "occaecati",
        UploadType: sdk.String("voluptates"),
        UploadProtocol: sdk.String("impedit"),
    }, operations.PeoplePeopleUpdateContactPhotoSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateContactPhotoResponse != nil {
        // handle response
    }
}
```
