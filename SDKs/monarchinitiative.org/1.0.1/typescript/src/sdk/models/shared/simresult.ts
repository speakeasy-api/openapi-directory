import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimMatch } from "./simmatch";
import { SimMetadata } from "./simmetadata";
import { SimQuery } from "./simquery";



export class SimResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matches", elemType: SimMatch })
  matches?: SimMatch[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: SimMetadata;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: SimQuery;
}
