import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Index is not used as an independent entity, it is retrieved as part of a Table entity.
 */
export declare class IndexEntity extends SpeakeasyBase {
    /**
     * Custom engine specific features.
     */
    customFeatures?: Record<string, any>;
    /**
     * The name of the index.
     */
    name?: string;
    /**
     * Table columns used as part of the Index, for example B-TREE index should list the columns which constitutes the index.
     */
    tableColumns?: string[];
    /**
     * Type of index, for example B-TREE.
     */
    type?: string;
    /**
     * Boolean value indicating whether the index is unique.
     */
    unique?: boolean;
}
