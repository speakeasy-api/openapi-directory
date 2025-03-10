/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum UpdateContactPhotoRequestSourcesEnum {
  ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
  ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
  ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
  ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT",
}

/**
 * A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
 */
export class UpdateContactPhotoRequest extends SpeakeasyBase {
  /**
   * Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to empty if not set, which will skip the post mutate get. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined
   */
  @SpeakeasyMetadata()
  @Expose({ name: "personFields" })
  personFields?: string;

  /**
   * Required. Raw photo bytes
   */
  @SpeakeasyMetadata()
  @Expose({ name: "photoBytes" })
  photoBytes?: string;

  /**
   * Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sources" })
  sources?: UpdateContactPhotoRequestSourcesEnum[];
}
