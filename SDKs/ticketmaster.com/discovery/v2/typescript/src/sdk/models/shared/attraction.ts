import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { ExternalLink } from "./externallink";
import { Image } from "./image";


export enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}


// Attraction
/** 
 * Attraction
**/
export class Attraction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalInfo?: string;

  @SpeakeasyMetadata({ elemType: Classification })
  classifications?: Classification[];

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: ExternalLink, elemDepth: 2 })
  externalLinks?: Record<string, ExternalLink[]>;

  @SpeakeasyMetadata()
  id: string;

  @SpeakeasyMetadata({ elemType: Image })
  images?: Image[];

  @SpeakeasyMetadata()
  locale?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  test?: boolean;

  @SpeakeasyMetadata()
  type: AttractionTypeEnum;

  @SpeakeasyMetadata()
  upcomingEvents?: Record<string, number>;

  @SpeakeasyMetadata()
  url?: string;
}
