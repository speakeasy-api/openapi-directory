import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NodesCitationReadRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the node.
     */
    nodeId: string;
    /**
     * The unique identifier of the citation style.
     */
    styleId: string;
}
/**
 * The properties of the citation style entity.
 */
export declare class NodesCitationReadStyledCitationAttributes extends SpeakeasyBase {
    /**
     * The complete entity citation in the requested style.
     */
    citation?: string;
}
/**
 * OK
 */
export declare class NodesCitationReadStyledCitation extends SpeakeasyBase {
    /**
     * The properties of the citation style entity.
     */
    attributes?: NodesCitationReadStyledCitationAttributes;
    /**
     * The identifier of the citation style, e.g. APA.
     */
    id?: string;
    /**
     * The type identifier of the citation style entity (`styled-citations`).
     */
    type?: string;
}
export declare class NodesCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
