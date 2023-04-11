import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { CategoryGroups } from "./categorygroups";
/**
 * A marketplace
 */
export declare class Market extends SpeakeasyBase {
    /**
     * The different app attributes supported by this marketplace
     */
    attributes: Attributes[];
    /**
     * The category groups supported by this marketplace
     */
    categoryGroups?: CategoryGroups[];
    /**
     * The id of this marketplace
     */
    marketplaceId: string;
    /**
     * The URL template for previewing apps on this marketplace
     */
    previewAppUrl: string;
    /**
     * The URL template for viewing apps on this marketplace
     */
    viewAppUrl: string;
}
