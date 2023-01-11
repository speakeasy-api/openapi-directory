import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutocompleteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "json, name=equivalent_ids" })
  equivalentIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=has_highlight" })
  hasHighlight?: boolean;

  @SpeakeasyMetadata({ data: "json, name=highlight" })
  highlight?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string[];

  @SpeakeasyMetadata({ data: "json, name=match" })
  match?: string;

  @SpeakeasyMetadata({ data: "json, name=taxon" })
  taxon?: string;

  @SpeakeasyMetadata({ data: "json, name=taxon_label" })
  taxonLabel?: string;
}
