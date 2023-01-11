import { SpeakeasyBase } from "../../../internal/utils";
import { VariantSet } from "./variantset";
export declare class PageOfVariantSets extends SpeakeasyBase {
    items?: VariantSet[];
    page?: number;
    pages?: number;
    perPage?: number;
    total?: number;
}
