import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompareInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=query_ids" })
  queryIds?: string[][];

  @SpeakeasyMetadata({ data: "json, name=reference_ids" })
  referenceIds?: string[];
}
