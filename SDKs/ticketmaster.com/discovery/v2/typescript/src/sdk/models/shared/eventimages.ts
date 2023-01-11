import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";


export enum EventImagesTypeEnum {
    Event = "event"
}


// EventImages
/** 
 * This class defines an Event with only images view on the Discovery API
**/
export class EventImages extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata()
  type: EventImagesTypeEnum;
}
