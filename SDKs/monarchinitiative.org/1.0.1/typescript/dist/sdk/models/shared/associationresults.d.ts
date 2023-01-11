import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
import { CompactAssociationSet } from "./compactassociationset";
export declare class AssociationResults extends SpeakeasyBase {
    associations?: Association[];
    compactAssociations?: CompactAssociationSet[];
    docs?: Record<string, any>[];
    facetCounts?: Record<string, any>;
    highlighting?: Record<string, any>;
    numFound?: number;
    objects?: string[];
}
