import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActivitiesCollection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// Activities
/** 
 * User's activities.
**/
export class Activities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: ActivitiesCollection })
  collection?: ActivitiesCollection[];

  @SpeakeasyMetadata({ data: "json, name=future_href" })
  futureHref?: string;

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
