import { SpeakeasyBase } from "../../../internal/utils";
export declare class TransformDefinitionTransformDefinition extends SpeakeasyBase {
    /**
     * The transform definitions' active
     */
    active?: boolean;
    /**
     * The transform definitions' content type
     */
    contentType?: string;
    /**
     * The transform definitions' definition
     */
    definition?: string;
    /**
     * The transform definitions' definition type
     */
    definitionType?: string;
    /**
     * The transform definitions' readonly
     */
    readonly?: boolean;
    /**
     * The transform definitions' supported reports
     */
    supportedReports?: string;
    /**
     * The transform definitions' tax year
     */
    taxYear?: number;
    /**
     * The transform definitions' title
     */
    title?: string;
    /**
     * The transform definitions' version
     */
    version?: string;
}
/**
 * The transform definition object.
 */
export declare class TransformDefinition extends SpeakeasyBase {
    transformDefinition?: TransformDefinitionTransformDefinition;
}
