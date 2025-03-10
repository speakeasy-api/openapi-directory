/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";
import { Expose, Type } from "class-transformer";

/**
 * Variant of CardFetchBody with fields as optional for patches
 */
export class CardFetchBodyPatch extends SpeakeasyBase {
  /**
   * An array of CRM object types where this card should be displayed. HubSpot will call your target URL whenever a user visits a record page of the types defined here.
   */
  @SpeakeasyMetadata({ elemType: CardObjectTypeBody })
  @Expose({ name: "objectTypes" })
  @Type(() => CardObjectTypeBody)
  objectTypes: CardObjectTypeBody[];

  /**
   * URL to a service endpoint that will respond with details for this card. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "targetUrl" })
  targetUrl?: string;
}
