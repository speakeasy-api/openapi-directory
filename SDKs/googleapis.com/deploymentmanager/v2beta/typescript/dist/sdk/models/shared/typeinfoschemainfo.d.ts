import { SpeakeasyBase } from "../../../internal/utils";
export declare class TypeInfoSchemaInfo extends SpeakeasyBase {
    /**
     * The properties that this composite type or base type collection accept as input, represented as a json blob, format is: JSON Schema Draft V4
     */
    input?: string;
    /**
     * The properties that this composite type or base type collection exposes as output, these properties can be used for references, represented as json blob, format is: JSON Schema Draft V4
     */
    output?: string;
}
