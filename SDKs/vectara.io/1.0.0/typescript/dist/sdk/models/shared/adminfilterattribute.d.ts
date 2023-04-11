import { SpeakeasyBase } from "../../../internal/utils";
import { AdminFilterAttributeLevelEnum } from "./adminfilterattributelevelenum";
import { AdminFilterAttributeTypeEnum } from "./adminfilterattributetypeenum";
/**
 * Defines metadata fields that can be used in predicate queries.
 */
export declare class AdminFilterAttribute extends SpeakeasyBase {
    /**
     * An optional description.
     */
    description?: string;
    /**
     * Whether the field is indexed for maximum query speed.
     */
    indexed?: boolean;
    level?: AdminFilterAttributeLevelEnum;
    /**
     * Name of the field, as seen in metadata.
     */
    name?: string;
    type?: AdminFilterAttributeTypeEnum;
}
