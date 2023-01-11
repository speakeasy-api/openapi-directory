import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { D2PAssociation } from "./d2passociation";
import { CompactAssociationSet } from "./compactassociationset";



export class D2PAssociationResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=associations", elemType: D2PAssociation })
  associations?: D2PAssociation[];

  @SpeakeasyMetadata({ data: "json, name=compact_associations", elemType: CompactAssociationSet })
  compactAssociations?: CompactAssociationSet[];

  @SpeakeasyMetadata({ data: "json, name=docs" })
  docs?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=facet_counts" })
  facetCounts?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=highlighting" })
  highlighting?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=numFound" })
  numFound?: number;

  @SpeakeasyMetadata({ data: "json, name=objects" })
  objects?: string[];
}
