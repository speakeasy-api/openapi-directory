import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=docs" })
  docs?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=facet_counts" })
  facetCounts?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=highlighting" })
  highlighting?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=numFound" })
  numFound?: number;
}
