/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { PartialAddress } from "./partialaddress";
import { RecognizedEntity } from "./recognizedentity";
import { Expose, Type } from "class-transformer";

/**
 * The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.
 *
 * @remarks
 *
 */
export class ParseAddressResponseBody extends SpeakeasyBase {
  /**
   * The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.
   *
   * @remarks
   *
   * > **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the address is correct.
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => PartialAddress)
  address: PartialAddress;

  /**
   * All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata({ elemType: RecognizedEntity })
  @Expose({ name: "entities" })
  @Type(() => RecognizedEntity)
  entities: RecognizedEntity[];

  /**
   * A confidence score between zero and one that indicates how certain the API is that it understood the text.
   *
   * @remarks
   *
   */
  @SpeakeasyMetadata()
  @Expose({ name: "score" })
  score: number;
}
