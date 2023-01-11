import { SpeakeasyBase } from "../../../internal/utils";
import { D2PAssociation } from "./d2passociation";
import { CompactAssociationSet } from "./compactassociationset";
export declare class D2PAssociationResults extends SpeakeasyBase {
    associations?: D2PAssociation[];
    compactAssociations?: CompactAssociationSet[];
    docs?: Record<string, any>[];
    facetCounts?: Record<string, any>;
    highlighting?: Record<string, any>;
    numFound?: number;
    objects?: string[];
}
