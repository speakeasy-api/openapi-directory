/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export enum TokenResourceAttributesTokenTypeEnum {
  Bearer = "bearer",
}

export class TokenResourceAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "access_token" })
  accessToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "expires_in" })
  expiresIn: number;

  @SpeakeasyMetadata()
  @Expose({ name: "refresh_token" })
  refreshToken: string;

  @SpeakeasyMetadata()
  @Expose({ name: "token_type" })
  tokenType: TokenResourceAttributesTokenTypeEnum;
}

export enum TokenResourceRelationshipsGroupsDataTypeEnum {
  Group = "group",
}

export class TokenResourceRelationshipsGroupsData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TokenResourceRelationshipsGroupsDataTypeEnum;
}

export class TokenResourceRelationshipsGroupsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "related" })
  related: string;
}

export class TokenResourceRelationshipsGroups extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: TokenResourceRelationshipsGroupsData })
  @Expose({ name: "data" })
  @Type(() => TokenResourceRelationshipsGroupsData)
  data: TokenResourceRelationshipsGroupsData[];

  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  @Type(() => TokenResourceRelationshipsGroupsLinks)
  links: TokenResourceRelationshipsGroupsLinks;
}

export enum TokenResourceRelationshipsOrganizationDataTypeEnum {
  Organization = "organization",
}

export class TokenResourceRelationshipsOrganizationData extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TokenResourceRelationshipsOrganizationDataTypeEnum;
}

export class TokenResourceRelationshipsOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "related" })
  related: string;
}

export class TokenResourceRelationshipsOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "data" })
  @Type(() => TokenResourceRelationshipsOrganizationData)
  data: TokenResourceRelationshipsOrganizationData;

  @SpeakeasyMetadata()
  @Expose({ name: "links" })
  @Type(() => TokenResourceRelationshipsOrganizationLinks)
  links: TokenResourceRelationshipsOrganizationLinks;
}

export class TokenResourceRelationships extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "groups" })
  @Type(() => TokenResourceRelationshipsGroups)
  groups?: TokenResourceRelationshipsGroups;

  @SpeakeasyMetadata()
  @Expose({ name: "organization" })
  @Type(() => TokenResourceRelationshipsOrganization)
  organization?: TokenResourceRelationshipsOrganization;
}

export enum TokenResourceTypeEnum {
  Token = "token",
}

export class TokenResource extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "attributes" })
  @Type(() => TokenResourceAttributes)
  attributes?: TokenResourceAttributes;

  @SpeakeasyMetadata()
  @Expose({ name: "id" })
  id: string;

  @SpeakeasyMetadata()
  @Expose({ name: "relationships" })
  @Type(() => TokenResourceRelationships)
  relationships?: TokenResourceRelationships;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type: TokenResourceTypeEnum;
}
