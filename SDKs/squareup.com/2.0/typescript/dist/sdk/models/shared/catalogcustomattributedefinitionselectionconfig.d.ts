import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection } from "./catalogcustomattributedefinitionselectionconfigcustomattributeselection";
/**
 * Configuration associated with `SELECTION`-type custom attribute definitions.
 */
export declare class CatalogCustomAttributeDefinitionSelectionConfig extends SpeakeasyBase {
    /**
     * The set of valid `CatalogCustomAttributeSelections`. Up to a maximum of 100
     *
     * @remarks
     * selections can be defined. Can be modified.
     */
    allowedSelections?: CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection[];
    /**
     * The maximum number of selections that can be set. The maximum value for this
     *
     * @remarks
     * attribute is 100. The default value is 1. The value can be modified, but changing the value will not
     * affect existing custom attribute values on objects. Clients need to
     * handle custom attributes with more selected values than allowed by this limit.
     */
    maxAllowedSelections?: number;
}
