/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Amenity } from "./amenity";
import { Image } from "./image";
import { Rate } from "./rate";
import { Expose, Type } from "class-transformer";

/**
 * Bookable category of bookable rooms within a hotel
 */
export class RoomType extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: Amenity })
  @Expose({ name: "amenities" })
  @Type(() => Amenity)
  amenities: Amenity[];

  /**
   * Description
   */
  @SpeakeasyMetadata()
  @Expose({ name: "description" })
  description: string;

  /**
   * Lists photos of this room type
   */
  @SpeakeasyMetadata({ elemType: Image })
  @Expose({ name: "images" })
  @Type(() => Image)
  images: Image[];

  /**
   * Maximum number of adults that can occupy the room.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxOccupancy" })
  maxOccupancy: number;

  /**
   * Name
   */
  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name: string;

  /**
   * Bookable rates for this room type and the start and end dates of your availability search.
   */
  @SpeakeasyMetadata({ elemType: Rate })
  @Expose({ name: "rates" })
  @Type(() => Rate)
  rates?: Rate[];

  /**
   * Unique identifier of the room type within the Impala platform.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "roomTypeId" })
  roomTypeId: string;
}
