/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PersonResponse } from "./personresponse";
import { Expose, Type } from "class-transformer";

/**
 * If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
 */
export class BatchCreateContactsResponse extends SpeakeasyBase {
  /**
   * The contacts that were created, unless the request `read_mask` is empty.
   */
  @SpeakeasyMetadata({ elemType: PersonResponse })
  @Expose({ name: "createdPeople" })
  @Type(() => PersonResponse)
  createdPeople?: PersonResponse[];
}
