import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The category of the node, as selected by project contributors.
 */
export declare enum NodesForksCreateNodeAttributesCategoryEnum {
    Analysis = "analysis",
    Communication = "communication",
    Data = "data",
    Hypothesis = "hypothesis",
    Instrumentation = "instrumentation",
    MethodsAndMeasures = "methods and measures",
    Procedure = "procedure",
    Project = "project",
    Software = "software",
    Other = "other"
}
/**
 * The properties of the node entity.
 */
export declare class NodesForksCreateNodeAttributesInput extends SpeakeasyBase {
    /**
     * The category of the node, as selected by project contributors.
     */
    category: NodesForksCreateNodeAttributesCategoryEnum;
    /**
     * The description of the node.
     */
    description?: string;
    /**
     * A dictionary containing the metadata (copyright year and holder) associated with the node license (required for certain license types).
     */
    nodeLicense?: string;
    /**
     * Whether or not the node is publicly visible. This field is only editable by project administrators.
     */
    public?: boolean;
    /**
     * A list of strings that describe this node, as entered by project contributors.
     */
    tags?: string[];
    /**
     * The unique ID of the node from which this node was templated, if this node was created from a template.
     */
    templateFrom?: string;
    /**
     * The title of the node.
     */
    title: string;
}
export declare class NodesForksCreateNodeInput extends SpeakeasyBase {
    /**
     * The properties of the node entity.
     */
    attributes: NodesForksCreateNodeAttributesInput;
    /**
     * The type identifier of the node entity (`nodes`).
     */
    type: string;
}
export declare class NodesForksCreateRequest extends SpeakeasyBase {
    requestBody: NodesForksCreateNodeInput;
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
}
export declare class NodesForksCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
